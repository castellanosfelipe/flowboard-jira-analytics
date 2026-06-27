const START_DATE_FIELD = "customfield_10015";
const END_DATE_FIELD = "duedate";
const SPRINT_FIELD = "customfield_10020";
const DAY_IN_MS = 24 * 60 * 60 * 1000;
const BATCH_SIZE = 90;
const AGING_BUCKET_PAGE_SIZE = 10;
const PERT_MAX_NODES = 180;
const PERT_NODE_WIDTH = 248;
const PERT_NODE_HEIGHT = 158;
const PERT_COLUMN_GAP = 120;
const PERT_ROW_GAP = 20;
const ZOOM_LEVELS = ["today", "week", "month", "quarter"];
const CONNECTION_STORAGE_KEY = "jira-gantt-connection";
const TOKEN_SESSION_KEY = "jira-gantt-session-token";
const LANGUAGE_STORAGE_KEY = "jira-gantt-language";

const JIRA_FIELDS = [
  "summary",
  "status",
  "assignee",
  "issuetype",
  "priority",
  "project",
  "created",
  "updated",
  "parent",
  "duedate",
  "timetracking",
  "timeoriginalestimate",
  "timeestimate",
  "timespent",
  "issuelinks",
  "worklog",
  START_DATE_FIELD,
  END_DATE_FIELD,
  SPRINT_FIELD,
  "*all"
];

const I18N = {
  es: {
    projectTimeline: "Linea de tiempo del proyecto",
    subtitle: "Consulta, filtra y visualiza tickets por usuario, tarea y subtarea.",
    mainActions: "Acciones principales",
    changeView: "Cambiar vista",
    pert: "PERT",
    pertPanel: "Red de dependencias",
    pertTitle: "Diagrama PERT",
    pertDescription: "Visualiza actividades vinculadas e identifica cuellos de botella.",
    pertInitialDescription: "Consulta Jira para construir la red de dependencias.",
    linkedActivities: "Actividades vinculadas",
    dependencies: "Dependencias",
    bottlenecks: "Cuellos de botella",
    detectedBottlenecks: "Cuellos de botella detectados",
    bottleneckHelp: "Actividades que pueden afectar el flujo por bloqueos, vencimientos o dependencias aguas abajo.",
    noPertDependencies: "No hay dependencias visibles con los filtros actuales.",
    executiveDashboard: "Tablero ejecutivo",
    theme: "Tema",
    lightTheme: "Tema claro",
    darkTheme: "Tema oscuro",
    language: "Idioma",
    searchJira: "Consultar Jira",
    refreshData: "Refrescar datos",
    jiraConfig: "Configuracion de Jira",
    configHelp: "Mostrar u ocultar credenciales, URL base y JQL.",
    baseUrl: "URL base de Jira",
    userOrEmail: "Email o usuario",
    apiToken: "API Token",
    tokenPlaceholder: "Ingresa el token manualmente",
    jqlSearch: "JQL de busqueda",
    connectionNote: "URL, usuario y JQL se guardan en este navegador. El token solo se recuerda durante la sesion local actual.",
    securityWarningTitle: "Advertencia de seguridad:",
    securityWarning: "este prototipo envia credenciales desde el navegador hacia un proxy local. En produccion, el token debe vivir solo en un backend seguro o secret manager.",
    filters: "Filtros",
    showFilters: "Mostrar filtros",
    hideFilters: "Ocultar filtros",
    noDataLoaded: "Sin datos cargados.",
    activeFilters: "0 filtros activos",
    clearFilters: "Limpiar filtros",
    quickSearch: "Busqueda rapida",
    quickSearchPlaceholder: "Buscar por clave, tarea o texto parcial",
    assignee: "Usuario asignado",
    hideAssignees: "Ocultar usuarios",
    status: "Estado",
    startFrom: "Fecha inicio desde",
    endUntil: "Fecha fin hasta",
    dateRange: "Rango de fecha",
    allDates: "Todas las fechas",
    fromDate: "Desde",
    toDate: "Hasta",
    ticketDetail: "Seguimiento diario",
    visibleTicketDetail: "Detalle de tickets visibles en Gantt",
    noVisibleTickets: "No hay tickets visibles con los filtros actuales.",
    noActivePendingTickets: "No hay tickets por hacer, en curso, pendientes o finalizados con los filtros actuales.",
    missingEstimateTitle: "Pendientes por estimar",
    missingEstimateDetail: "Responsables con tickets pendientes por estimar",
    noMissingEstimates: "No hay tickets visibles pendientes por fecha o estimacion original.",
    missingEstimateRows: "responsables con pendientes",
    visibleAssignees: "responsables visibles",
    pendingTotal: "Total pendientes",
    missingStartDate: "Sin start date",
    missingDueDate: "Sin fecha vencimiento",
    missingOriginalEstimate: "Sin estimacion original",
    viewTickets: "Ver tickets",
    visibleRows: "filas visibles",
    ticket: "Ticket",
    description: "Descripcion",
    principal: "Principal",
    state: "Estado",
    startDay: "Start day",
    dueDate: "Fecha de vencimiento",
    originalEstimate: "Estimacion original",
    timeTracking: "Seguimiento de tiempo",
    timeLogs: "Registros",
    viewLogs: "Ver registros",
    hideLogs: "Ocultar",
    loadingLogs: "Cargando registros...",
    noTimeLogs: "Este ticket no tiene registros de tiempo.",
    noLoggedHours: "Este ticket no tiene horas registradas en Jira.",
    worklogDescription: "Descripcion",
    worklogDate: "Fecha y hora registro",
    worklogHours: "Horas registradas",
    noSpentTime: "Sin horas registradas",
    noSpentTimeWithRemaining: "Sin horas registradas | Restante: {remaining}",
    sortAscending: "Ordenar ascendente",
    sortDescending: "Ordenar descendente",
    showSubtasks: "Mostrar subtareas",
    activeOnly: "Solo tareas activas",
    overdueOnly: "Solo vencidas",
    ganttByAssignee: "Gantt por usuario asignado",
    ganttByPrincipal: "Gantt por Principal",
    groupByPrincipal: "Agrupar por Principal",
    groupByAssignee: "Agrupar por usuario asignado",
    collapseGroups: "Colapsar grupos",
    principalTicket: "Principal / Ticket",
    initialSummary: "Carga inicial. Ingresa credenciales y consulta Jira.",
    today: "Hoy",
    weeks: "Semanas",
    months: "Meses",
    quarters: "Trimestres",
    zoomInfo: "Ctrl + rueda del mouse sobre el Gantt para cambiar el zoom",
    collapseZoom: "Colapsar controles de zoom",
    expand: "Expandir",
    collapseUsers: "Colapsar usuarios",
    collapseTasks: "Colapsar tareas",
    userTicket: "Usuario / Ticket",
    initialLoad: "Carga inicial",
    initialGanttDescription: "Completa los datos de Jira y ejecuta la consulta para visualizar la linea de tiempo.",
    executivePanel: "Panel ejecutivo",
    executiveTitle: "Tablero ejecutivo Jira",
    executiveDescription: "Indicadores estrategicos para confiabilidad, precision de estimacion y envejecimiento del trabajo.",
    globalDashboardFilters: "Filtros globales del tablero",
    project: "Proyecto",
    user: "Usuario",
    startSince: "Inicio desde",
    endTo: "Fin hasta",
    executiveInitialDescription: "Consulta Jira para calcular los KPIs ejecutivos.",
    estimateAccuracy: "Precision de estimacion",
    accuracyInfo: "Tiempo registrado / estimacion original. Sirve para evaluar calidad de planeacion y madurez de estimacion.",
    dailyLoad: "Carga diaria de recursos",
    dailyLoadNoPlan: "Sin carga planificada",
    overloaded: "sobrecargados",
    healthy: "saludables",
    availableCapacity: "con capacidad libre",
    dailyLoadInfo: "Distribuye la estimacion original entre los dias laborales de cada ticket y compara la carga diaria por persona contra una capacidad estandar de 8 horas.",
    dailyLoadWidgetDescription: "Heatmap y tabla ejecutiva de utilizacion diaria por persona.",
    excludeDone: "Excluir finalizadas",
    agingBuckets: "Cubos de envejecimiento",
    loading: "Consultando...",
    refreshing: "Refrescando...",
    updating: "Actualizando...",
    noData: "Sin datos",
    noOptions: "Sin opciones",
    noResults: "Sin resultados",
    noDates: "Sin fechas",
    noDate: "Sin fecha",
    sprint: "Sprint",
    tasks: "tareas",
    priority: "Prioridad",
    openInJira: "Abrir en Jira",
    dependenciesCount: "dependencias",
    dependenciesDetected: "Dependencias detectadas",
    noDuration: "Sin duracion",
    durationDays: "dias",
    weekPrefix: "S",
    quarterPrefix: "T",
    tooltipKey: "Clave",
    tooltipSummary: "Resumen",
    tooltipUser: "Usuario",
    tooltipStatus: "Estado",
    tooltipStart: "Inicio",
    tooltipEnd: "Fin",
    tooltipDuration: "Duracion",
    tooltipPriority: "Prioridad",
    tooltipEstimate: "Estimacion original",
    tooltipTracking: "Seguimiento de tiempo",
    tooltipDependencies: "Dependencias",
    deviationByPerson: "Desviacion por persona asignada",
    accuracyTableAriaLabel: "Detalle de precision de estimacion por responsable",
    assignee: "Responsable",
    logged: "Registrado",
    estimated: "Estimado",
    deviation: "Desviacion",
    detail: "Detalle",
    dailyTableTitle: "Tabla ejecutiva de utilizacion",
    dailyTableAriaLabel: "Tabla ejecutiva de carga diaria por recurso",
    dailyHeatmapCorner: "Usuario",
    dailyWindowNote: "Ventana visible: 15 dias antes y 15 dias despues de hoy, mostrando solo dias laborales.",
    date: "Fecha",
    assignedHours: "Horas asignadas",
    dailyCapacity: "Capacidad diaria",
    loadPercent: "% Carga",
    loadStatus: "Estado",
    sprintStart: "Inicio",
    sprintEnd: "Fin",
    inclSubtasks: "incl. subtareas"
  },
  en: {
    projectTimeline: "Project timeline",
    subtitle: "Search, filter, and visualize tickets by assignee, task, and subtask.",
    mainActions: "Primary actions",
    changeView: "Change view",
    pert: "PERT",
    pertPanel: "Dependency network",
    pertTitle: "PERT diagram",
    pertDescription: "Visualize linked activities and identify bottlenecks.",
    pertInitialDescription: "Search Jira to build the dependency network.",
    linkedActivities: "Linked activities",
    dependencies: "Dependencies",
    bottlenecks: "Bottlenecks",
    detectedBottlenecks: "Detected bottlenecks",
    bottleneckHelp: "Activities that can affect flow due to blockers, overdue dates, or downstream dependencies.",
    noPertDependencies: "No visible dependencies match the current filters.",
    executiveDashboard: "Executive dashboard",
    theme: "Theme",
    lightTheme: "Light theme",
    darkTheme: "Dark theme",
    language: "Language",
    searchJira: "Search Jira",
    refreshData: "Refresh data",
    jiraConfig: "Jira configuration",
    configHelp: "Show or hide credentials, base URL, and JQL.",
    baseUrl: "Jira base URL",
    userOrEmail: "Email or user",
    apiToken: "API Token",
    tokenPlaceholder: "Enter the token manually",
    jqlSearch: "Search JQL",
    connectionNote: "URL, user, and JQL are saved in this browser. The token is remembered only during the current local session.",
    securityWarningTitle: "Security warning:",
    securityWarning: "this prototype sends credentials from the browser to a local proxy. In production, the token must live only in a secure backend or secret manager.",
    filters: "Filters",
    showFilters: "Show filters",
    hideFilters: "Hide filters",
    noDataLoaded: "No data loaded.",
    activeFilters: "0 active filters",
    clearFilters: "Clear filters",
    quickSearch: "Quick search",
    quickSearchPlaceholder: "Search by key, task, or partial text",
    assignee: "Assignee",
    hideAssignees: "Hide users",
    status: "Status",
    startFrom: "Start date from",
    endUntil: "End date until",
    dateRange: "Date range",
    allDates: "All dates",
    fromDate: "From",
    toDate: "To",
    ticketDetail: "Daily tracking",
    visibleTicketDetail: "Visible Gantt ticket detail",
    noVisibleTickets: "No tickets are visible with the current filters.",
    noActivePendingTickets: "No to-do, in-progress, pending, or done tickets match the current filters.",
    missingEstimateTitle: "Pending estimation",
    missingEstimateDetail: "Assignees with tickets pending estimation",
    noMissingEstimates: "No visible tickets are missing dates or original estimate.",
    missingEstimateRows: "assignees with pending items",
    visibleAssignees: "visible assignees",
    pendingTotal: "Total pending",
    missingStartDate: "Missing start date",
    missingDueDate: "Missing due date",
    missingOriginalEstimate: "Missing original estimate",
    viewTickets: "View tickets",
    visibleRows: "visible rows",
    ticket: "Ticket",
    description: "Description",
    principal: "Parent",
    state: "Status",
    startDay: "Start day",
    dueDate: "Due date",
    originalEstimate: "Original estimate",
    timeTracking: "Time tracking",
    timeLogs: "Logs",
    viewLogs: "View logs",
    hideLogs: "Hide",
    loadingLogs: "Loading logs...",
    noTimeLogs: "This ticket has no time logs.",
    noLoggedHours: "This ticket has no logged hours in Jira.",
    worklogDescription: "Description",
    worklogDate: "Log date and time",
    worklogHours: "Logged hours",
    noSpentTime: "No logged hours",
    noSpentTimeWithRemaining: "No logged hours | Remaining: {remaining}",
    sortAscending: "Sort ascending",
    sortDescending: "Sort descending",
    showSubtasks: "Show subtasks",
    activeOnly: "Only active tasks",
    overdueOnly: "Only overdue",
    ganttByAssignee: "Gantt by assignee",
    ganttByPrincipal: "Gantt by Parent",
    groupByPrincipal: "Group by Parent",
    groupByAssignee: "Group by assignee",
    collapseGroups: "Collapse groups",
    principalTicket: "Parent / Ticket",
    initialSummary: "Initial state. Enter credentials and search Jira.",
    today: "Today",
    weeks: "Weeks",
    months: "Months",
    quarters: "Quarters",
    zoomInfo: "Use Ctrl + mouse wheel over the Gantt to change zoom",
    collapseZoom: "Collapse zoom controls",
    expand: "Expand",
    collapseUsers: "Collapse users",
    collapseTasks: "Collapse tasks",
    userTicket: "User / Ticket",
    initialLoad: "Initial state",
    initialGanttDescription: "Complete the Jira data and run the search to display the timeline.",
    executivePanel: "Executive panel",
    executiveTitle: "Jira executive dashboard",
    executiveDescription: "Strategic indicators for reliability, estimation accuracy, and work aging.",
    globalDashboardFilters: "Global dashboard filters",
    project: "Project",
    user: "User",
    startSince: "Start from",
    endTo: "End until",
    executiveInitialDescription: "Search Jira to calculate executive KPIs.",
    estimateAccuracy: "Estimate accuracy",
    accuracyInfo: "Time spent / original estimate. Evaluates planning quality and estimation maturity.",
    dailyLoad: "Daily resource load",
    dailyLoadNoPlan: "No planned load",
    overloaded: "overloaded",
    healthy: "healthy",
    availableCapacity: "with free capacity",
    dailyLoadInfo: "Distributes the original estimate across each ticket's working days and compares daily load per person against a standard 8-hour capacity.",
    dailyLoadWidgetDescription: "Heatmap and executive table of daily utilization per person.",
    excludeDone: "Exclude done",
    agingBuckets: "Aging buckets",
    loading: "Searching...",
    refreshing: "Refreshing...",
    updating: "Updating...",
    noData: "No data",
    noOptions: "No options",
    noResults: "No results",
    noDates: "No dates",
    noDate: "No date",
    sprint: "Sprint",
    tasks: "tasks",
    priority: "Priority",
    openInJira: "Open in Jira",
    dependenciesCount: "dependencies",
    dependenciesDetected: "Detected dependencies",
    noDuration: "No duration",
    durationDays: "days",
    weekPrefix: "W",
    quarterPrefix: "Q",
    tooltipKey: "Key",
    tooltipSummary: "Summary",
    tooltipUser: "User",
    tooltipStatus: "Status",
    tooltipStart: "Start",
    tooltipEnd: "End",
    tooltipDuration: "Duration",
    tooltipPriority: "Priority",
    tooltipEstimate: "Original estimate",
    tooltipTracking: "Time tracking",
    tooltipDependencies: "Dependencies",
    deviationByPerson: "Deviation by assignee",
    accuracyTableAriaLabel: "Estimate accuracy detail by assignee",
    assignee: "Assignee",
    logged: "Logged",
    estimated: "Estimated",
    deviation: "Deviation",
    detail: "Detail",
    dailyTableTitle: "Executive utilization table",
    dailyTableAriaLabel: "Daily load executive table by resource",
    dailyHeatmapCorner: "User",
    dailyWindowNote: "Visible window: 15 days before and 15 days after today, showing only working days.",
    date: "Date",
    assignedHours: "Assigned hours",
    dailyCapacity: "Daily capacity",
    loadPercent: "% Load",
    loadStatus: "Status",
    sprintStart: "Start",
    sprintEnd: "End",
    inclSubtasks: "incl. subtasks"
  }
};

const state = {
  normalizedIssues: [],
  groupedData: [],
  filteredIssues: [],
  analyticsFilteredIssues: [],
  currentFilters: null,
  activeView: "analytics",
  pertGraph: { nodes: [], links: [], bottlenecks: [] },
  zoom: "week",
  ganttGroupBy: "assignee",
  collapsedUsers: new Set(),
  collapsedTasks: new Set(),
  agingBucketPages: {},
  openAgingBuckets: new Set(),
  ganttTableSort: { field: "assignee", direction: "asc" },
  expandedWorklogs: new Set(),
  expandedMissingEstimates: new Set(),
  worklogsByIssue: {},
  worklogLoading: new Set(),
  theme: localStorage.getItem("jira-gantt-theme") || "dark",
  language: localStorage.getItem(LANGUAGE_STORAGE_KEY) || "es",
  searchTimer: null
};

const elements = {
  form: document.querySelector("#jiraForm"),
  ganttView: document.querySelector("#ganttView"),
  pertView: document.querySelector("#pertView"),
  analyticsView: document.querySelector("#analyticsView"),
  ganttViewButton: document.querySelector("#ganttViewButton"),
  pertViewButton: document.querySelector("#pertViewButton"),
  analyticsViewButton: document.querySelector("#analyticsViewButton"),
  configToggle: document.querySelector("#configToggle"),
  configContent: document.querySelector("#configContent"),
  filtersToggle: document.querySelector("#filtersToggle"),
  filtersContent: document.querySelector("#filtersContent"),
  searchButton: document.querySelector("#searchButton"),
  refreshButton: document.querySelector("#refreshButton"),
  clearFiltersButton: document.querySelector("#clearFiltersButton"),
  expandAllButton: document.querySelector("#expandAllButton"),
  collapseUsersButton: document.querySelector("#collapseUsersButton"),
  collapseTasksButton: document.querySelector("#collapseTasksButton"),
  groupPrincipalButton: document.querySelector("#groupPrincipalButton"),
  themeButtons: document.querySelectorAll("[data-theme-option]"),
  languageButtons: document.querySelectorAll("[data-language-option]"),
  zoomButtons: document.querySelectorAll("[data-zoom]"),
  timelineZoom: document.querySelector(".timeline-zoom"),
  timelineZoomOptions: document.querySelector("#timelineZoomOptions"),
  collapseZoomButton: document.querySelector("#collapseZoomButton"),
  loadingBox: document.querySelector("#loadingBox"),
  errorBox: document.querySelector("#errorBox"),
  summaryText: document.querySelector("#summaryText"),
  resultCounter: document.querySelector("#resultCounter"),
  activeFilterBadge: document.querySelector("#activeFilterBadge"),
  timelineHeader: document.querySelector("#timelineHeader"),
  ganttBody: document.querySelector("#ganttBody"),
  ganttContainer: document.querySelector("#ganttContainer"),
  ganttIssueTable: document.querySelector("#ganttIssueTable"),
  ganttIssueTableCounter: document.querySelector("#ganttIssueTableCounter"),
  missingEstimateTable: document.querySelector("#missingEstimateTable"),
  missingEstimateTableCounter: document.querySelector("#missingEstimateTableCounter"),
  pertCounter: document.querySelector("#pertCounter"),
  pertEmptyState: document.querySelector("#pertEmptyState"),
  pertContent: document.querySelector("#pertContent"),
  pertGraph: document.querySelector("#pertGraph"),
  pertNodeCount: document.querySelector("#pertNodeCount"),
  pertLinkCount: document.querySelector("#pertLinkCount"),
  pertBottleneckCount: document.querySelector("#pertBottleneckCount"),
  pertBottleneckList: document.querySelector("#pertBottleneckList"),
  analyticsCounter: document.querySelector("#analyticsCounter"),
  analyticsEmptyState: document.querySelector("#analyticsEmptyState"),
  analyticsContent: document.querySelector("#analyticsContent"),
  dateRangeControls: document.querySelectorAll(".date-range-filter"),
  analytics: {
    project: document.querySelector("#projectFilter"),
    sprint: document.querySelector("#sprintFilter"),
    assignee: document.querySelector("#assigneeFilter"),
    hiddenAssignee: document.querySelector("#hiddenAssigneeFilter"),
    status: document.querySelector("#statusFilter"),
    startDate: document.querySelector("#startDateFilter"),
    endDate: document.querySelector("#endDateFilter"),
    kpiAccuracy: document.querySelector("#kpiAccuracy"),
    kpiAccuracyMeta: document.querySelector("#kpiAccuracyMeta"),
    accuracyDetails: document.querySelector("#accuracyDetails"),
    kpiDailyLoad: document.querySelector("#kpiDailyLoad"),
    kpiDailyLoadMeta: document.querySelector("#kpiDailyLoadMeta"),
    dailyOverloadedCount: document.querySelector("#dailyOverloadedCount"),
    dailyHealthyCount: document.querySelector("#dailyHealthyCount"),
    dailyAvailableCount: document.querySelector("#dailyAvailableCount"),
    dailyExcludeDone: document.querySelector("#dailyExcludeDoneFilter"),
    dailyLoadHeatmap: document.querySelector("#dailyLoadHeatmap"),
    dailyLoadTable: document.querySelector("#dailyLoadTable"),
    agingBuckets: document.querySelector("#agingBuckets")
  },
  filters: {
    query: document.querySelector("#quickSearch"),
    project: document.querySelector("#projectFilter"),
    assignee: document.querySelector("#assigneeFilter"),
    hiddenAssignee: document.querySelector("#hiddenAssigneeFilter"),
    status: document.querySelector("#statusFilter"),
    sprint: document.querySelector("#sprintFilter"),
    startDate: document.querySelector("#startDateFilter"),
    endDate: document.querySelector("#endDateFilter"),
    showSubtasks: document.querySelector("#showSubtasksFilter"),
    excludeDone: document.querySelector("#excludeDoneFilter"),
    activeOnly: document.querySelector("#activeOnlyFilter"),
    overdueOnly: document.querySelector("#overdueOnlyFilter")
  }
};

initApp();

