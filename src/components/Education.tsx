import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <section aria-labelledby="education-heading" className="flex flex-col gap-4">
      <SectionHeader title="Education" id="education-heading" />
      <div className="-mx-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted/60">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src={education.logo}
            alt=""
            aria-hidden="true"
            width={36}
            height={36}
            className="size-9 shrink-0 rounded-[10px] object-contain"
          />
          <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <div className="min-w-0">
              <a
                href={education.href}
                target="_blank"
                rel="noreferrer"
                className="block w-fit text-sm font-medium text-foreground hover:underline hover:underline-offset-[3px]"
              >
                {education.school}
              </a>
              <p className="text-[13px] text-foreground-secondary">
                {education.degree}
              </p>
            </div>
            <p className="whitespace-nowrap text-[13px] text-muted-foreground">
              {education.period}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
