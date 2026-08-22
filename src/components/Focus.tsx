import { useLocale } from "../locale-context";

export function Focus() {
  const { copy } = useLocale();

  return (
    <section className="section" aria-labelledby="focus-title">
      <h2 id="focus-title">{copy.focusTitle}</h2>
      <div className="work-details" id="focus">
        <div className="work-panel">
          <h3>{copy.formatTitle}</h3>
          <ul>
            {copy.format.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="work-panel">
          <h3>{copy.boundariesTitle}</h3>
          <ul>
            {copy.boundaries.map((boundary) => (
              <li key={boundary}>{boundary}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="focus">
        {copy.focus.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
