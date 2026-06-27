const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const PORT = 4173;
const HOST = "127.0.0.1";
const ROOT = __dirname;
const JIRA_SEARCH_JQL_PATH = "/rest/api/3/search/jql";
const JIRA_SEARCH_LEGACY_PATH = "/rest/api/3/search";
const DEFAULT_PAGE_SIZE = 100;
const MAX_PAGE_SIZE = 100;
const MAX_PAGES = 1000;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8"
};

const server = http.createServer(async (request, response) => {
  try {
    const requestPath = new URL(request.url, `http://${HOST}:${PORT}`).pathname;

    if (request.method === "POST" && requestPath === "/api/jira/search") {
      await proxyJiraSearch(request, response);
      return;
    }

    if (request.method === "POST" && requestPath === "/api/jira/worklog") {
      await proxyJiraWorklog(request, response);
      return;
    }

    if (request.method === "GET" && requestPath === "/api/demo") {
      sendJson(response, 200, require("./demo-data"));
      return;
    }

    serveStaticFile(request, response);
  } catch (error) {
    sendJson(response, 500, {
      message: "Error interno del servidor local.",
      detail: error.message
    });
  }
});

function startServer() {
  if (server.listening) return server;
  server.listen(PORT, HOST, () => {
    console.log(`Jira Gantt local: http://${HOST}:${PORT}/`);
  });
  return server;
}

if (require.main === module) {
  startServer();
}

module.exports = { server, startServer };

async function proxyJiraSearch(request, response) {
  let body;
  try {
    body = await readRequestBody(request);
  } catch (error) {
    request.resume();
    sendJson(response, 413, { message: "El cuerpo de la solicitud excede el limite de 1 MB." });
    return;
  }
  const { baseUrl, user, token, jql, fields, maxResults } = JSON.parse(body || "{}");

  if (!baseUrl || !user || !token || !jql) {
    sendJson(response, 400, {
      message: "Completa URL base de Jira, usuario/email, API token y JQL."
    });
    return;
  }

  const jiraBaseUrl = String(baseUrl).replace(/\/$/, "");
  try {
    const jiraResponse = await requestAllJiraPages({
      jiraBaseUrl,
      user,
      token,
      jql,
      fields,
      maxResults
    });

    sendJson(response, 200, {
      ...jiraResponse,
      message: `Se cargaron ${jiraResponse.issues.length} issues desde Jira en ${jiraResponse.fetchedPages} pagina(s).`
    });
  } catch (error) {
    sendJson(response, error.statusCode || 502, {
      message: "No se pudo conectar con Jira desde el proxy local. Revisa la URL o tu conexion.",
      detail: error.message
    });
  }
}

async function proxyJiraWorklog(request, response) {
  let body;
  try {
    body = await readRequestBody(request);
  } catch (error) {
    request.resume();
    sendJson(response, 413, { message: "El cuerpo de la solicitud excede el limite de 1 MB." });
    return;
  }
  const { baseUrl, user, token, issueKey } = JSON.parse(body || "{}");

  if (!baseUrl || !user || !token || !issueKey) {
    sendJson(response, 400, {
      message: "Completa URL base de Jira, usuario/email, API token y ticket."
    });
    return;
  }

  const jiraBaseUrl = String(baseUrl).replace(/\/$/, "");

  try {
    const worklogs = await requestAllIssueWorklogs({
      jiraBaseUrl,
      user,
      token,
      issueKey
    });

    sendJson(response, 200, {
      issueKey,
      worklogs,
      total: worklogs.length
    });
  } catch (error) {
    sendJson(response, error.statusCode || 502, {
      message: "No se pudieron consultar los registros de tiempo del ticket.",
      detail: error.message
    });
  }
}

async function requestAllJiraPages(options) {
  const tokenResult = await requestJiraPagesWithToken(options);

  if (!shouldFallbackToStartAtPagination(tokenResult)) {
    return tokenResult;
  }

  try {
    const startAtResult = await requestJiraPagesWithStartAt(options);
    return startAtResult.issues.length >= tokenResult.issues.length ? startAtResult : tokenResult;
  } catch (error) {
    tokenResult.warning = `No se pudo usar la paginacion startAt de respaldo: ${error.message}`;
    return tokenResult;
  }
}

