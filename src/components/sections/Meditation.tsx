'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

const BREATH_STEPS = ['Breathe in…', 'Hold gently…', 'Breathe out…', 'Rest in stillness…']

export default function Meditation() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % BREATH_STEPS.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="meditation"
      style={{ background: '#080604', padding: '7rem 2rem', textAlign: 'center' }}
    >
      <div className="max-w-2xl mx-auto">
        <SectionHeader label="INNER STILLNESS" title="A Moment of" titleEm="Meditation" />
        <p
          style={{
            color: 'rgba(240,220,190,0.55)',
            fontStyle: 'italic',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          Close your eyes. Breathe in with the lotus. Breathe out with the lotus. Let all things be as they are.
        </p>

        <div className="flex flex-col items-center gap-6 mt-12">
          {/* Breathing rings */}
          <div className="relative flex items-center justify-center" style={{ width: '240px', height: '240px' }}>
            {[0, 1, 2].map((ring) => (
              <motion.div
                key={ring}
                className="absolute rounded-full"
                style={{
                  inset: ring * -12,
                  border: ring === 0
                    ? '2px solid rgba(201,168,76,0.3)'
                    : ring === 1
                    ? '1px solid rgba(232,132,26,0.15)'
                    : '1px solid rgba(201,168,76,0.08)',
                }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: ring * 0.5,
                }}
              />
            ))}
            <motion.span
              style={{ fontSize: '3.5rem', position: 'relative', zIndex: 10 }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              🪷
            </motion.span>
          </div>

          <motion.p
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              color: 'rgba(240,220,190,0.6)',
              fontSize: '1rem',
            }}
          >
            {BREATH_STEPS[step]}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
