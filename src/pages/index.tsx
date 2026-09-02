import Head from "next/head";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vitaliy Irtlach – Fullstack JavaScript Engineer</title>
        <meta
          name="description"
          content="Vitaliy Irtlach — fullstack JavaScript engineer building web and mobile products with TypeScript, React and Node.js."
        />
        <meta property="og:title" content="Vitaliy Irtlach" />
        <meta
          property="og:description"
          content="Fullstack JavaScript engineer building web and mobile products."
        />
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
          <Skills />
        </Reveal>
        <Reveal delay={0.3}>
          <Education />
        </Reveal>
        <Reveal delay={0.4}>
          <Footer />
        </Reveal>
      </main>
    </>
  );
}
