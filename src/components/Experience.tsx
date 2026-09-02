import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { experience, type ExperienceEntry } from "@/data/profile";

function Logo({ entry }: { entry: ExperienceEntry }) {
  if (entry.logo) {
    return (
      <Image
        src={entry.logo}
        alt=""
        aria-hidden="true"
        width={36}
        height={36}
        className="size-9 shrink-0 rounded-[10px] object-contain"
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-border bg-background text-foreground-secondary"
    >
      {entry.icon && <entry.icon className="size-[18px]" stroke={1.5} />}
    </span>
  );
}

function Bullets({ bullets }: { bullets: string[] }) {
  return (
    <ul className="space-y-1 pl-3.5 pt-1">
      {bullets.map((b) => (
        <li
          key={b}
          className="relative text-[13px] leading-5 text-foreground-tertiary before:absolute before:-left-[14px] before:top-2 before:size-1 before:rounded-full before:bg-foreground-quaternary before:content-['']"
        >
          {b}
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section aria-labelledby="experience-heading" className="flex flex-col gap-4">
      <SectionHeader
        title="Experience"
        id="experience-heading"
        expanded={expanded}
        onToggle={() => setExpanded((v) => !v)}
        controls="experience-content"
      />
      <ol id="experience-content" className="space-y-1">
        {experience.map((e) => (
          <li key={e.company}>
            <div className="-mx-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted/60">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 min-[420px]:grid-cols-[auto_minmax(0,1fr)_auto]">
                <Logo entry={e} />
                <div className="min-w-0">
                  {e.href ? (
                    <a
                      href={e.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-fit truncate text-sm font-medium text-foreground hover:underline hover:underline-offset-[3px]"
                    >
                      {e.company}
                    </a>
                  ) : (
                    <span className="block w-fit truncate text-sm font-medium text-foreground">
                      {e.company}
                    </span>
                  )}
                  {e.role && (
                    <p className="truncate text-[13px] text-foreground-secondary">
                      {e.role}
                    </p>
                  )}
                </div>
                <p className="col-start-2 mt-1 whitespace-nowrap text-[13px] text-muted-foreground min-[420px]:col-start-3 min-[420px]:row-start-1 min-[420px]:mt-0">
                  {e.period} · {e.location}
                </p>
                <AnimatePresence initial={false}>
                  {expanded && e.bullets.length > 0 && (
                    <motion.div
                      key="bullets"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                      className="col-start-2 overflow-hidden min-[420px]:col-end-4"
                    >
                      <Bullets bullets={e.bullets} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
