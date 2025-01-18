'use client'

import Hero from '@/components/home/Hero'
import NewsSection from '@/components/sections/NewsSection'
import SocialPanel from '@/components/social/SocialPanel'
import ScoutingSection from '@/components/sections/ScoutingSection'
import TacticsSection from '@/components/sections/TacticsSection'
import SaveIdeasSection from '@/components/sections/SaveIdeasSection'
import FMGuidesSection from '@/components/sections/FMGuidesSection'
import SupportSection from '@/components/sections/SupportSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

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

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ScoutingSection />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <TacticsSection />
              </motion.div>
            </div>
          </div>

          <div className="lg:w-1/4 lg:pl-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky-until-news">
                <SocialPanel />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="lg:w-3/4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SaveIdeasSection />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FMGuidesSection />
              </motion.div>
            </div>
            {/* <div className="lg:w-1/4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="sticky-until-news">
                  <SupportSection />
                </div>
              </motion.div>
            </div> */}
          </div>
        </div>
      </div>

      {/* NewsletterSection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <NewsletterSection />
      </motion.div>
    </div>
  )
}
