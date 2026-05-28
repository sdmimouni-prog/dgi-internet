const contactRouter = document.querySelector("[data-contact-router]");
const contactProfile = document.querySelector("[data-contact-profile]");
const contactTopic = document.querySelector("[data-contact-topic]");
const contactRecommendation = document.querySelector("[data-contact-recommendation]");
const feedbackForm = document.querySelector("[data-contact-feedback-form]");
const officeFinder = document.querySelector("[data-office-finder]");
const officeFinderOpeners = document.querySelectorAll("[data-office-finder-open]");
const officeFinderClosers = document.querySelectorAll("[data-office-finder-close]");
const officeSearch = document.querySelector("[data-office-search]");
const officeList = document.querySelector("[data-office-list]");
const officeMap = document.querySelector("[data-office-map]");
const officeTooltip = document.querySelector("[data-office-tooltip]");
const officeMapFrame = document.querySelector("[data-office-map-frame]");
const officeDetail = document.querySelector("[data-office-detail]");
const officeCount = document.querySelector("[data-office-count]");
const officeReset = document.querySelector("[data-office-reset]");
const officeActiveLabel = document.querySelector("[data-office-active-label]");

const connectedSpaceUrl = "https://dgiinternet.vercel.app/espace-connecte.html";
const googleMapsLocale = "hl=fr&gl=MA&region=MA";

