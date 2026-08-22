import { useLocale } from "../locale-context";
import { InfoList, Panel, Section } from "./ui/Layout";
import { detailItemClassName } from "./ui/classes";

export function Focus() {
  const { copy } = useLocale();

  return (
    <Section id="focus" title={copy.focusTitle} titleId="focus-title">
      <div className="grid items-stretch gap-3 min-[720px]:grid-cols-2">
        <Panel title={copy.formatTitle}>
          <ul className="m-0 grid list-none gap-2 p-0">
            {copy.format.map((item) => (
              <li
                className={`${detailItemClassName} border-b border-(--border) py-3 text-sm text-(--text-muted) first:pt-0 last:border-0 last:pb-0`}
                key={item.title}
              >
                <strong className="font-serif font-normal text-(--text)">
                  {item.title}
                </strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title={copy.boundariesTitle}>
          <InfoList items={copy.boundaries} />
        </Panel>
      </div>
      <ul className="grid grid-cols-2 gap-3 p-0 max-[479px]:grid-cols-1">
        {copy.focus.map((item) => (
          <li
            className="grid min-h-36 h-full gap-2 rounded-md border border-[color-mix(in_srgb,var(--text-muted)_32%,var(--bg))] bg-(--bg-elevated) p-5 hover:border-[color-mix(in_srgb,var(--accent)_68%,var(--border))]"
            key={item.title}
          >
            <strong className="font-serif text-lg font-normal text-(--text)">
              {item.title}
            </strong>
            <span className="text-sm text-(--text-muted)">{item.text}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
