import {
  IconApi,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandOpenai,
  IconBrandTelegram,
  IconBrandX,
  IconClock,
  IconDeviceLaptop,
  IconDog,
  IconGitPullRequest,
  IconInfinity,
  IconLayoutKanban,
  IconMail,
  IconMasksTheater,
  IconPaw,
  IconPuzzle,
  IconRefresh,
  IconSchool,
  IconSearch,
  IconSparkles,
  IconTestPipe,
  type Icon,
} from "@tabler/icons-react";
import {
  siAndroid,
  siAngular,
  siAnthropic,
  siApollographql,
  siApple,
  siAstro,
  siBabel,
  siBun,
  siCircleci,
  siClaude,
  siCloudflare,
  siConfluence,
  siConventionalcommits,
  siCss,
  siCursor,
  siCypress,
  siDiscord,
  siDocker,
  siDocusaurus,
  siEditorconfig,
  siEslint,
  siExpo,
  siExpress,
  siFastify,
  siFigma,
  siFirebase,
  siFormik,
  siFramer,
  siGatsby,
  siGit,
  siGithub,
  siGithubactions,
  siGooglegemini,
  siGraphql,
  siHtml5,
  siI18next,
  siJavascript,
  siJest,
  siJira,
  siLangchain,
  siLerna,
  siLinear,
  siLinux,
  siLodash,
  siMeta,
  siMongodb,
  siMongoose,
  siMui,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNginx,
  siNgrx,
  siNodedotjs,
  siNotion,
  siPnpm,
  siPostgresql,
  siPostman,
  siPrettier,
  siPrisma,
  siPuppeteer,
  siRabbitmq,
  siReact,
  siReactbootstrap,
  siReactivex,
  siReactquery,
  siRedis,
  siRedux,
  siSass,
  siScrumalliance,
  siSentry,
  siSequelize,
  siShadcnui,
  siSocketdotio,
  siSqlite,
  siStorybook,
  siStripe,
  siStyledcomponents,
  siSupabase,
  siSwagger,
  siTailwindcss,
  siTestinglibrary,
  siTradingview,
  siTrello,
  siTrpc,
  siTurborepo,
  siTypeorm,
  siTypescript,
  siVercel,
  siVite,
  siVitest,
  siVuedotjs,
  siVuetify,
  siWebpack,
  siYarn,
  siZod,
  type SimpleIcon,
} from "simple-icons";

// Flip to true to show the "open to work" note and experience entry.
export const OPEN_TO_WORK = false;

export const SITE_URL = "https://vitaliyirtlach.vercel.app";

export const profile = {
  name: "Vitaliy Irtlach",
  title: "Fullstack JavaScript Engineer",
  photo: "/photo.jpeg",
  telegram: "https://t.me/vitaliyirtlach",
  email: "vitaliyirtlach@gmail.com",
  whatsapp: "https://wa.me/380993123809",
  location: "Athens, Greece",
};

export type Social = { label: string; href: string; icon: Icon };

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/vitaliyirtlach", icon: IconBrandGithub },
  { label: "X", href: "https://twitter.com/vitaliyirtlach", icon: IconBrandX },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vitaliyirtlach/", icon: IconBrandLinkedin },
  { label: "Telegram", href: "https://t.me/vitaliyirtlach", icon: IconBrandTelegram },
  { label: "Instagram", href: "https://www.instagram.com/vitaliyirtlach/", icon: IconBrandInstagram },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  /** [year, month], month is 1-based */
  start: [number, number];
  /** omit while the role is ongoing */
  end?: [number, number];
  icon?: Icon;
  logo?: string;
  current?: boolean;
  href?: string;
  bullets: string[];
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function monthLabel([year, month]: [number, number]): string {
  return `${MONTHS[month - 1]} ${String(year).slice(2)}`;
}

export function formatPeriod(e: ExperienceEntry): string {
  return `${monthLabel(e.start)} - ${e.end ? monthLabel(e.end) : "Present"}`;
}

export function formatDuration(e: ExperienceEntry): string {
  const now = new Date();
  const [endY, endM] = e.end ?? [now.getFullYear(), now.getMonth() + 1];
  // LinkedIn-style inclusive month count
  const months = (endY - e.start[0]) * 12 + (endM - e.start[1]) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest > 0) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
}

