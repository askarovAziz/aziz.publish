'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import LoadingScreen from '@/components/loading-screen'
import SmoothScrollProvider from '@/components/smooth-scroll-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'

// Dynamic imports for heavy scroll components
const HeroSection = dynamic(() => import('@/components/sections/hero-section'), { ssr: false })
const ExperienceSection = dynamic(() => import('@/components/sections/experience-section'), { ssr: false })
const TreatmentsSection = dynamic(() => import('@/components/sections/treatments-section'), { ssr: false })
const InteractiveSelector = dynamic(() => import('@/components/sections/interactive-selector'), { ssr: false })
const CinematicSection = dynamic(() => import('@/components/sections/cinematic-section'), { ssr: false })
const CoupleSection = dynamic(() => import('@/components/sections/couple-section'), { ssr: false })
const TherapistsSection = dynamic(() => import('@/components/sections/therapists-section'), { ssr: false })
const GallerySection = dynamic(() => import('@/components/sections/gallery-section'), { ssr: false })
const LocationSection = dynamic(() => import('@/components/sections/location-section'), { ssr: false })
const ReviewsSection = dynamic(() => import('@/components/sections/reviews-section'), { ssr: false })
const BookingSection = dynamic(() => import('@/components/sections/booking-section'), { ssr: false })
const CustomCursor = dynamic(() => import('@/components/custom-cursor'), { ssr: false })

export default function DoralSpaPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for premium feel
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2400)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Film grain overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Loading screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Main site — only visible after loading */}
      {!isLoading && (
        <SmoothScrollProvider>
          <div className="relative" style={{ cursor: 'none' }}>
            {/* Navigation */}
            <Header />

            <main>
              {/* 01 Hero */}
              <HeroSection />

              {/* 02 The Experience */}
              <ExperienceSection />

              {/* 03 Treatments */}
              <TreatmentsSection />

              {/* 04 Therapists */}
              <TherapistsSection />

              {/* 05 How Do You Want to Feel */}
              <InteractiveSelector />

              {/* 06 Cinematic — Breathe In / Let Go */}
              <CinematicSection />

              {/* 07 Couple Experience */}
              <CoupleSection />

              {/* 08 Horizontal Gallery */}
              <GallerySection />

              {/* 09 Location */}
              <LocationSection />

              {/* 10 Reviews */}
              <ReviewsSection />

              {/* 11 Final Booking CTA */}
              <BookingSection />
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </SmoothScrollProvider>
      )}
    </>
  )
}
