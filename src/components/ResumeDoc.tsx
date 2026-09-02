import { forwardRef } from "react";
import { education, experience, profile, skills } from "@/data/profile";

// Hidden A4-width document rendered from the same data as the page.
// html2pdf.js rasterizes this node into the downloadable Resume.pdf.
const ResumeDoc = forwardRef<HTMLDivElement>(function ResumeDoc(_, ref) {
  return (
    <div className="pointer-events-none fixed -left-[2000px] top-0" aria-hidden="true">
      <div
        ref={ref}
        className="w-[794px] bg-white px-12 py-10 font-sans text-[#171717]"
      >
        <header className="flex items-center justify-between border-b border-[#e7e7e7] pb-5">
          <div>
            <h1 className="text-[26px] font-semibold tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-0.5 text-[14px] text-[#525252]">{profile.title}</p>
          </div>
          <div className="text-right text-[11.5px] leading-5 text-[#525252]">
            <p>{profile.location} · Remote</p>
            <p>{profile.email} · t.me/vitaliyirtlach</p>
            <p>github.com/vitaliyirtlach · linkedin.com/in/vitaliyirtlach</p>
          </div>
        </header>

        <section className="mt-5">
          <p className="text-[12.5px] leading-[19px] text-[#404040]">
            Fullstack JavaScript engineer with 5 years of experience building
            web and mobile products for startups and commercial platforms.
            Currently working on Ito (AI code review that runs your code) and
            building web analytics at Statable.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#171717]">
            Experience
          </h2>
          <div className="mt-3 space-y-4">
            {experience.map((e) => (
              <div key={e.company}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-[13.5px] font-semibold">
                    {e.company}
                    <span className="font-normal text-[#525252]">
                      {" "}
                      — {e.role}
                    </span>
                  </p>
                  <p className="shrink-0 text-[11.5px] text-[#737373]">
                    {e.period} · {e.location}
                  </p>
                </div>
                <ul className="mt-1.5 list-disc space-y-1 pl-4">
                  {e.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-[12px] leading-[18px] text-[#404040]"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#171717]">
            Skills
          </h2>
          <div className="mt-3 space-y-1.5">
            {skills.map((cat) => (
              <p key={cat.category} className="text-[12px] leading-[18px]">
                <span className="font-semibold">{cat.category}: </span>
                <span className="text-[#404040]">
                  {cat.items.map((s) => s.name).join(", ")}
                </span>
              </p>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#171717]">
            Education
          </h2>
          <div className="mt-3 flex items-baseline justify-between gap-4">
            <p className="text-[13.5px] font-semibold">
              {education.school}
              <span className="font-normal text-[#525252]">
                {" "}
                — {education.degree}
              </span>
            </p>
            <p className="shrink-0 text-[11.5px] text-[#737373]">
              {education.period}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
});

export default ResumeDoc;