const openToWorkEntry: ExperienceEntry = {
  company: "Open to work",
  role: "",
  start: [new Date().getFullYear(), new Date().getMonth() + 1],
  icon: IconSearch,
  current: true,
  bullets: [],
};

const jobs: ExperienceEntry[] = [
  {
    company: "Ito AI",
    role: "JavaScript Developer",
    start: [2025, 12],
    logo: "/logos/ito.png",
    href: "https://www.ito.ai/",
    bullets: [
      "Building Ito — AI code review that builds and runs your app on every PR to catch real bugs.",
      "Develop the web platform and dashboard with Next.js, TypeScript and Tailwind CSS.",
      "Ship PR-review flows that post video recordings, logs and repro steps straight to GitHub.",
    ],
  },
  {
    company: "Statable",
    role: "JavaScript Developer",
    start: [2025, 8],
    logo: "/logos/statable.png",
    href: "https://statable.com",
    bullets: [
      "Develop a web analytics platform: dashboards, site settings and an embeddable widget.",
      "Build features end-to-end across the stack with Next.js and TypeScript.",
    ],
  },
  {
    company: "Jobbit",
    role: "Frontend Engineer",
    start: [2024, 1],
    end: [2025, 12],
    logo: "/logos/jobbit.jpg",
    href: "https://jobbit.uk",
    bullets: [
      "Frontend for Jobbit — a platform that routes real-world tasks between AI agents and vetted human specialists.",
      "Develop cross-platform mobile apps with React Native.",
      "Ship frontend features and UI improvements as part of a distributed team.",
    ],
  },
  {
    company: "Freelance",
    role: "JavaScript Developer",
    start: [2021, 9],
    icon: IconDeviceLaptop,
    bullets: [
      "Delivered projects for startups and commercial platforms: an investor service, a metalworking marketplace and an algotrading platform.",
      "Handled the full cycle: scoping with customers, development, technical management and mentoring.",
      "Interviewed job candidates and managed technical aspects of client projects.",
    ],
  },
];

export const experience: ExperienceEntry[] = OPEN_TO_WORK
  ? [openToWorkEntry, ...jobs]
  : jobs;

export type Skill = {
  name: string;
  href: string;
  description: string;
  icon?: SimpleIcon;
  ticon?: Icon;
  extra?: boolean;
};
export type SkillCategory = { category: string; items: Skill[] };

const s = (
  name: string,
  href: string,
  description: string,
  icon: SimpleIcon,
  extra?: boolean
): Skill => ({ name, href, description, icon, extra });

const t = (
  name: string,
  href: string,
  description: string,
  ticon: Icon,
  extra?: boolean
): Skill => ({ name, href, description, ticon, extra });

