const contactRouter = document.querySelector("[data-contact-router]");
const contactProfile = document.querySelector("[data-contact-profile]");
const contactTopic = document.querySelector("[data-contact-topic]");
const contactRecommendation = document.querySelector("[data-contact-recommendation]");
const agencySearch = document.querySelector("[data-agency-search]");
const agencyItems = document.querySelectorAll("[data-agency-city]");
const agencyCount = document.querySelector("[data-agency-count]");
const feedbackForm = document.querySelector("[data-contact-feedback-form]");

const contactRecommendations = {
  dossier: {
    title: "Espace connecté DGI",
    body: "Pour une demande liée à votre dossier fiscal, connectez-vous à votre espace afin de sécuriser l'échange et de suivre votre demande.",
    primary: ["Accéder à mon espace", "espace-connecte.html"],
    secondary: ["Trouver un bureau", "#annuaire"],
  },
  teleservices: {
    title: "Assistance téléservices",
    body: "Pour une connexion bloquée, un paiement rejeté, une déclaration ou une attestation non générée, préparez une capture d'écran et la référence de transaction.",
    primary: ["Voir l'assistance", "#teleservices"],
    secondary: ["Centre d'appel", "#aide"],
  },
  reclamation: {
    title: "Réclamation fiscale",
    body: "Pour contester une situation fiscale ou suivre une réclamation, préparez l'identifiant fiscal, la période concernée et les pièces justificatives.",
    primary: ["Préparer ma réclamation", "#reclamations"],
    secondary: ["Trouver une direction", "#annuaire"],
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
    secondary: ["Voir l'annuaire", "#annuaire"],
  },
  general: {
    title: "FAQ et centre d'appel",
    body: "Pour une question fiscale générale, consultez d'abord la FAQ. Si la réponse n'y figure pas, le centre d'appel peut vous orienter.",
    primary: ["Consulter la FAQ", "faq.html"],
    secondary: ["Centre d'appel", "#aide"],
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
      <a href="${recommendation.secondary[1]}">${recommendation.secondary[0]}</a>
    </div>
  `;
};

const filterAgencies = () => {
  const query = (agencySearch?.value || "").trim().toLowerCase();
  let visibleCount = 0;

  agencyItems.forEach((item) => {
    const haystack = item.textContent.toLowerCase();
    const isVisible = !query || haystack.includes(query) || item.dataset.agencyCity?.includes(query);
    item.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  if (agencyCount) agencyCount.textContent = String(visibleCount);
};

contactRouter?.addEventListener("submit", (event) => {
  event.preventDefault();
  renderRecommendation();
  contactRecommendation?.scrollIntoView({ behavior: "smooth", block: "center" });
});

contactProfile?.addEventListener("change", renderRecommendation);
contactTopic?.addEventListener("change", renderRecommendation);
agencySearch?.addEventListener("input", filterAgencies);

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
filterAgencies();
