import { useLocale } from "../locale-context";

export function About() {
  const { copy } = useLocale();

  return (
    <section className="section" aria-labelledby="about-title">
      <h2 id="about-title">{copy.aboutTitle}</h2>
      <div className="section__body" id="about">
        {copy.about.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <div className="education-details">
          <h3>{copy.trustTitle}</h3>
          <ul>
            {copy.credentials.map((credential) => (
              <li key={credential}>{credential}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
