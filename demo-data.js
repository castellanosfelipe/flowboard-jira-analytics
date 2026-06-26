// Fixture data — Jira REST API format — loaded by GET /api/demo
// Sprint 15, Engineering team, week of June 26 2026

const h = (n) => n * 3600; // hours → seconds

const SPRINT_15 = [{ id: 15, name: "Sprint 15", startDate: "2026-06-10T08:00:00.000Z", endDate: "2026-06-27T18:00:00.000Z", state: "active" }];
const SPRINT_14 = [{ id: 14, name: "Sprint 14", startDate: "2026-05-27T08:00:00.000Z", endDate: "2026-06-09T18:00:00.000Z", state: "closed" }];

const BLOCK = { id: "10000", name: "Blocks", inward: "is blocked by", outward: "blocks" };

function out(key, summary = "", status = "In Progress") {
  return { id: `lo-${key}`, type: BLOCK, outwardIssue: { key, fields: { summary, status: { name: status }, issuetype: { name: "Story" } } } };
}

function wl(id, author, date, hours, comment) {
  return { id, author: { displayName: author }, started: `${date}T10:00:00.000+0000`, timeSpentSeconds: h(hours), timeSpent: `${hours}h`, comment };
}

function epic(key, summary) {
  return { key, fields: { summary, issuetype: { name: "Epic", subtask: false }, status: { name: "In Progress" } } };
}
function story(key, summary) {
  return { key, fields: { summary, issuetype: { name: "Story", subtask: false }, status: { name: "In Progress" } } };
}

// ─── Epics (parents for principal grouping) ──────────────────────────
const EPIC_MICRO   = epic("ENG-100", "Migración a microservicios");
const EPIC_API     = epic("ENG-101", "Rediseño de API pública v3");
const EPIC_PERF    = epic("ENG-102", "Mejoras de rendimiento Q2");

// ─── Stories ────────────────────────────────────────────────────────
const STORY_11 = story("ENG-11", "Implementar API Gateway");
const STORY_22 = story("ENG-22", "Autenticación OAuth 2.0");
const STORY_31 = story("ENG-31", "Optimizar queries N+1 en ORM");

