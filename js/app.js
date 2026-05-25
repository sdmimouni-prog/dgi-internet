const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const searchForm = document.querySelector("[data-search-form]");
const searchInput = document.querySelector("[data-search-input]");
const suggestionButtons = document.querySelectorAll("[data-suggestion]");
const newsletterForm = document.querySelector(".newsletter-form");
const languageMenu = document.querySelector("[data-language-menu]");
const languageTrigger = document.querySelector("[data-language-trigger]");
const passwordToggle = document.querySelector("[data-password-toggle]");
const loginPassword = document.querySelector("#login-password");
const spaceChoiceMain = document.querySelector(".space-choice-main");
const spaceTriggers = document.querySelectorAll("[data-space-trigger]");
const servicePanel = document.querySelector("[data-service-panel]");
const serviceBack = document.querySelector("[data-service-back]");
const servicePreviews = document.querySelectorAll("[data-service-preview]");
const serviceLists = document.querySelectorAll("[data-service-list]");
const registrationTriggers = document.querySelectorAll("[data-registration-profile]");
const registrationPanel = document.querySelector("[data-registration-panel]");
const registrationPreviews = document.querySelectorAll("[data-registration-preview]");
const registrationContents = document.querySelectorAll("[data-registration-content]");
const certificateFamilyTriggers = document.querySelectorAll("[data-certificate-family]");
const certificatePanel = document.querySelector("[data-certificate-panel]");
const attestationTitle = document.querySelector("[data-attestation-title]");
const simplIrTrigger = document.querySelector("[data-simpl-ir-trigger]");
const simplIrPanel = document.querySelector("[data-simpl-ir-panel]");

const languageConfig = {
  fr: {
    label: "FR",
    htmlLang: "fr",
    dir: "",
    connected: "Téléservices",
    menu: "Changer la langue",
    options: { fr: "FR", ar: "عربية", es: "ES", en: "EN", zgh: "Amazigh" },
  },
  ar: {
    label: "عربية",
    htmlLang: "ar",
    dir: "rtl",
    connected: "الفضاء المتصل",
    menu: "تغيير اللغة",
    options: { fr: "الفرنسية", ar: "عربية", es: "الإسبانية", en: "الإنجليزية", zgh: "الأمازيغية" },
  },
  es: {
    label: "ES",
    htmlLang: "es",
    dir: "",
    connected: "Área conectada",
    menu: "Cambiar idioma",
    options: { fr: "FR", ar: "عربية", es: "ES", en: "EN", zgh: "Amazigh" },
  },
  en: {
    label: "EN",
    htmlLang: "en",
    dir: "",
    connected: "Connected area",
    menu: "Change language",
    options: { fr: "FR", ar: "عربية", es: "ES", en: "EN", zgh: "Amazigh" },
  },
  zgh: {
    label: "ⵜⴰⵎⴰⵣⵉⵖⵜ",
    htmlLang: "zgh-Tfng",
    dir: "",
    connected: "ⴰⵙⵉⵔⴰ ⵉⵇⵇⵏⵏ",
    menu: "ⵙⵏⴼⵍ ⵜⵓⵜⵍⴰⵢⵜ",
    options: { fr: "FR", ar: "عربية", es: "ES", en: "EN", zgh: "Amazigh" },
  },
};

const languageFolders = new Set(["ar", "es", "en", "zgh"]);
const languageOrder = ["fr", "ar", "es", "en", "zgh"];
const translatedPages = new Set([
  "index.html",
  "declarer-mes-impots.html",
  "documentation-guides.html",
  "nous-connaitre.html",
  "obtenir-attestation-fiscale.html",
  "particulier.html",
  "payer-vos-taxes.html",
  "prendre-rendez-vous.html",
]);

const getPageLanguage = () => {
  const segments = window.location.pathname.split("/").filter(Boolean);
  const folder = segments[0];

  if (languageFolders.has(folder)) {
    return folder;
  }

  const pageLang = document.documentElement.lang.toLowerCase();
  if (pageLang.startsWith("ar")) return "ar";
  if (pageLang.startsWith("es")) return "es";
  if (pageLang.startsWith("en")) return "en";
  if (pageLang.startsWith("zgh")) return "zgh";
  return "fr";
};

const getLocalizedPageName = () => {
  const segments = window.location.pathname.split("/").filter(Boolean);
  const pathSegments = languageFolders.has(segments[0]) ? segments.slice(1) : segments;
  return pathSegments.join("/") || "index.html";
};

const getLanguageHref = (language, pageName, isInLanguageFolder) => {
  const prefix = language === "fr" ? "" : `${language}/`;
  const path = `${prefix}${pageName}`;
  return isInLanguageFolder ? `../${path}` : path;
};

