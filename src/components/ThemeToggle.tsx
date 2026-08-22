import { useTheme } from '../hooks/useTheme'
import { useLocale } from '../locale-context'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { copy } = useLocale()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? copy.theme.toLight : copy.theme.toDark}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? '☀' : '☾'}
      </span>
      <span className="theme-toggle__label">
        {isDark ? copy.theme.light : copy.theme.dark}
      </span>
    </button>
  )
}
