import { renderApp } from "./components/App.js";
import { initInteractions } from "./lib/interactions.js";

const app = document.querySelector("#app");

app.innerHTML = renderApp();
initInteractions();
