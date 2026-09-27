import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import BrandIcon from "@/components/BrandIcon";
import SectionHeader from "@/components/SectionHeader";
import { projects, projectsIntro } from "@/data/profile";

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="flex flex-col gap-4">
      <SectionHeader title="Projects" id="projects-heading" />
      <p className="-mt-1 text-[13px] leading-5 text-foreground-secondary">
        {projectsIntro}
      </p>
      <ul className="space-y-1">
        {projects.map((p) => (
          <li key={p.href}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group -mx-3 flex gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted/60"
            >
              <Image
                src={p.logo}
                alt=""
                aria-hidden="true"
                width={36}
                height={36}
                className="size-9 shrink-0 rounded-[10px] object-contain"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <div className="flex flex-wrap items-center justify-between gap-x-3">
                  <span className="flex items-center gap-0.5 text-sm font-medium text-foreground">
                    <span className="group-hover:underline group-hover:underline-offset-[3px]">
                      {p.name}
                    </span>
                    <IconArrowUpRight
                      className="size-3.5 shrink-0 text-foreground-quaternary transition-colors group-hover:text-foreground-secondary"
                      stroke={2}
                      aria-hidden
                    />
                  </span>
                  <span className="whitespace-nowrap text-[13px] text-muted-foreground">
                    {p.domain}
                  </span>
                </div>
                <p className="text-[13px] leading-5 text-foreground-secondary">
                  {p.description}
                </p>
                <ul className="flex flex-wrap gap-x-3 gap-y-1 pt-0.5">
                  {p.tech.map((t) => (
                    <li
                      key={t.name}
                      className="flex items-center gap-1 text-xs text-foreground-tertiary"
                    >
                      <span className="flex size-3 shrink-0 items-center justify-center">
                        <BrandIcon icon={t.icon} colored className="size-full" />
                      </span>
                      {t.name}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
