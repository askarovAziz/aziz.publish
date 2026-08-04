'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const treatments = [
  {
    id: 1,
    name: 'Swedish Massage',
    tag: 'Relaxation',
    desc: 'A gentle, flowing technique designed to relax muscles and restore balance throughout the body.',
    duration: '60 / 90 min',
    price: 'From AED 350',
    image: '/images/treatment-swedish.png',
    num: '01',
  },
  {
    id: 2,
    name: 'Deep Tissue Massage',
    tag: 'Recovery',
    desc: 'Targeted pressure that reaches the deepest muscle layers, releasing chronic tension and fatigue.',
    duration: '60 / 90 min',
    price: 'From AED 400',
    image: '/images/treatment-deep.png',
    num: '02',
  },
  {
    id: 3,
    name: 'Aromatherapy',
    tag: 'Sensory',
    desc: 'A sensory journey through the healing power of essential oils, calming the mind and body in unison.',
    duration: '60 / 90 min',
    price: 'From AED 380',
    image: '/images/treatment-aroma.png',
    num: '03',
  },
  {
    id: 4,
    name: 'Hot Stone Massage',
    tag: 'Ritual',
    desc: 'Volcanic basalt stones glide across the body, dissolving tension and warming the soul to its core.',
    duration: '75 / 105 min',
    price: 'From AED 450',
    image: '/images/treatment-stones.png',
    num: '04',
  },
  {
    id: 5,
    name: 'Couple Experience',
    tag: 'Intimate',
    desc: 'A private sanctuary designed for two — share the art of relaxation in an intimate suite.',
    duration: '90 min',
    price: 'From AED 800',
    image: '/images/couple-experience.png',
    num: '05',
  },
  {
    id: 6,
    name: 'Moroccan Bath',
    tag: 'Cleanse',
    desc: 'An ancient ritual of cleansing and renewal with black soap, kessa glove, and aromatic steam.',
    duration: '60 min',
    price: 'From AED 320',
    image: '/images/treatment-moroccan.png',
    num: '06',
  },
]

export default function TreatmentsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return

    const track = trackRef.current
    const totalScroll = track.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {

      // Horizontal scroll drive
      gsap.to(track, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalScroll + window.innerWidth * 0.5}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`
            }
          },
        },
      })

      // Parallax on each card image
      const images = track.querySelectorAll<HTMLElement>('.card-img')
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { x: '-8%' },
          {
            x: '8%',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: () => `+=${totalScroll + window.innerWidth * 0.5}`,
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          }
        )
      })

      // Header reveal
      if (headerRef.current) {
        const lines = headerRef.current.querySelectorAll<HTMLElement>('.reveal-line')
        gsap.fromTo(
          lines,
          { y: '100%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="treatments"
      className="relative bg-espresso overflow-hidden"
      style={{ height: '100vh' }}
      aria-label="Signature Treatments"
    >
      {/* ── Fixed section label top-left ── */}
      <div
        ref={headerRef}
        className="absolute top-12 left-12 z-20 pointer-events-none"
        aria-hidden="true"
      >
        <div className="overflow-hidden mb-3">
          <div className="reveal-line flex items-center gap-3" style={{ opacity: 0 }}>
            <span className="text-bronze font-sans text-[10px] tracking-[0.4em] uppercase">02</span>
            <span className="w-6 h-px bg-bronze/50" />
            <span className="text-sand/60 font-sans text-[10px] tracking-[0.4em] uppercase">Signature Treatments</span>
          </div>
        </div>
        <div className="overflow-hidden">
          <h2
            className="reveal-line font-serif text-ivory leading-none"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, opacity: 0 }}
          >
            Our Rituals
          </h2>
        </div>
      </div>

      {/* ── Progress bar bottom ── */}
      <div className="absolute bottom-10 left-12 right-12 z-20 flex items-center gap-4">
        <div className="flex-1 h-px bg-ivory/10 relative overflow-hidden">
          <div
            ref={progressRef}
            className="absolute top-0 left-0 h-full bg-bronze transition-none"
            style={{ width: '0%' }}
          />
        </div>
        <span className="text-sand/40 font-sans text-[9px] tracking-[0.3em] uppercase shrink-0">
          Scroll to explore
        </span>
      </div>

      {/* ── Horizontal track ── */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 flex items-center h-full"
        style={{ willChange: 'transform' }}
      >
        {/* Leading spacer */}
        <div className="shrink-0 w-[12vw]" aria-hidden="true" />

        {treatments.map((t, i) => (
          <article
            key={t.id}
            className="relative shrink-0 h-[70vh] flex flex-col overflow-hidden mr-6"
            style={{
              width: 'clamp(300px, 30vw, 480px)',
              background: '#1a1510',
              border: '1px solid rgba(200,169,110,0.12)',
            }}
          >
            {/* ── Image with parallax ── */}
            <div className="relative overflow-hidden" style={{ height: '58%' }}>
              <div className="card-img absolute inset-0" style={{ width: '116%', left: '-8%' }}>
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover"
                  priority={i < 2}
                />
              </div>
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 50%, #1a1510 100%)' }}
              />
              {/* Tag */}
              <div className="absolute top-5 left-5">
                <span
                  className="font-sans uppercase tracking-[0.3em]"
                  style={{
                    fontSize: 9,
                    color: 'rgba(200,169,110,0.9)',
                    background: 'rgba(26,21,16,0.7)',
                    backdropFilter: 'blur(4px)',
                    padding: '4px 10px',
                    border: '1px solid rgba(200,169,110,0.2)',
                  }}
                >
                  {t.tag}
                </span>
              </div>
              {/* Large number */}
              <div
                className="absolute bottom-2 right-5 font-serif text-ivory/8 leading-none select-none"
                style={{ fontSize: '7rem', fontWeight: 300, lineHeight: 1 }}
                aria-hidden="true"
              >
                {t.num}
              </div>
            </div>

            {/* ── Content ── */}
            <div className="flex flex-col flex-1 justify-between p-8">
              <div>
                <h3
                  className="font-serif text-ivory leading-tight mb-3"
                  style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2rem)', fontWeight: 300 }}
                >
                  {t.name}
                </h3>
                <p className="text-sand/60 font-sans leading-relaxed" style={{ fontSize: 13 }}>
                  {t.desc}
                </p>
              </div>

              <div>
                {/* Divider */}
                <div className="w-full h-px bg-bronze/15 mb-5" />

                {/* Meta */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sand/35 font-sans uppercase tracking-[0.3em] mb-1" style={{ fontSize: 8 }}>Duration</p>
                    <p className="text-champagne font-sans" style={{ fontSize: 12 }}>{t.duration}</p>
                  </div>
                  <div className="w-px h-6 bg-bronze/20" aria-hidden="true" />
                  <div className="text-right">
                    <p className="text-sand/35 font-sans uppercase tracking-[0.3em] mb-1" style={{ fontSize: 8 }}>Investment</p>
                    <p className="text-bronze font-sans" style={{ fontSize: 12 }}>{t.price}</p>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.link/doralspa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center font-sans uppercase tracking-[0.25em] transition-all duration-300 hover:bg-bronze hover:text-espresso"
                  style={{
                    fontSize: 9,
                    padding: '10px 0',
                    border: '1px solid rgba(200,169,110,0.5)',
                    color: 'rgba(200,169,110,0.9)',
                  }}
                >
                  Book Treatment
                </a>
              </div>
            </div>
          </article>
        ))}

        {/* Trailing spacer */}
        <div className="shrink-0 w-[12vw]" aria-hidden="true" />
      </div>
    </section>
  )
}
