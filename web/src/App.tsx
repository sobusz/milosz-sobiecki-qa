import { useEffect, useState } from 'react'
import { CodeSnippet } from './components/CodeSnippet'
import { LINKS, copy, snippets, stack, type Locale } from './content'

const STORAGE_KEY = 'ms-locale'

function readLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'pl' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('pl') ? 'pl' : 'en'
}

export default function App() {
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    setLocale(readLocale())
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = 'Miłosz Sobiecki QA Services'
    localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const t = copy[locale]

  const setLang = (next: Locale) => {
    setLocale(next)
  }

  const contact = (
    <>
      <a className="btn btn-solid" href={LINKS.cv} download>
        {t.hero.cv}
      </a>
      <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a className="btn" href={`mailto:${LINKS.email}`}>
        {t.hero.mail}
      </a>
    </>
  )

  return (
    <div className="page">
      <div className="grain" aria-hidden="true" />

      <header className="nav">
        <a className="mark" href="#top">
          MS
        </a>
        <nav>
          <a href="#about">{t.nav.about}</a>
          <a href="#stack">{t.nav.stack}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#code">{t.nav.code}</a>
          <a href="#work">{t.nav.project}</a>
        </nav>
        <div className="lang" role="group" aria-label={t.langLabel}>
          <button
            type="button"
            className={locale === 'pl' ? 'is-on' : ''}
            onClick={() => setLang('pl')}
          >
            PL
          </button>
          <button
            type="button"
            className={locale === 'en' ? 'is-on' : ''}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <h1>{t.hero.name}</h1>
          <p className="lede">{t.hero.line}</p>
          <ul className="facts">
            <li>{t.hero.location}</li>
            <li>{t.hero.languages}</li>
          </ul>
          <div className="actions">{contact}</div>
        </section>

        <section id="about" className="block">
          <div className="index">01</div>
          <div>
            <h2>{t.about.title}</h2>
            {t.about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section id="stack" className="block">
          <div className="index">02</div>
          <div>
            <h2>{t.stackTitle}</h2>
            <ul className="chips">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className="block">
          <div className="index">03</div>
          <div>
            <h2>{t.experienceTitle}</h2>
            <ol className="timeline">
              {t.roles.map((role) => (
                <li key={`${role.company}-${role.dates}`}>
                  <div className="when">{role.dates}</div>
                  <div>
                    <strong>{role.company}</strong>
                    <span className="role">{role.role}</span>
                    <span className="quiet">{role.meta}</span>
                    <p className="summary">{role.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="code" className="block">
          <div className="index">04</div>
          <div className="block-wide">
            <h2>{t.snippets.title}</h2>
            <div className="snippet-grid">
              {snippets.map((snippet, index) => (
                <article className="case" id={snippet.id} key={snippet.id}>
                  <header className="case-head">
                    <span className="case-num">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{snippet.title[locale]}</h3>
                      <p>{snippet.body[locale]}</p>
                    </div>
                  </header>
                  <CodeSnippet
                    file={snippet.file}
                    note={snippet.note[locale]}
                    lines={snippet.lines}
                    locale={locale}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="block">
          <div className="index">05</div>
          <div>
            <h2>{t.project.title}</h2>
            <article className="project">
              <div className="project-top">
                <h3>{t.project.name}</h3>
              </div>
              <p>{t.project.body}</p>
              <ul className="chips chips-tight">
                {t.project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer className="foot">
        <span>{t.footer}</span>
        <div className="actions actions-foot">{contact}</div>
      </footer>
    </div>
  )
}