function initApp() {
  applyTheme(state.theme);
  applyLanguage(state.language);
  restoreConnectionData();
  bindEvents();
  maybeShowStaticHostNotice();
  populateFilterOptions([]);
  renderEmptyState(t("initialLoad"), t("initialGanttDescription"));
  renderPertEmptyState(t("initialLoad"), t("pertInitialDescription"));
}

// En hosting estático (GitHub Pages) no hay proxy local, así que Jira en vivo
// no funciona. Avisamos y dirigimos al usuario al modo demo.
function isStaticHost() {
  const host = window.location.hostname;
  return !(host === "localhost" || host === "127.0.0.1" || host === "" || host === "0.0.0.0");
}

function maybeShowStaticHostNotice() {
  if (!isStaticHost()) return;
  const notice = document.querySelector("#staticHostNotice");
  if (notice) notice.hidden = false;
}

function bindEvents() {
  elements.ganttViewButton.addEventListener("click", () => setActiveView("gantt"));
  elements.pertViewButton.addEventListener("click", () => setActiveView("pert"));
  elements.analyticsViewButton.addEventListener("click", () => setActiveView("analytics"));

  // Sidebar navigation
  document.querySelectorAll(".nav-item[data-nav-view]").forEach((item) => {
    item.addEventListener("click", () => setActiveView(item.dataset.navView));
  });
  document.querySelector("#sidebarToggle")?.addEventListener("click", () => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("collapsed");
    document.documentElement.classList.toggle("sidebar-collapsed");
    const expanded = !sidebar.classList.contains("collapsed");
    document.querySelector("#sidebarToggle")?.setAttribute("aria-expanded", String(expanded));
  });
  elements.configToggle.addEventListener("click", toggleConfigPanel);
  elements.filtersToggle.addEventListener("click", toggleFiltersPanel);
  elements.searchButton.addEventListener("click", handleSearch);
  document.querySelector("#demoButton")?.addEventListener("click", loadDemoData);
  elements.refreshButton.addEventListener("click", handleRefresh);
  elements.clearFiltersButton.addEventListener("click", clearFilters);
  elements.expandAllButton.addEventListener("click", expandAll);
  elements.collapseUsersButton.addEventListener("click", collapseAllUsers);
  elements.collapseTasksButton.addEventListener("click", collapseAllTasks);
  elements.groupPrincipalButton.addEventListener("click", toggleGanttGroupByPrincipal);
  ["#jiraBaseUrl", "#jiraUser", "#jiraJql"].forEach((selector) => {
    document.querySelector(selector).addEventListener("input", saveConnectionData);
  });
  document.querySelector("#jiraToken").addEventListener("input", saveSessionToken);

  elements.themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyTheme(button.dataset.themeOption);
    });
  });
  elements.languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.languageOption);
      rerenderCurrentView();
    });
  });

  elements.zoomButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setTimelineZoom(button.dataset.zoom);
    });
  });
  elements.collapseZoomButton.addEventListener("click", toggleTimelineZoomControls);
  elements.ganttContainer.addEventListener("wheel", handleGanttWheelZoom, { passive: false });
  window.addEventListener("resize", () => {
    window.requestAnimationFrame(renderDependencyLines);
    if (state.activeView === "pert") window.requestAnimationFrame(() => renderPertConnections(state.pertGraph.links));
  });

  Object.entries(elements.filters).forEach(([key, control]) => {
    const eventName = control.matches?.(".checkbox-options") || control.type === "checkbox" ? "change" : "input";
    control.addEventListener(eventName, () => {
      if (key === "query") {
        window.clearTimeout(state.searchTimer);
        state.searchTimer = window.setTimeout(applyFilters, 220);
        return;
      }

      if (key === "startDate" || key === "endDate") {
        updateDateRangeButton("gantt");
      }

      applyFilters();
    });
  });

  elements.analytics.dailyExcludeDone.addEventListener("change", () => {
    renderAnalyticsDashboard({ preserveKpiDetails: true });
  });
  document.addEventListener("click", handleDateRangeDocumentClick);
  document.addEventListener("click", handleKpiInfoClick);
  document.addEventListener("click", handleKpiDetailClick);
  document.addEventListener("click", handleDailyLoadDetailClick);
  document.addEventListener("click", handleAccuracyDetailClick);
  document.addEventListener("click", handleKpiExportClick);
  document.addEventListener("click", handleModuleExportClick);
  document.addEventListener("click", handleAgingBucketPageClick);
  document.addEventListener("click", handleGanttTableSortClick);
  document.addEventListener("click", handleWorklogToggleClick);
  document.addEventListener("click", handleMissingEstimateToggleClick);
  document.addEventListener("toggle", handleAgingBucketToggle, true);
}

function setActiveView(view) {
  state.activeView = view;
  const isAnalytics = view === "analytics";
  const isPert = view === "pert";
  const isGantt = view === "gantt";
  elements.ganttView.hidden = !isGantt;
  elements.pertView.hidden = !isPert;
  elements.analyticsView.hidden = !isAnalytics;
  elements.ganttViewButton.classList.toggle("active", isGantt);
  elements.pertViewButton.classList.toggle("active", isPert);
  elements.analyticsViewButton.classList.toggle("active", isAnalytics);

  // Sync sidebar active state
  document.querySelectorAll(".nav-item[data-nav-view]").forEach((item) => {
    item.classList.toggle("active", item.dataset.navView === view);
  });
  // Show / hide placeholder views
  ["teamHealth", "epics", "workDist", "settings"].forEach((v) => {
    const el = document.querySelector(`#${v}View`);
    if (el) el.hidden = v !== view;
  });

  if (isAnalytics) {
    renderAnalyticsDashboard();
  }

  if (isPert) {
    renderPertDiagram(state.filteredIssues);
  }
}

function t(key) {
  return I18N[state.language]?.[key] || I18N.es[key] || key;
}

function applyLanguage(language) {
  state.language = I18N[language] ? language : "es";
  document.documentElement.lang = state.language;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, state.language);

  elements.languageButtons.forEach((button) => {
    const isActive = button.dataset.languageOption === state.language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateStaticLanguage();
  updateTimelineZoomButtons();
  setLoading(false);
}

function updateStaticLanguage() {
  setText(".eyebrow", t("projectTimeline"));
  setText(".subtitle", t("subtitle"));
  setAttribute(".header-actions", "aria-label", t("mainActions"));
  setAttribute(".view-tabs", "aria-label", t("changeView"));
  setText("#pertViewButton", t("pert"));
  setText("#analyticsViewButton", t("executiveDashboard"));
  setText(".theme-switcher > span", t("theme"));
  setAttribute("[data-theme-option='light']", "aria-label", t("lightTheme"));
  setAttribute("[data-theme-option='light']", "title", t("lightTheme"));
  setAttribute("[data-theme-option='dark']", "aria-label", t("darkTheme"));
  setAttribute("[data-theme-option='dark']", "title", t("darkTheme"));
  setText(".language-switcher > span", t("language"));
  setAttribute("#searchButton", "aria-label", t("searchJira"));
  setAttribute("#searchButton", "title", t("searchJira"));
  setAttribute("#refreshButton", "aria-label", t("refreshData"));
  setAttribute("#refreshButton", "title", t("refreshData"));
  setText("#configTitle", t("jiraConfig"));
  setText("#configTitle + p", t("configHelp"));
  setLabelText("#jiraBaseUrl", t("baseUrl"));
  setLabelText("#jiraUser", t("userOrEmail"));
  setLabelText("#jiraToken", t("apiToken"));
  setAttribute("#jiraToken", "placeholder", t("tokenPlaceholder"));
  setLabelText("#jiraJql", t("jqlSearch"));
  setText(".connection-note", t("connectionNote"));
  setText(".security-warning strong", t("securityWarningTitle"));
  setSecurityWarningText();
  setText("#filtersTitle", t("filters"));
  setAttribute("#filtersToggle", "aria-label", elements.filtersContent.hidden ? t("showFilters") : t("hideFilters"));
  setText("#clearFiltersButton", t("clearFilters"));
  setLabelText("#quickSearch", t("quickSearch"));
  setAttribute("#quickSearch", "placeholder", t("quickSearchPlaceholder"));
  setLegend("#projectFilter", t("project"));
  setLegend("#assigneeFilter", t("assignee"));
  setLegend("#hiddenAssigneeFilter", t("hideAssignees"));
  setLegend("#statusFilter", t("status"));
  setLegend("#sprintFilter", t("sprint"));
  updateDateRangeButtons();
  setText("#showSubtasksFilter + span", t("showSubtasks"));
  setText("#excludeDoneFilter + span", t("excludeDone"));
  setText("#activeOnlyFilter + span", t("activeOnly"));
  setText("#overdueOnlyFilter + span", t("overdueOnly"));
  setText("#ganttIssueTableTitle", t("ticketDetail"));
  setAttribute("#ganttIssueTable", "aria-label", t("visibleTicketDetail"));
  setText("#missingEstimateTableTitle", t("missingEstimateTitle"));
  setAttribute("#missingEstimateTable", "aria-label", t("missingEstimateDetail"));
  setText("[data-zoom='today']", t("today"));
  setText("[data-zoom='week']", t("weeks"));
  setText("[data-zoom='month']", t("months"));
  setText("[data-zoom='quarter']", t("quarters"));
  setAttribute(".zoom-info", "title", t("zoomInfo"));
  setAttribute(".zoom-info", "aria-label", t("zoomInfo"));
  setAttribute("#collapseZoomButton", "aria-label", t("collapseZoom"));
  setText("#expandAllButton", t("expand"));
  setText("#collapseUsersButton", state.ganttGroupBy === "principal" ? t("collapseGroups") : t("collapseUsers"));
  setText("#collapseTasksButton", t("collapseTasks"));
  setText("#ganttTitle", state.ganttGroupBy === "principal" ? t("ganttByPrincipal") : t("ganttByAssignee"));
  setText(".issue-column", state.ganttGroupBy === "principal" ? t("principalTicket") : t("userTicket"));
  updateGanttGroupButton();
  setText("#pertView .eyebrow", t("pertPanel"));
  setText("#pertTitle", t("pertTitle"));
  setText("#pertDescription", t("pertDescription"));
  setText(".pert-summary-grid article:nth-child(1) span", t("linkedActivities"));
  setText(".pert-summary-grid article:nth-child(2) span", t("dependencies"));
  setText(".pert-summary-grid article:nth-child(3) span", t("bottlenecks"));
  setText("#pertBottleneckTitle", t("detectedBottlenecks"));
  setText("#pertBottleneckTitle + p", t("bottleneckHelp"));
  setText("#analyticsView .eyebrow", t("executivePanel"));
  setText("#analyticsTitle", t("executiveTitle"));
  setText("#analyticsTitle + p", t("executiveDescription"));
  updateDateRangeButtons();
  setText("#info-accuracy", t("accuracyInfo"));
  setText("#info-dailyLoad", t("dailyLoadInfo"));
  setText("#info-dailyLoadWidget", t("dailyLoadInfo"));
  setText("#info-agingBuckets", state.language === "en"
    ? "Calculated for open tickets as today minus start date. Buckets group 0-7 days as normal, 7-30 days as attention, and more than 30 days as risk."
    : "Se calcula con tickets abiertos usando: hoy menos fecha de inicio. Los cubos agrupan 0-7 dias como normal, 7-30 dias como atencion y mas de 30 dias como riesgo.");
  setText(".kpi-card [data-kpi-info='accuracy'] ~ .kpi-label", t("estimateAccuracy"));
  setText(".kpi-card [data-kpi-info='dailyLoad'] ~ .kpi-label", t("dailyLoad"));
  setText(".daily-load-card h3", t("dailyLoad"));
  setText(".daily-load-card .analytics-card-header p", t("dailyLoadWidgetDescription"));
  setText("#dailyExcludeDoneFilter + span", t("excludeDone"));
  setText("[data-kpi-info='agingBuckets'] + h3", t("agingBuckets"));
}

function rerenderCurrentView() {
  populateFilterOptions(state.normalizedIssues);
  if (state.normalizedIssues.length) {
    applyFilters();
    return;
  }

  elements.resultCounter.textContent = t("noDataLoaded");
  elements.activeFilterBadge.textContent = t("activeFilters");
  elements.summaryText.textContent = t("initialSummary");
  renderEmptyState(t("initialLoad"), t("initialGanttDescription"));
  renderPertEmptyState(t("initialLoad"), t("pertInitialDescription"));
  elements.analyticsCounter.textContent = t("noData");
  elements.analyticsEmptyState.innerHTML = `<strong>${escapeHtml(t("initialLoad"))}</strong><span>${escapeHtml(t("executiveInitialDescription"))}</span>`;
}

function setText(selector, value, warn = true) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setAttribute(selector, name, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(name, value);
}

function setLegend(containerSelector, value) {
  const container = document.querySelector(containerSelector);
  const legend = container?.closest("fieldset")?.querySelector("legend");
  if (legend) legend.textContent = value;
}

function setLabelText(inputSelector, value) {
  const input = document.querySelector(inputSelector);
  const label = input?.closest("label");
  if (!label) return;

  [...label.childNodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      node.textContent = `\n            ${value}\n            `;
    }
  });
}

function handleDateRangeDocumentClick(event) {
  const toggle = event.target.closest("[data-date-range-toggle]");
  if (toggle) {
    const name = toggle.dataset.dateRangeToggle;
    const panel = document.querySelector(`[data-date-range-panel="${name}"]`);
    const willOpen = panel?.hidden;
    closeDateRangePanels(name);
    setDateRangePanelOpen(name, Boolean(willOpen));
    return;
  }

  if (event.target.closest(".date-range-filter")) return;
  closeDateRangePanels();
}

function closeDateRangePanels(exceptName = "") {
  document.querySelectorAll("[data-date-range-panel]").forEach((panel) => {
    const name = panel.dataset.dateRangePanel;
    if (name !== exceptName) setDateRangePanelOpen(name, false);
  });
}

function setDateRangePanelOpen(name, isOpen) {
  const panel = document.querySelector(`[data-date-range-panel="${name}"]`);
  const button = document.querySelector(`[data-date-range-toggle="${name}"]`);
  if (!panel || !button) return;

  panel.hidden = !isOpen;
  button.setAttribute("aria-expanded", String(isOpen));
}

function toggleGanttGroupByPrincipal() {
  state.ganttGroupBy = state.ganttGroupBy === "principal" ? "assignee" : "principal";
  state.collapsedUsers.clear();
  updateStaticLanguage();
  applyFilters();
}

function updateGanttGroupButton() {
  if (!elements.groupPrincipalButton) return;

  const isPrincipal = state.ganttGroupBy === "principal";
  const label = isPrincipal ? t("groupByAssignee") : t("groupByPrincipal");
  elements.groupPrincipalButton.classList.toggle("active", isPrincipal);
  elements.groupPrincipalButton.setAttribute("aria-pressed", String(isPrincipal));
  elements.groupPrincipalButton.setAttribute("aria-label", label);
  elements.groupPrincipalButton.title = label;
}

function updateDateRangeButtons() {
  updateDateRangeButton("gantt");
  updateDateRangeButton("analytics");
}

function updateDateRangeButton(name) {
  const control = document.querySelector(`[data-date-range="${name}"]`);
  if (!control) return;

  const startInput = name === "analytics" ? elements.analytics.startDate : elements.filters.startDate;
  const endInput = name === "analytics" ? elements.analytics.endDate : elements.filters.endDate;
  const title = control.querySelector(".date-range-button-text");
  const summary = control.querySelector(`#${name}DateRangeSummary`);
  const labels = control.querySelectorAll(".date-range-panel label");

  if (title) title.textContent = t("dateRange");
  if (summary) summary.textContent = formatDateRangeSummary(startInput.value, endInput.value);
  if (labels[0]?.firstChild) labels[0].firstChild.textContent = `\n                ${t("fromDate")}\n                `;
  if (labels[1]?.firstChild) labels[1].firstChild.textContent = `\n                ${t("toDate")}\n                `;
}

function formatDateRangeSummary(startDate, endDate) {
  if (startDate && endDate) return `${formatDateRangeDate(startDate)} - ${formatDateRangeDate(endDate)}`;
  if (startDate) return `${t("fromDate")} ${formatDateRangeDate(startDate)}`;
  if (endDate) return `${t("toDate")} ${formatDateRangeDate(endDate)}`;
  return t("allDates");
}

function formatDateRangeDate(dateValue) {
  return parseLocalDate(dateValue).toLocaleDateString(state.language === "en" ? "en-US" : "es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function setSecurityWarningText() {
  const warning = document.querySelector(".security-warning");
  const strong = warning?.querySelector("strong");
  if (!warning || !strong) return;
  warning.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      node.textContent = `\n            ${t("securityWarning")}\n          `;
    }
  });
}

function toggleConfigPanel() {
  const forceOpen = arguments[0] === true;
  const isOpening = forceOpen || elements.configContent.hidden;
  elements.configContent.hidden = !isOpening;
  elements.configToggle.setAttribute("aria-expanded", String(isOpening));
  elements.configToggle.querySelector("span").textContent = isOpening ? "-" : "+";
  if (isOpening) setActiveView("settings");
}

function toggleFiltersPanel() {
  const forceOpen = arguments[0] === true;
  const isOpening = forceOpen || elements.filtersContent.hidden;
  elements.filtersContent.hidden = !isOpening;
  elements.filtersToggle.setAttribute("aria-expanded", String(isOpening));
  elements.filtersToggle.setAttribute("aria-label", isOpening ? t("hideFilters") : t("showFilters"));
  elements.filtersToggle.querySelector("span").textContent = isOpening ? "-" : "+";
}

async function handleSearch() {
  clearError();
  saveConnectionData();
  saveSessionToken();

  if (!elements.form.reportValidity()) {
    toggleConfigPanel(true);
    return;
  }

  await loadJiraData(t("loading"));
}

async function handleRefresh() {
  clearError();

  if (!elements.form.reportValidity()) {
    toggleConfigPanel(true);
    return;
  }

  await loadJiraData(t("refreshing"));
}

async function loadDemoData() {
  setLoading(true, "Cargando datos de demo...");
  try {
    // En GitHub Pages no hay servidor: usamos los datos embebidos (demo-data.js).
    // En local con `node server.js` también funcionan, sin necesidad de red.
    let data = (typeof window !== "undefined" && window.DEMO_DATA) ? window.DEMO_DATA : null;
    if (!data) {
      const response = await fetch("/api/demo");
      if (!response.ok) throw new Error("No se pudo cargar el demo. Recarga la página con Cmd/Ctrl+Shift+R.");
      data = await response.json();
    }
    const issues = Array.isArray(data.issues) ? data.issues : [];
    const normalizedIssues = normalizeIssues(issues);
    state.normalizedIssues = normalizedIssues;
    state.collapsedUsers.clear();
    state.collapsedTasks.clear();
    state.expandedWorklogs.clear();
    state.expandedMissingEstimates.clear();
    state.worklogsByIssue = {};
    state.worklogLoading.clear();
    setActiveView("analytics");
    populateFilterOptions(normalizedIssues);
    applyFilters();
  } catch (error) {
    handleApiError(error);
  } finally {
    setLoading(false);
  }
}

async function loadJiraData(loadingText = "Consultando...") {
  setLoading(true, loadingText);

  try {
    const normalizedIssues = await getJiraIssues();
    state.normalizedIssues = normalizedIssues;
    state.collapsedUsers.clear();
    state.collapsedTasks.clear();
    state.expandedWorklogs.clear();
    state.expandedMissingEstimates.clear();
    state.worklogsByIssue = {};
    state.worklogLoading.clear();
    populateFilterOptions(normalizedIssues);
    applyFilters();
  } catch (error) {
    handleApiError(error);
  } finally {
    setLoading(false);
  }
}

async function getJiraIssues() {
  const baseUrl = getInputValue("#jiraBaseUrl").replace(/\/$/, "");
  const user = getInputValue("#jiraUser");
  const token = getInputValue("#jiraToken");
  const jql = getInputValue("#jiraJql");

  if (!baseUrl || !user || !token || !jql) {
    throw new Error("Completa URL base de Jira, usuario/email, API token y JQL.");
  }

  let response;

  try {
    response = await fetch("/api/jira/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        baseUrl,
        user,
        token,
        jql,
        fields: JIRA_FIELDS,
        // Tamano de pagina: el proxy local recorre todas las paginas disponibles.
        maxResults: 100
      })
    });
  } catch (error) {
    throw new Error("No se pudo conectar con el proxy local. Verifica que el servidor local este corriendo.");
  }

  // El proxy de server.js SIEMPRE responde JSON. Un 405 (Method Not Allowed)
  // o una respuesta no-JSON significan que el POST llegó a un servidor de
  // archivos estático (GitHub Pages, Live Server, python -m http.server,
  // file://) y no al proxy. Sin el proxy no se puede consultar Jira por las
  // restricciones CORS de Jira Cloud.
  const contentType = response.headers.get("content-type") || "";
  if (response.status === 405 || !contentType.includes("application/json")) {
    throw new Error(
      `El proxy local no atendió la solicitud (HTTP ${response.status}). ` +
      "Abre la app ejecutando `node server.js` y entrando a http://localhost:4173 — " +
      "no funciona desde GitHub Pages, Live Server, python -m http.server ni abriendo index.html directamente."
    );
  }

  if (response.status === 401) {
    throw new Error("Token invalido o credenciales rechazadas por Jira.");
  }

  if (response.status === 403) {
    throw new Error("Jira rechazo la solicitud. Revisa permisos del usuario o acceso al proyecto.");
  }

  if (!response.ok) {
    const detail = await readErrorResponse(response);
    throw new Error(detail || `No se pudo consultar Jira. Codigo HTTP: ${response.status}.`);
  }

  const data = await response.json();
  const issues = Array.isArray(data.issues) ? data.issues : [];

  if (!issues.length) {
    return [];
  }

  const normalizedIssues = normalizeIssues(issues);
  if (data.warning) {
    console.warn("Advertencia paginacion Jira", data.warning);
  }
  console.info("Jira issues cargados", {
    totalReportadoPorJira: data.total,
    totalCargado: data.fetchedTotal ?? issues.length,
    paginasCargadas: data.fetchedPages,
    estrategiaPaginacion: data.paginationStrategy,
    tipos: getIssueTypeSummary(normalizedIssues)
  });

  return normalizedIssues;
}

async function readErrorResponse(response) {
  try {
    const data = await response.json();
    return data.message || data.errorMessages?.join(" ") || "";
  } catch (error) {
    return "";
  }
}

function getIssueTypeSummary(issues) {
  return issues.reduce((summary, issue) => {
    summary[issue.issueType] = (summary[issue.issueType] || 0) + 1;
    return summary;
  }, {});
}

