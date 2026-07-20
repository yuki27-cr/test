import { navigation } from "../data/siteContent.js";

export function Header() {
  const links = navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");

  return `
    <header class="site-header" aria-label="Primary navigation">
      <a class="brand" href="#" aria-label="Linework home">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>Linework</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        <span class="nav-toggle-line"></span>
        <span class="nav-toggle-line"></span>
      </button>
      <nav id="site-nav" class="site-nav">
        ${links}
      </nav>
      <div class="header-actions">
        <button class="ghost-button" type="button" data-open-command>Command menu</button>
        <a class="primary-button" href="#pricing">Start building</a>
      </div>
    </header>
  `;
}
