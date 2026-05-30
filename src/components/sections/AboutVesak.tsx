'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ABOUT_CARDS } from '@/lib/data'

export default function AboutVesak() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="about"
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, var(--deep) 0%, #120D05 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="THE SACRED OCCASION" title="The Three" titleEm="Wonders of Vesak" />

        <div ref={ref} className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {ABOUT_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden cursor-default p-10"
              style={{
                border: '1px solid rgba(201,168,76,0.15)',
                background: 'rgba(255,255,255,0.02)',
                transition: 'border-color 0.4s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(201,168,76,0.4)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(201,168,76,0.15)'
              }}
            >
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1.2rem' }}>
                {card.glyph}
              </span>
              <h3
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.85rem',
                  letterSpacing: '0.12em',
                  color: 'var(--gold-light)',
                  marginBottom: '0.8rem',
                }}
              >
                {card.title}
              </h3>
              <p style={{ color: 'rgba(240,220,190,0.7)', fontSize: '0.95rem' }}>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
