import { useLocale } from "../locale-context";
import type { Locale } from "../locale";

const options: { id: Locale; label: string }[] = [
  { id: "uk", label: "UA" },
  { id: "en", label: "EN" },
];

export function LocaleSwitch() {
  const { locale, setLocale, copy } = useLocale();

  return (
    <div
      className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] p-1 shadow-sm"
      role="group"
      aria-label={copy.locale.group}
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className={`min-h-9 min-w-11 rounded-full border-0 px-2 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
            locale === option.id
              ? "bg-[var(--accent)] text-[var(--accent-text)] shadow-sm"
              : "bg-transparent text-[var(--text-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
          }`}
          aria-pressed={locale === option.id}
          onClick={() => setLocale(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
