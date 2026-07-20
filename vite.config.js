import { defineConfig } from "vite";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgSite = repositoryName.endsWith(".github.io");
const pagesBase =
  process.env.GITHUB_PAGES === "true" && repositoryName && !isUserOrOrgSite
    ? `/${repositoryName}/`
    : "/";

export default defineConfig({
  base: pagesBase,
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
  },
});
