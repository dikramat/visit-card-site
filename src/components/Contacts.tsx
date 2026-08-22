import type { Contact } from "../content";
import { useLocale } from "../locale-context";

function ContactList({
  items,
  className,
}: {
  items: Contact[];
  className: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.id}>
          <a className="contact-card" href={item.href}>
            <span className="contact-card__label">{item.label}</span>
            <span className="contact-card__value">{item.value}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Contacts() {
  const { copy } = useLocale();

  return (
    <section className="section" aria-labelledby="contacts-title">
      <h2 id="contacts-title">{copy.contactsTitle}</h2>
      <p className="contacts-lead">{copy.contactsLead}</p>

      <div className="contacts-groups" id="contacts">
        <div>
          <h3 className="contacts-groups__title">{copy.directTitle}</h3>
          <ContactList
            items={copy.direct}
            className="contacts contacts--direct"
          />
        </div>
        <div>
          <h3 className="contacts-groups__title">{copy.socialTitle}</h3>
          <ContactList
            items={copy.social}
            className="contacts contacts--social"
          />
        </div>
      </div>
    </section>
  );
}
