const surveyModal = document.querySelector("[data-survey-modal]");
const surveyCloseButtons = document.querySelectorAll("[data-survey-close]");
const surveyOpenButtons = document.querySelectorAll("[data-survey-open]");
const surveyTitle = document.querySelector("[data-survey-title]");
const surveyKicker = document.querySelector("[data-survey-kicker]");
const surveyDescription = document.querySelector("[data-survey-description]");
const surveyFormRoot = document.querySelector("[data-survey-form-root]");

const surveyData = {
  "call-center": {
    title: "Votre avis sur le Centre d'Information Téléphonique",
    kicker: "Qualité de service",
    description: "Votre avis est important pour améliorer la qualité du centre d'information téléphonique.",
    action: "https://docs.google.com/forms/d/e/1FAIpQLSdplCnTPKjxEn8FS7110vP0rA1lWZMfXKTIp2OqP2jk9zeczQ/formResponse",
    originalUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdplCnTPKjxEn8FS7110vP0rA1lWZMfXKTIp2OqP2jk9zeczQ/viewform",
    questions: [
      {
        label: "Êtes-vous :",
        type: "single",
        entry: "1552532834",
        required: true,
        options: ["Femme", "Homme"],
      },
      {
        label: "Est-ce que vous arrivez à joindre facilement notre Centre d'Information Téléphonique ?",
        type: "single",
        entry: "1161798455",
        required: true,
        options: ["Sans difficulté", "Après plusieurs tentatives", "J'ai souvent du mal à joindre le centre", "Je n'ai jamais pu joindre le centre"],
      },
      {
        label: "Comment considérez-vous le délai d'attente avant la réponse téléphonique ?",
        type: "single",
        entry: "600010944",
        required: true,
        options: ["Très satisfaisant", "Satisfaisant", "Peu satisfaisant", "Insatisfaisant"],
      },
      {
        label: "Comment jugez-vous le délai de traitement de votre requête ?",
        type: "single",
        entry: "1583872847",
        required: true,
        options: ["Très rapide", "Assez rapide", "Lent", "Très lent"],
      },
      {
        label: "Les réponses obtenues ont-elles répondu à votre besoin ?",
        type: "single",
        entry: "1419425436",
        required: true,
        options: ["Pleinement", "Partiellement", "Peu", "Pas du tout"],
      },
      {
        label: "Que pensez-vous de l'assistant ?",
        type: "multiple",
        entry: "1228711801",
        required: true,
        options: ["Aimable et courtois", "Capable de résoudre le problème", "Capable de fournir des informations précises et à jour", "Maîtrise le sujet"],
        other: true,
      },
      {
        label: "Avez-vous dû être transféré à un autre service ?",
        type: "single",
        entry: "1150743987",
        required: true,
        options: ["Oui", "Non"],
      },
      {
        label: "Si oui, de quelle manière ?",
        type: "single",
        entry: "1486506568",
        required: false,
        options: ["Plutôt fluide", "Non fluide"],
      },
      {
        label: "Si votre réponse est \"non fluide\", merci de nous faire part de votre proposition d'amélioration.",
        type: "textarea",
        entry: "2104635874",
        required: false,
      },
    ],
  },
  "tax-info": {
    title: "Sondage sur les moyens par lesquels vous vous informez sur la fiscalité",
    kicker: "Information fiscale",
    description: "Indiquez les canaux que vous utilisez et ceux que vous souhaitez privilégier pour recevoir l'information fiscale.",
    action: "https://docs.google.com/forms/d/e/1FAIpQLSf8tOf1Pb51thRdNQBahHEyn8L4FMtBhKk3z4w50HX2Mj9b5w/formResponse",
    originalUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf8tOf1Pb51thRdNQBahHEyn8L4FMtBhKk3z4w50HX2Mj9b5w/viewform",
    questions: [
      {
        label: "Quels sont les moyens par lesquels vous vous informez sur la fiscalité ?",
        type: "multiple",
        entry: "1757906361",
        required: true,
        options: [
          "Réseaux sociaux",
          "Presse",
          "Bouche à oreille",
          "Portail DGI",
          "Mon compte fiscal",
          "Services régionaux des impôts",
          "Centre d'assistance par téléphone",
          "Centre d'assistance par email",
          "Email",
          "Radio",
          "Télévision",
          "Autres canaux",
        ],
      },
      {
        label: "Au cas où vous avez répondu \"autres canaux\", quels sont ces canaux ?",
        type: "text",
        entry: "1287796085",
        required: false,
      },
      {
        label: "Par quel moyen ou canal souhaitez-vous être informés ?",
        type: "multiple",
        entry: "916482145",
        required: true,
        options: [
          "Réseaux sociaux",
          "Presse",
          "Bouche à oreille",
          "Portail DGI",
          "Mon compte fiscal",
          "Services régionaux des impôts",
          "Centre d'assistance par téléphone",
          "Centre d'assistance par email",
          "SMS",
          "Email",
          "Radio",
          "Télévision",
          "Autres canaux",
        ],
      },
      {
        label: "Au cas où vous avez répondu \"autres canaux\", quels sont ces canaux ?",
        type: "text",
        entry: "633640023",
        required: false,
      },
    ],
  },
};

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const getInputName = (entry) => `entry.${entry}`;

