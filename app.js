const translations = {
  zh: {
    documentTitle: "DiQi Tech — AI 产品工程",
    description: "DiQi Tech 将 AI 能力转化为可用、可验证、可维护的产品。",
    skip: "跳至主要内容",
    homeLabel: "DiQi Tech 首页",
    menu: "菜单",
    menuOpen: "打开菜单",
    menuClose: "关闭菜单",
    navLabel: "主导航",
    navWork: "项目",
    navApproach: "方法",
    navAbout: "公司",
    navCollaborate: "协作",
    languageLabel: "Switch to English",
    heroTitle: "把 AI 能力，\n变成可用的产品。",
    heroCopy: "从问题定义到可靠交付，我们设计并实现清晰、可验证、可持续演进的 AI 产品。",
    seeWork: "查看项目",
    githubCta: "GitHub 组织",
    statementTitle: "产品价值，来自系统设计。\n模型只是其中一层。",
    statementCopy: "我们把数据、模型、工具、界面与评估放进同一条工程链路，让智能能力有来源、有边界，也有清晰的用户体验。",
    workTitle: "项目实践",
    workIntro: "聚焦信息检索、Agent 工作流与可验证输出的产品工程。",
    portfolioNote: "其他项目资料正在核对，将在确认后陆续补充。",
    approachTitle: "从不确定性出发，\n向可验证结果推进。",
    approachIntro: "每个项目都从约束和成功标准开始。原型负责回答关键问题，工程化负责让答案持续成立。",
    step1Title: "定义问题",
    step1Copy: "梳理用户任务、数据边界、风险与可测量的成功条件。",
    step2Title: "构建系统",
    step2Copy: "组合模型、检索、工具和界面，形成端到端的工作产品。",
    step3Title: "验证交付",
    step3Copy: "用真实任务测试质量、边界和运行状态，再持续迭代。",
    systemLabel: "系统视图",
    architectureTitle: "让每一层都可观察、可替换。",
    architectureCopy: "清晰的边界让模型更新、工具接入和产品迭代不必推倒重来。",
    diagramTitle: "AI 产品系统架构",
    diagramDescription: "输入经过编排层，连接模型和工具，最终形成可用结果。",
    diagramInputs: "输入",
    diagramInputsSub: "任务 · 数据",
    diagramOrchestration: "编排",
    diagramGuardrails: "状态 · 规则 · 评估",
    diagramModels: "模型 / 工具",
    diagramModelsSub: "推理 · 行动",
    diagramOutcomes: "结果",
    diagramOutcomesSub: "响应 · 决策",
    aboutTitle: "技术判断，\n产品视角。",
    aboutLead: "DiQi Tech 是一家位于阿联酋的 AI 产品工程公司。",
    aboutCopy: "我们关注复杂 AI 能力如何进入真实工作流：界面是否清楚，证据是否可追溯，系统是否能在模型和需求变化时继续演进。",
    legalLabel: "公司名称",
    baseLabel: "所在地",
    baseValue: "阿拉伯联合酋长国",
    domainLabel: "网站",
    collaborateTitle: "关注我们正在构建的产品。",
    collaborateCopy: "在 GitHub 查看 DiQi Tech 的组织主页与可访问仓库。",
    backToTop: "返回顶部",
    allProjects: "全部",
    emptyTitle: "项目介绍正在整理",
    emptyCopy: "完整项目资料将在确认后发布。",
    privateAccess: "私有仓库 · 访问可能受限",
    repositoryLabel: "查看",
    repositoryAria: (name) => `查看 ${name} 仓库`,
    technologyLabel: "技术",
  },
  en: {
    documentTitle: "DiQi Tech — AI Product Engineering",
    description: "DiQi Tech turns AI capabilities into usable, verifiable, maintainable products.",
    skip: "Skip to main content",
    homeLabel: "DiQi Tech home",
    menu: "Menu",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    navLabel: "Primary navigation",
    navWork: "Work",
    navApproach: "Approach",
    navAbout: "Company",
    navCollaborate: "Collaborate",
    languageLabel: "切换至中文",
    heroTitle: "Turn AI capability\ninto a product people can use.",
    heroCopy: "From problem framing to reliable delivery, we design and build AI products that are clear, verifiable, and made to evolve.",
    seeWork: "View work",
    githubCta: "GitHub organization",
    statementTitle: "Product value comes from system design.\nThe model is one layer.",
    statementCopy: "We connect data, models, tools, interfaces, and evaluation in one engineering path—giving intelligence a source, clear boundaries, and a coherent user experience.",
    workTitle: "Selected work",
    workIntro: "Product engineering across information retrieval, agent workflows, and verifiable outputs.",
    portfolioNote: "Additional project profiles are being verified and will be added as they are confirmed.",
    approachTitle: "Start with uncertainty.\nMove toward evidence.",
    approachIntro: "Every project starts with constraints and a definition of success. Prototypes answer critical questions; engineering makes those answers durable.",
    step1Title: "Frame the problem",
    step1Copy: "Map user tasks, data boundaries, risks, and measurable success criteria.",
    step2Title: "Build the system",
    step2Copy: "Combine models, retrieval, tools, and interface into a working end-to-end product.",
    step3Title: "Validate delivery",
    step3Copy: "Test quality, boundaries, and operational state with real tasks, then iterate.",
    systemLabel: "SYSTEM VIEW",
    architectureTitle: "Make every layer observable and replaceable.",
    architectureCopy: "Clear boundaries let models, tools, and product behavior evolve without rebuilding the entire system.",
    diagramTitle: "AI product system architecture",
    diagramDescription: "Inputs pass through orchestration, connect to models and tools, and produce usable outcomes.",
    diagramInputs: "Inputs",
    diagramInputsSub: "Tasks · Data",
    diagramOrchestration: "Orchestration",
    diagramGuardrails: "State · Rules · Evals",
    diagramModels: "Models / Tools",
    diagramModelsSub: "Inference · Actions",
    diagramOutcomes: "Outcomes",
    diagramOutcomesSub: "Responses · Decisions",
    aboutTitle: "Technical judgment.\nProduct perspective.",
    aboutLead: "DiQi Tech is an AI product engineering company based in the UAE.",
    aboutCopy: "We focus on how complex AI capabilities enter real workflows: whether the interface is clear, evidence is traceable, and the system can evolve as models and requirements change.",
    legalLabel: "Company name",
    baseLabel: "Location",
    baseValue: "United Arab Emirates",
    domainLabel: "Website",
    collaborateTitle: "Follow what we are building.",
    collaborateCopy: "Visit the DiQi Tech organization and accessible repositories on GitHub.",
    backToTop: "Back to top",
    allProjects: "All",
    emptyTitle: "Project profiles are being prepared",
    emptyCopy: "Complete project information will be published after review.",
    privateAccess: "Private repository · access may be restricted",
    repositoryLabel: "View",
    repositoryAria: (name) => `View the ${name} repository`,
    technologyLabel: "Technologies",
  },
};

