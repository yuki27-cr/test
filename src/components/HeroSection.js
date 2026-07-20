import { hero } from "../data/siteContent.js";

export function HeroSection() {
  return `
    <section class="hero" aria-labelledby="hero-title">
      <img class="hero-art" src="${hero.image}" alt="" />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="eyebrow">${hero.eyebrow}</p>
        <h1 id="hero-title">${hero.title}</h1>
        <p class="hero-copy">${hero.copy}</p>
        <div class="hero-actions">
          <a class="primary-button large" href="#workflow">Explore workflow</a>
          <a class="secondary-button large" href="#features">View features</a>
        </div>
      </div>
      <div class="hero-status" aria-label="Product status summary">
        <span>${hero.status.cycle}</span>
        <strong>${hero.status.progress}</strong>
        <span>${hero.status.state}</span>
      </div>
    </section>
  `;
}