const syncLanguageSwitcher = () => {
  if (!languageTrigger || !languageMenu) return;

  const currentLanguage = getPageLanguage();
  const config = languageConfig[currentLanguage] || languageConfig.fr;
  const pageName = getLocalizedPageName();
  const languagePageName = translatedPages.has(pageName) ? pageName : "index.html";
  const isInLanguageFolder = languageFolders.has(window.location.pathname.split("/").filter(Boolean)[0]);
  const icon = languageTrigger.querySelector("svg")?.cloneNode(true);

  document.documentElement.lang = config.htmlLang;
  if (config.dir) {
    document.documentElement.dir = config.dir;
    languageTrigger.dir = config.dir;
  } else {
    document.documentElement.removeAttribute("dir");
    languageTrigger.removeAttribute("dir");
  }

  languageTrigger.textContent = config.label;
  if (icon) {
    languageTrigger.append(" ", icon);
  }

  const connectedLabel = document.querySelector(".connected-button span");
  if (connectedLabel) {
    connectedLabel.textContent = config.connected;
  }

  const options = languageMenu.querySelector(".language-options");
  if (!options) return;

  options.setAttribute("aria-label", config.menu);
  options.replaceChildren();
  languageOrder.forEach((language) => {
    const item = document.createElement("a");
    item.href = getLanguageHref(language, languagePageName, isInLanguageFolder);
    item.setAttribute("role", "menuitem");
    item.lang = language === "zgh" ? "zgh-Tfng" : language;
    item.textContent = config.options[language];
    if (language === "ar") item.dir = "rtl";
    if (language === currentLanguage) item.setAttribute("aria-current", "page");
    options.append(item);
  });
};

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

const closeMenu = () => {
  nav?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-label", "Ouvrir le menu");
  menuToggle?.querySelector("use")?.setAttribute("href", "#menu");
};

const closeLanguageMenu = () => {
  languageMenu?.classList.remove("is-open");
  languageTrigger?.setAttribute("aria-expanded", "false");
};

syncLanguageSwitcher();

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

menuToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", Boolean(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  menuToggle.querySelector("use")?.setAttribute(
    "href",
    isOpen ? "#x" : "#menu"
  );
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeLanguageMenu();
    searchForm?.classList.remove("is-active");
  }
});

languageTrigger?.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = languageMenu?.classList.toggle("is-open");
  languageTrigger.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

languageMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeLanguageMenu);
});

document.addEventListener("click", (event) => {
  if (!languageMenu?.contains(event.target)) {
    closeLanguageMenu();
  }
});

searchInput?.addEventListener("focus", () => {
  searchForm?.classList.add("is-active");
});

searchInput?.addEventListener("blur", () => {
  if (!searchInput.value.trim()) {
    searchForm?.classList.remove("is-active");
  }
});

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  searchForm.classList.add("is-active");
  searchInput?.focus();
});

suggestionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!searchInput) return;
    searchInput.value = button.dataset.suggestion || "";
    searchForm?.classList.add("is-active");
    searchInput.focus();
  });
});

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = newsletterForm.querySelector("button");
  const input = newsletterForm.querySelector("input");
  if (!button || !input) return;

  const previousText = button.textContent;
  button.textContent = "Merci";
  input.value = "";

  window.setTimeout(() => {
    button.textContent = previousText;
  }, 1800);
});

passwordToggle?.addEventListener("click", () => {
  if (!loginPassword) return;
  const isPassword = loginPassword.type === "password";
  loginPassword.type = isPassword ? "text" : "password";
  passwordToggle.setAttribute(
    "aria-label",
    isPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"
  );
});

const showServicePanel = (space) => {
  if (!spaceChoiceMain || !servicePanel) return;
  servicePanel.hidden = false;
  spaceChoiceMain.classList.add("is-service-active");
  spaceTriggers.forEach((trigger) => {
    trigger.setAttribute("aria-expanded", String(trigger.dataset.spaceTrigger === space));
  });
  servicePreviews.forEach((preview) => {
    preview.hidden = preview.dataset.servicePreview !== space;
  });
  serviceLists.forEach((list) => {
    list.hidden = list.dataset.serviceList !== space;
  });
  servicePanel.querySelectorAll(".service-option-card, .service-choice-preview .space-choice-card").forEach((card) => {
    card.classList.add("is-visible");
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const hideServicePanel = () => {
  if (!spaceChoiceMain || !servicePanel) return;
  servicePanel.hidden = true;
  spaceChoiceMain.classList.remove("is-service-active");
  spaceTriggers.forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
  spaceTriggers[0]?.focus();
};

spaceTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    showServicePanel(trigger.dataset.spaceTrigger);
  });
});

serviceBack?.addEventListener("click", hideServicePanel);

