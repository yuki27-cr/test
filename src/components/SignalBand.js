import { customerLogos } from "../data/siteContent.js";

export function SignalBand() {
  return `
    <section class="signal-band" aria-label="Trusted by product teams">
      ${customerLogos.map((logo) => `<span>${logo}</span>`).join("")}
    </section>
  `;
}
