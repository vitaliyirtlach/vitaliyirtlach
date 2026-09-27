import {
  IconAccessible,
  IconAffiliate,
  IconApi,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandOpenai,
  IconBrandSpeedtest,
  IconBrandTelegram,
  IconBrandX,
  IconClock,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconDog,
  IconFileText,
  IconGauge,
  IconGitPullRequest,
  IconInfinity,
  IconLanguage,
  IconLayoutKanban,
  IconMail,
  IconMasksTheater,
  IconPaw,
  IconPuzzle,
  IconRefresh,
  IconSchema,
  IconSchool,
  IconSearch,
  IconSeo,
  IconSparkles,
  IconTestPipe,
  IconWorldWww,
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
  siDrizzle,
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
  siMaplibre,
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
  siRadixui,
  siReact,
  siReactbootstrap,
  siReacthookform,
  siReactivex,
  siReactquery,
  siReacttable,
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
  name: "Vitalii Zakaznov",
  title: "Frontend Engineer",
  birthDate: "2005-09-13",
  // Keyword line for recruiters and resume parsers; printed in the PDF header.
  headline: "React · Next.js · TypeScript · Node.js · 5+ years",
  photo: "/photo.jpeg",
  telegram: "https://t.me/vitaliyirtlach",
  email: "vitaliyirtlach@gmail.com",
  phone: "+380 99 312 38 09",
  whatsapp: "https://wa.me/380993123809",
  location: "Athens, Greece",
  availability: "Open to remote and relocation across the EU",
  workAuthorization: "EU work authorization — Temporary Protection (Greece)",
  languages: "English (B2) · Ukrainian, Russian (native)",
};

/** Whole years old on the given day; recomputed on the client so a page
 *  prerendered before a birthday does not go stale. */
export function age(on: Date = new Date()): number {
  const [year, month, day] = profile.birthDate.split("-").map(Number);
  const hadBirthday =
    on.getMonth() + 1 > month ||
    (on.getMonth() + 1 === month && on.getDate() >= day);
  return on.getFullYear() - year - (hadBirthday ? 0 : 1);
}

// Resume summary: the keywords recruiters and ATS filters look for, in
// sentences rather than as a keyword dump.
export const summary =
  "Frontend engineer with **5+ years of commercial experience** building production web and mobile applications with **TypeScript, React, Next.js and React Native**. Frontend architecture, reusable component libraries, REST API integration and state management, with a focus on **web performance, accessibility and SEO** — backed by hands-on backend work in Node.js, Fastify, NestJS and PostgreSQL. Comfortable in distributed, English-speaking product teams: Agile, code review, CI/CD and mentoring. Currently building web analytics at Statable and shipping my own products: SafetyMap, Laikimap, SimpleInvoice and GreekNameDays.";

