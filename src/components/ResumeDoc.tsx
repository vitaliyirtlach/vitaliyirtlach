import { forwardRef, Fragment, type ReactNode } from "react";
import Rich from "@/components/Rich";
import {
  education,
  experience,
  formatPeriod,
  profile,
  projects,
  projectsIntro,
  skills,
  socials,
  summary,
} from "@/data/profile";

// html2pdf.js turns every <a> in this tree into a real PDF link annotation
// (its enableLinks option is on by default), so anything with a URL behind it
// is an anchor here rather than plain text.
function Link({
  href,
  className = "no-underline",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={`text-inherit ${className}`}>
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="text-[8.5px] font-semibold uppercase tracking-[0.14em] text-[#9a9a9a]">
      {children}
    </h2>
  );
}

// Subtle rule under the links a reader is meant to notice and click.
const UNDERLINE = "underline decoration-[#d4d4d4] underline-offset-[3px]";
const BOLD = "font-semibold text-[#1a1a1a]";

const shortUrl = (href: string) =>
  href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const RESUME_SOCIALS = ["GitHub", "LinkedIn", "Telegram"];

// Hidden A4-width document rendered from the same data as the page.
// html2pdf.js rasterizes this node into the downloadable Resume.pdf.
const ResumeDoc = forwardRef<HTMLDivElement>(function ResumeDoc(_, ref) {
  const profileLinks = socials.filter((s) => RESUME_SOCIALS.includes(s.label));

  return (
    <div className="pointer-events-none fixed -left-[2000px] top-0" aria-hidden="true">
      <div
        ref={ref}
        className="w-[794px] bg-white px-12 font-sans text-[#333333]"
      >
        <header>
          <div className="flex items-start justify-between gap-8">
            <div>
              <h1 className="text-[38px] font-normal leading-none tracking-[-0.02em] text-[#1a1a1a]">
                {profile.name}
              </h1>
              <p className="mt-2 text-[14px] text-[#767676]">{profile.title}</p>
            </div>
            <div className="text-right text-[11px] leading-[19px] text-[#555555]">
              <p>
                <Link href={`mailto:${profile.email}`} className={UNDERLINE}>
                  {profile.email}
                </Link>
              </p>
              <p>
                <Link
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className={UNDERLINE}
                >
                  {profile.phone}
                </Link>
              </p>
              <p>{profile.location}</p>
              <p>{profile.availability}</p>
              <p>{profile.workAuthorization}</p>
              <p>{profile.languages}</p>
              <p>
                {profileLinks.map((s, i) => (
                  <Fragment key={s.label}>
                    {i > 0 && " · "}
                    <Link href={s.href} className={UNDERLINE}>
                      {shortUrl(s.href)}
                    </Link>
                  </Fragment>
                ))}
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-[620px] text-[11.5px] leading-[18px]">
            <Rich text={summary} strongClassName={BOLD} />
          </p>
        </header>

        <hr className="mt-4 border-t border-[#e5e5e5]" />

        <section className="mt-4">
          <SectionLabel>Experience</SectionLabel>
          <div className="mt-2.5 space-y-3.5">
            {experience.map((e) => (
              <div key={e.company} className="break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="flex items-baseline gap-2">
                    <span className="text-[20px] font-semibold leading-tight tracking-[-0.01em] text-[#1a1a1a]">
                      {e.href ? (
                        <Link href={e.href}>{e.company}</Link>
                      ) : (
                        e.company
                      )}
                    </span>
                    <span className="text-[20px] font-normal leading-tight tracking-[-0.01em] text-[#a8a8a8]">
                      {e.role}
                    </span>
                    <span className="text-[10.5px] text-[#555555]">
                      {formatPeriod(e)}
                    </span>
                  </p>
                  {e.href && (
                    <p className="shrink-0 text-[10.5px] text-[#9a9a9a]">
                      <Link href={e.href} className={UNDERLINE}>
                        {shortUrl(e.href)}
                      </Link>
                    </p>
                  )}
                </div>
                {e.intro && (
                  <p className="mt-1.5 text-[11px] leading-[17px]">
                    <Rich text={e.intro} strongClassName={BOLD} />
                  </p>
                )}
                {e.bullets.length > 0 && (
                  <>
                    <p className="mt-2 text-[11px] text-[#555555]">
                      Responsibilities:
                    </p>
                    <ul className="mt-1 space-y-[3px]">
                      {e.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-[7px] text-[11px] leading-[17px]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[7px] size-[3px] shrink-0 rounded-full bg-[#b5b5b5]"
                          />
                          <span>
                            <Rich text={b} strongClassName={BOLD} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4">
          <SectionLabel>Projects</SectionLabel>
          <p className="mt-2 text-[11px] leading-[17px]">{projectsIntro}</p>
          <div className="mt-2.5 space-y-2.5">
            {projects.map((p) => (
              <div key={p.href} className="break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-[14px] font-semibold tracking-[-0.01em] text-[#1a1a1a]">
                    <Link href={p.href}>{p.name}</Link>
                  </p>
                  <p className="shrink-0 text-[10.5px] text-[#9a9a9a]">
                    <Link href={p.href} className={UNDERLINE}>
                      {p.domain}
                    </Link>
                  </p>
                </div>
                <p className="mt-0.5 text-[11px] leading-[17px]">
                  {p.description}
                </p>
                <p className="mt-0.5 text-[10.5px] text-[#8a8a8a]">
                  {p.tech.map((t) => t.name).join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4">
          <SectionLabel>Education</SectionLabel>
          <div className="mt-2.5 flex items-center gap-2.5 break-inside-avoid">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={education.logo}
              alt=""
              width={30}
              height={30}
              className="size-[30px] shrink-0 rounded-[6px] object-contain"
            />
            <div>
              <p className="text-[15px] font-semibold tracking-[-0.01em] text-[#1a1a1a]">
                <Link href={education.href}>{education.school}</Link>
              </p>
              <p className="text-[10.5px] leading-[16px] text-[#555555]">
                {education.period}
                <span className="ml-3 text-[#333333]">{education.degree}</span>
              </p>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <SectionLabel>Technical Skills</SectionLabel>
          <div className="mt-2.5 space-y-[3px]">
            {skills.map((cat) => (
              <p key={cat.category} className="text-[11px] leading-[17px]">
                <span className="font-semibold text-[#1a1a1a]">
                  {cat.category}:{" "}
                </span>
                {cat.items.map((s) => s.name).join(", ")}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
});

export default ResumeDoc;
