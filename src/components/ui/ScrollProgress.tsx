'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[1000] h-[2px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, var(--saffron), var(--gold-light))',
      }}
    />
  )
}