const dgiOffices = [
  { id: "casa-centre", city: "Casablanca", label: "Casablanca - Casa Centre", direction: "Direction Inter-préfectorale Casa Centre", manager: "Bureau d'accueil et de communication", managerRole: "Point de contact", email: "contact.casacentre@tax.gov.ma", address: "Centre-ville, Casablanca", lat: 33.5899, lng: -7.6039, x: 48, y: 22 },
  { id: "casa-sud", city: "Casablanca", label: "Casablanca - Casa Sud", direction: "Direction Inter-préfectorale Casa Sud", manager: "Bureau d'accueil et de communication", managerRole: "Point de contact", email: "contact.casasud@tax.gov.ma", address: "Sidi Maârouf, Casablanca", lat: 33.522, lng: -7.647, x: 47.5, y: 24 },
  { id: "casa-nord", city: "Casablanca", label: "Casablanca - Casa Nord", direction: "Direction Inter-préfectorale Casa Nord", manager: "Bureau d'accueil et de communication", managerRole: "Point de contact", email: "contact.casanord@tax.gov.ma", address: "Ain Sebaâ, Casablanca", lat: 33.6078, lng: -7.5358, x: 49.3, y: 21 },
  { id: "casa-anfa", city: "Casablanca", label: "Casablanca - Casa Anfa", direction: "Direction Inter-préfectorale Casa Anfa", manager: "Bureau d'accueil et de communication", managerRole: "Point de contact", email: "contact.casaanfa@tax.gov.ma", address: "Anfa, Casablanca", lat: 33.5901, lng: -7.646, x: 46.7, y: 22 },
  { id: "casa-maarif-est", city: "Casablanca", label: "Casablanca - Maârif Est", direction: "Direction Inter-préfectorale Casa Maârif Est", manager: "Bureau d'accueil et de communication", managerRole: "Point de contact", email: "contact.casaelfida@tax.gov.ma", address: "Maârif Est - El Fida, Casablanca", lat: 33.573, lng: -7.612, x: 47.6, y: 22.6 },
  { id: "hay-mohammadi-ain-sebaa", city: "Casablanca", label: "Hay Mohammadi - Ain Sebaâ", direction: "Direction Inter-préfectorale Hay Mohammadi Ain Sebaâ", manager: "Bureau d'accueil et de communication", managerRole: "Point de contact", email: "contact.hmas@tax.gov.ma", address: "Hay Mohammadi - Ain Sebaâ, Casablanca", lat: 33.588, lng: -7.559, x: 49.6, y: 22.4 },
  { id: "hay-hassani-ain-chock", city: "Casablanca", label: "Hay Hassani - Ain Chock", direction: "Direction Inter-préfectorale Hay Hassani Ain Chock", manager: "Bureau d'accueil et de communication", managerRole: "Point de contact", email: "contact.achh@tax.gov.ma", address: "Hay Hassani - Ain Chock, Casablanca", lat: 33.5458, lng: -7.676, x: 46.4, y: 24.3 },
  { id: "ben-msick-sidi-othmane", city: "Casablanca", label: "Ben M'Sick - Sidi Othmane", direction: "Direction Inter-préfectorale Ben M'Sick Sidi Othmane", manager: "Bureau d'accueil et de communication", managerRole: "Point de contact", email: "contact.bmso@tax.gov.ma", address: "Ben M'Sick - Sidi Othmane, Casablanca", lat: 33.5536, lng: -7.5662, x: 49.1, y: 24.4 },
  { id: "mohammedia", city: "Mohammedia", direction: "Direction Provinciale des impôts de Mohammedia", manager: "Maryam MABROUK", email: "contact.mohammadia@tax.gov.ma", phone: "06 73 31 73 92", address: "Mohammedia", lat: 33.6861, lng: -7.3829, x: 50, y: 20.5 },
  { id: "el-jadida", city: "El Jadida", direction: "Direction Provinciale des Impôts d'EL Jadida", manager: "Samir BENJALLOUN", email: "contact.jadida@tax.gov.ma", phone: "06 62 37 11 00", address: "El Jadida", lat: 33.2316, lng: -8.5007, x: 43, y: 29 },
  { id: "settat", city: "Settat", direction: "Direction Provinciale des Impôts de Settat", manager: "EL Mehdi CHAHIR", email: "contact.settat@tax.gov.ma", phone: "06 73 69 59 92", address: "Settat", lat: 33.001, lng: -7.6166, x: 51, y: 31 },
  { id: "berrechid", city: "Berrechid", direction: "Direction Provinciale des Impôts de Berrechid", manager: "Bureau d'accueil et de communication", managerRole: "Point de contact", email: "contact.berrechid@tax.gov.ma", address: "Berrechid", lat: 33.2655, lng: -7.5875, x: 50.5, y: 27 },
  { id: "rabat", city: "Rabat", direction: "Direction Régionale des Impôts de Rabat", manager: "Fouzia LAMNII", email: "f.lamnii@tax.gov.ma", phone: "06 73 10 61 53", lat: 34.0209, lng: -6.8416, x: 53, y: 15 },
  { id: "kenitra", city: "Kenitra", direction: "Direction Provinciale des Impôts de Kenitra", manager: "Amina LAMSAF", email: "a.lamsaf@tax.gov.ma", phone: "06 73 85 28 44", lat: 34.261, lng: -6.5802, x: 54, y: 12 },
  { id: "tanger", city: "Tanger", direction: "Direction Régionale des Impôts de Tanger", manager: "Samira SEFRIOUI", email: "s.sefrioui@tax.gov.ma", phone: "06 73 70 87 17", lat: 35.7595, lng: -5.834, x: 61, y: 4 },
  { id: "tetouan", city: "Tétouan", direction: "Direction Provinciale des Impôts de Tétouan", manager: "Ahmed EL HAJ TIRARI", email: "a.elhajtirari@tax.gov.ma", phone: "06 73 26 77 52", lat: 35.5785, lng: -5.3684, x: 64, y: 7 },
  { id: "fes", city: "Fès", direction: "Direction Régionale des Impôts de Fès", manager: "Nezha ALAOUI MDAGHRI", email: "ne.alaoui@tax.gov.ma", phone: "06 73 19 33 17", lat: 34.0181, lng: -5.0078, x: 67, y: 19 },
  { id: "meknes", city: "Meknès", direction: "Direction Provinciale des Impôts de Meknès", manager: "Ahmed BOUZAFFOUR", email: "a.bouzafour@tax.gov.ma", phone: "06 73 73 88 11", lat: 33.8935, lng: -5.5547, x: 62, y: 18 },
  { id: "marrakech", city: "Marrakech", direction: "Direction Régionale des Impôts de Marrakech", manager: "Sabah ELMANSOURI", email: "s.elmansouri@tax.gov.ma", phone: "06 60 61 15 06", lat: 31.6295, lng: -7.9811, x: 49, y: 43 },
  { id: "agadir", city: "Agadir", direction: "Direction Régionale des Impôts d'Agadir", manager: "Elyas ACHBANI", email: "e.achbani@tax.gov.ma", phone: "06 62 76 67 47", lat: 30.4278, lng: -9.5981, x: 37, y: 53 },
  { id: "inezgane", city: "Inezgane Ait Melloul", direction: "Direction Provinciale des Impôts d'Inezgane Ait Melloul", manager: "Farid SOUDI", email: "f.soudi@tax.gov.ma", phone: "06 62 16 81 52", lat: 30.3566, lng: -9.5458, x: 38, y: 55 },
  { id: "oujda", city: "Oujda", direction: "Direction Régionale des Impôts d'Oujda", manager: "Naima OUAHHAB", email: "n.ouahhab@tax.gov.ma", phone: "06 73 67 86 47", lat: 34.6814, lng: -1.9086, x: 79, y: 18 },
  { id: "nador", city: "Nador", direction: "Direction Provinciale des impôts de Nador", manager: "Zakaria AL MAKHFI", email: "z.almakhfi@tax.gov.ma", phone: "06 62 19 06 05", lat: 35.1681, lng: -2.9335, x: 73, y: 10 },
  { id: "beni-mellal", city: "Béni Mellal", direction: "Direction Régionale des Impôts de Béni Mellal", manager: "Younes CHADLI", email: "y.chadli@tax.gov.ma", phone: "06 73 43 52 37", lat: 32.3373, lng: -6.3498, x: 58, y: 38 },
  { id: "errachidia", city: "Errachidia", direction: "Direction Régionale des Impôts d'Errachidia", manager: "Redouane KASSIMI", email: "r.kassimi@tax.gov.ma", phone: "06 25 11 39 24", lat: 31.9314, lng: -4.424, x: 69, y: 51 },
];

