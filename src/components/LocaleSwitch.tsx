import { useLocale } from '../locale-context'
import type { Locale } from '../locale'

const options: { id: Locale; label: string }[] = [
  { id: 'uk', label: 'UA' },
  { id: 'en', label: 'EN' },
]

export function LocaleSwitch() {
  const { locale, setLocale, copy } = useLocale()

  return (
    <div className="locale-switch" role="group" aria-label={copy.locale.group}>
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className="locale-switch__btn"
          aria-pressed={locale === option.id}
          onClick={() => setLocale(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
