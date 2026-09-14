import { useEffect, useState } from 'react'
import { CodeSnippet } from './components/CodeSnippet'
import { LINKS, copy, snippets, stack, type Locale } from './content'

const STORAGE_KEY = 'ms-locale'
const THEME_KEY = 'ms-theme'

type Theme = 'dark' | 'light'

function placeChipTip(event: { currentTarget: EventTarget }) {
  const li = event.currentTarget as HTMLElement
  const tip = li.querySelector<HTMLElement>('.chip-tip')
  if (!tip) return

  const pad = 12
  const maxWidth = Math.min(420, window.innerWidth - pad * 2)
  tip.style.maxWidth = `${maxWidth}px`
  tip.style.left = '0px'
  tip.style.top = '0px'

  const chip = li.getBoundingClientRect()
  const tw = tip.offsetWidth
  const th = tip.offsetHeight

  let left = chip.left
  if (left + tw > window.innerWidth - pad) {
    left = window.innerWidth - pad - tw
  }
  if (left < pad) left = pad

  let top = chip.top - th - 10
  if (top < pad) {
    top = chip.bottom + 10
  }
  if (top + th > window.innerHeight - pad) {
    top = Math.max(pad, window.innerHeight - pad - th)
  }

  tip.style.left = `${Math.round(left)}px`
  tip.style.top = `${Math.round(top)}px`
}

function readLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'pl' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('pl') ? 'pl' : 'en'
}

export default function App() {
  const [locale, setLocale] = useState<Locale>('en')
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )

  useEffect(() => {
    setLocale(readLocale())
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = 'Miłosz Sobiecki QA Services'
    localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

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
      <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">
        GitHub
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
        <div className="nav-tools">
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
          <div className="lang" role="group" aria-label={t.themeLabel}>
            <button
              type="button"
              className={theme === 'dark' ? 'is-on' : ''}
              onClick={() => setTheme('dark')}
            >
              Dark
            </button>
            <button
              type="button"
              className={theme === 'light' ? 'is-on' : ''}
              onClick={() => setTheme('light')}
            >
              Light
            </button>
          </div>
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
                <li
                  key={item.name}
                  tabIndex={0}
                  onMouseEnter={placeChipTip}
                  onFocus={placeChipTip}
                >
                  <span className="chip-label">{item.name}</span>
                  <span className="chip-tip" role="tooltip">
                    {item.blurb[locale]}
                  </span>
                </li>
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
                    <ul className="points">
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
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
            <p className="hint">{t.snippets.hint}</p>
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
            <h2>{t.projectsTitle}</h2>
            <div className="project-list">
              {t.projects.map((project) => (
                <a
                  className="project"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  key={project.name}
                >
                  <div className="project-top">
                    <h3>{project.name}</h3>
                    <span>{project.cta} →</span>
                  </div>
                  <p>{project.body}</p>
                  <ul className="chips chips-tight">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="actions actions-foot">{contact}</div>
      </footer>
    </div>
  )
}
