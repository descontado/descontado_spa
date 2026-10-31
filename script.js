const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const currentYear = document.querySelector("#current-year");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
    siteNav.classList.toggle("is-open", !isExpanded);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement && event.target.hash) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
      siteNav.classList.remove("is-open");
    }
  });
}

const mobileCta = document.querySelector(".mobile-cta");
const inlineCtas = document.querySelectorAll('[data-cta="hero"], [data-cta="final"]');

if (mobileCta && inlineCtas.length > 0 && "IntersectionObserver" in window) {
  const visibleCtas = new Set();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        visibleCtas.add(entry.target);
      } else {
        visibleCtas.delete(entry.target);
      }
    }
    mobileCta.classList.toggle("is-hidden", visibleCtas.size > 0);
  });
  inlineCtas.forEach((cta) => observer.observe(cta));
}

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