/** Drops the ** emphasis marks, for places that need the raw sentence. */
export const plain = (text: string) => text.replace(/\*\*/g, "");

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
  /** One line of context before the responsibilities. */
  intro?: string;
  /** **Double asterisks** mark the phrases worth bolding; see Rich.tsx. */
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
    role: "Frontend Engineer",
    start: [2025, 12],
    end: [2026, 9],
    logo: "/logos/ito.png",
    href: "https://www.ito.ai/",
    intro:
      "Built the web platform and dashboard for Ito — **AI code review** that builds and runs your app on every pull request to catch real bugs.",
    bullets: [
      "Developing the product UI with **React**, **Next.js**, **TypeScript** and **Tailwind CSS**, including features powered by the **Claude API**.",
      "**Migrating the monolithic codebase to a Turborepo monorepo on Bun**, splitting it into apps and shared packages — UI library, API client, shared configs — with **CI/CD on GitHub Actions**.",
      "Working mainly in the Next.js app and the shared UI package, reaching into the **Fastify** and **PostgreSQL** (**Drizzle ORM**) API when a feature needed it.",
      "Wiring data-heavy dashboards to **REST APIs** with **TanStack Query** and **TanStack Table**: server state, caching, sorting and filtering.",
      "Collaborating in a distributed, English-speaking product team: **code review**, **technical documentation** and **Figma** hand-off.",
    ],
  },
  {
    company: "Statable",
    role: "Frontend Engineer",
    start: [2025, 8],
    logo: "/logos/statable.png",
    href: "https://statable.com",
    intro:
      "Building the frontend of a **web analytics platform**: dashboards, site settings, team management and an embeddable stats widget.",
    bullets: [
      "Developing data-heavy React interfaces with **Next.js**, **TypeScript**, **TanStack Query**, **TanStack Table**, **Radix UI** and **Tailwind CSS** — charts, virtualized tables and live filters.",
      "Integrating **REST APIs** and keeping the frontend type-safe end-to-end with **TypeScript** and **Zod**-validated forms.",
      "Owning **responsive design**, **web performance** and **accessibility** across the dashboard, plus **SEO** for the public pages.",
    ],
  },
  {
    company: "Jobbit",
    role: "Frontend Engineer",
    start: [2024, 1],
    end: [2025, 12],
    logo: "/logos/jobbit.jpg",
    href: "https://jobbit.uk",
    intro:
      "Frontend for Jobbit — a platform that routes real-world tasks between **AI agents** and vetted human specialists.",
    bullets: [
      "Building cross-platform mobile apps with **React Native** and **Expo**, released to the **App Store** and **Google Play**.",
      "Developing responsive web interfaces with **React**, **TypeScript** and **Redux**, integrating **REST APIs** and handling **state management**.",
      "Shipping frontend features and UI improvements in a distributed, English-speaking team working in **Agile** sprints with **code review**.",
    ],
  },
  {
    company: "Freelance",
    role: "Fullstack JavaScript Engineer",
    start: [2021, 9],
    icon: IconDeviceLaptop,
    intro:
      "Delivered production projects for startups and commercial platforms: an investor service, a metalworking marketplace and an algotrading platform.",
    bullets: [
      "Handling the full cycle — scoping with customers, frontend and backend development (**React**, **Angular**, **Vue**, **Node.js**, **NestJS**, **PostgreSQL**, **MongoDB**), deployment with **Docker** and ongoing support.",
      "Leading technical delivery: **software architecture** decisions, **code review**, **technical documentation** and **mentoring** of junior developers.",
      "Interviewing engineering candidates and managing the technical side of client projects.",
    ],
  },
];

export const experience: ExperienceEntry[] = OPEN_TO_WORK
  ? [openToWorkEntry, ...jobs]
  : jobs;

export type Project = {
  name: string;
  domain: string;
  href: string;
  logo: string;
  description: string;
  tech: { name: string; icon: SimpleIcon }[];
};

// Why these exist, in one line — the same sentence is used on the page and
// in the PDF.
export const projectsIntro =
  "Every one of these started as something I needed myself and could not find — so I built it properly and turned it into a free tool anyone can use. All of them are live, indexed and maintained.";

