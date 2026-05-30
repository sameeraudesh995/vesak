import type {
  TimelineItem, TeachingCard, AboutCard,
  StatItem, FAQItem, QuoteItem, GalleryItem
} from './types'

export const ABOUT_CARDS: AboutCard[] = [
  {
    glyph: '🌸',
    title: 'The Birth',
    description:
      'Prince Siddhartha Gautama was born in the Lumbini Garden under a full moon in 623 BCE. His arrival was accompanied by miraculous signs foretelling a great teacher who would illuminate the world.',
  },
  {
    glyph: '☸',
    title: 'The Enlightenment',
    description:
      'After six years of spiritual seeking, Siddhartha attained perfect enlightenment under the sacred Bodhi Tree in Bodh Gaya, becoming the Buddha — the Awakened One — and discovering the path to liberation.',
  },
  {
    glyph: '🕊️',
    title: 'The Parinirvana',
    description:
      'At the age of 80, having spread the Dhamma across the subcontinent, the Buddha passed into Parinirvana — final liberation — at Kushinagar, completing his extraordinary earthly journey.',
  },
]

export const TIMELINE_ITEMS: TimelineItem[] = [
  { glyph: '🌸', year: '623 BCE · Lumbini, Nepal', title: 'The Sacred Birth', description: 'Prince Siddhartha born to Queen Mahamaya and King Suddhodana. Seers prophesied he would become either a mighty king or a great spiritual teacher.' },
  { glyph: '👑', year: 'Teen years · Kapilavastu', title: 'The Palace Life', description: 'Raised in opulence, sheltered from suffering. He mastered all arts, married Yasodhara, and fathered son Rahula — yet felt a deep unease within.' },
  { glyph: '👁️', year: 'Age 29 · The City Roads', title: 'The Four Sights', description: 'Venturing beyond palace walls, Siddhartha witnessed old age, sickness, death, and a serene ascetic — transforming his perception of life forever.' },
  { glyph: '🚶', year: 'Age 29 · The Great Departure', title: 'The Great Renunciation', description: 'Leaving palace, family, and princely life behind in the silent night, Siddhartha set forth on the spiritual path seeking liberation for all beings.' },
  { glyph: '🌳', year: '588 BCE · Bodh Gaya', title: 'Enlightenment Under the Bodhi Tree', description: 'After 49 days of deep meditation, Siddhartha attained perfect enlightenment, understanding the true nature of existence and the path beyond suffering.' },
  { glyph: '🗣️', year: '588 BCE · Sarnath', title: 'The First Sermon', description: 'The Buddha delivered his first teaching — the Dhammacakkappavattana Sutta — to five ascetics, setting the Wheel of Dhamma in motion.' },
  { glyph: '☸', year: '45 years · Across India', title: 'The Spread of Dhamma', description: 'For 45 years the Buddha walked barefoot across the subcontinent, teaching kings and peasants alike, establishing the Sangha of monks and nuns.' },
  { glyph: '🕊️', year: '543 BCE · Kushinagar', title: 'The Parinirvana', description: 'Aged 80, the Buddha passed into final Nirvana between two Sal trees, leaving behind a legacy of compassion and wisdom that spans millennia.' },
]

export const TEACHINGS: TeachingCard[] = [
  { icon: '📿', title: 'Four Noble Truths', description: 'The foundation of Buddhist thought: the truth of suffering, its origin, its cessation, and the path leading to its cessation.' },
  { icon: '☸', title: 'Noble Eightfold Path', description: 'Right View, Intention, Speech, Action, Livelihood, Effort, Mindfulness, and Concentration — the way to liberation.' },
  { icon: '⚖️', title: 'Karma', description: 'The universal law of cause and effect. Every thought, word, and deed plants seeds that shape the quality of our experience.' },
  { icon: '🧘', title: 'Meditation', description: 'The direct path to inner peace. Through mindful observation we cultivate awareness, clarity, and profound stillness of mind.' },
  { icon: '🤲', title: 'Compassion', description: 'Metta and Karuna — loving-kindness and compassion toward all sentient beings without exception or discrimination.' },
  { icon: '🌿', title: 'Mindfulness', description: 'Sati — the practice of present-moment awareness. Observing reality as it is, without clinging, aversion, or delusion.' },
]

