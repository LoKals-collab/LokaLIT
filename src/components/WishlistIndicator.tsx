"use client";

import { useWishlistCount } from "@/lib/wishlist";
import { useI18n } from "@/lib/i18n";

export default function WishlistIndicator() {
  const { t } = useI18n();
  const count = useWishlistCount();

  if (count === 0) return null;

  const label = `${t.wishlist.navLabel}: ${count}`;

  return (
    <span
      className="flex items-center gap-1 rounded-full bg-ember/10 px-2.5 py-1 text-xs font-semibold text-ember"
      role="status"
      aria-label={label}
      title={label}
    >
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 20.727c-.4 0-.787-.148-1.086-.416C7.14 17.09 3.5 13.36 3.5 9.485 3.5 6.55 5.79 4.25 8.7 4.25c1.6 0 3.09.75 4.05 1.98.19.24.53.24.72 0 .96-1.23 2.45-1.98 4.05-1.98 2.91 0 5.2 2.3 5.2 5.235 0 3.875-3.64 7.605-7.634 10.826-.3.268-.686.416-1.086.416Z" />
      </svg>
      {count}
    </span>
  );
}
