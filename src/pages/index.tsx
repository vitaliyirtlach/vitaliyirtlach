import Head from "next/head";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";
import Skills from "@/components/Skills";
import StatableWidget from "@/components/StatableWidget";
import { SITE_URL } from "@/data/profile";

const TITLE = "Vitaliy Irtlach – Fullstack JavaScript Engineer";
const DESCRIPTION =
  "Fullstack JavaScript engineer in Athens with 5 years of experience building web and mobile products with TypeScript, React and Node.js. Building Statable, SafetyMap and Laikimap.";
// Static file instead of an on-request OG route, so the site needs no
// serverless/edge compute at all on Vercel.
const OG_IMAGE = `${SITE_URL}/og.png`;

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vitaliy Irtlach" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Vitaliy Irtlach — Fullstack JavaScript Engineer"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:creator" content="@vitaliyirtlach" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="mx-auto flex w-full max-w-[640px] flex-col gap-11 px-5 py-16 sm:py-20">
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal delay={0.1}>
          <Experience />
        </Reveal>
        <Reveal delay={0.2}>
          <Projects />
        </Reveal>
        <Reveal delay={0.3}>
          <Education />
        </Reveal>
        <Reveal delay={0.4}>
          <Skills />
        </Reveal>
        <StatableWidget />
      </main>
    </>
  );
}