const renderChoiceQuestion = (question, index) => {
  const inputType = question.type === "single" ? "radio" : "checkbox";
  const inputName = getInputName(question.entry);
  const options = question.options
    .map(
      (option, optionIndex) => `
        <label class="survey-option">
          <input
            type="${inputType}"
            name="${inputName}"
            value="${escapeHtml(option)}"
            ${question.type === "single" && question.required ? "required" : ""}
          />
          <span>${escapeHtml(option)}</span>
        </label>
      `,
    )
    .join("");
  const otherOption = question.other
    ? `
        <label class="survey-option survey-option-other">
          <input type="${inputType}" name="${inputName}" value="__other_option__" />
          <span>Autre</span>
        </label>
        <input class="survey-other-input" type="text" name="${inputName}.other_option_response" placeholder="Précisez votre réponse" />
      `
    : "";

  return `
    <fieldset class="survey-question" ${question.required ? `data-required-group="${inputName}"` : ""}>
      <legend><span>${String(index + 1).padStart(2, "0")}</span>${escapeHtml(question.label)}${question.required ? "<em>Obligatoire</em>" : ""}</legend>
      <div class="survey-options">${options}${otherOption}</div>
    </fieldset>
  `;
};

const renderTextQuestion = (question, index) => {
  const inputName = getInputName(question.entry);
  const field =
    question.type === "textarea"
      ? `<textarea name="${inputName}" rows="4" ${question.required ? "required" : ""}></textarea>`
      : `<input type="text" name="${inputName}" ${question.required ? "required" : ""} />`;

  return `
    <label class="survey-question survey-text-question">
      <span><strong>${String(index + 1).padStart(2, "0")}</strong>${escapeHtml(question.label)}${question.required ? "<em>Obligatoire</em>" : ""}</span>
      ${field}
    </label>
  `;
};

const renderSurveyForm = (surveyKey) => {
  const survey = surveyData[surveyKey];
  if (!survey || !surveyFormRoot) return;

  surveyKicker.textContent = survey.kicker;
  surveyTitle.textContent = survey.title;
  surveyDescription.textContent = survey.description;
  surveyFormRoot.innerHTML = `
    <form class="survey-form" action="${survey.action}" method="post" target="survey-submit-frame" data-survey-form novalidate>
      ${survey.questions
        .map((question, index) =>
          question.type === "text" || question.type === "textarea" ? renderTextQuestion(question, index) : renderChoiceQuestion(question, index),
        )
        .join("")}
      <p class="survey-error" data-survey-error hidden>Merci de répondre aux questions obligatoires.</p>
      <div class="survey-form-actions">
        <a href="${survey.originalUrl}" target="_blank" rel="noreferrer">Ouvrir le formulaire officiel</a>
        <button type="submit">Envoyer mes réponses</button>
      </div>
      <p class="survey-success" data-survey-success hidden>Merci, vos réponses ont été envoyées.</p>
    </form>
  `;

  const form = surveyFormRoot.querySelector("[data-survey-form]");
  form?.addEventListener("submit", handleSurveySubmit);
};

const validateRequiredGroups = (form) => {
  const groups = form.querySelectorAll("[data-required-group]");
  for (const group of groups) {
    const name = group.dataset.requiredGroup;
    if (!form.querySelector(`input[name="${name}"]:checked`)) {
      return group;
    }
  }
  return null;
};

const handleSurveySubmit = (event) => {
  const form = event.currentTarget;
  const error = form.querySelector("[data-survey-error]");
  const success = form.querySelector("[data-survey-success]");
  const missingGroup = validateRequiredGroups(form);

  if (missingGroup || !form.checkValidity()) {
    event.preventDefault();
    if (error) error.hidden = false;
    if (success) success.hidden = true;
    (missingGroup || form.querySelector(":invalid"))?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  if (error) error.hidden = true;
  if (success) success.hidden = false;
  const submitButton = form.querySelector("button[type='submit']");
  if (submitButton) {
    submitButton.textContent = "Envoi en cours...";
    window.setTimeout(() => {
      submitButton.textContent = "Réponses envoyées";
    }, 650);
  }
};

const openSurveyModal = (surveyKey) => {
  renderSurveyForm(surveyKey);
  if (!surveyModal) return;
  surveyModal.hidden = false;
  document.body.classList.add("survey-modal-open");
  window.setTimeout(() => {
    surveyModal.querySelector("input, textarea, button, a")?.focus();
  }, 60);
};

const closeSurveyModal = () => {
  if (!surveyModal) return;
  surveyModal.hidden = true;
  document.body.classList.remove("survey-modal-open");
};

surveyOpenButtons.forEach((button) => {
  button.addEventListener("click", () => openSurveyModal(button.dataset.surveyOpen));
});

surveyCloseButtons.forEach((button) => button.addEventListener("click", closeSurveyModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !surveyModal?.hidden) closeSurveyModal();
});