// Convierte la respuesta cruda de Jira en un modelo estable para filtros y Gantt.
function normalizeIssues(issues) {
  const normalizedIssues = issues.map((issue) => {
    const fields = issue.fields || {};
    const parentKey = fields.parent?.key || null;
    const principal = getPrincipalField(fields.parent);
    const rawStatus = fields.status?.name || "Sin estado";
    const status = translateStatus(rawStatus);
    const isSubtask = isSubtaskIssueType(fields.issuetype);
    const isEpic = isEpicIssueType(fields.issuetype);
    const sprintDetails = getSprintDetails(fields[SPRINT_FIELD]);
    const scheduleDates = getIssueScheduleDates(fields);
    const startDate = scheduleDates.startDate;
    const endDate = scheduleDates.endDate;
    const dependencyLinks = getDependencyLinks(fields.issuelinks, issue.key);
    const rawOriginalEstimate = getOriginalEstimate(fields);
    const rawTimeTracking = getTimeTracking(fields);

    return {
      id: issue.id,
      key: issue.key,
      title: fields.summary || "Sin resumen",
      assignee: fields.assignee?.displayName || "Sin asignar",
      issueType: translateIssueType(fields.issuetype?.name || "Ticket"),
      status,
      rawStatus,
      statusClass: getStatusClass(rawStatus),
      priority: fields.priority?.name || "Sin prioridad",
      project: fields.project?.key || fields.project?.name || "Sin proyecto",
      sprint: getSprintNames(sprintDetails) || "Sin sprint",
      sprintDetails,
      parentKey,
      principal,
      startDate,
      endDate,
      plannedStartDate: scheduleDates.plannedStartDate,
      plannedEndDate: scheduleDates.plannedEndDate,
      hasPlannedDates: scheduleDates.hasPlannedDates,
      created: normalizeDate(fields.created),
      updated: normalizeDate(fields.updated),
      rawOriginalEstimate,
      originalEstimate: rawOriginalEstimate,
      rawTimeTracking,
      timeTracking: rawTimeTracking,
      worklogs: normalizeWorklogs(fields.worklog?.worklogs || []),
      worklogTotal: Number(fields.worklog?.total) || 0,
      dependencyLinks,
      dependencyCount: dependencyLinks.length,
      isMainTask: !isSubtask,
      isSubtask,
      isEpic,
      isCompleted: getStatusClass(rawStatus) === "status-done",
      isOverdue: isIssueOverdue(endDate, rawStatus),
      isDueSoon: isIssueDueSoon(endDate, rawStatus)
    };
  });

  const issueByKey = new Map(normalizedIssues.map((issue) => [issue.key, issue]));

  normalizedIssues.forEach((issue) => {
    if (issue.principal !== "Sin principal" || !issue.isSubtask || !issue.parentKey) return;

    const parentIssue = issueByKey.get(issue.parentKey);
    if (parentIssue?.principal && parentIssue.principal !== "Sin principal") {
      issue.principal = parentIssue.principal;
    }
  });

  applySubtaskTimeTrackingRollups(normalizedIssues);

  return normalizedIssues;
}

// Aplica todos los filtros como interseccion: un ticket debe cumplir todos.
function applyFilters() {
  const filterValues = getFilterValues();
  updateGanttFilterOptions(filterValues);
  const directMatches = state.normalizedIssues.filter((issue) => issueMatchesFilters(issue, filterValues));
  const filteredIssues = expandFilteredIssuesForHierarchy(directMatches, filterValues);
  const groupedData = groupIssuesByAssignee(sortIssues(filteredIssues));

  state.filteredIssues = filteredIssues;
  state.groupedData = groupedData;
  state.currentFilters = filterValues;
  state.analyticsFilteredIssues = getSubtaskAwareIssueScope(filteredIssues, { showSubtasks: filterValues.showSubtasks });

  updateFilterSummary(filterValues, filteredIssues.length);
  renderGantt(groupedData);
  if (state.activeView === "pert") {
    renderPertDiagram(filteredIssues);
  }
  if (state.activeView === "analytics") {
    renderAnalyticsDashboard({ preserveKpiDetails: true });
  }
}

function getFilterValues() {
  return {
    query: elements.filters.query.value.trim().toLowerCase(),
    projects: getCheckedValues(elements.filters.project),
    assignees: getCheckedValues(elements.filters.assignee),
    hiddenAssignees: getCheckedValues(elements.filters.hiddenAssignee),
    statuses: getCheckedValues(elements.filters.status),
    sprints: getCheckedValues(elements.filters.sprint),
    startDate: elements.filters.startDate.value,
    endDate: elements.filters.endDate.value,
    showSubtasks: elements.filters.showSubtasks.checked,
    excludeDone: elements.filters.excludeDone.checked,
    activeOnly: elements.filters.activeOnly.checked,
    overdueOnly: elements.filters.overdueOnly.checked
  };
}

function issueMatchesFilters(issue, filters) {
  if (!filters.showSubtasks && issue.isSubtask) return false;
  if (filters.excludeDone && issue.isCompleted) return false;
  if (filters.projects.length && !filters.projects.includes(issue.project)) return false;
  if (filters.assignees.length && !filters.assignees.includes(issue.assignee)) return false;
  if (filters.hiddenAssignees?.length && filters.hiddenAssignees.includes(issue.assignee)) return false;
  if (filters.statuses.length && !filters.statuses.includes(issue.status)) return false;
  if (filters.sprints.length && !issueMatchesSelectedSprints(issue, filters.sprints)) return false;
  if (filters.activeOnly && issue.isCompleted) return false;
  if (filters.overdueOnly && !issue.isOverdue) return false;
  if (filters.startDate && (!issue.startDate || issue.startDate < filters.startDate)) return false;
  if (filters.endDate && (!issue.endDate || issue.endDate > filters.endDate)) return false;

  if (filters.query) {
    const haystack = `${issue.key} ${issue.title} ${issue.status} ${issue.assignee} ${issue.project} ${issue.sprint} ${issue.principal}`.toLowerCase();
    if (!haystack.includes(filters.query)) return false;
  }

  return true;
}

function updateGanttFilterOptions(filters) {
  if (!state.normalizedIssues.length) {
    populateFilterOptions([]);
    return;
  }

  const assigneeIssues = state.normalizedIssues.filter((issue) => issueMatchesFiltersForOptions(issue, filters, "assignees"));
  const hiddenAssigneeIssues = state.normalizedIssues.filter((issue) => issueMatchesFiltersForOptions(issue, filters, "hiddenAssignees"));
  const statusIssues = state.normalizedIssues.filter((issue) => issueMatchesFiltersForOptions(issue, filters, "statuses"));
  const sprintIssues = state.normalizedIssues.filter((issue) => issueMatchesFiltersForOptions(issue, filters, "sprints"));
  const projectIssues = state.normalizedIssues.filter((issue) => issueMatchesFiltersForOptions(issue, filters, "projects"));

  setCheckboxOptions(elements.filters.project, uniqueValues(projectIssues, "project"), "project");
  setCheckboxOptions(elements.filters.assignee, uniqueValues(assigneeIssues, "assignee"), "assignee");
  setCheckboxOptions(elements.filters.hiddenAssignee, uniqueValues(hiddenAssigneeIssues, "assignee"), "hidden-assignee");
  setCheckboxOptions(elements.filters.status, uniqueValues(statusIssues, "status"), "status");
  setCheckboxOptions(elements.filters.sprint, uniqueSprintNames(sprintIssues), "sprint");
}

function issueMatchesFiltersForOptions(issue, filters, ignoredFilter) {
  const optionFilters = {
    ...filters,
    projects: ignoredFilter === "projects" ? [] : filters.projects,
    assignees: ignoredFilter === "assignees" ? [] : filters.assignees,
    hiddenAssignees: ignoredFilter === "hiddenAssignees" ? [] : (filters.hiddenAssignees || []),
    statuses: ignoredFilter === "statuses" ? [] : filters.statuses,
    sprints: ignoredFilter === "sprints" ? [] : filters.sprints
  };

  return issueMatchesFilters(issue, optionFilters);
}

function expandFilteredIssuesForHierarchy(directMatches, filters) {
  if (!directMatches.length) return [];

  const issueByKey = new Map(state.normalizedIssues.map((issue) => [issue.key, issue]));
  const childrenByParent = getChildrenByParent(state.normalizedIssues);
  const includedKeys = new Set(directMatches.map((issue) => issue.key));

  directMatches.forEach((issue) => {
    if (issue.parentKey && issueByKey.has(issue.parentKey)) {
      includedKeys.add(issue.parentKey);
    }

    if (filters.showSubtasks) {
      addDescendantKeys(issue.key, childrenByParent, includedKeys);
    }
  });

  return state.normalizedIssues.filter((issue) => (
    includedKeys.has(issue.key) && !isExcludedByGlobalVisibility(issue, filters)
  ));
}

function isExcludedByGlobalVisibility(issue, filters) {
  if (!filters.showSubtasks && issue.isSubtask) return true;
  if (filters.excludeDone && issue.isCompleted) return true;
  if (filters.hiddenAssignees?.includes(issue.assignee)) return true;
  return false;
}

function getChildrenByParent(issues) {
  const childrenByParent = new Map();

  issues.forEach((issue) => {
    if (!issue.parentKey) return;
    if (!childrenByParent.has(issue.parentKey)) childrenByParent.set(issue.parentKey, []);
    childrenByParent.get(issue.parentKey).push(issue);
  });

  return childrenByParent;
}

function addDescendantKeys(parentKey, childrenByParent, includedKeys) {
  (childrenByParent.get(parentKey) || []).forEach((child) => {
    includedKeys.add(child.key);
    addDescendantKeys(child.key, childrenByParent, includedKeys);
  });
}

function getGanttModuleIssues(options = {}) {
  if (!state.normalizedIssues.length) return [];

  const filterValues = state.currentFilters || getFilterValues();
  const moduleFilters = {
    ...filterValues,
    startDate: options.includeDateFilters === false ? "" : filterValues.startDate,
    endDate: options.includeDateFilters === false ? "" : filterValues.endDate
  };
  const matchedIssues = state.normalizedIssues.filter((issue) => issueMatchesFilters(issue, moduleFilters));
  const visibleIssues = expandFilteredIssuesForHierarchy(matchedIssues, moduleFilters);
  return sortIssues(getSubtaskAwareIssueScope(visibleIssues, { showSubtasks: moduleFilters.showSubtasks }));
}

// Dibuja el Gantt a partir de datos ya agrupados, sin conocer detalles de Jira.
function renderGantt(groupedData) {
  const allIssues = flattenGroupedIssues(groupedData);
  const rangeIssues = getGanttRangeSourceIssues(allIssues);
  const range = getGanttRange(rangeIssues);
  const issuesWithoutDates = allIssues.filter((issue) => !issue.startDate || !issue.endDate).length;

  elements.summaryText.textContent = state.language === "en"
    ? `${allIssues.length} visible tickets. ${issuesWithoutDates} without start or end date.`
    : `${allIssues.length} tickets visibles. ${issuesWithoutDates} sin fecha de inicio o fin.`;
  renderGanttIssueTable(getGanttModuleIssues());
  renderMissingEstimateTable(getGanttModuleIssues({ includeDateFilters: false }));

  if (!state.normalizedIssues.length) {
    elements.timelineHeader.innerHTML = "";
    renderEmptyState(t("initialLoad"), t("initialGanttDescription"));
    return;
  }

  if (!allIssues.length) {
    elements.timelineHeader.innerHTML = "";
    renderEmptyState(t("noResults"), state.language === "en" ? "No tickets match all active filters." : "No hay tickets que cumplan todos los filtros activos.");
    return;
  }

  if (!range) {
    elements.timelineHeader.innerHTML = "";
    renderEmptyState(t("noDates"), state.language === "en" ? "Filtered tickets do not have enough dates to draw the Gantt." : "Los tickets filtrados no tienen fechas suficientes para pintar el Gantt.");
    return;
  }

  const timelineUnits = getTimelineUnits(range, state.zoom);
  const minWidth = getTimelineMinWidth(timelineUnits.length);
  const sprintMarkers = getSelectedSprintMarkers(state.currentFilters?.sprints || [], allIssues, range);

  elements.timelineHeader.style.gridTemplateColumns = `repeat(${timelineUnits.length}, minmax(${getUnitWidth()}px, 1fr))`;
  elements.timelineHeader.innerHTML = timelineUnits.map(renderTimelineUnit).join("");
  elements.ganttBody.innerHTML = sprintMarkers.length ? renderSprintMarkerRow(sprintMarkers, range, timelineUnits.length) : "";
  elements.ganttContainer.style.setProperty("--timeline-min-width", `${minWidth}px`);

  renderGroupsIncrementally(groupedData, range, timelineUnits.length);
}

function getGanttRangeSourceIssues(visibleIssues) {
  const filters = state.currentFilters;

  if (!state.normalizedIssues.length) {
    return visibleIssues;
  }

  if (filters?.startDate || filters?.endDate) {
    return visibleIssues;
  }

  if (filters?.sprints?.length) {
    const sprintIssues = state.normalizedIssues.filter((issue) => issueMatchesSelectedSprints(issue, filters.sprints));
    return sprintIssues.length ? sprintIssues : visibleIssues;
  }

  return state.normalizedIssues;
}

// Render por lotes para mantener la UI usable con cientos o miles de filas.
function renderGroupsIncrementally(groupedData, range, totalUnits) {
  const rows = groupedData.flatMap((group) => buildRenderableRows(group, range, totalUnits));
  let cursor = 0;

  function renderBatch() {
    const html = rows.slice(cursor, cursor + BATCH_SIZE).join("");
    elements.ganttBody.insertAdjacentHTML("beforeend", html);
    cursor += BATCH_SIZE;

    if (cursor < rows.length) {
      window.requestAnimationFrame(renderBatch);
      return;
    }

    window.requestAnimationFrame(renderDependencyLines);
  }

  renderBatch();
}

function renderGanttIssueTable(issues) {
  if (!elements.ganttIssueTable || !elements.ganttIssueTableCounter) return;

  const tableIssues = issues.filter(isActiveOrPendingIssue);

  elements.ganttIssueTableCounter.textContent = state.language === "en"
    ? `${tableIssues.length} ${t("visibleRows")}.`
    : `${tableIssues.length} ${t("visibleRows")}.`;

  if (!tableIssues.length) {
    elements.ganttIssueTable.innerHTML = `
      <div class="gantt-ticket-table-empty">
        ${escapeHtml(state.normalizedIssues.length ? t("noActivePendingTickets") : t("noDataLoaded"))}
      </div>
    `;
    return;
  }

  elements.ganttIssueTable.innerHTML = `
    <div class="gantt-ticket-table-grid">
      <div class="gantt-ticket-table-row gantt-ticket-table-head" role="row">
        ${renderGanttTableHeaderCell("assignee", t("assignee"))}
        ${renderGanttTableHeaderCell("key", t("ticket"))}
        ${renderGanttTableHeaderCell("title", t("description"))}
        ${renderGanttTableHeaderCell("status", t("state"))}
        ${renderGanttTableHeaderCell("startDate", t("startDay"))}
        ${renderGanttTableHeaderCell("endDate", t("dueDate"))}
        ${renderGanttTableHeaderCell("originalEstimate", t("originalEstimate"))}
        ${renderGanttTableHeaderCell("timeSpent", t("timeTracking"))}
        <span role="columnheader">${escapeHtml(t("timeLogs"))}</span>
      </div>
      ${sortGanttTableIssues(tableIssues).map(renderGanttIssueTableRow).join("")}
    </div>
  `;
}

function renderMissingEstimateTable(issues) {
  if (!elements.missingEstimateTable || !elements.missingEstimateTableCounter) return;

  const rows = getMissingEstimateRows(issues);
  const rowsWithPending = rows.filter((row) => row.total > 0).length;
  elements.missingEstimateTableCounter.textContent = !state.normalizedIssues.length
    ? t("noDataLoaded")
    : rows.length
    ? `${rowsWithPending} ${t("missingEstimateRows")} / ${rows.length} ${t("visibleAssignees")}.`
    : t("noMissingEstimates");

  if (!rows.length) {
    elements.missingEstimateTable.innerHTML = `
      <div class="gantt-ticket-table-empty">
        ${escapeHtml(state.normalizedIssues.length ? t("noMissingEstimates") : t("noDataLoaded"))}
      </div>
    `;
    return;
  }

  elements.missingEstimateTable.innerHTML = `
    <div class="missing-estimate-grid">
      <div class="missing-estimate-row missing-estimate-head" role="row">
        <span role="columnheader">${escapeHtml(t("assignee"))}</span>
        <span role="columnheader">${escapeHtml(t("pendingTotal"))}</span>
        <span role="columnheader">${escapeHtml(t("missingStartDate"))}</span>
        <span role="columnheader">${escapeHtml(t("missingDueDate"))}</span>
        <span role="columnheader">${escapeHtml(t("missingOriginalEstimate"))}</span>
        <span role="columnheader">${escapeHtml(t("ticketDetail"))}</span>
      </div>
      ${rows.map(renderMissingEstimateRow).join("")}
    </div>
  `;
}

function renderMissingEstimateRow(row) {
  const isExpanded = state.expandedMissingEstimates.has(row.assignee);
  const hasPending = row.total > 0;

  return `
    <div class="missing-estimate-row" role="row">
      <span role="cell" title="${escapeHtml(row.assignee)}">${escapeHtml(row.assignee)}</span>
      <strong role="cell">${row.total}</strong>
      <span role="cell">${row.missingStart}</span>
      <span role="cell">${row.missingDue}</span>
      <span role="cell">${row.missingOriginal}</span>
      <span role="cell">
        <button class="daily-detail-toggle" type="button" data-missing-estimate-toggle="${escapeHtml(row.assignee)}" aria-expanded="${String(isExpanded)}" ${hasPending ? "" : "disabled"}>
          ${escapeHtml(hasPending ? (isExpanded ? t("hideLogs") : t("viewTickets")) : t("noData"))}
        </button>
      </span>
    </div>
    ${isExpanded && hasPending ? renderMissingEstimateDetail(row) : ""}
  `;
}

function renderMissingEstimateDetail(row) {
  return `
    <div class="missing-estimate-detail">
      <div class="missing-estimate-detail-head">
        <span>${escapeHtml(t("ticket"))}</span>
        <span>${escapeHtml(t("description"))}</span>
        <span>${escapeHtml(t("state"))}</span>
        <span>${escapeHtml(t("startDay"))}</span>
        <span>${escapeHtml(t("dueDate"))}</span>
        <span>${escapeHtml(t("originalEstimate"))}</span>
      </div>
      ${row.issues.map((issue) => renderMissingEstimateIssue(issue)).join("")}
    </div>
  `;
}

