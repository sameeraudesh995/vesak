const FOOTER_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About Vesak' },
  { href: '#timeline', label: 'Life of Buddha' },
  { href: '#teachings', label: 'Teachings' },
  { href: '#meditation', label: 'Meditate' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: '#060503',
        borderTop: '1px solid rgba(201,168,76,0.12)',
        padding: '3.5rem 2rem 2rem',
        textAlign: 'center',
      }}
    >
      <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>🪷</span>

      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '1.05rem',
          color: 'rgba(240,220,190,0.55)',
          marginBottom: '2rem',
          maxWidth: '400px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        "May all beings be happy. May all beings be free from suffering."
      </p>

      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
          listStyle: 'none',
          padding: 0,
        }}
      >
        {FOOTER_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '0.62rem',
                letterSpacing: '0.1em',
                color: 'rgba(240,220,190,0.4)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--gold-light)' }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(240,220,190,0.4)' }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <p
        style={{
          fontSize: '0.78rem',
          color: 'rgba(240,220,190,0.25)',
          fontFamily: 'Cinzel, serif',
          letterSpacing: '0.05em',
        }}
      >
        ☸ VESAK — Celebrating the Light Within · May Peace Prevail
      </p>
    </footer>
  )
}