const contactRecommendations = {
  dossier: {
    title: "Espace connecté DGI",
    body: "Pour une demande liée à votre dossier fiscal, connectez-vous à votre espace afin de sécuriser l'échange et de suivre votre demande.",
    primary: ["Accéder à mon espace", connectedSpaceUrl],
    secondary: ["Trouver un bureau de la DGI", "#office-finder", "office"],
  },
  teleservices: {
    title: "Assistance téléservices",
    body: "Pour une connexion bloquée, un paiement rejeté, une déclaration ou une attestation non générée, préparez une capture d'écran et la référence de transaction.",
    primary: ["Voir l'assistance", "#teleservices"],
    secondary: ["Centre d'appel", "centre-appel.html"],
  },
  reclamation: {
    title: "Réclamation fiscale",
    body: "Pour contester une situation fiscale ou suivre une réclamation, préparez l'identifiant fiscal, la période concernée et les pièces justificatives.",
    primary: ["Préparer ma réclamation", "#reclamations"],
    secondary: ["Trouver un bureau de la DGI", "#office-finder", "office"],
  },
  attestation: {
    title: "Attestations et documents",
    body: "Les demandes d'attestation doivent être réalisées via les services en ligne quand le dossier fiscal est identifié.",
    primary: ["Mes attestations", "mes-attestations.html"],
    secondary: ["FAQ attestations", "faq.html"],
  },
  rdv: {
    title: "Rendez-vous DGI",
    body: "Si votre demande nécessite un accompagnement en agence, planifiez un rendez-vous et choisissez le centre le plus proche.",
    primary: ["Prendre rendez-vous", "prendre-rendez-vous.html"],
    secondary: ["Trouver un bureau de la DGI", "#office-finder", "office"],
  },
  general: {
    title: "FAQ et centre d'appel",
    body: "Pour une question fiscale générale, consultez d'abord la FAQ. Si la réponse n'y figure pas, le centre d'appel peut vous orienter.",
    primary: ["Consulter la FAQ", "faq.html"],
    secondary: ["Centre d'appel", "centre-appel.html"],
  },
  technique: {
    title: "Webmaster du portail",
    body: "Pour un problème de navigation, de téléchargement ou d'accès au portail public, contactez le webmaster avec une capture d'écran.",
    primary: ["Écrire au webmaster", "mailto:webmaster@tax.gov.ma"],
    secondary: ["Sécurité numérique", "#securite"],
  },
};

const renderRecommendation = () => {
  if (!contactRecommendation || !contactTopic) return;
  const recommendation = contactRecommendations[contactTopic.value] || contactRecommendations.dossier;
  const profileLabel = contactProfile?.selectedOptions?.[0]?.textContent || "Contribuable";

  contactRecommendation.innerHTML = `
    <span>Canal recommandé pour ${profileLabel}</span>
    <h2>${recommendation.title}</h2>
    <p>${recommendation.body}</p>
    <div class="contact-recommendation-actions">
      <a href="${recommendation.primary[1]}">${recommendation.primary[0]} <svg aria-hidden="true"><use href="#arrow-right"></use></svg></a>
      <a href="${recommendation.secondary[1]}" ${recommendation.secondary[2] === "office" ? "data-office-finder-open" : ""}>${recommendation.secondary[0]}</a>
    </div>
  `;
};

