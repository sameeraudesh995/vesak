'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FAQS } from '@/lib/data'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" style={{ background: '#0D0B07', padding: '6rem 2rem' }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="QUESTIONS & ANSWERS" title="Common" titleEm="Questions" />

        <div className="max-w-2xl mx-auto">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: '1px solid rgba(201,168,76,0.12)', overflow: 'hidden' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center gap-4 text-left"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-cream)',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.05rem',
                  padding: '1.4rem 0',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--gold-light)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-cream)' }}
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    color: 'var(--gold)',
                    fontSize: '1.3rem',
                    flexShrink: 0,
                    fontFamily: 'serif',
                  }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p
                      style={{
                        color: 'rgba(240,220,190,0.65)',
                        fontSize: '0.9rem',
                        paddingBottom: '1.2rem',
                      }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
