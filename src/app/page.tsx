'use client'

import Hero from '@/components/home/Hero'
import NewsSection from '@/components/sections/NewsSection'
import SocialPanel from '@/components/social/SocialPanel'
import NewsletterSection from '@/components/sections/NewsletterSection'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  const scrollRef = useRef(null)
  const newsletterRef = useRef(null)
  const socialPanelRef = useRef(null)

  // Scroll progress for hero parallax
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Scroll control for social panel
  const { scrollYProgress: socialScrollY } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  })

  // Calculate the maximum translateY to prevent overlap
  const socialY = useTransform(socialScrollY, [0, 1], [0, -100], {
    clamp: false,
  })

  return (
    <div ref={scrollRef}>
      <motion.div style={{ y }}>
        <Hero />
      </motion.div>

      <div id="main-content" className="container py-12">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="space-y-12 lg:w-3/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <NewsSection />
            </motion.div>
          </div>

          <div className="lg:w-1/4 lg:pl-4">
            <motion.div
              ref={socialPanelRef}
              style={{ y: socialY }}
              className="sticky-panel-container"
            >
              <div className="sticky-until-news hardware-accelerated">
                <SocialPanel />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* NewsletterSection */}
      <div ref={newsletterRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <NewsletterSection />
        </motion.div>
      </div>
    </div>
  )
}
