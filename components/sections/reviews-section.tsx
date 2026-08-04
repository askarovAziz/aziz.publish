'use client'

import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const reviews = [
  {
    name: 'Sarah Al Mansouri',
    rating: 5,
    text: 'An extraordinary experience from the moment I stepped through the doors. The Swedish massage was pure perfection — every muscle released, every tension dissolved. Doral Spa is unlike anything else in Abu Dhabi.',
    date: 'March 2024',
  },
  {
    name: 'James Mitchell',
    rating: 5,
    text: 'I have visited spas across six continents, and Doral stands among the finest. The deep tissue treatment was masterfully executed. The ambiance alone is worth the visit — dark, warm, and deeply serene.',
    date: 'January 2024',
  },
  {
    name: 'Nadia Khalil',
    rating: 5,
    text: 'The Moroccan Bath was an absolute revelation. An ancient ritual brought to life with modern luxury. My skin, my mind, my entire being felt renewed. I will return without question.',
    date: 'February 2024',
  },
  {
    name: 'Ahmed Al Zaabi',
    rating: 5,
    text: 'We celebrated our anniversary with the Couple Experience package. From the rose petals to the exceptional service, every detail was considered. It was the most romantic evening we have ever shared.',
    date: 'April 2024',
  },
]

export default function ReviewsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % reviews.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: '#0f0c0a' }}
      aria-label="Guest reviews"
    >
      {/* Background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-serif text-ivory/[0.015] leading-none whitespace-nowrap"
          style={{ fontSize: '20vw', fontWeight: 300 }}
        >
          REVIEWS
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16">
        {/* Section number */}
        <div className="flex items-center gap-4 mb-16" aria-hidden="true">
          <span className="text-bronze text-xs tracking-[0.3em] font-sans">08</span>
          <span className="w-8 h-px bg-bronze/40" />
          <span className="text-ivory/30 text-xs tracking-[0.2em] font-sans uppercase">Google Reviews</span>
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-10" aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-bronze text-lg" aria-hidden="true">★</span>
          ))}
        </div>

        {/* Review content */}
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active}
            initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -30, filter: 'blur(4px)' }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="font-serif text-ivory text-xl md:text-3xl font-light leading-relaxed mb-10"
               style={{ fontStyle: 'italic' }}>
              &ldquo;{reviews[active].text}&rdquo;
            </p>
            <footer>
              <div className="flex items-center gap-6">
                <span className="bronze-line" aria-hidden="true" />
                <div>
                  <cite className="text-champagne text-sm font-sans not-italic">{reviews[active].name}</cite>
                  <p className="text-muted-foreground text-xs tracking-[0.2em] font-sans uppercase mt-0.5">{reviews[active].date}</p>
                </div>
              </div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex gap-3 mt-12" role="group" aria-label="Review pagination">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to review ${i + 1}`}
              aria-current={active === i ? 'true' : undefined}
              className={`h-px transition-all duration-500 ${
                active === i ? 'bg-bronze w-12' : 'bg-sand/20 w-6 hover:bg-sand/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