function renderMissingEstimateIssue(issue) {
  const issueUrl = getJiraIssueUrl(issue);
  const issueTitle = `${issue.key} - ${issue.title}`;

  return `
      <div class="missing-estimate-detail-row ${issue.isEpic ? "is-epic" : ""}">
      <span title="${escapeHtml(issueTitle)}">
        ${issueUrl
          ? `<a href="${escapeHtml(issueUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(issue.key)}</a>`
          : `<strong>${escapeHtml(issue.key)}</strong>`}
      </span>
      <span title="${escapeHtml(issue.title)}">${escapeHtml(issue.title)}</span>
      <span><span class="status-pill ${issue.statusClass}" title="${escapeHtml(issue.status)}">${escapeHtml(issue.status)}</span></span>
      <span title="${escapeHtml(issue.plannedStartDate || t("noDate"))}">${escapeHtml(formatTableDate(issue.plannedStartDate))}</span>
      <span title="${escapeHtml(issue.plannedEndDate || t("noDate"))}">${escapeHtml(formatTableDate(issue.plannedEndDate))}</span>
      <span title="${escapeHtml(getOriginalEstimateTitle(issue))}">${escapeHtml(issue.originalEstimate.label)}</span>
    </div>
  `;
}

function getMissingEstimateRows(issues) {
  const grouped = groupBy(issues, "assignee");

  return grouped
    .map(([assignee, group]) => {
      const missingIssues = group.filter(hasMissingEstimateData);
      return {
        assignee,
        issues: [...missingIssues].sort((a, b) => a.key.localeCompare(b.key)),
        total: missingIssues.length,
        missingStart: missingIssues.filter((issue) => !issue.plannedStartDate).length,
        missingDue: missingIssues.filter((issue) => !issue.plannedEndDate).length,
        missingOriginal: missingIssues.filter((issue) => !issue.originalEstimate.seconds).length
      };
    })
    .sort((a, b) => {
      const totalCompare = b.total - a.total;
      return totalCompare || a.assignee.localeCompare(b.assignee);
    });
}

function hasMissingEstimateData(issue) {
  return !issue.plannedStartDate || !issue.plannedEndDate || !issue.originalEstimate.seconds;
}

function renderGanttTableHeaderCell(field, label) {
  const isActive = state.ganttTableSort.field === field;
  const nextDirection = isActive && state.ganttTableSort.direction === "asc" ? "desc" : "asc";
  const icon = isActive ? (state.ganttTableSort.direction === "asc" ? "↑" : "↓") : "↕";
  const title = nextDirection === "asc" ? t("sortAscending") : t("sortDescending");

  return `
    <span role="columnheader">
      <button class="table-sort-button ${isActive ? "active" : ""}" type="button" data-gantt-table-sort="${escapeHtml(field)}" aria-label="${escapeHtml(`${title}: ${label}`)}" title="${escapeHtml(`${title}: ${label}`)}">
        <span>${escapeHtml(label)}</span>
        <i aria-hidden="true">${escapeHtml(icon)}</i>
      </button>
    </span>
  `;
}

function handleGanttTableSortClick(event) {
  const button = event.target.closest("[data-gantt-table-sort]");
  if (!button) return;

  const field = button.dataset.ganttTableSort;
  const current = state.ganttTableSort;
  state.ganttTableSort = {
    field,
    direction: current.field === field && current.direction === "asc" ? "desc" : "asc"
  };

  renderGanttIssueTable(getGanttModuleIssues());
}

async function handleWorklogToggleClick(event) {
  const button = event.target.closest("[data-worklog-toggle]");
  if (!button) return;

  const issueKey = button.dataset.worklogToggle;
  if (!issueKey) return;

  if (state.expandedWorklogs.has(issueKey)) {
    state.expandedWorklogs.delete(issueKey);
    renderGanttIssueTable(getGanttModuleIssues());
    return;
  }

  state.expandedWorklogs.add(issueKey);

  if (!state.worklogsByIssue[issueKey]) {
    await loadIssueWorklogs(issueKey);
    return;
  }

  renderGanttIssueTable(getGanttModuleIssues());
}

function handleMissingEstimateToggleClick(event) {
  const button = event.target.closest("[data-missing-estimate-toggle]");
  if (!button) return;

  const assignee = button.dataset.missingEstimateToggle;
  if (!assignee) return;

  toggleSetValue(state.expandedMissingEstimates, assignee);
  renderMissingEstimateTable(getGanttModuleIssues({ includeDateFilters: false }));
}

async function loadIssueWorklogs(issueKey) {
  const issue = findIssueByKey(issueKey);
  const hasCompleteEmbeddedWorklogs = issue?.worklogs?.length && (!issue.worklogTotal || issue.worklogs.length >= issue.worklogTotal);

  if (issue && !issue.timeTracking.spentSeconds && !issue.worklogs?.length) {
    state.worklogsByIssue[issueKey] = {
      items: [],
      error: "",
      emptyMessage: t("noLoggedHours")
    };
    renderGanttIssueTable(getGanttModuleIssues());
    return;
  }

  if (hasCompleteEmbeddedWorklogs) {
    state.worklogsByIssue[issueKey] = {
      items: issue.worklogs,
      error: ""
    };
    renderGanttIssueTable(getGanttModuleIssues());
    return;
  }

  state.worklogLoading.add(issueKey);
  renderGanttIssueTable(getGanttModuleIssues());

  try {
    const worklogs = await getIssueWorklogs(issueKey);
    state.worklogsByIssue[issueKey] = {
      items: worklogs,
      error: ""
    };
  } catch (error) {
    if (issue?.worklogs?.length) {
      state.worklogsByIssue[issueKey] = {
        items: issue.worklogs,
        error: ""
      };
    } else {
      state.worklogsByIssue[issueKey] = {
        items: [],
        error: error.message || "No se pudieron cargar los registros de tiempo."
      };
    }
  } finally {
    state.worklogLoading.delete(issueKey);
    renderGanttIssueTable(getGanttModuleIssues());
  }
}

function findIssueByKey(issueKey) {
  return state.normalizedIssues.find((issue) => issue.key === issueKey);
}

async function getIssueWorklogs(issueKey) {
  const baseUrl = getInputValue("#jiraBaseUrl").replace(/\/$/, "");
  const user = getInputValue("#jiraUser");
  const token = getInputValue("#jiraToken");

  if (!baseUrl || !user || !token) {
    throw new Error("Completa URL base de Jira, usuario/email y API token para consultar worklogs.");
  }

  let response;

  try {
    response = await fetch("/api/jira/worklog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        baseUrl,
        user,
        token,
        issueKey
      })
    });
  } catch (error) {
    throw new Error("No se pudo conectar con el proxy local para consultar registros de tiempo.");
  }

  if (!response.ok) {
    const detail = await readErrorResponse(response);
    if (response.status === 404 && !detail) {
      throw new Error("El proxy local no tiene disponible la ruta de registros de tiempo. Reinicia el servidor local y vuelve a intentar.");
    }
    throw new Error(detail || `No se pudieron consultar los registros. Codigo HTTP: ${response.status}.`);
  }

  const data = await response.json();
  return normalizeWorklogs(data.worklogs || []);
}

function sortGanttTableIssues(issues) {
  const { field, direction } = state.ganttTableSort;
  const multiplier = direction === "asc" ? 1 : -1;

  return [...issues].sort((a, b) => {
    const left = getGanttTableSortValue(a, field);
    const right = getGanttTableSortValue(b, field);
    const comparison = typeof left === "number" || typeof right === "number"
      ? (Number(left) || 0) - (Number(right) || 0)
      : String(left || "").localeCompare(String(right || ""), undefined, { numeric: true, sensitivity: "base" });

    if (comparison !== 0) return comparison * multiplier;
    return a.key.localeCompare(b.key, undefined, { numeric: true, sensitivity: "base" });
  });
}

function getGanttTableSortValue(issue, field) {
  const values = {
    assignee: issue.assignee,
    key: issue.key,
    title: issue.title,
    status: issue.status,
    startDate: issue.startDate || "",
    endDate: issue.endDate || "",
    originalEstimate: issue.originalEstimate.seconds || 0,
    timeSpent: issue.timeTracking.spentSeconds || 0
  };

  return values[field] ?? "";
}

function isActiveOrPendingIssue(issue) {
  return ["status-todo", "status-progress", "status-blocked", "status-done"].includes(issue.statusClass)
    || ["Por hacer", "En curso", "Pendiente/Bloqueado", "Finalizada", "Finalizado"].includes(issue.status);
}

function renderGanttIssueTableRow(issue) {
  const issueUrl = getJiraIssueUrl(issue);
  const issueTitle = `${issue.key} - ${issue.title}`;
  const isExpanded = state.expandedWorklogs.has(issue.key);
  const isLoading = state.worklogLoading.has(issue.key);

  return `
    <div class="gantt-ticket-table-row ${issue.isEpic ? "is-epic" : ""}" role="row">
      <span role="cell" title="${escapeHtml(issue.assignee)}">${escapeHtml(issue.assignee)}</span>
      <span role="cell">
        ${issueUrl
          ? `<a href="${escapeHtml(issueUrl)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(t("openInJira"))}: ${escapeHtml(issueTitle)}">${escapeHtml(issue.key)}</a>`
          : `<strong title="${escapeHtml(issueTitle)}">${escapeHtml(issue.key)}</strong>`}
      </span>
      <span role="cell" title="${escapeHtml(issue.title)}">${escapeHtml(issue.title)}</span>
      <span role="cell"><span class="status-pill ${issue.statusClass}" title="${escapeHtml(issue.status)}">${escapeHtml(issue.status)}</span></span>
      <span role="cell" title="${escapeHtml(issue.startDate || t("noDate"))}">${escapeHtml(formatTableDate(issue.startDate))}</span>
      <span role="cell" title="${escapeHtml(issue.endDate || t("noDate"))}">${escapeHtml(formatTableDate(issue.endDate))}</span>
      <span role="cell" title="${escapeHtml(getOriginalEstimateTitle(issue))}">${escapeHtml(issue.originalEstimate.label)}</span>
      <span role="cell" title="${escapeHtml(issue.timeTracking.tooltip)}">${escapeHtml(issue.timeTracking.tooltip)}</span>
      <span role="cell">
        <button class="daily-detail-toggle" type="button" data-worklog-toggle="${escapeHtml(issue.key)}" aria-expanded="${String(isExpanded)}" ${isLoading ? "disabled" : ""}>
          ${escapeHtml(isLoading ? t("loadingLogs") : isExpanded ? t("hideLogs") : t("viewLogs"))}
        </button>
      </span>
    </div>
    ${isExpanded ? renderIssueWorklogDetail(issue) : ""}
  `;
}

function renderIssueWorklogDetail(issue) {
  const worklogState = state.worklogsByIssue[issue.key];

  if (state.worklogLoading.has(issue.key)) {
    return `<div class="gantt-worklog-detail"><div class="metric-empty">${escapeHtml(t("loadingLogs"))}</div></div>`;
  }

  if (worklogState?.error) {
    return `<div class="gantt-worklog-detail"><div class="metric-empty">${escapeHtml(worklogState.error)}</div></div>`;
  }

  const worklogs = worklogState?.items || [];

  if (!worklogs.length) {
    return `<div class="gantt-worklog-detail"><div class="metric-empty">${escapeHtml(worklogState?.emptyMessage || t("noTimeLogs"))}</div></div>`;
  }

  return `
    <div class="gantt-worklog-detail">
      <div class="worklog-table" role="table" aria-label="Registros de tiempo de ${escapeHtml(issue.key)}">
        <div class="worklog-row worklog-head" role="row">
          <span role="columnheader">${escapeHtml(t("worklogDescription"))}</span>
          <span role="columnheader">${escapeHtml(t("worklogDate"))}</span>
          <span role="columnheader">${escapeHtml(t("worklogHours"))}</span>
        </div>
        ${worklogs.map((worklog) => `
          <div class="worklog-row" role="row">
            <span role="cell" title="${escapeHtml(worklog.description)}">${escapeHtml(worklog.description)}</span>
            <span role="cell" title="${escapeHtml(worklog.startedRaw || worklog.started)}">${escapeHtml(worklog.startedLabel)}</span>
            <strong role="cell" title="${escapeHtml(worklog.hoursLabel)}">${escapeHtml(worklog.hoursLabel)}</strong>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function formatTableDate(dateValue) {
  return dateValue ? formatDateRangeDate(dateValue) : t("noDate");
}

function formatDateTime(value) {
  if (!value) return t("noDate");
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return formatTableDate(value);

  return date.toLocaleString(state.language === "en" ? "en-US" : "es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function buildRenderableRows(group, range, totalUnits) {
  const userCollapsed = state.collapsedUsers.has(group.assignee);
  const rows = [renderUserRow(group, userCollapsed)];

  if (userCollapsed) {
    return rows;
  }

  group.issues.forEach((issue) => {
    const taskCollapsed = state.collapsedTasks.has(issue.key);
    rows.push(renderIssueRow(issue, range, totalUnits, 0, taskCollapsed));

    if (!taskCollapsed) {
      (issue.subtasks || []).forEach((subtask) => {
        rows.push(renderIssueRow(subtask, range, totalUnits, 1, false));
      });
    }
  });

  return rows;
}

function renderUserRow(group, collapsed) {
  const groupType = state.ganttGroupBy === "principal" ? t("principal") : t("assignee");

  return `
    <div class="user-row">
      <button class="user-name row-toggle" type="button" data-collapse-user="${escapeHtml(group.assignee)}" aria-label="${collapsed ? "Expandir" : "Colapsar"} ${escapeHtml(groupType)} ${escapeHtml(group.assignee)}">
        <span>${collapsed ? "+" : "-"}</span>
        ${escapeHtml(group.assignee)}
        <small>${group.issues.length} ${escapeHtml(t("tasks"))}</small>
      </button>
      <div class="user-track"></div>
    </div>
  `;
}

function renderIssueRow(issue, range, totalUnits, level, collapsed) {
  const isSubtask = level > 0;
  const hasSubtasks = !isSubtask && issue.subtasks?.length;
  const issueUrl = getJiraIssueUrl(issue);
  const issueTitle = `${issue.key} - ${issue.title}`;
  const rowClass = [
    "gantt-row",
    issue.isEpic ? "row-epic" : "",
    issue.isOverdue ? "row-overdue" : "",
    issue.isDueSoon ? "row-due-soon" : "",
    issue.isCompleted ? "row-completed" : ""
  ].filter(Boolean).join(" ");

  return `
    <div class="${rowClass}" data-issue-row="${escapeHtml(issue.key)}">
      <div class="issue-cell ${isSubtask ? "subtask-cell" : ""} ${issue.isEpic ? "epic-cell" : ""}">
        <div class="issue-title">
          ${hasSubtasks ? `<button class="task-toggle" type="button" data-collapse-task="${escapeHtml(issue.key)}" aria-label="${collapsed ? "Expandir" : "Colapsar"} subtareas de ${escapeHtml(issue.key)}">${collapsed ? "+" : "-"}</button>` : `<span class="task-spacer"></span>`}
          <span class="priority-dot ${getPriorityClass(issue.priority)}" title="${escapeHtml(t("priority"))}: ${escapeHtml(issue.priority)}"></span>
          ${issueUrl
            ? `<a class="issue-key issue-link" href="${escapeHtml(issueUrl)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(t("openInJira"))}: ${escapeHtml(issueTitle)}">${escapeHtml(issue.key)}</a>`
            : `<span class="issue-key" title="${escapeHtml(issueTitle)}">${escapeHtml(issue.key)}</span>`}
          ${issueUrl
            ? `<a class="issue-summary issue-link" href="${escapeHtml(issueUrl)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(issueTitle)}">${escapeHtml(issue.title)}</a>`
            : `<span class="issue-summary" title="${escapeHtml(issueTitle)}">${escapeHtml(issue.title)}</span>`}
        </div>
        <div class="issue-meta">
          <span class="${issue.isEpic ? "epic-type-pill" : ""}" title="${escapeHtml(issue.issueType)}">${escapeHtml(issue.issueType)}</span>
          <span class="status-pill ${issue.statusClass}">${escapeHtml(issue.status)}</span>
          <span title="${escapeHtml(issue.principal)}">${escapeHtml(issue.principal)}</span>
          <span title="${escapeHtml(issue.project)}">${escapeHtml(issue.project)}</span>
          <span title="${escapeHtml(`${getOriginalEstimateTitle(issue)} | ${issue.timeTracking.tooltip}`)}">${escapeHtml(issue.originalEstimate.label)} / ${escapeHtml(issue.timeTracking.shortLabel)}</span>
          ${issue.dependencyCount ? `<span title="${escapeHtml(t("dependenciesDetected"))}">${issue.dependencyCount} ${escapeHtml(t("dependenciesCount"))}</span>` : ""}
        </div>
      </div>
      <div class="timeline-row" style="--unit-width: calc(100% / ${totalUnits});">
        ${renderBar(issue, range, isSubtask)}
      </div>
    </div>
  `;
}

function renderBar(issue, range, isSubtask) {
  const tooltip = getTooltipText(issue);
  const issueUrl = getJiraIssueUrl(issue);

  if (!issue.startDate || !issue.endDate) {
    const tag = issueUrl ? "a" : "span";
    const linkAttrs = issueUrl ? `href="${escapeHtml(issueUrl)}" target="_blank" rel="noopener noreferrer"` : "";

    return `
      <${tag} class="bar no-dates" ${linkAttrs} data-issue-key="${escapeHtml(issue.key)}" style="left: 0; width: 140px;" title="${escapeHtml(tooltip)}">
        ${escapeHtml(issue.key)} · ${escapeHtml(t("noDate"))}
      </${tag}>
    `;
  }

  const start = parseLocalDate(issue.startDate);
  const end = parseLocalDate(issue.endDate);
  const position = getBarPosition(start, end, range);
  const barText = `${issue.key} · ${getShortTitle(issue.title)} · ${issue.status}`;
  const typeClass = [isSubtask ? "subtask" : "", issue.isEpic ? "epic" : ""].filter(Boolean).join(" ");
  const progress = getIssueProgress(issue.statusClass);

  const tag = issueUrl ? "a" : "span";
  const linkAttrs = issueUrl ? `href="${escapeHtml(issueUrl)}" target="_blank" rel="noopener noreferrer"` : "";

  return `
    <${tag} class="bar ${typeClass} ${issue.statusClass}" ${linkAttrs} data-issue-key="${escapeHtml(issue.key)}" style="left: ${position.left}%; width: ${position.width}%;" title="${escapeHtml(tooltip)}">
      <span class="bar-progress" style="width: ${progress}%"></span>
      <span class="bar-label">${escapeHtml(barText)}</span>
    </${tag}>
  `;
}

function renderDependencyLines() {
  clearDependencyLines();

  const bars = getVisibleGanttBars();
  if (bars.size < 2) return;

  const links = getVisibleDependencyLinks(bars);
  if (!links.length) return;

  const bodyRect = elements.ganttBody.getBoundingClientRect();
  const layer = document.createElement("div");
  layer.className = "dependency-layer";
  layer.style.width = `${elements.ganttBody.scrollWidth}px`;
  layer.style.height = `${elements.ganttBody.scrollHeight}px`;

  links.forEach((link) => {
    const fromBar = bars.get(link.fromKey);
    const toBar = bars.get(link.toKey);
    if (!fromBar || !toBar) return;

    const fromRect = fromBar.getBoundingClientRect();
    const toRect = toBar.getBoundingClientRect();
    const route = getGanttDependencyRoute(link, fromRect, toRect, bodyRect);
    const midX = getDependencyElbowX(route.fromX, route.toX, route.arrowDirection === "right");

    appendDependencySegment(layer, "horizontal", route.fromX, route.fromY, midX, route.fromY, link.type);
    appendDependencySegment(layer, "vertical", midX, route.fromY, midX, route.toY, link.type);
    appendDependencySegment(layer, "horizontal", midX, route.toY, route.toX, route.toY, link.type);
    appendDependencyArrow(layer, route.toX, route.toY, route.arrowDirection, link.type);
  });

  elements.ganttBody.appendChild(layer);
}

function getGanttDependencyRoute(link, fromRect, toRect, bodyRect) {
  if (link.type === "blocked-by") {
    return {
      fromX: toRect.left - bodyRect.left,
      fromY: toRect.top - bodyRect.top + (toRect.height / 2),
      toX: fromRect.right - bodyRect.left,
      toY: fromRect.top - bodyRect.top + (fromRect.height / 2),
      arrowDirection: "left"
    };
  }

  return {
    fromX: fromRect.right - bodyRect.left,
    fromY: fromRect.top - bodyRect.top + (fromRect.height / 2),
    toX: toRect.left - bodyRect.left,
    toY: toRect.top - bodyRect.top + (toRect.height / 2),
    arrowDirection: "right"
  };
}

function clearDependencyLines() {
  elements.ganttBody.querySelector(".dependency-layer")?.remove();
}

function getVisibleGanttBars() {
  return [...elements.ganttBody.querySelectorAll(".bar[data-issue-key]")]
    .reduce((bars, bar) => {
      bars.set(bar.dataset.issueKey, bar);
      return bars;
    }, new Map());
}

function getVisibleDependencyLinks(visibleBars) {
  const visibleKeys = new Set(visibleBars.keys());
  const uniqueLinks = new Set();
  const visibleIssues = flattenGroupedIssues(state.groupedData);

  return visibleIssues.flatMap((issue) => issue.dependencyLinks || [])
    .filter((link) => visibleKeys.has(link.fromKey) && visibleKeys.has(link.toKey))
    .filter((link) => {
      const signature = `${link.fromKey}->${link.toKey}`;
      if (uniqueLinks.has(signature)) return false;
      uniqueLinks.add(signature);
      return true;
    });
}

function getDependencyElbowX(fromX, toX, targetIsAfterSource) {
  const distance = Math.abs(toX - fromX);
  if (distance < 34) return (fromX + toX) / 2;

  return targetIsAfterSource
    ? Math.min(fromX + 52, toX - 16)
    : Math.max(fromX - 52, toX + 16);
}

function appendDependencySegment(layer, direction, startX, startY, endX, endY, type) {
  const segment = document.createElement("span");
  const left = Math.min(startX, endX);
  const top = Math.min(startY, endY);
  const width = direction === "vertical" ? 2 : Math.max(Math.abs(endX - startX), 2);
  const height = direction === "horizontal" ? 2 : Math.max(Math.abs(endY - startY), 2);

  segment.className = `dependency-segment dependency-${direction} dependency-${type}`;
  segment.style.left = `${left}px`;
  segment.style.top = `${top}px`;
  segment.style.width = `${width}px`;
  segment.style.height = `${height}px`;
  layer.appendChild(segment);
}

function appendDependencyArrow(layer, x, y, direction, type) {
  const arrow = document.createElement("span");
  arrow.className = `dependency-arrow dependency-arrow-${direction} dependency-${type}`;
  arrow.style.left = `${direction === "right" ? x - 8 : x}px`;
  arrow.style.top = `${y - 5}px`;
  layer.appendChild(arrow);
}

function renderPertEmptyState(title, description) {
  elements.pertCounter.textContent = t("noData");
  elements.pertContent.hidden = true;
  elements.pertEmptyState.hidden = false;
  elements.pertEmptyState.innerHTML = `<strong>${escapeHtml(title)}</strong><span>${escapeHtml(description)}</span>`;
}

function renderPertDiagram(issues) {
  if (!state.normalizedIssues.length) {
    renderPertEmptyState(t("initialLoad"), t("pertInitialDescription"));
    return;
  }

  const graph = getPertGraphData(issues);
  state.pertGraph = graph;
  const limitNote = graph.truncated
    ? (state.language === "en" ? ` · showing first ${PERT_MAX_NODES}` : ` · mostrando primeras ${PERT_MAX_NODES}`)
    : "";
  elements.pertCounter.textContent = (state.language === "en"
    ? `${graph.nodes.length} activities / ${graph.links.length} dependencies`
    : `${graph.nodes.length} actividades / ${graph.links.length} dependencias`) + limitNote;

  if (!graph.links.length) {
    renderPertEmptyState(t("noResults"), t("noPertDependencies"));
    return;
  }

  elements.pertEmptyState.hidden = true;
  elements.pertContent.hidden = false;
  elements.pertNodeCount.textContent = graph.nodes.length;
  elements.pertLinkCount.textContent = graph.links.length;
  elements.pertBottleneckCount.textContent = graph.bottlenecks.length;
  elements.pertGraph.style.width = `${graph.width}px`;
  elements.pertGraph.style.height = `${graph.height}px`;
  elements.pertGraph.innerHTML = `
    <div class="pert-connection-layer" aria-hidden="true"></div>
    ${graph.nodes.map(renderPertNode).join("")}
  `;
  renderPertBottleneckList(graph.bottlenecks);
  window.requestAnimationFrame(() => renderPertConnections(graph.links));
}

function getPertGraphData(issues) {
  const issueByKey = new Map(issues.map((issue) => [issue.key, issue]));
  const uniqueLinks = new Map();

  issues.flatMap((issue) => issue.dependencyLinks || [])
    .filter((link) => issueByKey.has(link.fromKey) && issueByKey.has(link.toKey))
    .forEach((link) => {
      const signature = `${link.fromKey}->${link.toKey}`;
      if (!uniqueLinks.has(signature) || link.type === "blocks") uniqueLinks.set(signature, link);
    });

  const allLinks = [...uniqueLinks.values()];
  const linkedKeys = new Set(allLinks.flatMap((link) => [link.fromKey, link.toKey]));
  const selectedKeys = [...linkedKeys].slice(0, PERT_MAX_NODES);
  const visibleKeys = new Set(selectedKeys);
  const links = allLinks.filter((link) => visibleKeys.has(link.fromKey) && visibleKeys.has(link.toKey));
  const levels = calculatePertLevels(selectedKeys, links);
  const metricsByKey = calculatePertBottleneckMetrics(selectedKeys, links, issueByKey);
  const columns = new Map();

  const nodes = selectedKeys
    .map((key) => {
      const issue = issueByKey.get(key);
      const level = levels.get(key) || 0;
      const metrics = metricsByKey.get(key);
      if (!columns.has(level)) columns.set(level, []);
      columns.get(level).push({ issue, metrics });
      return { issue, level, metrics };
    })
    .sort((a, b) => a.level - b.level || b.metrics.score - a.metrics.score || a.issue.key.localeCompare(b.issue.key));

  columns.forEach((column) => {
    column.sort((a, b) => b.metrics.score - a.metrics.score || a.issue.key.localeCompare(b.issue.key));
  });

  nodes.forEach((node) => {
    const column = columns.get(node.level);
    const row = column.findIndex((item) => item.issue.key === node.issue.key);
    node.x = 24 + (node.level * (PERT_NODE_WIDTH + PERT_COLUMN_GAP));
    node.y = 24 + (row * (PERT_NODE_HEIGHT + PERT_ROW_GAP));
  });

  const maxLevel = Math.max(...nodes.map((node) => node.level), 0);
  const maxRows = Math.max(...[...columns.values()].map((column) => column.length), 1);
  const bottlenecks = nodes
    .filter((node) => node.metrics.isBottleneck)
    .sort((a, b) => b.metrics.score - a.metrics.score || a.issue.key.localeCompare(b.issue.key));

  return {
    nodes,
    links,
    bottlenecks,
    truncated: linkedKeys.size > PERT_MAX_NODES,
    width: Math.max(720, 48 + ((maxLevel + 1) * PERT_NODE_WIDTH) + (maxLevel * PERT_COLUMN_GAP)),
    height: Math.max(260, 48 + (maxRows * PERT_NODE_HEIGHT) + ((maxRows - 1) * PERT_ROW_GAP))
  };
}

function calculatePertLevels(keys, links) {
  const levels = new Map(keys.map((key) => [key, 0]));
  const incomingCount = new Map(keys.map((key) => [key, 0]));
  const outgoing = new Map(keys.map((key) => [key, []]));

  links.forEach((link) => {
    incomingCount.set(link.toKey, (incomingCount.get(link.toKey) || 0) + 1);
    outgoing.get(link.fromKey)?.push(link.toKey);
  });

  const queue = keys.filter((key) => incomingCount.get(key) === 0).sort();
  const processed = new Set();

  while (queue.length) {
    const key = queue.shift();
    processed.add(key);

    (outgoing.get(key) || []).forEach((targetKey) => {
      levels.set(targetKey, Math.max(levels.get(targetKey) || 0, (levels.get(key) || 0) + 1));
      incomingCount.set(targetKey, (incomingCount.get(targetKey) || 0) - 1);
      if (incomingCount.get(targetKey) === 0) queue.push(targetKey);
    });
  }

  let fallbackLevel = Math.max(...levels.values(), 0) + 1;
  keys.filter((key) => !processed.has(key)).sort().forEach((key) => {
    levels.set(key, fallbackLevel);
    fallbackLevel += 1;
  });

  return levels;
}

function calculatePertBottleneckMetrics(keys, links, issueByKey) {
  const incoming = new Map(keys.map((key) => [key, []]));
  const outgoing = new Map(keys.map((key) => [key, []]));

  links.forEach((link) => {
    outgoing.get(link.fromKey)?.push(link.toKey);
    incoming.get(link.toKey)?.push(link.fromKey);
  });

  return new Map(keys.map((key) => {
    const issue = issueByKey.get(key);
    const downstreamCount = countPertDownstream(key, outgoing, new Set());
    const outgoingCount = outgoing.get(key)?.length || 0;
    const incomingCount = incoming.get(key)?.length || 0;
    const causes = [];
    let score = (outgoingCount * 16) + (incomingCount * 5) + (downstreamCount * 6);

    const isEn = state.language === "en";
    if (outgoingCount >= 2) causes.push(isEn ? `${outgoingCount} activities depend directly` : `${outgoingCount} actividades dependen directamente`);
    if (downstreamCount >= 3) causes.push(isEn ? `${downstreamCount} downstream activities` : `${downstreamCount} actividades aguas abajo`);
    if (issue.statusClass === "status-blocked") {
      score += 25;
      causes.push(isEn ? "pending or blocked status" : "estado pendiente o bloqueado");
    }
    if (issue.isOverdue) {
      score += 20;
      causes.push(isEn ? "overdue" : "fecha de vencimiento superada");
    } else if (issue.isDueSoon) {
      score += 10;
      causes.push(isEn ? "due date approaching" : "fecha de vencimiento cercana");
    }
    if (issue.isCompleted) score = Math.max(score - 20, 0);

    return [key, {
      score: Math.min(Math.round(score), 100),
      outgoingCount,
      incomingCount,
      downstreamCount,
      causes,
      isBottleneck: score >= 32 || (outgoingCount >= 2 && downstreamCount >= 3)
    }];
  }));
}

function countPertDownstream(key, outgoing, visited) {
  if (visited.has(key)) return 0;
  visited.add(key);

  const downstream = new Set();
  (outgoing.get(key) || []).forEach((targetKey) => {
    downstream.add(targetKey);
    const nestedVisited = new Set(visited);
    collectPertDownstream(targetKey, outgoing, nestedVisited, downstream);
  });
  return downstream.size;
}

function collectPertDownstream(key, outgoing, visited, downstream) {
  if (visited.has(key)) return;
  visited.add(key);
  (outgoing.get(key) || []).forEach((targetKey) => {
    downstream.add(targetKey);
    collectPertDownstream(targetKey, outgoing, visited, downstream);
  });
}

function renderPertNode(node) {
  const issue = node.issue;
  const issueUrl = getJiraIssueUrl(issue);
  const classes = [
    "pert-node",
    issue.statusClass,
    issue.isEpic ? "is-epic" : "",
    node.metrics.isBottleneck ? "pert-bottleneck" : ""
  ].filter(Boolean).join(" ");

  const dueDateLabel = issue.endDate ? formatTableDate(issue.endDate) : "";
  const dueDateClass = issue.isOverdue ? "pert-date-overdue" : issue.isDueSoon ? "pert-date-soon" : "";
  const depsOut = node.metrics.outgoingCount;
  const depsIn  = node.metrics.incomingCount;
  const depLabel = [
    depsOut ? `${depsOut} ${state.language === "en" ? "blocker" : "bloquea"}${depsOut > 1 ? "s" : ""}` : "",
    depsIn  ? `${depsIn} ${state.language === "en" ? "blocked-by" : "bloqueado por"}` : ""
  ].filter(Boolean).join(" · ");

  return `
    <article class="${classes}" data-pert-node-key="${escapeHtml(issue.key)}" style="left: ${node.x}px; top: ${node.y}px;">
      <header>
        ${issueUrl
          ? `<a href="${escapeHtml(issueUrl)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(t("openInJira"))}: ${escapeHtml(issue.key)}">${escapeHtml(issue.key)}</a>`
          : `<strong>${escapeHtml(issue.key)}</strong>`}
        ${node.metrics.isBottleneck ? `<span class="pert-risk-pill">${escapeHtml(state.language === "en" ? "Bottleneck" : "Cuello de botella")}</span>` : ""}
      </header>
      <h4 title="${escapeHtml(issue.title)}">${escapeHtml(issue.title)}</h4>
      <p class="pert-node-assignee" title="${escapeHtml(issue.assignee)}">${escapeHtml(issue.assignee)}</p>
      <footer>
        <span class="status-pill ${issue.statusClass}" title="${escapeHtml(issue.status)}">${escapeHtml(issue.status)}</span>
        <span class="pert-node-meta">
          ${dueDateLabel ? `<span class="pert-node-date ${dueDateClass}" title="${escapeHtml(state.language === "en" ? "Due date" : "Vencimiento")}: ${escapeHtml(dueDateLabel)}">⏱ ${escapeHtml(dueDateLabel)}</span>` : ""}
          <small title="${escapeHtml(getOriginalEstimateTitle(issue))}">${escapeHtml(issue.originalEstimate.label)}</small>
        </span>
      </footer>
      ${depLabel ? `<div class="pert-dep-label">${escapeHtml(depLabel)}</div>` : ""}
    </article>
  `;
}

function renderPertConnections(links) {
  const layer = elements.pertGraph.querySelector(".pert-connection-layer");
  if (!layer) return;
  layer.innerHTML = "";
  layer.style.width = `${elements.pertGraph.scrollWidth}px`;
  layer.style.height = `${elements.pertGraph.scrollHeight}px`;

  links.forEach((link) => {
    const fromNode = elements.pertGraph.querySelector(`[data-pert-node-key="${cssEscape(link.fromKey)}"]`);
    const toNode = elements.pertGraph.querySelector(`[data-pert-node-key="${cssEscape(link.toKey)}"]`);
    if (!fromNode || !toNode) return;

    const type = link.type === "blocked-by" ? "blocked-by" : "blocks";
    const route = getPertDependencyRoute(type, fromNode, toNode);
    const elbowX = getDependencyElbowX(route.fromX, route.toX, route.arrowDirection === "right");

    appendPertSegment(layer, "horizontal", route.fromX, route.fromY, elbowX, route.fromY, type);
    appendPertSegment(layer, "vertical", elbowX, route.fromY, elbowX, route.toY, type);
    appendPertSegment(layer, "horizontal", elbowX, route.toY, route.toX, route.toY, type);
    appendPertArrow(layer, route.toX, route.toY, route.arrowDirection, type);
  });
}

function getPertDependencyRoute(type, fromNode, toNode) {
  if (type === "blocked-by") {
    return {
      fromX: toNode.offsetLeft,
      fromY: toNode.offsetTop + (toNode.offsetHeight / 2),
      toX: fromNode.offsetLeft + fromNode.offsetWidth,
      toY: fromNode.offsetTop + (fromNode.offsetHeight / 2),
      arrowDirection: "left"
    };
  }

  return {
    fromX: fromNode.offsetLeft + fromNode.offsetWidth,
    fromY: fromNode.offsetTop + (fromNode.offsetHeight / 2),
    toX: toNode.offsetLeft,
    toY: toNode.offsetTop + (toNode.offsetHeight / 2),
    arrowDirection: "right"
  };
}

function appendPertSegment(layer, direction, startX, startY, endX, endY, type) {
  const segment = document.createElement("span");
  segment.className = `pert-connection-segment pert-${direction} is-${type}`;
  segment.style.left = `${Math.min(startX, endX)}px`;
  segment.style.top = `${Math.min(startY, endY)}px`;
  segment.style.width = `${direction === "vertical" ? 2 : Math.max(Math.abs(endX - startX), 2)}px`;
  segment.style.height = `${direction === "horizontal" ? 2 : Math.max(Math.abs(endY - startY), 2)}px`;
  layer.appendChild(segment);
}

function appendPertArrow(layer, x, y, direction, type) {
  const arrow = document.createElement("span");
  arrow.className = `pert-connection-arrow pert-arrow-${direction} is-${type}`;
  arrow.style.left = `${direction === "right" ? x - 8 : x}px`;
  arrow.style.top = `${y - 5}px`;
  layer.appendChild(arrow);
}

function renderPertBottleneckList(bottlenecks) {
  if (!bottlenecks.length) {
    elements.pertBottleneckList.innerHTML = `<div class="metric-empty">${escapeHtml(state.language === "en" ? "No bottlenecks were detected with the current filters." : "No se detectaron cuellos de botella con los filtros actuales.")}</div>`;
    return;
  }

  elements.pertBottleneckList.innerHTML = bottlenecks.slice(0, 12).map(({ issue, metrics }) => {
    const issueUrl = getJiraIssueUrl(issue);
    const causes = metrics.causes.length ? metrics.causes.join(" · ") : (state.language === "en" ? "high dependency concentration" : "alta concentracion de dependencias");
    return `
      <article class="pert-bottleneck-row">
        <span class="pert-score">${metrics.score}</span>
        <div>
          ${issueUrl
            ? `<a href="${escapeHtml(issueUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(issue.key)}</a>`
            : `<strong>${escapeHtml(issue.key)}</strong>`}
          <span title="${escapeHtml(issue.title)}">${escapeHtml(issue.title)}</span>
          <small title="${escapeHtml(causes)}">${escapeHtml(causes)}</small>
        </div>
        <span class="status-pill ${issue.statusClass}">${escapeHtml(issue.status)}</span>
        <em title="${escapeHtml(issue.assignee)}">${escapeHtml(issue.assignee)}</em>
      </article>
    `;
  }).join("");
}

function cssEscape(value) {
  return String(value).replace(/["\\]/g, "\\$&");
}

function renderSprintMarkerRow(sprints, range, totalUnits) {
  return `
    <div class="sprint-marker-row">
      <div class="sprint-marker-label">${escapeHtml(t("sprint"))}</div>
      <div class="sprint-marker-track" style="--unit-width: calc(100% / ${totalUnits});">
        ${sprints.map((sprint) => renderSprintMarkerBar(sprint, range)).join("")}
      </div>
    </div>
  `;
}

function renderSprintMarkerBar(sprint, range) {
  const position = getRangeBarPosition(parseLocalDate(sprint.startDate), parseLocalDate(sprint.endDate), range);
  const tooltip = `${sprint.name}\n${t("sprintStart")}: ${sprint.startDate}\n${t("sprintEnd")}: ${sprint.endDate}`;

  return `
    <div class="sprint-marker-bar" style="left: ${position.left}%; width: ${position.width}%;" title="${escapeHtml(tooltip)}">
      <span>${escapeHtml(sprint.name)}</span>
    </div>
  `;
}

// Crea la jerarquia de grupo -> tareas -> subtareas.
function groupIssuesByAssignee(normalizedIssues) {
  const issueByKey = new Map();
  const groupedIssues = new Map();

  normalizedIssues.forEach((issue) => {
    issueByKey.set(issue.key, {
      key: issue.key,
      title: issue.title,
      assignee: issue.assignee,
      issueType: issue.issueType,
      status: issue.status,
      rawStatus: issue.rawStatus,
      statusClass: issue.statusClass,
      priority: issue.priority,
      project: issue.project,
      sprint: issue.sprint,
      sprintDetails: issue.sprintDetails,
      parentKey: issue.parentKey,
      principal: issue.principal,
      startDate: issue.startDate,
      endDate: issue.endDate,
      plannedStartDate: issue.plannedStartDate,
      plannedEndDate: issue.plannedEndDate,
      hasPlannedDates: issue.hasPlannedDates,
      rawOriginalEstimate: issue.rawOriginalEstimate,
      originalEstimate: issue.originalEstimate,
      rawTimeTracking: issue.rawTimeTracking,
      timeTracking: issue.timeTracking,
      worklogs: issue.worklogs,
      worklogTotal: issue.worklogTotal,
      dependencyLinks: issue.dependencyLinks,
      dependencyCount: issue.dependencyCount,
      isEpic: issue.isEpic,
      isCompleted: issue.isCompleted,
      isOverdue: issue.isOverdue,
      isDueSoon: issue.isDueSoon,
      subtasks: []
    });
  });

  normalizedIssues.forEach((issue) => {
    const currentIssue = issueByKey.get(issue.key);
    const parentIssue = issue.parentKey ? issueByKey.get(issue.parentKey) : null;

    if (issue.isSubtask && parentIssue) {
      parentIssue.subtasks.push(currentIssue);
      return;
    }

    const groupName = getGanttGroupName(issue);

    if (!groupedIssues.has(groupName)) {
      groupedIssues.set(groupName, []);
    }

    groupedIssues.get(groupName).push(currentIssue);
  });

  return [...groupedIssues.entries()]
    .map(([assignee, issues]) => ({
      assignee,
      issues
    }))
    .sort((a, b) => a.assignee.localeCompare(b.assignee));
}

function getGanttGroupName(issue) {
  return state.ganttGroupBy === "principal"
    ? issue.principal || "Sin principal"
    : issue.assignee || "Sin asignar";
}

function populateFilterOptions(issues) {
  setCheckboxOptions(elements.filters.project, uniqueValues(issues, "project"), "project");
  setCheckboxOptions(elements.filters.assignee, uniqueValues(issues, "assignee"), "assignee");
  setCheckboxOptions(elements.filters.hiddenAssignee, uniqueValues(issues, "assignee"), "hidden-assignee");
  setCheckboxOptions(elements.filters.status, uniqueValues(issues, "status"), "status");
  setCheckboxOptions(elements.filters.sprint, uniqueSprintNames(issues), "sprint");
}

function getAnalyticsFilterValues() {
  return getFilterValues();
}

function renderAnalyticsDashboard(options = {}) {
  const issues = state.analyticsFilteredIssues.length || state.normalizedIssues.length
    ? state.analyticsFilteredIssues
    : [];

  if (!options.preserveKpiDetails) {
    collapseKpiDetails();
  }

  if (!state.normalizedIssues.length) {
    elements.analyticsCounter.textContent = t("noData");
    elements.analyticsContent.hidden = true;
    elements.analyticsEmptyState.hidden = false;
    return;
  }

  elements.analyticsCounter.textContent = state.language === "en" ? `${issues.length} analyzed tickets` : `${issues.length} tickets analizados`;
  elements.analyticsContent.hidden = !issues.length;
  elements.analyticsEmptyState.hidden = Boolean(issues.length);

  if (!issues.length) {
    elements.analyticsEmptyState.innerHTML = `<strong>${escapeHtml(t("noResults"))}</strong><span>${escapeHtml(state.language === "en" ? "No tickets match the selected executive filters." : "No hay tickets para los filtros ejecutivos seleccionados.")}</span>`;
    return;
  }

  const metrics = calculateExecutiveMetrics(issues);
  renderExecutiveKpis(metrics);
  renderAccuracyDetails(metrics.accuracyByAssignee);
  renderDailyResourceLoad(metrics.dailyLoad);
  renderAgingBuckets(metrics.agingBuckets);
}

function setTimelineZoom(zoom) {
  if (!ZOOM_LEVELS.includes(zoom)) return;

  state.zoom = zoom;
  updateTimelineZoomButtons();
  renderGantt(state.groupedData);
}

function updateTimelineZoomButtons() {
  elements.zoomButtons.forEach((button) => {
    const isActive = button.dataset.zoom === state.zoom;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function toggleTimelineZoomControls() {
  const isCollapsed = elements.timelineZoom.classList.toggle("collapsed");
  elements.collapseZoomButton.setAttribute("aria-expanded", String(!isCollapsed));
  elements.collapseZoomButton.setAttribute("aria-label", isCollapsed ? "Expandir controles de zoom" : "Colapsar controles de zoom");
}

function handleGanttWheelZoom(event) {
  if (!event.ctrlKey && !event.metaKey) return;

  event.preventDefault();

  const currentIndex = ZOOM_LEVELS.indexOf(state.zoom);
  if (currentIndex === -1) return;

  const nextIndex = event.deltaY < 0
    ? Math.max(currentIndex - 1, 0)
    : Math.min(currentIndex + 1, ZOOM_LEVELS.length - 1);

  if (nextIndex === currentIndex) return;

  const previousScrollRatio = getHorizontalScrollRatio(elements.ganttContainer);
  state.zoom = ZOOM_LEVELS[nextIndex];
  updateTimelineZoomButtons();
  renderGantt(state.groupedData);

  window.requestAnimationFrame(() => {
    restoreHorizontalScrollRatio(elements.ganttContainer, previousScrollRatio);
  });
}

function getHorizontalScrollRatio(element) {
  const maxScroll = element.scrollWidth - element.clientWidth;
  return maxScroll > 0 ? element.scrollLeft / maxScroll : 0;
}

function restoreHorizontalScrollRatio(element, ratio) {
  const maxScroll = element.scrollWidth - element.clientWidth;
  element.scrollLeft = maxScroll * ratio;
}

function collapseKpiDetails() {
  ["accuracyDetails", "dailyLoadDetails"].forEach((id) => {
    const detail = document.querySelector(`#${id}`);
    if (detail) detail.hidden = true;
  });

  document.querySelectorAll("[data-kpi-detail]").forEach((button) => {
    button.textContent = "+";
  });
}

