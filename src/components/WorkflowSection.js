import { workflow } from "../data/siteContent.js";

export function WorkflowSection() {
  const metrics = workflow.metrics
    .map(
      (metric) => `
        <div>
          <strong>${metric.value}</strong>
          <span>${metric.label}</span>
        </div>
      `,
    )
    .join("");

  const issues = workflow.issues
    .map(
      (issue, index) => `
        <button class="issue-row ${index === 0 ? "is-active" : ""}" type="button" data-preview="${issue.previewKey}">
          <span class="issue-key">${issue.key}</span>
          <span class="issue-title">${issue.title}</span>
          <span class="issue-state">${issue.state}</span>
        </button>
      `,
    )
    .join("");

  const initialPreview = workflow.issues[0].preview;

  return `
    <section id="workflow" class="workflow-section">
      <div class="workflow-copy">
        <div class="section-kicker">Workflow</div>
        <h2>Designed around momentum, not status theater.</h2>
        <p>
          Move from idea to issue to release note without losing context. Each view is dense,
          direct, and tuned for teams that repeat the same motions every day.
        </p>
        <div class="metrics-row">
          ${metrics}
        </div>
      </div>
      <div class="workflow-panel" aria-label="Workflow preview">
        <div class="panel-topbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="issue-list">
          ${issues}
        </div>
        <div class="preview-card" data-preview-output>
          <span>${initialPreview.label}</span>
          <strong>${initialPreview.title}</strong>
          <p>${initialPreview.body}</p>
        </div>
      </div>
    </section>
  `;
}
