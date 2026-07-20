import { ChangelogSection } from "./ChangelogSection.js";
import { CommandDialog } from "./CommandDialog.js";
import { CtaSection } from "./CtaSection.js";
import { FeatureSection } from "./FeatureSection.js";
import { Header } from "./Header.js";
import { HeroSection } from "./HeroSection.js";
import { QuoteSection } from "./QuoteSection.js";
import { SignalBand } from "./SignalBand.js";
import { WorkflowSection } from "./WorkflowSection.js";

export function renderApp() {
  return `
    <div class="page-shell">
      ${Header()}
      <main>
        ${HeroSection()}
        ${SignalBand()}
        ${FeatureSection()}
        ${WorkflowSection()}
        ${QuoteSection()}
        ${ChangelogSection()}
        ${CtaSection()}
      </main>
    </div>
    ${CommandDialog()}
  `;
}
