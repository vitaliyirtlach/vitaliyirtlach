import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  label: string;
  children: ReactNode;
};

// The bubble renders through a portal with fixed positioning so it is never
// clipped by overflow-hidden ancestors (the collapsible skill rows).
// Positioning (centered above the anchor) lives on a static wrapper, while
// framer-motion animates an inner element — the two transforms must not share
// one element or the animation would overwrite the centering.
export default function Tooltip({ label, children }: Props) {
  const [pos, setPos] = useState<{ x: number; y: number; arrow: number } | null>(
    null
  );
  const [mounted, setMounted] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => setMounted(true), []);
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const place = useCallback(() => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    // Keep the bubble inside the viewport; the arrow keeps pointing at the anchor.
    const anchorX = rect.left + rect.width / 2;
    const margin = 142; // max-w-[260px] / 2 + breathing room
    const x = Math.min(Math.max(anchorX, margin), window.innerWidth - margin);
    setPos({ x, y: rect.top - 10, arrow: anchorX - x });
  }, []);

  const show = useCallback(
    (delay: number) => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(place, delay);
    },
    [place]
  );

  const hide = useCallback(() => {
    clearTimeout(timerRef.current);
    setPos(null);
  }, []);

  useEffect(() => {
    if (!pos) return;
    window.addEventListener("scroll", hide, { passive: true });
    return () => window.removeEventListener("scroll", hide);
  }, [pos, hide]);

  return (
    <span
      ref={wrapRef}
      onMouseEnter={() => show(150)}
      onMouseLeave={hide}
      onFocus={() => show(0)}
      onBlur={hide}
      className="inline-flex"
    >
      {children}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {pos && (
              <span
                className="pointer-events-none fixed z-50 block -translate-x-1/2 -translate-y-full"
                style={{ left: pos.x, top: pos.y }}
              >
                <motion.span
                  role="tooltip"
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.97 }}
                  transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="relative block w-max max-w-[260px] rounded-[10px] bg-[#1c1c1c] px-3 py-2 text-center text-xs font-medium leading-[17px] text-white shadow-[0_10px_30px_-6px_rgba(0,0,0,0.3)]"
                >
                  {label}
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="6"
                    viewBox="0 0 14 6"
                    className="absolute top-full -mt-px -translate-x-1/2 text-[#1c1c1c]"
                    style={{ left: `calc(50% + ${pos.arrow}px)` }}
                  >
                    <path
                      d="M0 0h14L8.45 4.87a2.2 2.2 0 0 1-2.9 0L0 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.span>
              </span>
            )}
          </AnimatePresence>,
          document.body
        )}
    </span>
  );
}
