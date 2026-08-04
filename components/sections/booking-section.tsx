'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export default function BookingSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Cinematic zoom on bg
      gsap.fromTo(
        bgRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'center top',
            scrub: 1.5,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      aria-label="Book your experience"
    >
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/couple-experience.png"
          alt="Doral Spa couple experience — romantic luxury treatment suite"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/85" aria-hidden="true" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 max-w-3xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.p variants={fadeUp} className="text-bronze text-[11px] tracking-[0.5em] font-sans uppercase mb-8">
          09 · Reserve
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-serif text-ivory leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', fontWeight: 300 }}
        >
          Your Time.<br />
          <span className="italic text-champagne">Your Space.</span><br />
          Your Doral Experience.
        </motion.h2>

        <motion.p variants={fadeUp} className="text-sand/70 text-sm md:text-base leading-relaxed font-sans mb-14 max-w-lg mx-auto">
          Reserve your treatment and step into a more refined state of wellbeing. Our team is ready to craft your perfect experience.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.link/doralspa"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-bronze text-espresso px-8 py-4 text-xs tracking-[0.25em] font-sans uppercase overflow-hidden hover:bg-champagne transition-colors duration-500 flex items-center justify-center gap-3"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book on WhatsApp
          </a>
          <a
            href="tel:+971567372259"
            className="border border-ivory/40 text-ivory hover:border-bronze hover:text-bronze px-8 py-4 text-xs tracking-[0.25em] font-sans uppercase transition-all duration-400"
          >
            Call Doral Spa
          </a>
          <button
            onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-sand/20 text-sand/60 hover:border-sand/40 hover:text-sand px-8 py-4 text-xs tracking-[0.25em] font-sans uppercase transition-all duration-400"
          >
            View Location
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
