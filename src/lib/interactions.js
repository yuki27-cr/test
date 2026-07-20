import { workflow } from "../data/siteContent.js";

const previewContent = Object.fromEntries(
  workflow.issues.map((issue) => [issue.previewKey, issue.preview]),
);

export function initInteractions() {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const commandDialog = document.querySelector(".command-dialog");
  const commandOpeners = document.querySelectorAll("[data-open-command]");
  const previewButtons = document.querySelectorAll("[data-preview]");
  const previewOutput = document.querySelector("[data-preview-output]");

  navToggle?.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  commandOpeners.forEach((button) => {
    button.addEventListener("click", () => {
      if (typeof commandDialog.showModal === "function") {
        commandDialog.showModal();
        commandDialog.querySelector("input")?.focus();
      }
    });
  });

  commandDialog?.addEventListener("close", () => {
    const target = commandDialog.returnValue;
    if (target && target !== "close") {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  });

  previewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.preview;
      const content = previewContent[key];
      if (!content) return;

      previewButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      previewOutput.innerHTML = `
        <span>${content.label}</span>
        <strong>${content.title}</strong>
        <p>${content.body}</p>
      `;
    });
  });
}
