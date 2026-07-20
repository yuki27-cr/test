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
        <div class="section-kicker">工作流程</div>
        <h2>围绕推进速度设计，而不是围绕状态表演。</h2>
        <p>
          从想法到事项，再到发布说明，整个过程不丢上下文。每个视图都紧凑、直接，适合每天重复推进工作的团队。
        </p>
        <div class="metrics-row">
          ${metrics}
        </div>
      </div>
      <div class="workflow-panel" aria-label="工作流程预览">
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
