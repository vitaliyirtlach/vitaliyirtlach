import type { SimpleIcon } from "simple-icons";

// Near-white brand colors (e.g. EditorConfig's #FEFEFE) are invisible on the
// white theme, so those fall back to a dark gray.
function visibleHex(hex: string): string {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.78 ? "#525252" : `#${hex}`;
}

export default function BrandIcon({
  icon,
  className,
  colored = false,
}: {
  icon: SimpleIcon;
  className?: string;
  colored?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={{ clipPath: "inset(0 round 18%)" }}
      aria-hidden="true"
    >
      <path
        d={icon.path}
        fill={colored ? visibleHex(icon.hex) : "currentColor"}
      />
    </svg>
  );
}
