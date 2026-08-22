import type { Locale } from "./locale";

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
  uk: {
    metaTitle: "Дарія Кравцова · психолог",
    metaDescription:
      "Дарія Кравцова — психолог та онлайн-консультант. Індивідуальна, парна та дитяча терапія.",
    name: "Дарія Кравцова",
    role: "Психолог · онлайн-консультант",
    tagline:
      "Допомагаю краще зрозуміти себе, впоратися з кризами та знайти опору у важливих змінах.",
    photoLabel: "Фото",
    aboutTitle: "Про мене",
    about: [
      "Працюю з дорослими, парами, дітьми та військовими. У консультаціях створюю уважний і безпечний простір для розмови про те, що справді важливо.",
      "Мій основний підхід — транзакційний аналіз. Також використовую арт-техніки та елементи когнітивно-поведінкової терапії, добираючи інструменти під запит людини.",
    ],
    formatTitle: "Як проходять зустрічі",
    format: [
      { title: "Формат", text: "Індивідуальна, парна та дитяча терапія" },
      { title: "Онлайн", text: "Консультації онлайн" },
      { title: "Мови", text: "Українська, російська та англійська" },
    ],
    focusTitle: "З чим працюю",
    focus: [
      {
        title: "Емоційне вигорання",
        text: "Дратівливість, виснаження, втрата сил і внутрішньої опори.",
      },
      {
        title: "Панічні атаки",
        text: "Пошук способів краще розуміти свої стани та повертати відчуття безпеки.",
      },
      {
        title: "Стосунки",
        text: "Сімейні та партнерські стосунки, самотність і побудова близькості.",
      },
      {
        title: "Самооцінка",
        text: "Самоідентифікація, самовизначення та усвідомлення власної цінності.",
      },
      {
        title: "Кризи та втрати",
        text: "Життєві кризи, переживання втрати й горя, зміни та адаптація.",
      },
      {
        title: "Ставлення до грошей",
        text: "Дослідження переконань, емоцій і поведінкових сценаріїв.",
      },
    ],
    boundariesTitle: "Важливо знати",
    boundaries: [
      "Не працюю з депресивними станами.",
      "Не працюю із суїцидальними намірами та спробами самогубства.",
    ],
    trustTitle: "Освіта та кваліфікація",
    credentials: [
      "КНУ імені Тараса Шевченка, факультет психології, випуск 2013 року",
      "Навчання з транзакційного аналізу в Українській та Європейській асоціаціях транзакційного аналізу",
      "Курси із сімейної та дитячої психології, психосоматики, психодіагностики особистості та психології в умовах війни",
    ],
    testimonials: [
      {
        quote: "Відгуки клієнтів з'являться тут після погодження публікації.",
        author: "",
      },
    ],
    contactsTitle: "Контакти",
    contactsLead:
      "Напишіть, щоб дізнатися більше про формат роботи та домовитися про консультацію.",
    hoursLabel: "Години відповіді",
    hoursValue: "Пн–Пт · за домовленістю",
    directTitle: "Запис на консультацію",
    socialTitle: "Соцмережі",
    direct: [
      { id: "phone", label: "Телефон", value: "Номер телефону", href: "#" },
      { id: "email", label: "Email", value: "email@example.com", href: "#" },
    ],
    social: [
      { id: "telegram", label: "Telegram", value: "@username", href: "#" },
      { id: "instagram", label: "Instagram", value: "@username", href: "#" },
      { id: "facebook", label: "Facebook", value: "Сторінка", href: "#" },
    ],
    nav: {
      about: "Про мене",
      focus: "Напрями",
      contacts: "Контакти",
      sections: "Секції",
    },
    actions: {
      contact: "Записатися",
      more: "Про підхід",
    },
    theme: {
      toLight: "Увімкнути світлу тему",
      toDark: "Увімкнути темну тему",
      light: "Світла",
      dark: "Темна",
    },
    locale: {
      group: "Мова",
    },
    footer: "Приватна практика",
  },
  en: {
    metaTitle: "Dariya Kravtsova · psychologist",
    metaDescription:
      "Dariya Kravtsova is a psychologist and online consultant offering individual, couples, and child therapy.",
    name: "Dariya Kravtsova",
    role: "Psychologist · online consultant",
    tagline:
      "I help people understand themselves, move through crises, and find support during important changes.",
    photoLabel: "Photo",
    aboutTitle: "About",
    about: [
      "I work with adults, couples, children, and military personnel. Sessions offer a thoughtful, safe space to talk about what truly matters.",
      "My main approach is Transactional Analysis. I also use art techniques and elements of CBT, choosing tools that fit each person's needs.",
    ],
    formatTitle: "How sessions work",
    format: [
      { title: "Format", text: "Individual, couples, and child therapy" },
      { title: "Sessions", text: "Online consultations" },
      { title: "Languages", text: "Ukrainian, Russian, and English" },
    ],
    focusTitle: "What I work with",
    focus: [
      {
        title: "Burnout",
        text: "Irritability, exhaustion, loss of energy, and inner support.",
      },
      {
        title: "Panic attacks",
        text: "Understanding difficult states and restoring a sense of safety.",
      },
      {
        title: "Relationships",
        text: "Family and partnership, loneliness, and building closeness.",
      },
      {
        title: "Self-esteem",
        text: "Self-identity, direction, and a sense of personal value.",
      },
      {
        title: "Crisis and loss",
        text: "Life crises, grief, loss, change, and adaptation.",
      },
      {
        title: "Money beliefs",
        text: "Exploring beliefs, emotions, and behavioral patterns.",
      },
    ],
    boundariesTitle: "Important to know",
    boundaries: [
      "I do not work with depressive states.",
      "I do not work with suicidal thoughts or suicide attempts.",
    ],
    trustTitle: "Education & qualifications",
    credentials: [
      "Taras Shevchenko National University of Kyiv, Psychology, 2013",
      "Transactional Analysis training with Ukrainian and European TA associations",
      "Additional training in family and child psychology, psychosomatics, personality assessment, and wartime psychology",
    ],
    testimonials: [
      {
        quote: "Client testimonials will appear here with permission.",
        author: "",
      },
    ],
    contactsTitle: "Contacts",
    contactsLead:
      "Get in touch to learn more about the format and arrange a consultation.",
    hoursLabel: "Reply hours",
    hoursValue: "Mon–Fri · by arrangement",
    directTitle: "Book a consultation",
    socialTitle: "Social",
    direct: [
      { id: "phone", label: "Phone", value: "Phone number", href: "#" },
      { id: "email", label: "Email", value: "email@example.com", href: "#" },
    ],
    social: [
      { id: "telegram", label: "Telegram", value: "@username", href: "#" },
      { id: "instagram", label: "Instagram", value: "@username", href: "#" },
      { id: "facebook", label: "Facebook", value: "Page", href: "#" },
    ],
    nav: {
      about: "About",
      focus: "Focus",
      contacts: "Contacts",
      sections: "Sections",
    },
    actions: {
      contact: "Book a session",
      more: "About the work",
    },
    theme: {
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
      light: "Light",
      dark: "Dark",
    },
    locale: {
      group: "Language",
    },
    footer: "Private practice",
  },
};
