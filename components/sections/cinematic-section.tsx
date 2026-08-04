'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CinematicSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const leftPanelRef = useRef<HTMLDivElement>(null)
  const rightPanelRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const line3Ref = useRef<HTMLSpanElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Pin the section while content animates
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=250%',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Slow bg zoom
      tl.to(bgRef.current, { scale: 1.12, ease: 'none' }, 0)

      // Text lines appear sequentially
      tl.fromTo(
        line1Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: 'power2.out' },
        0.05
      )
      tl.fromTo(
        line2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: 'power2.out' },
        0.2
      )
      tl.fromTo(
        line3Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: 'power2.out' },
        0.35
      )

      // Fade out scroll hint as user scrolls
      tl.to(
        scrollHintRef.current,
        { opacity: 0, y: 10, ease: 'power1.in' },
        0.25
      )

      // Panel split reveal
      tl.to(
        leftPanelRef.current,
        { xPercent: -100, ease: 'power2.inOut' },
        0.65
      )
      tl.to(
        rightPanelRef.current,
        { xPercent: 100, ease: 'power2.inOut' },
        0.65
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden" aria-label="Cinematic section">
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/cinematic-bg.png"
          alt="Luxury indoor spa pool at Doral Spa Abu Dhabi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/75" aria-hidden="true" />
      </div>

      {/* Text content */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <p className="text-bronze text-[11px] tracking-[0.5em] font-sans uppercase mb-12" aria-hidden="true">
          04 · Presence
        </p>
        <h2 className="font-serif text-ivory leading-[1.2]" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300 }}>
          <span ref={line1Ref} className="block opacity-0">Breathe In.</span>
          <span ref={line2Ref} className="block italic text-champagne opacity-0">Let Go.</span>
          <span ref={line3Ref} className="block opacity-0">Begin Again.</span>
        </h2>
      </div>

      {/* Keep scrolling hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
        aria-hidden="true"
      >
        {/* Mouse icon */}
        <div
          className="relative flex items-start justify-center"
          style={{
            width: 26,
            height: 40,
            borderRadius: 13,
            border: '1.5px solid rgba(180,140,60,0.9)',
            boxShadow: '0 0 12px rgba(180,140,60,0.25)',
          }}
        >
          {/* Scrolling wheel dot */}
          <div
            style={{
              width: 3,
              height: 7,
              borderRadius: 2,
              backgroundColor: 'rgba(180,140,60,1)',
              marginTop: 6,
              animation: 'wheelScroll 1.8s ease-in-out infinite',
            }}
          />
        </div>

        <span
          className="font-sans tracking-[0.4em] uppercase"
          style={{ fontSize: 10, color: 'rgba(180,140,60,0.95)', letterSpacing: '0.4em' }}
        >
          Keep Scrolling
        </span>

        {/* Chevrons */}
        <div className="flex flex-col items-center gap-0.5" style={{ animation: 'chevronPulse 1.8s ease-in-out infinite' }}>
          {[0, 1, 2].map((i) => (
            <svg
              key={i}
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              style={{ opacity: 1 - i * 0.28 }}
            >
              <path d="M1 1L7 7L13 1" stroke="rgba(180,140,60,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes wheelScroll {
          0%   { transform: translateY(0);   opacity: 1; }
          60%  { transform: translateY(12px); opacity: 0; }
          61%  { transform: translateY(0);   opacity: 0; }
          100% { transform: translateY(0);   opacity: 1; }
        }
        @keyframes chevronPulse {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(4px); }
        }
      `}</style>

      {/* Split panels */}
      <div
        ref={leftPanelRef}
        className="absolute inset-y-0 left-0 w-1/2 will-change-transform"
        style={{ zIndex: 5 }}
        aria-hidden="true"
      >
        <Image
          src="/images/cinematic-bg.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-espresso/75" />
      </div>
      <div
        ref={rightPanelRef}
        className="absolute inset-y-0 right-0 w-1/2 will-change-transform"
        style={{ zIndex: 5 }}
        aria-hidden="true"
      >
        <Image
          src="/images/cinematic-bg.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-espresso/75" />
      </div>
    </div>
  )
}
