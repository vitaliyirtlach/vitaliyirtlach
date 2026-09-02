import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MotionConfig } from "framer-motion";
import { Caveat, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Fonts live on :root so portaled content (tooltips) inherits them too */}
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
          --font-hand: ${caveat.style.fontFamily};
        }
      `}</style>
      <MotionConfig reducedMotion="user">
        <Component {...pageProps} />
      </MotionConfig>
    </>
  );
}