async function requestJiraPagesWithToken({ jiraBaseUrl, user, token, jql, fields, maxResults }) {
  const pageSize = getPageSize(maxResults);
  const issues = [];
  const seenIssues = new Set();
  let nextPageToken = "";
  let total = null;
  let isLast = false;
  let pageCount = 0;
  let sawNextPageToken = false;

  while (!isLast && pageCount < MAX_PAGES) {
    const query = {
      jql,
      maxResults: String(pageSize),
      fields: getFieldsQueryValue(fields)
    };

    if (nextPageToken) {
      query.nextPageToken = nextPageToken;
    }

    const jiraUrl = `${jiraBaseUrl}${JIRA_SEARCH_JQL_PATH}?${new URLSearchParams(query)}`;
    const data = await requestJiraJson(jiraUrl, user, token);
    const pageIssues = Array.isArray(data?.issues) ? data.issues : [];
    appendUniqueIssues(issues, pageIssues, seenIssues);

    total = Number.isFinite(data?.total) ? data.total : total;
    nextPageToken = data?.nextPageToken || "";
    sawNextPageToken = sawNextPageToken || Boolean(nextPageToken);
    pageCount += 1;

    isLast = Boolean(data?.isLast) || !nextPageToken || pageIssues.length === 0;
  }

  assertPageLimit(pageCount);

  return buildSearchResponse({
    issues,
    pageSize,
    pageCount,
    total,
    paginationStrategy: "nextPageToken",
    sawNextPageToken
  });
}

async function requestJiraPagesWithStartAt({ jiraBaseUrl, user, token, jql, fields, maxResults }) {
  const pageSize = getPageSize(maxResults);
  const issues = [];
  const seenIssues = new Set();
  let startAt = 0;
  let total = null;
  let pageCount = 0;

  while (pageCount < MAX_PAGES) {
    const query = {
      jql,
      startAt: String(startAt),
      maxResults: String(pageSize),
      fields: getFieldsQueryValue(fields)
    };

    const jiraUrl = `${jiraBaseUrl}${JIRA_SEARCH_LEGACY_PATH}?${new URLSearchParams(query)}`;
    const data = await requestJiraJson(jiraUrl, user, token);
    const pageIssues = Array.isArray(data?.issues) ? data.issues : [];
    appendUniqueIssues(issues, pageIssues, seenIssues);

    total = Number.isFinite(data?.total) ? data.total : total;
    startAt += pageIssues.length;
    pageCount += 1;

    if (pageIssues.length === 0 || (total !== null && startAt >= total) || pageIssues.length < pageSize) {
      return buildSearchResponse({
        issues,
        pageSize,
        pageCount,
        total,
        paginationStrategy: "startAt",
        sawNextPageToken: false
      });
    }
  }

  throw new Error(`Se alcanzo el limite de seguridad de ${MAX_PAGES} paginas consultando Jira.`);
}

function shouldFallbackToStartAtPagination(result) {
  if (result.paginationStrategy !== "nextPageToken") return false;
  if (result.total !== null && result.fetchedTotal < result.total) return true;
  return result.fetchedPages === 1 && result.fetchedTotal >= result.maxResults && !result.sawNextPageToken;
}

function buildSearchResponse({ issues, pageSize, pageCount, total, paginationStrategy, sawNextPageToken }) {
  return {
    expand: "",
    startAt: 0,
    maxResults: pageSize,
    total: total ?? issues.length,
    fetchedPages: pageCount,
    fetchedTotal: issues.length,
    paginationStrategy,
    sawNextPageToken,
    issues
  };
}

function getPageSize(maxResults) {
  const requestedPageSize = Number(maxResults) || DEFAULT_PAGE_SIZE;
  return Math.max(1, Math.min(requestedPageSize, MAX_PAGE_SIZE));
}

function getFieldsQueryValue(fields) {
  return Array.isArray(fields) ? fields.join(",") : "";
}

function appendUniqueIssues(target, pageIssues, seenIssues) {
  pageIssues.forEach((issue) => {
    const issueId = issue.id || issue.key;
    if (!issueId || seenIssues.has(issueId)) return;
    seenIssues.add(issueId);
    target.push(issue);
  });
}

