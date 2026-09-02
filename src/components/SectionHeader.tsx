import { IconSelector } from "@tabler/icons-react";

type Props = {
  title: string;
  id?: string;
  expanded?: boolean;
  onToggle?: () => void;
  controls?: string;
};

export default function SectionHeader({ title, id, expanded, onToggle, controls }: Props) {
  return (
    <div className="flex items-center justify-between">
      <h2 id={id}>{title}</h2>
      {onToggle && (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={controls}
          className="-mr-2.5 inline-flex h-7 select-none items-center gap-1 rounded-lg px-2.5 text-[13px] font-medium text-foreground-secondary transition-colors hover:bg-muted hover:text-foreground active:scale-[0.97]"
        >
          {expanded ? "See less" : "See more"}
          <IconSelector className="size-3.5" stroke={2} aria-hidden />
        </button>
      )}
    </div>
  );
}
