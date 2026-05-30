import { ReactNode } from 'react'

interface SectionHeaderProps {
  label: string
  title: string
  titleEm?: string
  titleEmBefore?: boolean
}

export function SectionHeader({ label, title, titleEm, titleEmBefore }: SectionHeaderProps) {
  return (
    <div className="text-center mb-14">
      <p
        style={{
          fontFamily: 'Cinzel, serif',
          fontSize: '0.65rem',
          letterSpacing: '0.35em',
          color: 'var(--saffron-light)',
          marginBottom: '0.8rem',
          opacity: 0.9,
        }}
      >
        {label}
      </p>
      <h2
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2rem,4vw,3.2rem)',
          fontWeight: 300,
          color: 'var(--cream)',
          marginBottom: '1rem',
        }}
      >
        {titleEmBefore ? (
          <>
            <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>{titleEm}</em> {title}
          </>
        ) : (
          <>
            {title} <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>{titleEm}</em>
          </>
        )}
      </h2>
      <div
        style={{
          width: '80px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
          margin: '0 auto',
        }}
      />
    </div>
  )
}