export const skills: SkillCategory[] = [
  {
    category: "Language",
    items: [
      s("TypeScript", "https://www.typescriptlang.org", "Default language for every web and mobile project I ship.", siTypescript),
      s("JavaScript", "https://developer.mozilla.org/docs/Web/JavaScript", "5 years of production JavaScript across frontend and backend.", siJavascript),
      s("HTML", "https://developer.mozilla.org/docs/Web/HTML", "Semantic, accessible markup.", siHtml5),
      s("CSS", "https://developer.mozilla.org/docs/Web/CSS", "Layouts, animations and responsive design.", siCss),
    ],
  },
  {
    category: "Frontend",
    items: [
      s("React", "https://react.dev", "Primary UI library — dashboards and product UIs at Ito and Statable.", siReact),
      s("Next.js", "https://nextjs.org", "Ito platform, Statable dashboards and this very site.", siNextdotjs),
      s("Tailwind CSS", "https://tailwindcss.com", "My default styling layer — used on Ito, Statable and this site.", siTailwindcss),
      s("Redux", "https://redux.js.org", "State management in larger React and React Native apps.", siRedux),
      s("TanStack Query", "https://tanstack.com/query", "Server state and caching in data-heavy dashboards.", siReactquery, true),
      t("Zustand", "https://zustand-demo.pmnd.rs", "Lightweight React state for smaller apps.", IconPaw, true),
      s("Flux", "https://facebookarchive.github.io/flux/", "Unidirectional data flow in earlier React apps.", siMeta, true),
      s("Formik", "https://formik.org", "Complex forms with validation.", siFormik, true),
      s("Angular", "https://angular.dev", "SPAs with RxJS and NgRx in commercial projects.", siAngular, true),
      s("RxJS", "https://rxjs.dev", "Reactive streams in Angular apps.", siReactivex, true),
      s("NgRx", "https://ngrx.io", "State management in Angular projects.", siNgrx, true),
      s("Vue.js", "https://vuejs.org", "SPAs and admin panels in client projects.", siVuedotjs, true),
      s("Vuex", "https://vuex.vuejs.org", "State management in Vue apps.", siVuedotjs, true),
      s("Vuetify", "https://vuetifyjs.com", "Material component kit for Vue projects.", siVuetify, true),
      s("Astro", "https://astro.build", "Content-heavy static sites.", siAstro, true),
      s("Gatsby", "https://www.gatsbyjs.com", "Static marketing sites and blogs.", siGatsby, true),
      s("Docusaurus", "https://docusaurus.io", "Documentation sites.", siDocusaurus, true),
      s("Material UI", "https://mui.com", "Component library for dashboards and admin UIs.", siMui, true),
      s("React Bootstrap", "https://react-bootstrap.github.io", "Bootstrap components in React projects.", siReactbootstrap, true),
      s("shadcn/ui", "https://ui.shadcn.com", "Component system for dashboards and admin UIs.", siShadcnui, true),
      t("Aceternity UI", "https://ui.aceternity.com", "Animated components for landing pages.", IconSparkles, true),
      s("Motion", "https://motion.dev", "Animations on this site and in product UIs.", siFramer, true),
      s("styled-components", "https://styled-components.com", "CSS-in-JS in earlier React codebases.", siStyledcomponents, true),
      s("Sass", "https://sass-lang.com", "Styling in pre-Tailwind projects.", siSass, true),
      s("Storybook", "https://storybook.js.org", "Isolated UI component development.", siStorybook, true),
      s("react-i18next", "https://react.i18next.com", "Localization of React apps.", siI18next, true),
      s("Lodash", "https://lodash.com", "Utility toolkit in older codebases.", siLodash, true),
      t("Moment.js", "https://momentjs.com", "Dates and timezones in legacy projects.", IconClock, true),
    ],
  },
  {
    category: "Mobile",
    items: [
      s("React Native", "https://reactnative.dev", "Cross-platform mobile apps at Jobbit.", siReact),
      s("Expo", "https://expo.dev", "Build and release tooling for React Native apps.", siExpo),
      s("iOS", "https://developer.apple.com", "App Store builds and releases of React Native apps.", siApple, true),
      s("Android", "https://developer.android.com", "Play Store builds and releases of React Native apps.", siAndroid, true),
    ],
  },
  {
    category: "Backend",
    items: [
      s("Node.js", "https://nodejs.org", "Backend runtime for the APIs and services I build.", siNodedotjs),
      s("NestJS", "https://nestjs.com", "Structured backend APIs for commercial projects.", siNestjs),
      s("Express", "https://expressjs.com", "Lightweight APIs and internal services.", siExpress),
      s("GraphQL", "https://graphql.org", "Typed APIs between dashboards and backend services.", siGraphql),
      s("Apollo GraphQL", "https://www.apollographql.com", "GraphQL servers and clients.", siApollographql, true),
      s("TypeGraphQL", "https://typegraphql.com", "Code-first GraphQL schemas in TypeScript.", siGraphql, true),
      s("GraphQL Codegen", "https://the-guild.dev/graphql/codegen", "Typed clients generated from schemas.", siGraphql, true),
      s("Fastify", "https://fastify.dev", "High-throughput Node.js services.", siFastify, true),
      s("Bun", "https://bun.sh", "Fast runtime for tooling and scripts.", siBun, true),
      s("tRPC", "https://trpc.io", "End-to-end typed APIs inside Next.js apps.", siTrpc, true),
      s("Socket.IO", "https://socket.io", "Real-time features: live updates, notifications, chat.", siSocketdotio, true),
      s("Zod", "https://zod.dev", "Runtime validation shared across the stack.", siZod, true),
      s("Swagger", "https://swagger.io", "OpenAPI documentation for REST services.", siSwagger, true),
      s("RabbitMQ", "https://www.rabbitmq.com", "Message queues between services.", siRabbitmq, true),
      s("Stripe", "https://stripe.com", "Payments and subscription billing integrations.", siStripe, true),
      s("discord.js", "https://discord.js.org", "Discord bots and automations.", siDiscord, true),
    ],
  },
  {
    category: "Database",
    items: [
      s("PostgreSQL", "https://www.postgresql.org", "Main relational database in production projects.", siPostgresql),
      s("MongoDB", "https://www.mongodb.com", "Document storage in freelance and startup projects.", siMongodb),
      s("Redis", "https://redis.io", "Caching, queues and session storage.", siRedis),
      s("Prisma", "https://www.prisma.io", "ORM of choice on top of PostgreSQL.", siPrisma),
      s("Mongoose", "https://mongoosejs.com", "MongoDB models and schemas.", siMongoose, true),
      s("Sequelize", "https://sequelize.org", "ORM in Express-based backends.", siSequelize, true),
      s("TypeORM", "https://typeorm.io", "ORM in NestJS-based backends.", siTypeorm, true),
      s("MySQL", "https://www.mysql.com", "Relational database in client projects.", siMysql, true),
      s("SQLite", "https://www.sqlite.org", "Embedded storage for tools and prototypes.", siSqlite, true),
      s("Supabase", "https://supabase.com", "Auth, storage and realtime backend for smaller products.", siSupabase, true),
      s("Firebase", "https://firebase.google.com", "Auth, push notifications and realtime data in mobile apps.", siFirebase, true),
    ],
  },
  {
    category: "AI",
    items: [
      s("Claude Code", "https://claude.com/claude-code", "Agentic coding in the terminal — daily driver.", siClaude),
      s("Cursor", "https://cursor.com", "AI-assisted development in the daily workflow.", siCursor),
      t("ChatGPT", "https://chatgpt.com", "Research, debugging and drafts.", IconBrandOpenai),
      s("Gemini", "https://gemini.google.com", "Multimodal tasks and long-context work.", siGooglegemini),
      s("Claude API", "https://www.anthropic.com", "LLM integrations and AI features — daily work at Ito.", siAnthropic, true),
      s("LangChain", "https://www.langchain.com", "Agent and RAG pipelines.", siLangchain, true),
    ],
  },
  {
    category: "Testing",
    items: [
      s("Jest", "https://jestjs.io", "Unit tests for Node.js and React code.", siJest),
      s("Vitest", "https://vitest.dev", "Fast unit tests in Vite-based projects.", siVitest),
      s("Cypress", "https://www.cypress.io", "End-to-end coverage of critical user flows.", siCypress),
      t("Playwright", "https://playwright.dev", "Cross-browser E2E automation.", IconMasksTheater, true),
      s("Puppeteer", "https://pptr.dev", "Headless Chrome automation and scraping.", siPuppeteer, true),
      s("Testing Library", "https://testing-library.com", "Component tests that mirror real usage.", siTestinglibrary, true),
    ],
  },
  {
    category: "Build & Tooling",
    items: [
      s("Vite", "https://vite.dev", "Fast build tooling for SPAs and internal tools.", siVite),
      s("Webpack", "https://webpack.js.org", "Custom build configs in legacy projects.", siWebpack),
      s("Babel", "https://babeljs.io", "Transpilation in older build pipelines.", siBabel),
      s("pnpm", "https://pnpm.io", "Fast installs and monorepo workspaces.", siPnpm),
      s("yarn", "https://yarnpkg.com", "Package management in earlier projects.", siYarn, true),
      s("Lerna", "https://lerna.js.org", "Monorepo versioning and publishing.", siLerna, true),
      s("Turborepo", "https://turborepo.com", "Monorepo builds and caching.", siTurborepo, true),
      s("ESLint", "https://eslint.org", "Consistent code quality across teams.", siEslint, true),
      s("Prettier", "https://prettier.io", "Uniform formatting everywhere.", siPrettier, true),
      t("Husky", "https://typicode.github.io/husky/", "Git hooks: lint and tests before every commit.", IconDog, true),
      s("EditorConfig", "https://editorconfig.org", "Consistent editor settings across teams.", siEditorconfig, true),
      s("Conventional Commits", "https://www.conventionalcommits.org", "Commit convention for clean history and changelogs.", siConventionalcommits, true),
    ],
  },
  {
    category: "Infrastructure",
    items: [
      s("Docker", "https://www.docker.com", "Containerized development and deployments.", siDocker),
      s("Vercel", "https://vercel.com", "Hosting for my Next.js projects, including this site.", siVercel),
      s("Git", "https://git-scm.com", "Daily workflow: branches, reviews, clean history.", siGit),
      s("GitHub", "https://github.com", "Home of my code, pull requests and CI.", siGithub),
      s("GitHub Actions", "https://github.com/features/actions", "CI/CD pipelines: tests, builds and deploys.", siGithubactions, true),
      s("CircleCI", "https://circleci.com", "CI pipelines on commercial projects.", siCircleci, true),
      s("Nginx", "https://nginx.org", "Reverse proxy and static serving on client servers.", siNginx, true),
      s("Linux", "https://www.kernel.org", "Server setup and maintenance for deployments.", siLinux, true),
      s("Cloudflare", "https://www.cloudflare.com", "DNS, CDN and edge for production sites.", siCloudflare, true),
      s("Sentry", "https://sentry.io", "Error tracking and release monitoring.", siSentry, true),
    ],
  },
  {
    category: "Management",
    items: [
      s("Jira", "https://www.atlassian.com/software/jira", "Sprint planning and issue tracking on commercial projects.", siJira),
      s("Linear", "https://linear.app", "Issue tracking on product teams.", siLinear),
      s("Notion", "https://www.notion.com", "Specs, docs and project knowledge base.", siNotion),
      s("Confluence", "https://www.atlassian.com/software/confluence", "Team documentation and specs.", siConfluence, true),
      s("Trello", "https://trello.com", "Lightweight boards for smaller projects.", siTrello, true),
    ],
  },
  {
    category: "Methodologies",
    items: [
      t("Agile", "https://agilemanifesto.org", "Iterative delivery in small product teams.", IconRefresh),
      s("Scrum", "https://www.scrum.org", "Sprints, plannings, dailies and retros.", siScrumalliance),
      t("Kanban", "https://www.atlassian.com/agile/kanban", "Flow-based delivery for support and ops work.", IconLayoutKanban),
      t("Code Review", "https://google.github.io/eng-practices/review/", "Reviewing PRs and mentoring through reviews.", IconGitPullRequest, true),
      t("TDD", "https://martinfowler.com/bliki/TestDrivenDevelopment.html", "Test-first where it pays off.", IconTestPipe, true),
      t("REST API", "https://restfulapi.net", "Designing clean, versioned HTTP APIs.", IconApi, true),
      t("CI/CD", "https://www.atlassian.com/continuous-delivery", "Automated pipelines from commit to deploy.", IconInfinity, true),
      t("Design Patterns", "https://refactoring.guru/design-patterns", "Classic GoF and architectural patterns.", IconPuzzle, true),
      t("Mentoring", "https://www.mentoring.org", "Onboarding and growing junior developers.", IconSchool, true),
    ],
  },
  {
    category: "Tools",
    items: [
      s("Figma", "https://www.figma.com", "Working from designs and refining product UI.", siFigma),
      s("Postman", "https://www.postman.com", "API testing and shared collections.", siPostman),
      s("TradingView", "https://www.tradingview.com", "Charting integrations for trading projects.", siTradingview, true),
    ],
  },
];

export const education = {
  school: "Oles Honchar Dnipro National University",
  degree: "Computer Engineering",
  period: "2023 - Now",
  href: "https://www.dnu.dp.ua/en",
  logo: "/logos/dnu.jpg",
};
