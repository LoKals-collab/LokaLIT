"use client";

import { track } from "@vercel/analytics";
import { useSavedExperience } from "@/lib/wishlist";
import { useI18n } from "@/lib/i18n";

export default function SaveButton({
  experienceSlug,
  experienceName,
  className,
  iconClassName,
}: {
  experienceSlug: string;
  experienceName: string;
  className: string;
  iconClassName?: string;
}) {
  const { t } = useI18n();
  const { saved, toggle } = useSavedExperience(experienceSlug);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const nowSaved = toggle();
    track("experience_saved", { experience: experienceName, saved: nowSaved });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={saved}
      aria-label={saved ? t.wishlist.remove : t.wishlist.save}
      className={className}
    >
      <svg
        className={iconClassName ?? "h-5 w-5"}
        viewBox="0 0 24 24"
        fill={saved ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20.727c-.4 0-.787-.148-1.086-.416C7.14 17.09 3.5 13.36 3.5 9.485 3.5 6.55 5.79 4.25 8.7 4.25c1.6 0 3.09.75 4.05 1.98.19.24.53.24.72 0 .96-1.23 2.45-1.98 4.05-1.98 2.91 0 5.2 2.3 5.2 5.235 0 3.875-3.64 7.605-7.634 10.826-.3.268-.686.416-1.086.416Z"
        />
      </svg>
    </button>
  );
}
