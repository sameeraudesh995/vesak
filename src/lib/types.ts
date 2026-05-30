export interface TimelineItem {
  glyph: string
  year: string
  title: string
  description: string
}

export interface TeachingCard {
  icon: string
  title: string
  description: string
}

export interface AboutCard {
  glyph: string
  title: string
  description: string
}

export interface StatItem {
  value: number
  suffix: string
  label: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface QuoteItem {
  text: string
  attribution: string
}

export interface GalleryItem {
  emoji: string
  label: string
  bg: string
}
