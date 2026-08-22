import { useTheme } from "../hooks/useTheme";
import { useLocale } from "../locale-context";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { copy } = useLocale();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="relative inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 text-[var(--text)] hover:border-[var(--accent)] min-[720px]:min-w-auto"
      onClick={toggleTheme}
      aria-label={isDark ? copy.theme.toLight : copy.theme.toDark}
      aria-pressed={isDark}
    >
      <span className="text-base leading-none" aria-hidden="true">
        {isDark ? "☀" : "☾"}
      </span>
      <span className="absolute size-px overflow-hidden [clip:rect(0,0,0,0)] min-[720px]:static min-[720px]:size-auto min-[720px]:overflow-visible min-[720px]:[clip:auto]">
        {isDark ? copy.theme.light : copy.theme.dark}
      </span>
    </button>
  );
}
