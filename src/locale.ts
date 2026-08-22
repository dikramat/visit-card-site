export type Locale = 'uk' | 'en'

export const LOCALE_STORAGE_KEY = 'locale'
export const DEFAULT_LOCALE: Locale = 'uk'

export function isLocale(value: string | null): value is Locale {
  return value === 'uk' || value === 'en'
}

export function getStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (isLocale(stored)) {
      return stored
    }
  } catch {
    // localStorage can throw in private mode
  }

  return DEFAULT_LOCALE
}

export function applyLocale(locale: Locale): void {
  document.documentElement.lang = locale
}

export function persistLocale(locale: Locale): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    // ignore quota / privacy errors
  }
}

function setMeta(name: string, content: string, property = false): void {
  const selector = property
    ? `meta[property="${name}"]`
    : `meta[name="${name}"]`
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    if (property) {
      el.setAttribute('property', name)
    } else {
      el.setAttribute('name', name)
    }
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function applyMeta(title: string, description: string): void {
  document.title = title
  setMeta('description', description)
  setMeta('og:title', title, true)
  setMeta('og:description', description, true)
}
