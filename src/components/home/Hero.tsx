'use client'

import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from '@tsparticles/slim'
import { useLanguage } from '@/providers/language-provider'
import { ArrowRight, ChevronDown, Search, Users, Trophy, Star, Database } from 'lucide-react'
import TacticalBoard from '../tactical-board/TacticalBoard'

const Hero = () => {
  const { language } = useLanguage()

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine)
  }, [])

  const scrollToContent = () => {
    const contentSection = document.getElementById('main-content')
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background via-background/95 to-background">
      {/* Tactical Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main Content */}
      <div className="container relative">
        <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 space-y-8"
          >
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Users, label: '10K+ Members' },
                { icon: Trophy, label: '500+ Tactics' },
                { icon: Star, label: '1K+ Wonderkids' },
                { icon: Database, label: 'Daily Updates' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium"
                >
                  <stat.icon className="h-4 w-4 text-primary" />
                  <span>{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                {language === 'en' ? (
                  <>
                    Where
                    <span className="relative mx-3 text-primary">
                      Tactics
                      <motion.div
                        className="absolute -inset-2 -z-10 opacity-20 blur-xl"
                        animate={{
                          background: [
                            'radial-gradient(circle at 20% 50%, var(--primary), transparent)',
                            'radial-gradient(circle at 80% 50%, var(--primary), transparent)',
                            'radial-gradient(circle at 20% 50%, var(--primary), transparent)',
                          ],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />
                    </span>
                    Meet
                    <span className="relative mx-3 text-primary">
                      Success
                      <motion.div
                        className="absolute -inset-2 -z-10 opacity-20 blur-xl"
                        animate={{
                          background: [
                            'radial-gradient(circle at 80% 50%, var(--primary), transparent)',
                            'radial-gradient(circle at 20% 50%, var(--primary), transparent)',
                            'radial-gradient(circle at 80% 50%, var(--primary), transparent)',
                          ],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />
                    </span>
                  </>
                ) : (
                  <>
                    حيث تلتقي
                    <span className="relative mx-3 text-primary">
                      التكتيكات
                      <motion.div
                        className="absolute -inset-2 -z-10 opacity-20 blur-xl"
                        animate={{
                          background: [
                            'radial-gradient(circle at 20% 50%, var(--primary), transparent)',
                            'radial-gradient(circle at 80% 50%, var(--primary), transparent)',
                            'radial-gradient(circle at 20% 50%, var(--primary), transparent)',
                          ],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />
                    </span>
                    مع
                    <span className="relative mx-3 text-primary">
                      النجاح
                      <motion.div
                        className="absolute -inset-2 -z-10 opacity-20 blur-xl"
                        animate={{
                          background: [
                            'radial-gradient(circle at 80% 50%, var(--primary), transparent)',
                            'radial-gradient(circle at 20% 50%, var(--primary), transparent)',
                            'radial-gradient(circle at 80% 50%, var(--primary), transparent)',
                          ],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />
                    </span>
                  </>
                )}
              </h1>

              <p className="text-xl text-muted-foreground">
                {language === 'en'
                  ? 'Join the largest Arabic Football Manager community. Share tactics, discover wonderkids, and dominate the league together.'
                  : 'انضم إلى أكبر مجتمع عربي لمدير كرة القدم. شارك التكتيكات، اكتشف المواهب، وتصدر الدوري معًا.'}
              </p>
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative max-w-md"
            >
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder={language === 'en' ? 'Search tactics, wonderkids, guides...' : 'ابحث عن التكتيكات، المواهب، الأدلة...'}
                className="w-full rounded-lg border bg-card/50 py-3 pl-10 pr-4 backdrop-blur-sm transition-colors focus:border-primary"
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground"
              >
                {language === 'en' ? 'Join Community' : 'انضم للمجتمع'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-secondary"
              >
                {language === 'en' ? 'Browse Tactics' : 'تصفح التكتيكات'}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Tactical Board */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <TacticalBoard />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
