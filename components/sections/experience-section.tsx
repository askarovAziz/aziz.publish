'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Image expand from framed to fullscreen-ish
      gsap.fromTo(
        imageWrapRef.current,
        { clipPath: 'inset(15% 20% 15% 20%)', scale: 0.95 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center 20%',
            scrub: 1.2,
          },
        }
      )

      // Image zoom inside clip
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      )

      // Text line reveals
      gsap.fromTo(
        line1Ref.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          duration: 1.4,
          ease: [0.76, 0, 0.24, 1] as any,
          scrollTrigger: {
            trigger: line1Ref.current,
            start: 'top 85%',
          },
        }
      )

      gsap.fromTo(
        line2Ref.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          duration: 1.4,
          delay: 0.25,
          ease: [0.76, 0, 0.24, 1] as any,
          scrollTrigger: {
            trigger: line1Ref.current,
            start: 'top 85%',
          },
        }
      )

      gsap.fromTo(
        bodyRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: [0.76, 0, 0.24, 1] as any,
          scrollTrigger: {
            trigger: bodyRef.current,
            start: 'top 90%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-32 md:py-48 overflow-hidden"
      aria-label="The Doral Experience"
    >
      {/* Section number */}
      <div className="absolute top-12 left-8 md:left-16 flex items-center gap-4" aria-hidden="true">
        <span className="text-bronze text-xs tracking-[0.3em] font-sans">01</span>
        <span className="w-8 h-px bg-bronze/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Expanding image */}
        <div ref={imageWrapRef} className="w-full aspect-[16/9] overflow-hidden will-change-transform mb-20 md:mb-28">
          <div ref={imageRef} className="w-full h-full will-change-transform">
            <Image
              src="/images/experience-spa.png"
              alt="Luxury spa relaxation room at Doral Spa Abu Dhabi"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ position: 'absolute' }}
            />
          </div>
        </div>

        {/* Text block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end">
          <div>
            <p className="text-bronze text-[11px] tracking-[0.4em] font-sans uppercase mb-8">
              The Experience
            </p>
            <h2 className="font-serif text-ivory leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 300 }}>
              <span ref={line1Ref} className="block overflow-hidden">
                More Than a Treatment.
              </span>
              <span ref={line2Ref} className="block overflow-hidden italic text-champagne mt-1">
                A Complete Escape.
              </span>
            </h2>
          </div>

          <div>
            <p
              ref={bodyRef}
              className="text-sand/80 text-base leading-relaxed font-sans max-w-md"
            >
              Step into a sanctuary where every detail has been crafted for your restoration. From the moment you arrive, the world outside ceases to exist. Only stillness, warmth, and the quiet art of care remain.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <span className="bronze-line" />
              <span className="text-bronze/70 text-xs tracking-[0.3em] font-sans uppercase">Al Forsan Street · Khalifa City</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
