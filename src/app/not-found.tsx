'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/providers/language-provider'

export default function NotFound() {
  const { language } = useLanguage()

  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth)
    }
  }, [])

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#2a5e1e] bg-[linear-gradient(to_right,#2a5e1e_50%,#245219_50%)] bg-[length:40px_40px]">
        <div className="absolute inset-4 border-2 border-white/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute h-full w-[2px] bg-white/40" />
          <motion.div
            className="absolute h-32 w-32 rounded-full border-2 border-white/40"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <div className="absolute h-2 w-2 rounded-full bg-white/40" />
        </div>

        <div className="absolute left-4 top-1/2 flex -translate-y-1/2 items-center">
          <div className="relative h-96 w-40 border-2 border-white/40">
            <div className="absolute left-0 top-1/2 h-64 w-24 -translate-y-1/2 border-2 border-white/40" />
            <div className="absolute right-24 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/40" />
          </div>
          <div className="absolute left-40 top-1/2 -translate-y-1/2">
            <motion.div
              className="relative h-48 w-24 overflow-hidden"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="absolute -left-24 h-48 w-48 rounded-full border-2 border-white/40" />
            </motion.div>
          </div>
        </div>

        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center">
          <div className="relative h-96 w-40 border-2 border-white/40">
            <div className="absolute right-0 top-1/2 h-64 w-24 -translate-y-1/2 border-2 border-white/40" />
            <div className="absolute left-24 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/40" />
          </div>
          <div className="absolute right-40 top-1/2 -translate-y-1/2">
            <motion.div
              className="relative h-48 w-24 overflow-hidden"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="absolute -right-24 h-48 w-48 rounded-full border-2 border-white/40" />
            </motion.div>
          </div>
        </div>

        <div className="absolute left-4 top-4 h-8 w-8 rounded-br-full border-2 border-white/40" />
        <div className="absolute right-4 top-4 h-8 w-8 rounded-bl-full border-2 border-white/40" />
        <div className="absolute bottom-4 left-4 h-8 w-8 rounded-tr-full border-2 border-white/40" />
        <div className="absolute bottom-4 right-4 h-8 w-8 rounded-tl-full border-2 border-white/40" />

        <motion.div
          className="absolute"
          animate={{
            x: [-20, screenWidth + 20],
            y: [0, 20, -20, 0],
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            width: 20,
            height: 20,
            background: 'radial-gradient(circle at 30% 30%, white, #ccc)',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          }}
        />

        <div className="absolute left-2 top-1/2 h-48 w-8 -translate-y-1/2 bg-[repeating-linear-gradient(0deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
        <div className="absolute right-2 top-1/2 h-48 w-8 -translate-y-1/2 bg-[repeating-linear-gradient(0deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
      </div>

      <div className="relative z-10 px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg bg-black/20 p-8 backdrop-blur-sm"
        >
          <h1 className="mb-4 text-9xl font-bold">404</h1>
          <h2 className="mb-6 text-2xl font-bold md:text-4xl">
            {language === 'en' ? 'Ball Out of Play!' : '!الكرة خارج الملعب'}
          </h2>
          <p className="mb-8 text-lg text-white/80 md:text-xl">
            {language === 'en'
              ? "Looks like this play went out of bounds. Let's get back in the game!"
              : '!يبدو أن هذه اللعبة خرجت عن الحدود. دعنا نعود إلى المباراة'}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-medium text-[#2a5e1e] transition-colors hover:bg-white/90"
            >
              {language === 'en' ? 'Back to Home' : 'العودة للرئيسية'}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
