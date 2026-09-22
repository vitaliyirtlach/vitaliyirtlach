import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import {
  IconBrandWhatsapp,
  IconFileTypePdf,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import ResumeDoc from "@/components/ResumeDoc";
import { OPEN_TO_WORK, profile, socials } from "@/data/profile";

function HandArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 22"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 3c2 8 11 13.5 27 13.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M25 11l6.5 5.5-8 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

const bioLink =
  "font-medium text-foreground underline decoration-neutral-300 underline-offset-[3px] transition-colors hover:decoration-neutral-500";

function ProjectLink({
  href,
  logo,
  children,
}: {
  href: string;
  logo: string;
  children: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={bioLink}>
      <Image
        src={logo}
        alt=""
        aria-hidden="true"
        width={16}
        height={16}
        className="mr-1 inline size-4 -translate-y-px rounded-[4px] align-middle"
      />
      {children}
    </a>
  );
}

export default function Hero() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);

  const downloadResume = useCallback(async () => {
    if (!resumeRef.current || saving) return;
    setSaving(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      await html2pdf()
        .set({
          margin: 0,
          filename: "Vitaliy-Irtlach-Resume.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          pagebreak: { mode: ["avoid-all", "css"] },
        })
        .from(resumeRef.current)
        .save();
    } finally {
      setSaving(false);
    }
  }, [saving]);

  return (
    <header className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="flex items-center gap-3.5">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={52}
            height={52}
            priority
            className="size-[52px] rounded-full object-cover ring-1 ring-border"
          />
          <div>
            <h1 className="whitespace-nowrap text-lg font-semibold leading-6 tracking-tight">
              {profile.name}
            </h1>
            <p className="text-sm text-foreground-tertiary">{profile.title}</p>
            <p className="mt-0.5 flex items-center gap-1 text-[13px] text-muted-foreground">
              <IconMapPin className="size-3.5 shrink-0" stroke={1.6} aria-hidden />
              {profile.location}
            </p>
          </div>
        </div>
        <nav
          aria-label="Social links"
          className="-ml-2 flex items-center gap-0.5 sm:ml-0 sm:pt-1"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={s.label}
              title={s.label}
              className="flex size-8 items-center justify-center rounded-lg text-foreground-tertiary transition-all hover:bg-muted hover:text-foreground active:scale-95"
            >
              <s.icon className="size-[18px]" stroke={1.6} aria-hidden />
            </a>
          ))}
        </nav>
      </div>

      <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary">
        <p>
          Hey, I&apos;m Vitaliy — a fullstack JavaScript engineer from Dnipro,
          Ukraine, now based in Athens, Greece, with 5 years of experience
          building web and mobile products for startups and commercial
          platforms.
        </p>
        <p>
          Right now I&apos;m working on{" "}
          <ProjectLink href="https://www.ito.ai/" logo="/logos/ito.png">
            Ito
          </ProjectLink>{" "}
          — AI code review that runs your code — and building web analytics at{" "}
          <ProjectLink href="https://statable.com" logo="/logos/statable.png">
            Statable
          </ProjectLink>
          .
        </p>
        <p>
          I&apos;m studying Computer Engineering at{" "}
          <a href="https://www.dnu.dp.ua/en" target="_blank" rel="noreferrer" className={bioLink}>
            Oles Honchar Dnipro National University
          </a>
          .
        </p>
        <p>
          Outside of work I&apos;m into fitness and keeping an eye on whatever
          is new in tech.
        </p>
      </div>

      <div className="relative mt-1 flex flex-wrap items-center gap-2.5">
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 select-none items-center gap-1 font-hand text-[17px] leading-none text-foreground-tertiary lg:flex">
          <span className="-translate-y-2 -rotate-6 whitespace-nowrap">
            {OPEN_TO_WORK ? "open to work" : "say hi"}
          </span>
          <HandArrow className="h-[22px] w-9" />
        </span>
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-foreground px-3.5 text-[13px] font-medium text-white shadow-sm transition-all hover:opacity-85 active:scale-[0.97]"
          >
            <IconMail className="size-4" stroke={1.8} aria-hidden />
            Email me
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[#25D366] px-3.5 text-[13px] font-medium text-white shadow-sm transition-all hover:bg-[#1FB855] active:scale-[0.97]"
          >
            <IconBrandWhatsapp className="size-4" stroke={1.8} aria-hidden />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={downloadResume}
            disabled={saving}
            className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-border bg-background px-3.5 text-[13px] font-medium text-foreground transition-all hover:bg-muted active:scale-[0.97] disabled:opacity-60"
          >
            <IconFileTypePdf className="size-4" stroke={1.8} aria-hidden />
            {saving ? "Preparing…" : "Resume.pdf"}
          </button>
        </div>
      </div>

      <ResumeDoc ref={resumeRef} />
    </header>
  );
}
