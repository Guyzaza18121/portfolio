// ===== Year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Navbar scroll state + progress bar =====
const navbar = document.getElementById("navbar");
const progress = document.getElementById("scrollProgress");
function onScroll() {
  const y = window.scrollY;
  navbar.classList.toggle("scrolled", y > 40);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navLinks.classList.remove("open");
  })
);

// ===== Reveal on scroll =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ===== Count-up stats =====
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || "";
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const tick = () => {
        cur = Math.min(target, cur + step);
        el.textContent = cur + suffix;
        if (cur < target) requestAnimationFrame(tick);
      };
      tick();
      statObserver.unobserve(el);
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll(".stat b[data-count]").forEach((el) => statObserver.observe(el));

// ===== Language switch (TH / EN) =====
const typeWords = {
  th: ["สร้างระบบที่สามารถใช้งานได้จริงบนโลกออนไลน์", "เชื่อมต่ออุปกรณ์ IoT เข้ากับ Web Site", "ออกแบบเว็บที่สวยงาม อ่านง่ายและลื่นไหล", "พัฒนาระบบได้ตาม requirement ของ User"],
  en: ["build systems that actually work", "connect device IoT to the web site", "craft smooth digital experiences", "power real business workflows"],
};
let currentLang = localStorage.getItem("lang") || "th";

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-en]").forEach((el) => {
    if (el.dataset.th === undefined) el.dataset.th = el.innerHTML;
    let html = lang === "en" ? el.dataset.en : el.dataset.th;
    if (lang === "en") html = html.replace("<YEAR>", new Date().getFullYear());
    el.innerHTML = html;
  });

  document.querySelectorAll(".lang-opt").forEach((o) =>
    o.classList.toggle("active", o.dataset.lang === lang)
  );

  // restart typewriter with new language
  wi = 0; ci = 0; deleting = false;
}

document.querySelectorAll(".lang-opt").forEach((opt) =>
  opt.addEventListener("click", () => setLang(opt.dataset.lang))
);

// ===== Typewriter =====
const typeTarget = document.getElementById("typeTarget");
let wi = 0, ci = 0, deleting = false;
function type() {
  const words = typeWords[currentLang];
  const word = words[wi];
  typeTarget.textContent = word.slice(0, ci);
  if (!deleting && ci < word.length) {
    ci++;
    setTimeout(type, 90);
  } else if (deleting && ci > 0) {
    ci--;
    setTimeout(type, 45);
  } else {
    if (!deleting) {
      deleting = true;
      setTimeout(type, 1600);
    } else {
      deleting = false;
      wi = (wi + 1) % words.length;
      setTimeout(type, 300);
    }
  }
}
type();

// Apply stored language on load (also captures Thai originals into data-th)
setLang(currentLang);

// ===== Project filters =====
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((f) => f.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    cards.forEach((card) => {
      const cats = card.dataset.cat.split(" ");
      const show = f === "all" || cats.includes(f);
      card.classList.toggle("hide", !show);
    });
  });
});

// ===== Card spotlight (follow cursor) =====
cards.forEach((card) => {
  card.addEventListener("mousemove", (ev) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", ev.clientX - r.left + "px");
    card.style.setProperty("--my", ev.clientY - r.top + "px");
  });
});
