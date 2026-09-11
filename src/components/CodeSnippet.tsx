import { useRef, useState, type MouseEvent } from 'react'
import type { Locale, SnippetLine } from '../content'

type Props = {
  file: string
  note: string
  lines: SnippetLine[]
  locale: Locale
}

function highlight(text: string) {
  if (!text) return '\u00a0'

  const parts: { type: 'code' | 'str' | 'kw' | 'cmt'; value: string }[] = []
  const commentIdx = text.indexOf('//')
  const code = commentIdx >= 0 ? text.slice(0, commentIdx) : text
  const comment = commentIdx >= 0 ? text.slice(commentIdx) : ''

  const tokenRe =
    /('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`)|\b(async|await|const|let|return|import|from|export|class|new|typeof|test|expect|true|false|null|function|if|filter|type|extends|useEffect)\b/g

  let last = 0
  let match: RegExpExecArray | null
  while ((match = tokenRe.exec(code))) {
    if (match.index > last) {
      parts.push({ type: 'code', value: code.slice(last, match.index) })
    }
    if (match[1]) parts.push({ type: 'str', value: match[1] })
    else if (match[2]) parts.push({ type: 'kw', value: match[2] })
    last = match.index + match[0].length
  }
  if (last < code.length) parts.push({ type: 'code', value: code.slice(last) })
  if (comment) parts.push({ type: 'cmt', value: comment })

  return parts.map((part, i) => (
    <span key={i} className={`tok tok-${part.type}`}>
      {part.value}
    </span>
  ))
}

export function CodeSnippet({ file, note, lines, locale }: Props) {
  const frameRef = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState(false)
  const [lineIndex, setLineIndex] = useState<number | null>(null)
  const [scan, setScan] = useState(18)

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = frameRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const y = event.clientY - rect.top
    setScan(Math.min(Math.max(y, 8), rect.height - 8))
    const ratio = (event.clientY - rect.top) / rect.height
    const next = Math.min(lines.length - 1, Math.max(0, Math.floor(ratio * lines.length)))
    setLineIndex(next)
  }

  return (
    <article
      className={`snippet${hover ? ' is-hot' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false)
        setLineIndex(null)
      }}
    >
      <header className="snippet-bar">
        <span className="snippet-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="snippet-file">{file}</span>
      </header>
      <div
        ref={frameRef}
        className="snippet-frame"
        onMouseMove={onMove}
        tabIndex={0}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
      >
        <div className="snippet-scan" style={{ top: scan }} aria-hidden="true" />
        <pre>
          <code>
            {lines.map((line, i) => (
              <span
                key={i}
                className={[
                  'snippet-line',
                  line.reveal ? 'is-reveal' : '',
                  lineIndex === i ? 'is-active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <span className="gutter">{String(i + 1).padStart(2, '0')}</span>
                <span className="src">{highlight(line.text)}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>
      <p className="snippet-note">
        <span>{locale === 'pl' ? 'Nota' : 'Note'}</span>
        {note}
      </p>
    </article>
  )
}
