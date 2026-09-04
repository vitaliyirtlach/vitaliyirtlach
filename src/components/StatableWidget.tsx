import { useEffect, useRef } from "react";

// Statable mini-widget renders itself where its script tag lives,
// so the script is injected into this container on the client.
export default function StatableWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.childElementCount > 0) return;
    const script = document.createElement("script");
    script.src = "https://statable.com/js/c9i51E3bDF/mw.js";
    script.async = true;
    script.setAttribute("data-id", "3298988");
    script.setAttribute("data-period", "90d");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-ocean-color", "#FFFFFF0D");
    script.setAttribute("data-outer-radius", "0");
    el.appendChild(script);
    return () => {
      el.replaceChildren();
    };
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div ref={ref} className="min-h-6" />
      <p className="text-center text-xs text-foreground-quaternary">
        Analytics by{" "}
        <a
          href="https://statable.com"
          target="_blank"
          rel="noreferrer"
          className="text-foreground-tertiary transition-colors hover:text-foreground"
        >
          Statable
        </a>
      </p>
    </div>
  );
}
