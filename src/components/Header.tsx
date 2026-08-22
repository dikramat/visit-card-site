import { useLocale } from "../locale-context";
import { LocaleSwitch } from "./LocaleSwitch";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const { copy } = useLocale();

  return (
    <header className="sticky top-0 z-10 grid min-h-[var(--header-h)] grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] px-4 py-3 backdrop-blur-xl min-[720px]:grid-cols-[auto_minmax(0,1fr)_auto] min-[720px]:gap-x-8 min-[720px]:px-8">
      <a
        className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap font-semibold no-underline hover:text-[var(--accent)] max-[479px]:col-start-1 max-[479px]:row-start-1 max-[479px]:text-sm"
        href="#top"
      >
        {copy.name}
      </a>
      <nav
        className="col-span-full flex flex-wrap gap-x-4 gap-y-2 min-[720px]:col-auto min-[720px]:justify-center max-[479px]:col-span-full max-[479px]:row-start-2 max-[479px]:w-full max-[479px]:justify-between max-[479px]:gap-1"
        aria-label={copy.nav.sections}
      >
        <a
          className="inline-flex min-h-11 items-center text-[var(--text-muted)] no-underline hover:text-[var(--accent)] min-[720px]:min-h-0"
          href="#about"
        >
          {copy.nav.about}
        </a>
        <a
          className="inline-flex min-h-11 items-center text-[var(--text-muted)] no-underline hover:text-[var(--accent)] min-[720px]:min-h-0"
          href="#focus"
        >
          {copy.nav.focus}
        </a>
        <a
          className="inline-flex min-h-11 items-center text-[var(--text-muted)] no-underline hover:text-[var(--accent)] min-[720px]:min-h-0"
          href="#contacts"
        >
          {copy.nav.contacts}
        </a>
      </nav>
      <div className="flex shrink-0 items-center gap-2 max-[479px]:col-start-2 max-[479px]:row-start-1 max-[479px]:justify-self-end">
        <LocaleSwitch />
        <ThemeToggle />
      </div>
    </header>
  );
}
