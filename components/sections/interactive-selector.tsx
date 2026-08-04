'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const moods = [
  {
    label: 'Relax',
    treatment: 'Swedish Massage',
    desc: 'Let every muscle soften. Our Swedish Massage uses long, flowing strokes to dissolve tension and return you to a state of pure calm.',
    duration: '60 – 90 min',
    image: '/images/treatment-swedish.png',
    price: 'From AED 350',
  },
  {
    label: 'Recover',
    treatment: 'Deep Tissue Massage',
    desc: 'For muscles that carry the weight of the world. Our therapists work with precision to release deep-seated tension and restore function.',
    duration: '60 – 90 min',
    image: '/images/treatment-deep.png',
    price: 'From AED 400',
  },
  {
    label: 'Recharge',
    treatment: 'Hot Stone Massage',
    desc: 'Volcanic energy meets master technique. Heated basalt stones penetrate deep, revitalizing the body from within.',
    duration: '75 – 105 min',
    image: '/images/treatment-stones.png',
    price: 'From AED 450',
  },
  {
    label: 'Escape',
    treatment: 'Moroccan Bath',
    desc: 'Surrender to an ancient rite of renewal. Black soap, kessa ritual, and aromatic steam transport you beyond the ordinary.',
    duration: '60 min',
    image: '/images/treatment-moroccan.png',
    price: 'From AED 320',
  },
]

export default function InteractiveSelector() {
  const [active, setActive] = useState(0)

  return (
    <section
      className="py-28 md:py-40 overflow-hidden"
      style={{ backgroundColor: '#0f0c0a' }}
      aria-label="Experience selector"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section number */}
        <div className="flex items-center gap-4 mb-10" aria-hidden="true">
          <span className="text-bronze text-xs tracking-[0.3em] font-sans">03</span>
          <span className="w-8 h-px bg-bronze/40" />
        </div>

        <h2
          className="font-serif text-ivory mb-16"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontWeight: 300 }}
        >
          How Do You Want<br />
          <span className="italic text-champagne">to Feel?</span>
        </h2>

        {/* Mood selectors */}
        <div className="flex flex-wrap gap-3 mb-16" role="tablist" aria-label="Mood selection">
          {moods.map((m, i) => (
            <button
              key={m.label}
              role="tab"
              aria-selected={active === i}
              aria-controls={`mood-panel-${i}`}
              onClick={() => setActive(i)}
              className={`px-7 py-3 text-xs tracking-[0.3em] font-sans uppercase transition-all duration-500 border ${
                active === i
                  ? 'bg-bronze text-espresso border-bronze'
                  : 'text-sand/70 border-sand/20 hover:border-bronze/50 hover:text-ivory'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          id={`mood-panel-${active}`}
          role="tabpanel"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0.6 }}
                animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                exit={{ clipPath: 'inset(0 0 0 100%)', opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                <Image
                  src={moods[active].image}
                  alt={moods[active].treatment}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Bronze border accent */}
            <div className="absolute inset-0 border border-bronze/15 pointer-events-none" aria-hidden="true" />
          </div>

          {/* Text */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              >
                <p className="text-bronze text-[11px] tracking-[0.4em] font-sans uppercase mb-4">
                  Recommended Treatment
                </p>
                <h3 className="font-serif text-ivory text-3xl md:text-5xl font-light mb-6 leading-tight">
                  {moods[active].treatment}
                </h3>
                <p className="text-sand/75 text-sm leading-relaxed font-sans mb-8 max-w-sm">
                  {moods[active].desc}
                </p>

                <div className="flex items-center gap-8 mb-8">
                  <div>
                    <p className="text-muted-foreground text-[10px] tracking-[0.3em] font-sans uppercase mb-1">Duration</p>
                    <p className="text-champagne text-sm font-sans">{moods[active].duration}</p>
                  </div>
                  <div className="w-px h-8 bg-bronze/20" aria-hidden="true" />
                  <div>
                    <p className="text-muted-foreground text-[10px] tracking-[0.3em] font-sans uppercase mb-1">Investment</p>
                    <p className="text-bronze text-sm font-sans">{moods[active].price}</p>
                  </div>
                </div>

                <a
                  href="https://wa.link/doralspa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-bronze text-espresso px-7 py-3 text-xs tracking-[0.25em] font-sans uppercase hover:bg-champagne transition-colors duration-400"
                >
                  Book This Treatment
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
