import { IconMapPin } from "@tabler/icons-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-border pt-6 text-[13px] text-foreground-tertiary">
      <p suppressHydrationWarning>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="flex items-center gap-1">
        <IconMapPin className="size-3.5" stroke={1.6} aria-hidden />
        {profile.location}
      </p>
    </footer>
  );
}
