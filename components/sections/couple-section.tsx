'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CoupleSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Panels slide apart
      tl.to(leftRef.current, { xPercent: -60, ease: 'power2.inOut' }, 0)
      tl.to(rightRef.current, { xPercent: 60, ease: 'power2.inOut' }, 0)

      // Center content reveals
      tl.fromTo(
        centerRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, ease: 'power2.out' },
        0.4
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      aria-label="Couple experience"
    >
      {/* Background */}
      <Image
        src="/images/couple-experience.png"
        alt="Doral Spa private couple suite — romantic experience for two"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-espresso/70" aria-hidden="true" />

      {/* Left panel */}
      <div
        ref={leftRef}
        className="absolute inset-y-0 left-0 w-1/2 will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="/images/couple-experience.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-espresso/60" />
      </div>

      {/* Right panel */}
      <div
        ref={rightRef}
        className="absolute inset-y-0 right-0 w-1/2 will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="/images/couple-experience.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-espresso/60" />
      </div>

      {/* Center content */}
      <div
        ref={centerRef}
        className="absolute inset-0 flex items-center justify-center opacity-0 z-10"
      >
        <div className="text-center px-6 max-w-2xl">
          <p className="text-bronze text-[11px] tracking-[0.5em] font-sans uppercase mb-8">
            05 · Couple Experience
          </p>
          <h2
            className="font-serif text-ivory mb-8 leading-[1.15]"
            style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 300 }}
          >
            A Private Experience<br />
            <span className="italic text-champagne">for Two</span>
          </h2>
          <p className="text-sand/75 text-sm leading-relaxed font-sans mb-10 max-w-md mx-auto">
            Share an intimate journey of relaxation in a private suite crafted for two. Champagne, rose petals, and master therapists — exclusively yours.
          </p>
          <a
            href="https://wa.link/doralspa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-bronze text-espresso px-8 py-3.5 text-xs tracking-[0.25em] font-sans uppercase hover:bg-champagne transition-colors duration-400"
          >
            Book Couple Experience
          </a>
        </div>
      </div>
    </div>
  )
}