if (simplIrTrigger && simplIrPanel) {
  simplIrTrigger.addEventListener("click", (event) => {
    event.preventDefault();
    simplIrPanel.hidden = false;
    simplIrTrigger.setAttribute("aria-expanded", "true");
    simplIrPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

if (window.location.hash === "#services-particulier") {
  showServicePanel("particulier");
}

if (window.location.hash === "#services-professionnel") {
  showServicePanel("professionnel");
}

const showRegistrationPanel = (profile, shouldScroll = true) => {
  if (!registrationPanel) return;

  registrationPanel.hidden = false;
  registrationTriggers.forEach((trigger) => {
    const isActive = trigger.dataset.registrationProfile === profile;
    trigger.classList.toggle("is-active", isActive);
    trigger.setAttribute("aria-expanded", String(isActive));
  });
  registrationPreviews.forEach((preview) => {
    preview.hidden = preview.dataset.registrationPreview !== profile;
  });
  registrationContents.forEach((content) => {
    content.hidden = content.dataset.registrationContent !== profile;
  });
  registrationPanel.querySelectorAll(".registration-preview-card, .registration-response-card, .registration-contact-grid a").forEach((card) => {
    card.classList.add("is-visible");
  });

  if (shouldScroll) {
    registrationPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

registrationTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    const profile = trigger.dataset.registrationProfile;
    if (!profile) return;
    showRegistrationPanel(profile);
  });
});

const registrationHashMap = {
  "#immatriculation-particulier": "particulier",
  "#immatriculation-professionnel": "professionnel",
  "#immatriculation-personne-morale": "personne-morale",
};

if (registrationHashMap[window.location.hash]) {
  showRegistrationPanel(registrationHashMap[window.location.hash], false);
}

const showCertificatePanel = (shouldScroll = true) => {
  if (!certificatePanel) return;

  certificatePanel.hidden = false;
  certificateFamilyTriggers.forEach((trigger) => {
    const isActive = trigger.dataset.certificateFamily === "particuliers";
    trigger.classList.toggle("is-active", isActive);
    trigger.setAttribute("aria-expanded", String(isActive));
  });
  certificatePanel.querySelectorAll(".certificate-type-grid a").forEach((card) => {
    card.classList.add("is-visible");
  });

  if (shouldScroll) {
    certificatePanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

certificateFamilyTriggers.forEach((trigger) => {
  trigger.setAttribute("aria-expanded", "false");
  trigger.addEventListener("click", (event) => {
    if (trigger.dataset.certificateFamily !== "particuliers") return;
    event.preventDefault();
    showCertificatePanel();
  });
});

if (window.location.hash === "#attestations-particuliers") {
  showCertificatePanel(false);
}

const attestationTitles = {
  "attestation-de-revenu": "Attestation de revenu.",
  "eligibilite-exoneration-logement-social-tva": "Attestation d'éligibilité à l'exonération du logement social en matière de TVA.",
  "mainlevee-hypotheque-logement-social": "Mainlevée d'hypothèque sur le logement social",
  "non-imposition-th-tsc": "Attestation de non-imposition à la taxe d'habitation et à la taxe de services communaux « TH/TSC ».",
  "imposition-th-tsc": "Attestation d'imposition à la taxe d'habitation et à la taxe de services communaux « TH/TSC ».",
  "mainlevee-hypotheque-restitution-caution": "Mainlevée d'hypothèque ou de restitution de la caution bancaire.",
  "fiche-renseignements-quitus-fiscal": "Fiche de renseignements pour l'obtention du quitus fiscal.",
  "attestation-residence-fiscale": "Attestation de résidence fiscale.",
  "non-deductibilite-assurance-retraite": "Attestation de non déductibilité des cotisations d'assurance retraite complémentaire.",
  "attestation-valeur-locative": "Attestation de valeur locative.",
  "demande-de-vignettes": "Demande de vignettes",
  "demande-homologation": "Demande d'homologation",
};

if (attestationTitle) {
  const attestationKey = new URLSearchParams(window.location.search).get("attestation");
  if (attestationKey && attestationTitles[attestationKey]) {
    attestationTitle.textContent = attestationTitles[attestationKey];
    document.title = `${attestationTitles[attestationKey]} | Direction Générale des Impôts`;
  }
}

const revealTargets = document.querySelectorAll(
  ".action-card, .profile-card, .service-pill, .panel, .newsletter-card, .persona-action-card, .daily-card, .persona-service-grid a, .assistance-grid a, .declaration-type-card, .guided-panel, .declare-resource-grid a, .payment-choice-card, .payment-platform-grid a, .payment-method-list span, .attestation-verify-panel, .attestation-service-grid a, .rendezvous-center-list a, .rendezvous-times button, .rendezvous-document-list a, .rendezvous-summary-list li, .rendezvous-help-strip a, .rendezvous-tips-list li, .docs-category-card, .docs-guide-list a, .docs-form-card, .docs-reg-card, .docs-download-strip a, .docs-trust-grid article, .space-choice-card, .service-option-card, .registration-profile-card, .registration-preview-card, .registration-response-card, .registration-contact-grid a, .certificate-family-card, .certificate-type-grid a, .certificate-detail-grid, .certificate-requirements-panel, .certificate-step-grid article, .certificate-support-grid a, .login-card, .login-assurance article, .dashboard-kpi, .dashboard-panel, .dashboard-ai-card, .dashboard-security-strip"
);

revealTargets.forEach((target) => target.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
