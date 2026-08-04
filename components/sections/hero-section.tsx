'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !bgRef.current || !textRef.current) return

    const ctx = gsap.context(() => {
      // Background zoom on scroll
      gsap.to(bgRef.current, {
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      // Text moves up and fades
      gsap.to(textRef.current, {
        y: -120,
        opacity: 0,
        filter: 'blur(8px)',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '50% top',
          scrub: 1,
        },
      })

      // Overlay darkens
      gsap.to(overlayRef.current, {
        opacity: 0.85,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const staggerIn = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 2.6 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } },
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image with parallax */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero-spa.png"
          alt="Doral Spa interior — luxury treatment room with warm amber lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-espresso/70"
        aria-hidden="true"
      />

      {/* Bronze top line */}
      <motion.div
        className="absolute top-0 left-0 h-px bg-bronze z-10"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 2, ease: [0.76, 0, 0.24, 1], delay: 2.2 }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        ref={textRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        variants={staggerIn}
        initial="hidden"
        animate="show"
      >
        {/* Overline */}
        <motion.p
          variants={fadeUp}
          className="text-bronze text-[11px] tracking-[0.5em] font-sans uppercase mb-6"
        >
          Al Forsan · Khalifa City · Abu Dhabi
        </motion.p>

        {/* Main headline */}
        <motion.h1
          variants={fadeUp}
          className="font-serif text-ivory leading-none tracking-wider"
          style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', fontWeight: 300 }}
        >
          DORAL
        </motion.h1>
        <motion.h1
          variants={fadeUp}
          className="font-serif text-ivory/90 leading-none tracking-[0.4em] -mt-2"
          style={{ fontSize: 'clamp(1.5rem, 5vw, 4rem)', fontWeight: 300 }}
        >
          SPA
        </motion.h1>

        {/* Tagline */}
        <motion.div variants={fadeUp} className="mt-8 mb-12 flex items-center gap-6">
          <span className="bronze-line" aria-hidden="true" />
          <p className="text-champagne text-sm md:text-base tracking-[0.15em] font-sans italic">
            Luxury Wellness, Elevated.
          </p>
          <span className="bronze-line" aria-hidden="true" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-sand/80 text-sm tracking-wider max-w-md font-sans leading-relaxed mb-10"
        >
          A refined wellness experience on Al Forsan Street, Khalifa City, Abu Dhabi. Open daily from 10:00 AM to 2:30 AM.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.link/doralspa"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-bronze text-espresso px-8 py-3.5 text-xs tracking-[0.25em] font-sans uppercase overflow-hidden transition-all duration-500 hover:bg-champagne"
          >
            Book Your Experience
          </a>
          <button
            onClick={() => document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-ivory/40 text-ivory hover:border-bronze hover:text-bronze px-8 py-3.5 text-xs tracking-[0.25em] font-sans uppercase transition-all duration-500"
          >
            Explore Treatments
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <p className="text-sand/50 text-[10px] tracking-[0.3em] font-sans uppercase">Scroll</p>
          <div className="w-px h-12 bg-bronze/30 overflow-hidden">
            <motion.div
              className="w-full h-full bg-bronze"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
