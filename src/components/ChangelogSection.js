import { releases } from "../data/siteContent.js";

export function ChangelogSection() {
  const rows = releases
    .map(
      (release) => `
        <article class="release-row">
          <time datetime="${release.datetime}">${release.date}</time>
          <div>
            <h3>${release.title}</h3>
            <p>${release.copy}</p>
          </div>
        </article>
      `,
    )
    .join("");

  return `
    <section id="changelog" class="section-block">
      <div class="section-kicker">Latest updates</div>
      <div class="release-list">
        ${rows}
      </div>
    </section>
  `;
}
