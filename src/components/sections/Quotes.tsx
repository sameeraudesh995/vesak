'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QUOTES } from '@/lib/data'

export default function Quotes() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % QUOTES.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="quotes"
      style={{
        padding: '7rem 2rem',
        background: 'radial-gradient(ellipse at 50% 50%, #2A1505 0%, #0D0B07 70%)',
        textAlign: 'center',
      }}
    >
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
        ANCIENT WISDOM
      </p>
      <h2
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: 300,
          color: 'var(--cream)',
          marginBottom: '3rem',
        }}
      >
        Words of the{' '}
        <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Awakened</em>
      </h2>

      <div
        className="relative mx-auto"
        style={{ maxWidth: '680px', minHeight: '220px' }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '6rem',
                lineHeight: 0.5,
                color: 'var(--gold)',
                opacity: 0.3,
                marginBottom: '1.5rem',
              }}
            >
              "
            </div>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.3rem, 3vw, 1.9rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--cream)',
                lineHeight: 1.5,
                marginBottom: '1.5rem',
              }}
            >
              {QUOTES[current].text}
            </p>
            <p
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'var(--saffron-light)',
                opacity: 0.8,
              }}
            >
              — {QUOTES[current].attribution}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex gap-2 justify-center mt-10">
        {QUOTES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: i === current ? 'var(--gold)' : 'rgba(201,168,76,0.3)',
              border: 'none',
              cursor: 'pointer',
              transform: i === current ? 'scale(1.3)' : 'scale(1)',
              transition: 'all 0.3s',
            }}
          />
        ))}
      </div>
    </section>
  )
}
