import { useLocale } from '../locale-context'
import { LocaleSwitch } from './LocaleSwitch'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const { copy } = useLocale()

  return (
    <header className="site-header">
      <a className="site-header__brand" href="#top">
        {copy.name}
      </a>
      <nav className="site-header__nav" aria-label={copy.nav.sections}>
        <a href="#about">{copy.nav.about}</a>
        <a href="#focus">{copy.nav.focus}</a>
        <a href="#contacts">{copy.nav.contacts}</a>
      </nav>
      <div className="site-header__controls">
        <LocaleSwitch />
        <ThemeToggle />
      </div>
    </header>
  )
}
