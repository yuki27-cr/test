const publicAssetBase = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const navigation = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Customers", href: "#customers" },
  { label: "Changelog", href: "#changelog" },
  { label: "Pricing", href: "#pricing" },
];

export const hero = {
  eyebrow: "Project systems for modern product teams",
  title: "Bring product work into focus.",
  copy:
    "Linework gives engineering, design, and product teams one fast place to plan roadmaps, manage issues, and ship with a clear pulse.",
  image: `${publicAssetBase}assets/hero-dashboard.png`,
  status: {
    cycle: "Cycle 18",
    progress: "92%",
    state: "on track",
  },
};

export const customerLogos = ["Arcadia", "Northstar", "Glyph", "Keystone", "Meridian"];

export const features = [
  {
    index: "01",
    title: "Fast issue capture",
    copy: "Create, route, and prioritize work from a keyboard-first issue flow.",
  },
  {
    index: "02",
    title: "Cycles and scope",
    copy: "Plan tightly with visible workload, health, and unblocked ownership.",
  },
  {
    index: "03",
    title: "Roadmaps with signal",
    copy: "Connect initiatives to the actual work that proves progress.",
  },
];

export const workflow = {
  metrics: [
    { value: "3.2x", label: "faster triage" },
    { value: "48%", label: "less stale work" },
    { value: "12m", label: "avg. planning pass" },
  ],
  issues: [
    {
      key: "LW-128",
      title: "Refine onboarding checklist",
      state: "Building",
      previewKey: "build",
      preview: {
        label: "Current focus",
        title: "Onboarding checklist",
        body: "Six linked issues, two owners, and a healthy release window.",
      },
    },
    {
      key: "LW-129",
      title: "Ship insight filters",
      state: "Review",
      previewKey: "review",
      preview: {
        label: "Ready for review",
        title: "Insight filters",
        body: "Design QA is complete, analytics are attached, and release notes are drafted.",
      },
    },
    {
      key: "LW-130",
      title: "Rework cycle scope",
      state: "Planned",
      previewKey: "scope",
      preview: {
        label: "Planning signal",
        title: "Cycle scope",
        body: "Workload moved from high risk to balanced after two issues shifted to next cycle.",
      },
    },
  ],
};

export const quote = {
  text:
    "The biggest change is that our planning system stopped fighting the way engineers actually work. Everything feels immediate and accountable.",
  byline: "VP Engineering, Northstar",
  stats: [
    { value: "14k", label: "issues closed monthly" },
    { value: "99.95%", label: "workspace availability" },
  ],
};

export const releases = [
  {
    date: "Jul 2026",
    datetime: "2026-07",
    title: "Insight streams",
    copy: "Live rollups now connect product bets, issue health, and release movement.",
  },
  {
    date: "Jun 2026",
    datetime: "2026-06",
    title: "Smarter cycles",
    copy: "Cycle planning now detects hidden overload before work reaches review.",
  },
  {
    date: "May 2026",
    datetime: "2026-05",
    title: "Command extensions",
    copy: "Teams can add custom shortcuts for internal tools and release workflows.",
  },
];

export const commandItems = [
  { label: "Open features", target: "features" },
  { label: "Open workflow", target: "workflow" },
  { label: "Open changelog", target: "changelog" },
];
