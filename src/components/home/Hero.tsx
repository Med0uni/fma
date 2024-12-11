'use client'

import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useLanguage } from '@/providers/language-provider'
import { ArrowRight, ChevronDown } from 'lucide-react'

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
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden bg-secondary">
      <Particles
        className="absolute inset-0"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'grab',
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5,
                },
              },
            },
          },
          particles: {
            color: {
              value: '#0053FF',
            },
            links: {
              color: '#0053FF',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              random: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="container relative z-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary md:text-base">
              {language === 'en'
                ? 'Welcome to the Community'
                : 'مرحباً بك في المجتمع'}
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-7xl">
              {language === 'en' ? (
                <>
                  Your Ultimate
                  <span className="mt-2 block font-extrabold text-primary">
                    Football Manager
                  </span>
                  Community
                </>
              ) : (
                <>
                  مجتمعك الأول
                  <span className="mt-2 block font-extrabold text-primary">
                    لمدير كرة القدم
                  </span>
                  العربي
                </>
              )}
            </h1>
          </motion.div>

          <motion.p
            className="mx-auto max-w-2xl text-xl font-medium text-muted-foreground md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {language === 'en'
              ? 'Join thousands of managers sharing tactics, discovering wonderkids, and mastering the game together.'
              : 'انضم إلى آلاف المدربين يتشاركون التكتيكات، يكتشفون المواهب الشابة، ويتقنون اللعبة معًا.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: 'hsl(var(--primary))',
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-shadow hover:shadow-xl hover:shadow-primary/35"
            >
              {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
              <ArrowRight className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: 'hsl(var(--accent))',
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border-2 border-border bg-background px-8 py-4 font-medium transition-colors hover:bg-accent"
            >
              {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3"
          >
            {[
              {
                value: '500+',
                label: language === 'en' ? 'FM24 Wonderkids' : 'مواهب شابة',
                description:
                  language === 'en'
                    ? 'Potential superstars under 20'
                    : 'نجوم المستقبل تحت 20 عامًا',
              },
              {
                value: '300+',
                label: language === 'en' ? 'Free Transfers' : 'انتقالات مجانية',
                description:
                  language === 'en'
                    ? 'Available on free transfer'
                    : 'متاح للانتقال المجاني',
              },
              {
                value: '200+',
                label: language === 'en' ? 'Best Bargains' : 'أفضل الصفقات',
                description:
                  language === 'en'
                    ? 'Value for money players'
                    : 'لاعبون بقيمة مناسبة',
              },
              {
                value: '400+',
                label: language === 'en' ? 'Contract Expiring' : 'عقود منتهية',
                description:
                  language === 'en'
                    ? 'Players with expiring contracts'
                    : 'لاعبون بعقود منتهية',
              },
              {
                value: '50+',
                label: language === 'en' ? 'Richest Clubs' : 'أغنى الأندية',
                description:
                  language === 'en'
                    ? 'Clubs with biggest budgets'
                    : 'الأندية ذات الميزانيات الأكبر',
              },
              {
                value: '24/7',
                label: language === 'en' ? 'FM Updates' : 'تحديثات FM',
                description:
                  language === 'en'
                    ? 'Latest database updates'
                    : 'أحدث تحديثات قاعدة البيانات',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="group rounded-lg border border-border/50 bg-background/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/50"
              >
                <div className="text-3xl font-bold text-primary transition-transform group-hover:scale-105">
                  {stat.value}
                </div>
                <div className="mt-2 font-medium text-foreground">
                  {stat.label}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-20 mt-16 cursor-pointer"
        onClick={scrollToContent}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="flex flex-col items-center gap-2 transition-colors hover:text-primary"
        >
          <span className="text-sm text-muted-foreground transition-colors hover:text-primary">
            {language === 'en' ? 'Scroll to explore' : 'اسحب للاستكشاف'}
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce text-muted-foreground hover:text-primary" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
