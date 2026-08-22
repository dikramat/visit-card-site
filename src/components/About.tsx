import { useLocale } from "../locale-context";
import { InfoList, Panel, Section } from "./ui/Layout";

export function About() {
  const { copy } = useLocale();

  return (
    <Section id="about" title={copy.aboutTitle} titleId="about-title">
      {copy.about.map((text: string) => (
        <p key={text}>{text}</p>
      ))}
      <Panel title={copy.trustTitle}>
        <InfoList items={copy.credentials} />
      </Panel>
    </Section>
  );
}