const normalizeOfficeText = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const getOfficeHaystack = (office) =>
  normalizeOfficeText(`${office.city} ${office.label || ""} ${office.direction} ${office.manager} ${office.email} ${office.phone || ""} ${office.address || ""}`);

const getPhoneHref = (phone) => `tel:${phone.replace(/\s/g, "")}`;

const getOfficeTitle = (office) => office.label || office.city;

const getOfficeMapQuery = (office) => office.mapsQuery || `${office.direction}, ${office.address || office.city}, Maroc`;

const getOfficeMapPosition = (office) => {
  return { x: office.x, y: office.y };
};

const positionOfficePins = () => {
  if (!officeMap) return;
  dgiOffices.forEach((office) => {
    const pin = officeMap.querySelector(`[data-office-pin][data-office-id="${office.id}"]`);
    if (!pin) return;
    const position = getOfficeMapPosition(office);
    pin.style.left = `${position.x}%`;
    pin.style.top = `${position.y}%`;
  });
};

const getGoogleMapsEmbedUrl = (office) =>
  `https://www.google.com/maps?q=${encodeURIComponent(getOfficeMapQuery(office))}&${googleMapsLocale}&z=13&output=embed`;

const getGoogleMapsUrl = (office) => {
  const query = getOfficeMapQuery(office);
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}&hl=fr&gl=MA&region=MA`;
};

const getOfficeMarkup = (office) => `
  <strong>${getOfficeTitle(office)}</strong>
  <span>${office.direction}</span>
  <small>${office.address || office.manager}</small>
  <div>
    <a href="mailto:${office.email}">${office.email}</a>
    ${office.phone ? `<a href="${getPhoneHref(office.phone)}">${office.phone}</a>` : ""}
  </div>
