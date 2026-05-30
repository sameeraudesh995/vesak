'use client'

import Loader from '@/components/ui/Loader'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import AboutVesak from '@/components/sections/AboutVesak'
import Timeline from '@/components/sections/Timeline'
import Teachings from '@/components/sections/Teachings'
import Gallery from '@/components/sections/Gallery'
import Quotes from '@/components/sections/Quotes'
import Meditation from '@/components/sections/Meditation'
import Stats from '@/components/sections/Stats'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main>
        <Hero />
        <AboutVesak />
        <Timeline />
        <Teachings />
        <Gallery />
        <Quotes />
        <Meditation />
        <Stats />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
