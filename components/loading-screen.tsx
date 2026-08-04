'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  isLoading: boolean
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: '#0f0c0a' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
          {/* Bronze line top */}
          <motion.div
            className="absolute top-0 left-0 h-px bg-bronze"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
          />

          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            >
              <p className="text-bronze tracking-[0.4em] text-xs mb-6 font-sans uppercase">
                Al Forsan · Khalifa City
              </p>
              <h1 className="font-serif text-ivory text-6xl md:text-8xl font-light tracking-widest">
                DORAL
              </h1>
              <p className="text-sand tracking-[0.5em] text-sm mt-2 font-sans uppercase">
                SPA
              </p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="mt-12 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="w-48 h-px bg-charcoal mx-auto overflow-hidden">
                <motion.div
                  className="h-full bg-bronze"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
                />
              </div>
              <motion.p
                className="text-muted-foreground text-xs tracking-[0.3em] mt-4 font-sans uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Preparing your experience
              </motion.p>
            </motion.div>
          </div>

          {/* Bronze line bottom */}
          <motion.div
            className="absolute bottom-0 right-0 h-px bg-bronze"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
