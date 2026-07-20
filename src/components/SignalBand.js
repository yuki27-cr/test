import { customerLogos } from "../data/siteContent.js";

export function SignalBand() {
  return `
    <section class="signal-band" aria-label="产品团队信赖">
      ${customerLogos.map((logo) => `<span>${logo}</span>`).join("")}
    </section>
  `;
}
