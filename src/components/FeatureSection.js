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
      <div class="section-kicker">更安静的系统</div>
      <div class="section-heading-row">
        <h2>每个规划界面，都只保留真正重要的工作。</h2>
        <p>
          界面让结构保持可见，却不会把产品变成填表系统。事项、周期、文档和洞察共享同一套节奏。
        </p>
      </div>
      <div class="feature-grid">
        ${cards}
      </div>
    </section>
  `;
}
