import type { ReactNode } from "react";
import {
  listClassName,
  listItemClassName,
  panelClassName,
  panelTitleClassName,
  sectionClassName,
  sectionContentClassName,
  sectionTitleClassName,
} from "./classes";

type SectionProps = {
  id: string;
  title: string;
  titleId: string;
  children: ReactNode;
};

export function Section({ id, title, titleId, children }: SectionProps) {
  return (
    <section className={sectionClassName} id={id} aria-labelledby={titleId}>
      <h2 className={sectionTitleClassName} id={titleId}>
        {title}
      </h2>
      <div className={sectionContentClassName}>{children}</div>
    </section>
  );
}

type PanelProps = {
  title: string;
  children: ReactNode;
};

export function Panel({ title, children }: PanelProps) {
  return (
    <div className={panelClassName}>
      <h3 className={panelTitleClassName}>{title}</h3>
      {children}
    </div>
  );
}

type InfoListProps = {
  items: string[];
};

export function InfoList({ items }: InfoListProps) {
  return (
    <ul className={listClassName}>
      {items.map((item) => (
        <li className={listItemClassName} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
