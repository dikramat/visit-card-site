import type { Contact } from "../content";
import { useLocale } from "../locale-context";
import { Section } from "./ui/Layout";

function ContactList({
  items,
  className,
}: {
  items: Contact[];
  className?: string;
}) {
  return (
    <ul className={`m-0 grid list-none gap-2 p-0 ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item.id}>
          <a
            className="grid min-h-11 gap-0.5 rounded-md border border-(--border) bg-(--bg-elevated) p-4 no-underline hover:border-(--accent)"
            href={item.href}
          >
            <span className="font-serif text-base">{item.label}</span>
            <span className="wrap-break-word text-sm text-(--text-muted)">
              {item.value}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Contacts() {
  const { copy } = useLocale();

  return (
    <Section id="contacts" title={copy.contactsTitle} titleId="contacts-title">
      <p className="text-(--text-muted)">{copy.contactsLead}</p>

      <div className="grid gap-6 min-[720px]:grid-cols-[1fr_1.35fr]">
        <div>
          <h3 className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-(--text-muted)">
            {copy.directTitle}
          </h3>
          <ContactList items={copy.direct} />
        </div>
        <div>
          <h3 className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-(--text-muted)">
            {copy.socialTitle}
          </h3>
          <ContactList
            items={copy.social}
            className="min-[480px]:grid-cols-2"
          />
        </div>
      </div>
    </Section>
  );
}
