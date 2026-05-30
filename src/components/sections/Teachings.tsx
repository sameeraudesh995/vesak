'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TEACHINGS } from '@/lib/data'

export default function Teachings() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="teachings"
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #0F0A04, var(--deep))',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="THE DHAMMA" title="Core" titleEm="Teachings" />

        <div
          ref={ref}
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
        >
          {TEACHINGS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden p-8"
              style={{
                background: 'rgba(201,168,76,0.04)',
                border: '1px solid rgba(201,168,76,0.1)',
                transition: 'all 0.4s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = 'rgba(201,168,76,0.07)'
                el.style.borderColor = 'rgba(201,168,76,0.3)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = 'rgba(201,168,76,0.04)'
                el.style.borderColor = 'rgba(201,168,76,0.1)'
              }}
            >
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>
                {card.icon}
              </span>
              <h3
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.78rem',
                  letterSpacing: '0.1em',
                  color: 'var(--gold-light)',
                  marginBottom: '0.6rem',
                }}
              >
                {card.title}
              </h3>
              <p style={{ color: 'rgba(240,220,190,0.65)', fontSize: '0.88rem' }}>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
