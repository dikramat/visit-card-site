import type { Locale } from "./locale";
import { englishContent } from "./locales/content.en";
import { ukrainianContent } from "./locales/content.uk";

export type Contact = {
  id: string;
  label: string;
  value: string;
  href: string;
};

export type FocusItem = {
  title: string;
  text: string;
};

export type FormatItem = {
  title: string;
  text: string;
};

export type Testimonial = {
  quote: string;
  author: string;
};

export type SiteCopy = {
  metaTitle: string;
  metaDescription: string;
  name: string;
  role: string;
  tagline: string;
  photoLabel: string;
  aboutTitle: string;
  about: string[];
  formatTitle: string;
  format: FormatItem[];
  focusTitle: string;
  focus: FocusItem[];
  boundariesTitle: string;
  boundaries: string[];
  trustTitle: string;
  credentials: string[];
  testimonials: Testimonial[];
  contactsTitle: string;
  contactsLead: string;
  hoursLabel: string;
  hoursValue: string;
  directTitle: string;
  socialTitle: string;
  direct: Contact[];
  social: Contact[];
  nav: {
    about: string;
    focus: string;
    contacts: string;
    sections: string;
  };
  actions: {
    contact: string;
    more: string;
  };
  theme: {
    toLight: string;
    toDark: string;
    light: string;
    dark: string;
  };
  locale: {
    group: string;
  };
  footer: string;
};

export function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export const content: Record<Locale, SiteCopy> = {
  uk: ukrainianContent,
  en: englishContent,
};
