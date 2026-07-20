import { quote } from "../data/siteContent.js";

export function QuoteSection() {
  const stats = quote.stats
    .map(
      (stat) => `
        <div>
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </div>
      `,
    )
    .join("");

  return `
    <section id="customers" class="quote-section">
      <div class="quote-copy">
        <p>"${quote.text}"</p>
        <span>${quote.byline}</span>
      </div>
      <div class="quote-stats">
        ${stats}
      </div>
    </section>
  `;
}
