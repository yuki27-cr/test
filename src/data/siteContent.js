const publicAssetBase = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const navigation = [
  { label: "功能", href: "#features" },
  { label: "流程", href: "#workflow" },
  { label: "客户", href: "#customers" },
  { label: "更新", href: "#changelog" },
  { label: "价格", href: "#pricing" },
];

export const hero = {
  eyebrow: "为现代产品团队打造的项目系统",
  title: "让产品工作重新聚焦。",
  copy:
    "线作把路线图、需求、缺陷、节奏和发布放进同一个高速工作台，让工程、设计和产品团队始终看见清晰进展。",
  image: `${publicAssetBase}assets/hero-dashboard.png`,
  status: {
    cycle: "第 18 周期",
    progress: "92%",
    state: "进展正常",
  },
};

export const customerLogos = ["星河", "北辰", "字界", "基石", "云岚"];

export const features = [
  {
    index: "01",
    title: "快速记录事项",
    copy: "用键盘优先的创建流程，快速录入、分派并排序团队工作。",
  },
  {
    index: "02",
    title: "周期与范围",
    copy: "用可见的负载、健康度和负责人状态，让每个周期都能紧凑推进。",
  },
  {
    index: "03",
    title: "有信号的路线图",
    copy: "把项目目标连接到真实事项，用执行进展证明路线图是否有效。",
  },
];

export const workflow = {
  metrics: [
    { value: "3.2 倍", label: "分诊更快" },
    { value: "48%", label: "过期事项更少" },
    { value: "12 分钟", label: "平均规划耗时" },
  ],
  issues: [
    {
      key: "线-128",
      title: "优化新手引导清单",
      state: "开发中",
      previewKey: "build",
      preview: {
        label: "当前重点",
        title: "新手引导清单",
        body: "已关联 6 个事项、2 位负责人，发布窗口保持健康。",
      },
    },
    {
      key: "线-129",
      title: "上线洞察筛选器",
      state: "评审中",
      previewKey: "review",
      preview: {
        label: "等待评审",
        title: "洞察筛选器",
        body: "设计验收已完成，埋点已关联，发布说明也已起草。",
      },
    },
    {
      key: "线-130",
      title: "调整周期范围",
      state: "已计划",
      previewKey: "scope",
      preview: {
        label: "规划信号",
        title: "周期范围",
        body: "两个事项顺延到下个周期后，工作负载从高风险回到均衡。",
      },
    },
  ],
};

export const quote = {
  text:
    "最大的变化是，我们的规划系统终于不再和工程师的真实工作方式对着干。每件事都更即时，也更容易负责到底。",
  byline: "北辰工程副总裁",
  stats: [
    { value: "1.4 万", label: "每月关闭事项" },
    { value: "99.95%", label: "工作台可用性" },
  ],
};

export const releases = [
  {
    date: "2026 年 7 月",
    datetime: "2026-07",
    title: "洞察流",
    copy: "实时汇总现在可以连接产品投入、事项健康度和发布推进状态。",
  },
  {
    date: "2026 年 6 月",
    datetime: "2026-06",
    title: "更聪明的周期",
    copy: "周期规划可以在进入评审前识别隐藏过载，提前暴露风险。",
  },
  {
    date: "2026 年 5 月",
    datetime: "2026-05",
    title: "命令扩展",
    copy: "团队可以为内部工具和发布流程添加自定义快捷命令。",
  },
];

export const commandItems = [
  { label: "打开功能", target: "features" },
  { label: "打开流程", target: "workflow" },
  { label: "打开更新", target: "changelog" },
];
