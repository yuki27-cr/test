import { commandItems } from "../data/siteContent.js";

export function CommandDialog() {
  const commands = commandItems
    .map((item) => `<button value="${item.target}">${item.label}</button>`)
    .join("");

  return `
    <dialog class="command-dialog" aria-labelledby="command-title">
      <form method="dialog">
        <div class="command-header">
          <h2 id="command-title">Command menu</h2>
          <button class="close-button" value="close" aria-label="Close command menu">x</button>
        </div>
        <label class="command-search">
          <span>Search</span>
          <input type="search" placeholder="Type a command or jump to a page..." autofocus />
        </label>
        <div class="command-list">
          ${commands}
        </div>
      </form>
    </dialog>
  `;
}
