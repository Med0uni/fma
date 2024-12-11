'use client'

import { useLanguage } from '@/providers/language-provider'
import { Coffee, Heart, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SupportSection() {
  const { language } = useLanguage()

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="overflow-hidden rounded-lg"
    >
      <div className="relative bg-gradient-to-br from-primary via-purple-500 to-pink-500 p-6 text-white">
        <div className="absolute left-0 top-0 h-full w-full">
          <div className="absolute inset-0 bg-black opacity-10" />
          <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-10" />
        </div>

        <div className="relative z-10 space-y-6">
          <div className="flex justify-center">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <Coffee className="h-12 w-12" />
            </motion.div>
          </div>

          <div className="space-y-2 text-center">
            <h3 className="text-xl font-bold">
              {language === 'en' ? 'Support FM Arabia' : 'ادعم FM Arabia'}
            </h3>
            <p className="text-sm text-white/90">
              {language === 'en'
                ? 'Help us keep the community growing'
                : 'ساعدنا في تنمية المجتمع'}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-3 font-medium text-primary transition-colors hover:bg-white/90"
          >
            <Heart className="h-4 w-4 fill-primary" />
            <span>
              {language === 'en' ? 'Become a Supporter' : 'كن داعماً'}
            </span>
            <Sparkles className="h-4 w-4" />
          </motion.button>

          <p className="text-center text-xs text-white/80">
            {language === 'en'
              ? 'Join our amazing supporters and get exclusive perks!'
              : 'انضم إلى داعمينا الرائعين واحصل على مزايا حصرية!'}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
