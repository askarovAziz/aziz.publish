'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const therapists = [
  {
    id: 1,
    name: 'Amara Santos',
    country: 'Philippines',
    specialization: 'Swedish & Aromatherapy',
    intro: 'With over 12 years of refined experience, Amara brings a rare lightness and intuition to every session. Her touch is transformative.',
    image: '/images/therapist-1.png',
  },
  {
    id: 2,
    name: 'Layla Al Rashid',
    country: 'Jordan',
    specialization: 'Moroccan Bath & Deep Tissue',
    intro: 'Trained in the ancient traditions of the hammam, Layla combines cultural knowledge with modern therapeutic technique.',
    image: '/images/therapist-2.png',
  },
]

export default function TherapistsSection() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="therapists"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: '#1a1410' }}
      aria-label="Our Therapists"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section number */}
        <div className="flex items-center gap-4 mb-10" aria-hidden="true">
          <span className="text-bronze text-xs tracking-[0.3em] font-sans">05</span>
          <span className="w-8 h-px bg-bronze/40" />
        </div>

        <h2
          className="font-serif text-ivory mb-16 md:mb-24"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontWeight: 300 }}
        >
          The Hands<br />
          <span className="italic text-champagne">Behind the Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ clipPath: 'inset(100% 0 0 0)', scale: 1.1 }}
                animate={{ clipPath: 'inset(0% 0 0 0)', scale: 1 }}
                exit={{ clipPath: 'inset(0 0 100% 0)', scale: 0.95 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              >
                <Image
                  src={therapists[active].image}
                  alt={`${therapists[active].name} — therapist at Doral Spa Abu Dhabi`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>
            {/* Bronze frame */}
            <div className="absolute inset-0 border border-bronze/10 pointer-events-none z-10" aria-hidden="true" />
          </div>

          {/* Info */}
          <div>
            {/* Progress */}
            <div className="flex gap-2 mb-10" role="group" aria-label="Therapist selection">
              {therapists.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  aria-label={`View ${t.name}`}
                  aria-pressed={active === i}
                  className={`flex-1 h-px transition-all duration-500 ${active === i ? 'bg-bronze' : 'bg-sand/20'}`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              >
                <p className="text-bronze text-[11px] tracking-[0.4em] font-sans uppercase mb-3">
                  {therapists[active].country}
                </p>
                <h3 className="font-serif text-ivory text-3xl md:text-5xl font-light mb-2 leading-tight">
                  {therapists[active].name}
                </h3>
                <p className="text-sand/60 text-xs tracking-[0.25em] font-sans uppercase mb-8">
                  {therapists[active].specialization}
                </p>
                <p className="text-sand/75 text-sm leading-relaxed font-sans mb-10 max-w-sm">
                  {therapists[active].intro}
                </p>
                <a
                  href="https://wa.link/doralspa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-bronze/50 text-bronze hover:bg-bronze hover:text-espresso px-6 py-2.5 text-xs tracking-[0.25em] font-sans uppercase transition-all duration-400"
                >
                  Request Therapist
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Nav buttons */}
            <div className="flex gap-4 mt-10" aria-label="Navigate therapists">
              <button
                onClick={() => setActive((a) => (a - 1 + therapists.length) % therapists.length)}
                className="w-10 h-10 border border-sand/20 hover:border-bronze/60 flex items-center justify-center text-sand/50 hover:text-bronze transition-all duration-300"
                aria-label="Previous therapist"
              >
                ←
              </button>
              <button
                onClick={() => setActive((a) => (a + 1) % therapists.length)}
                className="w-10 h-10 border border-sand/20 hover:border-bronze/60 flex items-center justify-center text-sand/50 hover:text-bronze transition-all duration-300"
                aria-label="Next therapist"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
