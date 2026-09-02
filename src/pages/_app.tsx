import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MotionConfig } from "framer-motion";
import { Caveat, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-hand" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div className={`${inter.variable} ${caveat.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </MotionConfig>
  );
}