`;

const renderOfficeDetail = (office) => {
  if (!officeDetail || !officeActiveLabel) return;
  officeActiveLabel.textContent = getOfficeTitle(office);
  officeDetail.innerHTML = `
    <span>Bureau sélectionné</span>
    <h3>${getOfficeTitle(office)}</h3>
    <p>${office.direction}</p>
    <dl>
      <div><dt>${office.managerRole || "Responsable"}</dt><dd>${office.manager}</dd></div>
      ${office.address ? `<div><dt>Adresse</dt><dd>${office.address}</dd></div>` : ""}
      <div><dt>Email</dt><dd><a href="mailto:${office.email}">${office.email}</a></dd></div>
      ${office.phone ? `<div><dt>Téléphone</dt><dd><a href="${getPhoneHref(office.phone)}">${office.phone}</a></dd></div>` : ""}
    </dl>
    <a class="office-map-link" href="${getGoogleMapsUrl(office)}" target="_blank" rel="noreferrer">
      Ouvrir dans Google Maps
      <svg aria-hidden="true"><use href="#arrow-right"></use></svg>
    </a>
  `;
};

const renderOfficeOverview = () => {
  document.querySelectorAll("[data-office-pin], [data-office-item]").forEach((element) => {
    element.classList.remove("is-active");
  });
  if (officeActiveLabel) officeActiveLabel.textContent = "Maroc";
  officeMapFrame?.removeAttribute("src");
  officeMap?.classList.remove("is-zoomed");
  if (officeTooltip) officeTooltip.hidden = true;
  if (officeDetail) {
    officeDetail.innerHTML = `
      <span>Vue nationale</span>
      <h3>Bureaux de la DGI au Maroc</h3>
      <p>Sélectionnez une ville dans la liste ou cliquez sur un pin pour afficher ses coordonnées et zoomer dans Google Maps.</p>
    `;
  }
};

const previewOffice = (officeId) => {
  const office = dgiOffices.find((item) => item.id === officeId) || dgiOffices[0];
  document.querySelectorAll("[data-office-pin], [data-office-item]").forEach((element) => {
    element.classList.toggle("is-active", element.dataset.officeId === office.id);
  });
  if (officeTooltip) {
    const position = getOfficeMapPosition(office);
    officeTooltip.hidden = false;
    officeTooltip.style.left = `${position.x}%`;
    officeTooltip.style.top = `${position.y}%`;
    officeTooltip.classList.toggle("is-left", position.x > 65);
    officeTooltip.classList.toggle("is-low", position.y < 18);
    officeTooltip.innerHTML = getOfficeMarkup(office);
  }
  renderOfficeDetail(office);
};

const setActiveOffice = (officeId) => {
  const office = dgiOffices.find((item) => item.id === officeId) || dgiOffices[0];
  previewOffice(office.id);
  officeMap?.classList.add("is-zoomed");
  if (officeMapFrame) {
    officeMapFrame.src = getGoogleMapsEmbedUrl(office);
  }
};

const renderOfficePins = () => {
  if (!officeMap) return;
  dgiOffices.forEach((office) => {
    const pin = document.createElement("button");
    pin.type = "button";
    pin.className = "office-pin";
    pin.dataset.officePin = "";
    pin.dataset.officeId = office.id;
    pin.setAttribute("aria-label", `${getOfficeTitle(office)} - ${office.direction}`);
    pin.innerHTML = `<span>${getOfficeTitle(office)}</span>`;
    pin.addEventListener("mouseenter", () => previewOffice(office.id));
    pin.addEventListener("focus", () => previewOffice(office.id));
    pin.addEventListener("click", () => setActiveOffice(office.id));
    officeMap.append(pin);
  });
  positionOfficePins();
};

const renderOfficeList = (items = dgiOffices) => {
  if (!officeList || !officeCount) return;
  officeCount.textContent = String(items.length);
  if (!items.length) {
    officeList.innerHTML = `<p class="office-empty">Aucun bureau trouvé.</p>`;
    return;
  }

  officeList.innerHTML = items
    .map(
      (office) => `
        <button type="button" class="office-list-item" data-office-item data-office-id="${office.id}">
          <strong>${getOfficeTitle(office)}</strong>
          <span>${office.direction}</span>
          <small>${office.address || office.manager}</small>
        </button>
      `,
    )
    .join("");

  officeList.querySelectorAll("[data-office-item]").forEach((item) => {
    item.addEventListener("mouseenter", () => previewOffice(item.dataset.officeId));
    item.addEventListener("focus", () => previewOffice(item.dataset.officeId));
    item.addEventListener("click", () => setActiveOffice(item.dataset.officeId));
  });
};

const filterOffices = () => {
  const query = normalizeOfficeText(officeSearch?.value || "");
  const results = query ? dgiOffices.filter((office) => getOfficeHaystack(office).includes(query)) : dgiOffices;

  document.querySelectorAll("[data-office-pin]").forEach((pin) => {
    pin.hidden = !results.some((office) => office.id === pin.dataset.officeId);
  });
  renderOfficeList(results);
  if (query && results.length) {
    setActiveOffice(results[0].id);
  } else {
    renderOfficeOverview();
  }
};

const openOfficeFinder = (event) => {
  event?.preventDefault();
  if (!officeFinder) return;
  officeFinder.hidden = false;
  document.body.classList.add("office-finder-open");
  if (officeSearch) officeSearch.value = "";
  filterOffices();
  window.setTimeout(() => {
    positionOfficePins();
    renderOfficeOverview();
    officeSearch?.focus();
  }, 60);
};

const closeOfficeFinder = () => {
  if (!officeFinder) return;
  officeFinder.hidden = true;
  document.body.classList.remove("office-finder-open");
};

contactRouter?.addEventListener("submit", (event) => {
  event.preventDefault();
  renderRecommendation();
  contactRecommendation?.scrollIntoView({ behavior: "smooth", block: "center" });
});

contactProfile?.addEventListener("change", renderRecommendation);
contactTopic?.addEventListener("change", renderRecommendation);
officeFinderOpeners.forEach((opener) => opener.addEventListener("click", openOfficeFinder));
officeFinderClosers.forEach((closer) => closer.addEventListener("click", closeOfficeFinder));
officeSearch?.addEventListener("input", filterOffices);
officeReset?.addEventListener("click", () => {
  if (officeSearch) officeSearch.value = "";
  filterOffices();
});
window.addEventListener("resize", () => {
  if (officeFinder?.hidden) return;
  positionOfficePins();
});
document.addEventListener("click", (event) => {
  const opener = event.target.closest("[data-office-finder-open]");
  if (opener) openOfficeFinder(event);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !officeFinder?.hidden) closeOfficeFinder();
});

if (window.location.hash === "#office-finder") {
  window.setTimeout(() => openOfficeFinder(), 120);
}

feedbackForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = feedbackForm.querySelector("button");
  if (!button) return;
  const previousText = button.textContent;
  button.textContent = "Merci";
  window.setTimeout(() => {
    button.textContent = previousText;
    feedbackForm.reset();
  }, 1600);
});

renderRecommendation();
renderOfficePins();
renderOfficeList();
renderOfficeOverview();