function calculateExecutiveMetrics(issues) {
  const metricIssues = getSubtaskAwareIssueScope(issues);
  const totalSpent = sum(metricIssues, (issue) => issue.timeTracking.spentSeconds);
  const totalOriginal = sum(metricIssues, (issue) => issue.originalEstimate.seconds);
  const openIssues = metricIssues.filter((issue) => !issue.isCompleted);
  const excludeDoneFromDailyLoad = elements.analytics.dailyExcludeDone.checked;

  return {
    accuracyRatio: percent(totalSpent, totalOriginal),
    accuracyLabel: `${formatSeconds(totalSpent) || "0h"} / ${formatSeconds(totalOriginal) || "0h"}`,
    accuracyByAssignee: getEstimateAccuracyByAssignee(metricIssues),
    dailyLoad: calculateDailyResourceLoad(metricIssues, { excludeDone: excludeDoneFromDailyLoad }),
    agingBuckets: getAgingBuckets(openIssues)
  };
}

function renderExecutiveKpis(metrics) {
  elements.analytics.kpiAccuracy.textContent = `${metrics.accuracyRatio}%`;
  elements.analytics.kpiAccuracyMeta.textContent = metrics.accuracyLabel;
  elements.analytics.kpiDailyLoad.textContent = `${metrics.dailyLoad.averageUtilization}%`;
  elements.analytics.kpiDailyLoadMeta.textContent = state.language === "en"
    ? `${metrics.dailyLoad.resourceCount} resources / ${metrics.dailyLoad.dateCount} days`
    : `${metrics.dailyLoad.resourceCount} recursos / ${metrics.dailyLoad.dateCount} dias`;
  elements.analytics.dailyOverloadedCount.textContent = metrics.dailyLoad.overloadedCount;
  elements.analytics.dailyHealthyCount.textContent = metrics.dailyLoad.healthyCount;
  elements.analytics.dailyAvailableCount.textContent = metrics.dailyLoad.availableCount;
}

function renderMetricList(container, rows, suffix) {
  if (!rows.length) {
    container.innerHTML = `<div class="metric-empty">Sin datos suficientes</div>`;
    return;
  }

  container.innerHTML = rows.slice(0, 8).map((row) => `
    <div class="metric-row">
      <span>${escapeHtml(row.name)}</span>
      <div class="metric-bar"><i style="width: ${Math.min(row.value, 160)}%"></i></div>
      <strong>${row.value}${suffix}</strong>
    </div>
  `).join("");
}

function renderAccuracyDetails(rows) {
  if (!rows.length) {
    elements.analytics.accuracyDetails.innerHTML = `<div class="metric-empty">No hay estimaciones suficientes para calcular desviaciones por responsable.</div>`;
    return;
  }

  elements.analytics.accuracyDetails.innerHTML = `
    <div class="detail-heading">${escapeHtml(t("deviationByPerson"))}</div>
    <div class="accuracy-table" role="table" aria-label="${escapeHtml(t("accuracyTableAriaLabel"))}">
      <div class="accuracy-table-row accuracy-table-head" role="row">
        <span role="columnheader">${escapeHtml(t("assignee"))}</span>
        <span role="columnheader">${escapeHtml(t("logged"))}</span>
        <span role="columnheader">${escapeHtml(t("estimated"))}</span>
        <span role="columnheader">${escapeHtml(t("deviation"))}</span>
        <span role="columnheader">${escapeHtml(t("detail"))}</span>
      </div>
      ${rows.map((row, index) => `
        <div class="accuracy-table-row" role="row">
          <span role="cell" title="${escapeHtml(row.assignee)}">${escapeHtml(row.assignee)}</span>
          <span role="cell" title="${escapeHtml(row.spentLabel)}">${escapeHtml(row.spentLabel)}</span>
          <span role="cell" title="${escapeHtml(row.originalLabel)}">${escapeHtml(row.originalLabel)}</span>
          <strong role="cell" title="${escapeHtml(row.deviationLabel)}">${escapeHtml(row.deviationLabel)}</strong>
          <button class="daily-detail-toggle" type="button" data-accuracy-detail="${index}" aria-expanded="false">${escapeHtml(t("viewTickets"))}</button>
        </div>
        <div class="accuracy-breakdown" id="accuracy-detail-${index}" hidden>
          ${renderAccuracyBreakdown(row)}
        </div>
      `).join("")}
    </div>
  `;
}