const state = {
  language: getSavedLanguage(),
  projects: [],
  projectsLoaded: false,
  category: "all",
};

const projectList = document.querySelector("[data-project-list]");
const projectFilters = document.querySelector("[data-project-filters]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");

function getSavedLanguage() {
  try {
    return localStorage.getItem("diqitech-language") === "en" ? "en" : "zh";
  } catch {
    return "zh";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("diqitech-language", language);
  } catch {
    // Language switching still works when storage is unavailable.
  }
}

function localized(value) {
  if (typeof value === "string") return value;
  return value?.[state.language] || value?.zh || value?.en || "";
}

function updateLanguage() {
  const copy = translations[state.language];
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.title = copy.documentTitle;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector('meta[property="og:description"]').content = copy.description;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll(".brand").forEach((brand) => {
    brand.setAttribute("aria-label", copy.homeLabel);
  });
  navigation.setAttribute("aria-label", copy.navLabel);
  menuToggle.setAttribute("aria-label", menuToggle.getAttribute("aria-expanded") === "true" ? copy.menuClose : copy.menuOpen);
  document.querySelector("[data-language-short]").textContent = state.language === "zh" ? "EN" : "中";
  document.querySelector("[data-language-label]").textContent = copy.languageLabel;
  document.querySelector("[data-language-toggle]").setAttribute("aria-label", copy.languageLabel);
  if (state.projectsLoaded) renderProjects();
}

