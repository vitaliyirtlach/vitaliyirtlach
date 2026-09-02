import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandUpwork,
  IconBrandX,
  IconDeviceLaptop,
  IconMail,
  IconSearch,
  type Icon,
} from "@tabler/icons-react";
import {
  siDocker,
  siExpo,
  siExpress,
  siFigma,
  siFramer,
  siGit,
  siGithub,
  siGithubactions,
  siGraphql,
  siJavascript,
  siJira,
  siLinux,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siNotion,
  siPostgresql,
  siPostman,
  siPrisma,
  siReact,
  siReactquery,
  siRedis,
  siRedux,
  siSocketdotio,
  siTailwindcss,
  siTrpc,
  siTypescript,
  siVercel,
  siVite,
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
  location: "Athens, Greece",
};

export type Social = { label: string; href: string; icon: Icon };

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/vitaliyirtlach", icon: IconBrandGithub },
  { label: "X", href: "https://twitter.com/vitaliyirtlach", icon: IconBrandX },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vitaliyirtlach/", icon: IconBrandLinkedin },
  { label: "Telegram", href: "https://t.me/vitaliyirtlach", icon: IconBrandTelegram },
  { label: "Instagram", href: "https://www.instagram.com/vitaliyirtlach/", icon: IconBrandInstagram },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~01c2b7dfc502099e16", icon: IconBrandUpwork },
  { label: "Email", href: "mailto:vitaliyirtlach@gmail.com", icon: IconMail },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  icon?: Icon;
  logo?: string;
  current?: boolean;
  href?: string;
  bullets: string[];
};

const openToWorkEntry: ExperienceEntry = {
  company: "Open to work",
  role: "",
  period: "Now",
  location: "Remote",
  icon: IconSearch,
  current: true,
  bullets: [],
};

const jobs: ExperienceEntry[] = [
  {
    company: "Ito AI",
    role: "JavaScript Developer",
    period: "Dec 25 - Now",
    location: "Remote",
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
    period: "Aug 25 - Now",
    location: "Remote",
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
    period: "Jan 24 - Dec 25",
    location: "Remote",
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
    period: "Sep 21 - Now",
    location: "Remote",
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
  icon: SimpleIcon;
  description: string;
  extra?: boolean;
};
export type SkillCategory = { category: string; items: Skill[] };

export const skills: SkillCategory[] = [
  {
    category: "Language",
    items: [
      {
        name: "TypeScript",
        href: "https://www.typescriptlang.org",
        icon: siTypescript,
        description: "Default language for every web and mobile project I ship.",
      },
      {
        name: "JavaScript",
        href: "https://developer.mozilla.org/docs/Web/JavaScript",
        icon: siJavascript,
        description: "5 years of production JavaScript across frontend and backend.",
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        href: "https://react.dev",
        icon: siReact,
        description: "Primary UI library — dashboards and product UIs at Ito and Statable.",
      },
      {
        name: "Next.js",
        href: "https://nextjs.org",
        icon: siNextdotjs,
        description: "Ito platform, Statable dashboards and this very site.",
      },
      {
        name: "React Native",
        href: "https://reactnative.dev",
        icon: siReact,
        description: "Cross-platform mobile apps at Jobbit.",
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com",
        icon: siTailwindcss,
        description: "My default styling layer — used on Ito, Statable and this site.",
      },
      {
        name: "Expo",
        href: "https://expo.dev",
        icon: siExpo,
        description: "Build and release tooling for React Native apps.",
        extra: true,
      },
      {
        name: "Redux",
        href: "https://redux.js.org",
        icon: siRedux,
        description: "State management in larger React and React Native apps.",
        extra: true,
      },
      {
        name: "TanStack Query",
        href: "https://tanstack.com/query",
        icon: siReactquery,
        description: "Server state and caching in data-heavy dashboards.",
        extra: true,
      },
      {
        name: "Motion",
        href: "https://motion.dev",
        icon: siFramer,
        description: "Animations on this site and in product UIs.",
        extra: true,
      },
      {
        name: "Vite",
        href: "https://vite.dev",
        icon: siVite,
        description: "Fast build tooling for SPAs and internal tools.",
        extra: true,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        href: "https://nodejs.org",
        icon: siNodedotjs,
        description: "Backend runtime for the APIs and services I build.",
      },
      {
        name: "NestJS",
        href: "https://nestjs.com",
        icon: siNestjs,
        description: "Structured backend APIs for commercial projects.",
      },
      {
        name: "PostgreSQL",
        href: "https://www.postgresql.org",
        icon: siPostgresql,
        description: "Main relational database in production projects.",
      },
      {
        name: "GraphQL",
        href: "https://graphql.org",
        icon: siGraphql,
        description: "Typed APIs between dashboards and backend services.",
      },
      {
        name: "Express",
        href: "https://expressjs.com",
        icon: siExpress,
        description: "Lightweight APIs and internal services.",
        extra: true,
      },
      {
        name: "tRPC",
        href: "https://trpc.io",
        icon: siTrpc,
        description: "End-to-end typed APIs inside Next.js apps.",
        extra: true,
      },
      {
        name: "Prisma",
        href: "https://www.prisma.io",
        icon: siPrisma,
        description: "ORM of choice on top of PostgreSQL.",
        extra: true,
      },
      {
        name: "MongoDB",
        href: "https://www.mongodb.com",
        icon: siMongodb,
        description: "Document storage in freelance and startup projects.",
        extra: true,
      },
      {
        name: "MySQL",
        href: "https://www.mysql.com",
        icon: siMysql,
        description: "Relational database in client projects.",
        extra: true,
      },
      {
        name: "Redis",
        href: "https://redis.io",
        icon: siRedis,
        description: "Caching, queues and session storage.",
        extra: true,
      },
      {
        name: "Socket.IO",
        href: "https://socket.io",
        icon: siSocketdotio,
        description: "Real-time features: live updates, notifications, chat.",
        extra: true,
      },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      {
        name: "Docker",
        href: "https://www.docker.com",
        icon: siDocker,
        description: "Containerized development and deployments.",
      },
      {
        name: "Vercel",
        href: "https://vercel.com",
        icon: siVercel,
        description: "Hosting for my Next.js projects, including this site.",
      },
      {
        name: "Git",
        href: "https://git-scm.com",
        icon: siGit,
        description: "Daily workflow: branches, reviews, clean history.",
      },
      {
        name: "GitHub",
        href: "https://github.com",
        icon: siGithub,
        description: "Home of my code, pull requests and CI.",
      },
      {
        name: "Nginx",
        href: "https://nginx.org",
        icon: siNginx,
        description: "Reverse proxy and static serving on client servers.",
        extra: true,
      },
      {
        name: "Linux",
        href: "https://www.kernel.org",
        icon: siLinux,
        description: "Server setup and maintenance for deployments.",
        extra: true,
      },
      {
        name: "GitHub Actions",
        href: "https://github.com/features/actions",
        icon: siGithubactions,
        description: "CI/CD pipelines: tests, builds and deploys.",
        extra: true,
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "Figma",
        href: "https://www.figma.com",
        icon: siFigma,
        description: "Working from designs and refining product UI.",
      },
      {
        name: "Postman",
        href: "https://www.postman.com",
        icon: siPostman,
        description: "API testing and shared collections.",
      },
      {
        name: "Jira",
        href: "https://www.atlassian.com/software/jira",
        icon: siJira,
        description: "Team workflow on commercial projects.",
        extra: true,
      },
      {
        name: "Notion",
        href: "https://www.notion.com",
        icon: siNotion,
        description: "Specs, docs and project knowledge base.",
        extra: true,
      },
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
