const emailAddress = "tsurendr@andrew.cmu.edu";
const emailStatus = document.getElementById("email-status");
let emailStatusTimer;

document.querySelectorAll("[data-email-link]").forEach((link) => {
  link.addEventListener("click", () => {
    if (!navigator.clipboard?.writeText) return;

    navigator.clipboard.writeText(emailAddress).then(() => {
      window.clearTimeout(emailStatusTimer);
      emailStatus.textContent = "Email address copied: " + emailAddress;
      emailStatus.classList.add("is-visible");
      emailStatusTimer = window.setTimeout(() => {
        emailStatus.classList.remove("is-visible");
      }, 3200);
    }).catch(() => {});
  });
});