export const projects: Project[] = [
  {
    name: "GreekNameDays",
    domain: "greeknamedays.online",
    href: "https://greeknamedays.online",
    logo: "/logos/greeknamedays.png",
    description:
      "Εορτολόγιο — the Greek name-day calendar: who celebrates today, when any name is celebrated and the saint behind it, in Greek and English. Server-rendered and statically generated for SEO.",
    tech: [
      { name: "Next.js", icon: siNextdotjs },
      { name: "TypeScript", icon: siTypescript },
      { name: "Radix UI", icon: siRadixui },
      { name: "Zod", icon: siZod },
      { name: "Tailwind CSS", icon: siTailwindcss },
    ],
  },
  {
    name: "SafetyMap",
    domain: "safetymap.online",
    href: "https://safetymap.online",
    logo: "/logos/safetymap.png",
    description:
      "Interactive crime and safety map of Greece — every region, municipality and neighbourhood scored out of 100 from Eurostat data.",
    tech: [
      { name: "Next.js", icon: siNextdotjs },
      { name: "TypeScript", icon: siTypescript },
      { name: "MapLibre", icon: siMaplibre },
      { name: "shadcn/ui", icon: siShadcnui },
      { name: "Tailwind CSS", icon: siTailwindcss },
    ],
  },
  {
    name: "Laikimap",
    domain: "laikimap.online",
    href: "https://laikimap.online",
    logo: "/logos/laikimap.png",
    description:
      "Every Greek street market on one map — 49 cities, filterable by day and neighbourhood, with geolocation and full localization.",
    tech: [
      { name: "Next.js", icon: siNextdotjs },
      { name: "TypeScript", icon: siTypescript },
      { name: "MapLibre", icon: siMaplibre },
      { name: "Motion", icon: siFramer },
      { name: "Tailwind CSS", icon: siTailwindcss },
    ],
  },
  {
    name: "SimpleInvoice",
    domain: "simple-invoice.online",
    href: "https://simple-invoice.online",
    logo: "/logos/simple-invoice.png",
    description:
      "Free invoice generator that runs entirely in the browser — ten templates, drag-and-drop blocks, 60+ currencies, PDF export without an account.",
    tech: [
      { name: "Next.js", icon: siNextdotjs },
      { name: "TypeScript", icon: siTypescript },
      { name: "shadcn/ui", icon: siShadcnui },
      { name: "Zod", icon: siZod },
      { name: "Tailwind CSS", icon: siTailwindcss },
    ],
  },
];

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
      s("TanStack Query", "https://tanstack.com/query", "Server state and caching in data-heavy dashboards at Ito and Statable.", siReactquery),
      s("Redux", "https://redux.js.org", "State management in larger React and React Native apps.", siRedux, true),
      s("TanStack Table", "https://tanstack.com/table", "Sortable, virtualized data tables in analytics dashboards.", siReacttable, true),
      s("Radix UI", "https://www.radix-ui.com", "Accessible UI primitives behind my component libraries.", siRadixui, true),
      s("React Hook Form", "https://react-hook-form.com", "Typed forms validated with Zod.", siReacthookform, true),
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
    category: "Web Craft",
    items: [
      t("Responsive Design", "https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design", "Layouts that hold up from 320px to ultrawide.", IconDeviceMobile),
      t("Web Performance", "https://web.dev/performance", "Core Web Vitals, bundle budgets and render cost.", IconGauge),
      t("Accessibility", "https://www.w3.org/WAI/standards-guidelines/wcag/", "a11y: semantic markup, keyboard navigation and WCAG contrast.", IconAccessible),
      t("SEO", "https://developers.google.com/search/docs", "Technical SEO: metadata, sitemaps, canonical URLs, indexing.", IconSeo),
      t("Core Web Vitals", "https://web.dev/vitals", "LCP, INP and CLS measured on real pages.", IconBrandSpeedtest, true),
      t("Server-Side Rendering", "https://nextjs.org/docs/app/getting-started/server-and-client-components", "SSR, SSG and React Server Components in Next.js.", IconWorldWww, true),
      t("Structured Data", "https://schema.org", "Schema.org JSON-LD for rich results.", IconSchema, true),
      t("Internationalization", "https://www.w3.org/International/", "Multi-locale sites: routing, translations and formatting.", IconLanguage, true),
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
      s("Fastify", "https://fastify.dev", "High-throughput Node.js services — the API layer at Ito.", siFastify),
      t("REST API", "https://restfulapi.net", "Designing and integrating versioned HTTP APIs on every project.", IconApi),
      s("Express", "https://expressjs.com", "Lightweight APIs and internal services.", siExpress, true),
      s("GraphQL", "https://graphql.org", "Typed APIs between dashboards and backend services.", siGraphql, true),
      s("Apollo GraphQL", "https://www.apollographql.com", "GraphQL servers and clients.", siApollographql, true),
      s("TypeGraphQL", "https://typegraphql.com", "Code-first GraphQL schemas in TypeScript.", siGraphql, true),
      s("GraphQL Codegen", "https://the-guild.dev/graphql/codegen", "Typed clients generated from schemas.", siGraphql, true),
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
      s("Drizzle ORM", "https://orm.drizzle.team", "Typed SQL and migrations on PostgreSQL at Ito.", siDrizzle),
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
      t("CI/CD", "https://www.atlassian.com/continuous-delivery", "Automated pipelines from commit to deploy.", IconInfinity, true),
      t("Design Patterns", "https://refactoring.guru/design-patterns", "Classic GoF and architectural patterns.", IconPuzzle, true),
      t("Frontend Architecture", "https://martinfowler.com/architecture/", "Structuring apps, state and component boundaries.", IconAffiliate, true),
      t("Technical Documentation", "https://diataxis.fr", "Specs, READMEs and onboarding docs teams actually read.", IconFileText, true),
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
  // Spelled out for resume parsers: "Bachelor's Degree" and the field of study
  // are what ATS filters match on, not the university's internal code.
  degree: "Bachelor of Science (B.Sc.) in Computer Engineering",
  period: "2023 - 2027 (expected)",
  href: "https://www.dnu.dp.ua/en",
  logo: "/logos/dnu.jpg",
};
