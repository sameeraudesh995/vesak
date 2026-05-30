'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GALLERY_ITEMS } from '@/lib/data'

export default function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="gallery"
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, var(--deep), #0F0A04)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="SACRED TRADITIONS" title="Vesak" titleEm="Celebrations" />

        <div
          ref={ref}
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden group cursor-pointer"
              style={{
                aspectRatio: '1/1',
                border: '1px solid rgba(201,168,76,0.1)',
                transition: 'border-color 0.3s',
              }}
              whileHover={{ borderColor: 'rgba(201,168,76,0.4)' } as any}
            >
              <motion.div
                className="w-full h-full flex flex-col items-center justify-center text-6xl"
                style={{ background: item.bg }}
                whileHover={{ scale: 1.05, background: 'rgba(201,168,76,0.1)' } as any}
                transition={{ duration: 0.4 }}
              >
                {item.emoji}
              </motion.div>
              <div
                className="absolute bottom-0 left-0 right-0 p-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  color: 'var(--gold-light)',
                }}
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
