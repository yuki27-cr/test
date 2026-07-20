import { commandItems } from "../data/siteContent.js";

export function CommandDialog() {
  const commands = commandItems
    .map((item) => `<button value="${item.target}">${item.label}</button>`)
    .join("");

  return `
    <dialog class="command-dialog" aria-labelledby="command-title">
      <form method="dialog">
        <div class="command-header">
          <h2 id="command-title">命令菜单</h2>
          <button class="close-button" value="close" aria-label="关闭命令菜单">×</button>
        </div>
        <label class="command-search">
          <span>搜索</span>
          <input type="search" placeholder="输入命令，或跳转到某个页面..." autofocus />
        </label>
        <div class="command-list">
          ${commands}
        </div>
      </form>
    </dialog>
  `;
}
