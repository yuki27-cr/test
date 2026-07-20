import { navigation } from "../data/siteContent.js";

export function Header() {
  const links = navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");

  return `
    <header class="site-header" aria-label="主导航">
      <a class="brand" href="#" aria-label="线作首页">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>线作</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        <span class="nav-toggle-line"></span>
        <span class="nav-toggle-line"></span>
      </button>
      <nav id="site-nav" class="site-nav">
        ${links}
      </nav>
      <div class="header-actions">
        <button class="ghost-button" type="button" data-open-command>命令菜单</button>
        <a class="primary-button" href="#pricing">开始使用</a>
      </div>
    </header>
  `;
}