const ISSUES = [
  // ── Epic: Migración a microservicios ──────────────────────────────

  {
    id: "10010", key: "ENG-10",
    fields: {
      summary: "Diseñar arquitectura del servicio de autenticación",
      status: { name: "Done" }, assignee: { displayName: "Ana García" },
      issuetype: { name: "Story", subtask: false }, priority: { name: "High" },
      project: { key: "ENG", name: "Engineering" }, parent: EPIC_MICRO,
      created: "2026-06-01T09:00:00.000+0000", updated: "2026-06-14T17:00:00.000+0000",
      duedate: "2026-06-14", customfield_10015: "2026-06-10",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(12), timespent: h(11), timeestimate: 0,
      timetracking: { originalEstimate: "12h", timeSpent: "11h", remainingEstimate: "0h", originalEstimateSeconds: h(12), timeSpentSeconds: h(11), remainingEstimateSeconds: 0 },
      issuelinks: [out("ENG-11", STORY_11.fields.summary, "In Progress")],
      worklog: { total: 2, worklogs: [
        wl("w001", "Ana García", "2026-06-11", 6, "Definición de contratos y diagramas de secuencia"),
        wl("w002", "Ana García", "2026-06-13", 5, "Revisión de arquitectura con el equipo")
      ]}
    }
  },

  {
    id: "10011", key: "ENG-11",
    fields: {
      summary: "Implementar API Gateway",
      status: { name: "In Progress" }, assignee: { displayName: "Carlos Méndez" },
      issuetype: { name: "Story", subtask: false }, priority: { name: "High" },
      project: { key: "ENG", name: "Engineering" }, parent: EPIC_MICRO,
      created: "2026-06-08T09:00:00.000+0000", updated: "2026-06-25T16:00:00.000+0000",
      duedate: "2026-06-26", customfield_10015: "2026-06-12",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(24), timespent: h(20), timeestimate: h(6),
      timetracking: { originalEstimate: "24h", timeSpent: "20h", remainingEstimate: "6h", originalEstimateSeconds: h(24), timeSpentSeconds: h(20), remainingEstimateSeconds: h(6) },
      issuelinks: [out("ENG-12", "Configurar service mesh Istio", "Blocked"), out("ENG-13", "Migrar servicio de usuarios", "To Do")],
      worklog: { total: 3, worklogs: [
        wl("w010", "Carlos Méndez", "2026-06-13", 8, "Implementación del router y middleware de auth"),
        wl("w011", "Carlos Méndez", "2026-06-18", 6, "Circuit breaker y retry logic"),
        wl("w012", "Carlos Méndez", "2026-06-24", 6, "Load balancing y health checks")
      ]}
    }
  },

  {
    id: "10012", key: "ENG-12",
    fields: {
      summary: "Configurar service mesh con Istio",
      status: { name: "Blocked" }, assignee: { displayName: "María López" },
      issuetype: { name: "Story", subtask: false }, priority: { name: "High" },
      project: { key: "ENG", name: "Engineering" }, parent: EPIC_MICRO,
      created: "2026-06-01T09:00:00.000+0000", updated: "2026-06-20T11:00:00.000+0000",
      duedate: "2026-06-21", customfield_10015: "2026-06-15",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(20), timespent: h(5), timeestimate: h(18),
      timetracking: { originalEstimate: "20h", timeSpent: "5h", remainingEstimate: "18h", originalEstimateSeconds: h(20), timeSpentSeconds: h(5), remainingEstimateSeconds: h(18) },
      issuelinks: [out("ENG-13", "Migrar servicio de usuarios", "To Do")],
      worklog: { total: 1, worklogs: [
        wl("w020", "María López", "2026-06-16", 5, "Setup inicial de Istio en staging — bloqueado por permisos de cluster")
      ]}
    }
  },

  {
    id: "10013", key: "ENG-13",
    fields: {
      summary: "Migrar servicio de usuarios al nuevo stack",
      status: { name: "To Do" }, assignee: { displayName: "Carlos Méndez" },
      issuetype: { name: "Story", subtask: false }, priority: { name: "Medium" },
      project: { key: "ENG", name: "Engineering" }, parent: EPIC_MICRO,
      created: "2026-06-08T09:00:00.000+0000", updated: "2026-06-08T09:00:00.000+0000",
      duedate: "2026-07-04", customfield_10015: "2026-06-28",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(32), timespent: 0, timeestimate: h(32),
      timetracking: { originalEstimate: "32h", timeSpent: "0h", remainingEstimate: "32h", originalEstimateSeconds: h(32), timeSpentSeconds: 0, remainingEstimateSeconds: h(32) },
      issuelinks: [], worklog: { total: 0, worklogs: [] }
    }
  },

  // ── Epic: Rediseño de API pública v3 ─────────────────────────────

  {
    id: "10020", key: "ENG-20",
    fields: {
      summary: "Diseñar schema GraphQL para la API pública",
      status: { name: "Done" }, assignee: { displayName: "Sofia Torres" },
      issuetype: { name: "Story", subtask: false }, priority: { name: "Medium" },
      project: { key: "ENG", name: "Engineering" }, parent: EPIC_API,
      created: "2026-06-01T09:00:00.000+0000", updated: "2026-06-16T18:00:00.000+0000",
      duedate: "2026-06-16", customfield_10015: "2026-06-10",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(8), timespent: h(9), timeestimate: 0,
      timetracking: { originalEstimate: "8h", timeSpent: "9h", remainingEstimate: "0h", originalEstimateSeconds: h(8), timeSpentSeconds: h(9), remainingEstimateSeconds: 0 },
      issuelinks: [out("ENG-21", "Implementar resolvers GraphQL", "In Progress")],
      worklog: { total: 2, worklogs: [
        wl("w030", "Sofia Torres", "2026-06-11", 4, "Schema base con tipos y queries"),
        wl("w031", "Sofia Torres", "2026-06-15", 5, "Mutations, subscriptions y directivas custom")
      ]}
    }
  },

  {
    id: "10021", key: "ENG-21",
    fields: {
      summary: "Implementar resolvers y DataLoaders GraphQL",
      status: { name: "In Progress" }, assignee: { displayName: "Sofia Torres" },
      issuetype: { name: "Story", subtask: false }, priority: { name: "High" },
      project: { key: "ENG", name: "Engineering" }, parent: EPIC_API,
      created: "2026-06-08T09:00:00.000+0000", updated: "2026-06-25T15:00:00.000+0000",
      duedate: "2026-06-26", customfield_10015: "2026-06-17",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(16), timespent: h(19), timeestimate: h(4),
      timetracking: { originalEstimate: "16h", timeSpent: "19h", remainingEstimate: "4h", originalEstimateSeconds: h(16), timeSpentSeconds: h(19), remainingEstimateSeconds: h(4) },
      issuelinks: [out("ENG-23", "Rate limiting y throttling", "To Do"), out("ENG-24", "Documentación OpenAPI 3.0", "To Do")],
      worklog: { total: 3, worklogs: [
        wl("w040", "Sofia Torres", "2026-06-18", 8, "Query resolvers con DataLoader para N+1"),
        wl("w041", "Sofia Torres", "2026-06-22", 6, "Mutation resolvers y validación de inputs"),
        wl("w042", "Sofia Torres", "2026-06-25", 5, "Optimización de queries anidadas")
      ]}
    }
  },

  {
    id: "10022", key: "ENG-22",
    fields: {
      summary: "Autenticación OAuth 2.0 con refresh tokens",
      status: { name: "In Progress" }, assignee: { displayName: "Ana García" },
      issuetype: { name: "Story", subtask: false }, priority: { name: "High" },
      project: { key: "ENG", name: "Engineering" }, parent: EPIC_API,
      created: "2026-06-08T09:00:00.000+0000", updated: "2026-06-25T14:00:00.000+0000",
      duedate: "2026-06-27", customfield_10015: "2026-06-14",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(12), timespent: h(8), timeestimate: h(5),
      timetracking: { originalEstimate: "12h", timeSpent: "8h", remainingEstimate: "5h", originalEstimateSeconds: h(12), timeSpentSeconds: h(8), remainingEstimateSeconds: h(5) },
      issuelinks: [], worklog: { total: 2, worklogs: [
        wl("w050", "Ana García", "2026-06-15", 5, "JWT middleware e integración con identity provider"),
        wl("w051", "Ana García", "2026-06-23", 3, "PKCE flow para clientes públicos")
      ]}
    }
  },

  {
    id: "10023", key: "ENG-23",
    fields: {
      summary: "Rate limiting y throttling por cliente",
      status: { name: "To Do" }, assignee: { displayName: "Diego Ruiz" },
      issuetype: { name: "Task", subtask: false }, priority: { name: "Medium" },
      project: { key: "ENG", name: "Engineering" }, parent: EPIC_API,
      created: "2026-06-21T09:00:00.000+0000", updated: "2026-06-21T09:00:00.000+0000",
      duedate: "2026-06-30", customfield_10015: "2026-06-25",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(8), timespent: 0, timeestimate: h(8),
      timetracking: { originalEstimate: "8h", timeSpent: "0h", remainingEstimate: "8h", originalEstimateSeconds: h(8), timeSpentSeconds: 0, remainingEstimateSeconds: h(8) },
      issuelinks: [], worklog: { total: 0, worklogs: [] }
    }
  },

  {
    id: "10024", key: "ENG-24",
    fields: {
      summary: "Documentación OpenAPI 3.0 y guía de integración",
      status: { name: "To Do" }, assignee: { displayName: "Diego Ruiz" },
      issuetype: { name: "Task", subtask: false }, priority: { name: "Low" },
      project: { key: "ENG", name: "Engineering" }, parent: EPIC_API,
      created: "2026-06-22T09:00:00.000+0000", updated: "2026-06-22T09:00:00.000+0000",
      duedate: "2026-07-03", customfield_10015: "2026-06-26",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(6), timespent: 0, timeestimate: h(6),
      timetracking: { originalEstimate: "6h", timeSpent: "0h", remainingEstimate: "6h", originalEstimateSeconds: h(6), timeSpentSeconds: 0, remainingEstimateSeconds: h(6) },
      issuelinks: [], worklog: { total: 0, worklogs: [] }
    }
  },

  // ── Epic: Mejoras de rendimiento Q2 ──────────────────────────────

  {
    id: "10030", key: "ENG-30",
    fields: {
      summary: "Análisis de cuellos de botella en base de datos",
      status: { name: "Done" }, assignee: { displayName: "María López" },
      issuetype: { name: "Task", subtask: false }, priority: { name: "High" },
      project: { key: "ENG", name: "Engineering" }, parent: EPIC_PERF,
      created: "2026-06-01T09:00:00.000+0000", updated: "2026-06-15T17:00:00.000+0000",
      duedate: "2026-06-15", customfield_10015: "2026-06-10",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(10), timespent: h(8), timeestimate: 0,
      timetracking: { originalEstimate: "10h", timeSpent: "8h", remainingEstimate: "0h", originalEstimateSeconds: h(10), timeSpentSeconds: h(8), remainingEstimateSeconds: 0 },
      issuelinks: [out("ENG-31", STORY_31.fields.summary, "In Progress")],
      worklog: { total: 2, worklogs: [
        wl("w060", "María López", "2026-06-11", 4, "Slow query log analysis con pg_stat_statements"),
        wl("w061", "María López", "2026-06-14", 4, "Informe de queries críticas y propuesta de índices")
      ]}
    }
  },

  {
    id: "10031", key: "ENG-31",
    fields: {
      summary: "Optimizar queries N+1 en ORM",
      status: { name: "In Progress" }, assignee: { displayName: "María López" },
      issuetype: { name: "Task", subtask: false }, priority: { name: "High" },
      project: { key: "ENG", name: "Engineering" }, parent: EPIC_PERF,
      created: "2026-06-08T09:00:00.000+0000", updated: "2026-06-25T16:00:00.000+0000",
      duedate: "2026-06-26", customfield_10015: "2026-06-16",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(20), timespent: h(14), timeestimate: h(8),
      timetracking: { originalEstimate: "20h", timeSpent: "14h", remainingEstimate: "8h", originalEstimateSeconds: h(20), timeSpentSeconds: h(14), remainingEstimateSeconds: h(8) },
      issuelinks: [out("ENG-32", "Implementar Redis cache layer", "To Do")],
      worklog: { total: 3, worklogs: [
        wl("w070", "María López", "2026-06-17", 5, "Refactor de eager loading en módulo de usuarios"),
        wl("w071", "María López", "2026-06-21", 5, "Batch queries para reportes de dashboard"),
        wl("w072", "María López", "2026-06-25", 4, "Optimización de joins en módulo de proyectos")
      ]}
    }
  },

  {
    id: "10032", key: "ENG-32",
    fields: {
      summary: "Implementar Redis cache layer para consultas frecuentes",
      status: { name: "To Do" }, assignee: { displayName: "Carlos Méndez" },
      issuetype: { name: "Task", subtask: false }, priority: { name: "Medium" },
      project: { key: "ENG", name: "Engineering" }, parent: EPIC_PERF,
      created: "2026-06-15T09:00:00.000+0000", updated: "2026-06-15T09:00:00.000+0000",
      duedate: "2026-07-07", customfield_10015: "2026-06-28",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(16), timespent: 0, timeestimate: h(16),
      timetracking: { originalEstimate: "16h", timeSpent: "0h", remainingEstimate: "16h", originalEstimateSeconds: h(16), timeSpentSeconds: 0, remainingEstimateSeconds: h(16) },
      issuelinks: [], worklog: { total: 0, worklogs: [] }
    }
  },

  {
    id: "10033", key: "ENG-33",
    fields: {
      summary: "Reducir bundle size del frontend en 40%",
      status: { name: "Blocked" }, assignee: { displayName: "Sofia Torres" },
      issuetype: { name: "Task", subtask: false }, priority: { name: "Medium" },
      project: { key: "ENG", name: "Engineering" }, parent: EPIC_PERF,
      created: "2026-06-08T09:00:00.000+0000", updated: "2026-06-22T10:00:00.000+0000",
      duedate: "2026-06-20", customfield_10015: "2026-06-14",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(12), timespent: h(7), timeestimate: h(8),
      timetracking: { originalEstimate: "12h", timeSpent: "7h", remainingEstimate: "8h", originalEstimateSeconds: h(12), timeSpentSeconds: h(7), remainingEstimateSeconds: h(8) },
      issuelinks: [out("ENG-43", "Pruebas de carga con k6", "To Do")],
      worklog: { total: 1, worklogs: [
        wl("w080", "Sofia Torres", "2026-06-15", 7, "Tree shaking y code splitting — bloqueado por falta de acceso a CDN de staging")
      ]}
    }
  },

  // ── Standalone tasks ──────────────────────────────────────────────

  {
    id: "10040", key: "ENG-40",
    fields: {
      summary: "Actualizar dependencias con vulnerabilidades de seguridad",
      status: { name: "In Progress" }, assignee: { displayName: "Diego Ruiz" },
      issuetype: { name: "Task", subtask: false }, priority: { name: "High" },
      project: { key: "ENG", name: "Engineering" }, parent: null,
      created: "2026-05-18T09:00:00.000+0000", updated: "2026-06-10T11:00:00.000+0000",
      duedate: "2026-06-18", customfield_10015: "2026-05-18",
      customfield_10020: [...SPRINT_14, ...SPRINT_15],
      timeoriginalestimate: h(4), timespent: h(1), timeestimate: h(6),
      timetracking: { originalEstimate: "4h", timeSpent: "1h", remainingEstimate: "6h", originalEstimateSeconds: h(4), timeSpentSeconds: h(1), remainingEstimateSeconds: h(6) },
      issuelinks: [], worklog: { total: 1, worklogs: [
        wl("w090", "Diego Ruiz", "2026-06-10", 1, "npm audit — 14 vulnerabilidades críticas detectadas, actualizando lodash y axios")
      ]}
    }
  },

  {
    id: "10041", key: "ENG-41",
    fields: {
      summary: "Revisión de logs de errores 500 en producción",
      status: { name: "To Do" }, assignee: { displayName: "Ana García" },
      issuetype: { name: "Task", subtask: false }, priority: { name: "Medium" },
      project: { key: "ENG", name: "Engineering" }, parent: null,
      created: "2026-05-13T09:00:00.000+0000", updated: "2026-05-13T09:00:00.000+0000",
      duedate: "2026-07-10", customfield_10015: "2026-06-26",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(2), timespent: 0, timeestimate: h(2),
      timetracking: { originalEstimate: "2h", timeSpent: "0h", remainingEstimate: "2h", originalEstimateSeconds: h(2), timeSpentSeconds: 0, remainingEstimateSeconds: h(2) },
      issuelinks: [], worklog: { total: 0, worklogs: [] }
    }
  },

  {
    id: "10042", key: "ENG-42",
    fields: {
      summary: "Setup CI/CD pipeline para arquitectura de microservicios",
      status: { name: "Blocked" }, assignee: { displayName: "Carlos Méndez" },
      issuetype: { name: "Task", subtask: false }, priority: { name: "Critical" },
      project: { key: "ENG", name: "Engineering" }, parent: null,
      created: "2026-06-05T09:00:00.000+0000", updated: "2026-06-20T09:00:00.000+0000",
      duedate: "2026-06-17", customfield_10015: "2026-06-05",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(16), timespent: h(8), timeestimate: h(12),
      timetracking: { originalEstimate: "16h", timeSpent: "8h", remainingEstimate: "12h", originalEstimateSeconds: h(16), timeSpentSeconds: h(8), remainingEstimateSeconds: h(12) },
      issuelinks: [out("ENG-11", STORY_11.fields.summary, "In Progress"), out("ENG-31", STORY_31.fields.summary, "In Progress")],
      worklog: { total: 1, worklogs: [
        wl("w100", "Carlos Méndez", "2026-06-10", 8, "GitHub Actions workflows — bloqueado por acceso a registry privado de la empresa")
      ]}
    }
  },

  {
    id: "10043", key: "ENG-43",
    fields: {
      summary: "Pruebas de carga con k6 en entorno de staging",
      status: { name: "To Do" }, assignee: { displayName: "Diego Ruiz" },
      issuetype: { name: "Task", subtask: false }, priority: { name: "Medium" },
      project: { key: "ENG", name: "Engineering" }, parent: null,
      created: "2026-06-22T09:00:00.000+0000", updated: "2026-06-22T09:00:00.000+0000",
      duedate: "2026-07-04", customfield_10015: "2026-06-27",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(12), timespent: 0, timeestimate: h(12),
      timetracking: { originalEstimate: "12h", timeSpent: "0h", remainingEstimate: "12h", originalEstimateSeconds: h(12), timeSpentSeconds: 0, remainingEstimateSeconds: h(12) },
      issuelinks: [], worklog: { total: 0, worklogs: [] }
    }
  },

  {
    id: "10044", key: "ENG-44",
    fields: {
      summary: "Actualizar runbooks de deployment y guías de operación",
      status: { name: "To Do" }, assignee: { displayName: "María López" },
      issuetype: { name: "Task", subtask: false }, priority: { name: "Low" },
      project: { key: "ENG", name: "Engineering" }, parent: null,
      created: "2026-06-22T09:00:00.000+0000", updated: "2026-06-22T09:00:00.000+0000",
      duedate: "2026-07-10", customfield_10015: "2026-06-27",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(4), timespent: 0, timeestimate: h(4),
      timetracking: { originalEstimate: "4h", timeSpent: "0h", remainingEstimate: "4h", originalEstimateSeconds: h(4), timeSpentSeconds: 0, remainingEstimateSeconds: h(4) },
      issuelinks: [], worklog: { total: 0, worklogs: [] }
    }
  },

  {
    id: "10045", key: "ENG-45",
    fields: {
      summary: "Auditoría de seguridad de endpoints de la API",
      status: { name: "In Progress" }, assignee: { displayName: "Ana García" },
      issuetype: { name: "Task", subtask: false }, priority: { name: "Critical" },
      project: { key: "ENG", name: "Engineering" }, parent: null,
      created: "2026-06-12T09:00:00.000+0000", updated: "2026-06-25T09:00:00.000+0000",
      duedate: "2026-06-22", customfield_10015: "2026-06-12",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(8), timespent: h(5), timeestimate: h(5),
      timetracking: { originalEstimate: "8h", timeSpent: "5h", remainingEstimate: "5h", originalEstimateSeconds: h(8), timeSpentSeconds: h(5), remainingEstimateSeconds: h(5) },
      issuelinks: [], worklog: { total: 2, worklogs: [
        wl("w110", "Ana García", "2026-06-13", 3, "OWASP Top 10 checklist — SQL injection, XSS, CSRF"),
        wl("w111", "Ana García", "2026-06-24", 2, "Revisión de cabeceras de seguridad y CORS policy")
      ]}
    }
  },

  // ── Subtasks ──────────────────────────────────────────────────────

  {
    id: "10050", key: "ENG-50",
    fields: {
      summary: "Implementar JWT middleware y validación de tokens",
      status: { name: "Done" }, assignee: { displayName: "Ana García" },
      issuetype: { name: "Subtask", subtask: true }, priority: { name: "High" },
      project: { key: "ENG", name: "Engineering" }, parent: STORY_22,
      created: "2026-06-14T09:00:00.000+0000", updated: "2026-06-18T18:00:00.000+0000",
      duedate: "2026-06-18", customfield_10015: "2026-06-14",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(6), timespent: h(5), timeestimate: 0,
      timetracking: { originalEstimate: "6h", timeSpent: "5h", remainingEstimate: "0h", originalEstimateSeconds: h(6), timeSpentSeconds: h(5), remainingEstimateSeconds: 0 },
      issuelinks: [], worklog: { total: 1, worklogs: [
        wl("w120", "Ana García", "2026-06-16", 5, "JWT decode, verify y refresh token middleware")
      ]}
    }
  },

  {
    id: "10051", key: "ENG-51",
    fields: {
      summary: "Lógica de refresh tokens y rotación segura",
      status: { name: "In Progress" }, assignee: { displayName: "Ana García" },
      issuetype: { name: "Subtask", subtask: true }, priority: { name: "High" },
      project: { key: "ENG", name: "Engineering" }, parent: STORY_22,
      created: "2026-06-19T09:00:00.000+0000", updated: "2026-06-25T16:00:00.000+0000",
      duedate: "2026-06-27", customfield_10015: "2026-06-19",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(6), timespent: h(5), timeestimate: h(2),
      timetracking: { originalEstimate: "6h", timeSpent: "5h", remainingEstimate: "2h", originalEstimateSeconds: h(6), timeSpentSeconds: h(5), remainingEstimateSeconds: h(2) },
      issuelinks: [], worklog: { total: 1, worklogs: [
        wl("w130", "Ana García", "2026-06-23", 5, "Token rotation con detección de reutilización")
      ]}
    }
  },

  {
    id: "10052", key: "ENG-52",
    fields: {
      summary: "Definir endpoints y contratos del API Gateway",
      status: { name: "Done" }, assignee: { displayName: "Diego Ruiz" },
      issuetype: { name: "Subtask", subtask: true }, priority: { name: "Medium" },
      project: { key: "ENG", name: "Engineering" }, parent: STORY_11,
      created: "2026-06-12T09:00:00.000+0000", updated: "2026-06-15T18:00:00.000+0000",
      duedate: "2026-06-15", customfield_10015: "2026-06-12",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(4), timespent: h(4), timeestimate: 0,
      timetracking: { originalEstimate: "4h", timeSpent: "4h", remainingEstimate: "0h", originalEstimateSeconds: h(4), timeSpentSeconds: h(4), remainingEstimateSeconds: 0 },
      issuelinks: [], worklog: { total: 1, worklogs: [
        wl("w140", "Diego Ruiz", "2026-06-13", 4, "Documentación de rutas, parámetros y códigos de respuesta")
      ]}
    }
  },

  {
    id: "10053", key: "ENG-53",
    fields: {
      summary: "Tests de integración end-to-end del API Gateway",
      status: { name: "In Progress" }, assignee: { displayName: "Diego Ruiz" },
      issuetype: { name: "Subtask", subtask: true }, priority: { name: "Medium" },
      project: { key: "ENG", name: "Engineering" }, parent: STORY_11,
      created: "2026-06-18T09:00:00.000+0000", updated: "2026-06-25T14:00:00.000+0000",
      duedate: "2026-06-26", customfield_10015: "2026-06-18",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(8), timespent: h(6), timeestimate: h(3),
      timetracking: { originalEstimate: "8h", timeSpent: "6h", remainingEstimate: "3h", originalEstimateSeconds: h(8), timeSpentSeconds: h(6), remainingEstimateSeconds: h(3) },
      issuelinks: [], worklog: { total: 2, worklogs: [
        wl("w150", "Diego Ruiz", "2026-06-20", 4, "Suite de tests con Supertest — happy path"),
        wl("w151", "Diego Ruiz", "2026-06-25", 2, "Edge cases y manejo de errores 4xx/5xx")
      ]}
    }
  },

  {
    id: "10054", key: "ENG-54",
    fields: {
      summary: "Identificar y documentar queries N+1 problemáticas",
      status: { name: "Done" }, assignee: { displayName: "María López" },
      issuetype: { name: "Subtask", subtask: true }, priority: { name: "High" },
      project: { key: "ENG", name: "Engineering" }, parent: STORY_31,
      created: "2026-06-16T09:00:00.000+0000", updated: "2026-06-19T17:00:00.000+0000",
      duedate: "2026-06-19", customfield_10015: "2026-06-16",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(4), timespent: h(3), timeestimate: 0,
      timetracking: { originalEstimate: "4h", timeSpent: "3h", remainingEstimate: "0h", originalEstimateSeconds: h(4), timeSpentSeconds: h(3), remainingEstimateSeconds: 0 },
      issuelinks: [], worklog: { total: 1, worklogs: [
        wl("w160", "María López", "2026-06-17", 3, "Profiling con Django Debug Toolbar — 23 queries N+1 mapeadas")
      ]}
    }
  },

  {
    id: "10055", key: "ENG-55",
    fields: {
      summary: "Refactorizar ORM queries con select_related y prefetch_related",
      status: { name: "In Progress" }, assignee: { displayName: "María López" },
      issuetype: { name: "Subtask", subtask: true }, priority: { name: "High" },
      project: { key: "ENG", name: "Engineering" }, parent: STORY_31,
      created: "2026-06-20T09:00:00.000+0000", updated: "2026-06-25T16:00:00.000+0000",
      duedate: "2026-06-26", customfield_10015: "2026-06-20",
      customfield_10020: SPRINT_15,
      timeoriginalestimate: h(16), timespent: h(11), timeestimate: h(7),
      timetracking: { originalEstimate: "16h", timeSpent: "11h", remainingEstimate: "7h", originalEstimateSeconds: h(16), timeSpentSeconds: h(11), remainingEstimateSeconds: h(7) },
      issuelinks: [], worklog: { total: 2, worklogs: [
        wl("w170", "María López", "2026-06-21", 6, "Módulos de usuarios, proyectos y sprints refactorizados"),
        wl("w171", "María López", "2026-06-25", 5, "Módulo de issues y worklogs — 89% reducción en queries")
      ]}
    }
  }
];

const DEMO_DATA = {
  expand: "",
  startAt: 0,
  maxResults: 100,
  total: ISSUES.length,
  fetchedPages: 1,
  fetchedTotal: ISSUES.length,
  issues: ISSUES,
  message: `Demo: ${ISSUES.length} issues del proyecto ENG — Sprint 15`
};

// UMD: funciona con require() en el servidor Node y como global en el navegador
// (GitHub Pages no tiene servidor, así que el demo se carga desde esta variable).
if (typeof module !== "undefined" && module.exports) {
  module.exports = DEMO_DATA;
} else if (typeof window !== "undefined") {
  window.DEMO_DATA = DEMO_DATA;
}