function element(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function createProject(project, index) {
  const copy = translations[state.language];
  const article = element("article", "project-item");
  const number = element("span", "project-number", String(index + 1).padStart(2, "0"));
  const heading = element("div", "project-heading");
  const category = element("span", "project-category", localized(project.category));
  const title = element("h3", "project-title", localized(project.name));
  const summary = element("p", "project-summary", localized(project.summary));
  const content = element("div", "project-content");
  const description = element("p", "project-description", localized(project.description));
  const technologies = element("ul", "technology-list");
  const access = element("span", "project-access", copy.privateAccess);
  const link = element("a", "project-link", copy.repositoryLabel);

  heading.append(category, title, summary);
  technologies.setAttribute("aria-label", copy.technologyLabel);
  (project.technologies || []).forEach((technology) => {
    technologies.append(element("li", "", technology));
  });
  content.append(description, technologies, access);

  if (/^https:\/\//.test(project.url || "")) {
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noreferrer";
  } else {
    link.href = "https://github.com/DiQiTech-AI";
  }
  link.setAttribute("aria-label", copy.repositoryAria(localized(project.name)));
  article.append(number, heading, content, link);
  return article;
}

function renderProjects() {
  const copy = translations[state.language];
  projectList.replaceChildren();
  const visibleProjects = state.category === "all"
    ? state.projects
    : state.projects.filter((project) => localized(project.category) === state.category);

  if (!visibleProjects.length) {
    const empty = element("div", "empty-state");
    empty.append(element("div", "", ""));
    empty.firstElementChild.append(
      element("h3", "", copy.emptyTitle),
      element("p", "", copy.emptyCopy),
    );
    projectList.append(empty);
    return;
  }

  visibleProjects.forEach((project, index) => {
    projectList.append(createProject(project, index));
  });
}

function renderFilters() {
  projectFilters.replaceChildren();
  const categories = [...new Set(state.projects.map((project) => localized(project.category)).filter(Boolean))];
  if (categories.length < 2) {
    projectFilters.hidden = true;
    return;
  }

  projectFilters.hidden = false;
  [translations[state.language].allProjects, ...categories].forEach((category, index) => {
    const button = element("button", "filter-button", category);
    button.type = "button";
    const value = index === 0 ? "all" : category;
    if (state.category === value) button.classList.add("is-active");
    button.addEventListener("click", () => {
      state.category = value;
      renderFilters();
      renderProjects();
    });
    projectFilters.append(button);
  });
}

async function loadProjects() {
  try {
    const response = await fetch("projects.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Project request returned ${response.status}`);
    const projects = await response.json();
    state.projects = Array.isArray(projects) ? projects : [];
    state.projectsLoaded = true;
  } catch (error) {
    console.warn("Project data could not be loaded.", error);
    return;
  }
  renderFilters();
  renderProjects();
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", translations[state.language].menuOpen);
  navigation.classList.remove("is-open");
  header.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? translations[state.language].menuOpen : translations[state.language].menuClose);
  navigation.classList.toggle("is-open", !isOpen);
  header.classList.toggle("is-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuToggle.focus();
  }
});

document.querySelector("[data-language-toggle]").addEventListener("click", () => {
  state.language = state.language === "zh" ? "en" : "zh";
  state.category = "all";
  saveLanguage(state.language);
  updateLanguage();
  renderFilters();
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
}, { passive: true });

document.querySelector("[data-year]").textContent = new Date().getFullYear();
updateLanguage();
loadProjects();
