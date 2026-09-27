import { Fragment } from "react";

// Bullet text lives in profile.ts as plain strings so the data stays readable.
// **Double asterisks** mark the phrases a recruiter scans for; this renders
// them bold instead of turning every bullet into JSX.
export default function Rich({
  text,
  strongClassName = "font-semibold",
}: {
  text: string;
  strongClassName?: string;
}) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className={strongClassName}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