export const QUOTES: QuoteItem[] = [
  { text: 'Peace comes from within. Do not seek it without.', attribution: 'LORD BUDDHA' },
  { text: 'The mind is everything. What you think, you become.', attribution: 'LORD BUDDHA' },
  { text: 'Three things cannot be long hidden: the sun, the moon, and the truth.', attribution: 'LORD BUDDHA' },
  { text: 'In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.', attribution: 'BUDDHIST TEACHING' },
  { text: 'You yourself, as much as anybody in the entire universe, deserve your love and affection.', attribution: 'LORD BUDDHA' },
]

export const STATS: StatItem[] = [
  { value: 90, suffix: '', label: 'Countries Celebrating Vesak' },
  { value: 535, suffix: 'M+', label: 'Buddhist Followers Worldwide' },
  { value: 50000, suffix: '+', label: 'Ancient Temples' },
  { value: 2500, suffix: '+', label: 'Years of Teachings' },
]

export const FAQS: FAQItem[] = [
  { question: 'What is Vesak?', answer: 'Vesak (also known as Wesak or Buddha Purnima) is the most important Buddhist festival, commemorating the birth, enlightenment, and passing of Gautama Buddha — three profound events believed to have occurred on the same lunar full moon day.' },
  { question: 'Why is Vesak important?', answer: 'Vesak is recognized as a United Nations Day of Vesak, reflecting its global significance. It is a day of reflection, compassion, and renewal — a reminder of the Buddha\'s timeless message of peace, non-violence, and liberation from suffering.' },
  { question: 'How is Vesak celebrated?', answer: 'Celebrations include visiting temples at dawn, meditation, listening to Dhamma talks, lantern processions, lighting pandals, releasing animals as acts of compassion, charitable dansals, and adorning homes with colorful Vesak lanterns.' },
  { question: 'What are Buddha\'s main teachings?', answer: 'The core teachings rest on the Four Noble Truths and the Noble Eightfold Path. Other key teachings include impermanence (anicca), non-self (anatta), compassion (karuna), loving-kindness (metta), and mindfulness (sati).' },
  { question: 'Can non-Buddhists participate in Vesak?', answer: 'Absolutely. Vesak celebrates universal values — compassion, wisdom, and peace. People of all faiths are warmly welcome to visit temples, attend meditation sessions, and participate in the spirit of giving and reflection.' },
]

export const GALLERY_ITEMS: GalleryItem[] = [
  { emoji: '🏮', label: 'VESAK LANTERNS', bg: 'linear-gradient(135deg,rgba(232,132,26,0.2),rgba(201,168,76,0.08))' },
  { emoji: '🛕', label: 'PANDALS', bg: 'linear-gradient(135deg,rgba(74,14,14,0.4),rgba(122,28,28,0.15))' },
  { emoji: '🌺', label: 'BODHI POOJA', bg: 'linear-gradient(135deg,rgba(200,99,138,0.15),rgba(201,168,76,0.06))' },
  { emoji: '🍛', label: 'DANSAL', bg: 'linear-gradient(135deg,rgba(201,168,76,0.15),rgba(232,132,26,0.06))' },
  { emoji: '🪔', label: 'TEMPLE OFFERINGS', bg: 'linear-gradient(135deg,rgba(13,70,53,0.35),rgba(14,11,5,0.1))' },
  { emoji: '🌸', label: 'FLOWER OFFERINGS', bg: 'linear-gradient(135deg,rgba(122,28,28,0.25),rgba(201,168,76,0.06))' },
]
