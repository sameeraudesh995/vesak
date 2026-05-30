'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const LANTERNS = [
  { left: '8%', top: '20%', size: '2rem', duration: 5, delay: 0 },
  { left: '82%', top: '15%', size: '1.6rem', duration: 6.5, delay: 1 },
  { left: '15%', top: '65%', size: '1.4rem', duration: 4.5, delay: 2 },
  { left: '88%', top: '60%', size: '1.8rem', duration: 7, delay: 0.5 },
  { left: '50%', top: '10%', size: '1.2rem', duration: 5.5, delay: 1.5 },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const ctx = cv.getContext('2d')!
    let animId: number

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * 1600,
      y: Math.random() * 900,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.5 + 0.2),
      r: Math.random() * 2 + 0.5,
      op: Math.random(),
    }))

    function resize() {
      if (!cv) return
      cv.width = cv.offsetWidth
      cv.height = cv.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      if (!cv || !ctx) return
      ctx.clearRect(0, 0, cv.width, cv.height)
      const W = cv.width, H = cv.height
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc((p.x / 1600) * W, (p.y / 900) * H, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(240,210,100,${p.op})`
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        p.op += 0.005 * (Math.random() - 0.5)
        p.op = Math.max(0, Math.min(0.9, p.op))
        if (p.y < -10) p.y = 910
        if (p.x < 0) p.x = 1600
        if (p.x > 1600) p.x = 0
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 30%, #3B2204 0%, #1A0E04 40%, #0D0B07 100%)' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Floating lanterns */}
      {LANTERNS.map((l, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: l.left, top: l.top, fontSize: l.size, opacity: 0.7 }}
          animate={{ y: [0, -20, 0], rotate: [0, 3, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: l.duration, delay: l.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          🏮
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 text-center max-w-3xl px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <p
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '0.7rem',
            letterSpacing: '0.35em',
            color: 'var(--saffron-light)',
            marginBottom: '1.5rem',
            opacity: 0.9,
          }}
        >
          VESAK · WESAK · BUDDHA PURNIMA
        </p>

        <h1
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            fontWeight: 300,
            lineHeight: 1.15,
            color: 'var(--cream)',
            marginBottom: '1.5rem',
          }}
        >
          Celebrating the{' '}
          <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Birth</em>,{' '}
          Enlightenment,
          <br />
          and Passing of{' '}
          <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Lord Buddha</em>
        </h1>

        <p
          style={{
            fontSize: '1.05rem',
            color: 'rgba(240,220,190,0.75)',
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
            fontStyle: 'italic',
          }}
        >
          Discover the timeless wisdom, compassion, and teachings that continue to inspire millions around the world.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <motion.a
            href="#about"
            className="btn-clip px-9 py-3 no-underline"
            style={{
              background: 'linear-gradient(135deg, var(--saffron), var(--gold))',
              color: 'var(--deep)',
              fontFamily: 'Cinzel, serif',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
            }}
            whileHover={{ y: -2, boxShadow: '0 8px 30px rgba(232,132,26,0.4)' }}
          >
            Learn More
          </motion.a>
          <motion.a
            href="#teachings"
            className="btn-clip px-9 py-3 no-underline"
            style={{
              background: 'transparent',
              color: 'var(--gold-light)',
              fontFamily: 'Cinzel, serif',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              border: '1px solid rgba(201,168,76,0.5)',
            }}
            whileHover={{ background: 'rgba(201,168,76,0.1)', borderColor: 'var(--gold-light)' }}
          >
            Explore Teachings
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
