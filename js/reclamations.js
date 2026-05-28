const reclamationForm = document.querySelector("[data-reclamation-form]");

reclamationForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const success = reclamationForm.querySelector("[data-reclamation-success]");
  const submitButton = reclamationForm.querySelector("button[type='submit']");

  if (success) {
    success.hidden = false;
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (submitButton) {
    const previousText = submitButton.textContent;
    submitButton.textContent = "Synthèse prête";
    window.setTimeout(() => {
      submitButton.textContent = previousText;
    }, 1800);
  }
});
