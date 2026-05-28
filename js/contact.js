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
const moroccoMapEmbedUrl = "https://www.google.com/maps?hl=fr&ll=28.5,-9.7&z=5&output=embed";

const dgiOffices = [
  { id: "casablanca", city: "Casablanca", direction: "Direction Régionale de Casablanca", manager: "Btissam CHARAFEDDINE", email: "b.charafeddine@tax.gov.ma", phone: "06 73 99 56 18", x: 31, y: 34.5 },
  { id: "mohammedia", city: "Mohammedia", direction: "Direction Provinciale des impôts de Mohammedia", manager: "Maryam MABROUK", email: "m.mabrouk@tax.gov.ma", phone: "06 73 31 73 92", x: 32, y: 32 },
  { id: "el-jadida", city: "El Jadida", direction: "Direction Provinciale des Impôts d'EL Jadida", manager: "Samir BENJALLOUN", email: "s.benjelloune@tax.gov.ma", phone: "06 62 37 11 00", x: 29, y: 38 },
  { id: "settat", city: "Settat", direction: "Direction Provinciale des Impôts de Settat", manager: "EL Mehdi CHAHIR", email: "e.chahir@tax.gov.ma", phone: "06 73 69 59 92", x: 34, y: 38 },
  { id: "rabat", city: "Rabat", direction: "Direction Régionale des Impôts de Rabat", manager: "Fouzia LAMNII", email: "f.lamnii@tax.gov.ma", phone: "06 73 10 61 53", x: 34, y: 27 },
  { id: "kenitra", city: "Kenitra", direction: "Direction Provinciale des Impôts de Kenitra", manager: "Amina LAMSAF", email: "a.lamsaf@tax.gov.ma", phone: "06 73 85 28 44", x: 34.5, y: 24 },
  { id: "tanger", city: "Tanger", direction: "Direction Régionale des Impôts de Tanger", manager: "Samira SEFRIOUI", email: "s.sefrioui@tax.gov.ma", phone: "06 73 70 87 17", x: 36, y: 18 },
  { id: "tetouan", city: "Tétouan", direction: "Direction Provinciale des Impôts de Tétouan", manager: "Ahmed EL HAJ TIRARI", email: "a.elhajtirari@tax.gov.ma", phone: "06 73 26 77 52", x: 39.5, y: 19 },
  { id: "fes", city: "Fès", direction: "Direction Régionale des Impôts de Fès", manager: "Nezha ALAOUI MDAGHRI", email: "ne.alaoui@tax.gov.ma", phone: "06 73 19 33 17", x: 46, y: 28 },
  { id: "meknes", city: "Meknès", direction: "Direction Provinciale des Impôts de Meknès", manager: "Ahmed BOUZAFFOUR", email: "a.bouzafour@tax.gov.ma", phone: "06 73 73 88 11", x: 42, y: 28 },
  { id: "marrakech", city: "Marrakech", direction: "Direction Régionale des Impôts de Marrakech", manager: "Sabah ELMANSOURI", email: "s.elmansouri@tax.gov.ma", phone: "06 60 61 15 06", x: 30, y: 46 },
  { id: "agadir", city: "Agadir", direction: "Direction Régionale des Impôts d'Agadir", manager: "Elyas ACHBANI", email: "e.achbani@tax.gov.ma", phone: "06 62 76 67 47", x: 25, y: 59 },
  { id: "inezgane", city: "Inezgane Ait Melloul", direction: "Direction Provinciale des Impôts d'Inezgane Ait Melloul", manager: "Farid SOUDI", email: "f.soudi@tax.gov.ma", phone: "06 62 16 81 52", x: 26, y: 61 },
  { id: "oujda", city: "Oujda", direction: "Direction Régionale des Impôts d'Oujda", manager: "Naima OUAHHAB", email: "n.ouahhab@tax.gov.ma", phone: "06 73 67 86 47", x: 59, y: 27 },
  { id: "nador", city: "Nador", direction: "Direction Provinciale des impôts de Nador", manager: "Zakaria AL MAKHFI", email: "z.almakhfi@tax.gov.ma", phone: "06 62 19 06 05", x: 51.5, y: 20.5 },
  { id: "beni-mellal", city: "Béni Mellal", direction: "Direction Régionale des Impôts de Béni Mellal", manager: "Younes CHADLI", email: "y.chadli@tax.gov.ma", phone: "06 73 43 52 37", x: 39, y: 44 },
  { id: "errachidia", city: "Errachidia", direction: "Direction Régionale des Impôts d'Errachidia", manager: "Redouane KASSIMI", email: "r.kassimi@tax.gov.ma", phone: "06 25 11 39 24", x: 50, y: 54 },
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
  normalizeOfficeText(`${office.city} ${office.direction} ${office.manager} ${office.email} ${office.phone}`);

const getPhoneHref = (phone) => `tel:${phone.replace(/\s/g, "")}`;

const getGoogleMapsEmbedUrl = (office) =>
  office
    ? `https://www.google.com/maps?q=${encodeURIComponent(`${office.direction}, ${office.city}, Maroc`)}&hl=fr&z=13&output=embed`
    : moroccoMapEmbedUrl;

const getGoogleMapsUrl = (office) => {
  const query = `${office.direction}, ${office.city}, Maroc`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

const getOfficeMarkup = (office) => `
  <strong>${office.city}</strong>
  <span>${office.direction}</span>
  <small>${office.manager}</small>
  <div>
    <a href="mailto:${office.email}">${office.email}</a>
    <a href="${getPhoneHref(office.phone)}">${office.phone}</a>
  </div>
`;

const renderOfficeDetail = (office) => {
  if (!officeDetail || !officeActiveLabel) return;
  officeActiveLabel.textContent = office.city;
  officeDetail.innerHTML = `
    <span>Bureau sélectionné</span>
    <h3>${office.city}</h3>
    <p>${office.direction}</p>
    <dl>
      <div><dt>Responsable</dt><dd>${office.manager}</dd></div>
      <div><dt>Email</dt><dd><a href="mailto:${office.email}">${office.email}</a></dd></div>
      <div><dt>Téléphone</dt><dd><a href="${getPhoneHref(office.phone)}">${office.phone}</a></dd></div>
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
  if (officeMapFrame && officeMapFrame.getAttribute("src") !== moroccoMapEmbedUrl) {
    officeMapFrame.src = moroccoMapEmbedUrl;
  }
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
    officeTooltip.hidden = false;
    officeTooltip.style.left = `${office.x}%`;
    officeTooltip.style.top = `${office.y}%`;
    officeTooltip.classList.toggle("is-left", office.x > 65);
    officeTooltip.classList.toggle("is-low", office.y < 18);
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
    pin.style.left = `${office.x}%`;
    pin.style.top = `${office.y}%`;
    pin.setAttribute("aria-label", `${office.city} - ${office.direction}`);
    pin.innerHTML = `<span>${office.city}</span>`;
    pin.addEventListener("mouseenter", () => previewOffice(office.id));
    pin.addEventListener("focus", () => previewOffice(office.id));
    pin.addEventListener("click", () => setActiveOffice(office.id));
    officeMap.append(pin);
  });
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
          <strong>${office.city}</strong>
          <span>${office.direction}</span>
          <small>${office.manager}</small>
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
  window.setTimeout(() => officeSearch?.focus(), 60);
  filterOffices();
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
document.addEventListener("click", (event) => {
  const opener = event.target.closest("[data-office-finder-open]");
  if (opener) openOfficeFinder(event);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !officeFinder?.hidden) closeOfficeFinder();
});

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
