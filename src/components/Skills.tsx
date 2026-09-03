import { useState } from "react";
import { motion } from "framer-motion";
import BrandIcon from "@/components/BrandIcon";
import SectionHeader from "@/components/SectionHeader";
import Tooltip from "@/components/Tooltip";
import { skills } from "@/data/profile";

const ROW_HEIGHT = 22;

export default function Skills() {
  const [expanded, setExpanded] = useState(false);
  const hasExtras = skills.some((c) => c.items.some((s) => s.extra));
  return (
    <section aria-labelledby="skills-heading" className="flex flex-col gap-5">
      <SectionHeader
        title="Skills"
        id="skills-heading"
        expanded={expanded}
        onToggle={hasExtras ? () => setExpanded((v) => !v) : undefined}
        controls="skills-content"
      />
      <div id="skills-content" className="space-y-4">
        {skills.map((cat) => (
          <div
            key={cat.category}
            className="grid grid-cols-[clamp(6rem,20vw,7.5rem)_minmax(0,1fr)] gap-2"
          >
            <h3 className="text-[13px] leading-[22px] text-foreground-tertiary">
              {cat.category}
            </h3>
            <motion.div
              className="min-w-0 overflow-hidden"
              initial={false}
              animate={{ height: expanded ? "auto" : ROW_HEIGHT }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              onFocus={() => setExpanded(true)}
            >
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {cat.items.map((s) => (
                  <li
                    key={s.name}
                    className={
                      s.extra
                        ? `transition-opacity duration-300 ${
                            expanded
                              ? "opacity-100"
                              : "pointer-events-none opacity-0"
                          }`
                        : undefined
                    }
                  >
                    <Tooltip label={s.description}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={s.extra && !expanded ? -1 : undefined}
                        className="flex items-center gap-1.5 text-[13px] leading-[22px] text-foreground-secondary transition-colors hover:text-foreground"
                      >
                        <span className="flex size-3.5 shrink-0 items-center justify-center">
                          {s.icon ? (
                            <BrandIcon icon={s.icon} colored className="size-full" />
                          ) : s.ticon ? (
                            <s.ticon
                              className="size-full text-foreground-tertiary"
                              stroke={1.8}
                              aria-hidden
                            />
                          ) : null}
                        </span>
                        {s.name}
                      </a>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