function renderAccuracyBreakdown(row) {
  if (!row.items?.length) {
    return `<div class="metric-empty">${escapeHtml(state.language === "en" ? "No tickets associated with this assignee." : "No hay tickets asociados a este responsable.")}</div>`;
  }

  return `
    <div class="daily-breakdown-summary">
      ${escapeHtml(row.assignee)} · ${escapeHtml(t("logged").toLowerCase())} ${escapeHtml(row.spentLabel)} · ${escapeHtml(t("estimated").toLowerCase())} ${escapeHtml(row.originalLabel)} · ${escapeHtml(t("deviation").toLowerCase())} ${escapeHtml(row.deviationLabel)}
    </div>
    <div class="accuracy-breakdown-list">
      <div class="accuracy-breakdown-item accuracy-breakdown-head">
        <span>${escapeHtml(t("ticket"))}</span>
        <span>${escapeHtml(t("description"))}</span>
        <span>${escapeHtml(t("logged"))}</span>
        <span>${escapeHtml(t("estimated"))}</span>
        <span>${escapeHtml(t("deviation"))}</span>
      </div>
      ${row.items.map((item) => {
        const issueUrl = getJiraIssueUrl(item.issue);
        return `
          <div class="accuracy-breakdown-item ${item.issue.isEpic ? "is-epic" : ""}">
            <span title="${escapeHtml(item.issue.key)}">
              ${issueUrl
                ? `<a href="${escapeHtml(issueUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.issue.key)}</a>`
                : `<strong>${escapeHtml(item.issue.key)}</strong>`}
            </span>
            <span title="${escapeHtml(item.issue.title)}">${escapeHtml(getShortTitle(item.issue.title))}</span>
            <span title="${escapeHtml(item.spentLabel)}">${escapeHtml(item.spentLabel)}</span>
            <span title="${escapeHtml(item.originalLabel)}">${escapeHtml(item.originalLabel)}</span>
            <strong title="${escapeHtml(item.deviationLabel)}">${escapeHtml(item.deviationLabel)}</strong>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderDailyResourceLoad(dailyLoad) {
  if (!dailyLoad.rows.length) {
    elements.analytics.dailyLoadHeatmap.innerHTML = `<div class="metric-empty">No hay responsables para mostrar con los filtros actuales.</div>`;
    elements.analytics.dailyLoadTable.innerHTML = "";
    return;
  }

  const visibleDates = getDailyHeatmapWindowDates();

  elements.analytics.dailyLoadHeatmap.style.setProperty("--daily-date-count", visibleDates.length);
  elements.analytics.dailyLoadHeatmap.innerHTML = `
    <div class="heatmap-scroll">
      <div class="heatmap-grid" style="grid-template-columns: minmax(160px, 220px) repeat(${visibleDates.length}, minmax(74px, 1fr));">
        <div class="heatmap-corner">${escapeHtml(t("dailyHeatmapCorner"))}</div>
        ${visibleDates.map((date) => `<div class="heatmap-date" title="${escapeHtml(formatDateLong(date))}">${escapeHtml(formatShortDate(date))}</div>`).join("")}
        ${dailyLoad.rows.map((row) => `
          <div class="heatmap-user" title="${escapeHtml(row.assignee)}">${escapeHtml(row.assignee)}</div>
          ${visibleDates.map((date) => {
            const cell = row.cells.get(date) || createEmptyDailyCell(row.assignee, date);
            return `
              <div class="heatmap-cell load-${cell.level}" title="${escapeHtml(getDailyLoadTooltip(cell))}">
                <strong>${formatHours(cell.hours)}</strong>
                <span>${cell.utilization}%</span>
              </div>
            `;
          }).join("")}
        `).join("")}
      </div>
    </div>
    <div class="detail-limit">${escapeHtml(t("dailyWindowNote"))}</div>
  `;

  elements.analytics.dailyLoadTable.innerHTML = `
    <div class="daily-table-title">${escapeHtml(t("dailyTableTitle"))}</div>
    <div class="daily-table" role="table" aria-label="${escapeHtml(t("dailyTableAriaLabel"))}">
      <div class="daily-table-row daily-table-head" role="row">
        <span role="columnheader">${escapeHtml(t("dailyHeatmapCorner"))}</span>
        <span role="columnheader">${escapeHtml(t("date"))}</span>
        <span role="columnheader">${escapeHtml(t("assignedHours"))}</span>
        <span role="columnheader">${escapeHtml(t("dailyCapacity"))}</span>
        <span role="columnheader">${escapeHtml(t("loadPercent"))}</span>
        <span role="columnheader">${escapeHtml(t("loadStatus"))}</span>
        <span role="columnheader">${escapeHtml(t("detail"))}</span>
      </div>
      ${dailyLoad.tableRows.slice(0, 80).map((row, index) => `
        <div class="daily-table-row" role="row">
          <span role="cell" title="${escapeHtml(row.assignee)}">${escapeHtml(row.assignee)}</span>
          <span role="cell" title="${escapeHtml(formatDateLong(row.date))}">${escapeHtml(row.date)}</span>
          <span role="cell" title="${formatHours(row.hours)}">${formatHours(row.hours)}</span>
          <span role="cell">8h</span>
          <strong role="cell">${row.utilization}%</strong>
          <span role="cell" class="load-pill load-${row.level}" title="${escapeHtml(row.status)}">${escapeHtml(row.status)}</span>
          <button class="daily-detail-toggle" type="button" data-daily-load-detail="${index}" aria-expanded="false">${escapeHtml(t("viewTickets"))}</button>
        </div>
        <div class="daily-load-breakdown" id="daily-load-detail-${index}" hidden>
          ${renderDailyLoadBreakdown(row)}
        </div>
      `).join("")}
    </div>
    ${dailyLoad.tableRows.length > 80 ? `<div class="detail-limit">${escapeHtml(state.language === "en" ? `Showing 80 of ${dailyLoad.tableRows.length} rows with load. Use global filters to narrow the analysis.` : `Mostrando 80 de ${dailyLoad.tableRows.length} filas con carga. Usa filtros globales para acotar el analisis.`)}</div>` : ""}
  `;
}

function renderDailyLoadBreakdown(row) {
  if (!row.contributions?.length) {
    return `<div class="metric-empty">No hay tickets asociados a esta celda.</div>`;
  }

  const total = row.contributions.reduce((sumHours, item) => sumHours + item.dailyHours, 0);

  return `
    <div class="daily-breakdown-summary">
      ${escapeHtml(row.assignee)} · ${escapeHtml(row.date)} · total ${formatHours(total)}
    </div>
    <div class="daily-breakdown-list">
      ${row.contributions
        .sort((a, b) => b.dailyHours - a.dailyHours)
        .map(({ issue, dailyHours, workingDays, originalHours, startDate, endDate }) => {
          const issueUrl = getJiraIssueUrl(issue);
          const estimateScope = issue.originalEstimate.includesSubtasks ? ` ${t("inclSubtasks")}` : "";
          const formula = `${formatHours(originalHours)}${estimateScope} / ${workingDays} dias laborales = ${formatHours(dailyHours)}`;
          return `
            <div class="daily-breakdown-item ${issue.isEpic ? "is-epic" : ""}">
              <span title="${escapeHtml(issue.key)}">
                ${issueUrl
                  ? `<a href="${escapeHtml(issueUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(issue.key)}</a>`
                  : `<strong>${escapeHtml(issue.key)}</strong>`}
              </span>
              <span title="${escapeHtml(issue.title)}">${escapeHtml(getShortTitle(issue.title))}</span>
              <span title="Inicio planificado: ${escapeHtml(startDate)} | Fin planificado: ${escapeHtml(endDate)}">${escapeHtml(startDate)} a ${escapeHtml(endDate)}</span>
              <span title="${escapeHtml(formula)}">${escapeHtml(formula)}</span>
            </div>
          `;
        }).join("")}
    </div>
  `;
}

function renderAgingBuckets(buckets) {
  elements.analytics.agingBuckets.innerHTML = buckets.map((bucket) => {
    const bucketId = getAgingBucketId(bucket.label);
    const totalPages = getAgingBucketTotalPages(bucket);
    const page = getAgingBucketPage(bucketId, totalPages);
    const firstItem = (page - 1) * AGING_BUCKET_PAGE_SIZE;
    const visibleItems = bucket.items.slice(firstItem, firstItem + AGING_BUCKET_PAGE_SIZE);
    const openAttribute = state.openAgingBuckets.has(bucketId) ? " open" : "";

    const severity = bucket.severity || "normal";
    const ctaText = state.language === "en" ? "View tickets" : "Ver tickets";
    const openLabel = state.language === "en" ? "days open" : "días abierto";

    return `
      <details class="bucket bucket-${escapeHtml(severity)}" data-aging-bucket-id="${escapeHtml(bucketId)}"${openAttribute}>
        <summary>
          <span class="bucket-tag"><span class="bucket-dot"></span>${escapeHtml(bucket.tag || bucket.label)}</span>
          <strong class="bucket-count">${bucket.count}</strong>
          <span class="bucket-period">${escapeHtml(bucket.period || bucket.label)}</span>
          <span class="bucket-cta">${escapeHtml(ctaText)}<i aria-hidden="true">›</i></span>
        </summary>
        <div class="bucket-detail">
          ${visibleItems.length
            ? visibleItems.map((issue) => renderIssueDetailItem(issue, `${getAgingDays(issue)} ${openLabel}`)).join("")
            : `<div class="metric-empty">${escapeHtml(state.language === "en" ? "No tickets in this range." : "Sin tickets en este rango.")}</div>`}
          ${renderAgingBucketPager(bucket, bucketId, page, totalPages)}
        </div>
      </details>
    `;
  }).join("");
}

function getAgingBucketId(label) {
  return `aging-${slugify(label)}`;
}

function getAgingBucketTotalPages(bucket) {
  return Math.max(Math.ceil(bucket.items.length / AGING_BUCKET_PAGE_SIZE), 1);
}

function getAgingBucketPage(bucketId, totalPages) {
  const currentPage = Number(state.agingBucketPages[bucketId] || 1);
  const page = Number.isFinite(currentPage) ? currentPage : 1;
  const clampedPage = Math.min(Math.max(page, 1), totalPages);
  state.agingBucketPages[bucketId] = clampedPage;
  return clampedPage;
}

function renderAgingBucketPager(bucket, bucketId, page, totalPages) {
  if (!bucket.items.length) return "";

  const first = (page - 1) * AGING_BUCKET_PAGE_SIZE + 1;
  const last = Math.min(page * AGING_BUCKET_PAGE_SIZE, bucket.items.length);

  return `
    <div class="bucket-pager" aria-label="Paginacion de tickets del cubo ${escapeHtml(bucket.label)}">
      <span>${first}-${last} de ${bucket.items.length}</span>
      <div class="bucket-pager-actions">
        <button type="button" class="bucket-page-button" data-aging-bucket-id="${escapeHtml(bucketId)}" data-aging-page="${page - 1}" ${page <= 1 ? "disabled" : ""}>Anterior</button>
        <strong>${page} / ${totalPages}</strong>
        <button type="button" class="bucket-page-button" data-aging-bucket-id="${escapeHtml(bucketId)}" data-aging-page="${page + 1}" ${page >= totalPages ? "disabled" : ""}>Siguiente</button>
      </div>
    </div>
  `;
}

function renderCurrentAgingBuckets() {
  const openIssues = getCurrentAnalyticsIssues().filter((issue) => !issue.isCompleted);
  renderAgingBuckets(getAgingBuckets(openIssues));
}

function renderIssueDetailItem(issue, meta) {
  const issueUrl = getJiraIssueUrl(issue);
  const issueTitle = `${issue.key} - ${issue.title}`;

  return `
    <div class="issue-detail-item">
      <span title="${escapeHtml(issueTitle)}">
        ${issueUrl
          ? `<a href="${escapeHtml(issueUrl)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(t("openInJira"))}: ${escapeHtml(issueTitle)}"><strong>${escapeHtml(issue.key)}</strong>${escapeHtml(getShortTitle(issue.title))}</a>`
          : `<strong>${escapeHtml(issue.key)}</strong>${escapeHtml(getShortTitle(issue.title))}`}
      </span>
      <em title="${escapeHtml(issue.assignee)}">${escapeHtml(issue.assignee)}</em>
      <small title="${escapeHtml(meta)}">${escapeHtml(meta)}</small>
    </div>
  `;
}

function handleKpiInfoClick(event) {
  const button = event.target.closest("[data-kpi-info]");
  if (!button) return;

  const info = document.querySelector(`#info-${button.dataset.kpiInfo}`);
  if (!info) return;

  info.hidden = !info.hidden;
}

function handleKpiDetailClick(event) {
  const button = event.target.closest("[data-kpi-detail]");
  if (!button) return;

  const detail = document.querySelector(`#${button.dataset.kpiDetail}Details`);
  if (!detail) return;

  detail.hidden = !detail.hidden;
  button.textContent = detail.hidden ? "+" : "-";
}

function handleDailyLoadDetailClick(event) {
  const button = event.target.closest("[data-daily-load-detail]");
  if (!button) return;

  const detail = document.querySelector(`#daily-load-detail-${button.dataset.dailyLoadDetail}`);
  if (!detail) return;

  detail.hidden = !detail.hidden;
  button.setAttribute("aria-expanded", String(!detail.hidden));
  button.textContent = detail.hidden ? t("viewTickets") : t("hideLogs");
}

function handleAccuracyDetailClick(event) {
  const button = event.target.closest("[data-accuracy-detail]");
  if (!button) return;

  const detail = document.querySelector(`#accuracy-detail-${button.dataset.accuracyDetail}`);
  if (!detail) return;

  detail.hidden = !detail.hidden;
  button.setAttribute("aria-expanded", String(!detail.hidden));
  button.textContent = detail.hidden ? t("viewTickets") : t("hideLogs");
}

function handleKpiExportClick(event) {
  const button = event.target.closest("[data-export-kpi]");
  if (!button) return;

  const issues = getCurrentAnalyticsIssues();
  if (!issues.length) {
    showError("No hay datos del tablero ejecutivo para exportar con los filtros actuales.");
    return;
  }

  const type = button.dataset.exportKpi;
  if (type === "accuracy") {
    exportAccuracyKpi(issues);
    return;
  }

  if (type === "dailyLoad") {
    exportDailyLoadKpi(issues);
    return;
  }

  if (type === "agingBuckets") {
    exportAgingBucketsKpi(issues);
  }
}

function handleModuleExportClick(event) {
  const button = event.target.closest("[data-export-module]");
  if (!button) return;

  if (!state.normalizedIssues.length) {
    showError("No hay datos de Jira para exportar. Primero consulta o refresca la informacion.");
    return;
  }

  const type = button.dataset.exportModule;
  if (type === "gantt") {
    exportGanttModule();
    return;
  }

  if (type === "dailyTracking") {
    exportDailyTrackingModule();
    return;
  }

  if (type === "missingEstimates") {
    exportMissingEstimatesModule();
    return;
  }

  if (type === "pert") {
    exportPertModule();
  }
}

function handleAgingBucketPageClick(event) {
  const button = event.target.closest("[data-aging-page]");
  if (!button) return;

  const bucketId = button.dataset.agingBucketId;
  const nextPage = Number(button.dataset.agingPage);
  if (!bucketId || !Number.isFinite(nextPage)) return;

  state.agingBucketPages[bucketId] = nextPage;
  state.openAgingBuckets.add(bucketId);
  renderCurrentAgingBuckets();
}

function handleAgingBucketToggle(event) {
  const bucket = event.target;
  if (!bucket.matches?.(".bucket[data-aging-bucket-id]")) return;

  if (bucket.open) {
    state.openAgingBuckets.add(bucket.dataset.agingBucketId);
    return;
  }

  state.openAgingBuckets.delete(bucket.dataset.agingBucketId);
}

function exportGanttModule() {
  const issues = sortIssues(getSubtaskAwareIssueScope(state.filteredIssues || []));

  downloadExcelWorkbook("gantt-detalle", [
    getGanttExportFiltersSection(),
    {
      title: "Gantt - tickets visibles",
      headers: getIssueExportHeaders(),
      rows: issues.map(getIssueExportRow)
    }
  ]);
}

function exportPertModule() {
  const graph = getPertGraphData(state.filteredIssues || []);

  downloadExcelWorkbook("pert-cuellos-de-botella", [
    getGanttExportFiltersSection(),
    {
      title: "PERT - cuellos de botella",
      headers: ["Puntuacion", "Ticket", "Tarea", "Responsable", "Estado", "Proyecto", "Dependencias directas salientes", "Dependencias entrantes", "Actividades aguas abajo", "Causas", "URL Jira"],
      rows: graph.bottlenecks.map(({ issue, metrics }) => [
        metrics.score,
        issue.key,
        issue.title,
        issue.assignee,
        issue.status,
        issue.project,
        metrics.outgoingCount,
        metrics.incomingCount,
        metrics.downstreamCount,
        metrics.causes.join(" | "),
        getJiraIssueUrl(issue)
      ])
    },
    {
      title: "PERT - dependencias visibles",
      headers: ["Actividad origen", "Actividad dependiente", "Relacion", "URL origen", "URL dependiente"],
      rows: graph.links.map((link) => [
        link.fromKey,
        link.toKey,
        link.label,
        getJiraIssueUrl(state.normalizedIssues.find((issue) => issue.key === link.fromKey)),
        getJiraIssueUrl(state.normalizedIssues.find((issue) => issue.key === link.toKey))
      ])
    }
  ]);
}

function exportDailyTrackingModule() {
  const issues = getGanttModuleIssues().filter(isActiveOrPendingIssue);

  downloadExcelWorkbook("seguimiento-diario", [
    getGanttExportFiltersSection(),
    {
      title: "Seguimiento diario - tickets",
      headers: getIssueExportHeaders(),
      rows: sortGanttTableIssues(issues).map(getIssueExportRow)
    },
    {
      title: "Seguimiento diario - registros de tiempo disponibles",
      headers: ["Responsable", "Ticket", "Tarea", "Descripcion registro", "Fecha y hora registro", "Horas registradas", "URL Jira"],
      rows: sortGanttTableIssues(issues).flatMap((issue) => getIssueWorklogsForExport(issue).map((worklog) => [
        issue.assignee,
        issue.key,
        issue.title,
        worklog.description,
        worklog.startedLabel || formatDateTime(worklog.startedRaw || worklog.started),
        worklog.hoursLabel,
        getJiraIssueUrl(issue)
      ]))
    }
  ]);
}

function exportMissingEstimatesModule() {
  const issues = getGanttModuleIssues({ includeDateFilters: false });
  const rows = getMissingEstimateRows(issues);

  downloadExcelWorkbook("pendientes-por-estimar", [
    getGanttExportFiltersSection(),
    {
      title: "Pendientes por estimar - resumen por responsable",
      headers: ["Responsable", "Total pendientes", "Sin start date", "Sin fecha vencimiento", "Sin estimacion original"],
      rows: rows.map((row) => [
        row.assignee,
        row.total,
        row.missingStart,
        row.missingDue,
        row.missingOriginal
      ])
    },
    {
      title: "Pendientes por estimar - detalle por ticket",
      headers: getIssueExportHeaders(),
      rows: rows.flatMap((row) => row.issues.map(getIssueExportRow))
    }
  ]);
}

function getIssueExportHeaders() {
  return [
    "Responsable",
    "Ticket",
    "Descripcion",
    "Tipo",
    "Estado",
    "Principal",
    "Ticket padre",
    "Proyecto",
    "Sprint",
    "Prioridad",
    "Start day",
    "Fecha vencimiento",
    "Inicio Gantt",
    "Fin Gantt",
    "Estimacion original",
    "Tiempo registrado",
    "Tiempo restante",
    "Subtareas incluidas",
    "Dependencias",
    "URL Jira"
  ];
}

function getIssueExportRow(issue) {
  return [
    issue.assignee,
    issue.key,
    issue.title,
    issue.issueType,
    issue.status,
    issue.principal,
    issue.parentKey || "",
    issue.project,
    issue.sprint,
    issue.priority,
    issue.plannedStartDate || "",
    issue.plannedEndDate || "",
    issue.startDate || "",
    issue.endDate || "",
    issue.originalEstimate.label,
    formatSeconds(issue.timeTracking.spentSeconds) || "0h",
    formatSeconds(issue.timeTracking.remainingSeconds) || "0h",
    issue.originalEstimate.includesSubtasks ? `Si (${issue.originalEstimate.subtaskCount})` : "No",
    issue.dependencyCount || 0,
    getJiraIssueUrl(issue)
  ];
}

function getIssueWorklogsForExport(issue) {
  const loadedWorklogs = state.worklogsByIssue[issue.key]?.items;
  if (Array.isArray(loadedWorklogs) && loadedWorklogs.length) return loadedWorklogs;
  return Array.isArray(issue.worklogs) ? issue.worklogs : [];
}

function exportAccuracyKpi(issues) {
  const rows = getEstimateAccuracyByAssignee(getSubtaskAwareIssueScope(issues));

  downloadExcelWorkbook("precision-estimacion", [
    getExportFiltersSection(),
    {
      title: "Precision de estimacion - resumen por responsable",
      headers: ["Responsable", "Tiempo registrado", "Estimacion original", "Desviacion", "Tickets"],
      rows: rows.map((row) => [
        row.assignee,
        row.spentLabel,
        row.originalLabel,
        row.deviationLabel,
        row.items.length
      ])
    },
    {
      title: "Precision de estimacion - detalle por ticket",
      headers: ["Responsable", "Ticket", "Tarea", "Tipo", "Estado", "Proyecto", "Sprint", "Registrado", "Estimado", "Desviacion", "URL Jira"],
      rows: rows.flatMap((row) => row.items.map((item) => [
        row.assignee,
        item.issue.key,
        item.issue.title,
        item.issue.issueType,
        item.issue.status,
        item.issue.project,
        item.issue.sprint,
        item.spentLabel,
        item.originalLabel,
        item.deviationLabel,
        getJiraIssueUrl(item.issue)
      ]))
    }
  ]);
}

function exportDailyLoadKpi(issues) {
  const dailyLoad = calculateDailyResourceLoad(issues, {
    excludeDone: elements.analytics.dailyExcludeDone.checked
  });

  downloadExcelWorkbook("carga-diaria-recursos", [
    getExportFiltersSection(),
    {
      title: "Carga diaria de recursos - resumen por dia",
      headers: ["Usuario", "Fecha", "Horas asignadas", "Capacidad diaria", "% carga", "Estado", "Tickets"],
      rows: dailyLoad.tableRows.map((row) => [
        row.assignee,
        row.date,
        formatHours(row.hours),
        "8h",
        `${row.utilization}%`,
        row.status,
        row.issueCount
      ])
    },
    {
      title: "Carga diaria de recursos - detalle por ticket",
      headers: ["Usuario", "Fecha", "Ticket", "Tarea", "Tipo", "Estado", "Proyecto", "Sprint", "Inicio planificado", "Fin planificado", "Estimacion original", "Dias laborales", "Horas asignadas ese dia", "URL Jira"],
      rows: dailyLoad.tableRows.flatMap((row) => row.contributions.map((item) => [
        row.assignee,
        row.date,
        item.issue.key,
        item.issue.title,
        item.issue.issueType,
        item.issue.status,
        item.issue.project,
        item.issue.sprint,
        item.startDate,
        item.endDate,
        formatHours(item.originalHours),
        item.workingDays,
        formatHours(item.dailyHours),
        getJiraIssueUrl(item.issue)
      ]))
    }
  ]);
}

function exportAgingBucketsKpi(issues) {
  const openIssues = getSubtaskAwareIssueScope(issues).filter((issue) => !issue.isCompleted);
  const buckets = getAgingBuckets(openIssues);

  downloadExcelWorkbook("cubos-envejecimiento", [
    getExportFiltersSection(),
    {
      title: "Cubos de envejecimiento - resumen",
      headers: ["Cubo", "Tickets"],
      rows: buckets.map((bucket) => [bucket.label, bucket.count])
    },
    {
      title: "Cubos de envejecimiento - detalle por ticket",
      headers: ["Cubo", "Ticket", "Tarea", "Responsable", "Tipo", "Estado", "Proyecto", "Sprint", "Inicio", "Fin", "Dias abierto", "URL Jira"],
      rows: buckets.flatMap((bucket) => bucket.items.map((issue) => [
        bucket.label,
        issue.key,
        issue.title,
        issue.assignee,
        issue.issueType,
        issue.status,
        issue.project,
        issue.sprint,
        issue.startDate || "",
        issue.endDate || "",
        getAgingDays(issue),
        getJiraIssueUrl(issue)
      ]))
    }
  ]);
}

function getCurrentAnalyticsIssues() {
  if (!state.normalizedIssues.length) return [];
  return state.analyticsFilteredIssues;
}

function getGanttExportFiltersSection() {
  const filters = state.currentFilters || getFilterValues();
  return {
    title: "Filtros aplicados",
    headers: ["Filtro", "Valor"],
    rows: [
      ["Busqueda", filters.query || "Todos"],
      ["Proyecto", formatExportFilterValue(filters.projects)],
      ["Usuario", formatExportFilterValue(filters.assignees)],
      ["Usuarios ocultos", formatExportFilterValue(filters.hiddenAssignees)],
      ["Estado", formatExportFilterValue(filters.statuses)],
      ["Sprint", formatExportFilterValue(filters.sprints)],
      ["Fecha inicio desde", filters.startDate || "Todos"],
      ["Fecha fin hasta", filters.endDate || "Todos"],
      ["Mostrar subtareas", filters.showSubtasks ? "Si" : "No"],
      ["Excluir finalizadas", filters.excludeDone ? "Si" : "No"],
      ["Solo tareas activas", filters.activeOnly ? "Si" : "No"],
      ["Solo vencidas", filters.overdueOnly ? "Si" : "No"],
      ["Agrupacion Gantt", state.ganttGroupBy === "principal" ? "Principal" : "Usuario asignado"],
      ["Fecha de exportacion", new Date().toLocaleString("es-CO")]
    ]
  };
}

function getExportFiltersSection() {
  const filters = getAnalyticsFilterValues();
  return {
    title: "Filtros aplicados",
    headers: ["Filtro", "Valor"],
    rows: [
      ["Busqueda", filters.query || "Todos"],
      ["Proyecto", formatExportFilterValue(filters.projects)],
      ["Sprint", formatExportFilterValue(filters.sprints)],
      ["Usuario", formatExportFilterValue(filters.assignees)],
      ["Usuarios ocultos", formatExportFilterValue(filters.hiddenAssignees)],
      ["Estado", formatExportFilterValue(filters.statuses)],
      ["Inicio desde", filters.startDate || "Todos"],
      ["Fin hasta", filters.endDate || "Todos"],
      ["Mostrar subtareas", filters.showSubtasks ? "Si" : "No"],
      ["Excluir finalizadas", filters.excludeDone ? "Si" : "No"],
      ["Solo tareas activas", filters.activeOnly ? "Si" : "No"],
      ["Solo vencidas", filters.overdueOnly ? "Si" : "No"],
      ["Excluir finalizadas en carga diaria", elements.analytics.dailyExcludeDone.checked ? "Si" : "No"],
      ["Fecha de exportacion", new Date().toLocaleString("es-CO")]
    ]
  };
}

function formatExportFilterValue(values) {
  return values?.length ? values.join(", ") : "Todos";
}

function downloadExcelWorkbook(baseFilename, sections) {
  const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; }
          h2 { margin: 22px 0 8px; font-size: 16px; }
          table { border-collapse: collapse; margin-bottom: 18px; width: 100%; }
          th, td { border: 1px solid #cbd5e1; padding: 6px 8px; text-align: left; vertical-align: top; }
          th { background: #e2e8f0; font-weight: 700; }
        </style>
      </head>
      <body>
        ${sections.map(renderExportSection).join("")}
      </body>
    </html>
  `;
  const blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.href = url;
  link.download = `${baseFilename}-${toDateKey(new Date())}.xls`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderExportSection(section) {
  return `
    <h2>${escapeHtml(section.title)}</h2>
    <table>
      <thead>
        <tr>${section.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${section.rows.length
          ? section.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell ?? "")}</td>`).join("")}</tr>`).join("")
          : `<tr><td colspan="${section.headers.length}">Sin datos</td></tr>`}
      </tbody>
    </table>
  `;
}

function calculateAvailableCapacity(issues) {
  const assignees = new Set(issues.map((issue) => issue.assignee));
  const range = getGanttRange(issues);
  const workingDays = range ? Math.max(range.totalDays * (5 / 7), 1) : 1;
  return assignees.size * workingDays * 8 * 3600;
}

function calculateRiskScore(issue, allIssues) {
  const daysToDue = issue.endDate ? diffDays(new Date(), parseLocalDate(issue.endDate)) : 30;
  const remainingHours = (issue.timeTracking.remainingSeconds || 0) / 3600;
  const utilization = calculateAssigneeUtilization(issue.assignee, allIssues);
  let score = 0;

  if (daysToDue < 0) score += 35;
  else if (daysToDue <= 3) score += 25;
  else if (daysToDue <= 7) score += 12;

  if (remainingHours > 24) score += 20;
  else if (remainingHours > 8) score += 12;

  if (issue.statusClass === "status-todo") score += 18;
  if (issue.statusClass === "status-blocked") score += 25;
  if (issue.isOverdue) score += 20;
  if (utilization > 100) score += 20;
  else if (utilization > 85) score += 10;

  return Math.min(Math.round(score), 100);
}

function calculateAssigneeUtilization(assignee, issues) {
  const group = issues.filter((issue) => issue.assignee === assignee);
  return percent(sum(group, (issue) => issue.timeTracking.spentSeconds), calculateAvailableCapacity(group));
}

function getRiskLabel(score) {
  if (score >= 70) return "Alto";
  if (score >= 40) return "Medio";
  return "Bajo";
}

function getAgingDays(issue) {
  if (!issue.startDate) return null;
  return Math.max(diffDays(parseLocalDate(issue.startDate), new Date()), 0);
}

function getAgingBuckets(issues) {
  const isEn = state.language === "en";
  // `label` se mantiene para IDs de estado, export y aria; period/tag/severity son para el diseño en tarjetas.
  const buckets = [
    { label: "0-7 dias Normal", severity: "normal", period: isEn ? "0–7 days" : "0–7 días", tag: isEn ? "Normal" : "Normal", count: 0, items: [] },
    { label: "7-30 dias Atencion", severity: "warning", period: isEn ? "7–30 days" : "7–30 días", tag: isEn ? "Attention" : "Atención", count: 0, items: [] },
    { label: ">30 dias Riesgo", severity: "risk", period: isEn ? ">30 days" : ">30 días", tag: isEn ? "Risk" : "Riesgo", count: 0, items: [] }
  ];

  issues.forEach((issue) => {
    const days = getAgingDays(issue);
    if (days === null) return;
    const bucket = days <= 7 ? buckets[0] : days <= 30 ? buckets[1] : buckets[2];
    bucket.count += 1;
    bucket.items.push(issue);
  });

  return buckets;
}

function aggregateRateBy(issues, key, numeratorFn, denominatorFn) {
  return groupBy(issues, key).map(([name, group]) => ({
    name,
    value: percent(group.filter(numeratorFn).length, group.filter(denominatorFn).length)
  })).sort((a, b) => b.value - a.value);
}

function aggregatePercentBy(issues, key, numeratorFn, denominatorFn) {
  return groupBy(issues, key).map(([name, group]) => ({
    name,
    value: percent(numeratorFn(group), denominatorFn(group))
  })).sort((a, b) => b.value - a.value);
}

function getEstimateAccuracyByAssignee(issues) {
  return groupBy(issues, "assignee")
    .map(([assignee, group]) => {
      const spentSeconds = sum(group, (issue) => issue.timeTracking.spentSeconds);
      const originalSeconds = sum(group, (issue) => issue.originalEstimate.seconds);
      const deviationSeconds = spentSeconds - originalSeconds;
      const items = group
        .map((issue) => {
          const issueSpentSeconds = issue.timeTracking.spentSeconds;
          const issueOriginalSeconds = issue.originalEstimate.seconds;
          const issueDeviationSeconds = issueSpentSeconds - issueOriginalSeconds;

          return {
            issue,
            spentSeconds: issueSpentSeconds,
            originalSeconds: issueOriginalSeconds,
            deviationSeconds: issueDeviationSeconds,
            spentLabel: formatSeconds(issueSpentSeconds) || "0h",
            originalLabel: formatSeconds(issueOriginalSeconds) || "0h",
            deviationLabel: formatSignedSeconds(issueDeviationSeconds)
          };
        })
        .filter((item) => item.spentSeconds || item.originalSeconds)
        .sort((a, b) => Math.abs(b.deviationSeconds) - Math.abs(a.deviationSeconds));

      return {
        assignee,
        spentSeconds,
        originalSeconds,
        deviationSeconds,
        spentLabel: formatSeconds(spentSeconds) || "0h",
        originalLabel: formatSeconds(originalSeconds) || "0h",
        deviationLabel: formatSignedSeconds(deviationSeconds),
        items
      };
    })
    .filter((row) => row.spentSeconds || row.originalSeconds)
    .sort((a, b) => Math.abs(b.deviationSeconds) - Math.abs(a.deviationSeconds));
}

function calculateDailyResourceLoad(issues, options = {}) {
  const resourceIssues = options.excludeDone
    ? issues.filter((issue) => !issue.isCompleted)
    : issues;
  const issueScope = getSubtaskAwareIssueScope(resourceIssues, {
    shouldRollUpParent: (parentIssue) => parentIssue.hasPlannedDates && parentIssue.originalEstimate.seconds
  });
  const resourceAssignees = uniqueValues(issueScope, "assignee");
  const cellsByAssignee = new Map(resourceAssignees.map((assignee) => [assignee, new Map()]));
  const allDates = new Set();

  issueScope.forEach((issue) => {
    if (!issue.assignee || !issue.hasPlannedDates || !issue.originalEstimate.seconds) return;

    const workingDates = getWorkingDateKeys(issue.plannedStartDate, issue.plannedEndDate);
    if (!workingDates.length) return;

    const dailyHours = (issue.originalEstimate.seconds / 3600) / workingDates.length;

    const assigneeCells = cellsByAssignee.get(issue.assignee);

    workingDates.forEach((date) => {
      allDates.add(date);

      if (!assigneeCells.has(date)) {
        assigneeCells.set(date, createEmptyDailyCell(issue.assignee, date));
      }

      const cell = assigneeCells.get(date);
      cell.hours += dailyHours;
      cell.issueCount += 1;
      cell.issues.push(issue);
      cell.contributions.push({
        issue,
        dailyHours,
        workingDays: workingDates.length,
        originalHours: issue.originalEstimate.seconds / 3600,
        startDate: issue.plannedStartDate,
        endDate: issue.plannedEndDate
      });
    });
  });

  const dates = [...allDates].sort();
  const rows = [...cellsByAssignee.entries()]
    .map(([assignee, cells]) => {
      cells.forEach((cell) => decorateDailyCell(cell));
      return {
        assignee,
        cells
      };
    })
    .sort((a, b) => a.assignee.localeCompare(b.assignee));

  const resourceSummaries = rows.map((row) => {
    const cells = [...row.cells.values()];
    const averageResourceUtilization = Math.round(average(cells.map((cell) => cell.utilization)));
    const peakUtilization = Math.max(...cells.map((cell) => cell.utilization), 0);
    return {
      assignee: row.assignee,
      averageUtilization: averageResourceUtilization,
      peakUtilization
    };
  });
  const tableRows = rows
    .flatMap((row) => [...row.cells.values()])
    .map(decorateDailyCell)
    .sort((a, b) => {
      const utilizationCompare = b.utilization - a.utilization;
      if (utilizationCompare !== 0) return utilizationCompare;
      return a.date.localeCompare(b.date);
    });
  const averageUtilization = Math.round(average(resourceSummaries.map((row) => row.averageUtilization)));

  return {
    dates,
    rows,
    tableRows,
    averageUtilization,
    resourceCount: rows.length,
    dateCount: dates.length,
    overloadedCount: resourceSummaries.filter((resource) => resource.peakUtilization > 100).length,
    healthyCount: resourceSummaries.filter((resource) => resource.peakUtilization <= 100 && resource.averageUtilization >= 60 && resource.averageUtilization <= 85).length,
    availableCount: resourceSummaries.filter((resource) => resource.averageUtilization < 60).length
  };
}

function createEmptyDailyCell(assignee, date) {
  return {
    assignee,
    date,
    hours: 0,
    utilization: 0,
    issueCount: 0,
    issues: [],
    contributions: [],
    level: "low",
    status: "Baja carga"
  };
}

function decorateDailyCell(cell) {
  cell.utilization = Math.round((cell.hours / 8) * 100);
  const classification = getDailyLoadClassification(cell.utilization);
  cell.level = classification.level;
  cell.status = classification.status;
  return cell;
}

function getDailyLoadClassification(utilization) {
  if (utilization > 120) return { level: "critical", status: "Critico" };
  if (utilization > 100) return { level: "overload", status: "Sobrecarga" };
  if (utilization > 85) return { level: "high", status: "Alta carga" };
  if (utilization >= 60) return { level: "healthy", status: "Saludable" };
  return { level: "low", status: "Baja carga" };
}

function getWorkingDateKeys(startDate, endDate) {
  const start = parseLocalDate(startDate);
  const end = parseLocalDate(endDate);
  const cursor = start <= end ? start : end;
  const limit = start <= end ? end : start;
  const dates = [];

  while (cursor <= limit) {
    if (isWeekday(cursor)) {
      dates.push(toDateKey(cursor));
    }

    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
}

function getDailyHeatmapWindowDates() {
  const today = stripTime(new Date());
  const start = addDays(today, -15);
  const end = addDays(today, 15);
  const dates = [];
  const cursor = new Date(start);

  while (cursor <= end) {
    if (isWeekday(cursor)) {
      dates.push(toDateKey(cursor));
    }

    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
}

function getSelectedSprintMarkers(selectedSprints, issues, range) {
  if (!selectedSprints.length) return [];

  const markers = new Map();

  selectedSprints.forEach((name) => {
    const issuesInSprint = issues.filter((issue) => issueMatchesSelectedSprints(issue, [name]));
    const details = issuesInSprint
      .flatMap((issue) => issue.sprintDetails || [])
      .filter((sprint) => sprintNameMatches(sprint.name, name));
    const fallbackIssues = issuesInSprint.length ? issuesInSprint : selectedSprints.length === 1 ? issues : [];

    const startDate = firstDate(details.map((sprint) => sprint.startDate))
      || firstDate(fallbackIssues.map((issue) => issue.startDate));
    const endDate = lastDate(details.map((sprint) => sprint.endDate))
      || lastDate(fallbackIssues.map((issue) => issue.endDate));

    if (!startDate || !endDate) return;
    if (!dateRangesOverlap(startDate, endDate, range)) return;

    markers.set(name, {
      name,
      startDate,
      endDate
    });
  });

  return [...markers.values()].sort((a, b) => a.startDate.localeCompare(b.startDate));
}

function firstDate(values) {
  const validDates = values.filter(Boolean).sort();
  return validDates[0] || null;
}

function lastDate(values) {
  const validDates = values.filter(Boolean).sort();
  return validDates[validDates.length - 1] || null;
}

function dateRangesOverlap(startDate, endDate, range) {
  const start = parseLocalDate(startDate);
  const end = parseLocalDate(endDate);
  return start <= range.end && end >= range.start;
}

function groupBy(issues, key) {
  const map = new Map();
  issues.forEach((issue) => {
    const name = issue[key] || "Sin dato";
    if (!map.has(name)) map.set(name, []);
    map.get(name).push(issue);
  });
  return [...map.entries()];
}

function sum(items, mapper) {
  return items.reduce((total, item) => total + (Number(mapper(item)) || 0), 0);
}

function average(values) {
  const validValues = values.filter((value) => Number.isFinite(value));
  if (!validValues.length) return 0;
  return validValues.reduce((total, value) => total + value, 0) / validValues.length;
}

function percent(numerator, denominator) {
  if (!denominator) return 0;
  return Math.round((numerator / denominator) * 100);
}

function setCheckboxOptions(container, values, name) {
  const selectedValues = new Set(getCheckedValues(container));
  const availableValues = new Set(values);
  const selectedWithoutMatches = [...selectedValues].filter((value) => !availableValues.has(value));
  const optionValues = [...values, ...selectedWithoutMatches].sort((a, b) => a.localeCompare(b));

  if (!optionValues.length) {
    container.innerHTML = `<span class="checkbox-empty">${escapeHtml(t("noOptions"))}</span>`;
    return;
  }

  container.innerHTML = optionValues.map((value) => {
    const id = `${name}-${slugify(value)}`;
    const checked = selectedValues.has(value) ? "checked" : "";
    const unavailable = !availableValues.has(value);

    return `
      <label class="check-option ${unavailable ? "is-unavailable" : ""}" for="${escapeHtml(id)}" title="${escapeHtml(value)}">
        <input id="${escapeHtml(id)}" type="checkbox" name="${escapeHtml(name)}" value="${escapeHtml(value)}" ${checked}>
        <span>${escapeHtml(value)}</span>
      </label>
    `;
  }).join("");
}

function uniqueValues(issues, key) {
  return [...new Set(issues.map((issue) => issue[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function uniqueSprintNames(issues) {
  const names = new Set();

  issues.forEach((issue) => {
    if (issue.sprintDetails?.length) {
      issue.sprintDetails.forEach((sprint) => {
        if (sprint.name) names.add(sprint.name);
      });
      return;
    }

    if (issue.sprint && issue.sprint !== "Sin sprint") {
      names.add(issue.sprint);
    }
  });

  return [...names].sort((a, b) => a.localeCompare(b));
}

function issueMatchesSelectedSprints(issue, selectedSprints) {
  if (issue.sprintDetails?.some((sprint) => selectedSprints.some((selected) => sprintNameMatches(sprint.name, selected)))) {
    return true;
  }

  return selectedSprints.some((selected) => sprintNameMatches(issue.sprint, selected));
}

function sprintNameMatches(value, selectedSprint) {
  const normalizedValue = normalizeSprintName(value);
  const normalizedSelected = normalizeSprintName(selectedSprint);
  if (!normalizedValue || !normalizedSelected) return false;

  return normalizedValue === normalizedSelected
    || normalizedValue.split(",").map((part) => part.trim()).includes(normalizedSelected);
}

function normalizeSprintName(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function getCheckedValues(container) {
  return [...container.querySelectorAll("input[type='checkbox']:checked")].map((checkbox) => checkbox.value);
}

function restoreConnectionData() {
  try {
    const savedConnection = JSON.parse(localStorage.getItem(CONNECTION_STORAGE_KEY) || "{}");
    document.querySelector("#jiraBaseUrl").value = savedConnection.baseUrl || "";
    document.querySelector("#jiraUser").value = savedConnection.user || "";
    document.querySelector("#jiraJql").value = savedConnection.jql || "project = DES ORDER BY updated DESC";
    document.querySelector("#jiraToken").value = sessionStorage.getItem(TOKEN_SESSION_KEY) || "";
  } catch (error) {
    document.querySelector("#jiraJql").value = "project = DES ORDER BY updated DESC";
  }
}

function saveConnectionData() {
  const connection = {
    baseUrl: getInputValue("#jiraBaseUrl"),
    user: getInputValue("#jiraUser"),
    jql: getInputValue("#jiraJql")
  };

  localStorage.setItem(CONNECTION_STORAGE_KEY, JSON.stringify(connection));
}

function saveSessionToken() {
  const token = getInputValue("#jiraToken");

  if (!token) {
    sessionStorage.removeItem(TOKEN_SESSION_KEY);
    return;
  }

  sessionStorage.setItem(TOKEN_SESSION_KEY, token);
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48) || "option";
}

function clearFilters() {
  Object.entries(elements.filters).forEach(([key, control]) => {
    if (control.matches?.(".checkbox-options")) {
      control.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.checked = false;
      });
      return;
    }

    if (control.type === "checkbox") {
      control.checked = key === "showSubtasks" || key === "excludeDone";
      return;
    }

    control.value = "";
  });

  updateDateRangeButton("gantt");
  applyFilters();
}

function expandAll() {
  state.collapsedUsers.clear();
  state.collapsedTasks.clear();
  renderGantt(state.groupedData);
}

function collapseAllUsers() {
  state.collapsedUsers = new Set(state.groupedData.map((group) => group.assignee));
  renderGantt(state.groupedData);
}

function collapseAllTasks() {
  state.collapsedTasks = new Set(flattenGroupedIssues(state.groupedData).map((issue) => issue.key));
  renderGantt(state.groupedData);
}

document.addEventListener("click", (event) => {
  const userButton = event.target.closest("[data-collapse-user]");
  const taskButton = event.target.closest("[data-collapse-task]");

  if (userButton) {
    toggleSetValue(state.collapsedUsers, userButton.dataset.collapseUser);
    renderGantt(state.groupedData);
  }

  if (taskButton) {
    toggleSetValue(state.collapsedTasks, taskButton.dataset.collapseTask);
    renderGantt(state.groupedData);
  }
});

function toggleSetValue(set, value) {
  if (set.has(value)) {
    set.delete(value);
    return;
  }

  set.add(value);
}

function updateFilterSummary(filters, count) {
  const activeCount = [
    filters.query,
    filters.projects.length,
    filters.assignees.length,
    filters.hiddenAssignees.length,
    filters.statuses.length,
    filters.sprints.length,
    filters.startDate,
    filters.endDate,
    !filters.showSubtasks,
    filters.excludeDone,
    filters.activeOnly,
    filters.overdueOnly
  ].filter(Boolean).length;

  elements.activeFilterBadge.textContent = state.language === "en" ? `${activeCount} active filters` : `${activeCount} filtros activos`;
  elements.resultCounter.textContent = state.language === "en"
    ? `${count} results out of ${state.normalizedIssues.length} tickets`
    : `${count} resultados de ${state.normalizedIssues.length} tickets`;
}

function renderEmptyState(title, description) {
  elements.ganttBody.innerHTML = `
    <div class="empty-state">
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(description)}</span>
    </div>
  `;
}

function handleApiError(error) {
  const message = error.message || "Ocurrio un error inesperado.";
  showError(message);
  elements.summaryText.textContent = "No se pudo cargar la informacion.";
}

function showError(message) {
  elements.errorBox.hidden = false;
  elements.errorBox.textContent = message;
}

function clearError() {
  elements.errorBox.hidden = true;
  elements.errorBox.textContent = "";
}

function setLoading(isLoading, loadingText = "Consultando...") {
  elements.loadingBox.hidden = !isLoading;
  elements.searchButton.disabled = isLoading;
  elements.refreshButton.disabled = isLoading;
  elements.searchButton.setAttribute("aria-label", isLoading ? loadingText : t("searchJira"));
  elements.searchButton.title = isLoading ? loadingText : t("searchJira");
  elements.refreshButton.setAttribute("aria-label", isLoading ? t("updating") : t("refreshData"));
  elements.refreshButton.title = isLoading ? t("updating") : t("refreshData");
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  elements.themeButtons.forEach((button) => {
    const isActive = button.dataset.themeOption === theme;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  localStorage.setItem("jira-gantt-theme", theme);
}

function sortIssues(issues) {
  return [...issues].sort((a, b) => {
    const assigneeCompare = a.assignee.localeCompare(b.assignee);
    if (assigneeCompare !== 0) return assigneeCompare;

    const parentCompare = (a.parentKey || a.key).localeCompare(b.parentKey || b.key);
    if (parentCompare !== 0) return parentCompare;

    return a.key.localeCompare(b.key);
  });
}

function flattenGroupedIssues(groupedData) {
  return groupedData.flatMap((group) =>
    group.issues.flatMap((issue) => [issue, ...(issue.subtasks || [])])
  );
}

function getRollupIssueScope(issues, shouldRollUpParent = () => true) {
  const issueByKey = new Map(issues.map((issue) => [issue.key, issue]));
  return issues.filter((issue) => {
    if (!issue.isSubtask || !issue.parentKey) return true;

    const parentIssue = issueByKey.get(issue.parentKey);
    return !(parentIssue && shouldRollUpParent(parentIssue));
  });
}

function getSubtaskAwareIssueScope(issues, options = {}) {
  const showSubtasks = options.showSubtasks ?? state.currentFilters?.showSubtasks ?? elements.filters.showSubtasks.checked;

  if (!showSubtasks) {
    return getRollupIssueScope(issues, options.shouldRollUpParent);
  }

  const issueByKey = new Map(issues.map((issue) => [issue.key, issue]));
  const parentKeysWithVisibleSubtasks = new Set();

  issues.forEach((issue) => {
    if (issue.isSubtask && issue.parentKey && issueByKey.has(issue.parentKey)) {
      parentKeysWithVisibleSubtasks.add(issue.parentKey);
    }
  });

  return issues.filter((issue) => !parentKeysWithVisibleSubtasks.has(issue.key));
}

function getGanttRange(issues) {
  const dates = issues
    .flatMap((issue) => [
      issue.startDate,
      issue.endDate,
      ...(issue.sprintDetails || []).flatMap((sprint) => [sprint.startDate, sprint.endDate])
    ])
    .filter(Boolean)
    .map(parseLocalDate);

  if (!dates.length) return null;

  const start = new Date(Math.min(...dates));
  const end = new Date(Math.max(...dates));

  return {
    start,
    end,
    totalDays: diffDays(start, end) + 1
  };
}

function getTimelineUnits(range, zoom) {
  const step = getTimelineStep(zoom);
  const units = [];
  let cursor = new Date(range.start);
  if (step === "quarter") cursor = startOfQuarter(cursor);

  while (cursor <= range.end) {
    const unitStart = new Date(cursor);
    const unitEnd = getTimelineUnitEnd(cursor, step);
    units.push({
      start: unitStart,
      end: unitEnd > range.end ? new Date(range.end) : unitEnd,
      label: getTimelineLabel(unitStart, step),
      sublabel: getTimelineSublabel(unitStart, step)
    });
    cursor = getNextTimelineCursor(cursor, step);
  }

  return units;
}

function getTimelineStep(zoom) {
  if (zoom === "quarter") return "quarter";
  if (zoom === "month") return "month";
  if (zoom === "week") return "week";
  return "day";
}

function getTimelineUnitEnd(date, step) {
  if (step === "quarter") return endOfQuarter(date);
  if (step === "month") return endOfMonth(date);
  return addDays(date, step === "week" ? 6 : 0);
}

function getNextTimelineCursor(date, step) {
  if (step === "quarter") return addMonths(startOfQuarter(date), 3);
  if (step === "month") return addMonths(startOfMonth(date), 1);
  return addDays(date, step === "week" ? 7 : 1);
}

function renderTimelineUnit(unit) {
  return `
    <div class="day">
      <strong>${escapeHtml(unit.label)}</strong>
      <span>${escapeHtml(unit.sublabel)}</span>
    </div>
  `;
}

function getBarPosition(startDate, endDate, range) {
  const leftDays = Math.max(diffDays(range.start, startDate), 0);
  const durationDays = Math.max(diffDays(startDate, endDate) + 1, 1);

  return {
    left: (leftDays / range.totalDays) * 100,
    width: Math.max((durationDays / range.totalDays) * 100, 0.8)
  };
}

function getRangeBarPosition(startDate, endDate, range) {
  const visibleStart = startDate < range.start ? range.start : startDate;
  const visibleEnd = endDate > range.end ? range.end : endDate;
  const leftDays = Math.max(diffDays(range.start, visibleStart), 0);
  const durationDays = Math.max(diffDays(visibleStart, visibleEnd) + 1, 1);

  return {
    left: (leftDays / range.totalDays) * 100,
    width: Math.max((durationDays / range.totalDays) * 100, 1.2)
  };
}

function getTimelineMinWidth(unitCount) {
  return Math.max(unitCount * getUnitWidth(), 960);
}

function getUnitWidth() {
  if (state.zoom === "quarter") return 150;
  if (state.zoom === "month") return 110;
  if (state.zoom === "week") return 92;
  return 48;
}

function getTimelineLabel(date, step) {
  const locale = state.language === "en" ? "en-US" : "es-CO";

  if (step === "quarter") {
    return `${t("quarterPrefix")}${Math.floor(date.getMonth() / 3) + 1}`;
  }

  if (step === "month") {
    return date.toLocaleDateString(locale, { month: "short" });
  }

  if (step === "week") {
    return `${t("weekPrefix")}${getWeekNumber(date)}`;
  }

  return String(date.getDate());
}

function getTimelineSublabel(date, step) {
  const locale = state.language === "en" ? "en-US" : "es-CO";
  if (step === "quarter") return String(date.getFullYear());
  if (step === "month") return String(date.getFullYear());
  return date.toLocaleDateString(locale, { month: "short" });
}

function getTooltipText(issue) {
  const duration = issue.startDate && issue.endDate
    ? `${diffDays(parseLocalDate(issue.startDate), parseLocalDate(issue.endDate)) + 1} ${t("durationDays")}`
    : t("noDuration");

  return [
    `${t("tooltipKey")}: ${issue.key}`,
    `${t("tooltipSummary")}: ${issue.title}`,
    `${t("tooltipUser")}: ${issue.assignee}`,
    `${t("tooltipStatus")}: ${issue.status}`,
    `${t("tooltipStart")}: ${issue.startDate || t("noDate")}`,
    `${t("tooltipEnd")}: ${issue.endDate || t("noDate")}`,
    `${t("tooltipDuration")}: ${duration}`,
    `${t("tooltipPriority")}: ${issue.priority}`,
    `${t("tooltipEstimate")}: ${getOriginalEstimateTitle(issue)}`,
    `${t("tooltipTracking")}: ${issue.timeTracking.tooltip}`,
    issue.dependencyCount ? `${t("tooltipDependencies")}: ${issue.dependencyCount}` : ""
  ].filter(Boolean).join("\n");
}

function getDailyLoadTooltip(cell) {
  const sampleIssues = cell.issues
    .slice(0, 5)
    .map((issue) => issue.key)
    .join(", ");
  const extra = cell.issues.length > 5 ? ` +${cell.issues.length - 5} ${state.language === "en" ? "more" : "mas"}` : "";
  const noTickets = state.language === "en" ? "No assigned tickets" : "Sin tickets asignados";

  return [
    `${t("tooltipUser")}: ${cell.assignee}`,
    `${t("date")}: ${formatDateLong(cell.date)}`,
    `${t("assignedHours")}: ${formatHours(cell.hours)}`,
    `${state.language === "en" ? "Utilization" : "Utilizacion"}: ${cell.utilization}%`,
    `${t("loadStatus")}: ${cell.status}`,
    cell.issueCount ? `Tickets: ${sampleIssues}${extra}` : noTickets
  ].join("\n");
}

function getOriginalEstimateTitle(issue) {
  return issue.originalEstimate.includesSubtasks
    ? `${issue.originalEstimate.label} (${issue.originalEstimate.subtaskCount} ${t("inclSubtasks")})`
    : issue.originalEstimate.label;
}

function getOriginalEstimate(fields) {
  const seconds = fields.timetracking?.originalEstimateSeconds ?? fields.timeoriginalestimate ?? 0;
  const label = fields.timetracking?.originalEstimate || formatSeconds(seconds) || "Sin estimacion";
  return createOriginalEstimate(seconds, label);
}

function getTimeTracking(fields) {
  const spentSeconds = fields.timetracking?.timeSpentSeconds ?? fields.timespent ?? 0;
  const remainingSeconds = fields.timetracking?.remainingEstimateSeconds ?? fields.timeestimate ?? 0;
  const spentLabel = fields.timetracking?.timeSpent || formatSeconds(spentSeconds) || "0h";
  const remainingLabel = fields.timetracking?.remainingEstimate || formatSeconds(remainingSeconds) || "0h";
  return createTimeTracking(spentSeconds, remainingSeconds, spentLabel, remainingLabel);
}

function createOriginalEstimate(seconds, label = "", includesSubtasks = false, subtaskCount = 0) {
  const normalizedSeconds = Number(seconds) || 0;
  const displayLabel = label || formatSeconds(normalizedSeconds) || "Sin estimacion";
  return {
    seconds: normalizedSeconds,
    label: displayLabel,
    includesSubtasks,
    subtaskCount,
    tooltip: includesSubtasks
      ? `${displayLabel} (${state.language === "en" ? "includes subtasks" : "incluye subtareas"})`
      : displayLabel
  };
}

function createTimeTracking(spentSeconds, remainingSeconds, spentLabel = "", remainingLabel = "", includesSubtasks = false) {
  const normalizedSpent = Number(spentSeconds) || 0;
  const normalizedRemaining = Number(remainingSeconds) || 0;
  const displaySpent = spentLabel || formatSeconds(normalizedSpent) || "0h";
  const displayRemaining = remainingLabel || formatSeconds(normalizedRemaining) || "0h";

  return {
    spentSeconds: normalizedSpent,
    remainingSeconds: normalizedRemaining,
    shortLabel: `${displaySpent} usado`,
    tooltip: includesSubtasks
      ? `Usado: ${displaySpent} | Restante: ${displayRemaining} | Incluye subtareas`
      : `Usado: ${displaySpent} | Restante: ${displayRemaining}`,
    includesSubtasks
  };
}

function applySubtaskTimeTrackingRollups(issues) {
  const issueByKey = new Map(issues.map((issue) => [issue.key, issue]));
  const childrenByParent = new Map();

  issues.forEach((issue) => {
    if (!issue.parentKey || !issueByKey.has(issue.parentKey)) return;
    if (!childrenByParent.has(issue.parentKey)) childrenByParent.set(issue.parentKey, []);
    childrenByParent.get(issue.parentKey).push(issue);
  });

  const visiting = new Set();
  const resolved = new Set();

  function computeRollup(issue) {
    if (resolved.has(issue.key)) {
      return {
        originalSeconds: issue.originalEstimate.seconds,
        spentSeconds: issue.timeTracking.spentSeconds,
        remainingSeconds: issue.timeTracking.remainingSeconds,
        subtaskCount: issue.subtaskRollupCount || 0
      };
    }

    if (visiting.has(issue.key)) {
      return getDirectTimeValues(issue);
    }

    visiting.add(issue.key);

    const directValues = getDirectTimeValues(issue);
    const children = childrenByParent.get(issue.key) || [];
    const totals = children.reduce((summary, child) => {
      const childRollup = computeRollup(child);
      summary.originalSeconds += childRollup.originalSeconds;
      summary.spentSeconds += childRollup.spentSeconds;
      summary.remainingSeconds += childRollup.remainingSeconds;
      summary.subtaskCount += 1 + childRollup.subtaskCount;
      return summary;
    }, { ...directValues, subtaskCount: 0 });

    if (children.length) {
      issue.originalEstimate = createOriginalEstimate(
        totals.originalSeconds,
        formatSeconds(totals.originalSeconds) || "Sin estimacion",
        true,
        totals.subtaskCount
      );
      issue.timeTracking = createTimeTracking(
        totals.spentSeconds,
        totals.remainingSeconds,
        formatSeconds(totals.spentSeconds) || "0h",
        formatSeconds(totals.remainingSeconds) || "0h",
        true
      );
      issue.subtaskRollupCount = totals.subtaskCount;
    }

    visiting.delete(issue.key);
    resolved.add(issue.key);
    return totals;
  }

  issues.forEach(computeRollup);
}

function getDirectTimeValues(issue) {
  return {
    originalSeconds: issue.rawOriginalEstimate?.seconds || 0,
    spentSeconds: issue.rawTimeTracking?.spentSeconds || 0,
    remainingSeconds: issue.rawTimeTracking?.remainingSeconds || 0,
    subtaskCount: 0
  };
}

function getPrincipalField(parent) {
  if (!parent?.key) return "Sin principal";
  if (!isEpicIssueType(parent.fields?.issuetype)) return "Sin principal";

  const summary = parent.fields?.summary;
  return summary ? `${parent.key} - ${summary}` : parent.key;
}

function isEpicIssueType(issueType) {
  const normalizedType = normalizeComparableText(getIssueTypeName(issueType));
  return normalizedType.includes("epic") || normalizedType.includes("epica");
}

function isSubtaskIssueType(issueType) {
  const normalizedType = normalizeComparableText(getIssueTypeName(issueType));
  return Boolean(issueType?.subtask)
    || normalizedType.includes("sub-task")
    || normalizedType.includes("subtask")
    || normalizedType.includes("subtarea");
}

function getIssueTypeName(issueType) {
  return typeof issueType === "string" ? issueType : issueType?.name || "";
}

function normalizeWorklogs(worklogs) {
  return worklogs
    .map((worklog) => ({
      id: worklog.id,
      description: extractWorklogDescription(worklog.comment) || "Sin descripcion",
      started: normalizeDate(worklog.started) || normalizeDate(worklog.created) || "",
      startedRaw: worklog.started || worklog.created || "",
      startedLabel: formatDateTime(worklog.started || worklog.created),
      seconds: Number(worklog.timeSpentSeconds) || 0,
      hoursLabel: worklog.timeSpent || formatSeconds(Number(worklog.timeSpentSeconds) || 0) || "0h"
    }))
    .sort((a, b) => String(b.startedRaw || b.started).localeCompare(String(a.startedRaw || a.started)));
}

function extractWorklogDescription(comment) {
  if (!comment) return "";
  if (typeof comment === "string") return comment.trim();

  const textParts = [];
  collectAdfText(comment, textParts);
  return textParts.join(" ").replace(/\s+/g, " ").trim();
}

function collectAdfText(node, textParts) {
  if (!node) return;

  if (typeof node === "string") {
    textParts.push(node);
    return;
  }

  if (Array.isArray(node)) {
    node.forEach((child) => collectAdfText(child, textParts));
    return;
  }

  if (typeof node === "object") {
    if (node.text) textParts.push(node.text);
    if (node.content) collectAdfText(node.content, textParts);
  }
}

function formatSeconds(seconds) {
  if (!seconds) return "";

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours && minutes) return `${hours}h ${minutes}m`;
  if (hours) return `${hours}h`;
  return `${minutes}m`;
}

function formatSignedSeconds(seconds) {
  if (!seconds) return "0h";

  const sign = seconds > 0 ? "+" : "-";
  return `${sign}${formatSeconds(Math.abs(seconds))}`;
}

function formatHours(hours) {
  const locale = state.language === "en" ? "en-US" : "es-CO";
  const rounded = Math.round(hours * 10) / 10;
  return `${rounded.toLocaleString(locale, { maximumFractionDigits: 1 })}h`;
}

function getIssueProgress(statusClass) {
  if (statusClass === "status-done") return 100;
  if (statusClass === "status-progress") return 65;
  if (statusClass === "status-todo") return 12;
  if (statusClass === "status-blocked") return 35;
  return 25;
}

function getStatusClass(status) {
  const normalizedStatus = String(status || "").toLowerCase();

  if (normalizedStatus.includes("blocked") || normalizedStatus.includes("bloque") || normalizedStatus.includes("pending") || normalizedStatus.includes("pendiente")) return "status-blocked";
  if (normalizedStatus.includes("progress") || normalizedStatus.includes("progreso") || normalizedStatus.includes("curso")) return "status-progress";
  if (normalizedStatus.includes("done") || normalizedStatus.includes("hecho") || normalizedStatus.includes("cerrado") || normalizedStatus.includes("finalizado") || normalizedStatus.includes("finalizada")) return "status-done";
  if (normalizedStatus.includes("to do") || normalizedStatus.includes("todo") || normalizedStatus.includes("por hacer")) return "status-todo";

  return "status-other";
}

function translateStatus(status) {
  const normalizedStatus = String(status || "").toLowerCase();

  if (normalizedStatus.includes("blocked") || normalizedStatus.includes("bloque") || normalizedStatus.includes("pending") || normalizedStatus.includes("pendiente")) {
    return "Pendiente/Bloqueado";
  }

  if (normalizedStatus.includes("progress") || normalizedStatus.includes("progreso") || normalizedStatus.includes("curso")) {
    return "En curso";
  }

  if (normalizedStatus.includes("done") || normalizedStatus.includes("hecho") || normalizedStatus.includes("cerrado") || normalizedStatus.includes("finalizado") || normalizedStatus.includes("finalizada")) {
    return "Finalizada";
  }

  if (normalizedStatus.includes("to do") || normalizedStatus.includes("todo") || normalizedStatus.includes("por hacer")) {
    return "Por hacer";
  }

  return status || "Sin estado";
}

function translateIssueType(issueType) {
  const normalizedType = normalizeComparableText(issueType);

  if (normalizedType.includes("sub-task") || normalizedType.includes("subtask") || normalizedType.includes("subtarea")) return "Subtarea";
  if (normalizedType.includes("task") || normalizedType.includes("tarea")) return "Tarea";
  if (normalizedType.includes("bug") || normalizedType.includes("error")) return "Error";
  if (normalizedType.includes("story") || normalizedType.includes("historia")) return "Historia";
  if (normalizedType.includes("epic") || normalizedType.includes("epica")) return "Epica";
  if (normalizedType.includes("improvement") || normalizedType.includes("mejora")) return "Mejora";

  return issueType || "Ticket";
}

function getPriorityClass(priority) {
  const normalizedPriority = normalizeComparableText(priority);

  if (normalizedPriority.includes("highest") || normalizedPriority.includes("alta") || normalizedPriority.includes("high")) return "priority-high";
  if (normalizedPriority.includes("medium") || normalizedPriority.includes("media")) return "priority-medium";
  if (normalizedPriority.includes("low") || normalizedPriority.includes("baja")) return "priority-low";
  return "priority-other";
}

function isIssueOverdue(endDate, status) {
  if (!endDate || getStatusClass(status) === "status-done") return false;
  return stripTime(parseLocalDate(endDate)) < stripTime(new Date());
}

function isIssueDueSoon(endDate, status) {
  if (!endDate || getStatusClass(status) === "status-done") return false;
  const remainingDays = diffDays(new Date(), parseLocalDate(endDate));
  return remainingDays >= 0 && remainingDays <= 3;
}

function getSprintNames(value) {
  if (!Array.isArray(value)) return "";

  return value
    .map((sprint) => sprint?.name)
    .filter(Boolean)
    .join(", ");
}

function getSprintDetails(value) {
  if (!Array.isArray(value)) return [];

  return value
    .map((sprint) => {
      if (!sprint) return null;
      if (typeof sprint === "string") {
        return {
          name: extractSprintStringValue(sprint, "name") || sprint,
          startDate: normalizeDate(extractSprintStringValue(sprint, "startDate")),
          endDate: normalizeDate(extractSprintStringValue(sprint, "endDate") || extractSprintStringValue(sprint, "completeDate"))
        };
      }

      return {
        name: sprint.name,
        startDate: normalizeDate(sprint.startDate),
        endDate: normalizeDate(sprint.endDate || sprint.completeDate)
      };
    })
    .filter((sprint) => sprint?.name);
}

function getDependencyLinks(links, currentKey) {
  if (!Array.isArray(links)) return [];

  return links.flatMap((link) => {
    const linkType = normalizeDependencyText(link?.type?.name);
    const outwardLabel = normalizeDependencyText(link?.type?.outward);
    const inwardLabel = normalizeDependencyText(link?.type?.inward);
    const isBlockLinkType = linkType.includes("block") || linkType.includes("bloque");
    const dependencies = [];

    if (link?.outwardIssue?.key && (isBlocksDependency(outwardLabel) || isBlockLinkType)) {
      dependencies.push({
        type: "blocks",
        fromKey: currentKey,
        toKey: link.outwardIssue.key,
        label: link?.type?.outward || "blocks"
      });
    }

    if (link?.inwardIssue?.key && (isBlockedByDependency(inwardLabel) || isBlockLinkType)) {
      dependencies.push({
        type: "blocked-by",
        fromKey: link.inwardIssue.key,
        toKey: currentKey,
        label: link?.type?.inward || "is blocked by"
      });
    }

    return dependencies;
  });
}

function isBlocksDependency(label) {
  return label === "blocks" || label.includes("blocks") || label.includes("bloquea");
}

function isBlockedByDependency(label) {
  return label.includes("blocked by") || label.includes("is blocked by") || label.includes("bloqueado por") || label.includes("bloqueada por");
}

function normalizeDependencyText(value) {
  return normalizeComparableText(value);
}

function normalizeComparableText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function extractSprintStringValue(value, key) {
  const match = String(value).match(new RegExp(`${key}=([^,\\]]+)`));
  return match ? match[1] : "";
}

function getIssueScheduleDates(fields) {
  const explicitStart = normalizeDate(fields[START_DATE_FIELD]);
  const explicitEnd = normalizeDate(fields[END_DATE_FIELD]) || normalizeDate(fields.duedate);
  const customDates = getCustomDateFieldValues(fields);
  const startDate = explicitStart || firstDate(customDates) || normalizeDate(fields.created);
  const customEndDates = startDate
    ? customDates.filter((date) => date >= startDate)
    : customDates;
  const endDate = explicitEnd || lastDate(customEndDates) || normalizeDate(fields.updated);

  return {
    startDate,
    endDate,
    plannedStartDate: explicitStart,
    plannedEndDate: explicitEnd,
    hasPlannedDates: Boolean(explicitStart && explicitEnd)
  };
}

function getCustomDateFieldValues(fields) {
  return Object.entries(fields || {})
    .filter(([key]) => key.startsWith("customfield_") && key !== SPRINT_FIELD)
    .flatMap(([, value]) => extractDateValues(value))
    .filter(Boolean)
    .sort();
}

function extractDateValues(value) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value.flatMap(extractDateValues);
  }

  if (typeof value === "object") {
    return Object.values(value).flatMap(extractDateValues);
  }

  const date = normalizeDate(value);
  return date ? [date] : [];
}

function normalizeDate(value) {
  if (!value) return null;
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0, 10);
  if (value.value) return normalizeDate(value.value);
  return null;
}

function getShortTitle(title) {
  const cleanTitle = String(title || "Sin titulo").trim();
  return cleanTitle.length <= 36 ? cleanTitle : `${cleanTitle.slice(0, 33)}...`;
}

function getInputValue(selector) {
  return document.querySelector(selector).value.trim();
}

function getJiraBaseUrl() {
  const configuredUrl = getInputValue("#jiraBaseUrl").replace(/\/$/, "");
  if (configuredUrl) return configuredUrl;

  try {
    const savedConnection = JSON.parse(localStorage.getItem(CONNECTION_STORAGE_KEY) || "{}");
    return String(savedConnection.baseUrl || "").replace(/\/$/, "");
  } catch (error) {
    return "";
  }
}

function getJiraIssueUrl(issue) {
  const baseUrl = getJiraBaseUrl();
  if (!baseUrl || !issue?.key) return "";
  return `${baseUrl}/browse/${encodeURIComponent(issue.key)}`;
}

function parseLocalDate(value) {
  const [year, month, day] = String(value).slice(0, 10).split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function addMonths(date, months) {
  const next = new Date(date);
  next.setMonth(next.getMonth() + months);
  return next;
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function startOfQuarter(date) {
  const quarterStartMonth = Math.floor(date.getMonth() / 3) * 3;
  return new Date(date.getFullYear(), quarterStartMonth, 1);
}

function endOfQuarter(date) {
  const quarterStartMonth = Math.floor(date.getMonth() / 3) * 3;
  return new Date(date.getFullYear(), quarterStartMonth + 3, 0);
}

function diffDays(start, end) {
  return Math.round((stripTime(end) - stripTime(start)) / DAY_IN_MS);
}

function stripTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isWeekday(date) {
  const day = date.getDay();
  return day !== 0 && day !== 6;
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatShortDate(dateKey) {
  const locale = state.language === "en" ? "en-US" : "es-CO";
  return parseLocalDate(dateKey).toLocaleDateString(locale, {
    day: "2-digit",
    month: "short"
  });
}

function formatDateLong(dateKey) {
  const locale = state.language === "en" ? "en-US" : "es-CO";
  return parseLocalDate(dateKey).toLocaleDateString(locale, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
}

function getWeekNumber(date) {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNumber = target.getUTCDay() || 7;
  target.setUTCDate(target.getUTCDate() + 4 - dayNumber);
  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
  return Math.ceil((((target - yearStart) / DAY_IN_MS) + 1) / 7);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
