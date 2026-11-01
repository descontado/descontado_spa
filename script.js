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

// Destaque dos blocos de anúncio para conferir o layout:
// ?anuncios=destaque liga e ?anuncios=normal desliga (a escolha fica salva no navegador)
const ADS_PREVIEW_KEY = "descontado:anuncios-destaque";

function readAdsPreview() {
  const param = new URLSearchParams(window.location.search).get("anuncios");
  try {
    if (param === "destaque") {
      localStorage.setItem(ADS_PREVIEW_KEY, "1");
    } else if (param === "normal") {
      localStorage.removeItem(ADS_PREVIEW_KEY);
    }
    return localStorage.getItem(ADS_PREVIEW_KEY) === "1";
  } catch {
    return param === "destaque";
  }
}

function renderAdsPreview() {
  document.documentElement.classList.add("ads-preview");

  document.querySelectorAll(".ad-slot").forEach((slot) => {
    slot.insertAdjacentHTML(
      "beforeend",
      `<div class="ad-mock" aria-hidden="true">
        <div class="ad-mock-image"></div>
        <div class="ad-mock-body">
          <strong>Anúncio de exemplo</strong>
          <span>Assim um anúncio do Google apareceria neste espaço.</span>
          <small>anunciante.com.br</small>
        </div>
        <span class="ad-mock-button">Abrir</span>
      </div>`,
    );
    const name = document.createElement("p");
    name.className = "ad-preview-name";
    name.textContent = slot.dataset.adPreview || "Bloco de anúncio";
    slot.append(name);
  });

  const toggle = document.createElement("a");
  toggle.className = "ads-preview-toggle";
  toggle.href = "?anuncios=normal";
  toggle.textContent = "Destaque de anúncios ligado · desligar";
  document.body.append(toggle);
}

// Só pede anúncio para blocos com ID numérico do AdSense; os demais (marcadores SLOT_*) ficam escondidos
const adSlots = [...document.querySelectorAll("ins.adsbygoogle")];
const readyAdSlots = adSlots.filter((ad) => /^\d+$/.test(ad.dataset.adSlot || ""));

if (readAdsPreview()) {
  renderAdsPreview();
} else {
  adSlots
    .filter((ad) => !readyAdSlots.includes(ad))
    .forEach((ad) => ad.closest(".ad-slot")?.setAttribute("hidden", ""));

  if (readyAdSlots.length > 0) {
    window.adsbygoogle = window.adsbygoogle || [];
    readyAdSlots.forEach(() => window.adsbygoogle.push({}));
  }
}

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
