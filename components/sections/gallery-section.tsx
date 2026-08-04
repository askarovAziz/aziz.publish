'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const galleryItems = [
  {
    src: '/images/hero-spa.png',
    caption: 'Treatment Suite',
    subcaption: 'Private rooms designed for total immersion',
    num: '01',
    aspect: 'tall',
  },
  {
    src: '/images/gallery-interior.png',
    caption: 'Spa Entrance',
    subcaption: 'A threshold between the world and stillness',
    num: '02',
    aspect: 'wide',
  },
  {
    src: '/images/treatment-moroccan.png',
    caption: 'Moroccan Hammam',
    subcaption: 'Ancient rituals, reimagined in luxury',
    num: '03',
    aspect: 'tall',
  },
  {
    src: '/images/cinematic-bg.png',
    caption: 'Thermal Pool',
    subcaption: 'Still waters beneath ancient arches',
    num: '04',
    aspect: 'wide',
  },
  {
    src: '/images/gallery-oils.png',
    caption: 'Essential Oils',
    subcaption: 'Botanicals sourced from across the world',
    num: '05',
    aspect: 'tall',
  },
  {
    src: '/images/treatment-stones.png',
    caption: 'Hot Stones',
    subcaption: 'Volcanic basalt, heated to precision',
    num: '06',
    aspect: 'square',
  },
  {
    src: '/images/couple-experience.png',
    caption: 'Couple Suite',
    subcaption: 'A private sanctuary designed for two',
    num: '07',
    aspect: 'wide',
  },
]

const aspectDims: Record<string, { width: string; height: string }> = {
  tall:   { width: 'clamp(280px, 24vw, 380px)', height: '72vh' },
  wide:   { width: 'clamp(400px, 38vw, 580px)', height: '60vh' },
  square: { width: 'clamp(320px, 28vw, 420px)', height: '65vh' },
}

export default function GallerySection() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const trackRef    = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const headerRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return

    const track = trackRef.current

    const ctx = gsap.context(() => {
      const totalScroll = () => track.scrollWidth - window.innerWidth

      // Horizontal pin + scroll drive
      gsap.to(track, {
        x: () => -totalScroll(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalScroll() + window.innerWidth * 0.5}`,
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

      // Parallax on each image
      const images = track.querySelectorAll<HTMLElement>('.gal-img')
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
              end: () => `+=${totalScroll() + window.innerWidth * 0.5}`,
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          }
        )
      })

      // Staggered caption reveal per card — triggers once when section enters
      const captions = track.querySelectorAll<HTMLElement>('.gal-caption')
      gsap.fromTo(
        captions,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Header lines
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
      id="gallery"
      className="relative overflow-hidden"
      style={{ height: '100vh', backgroundColor: '#0f0c0a' }}
      aria-label="Gallery"
    >
      {/* Section label */}
      <div
        ref={headerRef}
        className="absolute top-12 left-12 z-20 pointer-events-none"
        aria-hidden="true"
      >
        <div className="overflow-hidden mb-3">
          <div className="reveal-line flex items-center gap-3" style={{ opacity: 0 }}>
            <span className="text-bronze font-sans text-[10px] tracking-[0.4em] uppercase">06</span>
            <span className="w-6 h-px bg-bronze/50" />
            <span className="text-sand/60 font-sans text-[10px] tracking-[0.4em] uppercase">Gallery</span>
          </div>
        </div>
        <div className="overflow-hidden">
          <h2
            className="reveal-line font-serif text-ivory leading-none"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, opacity: 0 }}
          >
            The Space
          </h2>
        </div>
      </div>

      {/* Progress bar */}
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

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 flex items-center h-full gap-5"
        style={{ paddingLeft: '12vw', paddingRight: '12vw', willChange: 'transform' }}
      >
        {galleryItems.map((item, i) => {
          const dims = aspectDims[item.aspect]
          // Alternate vertical offset for rhythm
          const offset = i % 3 === 1 ? '-4vh' : i % 3 === 2 ? '3vh' : '0px'

          return (
            <figure
              key={i}
              className="relative shrink-0 overflow-hidden group"
              style={{
                width: dims.width,
                height: dims.height,
                marginTop: offset,
                border: '1px solid rgba(200,169,110,0.10)',
              }}
            >
              {/* Parallax image wrapper */}
              <div
                className="gal-img absolute inset-0"
                style={{ width: '116%', left: '-8%' }}
              >
                <Image
                  src={item.src}
                  alt={`${item.caption} — Doral Spa Abu Dhabi`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority={i < 2}
                />
              </div>

              {/* Dark vignette bottom */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, transparent 40%, rgba(15,12,10,0.75) 100%)',
                }}
                aria-hidden="true"
              />

              {/* Hover tint */}
              <div
                className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-colors duration-500"
                aria-hidden="true"
              />

              {/* Number watermark */}
              <span
                className="absolute top-4 right-5 font-serif text-ivory/8 leading-none select-none"
                style={{ fontSize: '6rem', fontWeight: 300, lineHeight: 1 }}
                aria-hidden="true"
              >
                {item.num}
              </span>

              {/* Caption */}
              <figcaption
                className="gal-caption absolute bottom-0 left-0 right-0 p-6"
                style={{ opacity: 0 }}
              >
                <p
                  className="font-sans uppercase tracking-[0.3em] text-bronze mb-1"
                  style={{ fontSize: 9 }}
                >
                  {item.num} — {item.caption}
                </p>
                <p
                  className="font-serif text-ivory/70 leading-snug"
                  style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', fontWeight: 300 }}
                >
                  {item.subcaption}
                </p>
              </figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
