'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="relative min-h-[60vh] bg-slate-500 bg-gradient-to-b from-background via-background/95 to-background">
      {/* Background Image */}
      <div className="absolute inset-0 bg-opacity-90 bg-gradient-to-b from-herobackground/60 to-herobackground"></div>

      {/* Main Content */}
      <div className="container relative">
        <div className="grid min-h-[60vh] grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 space-y-8"
          >
            {/* Placeholder Text */}
            <h1 className="text-center text-4xl font-bold">
              Welcome to FM Arabia
            </h1>
          </motion.div>

          {/* Right Column - Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            {/* Optional Placeholder for Tactical Board */}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
