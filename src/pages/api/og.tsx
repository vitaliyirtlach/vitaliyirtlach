import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";
import {
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

export const config = { runtime: "edge" };

const STACK: SimpleIcon[] = [
  siTypescript,
  siJavascript,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siTailwindcss,
];

function Icon({ icon, size }: { icon: SimpleIcon; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ borderRadius: size * 0.18 }}
    >
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  );
}

export default function handler(req: NextRequest) {
  const origin = new URL(req.url).origin;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${origin}/photo.jpeg`}
            alt=""
            width={150}
            height={150}
            style={{
              borderRadius: 9999,
              objectFit: "cover",
              border: "3px solid #e7e7e7",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 68,
                fontWeight: 700,
                color: "#171717",
                letterSpacing: -2,
              }}
            >
              Vitaliy Irtlach
            </div>
            <div style={{ fontSize: 32, color: "#737373", marginTop: 6 }}>
              Fullstack JavaScript Engineer
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#525252",
            lineHeight: 1.5,
            maxWidth: 980,
          }}
        >
          5 years of experience building web and mobile products — working on
          Ito (AI code review) and Statable (web analytics).
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {STACK.map((icon) => (
            <Icon key={icon.title} icon={icon} size={44} />
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
