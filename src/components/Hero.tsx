import { getInitials } from '../content'
import { useLocale } from '../locale-context'

export function Hero() {
  const { copy } = useLocale()

  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="hero__avatar" aria-hidden="true">
        {getInitials(copy.name)}
      </div>
      <div className="hero__copy">
        <p className="hero__role">{copy.role}</p>
        <h1 id="hero-name">{copy.name}</h1>
        <p className="hero__tagline">{copy.tagline}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#contacts">
            {copy.actions.contact}
          </a>
          <a className="button button--ghost" href="#about">
            {copy.actions.more}
          </a>
        </div>
      </div>
    </section>
  )
}
