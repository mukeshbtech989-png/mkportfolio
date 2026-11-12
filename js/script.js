/* =====================================================================
   PORTFOLIO DATA  –  EDIT ONLY THIS OBJECT TO UPDATE YOUR WEBSITE
   - Any list left empty ([]) hides its section automatically.
   - Links left as "" are hidden (the button will not appear).
   ===================================================================== */
const portfolioData = {
  name: "Mukesh Kumar",
  headline: "CITS Trainee – Computer Software Application",
  location: "Kanpur, Uttar Pradesh, India",
  email: "mukeshbtech989@gmail.com",
  phone: "8853859326",
  linkedin: "https://www.linkedin.com/in/mukesh-kumar-855a131b8/",
  github: "https://github.com/mukeshbtech989-png",
  photo: "assets/images/profile.jpg",
  resume: "assets/documents/resume.pdf",

  intro: "I am an Information Technology graduate training in Computer Software Application at NSTI Kanpur. I have worked as a computer lab instructor and lecturer, and I enjoy teaching programming through practical examples.",

  about: [
    "I completed my B.Tech in Information Technology in 2021 and am now pursuing CITS in Computer Software Application (CSA) at NSTI Kanpur, session 2026–27.",
    "Before CITS, I worked as a Computer Lab Instructor and as a Lecturer, teaching C, Python, Data Structures and Java.",
    "My CITS project, an AI-Based Student Performance & Skill Gap Analyzer, uses Python and machine learning to find learning gaps in student results.",
    "I want to build a career in technical instruction and skill-based education."
  ],

  education: [
    { title: "CITS – Computer Software Application (CSA)", org: "NSTI Kanpur", period: "Session 2026–27", note: "Currently pursuing" },
    { title: "B.Tech – Information Technology", org: "Bansal Institute of Engineering and Technology (BIET), Lucknow – AKTU", period: "Passed 2021", note: "77.5% (First Division)" }
  ],

  skills: [
    { group: "Programming", items: ["C", "C++", "Python", "Java", "JavaScript", "PHP", "Data Structures"] },
    { group: "Teaching Areas", items: ["Programming for Problem Solving in C", "Python", "Data Structures and Algorithms", "Object-Oriented Programming with Java"] },
    { group: "Computer Skills", items: ["MS Office", "Excel", "Internet"] },
    { group: "Soft Skills", items: ["Communication", "Problem Solving", "Teamwork", "Time Management", "Active Listening"] }
  ],

  projects: [
    {
      name: "AI-Based Student Performance & Skill Gap Analyzer",
      description: "Uses AI to analyze student performance, identify skill gaps, and recommend personalized learning.",
      tech: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript", "Pandas", "Scikit-learn", "AI/ML"],
      contribution: "AI Model & System Development",
      image: "assets/images/ai-student-performance-analyzer.png", // optional: add this file; a gradient card shows until you do
      link: "" // e.g. "https://github.com/mukeshbtech989-png/your-repo" – button stays hidden while empty
    }
  ],

  // Experience and training, newest first. Remove or add entries freely.
  training: [
    { title: "Lecturer", org: "Babu Sunder Singh Institute of Technology and Management, Nigohan, Lucknow", period: "20 Aug 2025 – 30 Jun 2026", note: "Also served as Class Coordinator for CSE/IT/AIML Second Year." },
    { title: "Computer Lab Instructor (PPS Lab)", org: "Bansal Institute of Engineering and Technology, Lucknow", period: "1 Sep 2022 – 11 Jan 2025", note: "" },
    { title: "Faculty Development Programme", org: "Bhagwant University, Ajmer", period: "9–13 Sep 2025", note: "Topic: Emerging Trends in Indian Knowledge Systems in Engineering." },
    { title: "Python Workshop and Final-Year Project", org: "Softpro India Computer Technologies Pvt. Ltd.", period: "", note: "Completed a Student Management System project using Python." }
  ],

  certifications: [
    {
      name: "AI Literacy",
      issuer: "IBM SkillsBuild",
      year: "2026",
      issued: "29 Oct 2026",
      link: "https://www.credly.com/badges/947850a8-7ab0-4458-9c35-ad391a0f0e56/public_url",
      file: "assets/documents/ai-literacy-badge.pdf"
    }
  ]
};

/* ============================ RENDERING ============================ */
const $ = (id) => document.getElementById(id);

/* Small helper to build elements safely (uses textContent, never innerHTML) */
function el(tag, attrs = {}, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === "class") n.className = v; else n.setAttribute(k, v);
  }
  kids.flat().forEach((c) => n.append(c.nodeType ? c : document.createTextNode(c)));
  return n;
}
const ext = { target: "_blank", rel: "noopener noreferrer" };
const D = portfolioData;

/* Hide a section (and its nav link) when it has no data */
const visible = {};
function toggleSection(id, hasData) {
  visible[id] = hasData;
  $(id).hidden = !hasData;
}

function renderHero() {
  $("heroName").textContent = D.name;
  $("heroHeadline").textContent = D.headline;
  $("heroIntro").textContent = D.intro;
  const btns = $("heroBtns");
  if (D.projects.length) btns.append(el("a", { class: "btn primary", href: "#projects" }, "View Projects"));
  btns.append(el("a", { class: "btn ghost", href: "#contact" }, "Contact Me"));
  if (D.resume) btns.append(el("a", { class: "btn ghost", href: D.resume, download: "" }, "Download Resume"));

  const box = $("heroPhoto");
  const initials = () => el("div", { class: "initials", "aria-label": D.name }, D.name.split(" ").map((w) => w[0]).join("").slice(0, 2));
  if (D.photo) {
    const img = el("img", { src: D.photo, alt: "Portrait of " + D.name, width: 300, height: 400 });
    img.addEventListener("error", () => img.replaceWith(initials()));
    box.append(img);
  } else box.append(initials());
}