function assertPageLimit(pageCount) {
  if (pageCount >= MAX_PAGES) {
    throw new Error(`Se alcanzo el limite de seguridad de ${MAX_PAGES} paginas consultando Jira.`);
  }
}

async function requestAllIssueWorklogs({ jiraBaseUrl, user, token, issueKey }) {
  const pageSize = 100;
  const worklogs = [];
  let startAt = 0;
  let total = null;
  let pageCount = 0;

  while (pageCount < MAX_PAGES) {
    const query = new URLSearchParams({
      startAt: String(startAt),
      maxResults: String(pageSize)
    });
    const jiraUrl = `${jiraBaseUrl}/rest/api/3/issue/${encodeURIComponent(issueKey)}/worklog?${query}`;
    const jiraResponse = await requestJira(jiraUrl, user, token);

    if (jiraResponse.statusCode < 200 || jiraResponse.statusCode >= 300) {
      const detail = tryParseJson(jiraResponse.body);
      const message = detail?.message || detail?.errorMessages?.join(" ") || `Jira respondio con HTTP ${jiraResponse.statusCode}.`;
      const error = new Error(message);
      error.statusCode = jiraResponse.statusCode;
      throw error;
    }

    const data = tryParseJson(jiraResponse.body);
    const pageWorklogs = Array.isArray(data?.worklogs) ? data.worklogs : [];
    worklogs.push(...pageWorklogs);

    total = Number.isFinite(data?.total) ? data.total : total;
    startAt += pageWorklogs.length;
    pageCount += 1;

    if (pageWorklogs.length === 0 || (total !== null && worklogs.length >= total) || pageWorklogs.length < pageSize) {
      return worklogs;
    }
  }

  throw new Error(`Se alcanzo el limite de seguridad de ${MAX_PAGES} paginas consultando worklogs.`);
}

async function requestJiraJson(jiraUrl, user, token) {
  const jiraResponse = await requestJira(jiraUrl, user, token);

  if (jiraResponse.statusCode < 200 || jiraResponse.statusCode >= 300) {
    const detail = tryParseJson(jiraResponse.body);
    const message = detail?.message || detail?.errorMessages?.join(" ") || `Jira respondio con HTTP ${jiraResponse.statusCode}.`;
    const error = new Error(message);
    error.statusCode = jiraResponse.statusCode;
    throw error;
  }

  return tryParseJson(jiraResponse.body) || {};
}

function tryParseJson(value) {
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

function requestJira(jiraUrl, user, token) {
  return new Promise((resolve, reject) => {
    const url = new URL(jiraUrl);
    const request = https.request({
      hostname: url.hostname,
      port: url.port || 443,
      path: `${url.pathname}${url.search}`,
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString("base64")}`
      },
      // Prototipo local: permite redes corporativas con inspeccion TLS.
      // En produccion instala la CA real o usa NODE_EXTRA_CA_CERTS.
      rejectUnauthorized: false,
      timeout: 20000
    }, (jiraResponse) => {
      let body = "";

      jiraResponse.setEncoding("utf8");
      jiraResponse.on("data", (chunk) => {
        body += chunk;
      });
      jiraResponse.on("end", () => {
        resolve({
          statusCode: jiraResponse.statusCode || 500,
          contentType: jiraResponse.headers["content-type"] || "application/json; charset=utf-8",
          body
        });
      });
    });

    request.on("timeout", () => {
      request.destroy(new Error("Tiempo de espera agotado consultando Jira."));
    });
    request.on("error", reject);
    request.end();
  });
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    });
  response.end(JSON.stringify(payload));
}

function serveStaticFile(request, response) {
  const url = new URL(request.url, `http://${HOST}:${PORT}`);
  const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = path.normalize(path.join(ROOT, requestedPath));

  if (!filePath.startsWith(ROOT)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": contentTypes[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(content);
  });
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    let rejected = false;

    request.on("data", (chunk) => {
      if (rejected) return;
      body += chunk;

      if (body.length > 1024 * 1024) {
        rejected = true;
        reject(new Error("Request demasiado grande."));
      }
    });

    request.on("end", () => {
      if (!rejected) resolve(body);
    });
    request.on("error", (err) => {
      if (!rejected) reject(err);
    });
  });
}
