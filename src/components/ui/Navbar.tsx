'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#timeline', label: 'Journey' },
  { href: '#teachings', label: 'Teachings' },
  { href: '#gallery', label: 'Traditions' },
  { href: '#quotes', label: 'Wisdom' },
  { href: '#meditation', label: 'Meditate' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[900] flex justify-between items-center transition-all duration-400"
      style={{
        padding: scrolled ? '0.6rem 3rem' : '1rem 3rem',
        background: scrolled ? 'rgba(13,11,7,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.8 }}
    >
      <a
        href="#"
        style={{
          fontFamily: 'Cinzel, serif',
          fontSize: '1.1rem',
          color: 'var(--gold-light)',
          letterSpacing: '0.15em',
          textDecoration: 'none',
        }}
      >
        ☸ VESAK
      </a>

      <ul className="flex gap-10 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '0.7rem',
                color: 'rgba(240,224,204,0.7)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--gold-light)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,224,204,0.7)')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
