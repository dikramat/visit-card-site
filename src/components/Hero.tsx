import { getInitials } from "../content";
import { useLocale } from "../locale-context";

export function Hero() {
  const { copy } = useLocale();

  return (
    <section
      className="relative grid min-h-[min(36rem,68svh)] items-center overflow-hidden border-b border-[var(--border)] bg-[linear-gradient(90deg,color-mix(in_srgb,var(--bg)_98%,transparent)_0%,color-mix(in_srgb,var(--bg)_88%,transparent)_44%,transparent_78%),url('https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=1500&q=85')] bg-cover bg-center px-[clamp(1.5rem,7vw,5.5rem)] py-[clamp(2.5rem,7vw,5.5rem)] max-[479px]:min-h-[31rem]"
      id="top"
      aria-labelledby="hero-name"
    >
      <div
        className="absolute bottom-[8%] right-[8%] z-[1] grid size-[4.5rem] place-items-center rounded-full border border-[var(--accent)] bg-[color-mix(in_srgb,var(--bg)_68%,transparent)] font-serif text-[var(--accent)]"
        aria-hidden="true"
      >
        {getInitials(copy.name)}
      </div>
      <div className="relative z-[1] max-w-[34rem]">
        <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
          {copy.role}
        </p>
        <h1 id="hero-name">{copy.name}</h1>
        <p className="mt-5 max-w-[38ch] text-[var(--text-muted)]">
          {copy.tagline}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-xs font-bold text-[var(--accent-text)] no-underline"
            href="#contacts"
          >
            {copy.actions.contact}
          </a>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--accent)] px-5 py-3 text-xs font-bold text-[var(--accent)] no-underline hover:bg-[var(--accent-soft)]"
            href="#about"
          >
            {copy.actions.more}
          </a>
        </div>
      </div>
    </section>
  );
}
