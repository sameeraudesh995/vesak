'use client'

import { useEffect, useRef } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TIMELINE_ITEMS } from '@/lib/data'

export default function Timeline() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.2 }
    )
    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="timeline" style={{ padding: '6rem 2rem', background: '#0F0A04' }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="THE SACRED JOURNEY" title="Life of" titleEm="Lord Buddha" />

        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
            style={{
              width: '1px',
              background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.4) 10%, rgba(201,168,76,0.4) 90%, transparent)',
            }}
          />

          {TIMELINE_ITEMS.map((item, i) => {
            const isRight = i % 2 !== 0
            return (
              <div
                key={item.title}
                ref={(el) => { itemRefs.current[i] = el }}
                className={`tl-item flex items-start gap-10 mb-12 ${isRight ? 'flex-row-reverse text-right' : ''}`}
              >
                {/* Dot */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 mt-2"
                  style={{
                    background: 'radial-gradient(circle, var(--saffron) 0%, var(--maroon-mid) 100%)',
                    border: '2px solid var(--gold)',
                    boxShadow: '0 0 20px rgba(232,132,26,0.3)',
                  }}
                >
                  {item.glyph}
                </div>

                {/* Content */}
                <div
                  className="flex-1 p-6"
                  style={{
                    border: '1px solid rgba(201,168,76,0.12)',
                    background: 'rgba(255,255,255,0.015)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontStyle: 'italic',
                      fontSize: '0.8rem',
                      color: 'var(--saffron-light)',
                      opacity: 0.8,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {item.year}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'Cinzel, serif',
                      fontSize: '0.8rem',
                      letterSpacing: '0.1em',
                      color: 'var(--gold-light)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: 'rgba(240,220,190,0.65)', fontSize: '0.9rem' }}>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