function renderAbout() {
  toggleSection("about", D.about.length > 0);
  D.about.forEach((p) => $("aboutBody").append(el("p", {}, p)));
}

/* Used for Education and Experience & Training */
function renderTimeline(id, list) {
  toggleSection(id.section, list.length > 0);
  list.forEach((e) => {
    $(id.target).append(el("article", { class: "item" },
      el("h3", {}, e.title),
      el("p", { class: "org" }, e.org),
      e.period ? el("p", { class: "when" }, e.period) : "",
      e.note ? el("p", {}, e.note) : ""));
  });
}

function renderSkills() {
  toggleSection("skills", D.skills.length > 0);
  D.skills.forEach((g) => {
    $("skillGroups").append(el("div", { class: "group" },
      el("h3", {}, g.group),
      el("ul", { class: "tags" }, g.items.map((s) => el("li", { class: "tag" }, s)))));
  });
}

function renderProjects() {
  toggleSection("projects", D.projects.length > 0);
  D.projects.forEach((p) => {
    const fallback = () => el("div", { class: "card-fallback", "aria-hidden": "true" }, "AI/ML");
    let media = fallback();
    if (p.image) {
      media = el("img", { class: "card-img", src: p.image, alt: p.name + " screenshot", loading: "lazy" });
      media.addEventListener("error", () => media.replaceWith(fallback()));
    }
    $("projectGrid").append(el("article", { class: "card" }, media,
      el("div", { class: "card-body" },
        el("h3", {}, p.name),
        el("p", {}, p.description),
        p.contribution ? el("p", { class: "role" }, el("strong", {}, "My contribution: "), p.contribution) : "",
        el("ul", { class: "tags" }, p.tech.map((t) => el("li", { class: "tag" }, t))),
        p.link ? el("a", { class: "btn primary", href: p.link, ...ext }, "View Project") : "")));
  });
}

function renderCerts() {
  toggleSection("certifications", D.certifications.length > 0);
  D.certifications.forEach((c) => {
    $("certList").append(el("article", { class: "card" },
      el("div", { class: "card-body" },
        el("h3", {}, c.name),
        el("p", {}, c.issuer + " · " + (c.issued || c.year)),
        c.link ? el("a", { class: "btn primary", href: c.link, ...ext }, "View Credential") : "",
        c.file ? el("a", { href: c.file, ...ext }, "View certificate (PDF)") : "")));
  });
}

function renderContact() {
  $("contactNote").textContent = "Based in " + D.location + ". Reach out using any of the links below.";
  const rows = [
    ["Email", D.email, "mailto:" + D.email, false],
    ["Phone", D.phone, "tel:+91" + D.phone, false],
    ["LinkedIn", "Mukesh Kumar", D.linkedin, true],
    ["GitHub", "mukeshbtech989-png", D.github, true]
  ].filter((r) => r[1] && r[2]);
  rows.forEach(([label, text, href, external]) => {
    $("contactList").append(el("li", {}, el("a", { href, ...(external ? ext : {}) }, el("b", {}, label), el("span", {}, text))));
  });
  $("footText").textContent = "© " + new Date().getFullYear() + " " + D.name;
}

function renderNav() {
  const items = [["home", "Home"], ["about", "About"], ["education", "Education"], ["skills", "Skills"], ["projects", "Projects"], ["training", "Experience"], ["certifications", "Certificates"], ["contact", "Contact"]];
  items.forEach(([id, label]) => {
    if (id !== "home" && id !== "contact" && !visible[id]) return;
    $("navLinks").append(el("li", {}, el("a", { href: "#" + id, "data-id": id }, label)));
  });
}

/* ============================ INTERACTION ============================ */
function setupTheme() {
  const root = document.documentElement, btn = $("themeBtn");
  const MOON = "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z";
  const SUN = "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4";
  const apply = (t) => {
    root.setAttribute("data-theme", t);
    $("themeIcon").setAttribute("d", t === "dark" ? SUN : MOON);
    btn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
  };
  apply(root.getAttribute("data-theme") || "light");
  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
}

function setupMenu() {
  const menu = $("menu"), btn = $("menuBtn");
  const set = (open) => { menu.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); btn.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
  btn.addEventListener("click", () => set(!menu.classList.contains("open")));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
}

function setupScroll() {
  /* Highlight the nav link of the section currently in view */
  const links = [...document.querySelectorAll("#navLinks a")];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.dataset.id === en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section").forEach((s) => spy.observe(s));

  /* Gentle fade-in for content blocks as they enter the screen */
  const rev = new IntersectionObserver((entries, o) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); o.unobserve(en.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll(".item, .group, .card, .contact li").forEach((n) => { n.classList.add("reveal"); rev.observe(n); });

  /* Back-to-top button */
  const top = $("toTop");
  addEventListener("scroll", () => { top.hidden = scrollY < 600; }, { passive: true });
  top.addEventListener("click", () => scrollTo({ top: 0 }));
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderAbout();
  renderTimeline({ section: "education", target: "eduList" }, D.education);
  renderSkills();
  renderProjects();
  renderTimeline({ section: "training", target: "trainList" }, D.training);
  renderCerts();
  renderContact();
  renderNav();
  setupTheme();
  setupMenu();
  setupScroll();
});
