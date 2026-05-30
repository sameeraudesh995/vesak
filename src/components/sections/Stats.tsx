'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { STATS } from '@/lib/data'

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / 60
    const timer = setInterval(() => {
      start = Math.min(start + step, target)
      setVal(Math.round(start))
      if (start >= target) clearInterval(timer)
    }, 25)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', fontWeight: 300, color: 'var(--gold-light)', display: 'block', lineHeight: 1 }}>
      {val.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section id="stats" style={{ padding: 0 }}>
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1px',
          background: 'rgba(201,168,76,0.1)',
        }}
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="text-center"
            style={{
              background: 'var(--deep2)',
              padding: '3rem 2rem',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(201,168,76,0.04)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'var(--deep2)' }}
          >
            <CountUp target={stat.value} suffix={stat.suffix} />
            <span
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                color: 'rgba(240,220,190,0.55)',
                marginTop: '0.5rem',
                display: 'block',
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
