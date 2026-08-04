'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Phone, Clock, Car } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Image moves to reveal info from behind
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(0 0 0 0)' },
        {
          clipPath: 'inset(0 50% 0 0)',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'center 40%',
            scrub: 1.2,
          },
        }
      )

      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1] as any,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center 60%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="location"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: '#1a1410' }}
      aria-label="Location"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section number */}
        <div className="flex items-center gap-4 mb-10" aria-hidden="true">
          <span className="text-bronze text-xs tracking-[0.3em] font-sans">07</span>
          <span className="w-8 h-px bg-bronze/40" />
        </div>

        <h2
          className="font-serif text-ivory mb-16"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontWeight: 300 }}
        >
          Find Your<br />
          <span className="italic text-champagne">Sanctuary</span>
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[500px]">
          {/* Image panel */}
          <div ref={imageRef} className="relative aspect-[4/3] md:aspect-auto overflow-hidden will-change-transform">
            <Image
              src="/images/hotel-exterior.png"
              alt="Doral Spa on Al Forsan Street in Khalifa City, Abu Dhabi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-espresso/30" aria-hidden="true" />
          </div>

          {/* Info panel */}
          <div
            ref={infoRef}
            className="bg-charcoal p-10 md:p-14 flex flex-col justify-center opacity-0"
          >
            <h3 className="font-serif text-ivory text-2xl md:text-3xl font-light mb-8 leading-tight">
              Al Forsan Street<br />Khalifa City, Abu Dhabi
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-bronze mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-muted-foreground text-[10px] tracking-[0.3em] font-sans uppercase mb-1">Address</p>
                  <p className="text-sand/80 text-sm font-sans leading-relaxed">
                    Al Forsan Street,<br />Khalifa City A,<br />Abu Dhabi, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-4 h-4 text-bronze mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-muted-foreground text-[10px] tracking-[0.3em] font-sans uppercase mb-1">Opening Hours</p>
                  <p className="text-sand/80 text-sm font-sans">
                    Daily: 10:00 AM – 2:30 AM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Car className="w-4 h-4 text-bronze mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-muted-foreground text-[10px] tracking-[0.3em] font-sans uppercase mb-1">Parking</p>
                  <p className="text-sand/80 text-sm font-sans">
                    Free ground-level parking available directly outside the building
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-4 h-4 text-bronze mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-muted-foreground text-[10px] tracking-[0.3em] font-sans uppercase mb-1">Contact</p>
                  <p className="text-sand/80 text-sm font-sans">
                    <a href="tel:+971567372259" className="hover:text-bronze transition-colors">+971 56 737 2259</a><br />
                    <a href="tel:+971554855344" className="hover:text-bronze transition-colors">+971 55 485 5344</a>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=24.4071839%2C54.5490706"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-bronze/50 text-bronze hover:bg-bronze hover:text-espresso px-5 py-2.5 text-xs tracking-[0.2em] font-sans uppercase transition-all duration-400 text-center"
              >
                View on Map
              </a>
              <a
                href="tel:+971567372259"
                className="border border-sand/20 text-sand/70 hover:border-ivory/40 hover:text-ivory px-5 py-2.5 text-xs tracking-[0.2em] font-sans uppercase transition-all duration-400 text-center"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
