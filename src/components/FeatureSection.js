import { features } from "../data/siteContent.js";

export function FeatureSection() {
  const cards = features
    .map(
      (feature) => `
        <article class="feature-card">
          <span class="feature-index">${feature.index}</span>
          <h3>${feature.title}</h3>
          <p>${feature.copy}</p>
        </article>
      `,
    )
    .join("");

  return `
    <section id="features" class="section-block">
      <div class="section-kicker">A calmer system</div>
      <div class="section-heading-row">
        <h2>Every planning surface, reduced to the work that matters.</h2>
        <p>
          The interface keeps structure visible without turning the product into administration.
          Issues, cycles, docs, and insights share one consistent rhythm.
        </p>
      </div>
      <div class="feature-grid">
        ${cards}
      </div>
    </section>
  `;
}
