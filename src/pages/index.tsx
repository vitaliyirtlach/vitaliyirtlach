import Head from "next/head";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";
import Skills from "@/components/Skills";
import StatableWidget from "@/components/StatableWidget";
import {
  SITE_URL,
  education,
  experience,
  plain,
  profile,
  skills,
  socials,
  summary,
} from "@/data/profile";

// Keyword-bearing <title> for search; the social card keeps the short one.
const TITLE =
  "Vitalii Zakaznov – Frontend Engineer (React, Next.js, TypeScript)";
const OG_TITLE = "Vitalii Zakaznov – Frontend Engineer";
const DESCRIPTION =
  "Frontend engineer in Athens, Greece with 5+ years of commercial experience building production web and mobile applications with TypeScript, React, Next.js and React Native. Open to remote work and relocation across the EU.";
const KEYWORDS = [
  "Frontend Engineer",
  "Frontend Developer",
  "React Developer",
  "Software Engineer",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "React Native",
  "REST API",
  "PostgreSQL",
  "Docker",
  "CI/CD",
  "Web Performance",
  "Accessibility",
  "SEO",
  "Athens",
  "Greece",
  "Remote",
  "EU",
].join(", ");

// Person schema: the same facts as the page, in a shape search engines and
// recruiting tools can read directly.
const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  birthDate: profile.birthDate,
  description: plain(summary),
  url: SITE_URL,
  image: `${SITE_URL}${profile.photo}`,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Athens",
    addressCountry: "GR",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: education.school,
    url: education.href,
  },
  worksFor: experience
    .filter((e) => !e.end && e.href)
    .map((e) => ({ "@type": "Organization", name: e.company, url: e.href })),
  knowsAbout: skills.flatMap((c) => c.items.map((i) => i.name)),
  knowsLanguage: ["en", "uk", "ru"],
  sameAs: socials.map((x) => x.href),
};

// Static file instead of an on-request OG route, so the site needs no
// serverless/edge compute at all on Vercel.
const OG_IMAGE = `${SITE_URL}/og.png`;

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS} />
        <meta name="author" content={profile.name} />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vitalii Zakaznov" />
        <meta property="og:title" content={OG_TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Vitalii Zakaznov — Frontend Engineer"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={OG_TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:creator" content="@vitaliyirtlach" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
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
