import type { SimpleIcon } from "simple-icons";

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
      <path d={icon.path} fill={colored ? `#${icon.hex}` : "currentColor"} />
    </svg>
  );
}
