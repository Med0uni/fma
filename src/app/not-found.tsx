"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/providers/language-provider"

export default function NotFound() {
  const { language } = useLanguage()

  return (
    <div className="min-h-[calc(100vh-4rem)] relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[#2a5e1e] bg-[linear-gradient(to_right,#2a5e1e_50%,#245219_50%)] bg-[length:40px_40px]">
        <div className="absolute inset-4 border-2 border-white/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[2px] h-full bg-white/40" />
          <motion.div 
            className="absolute w-32 h-32 border-2 border-white/40 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute w-2 h-2 bg-white/40 rounded-full" />
        </div>

        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
          <div className="relative w-40 h-96 border-2 border-white/40">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-64 border-2 border-white/40" />
            <div className="absolute right-24 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full" />
          </div>
          <div className="absolute left-40 top-1/2 -translate-y-1/2">
            <motion.div 
              className="relative w-24 h-48 overflow-hidden"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="absolute w-48 h-48 border-2 border-white/40 rounded-full -left-24" />
            </motion.div>
          </div>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
          <div className="relative w-40 h-96 border-2 border-white/40">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-64 border-2 border-white/40" />
            <div className="absolute left-24 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full" />
          </div>
          <div className="absolute right-40 top-1/2 -translate-y-1/2">
            <motion.div 
              className="relative w-24 h-48 overflow-hidden"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="absolute w-48 h-48 border-2 border-white/40 rounded-full -right-24" />
            </motion.div>
          </div>
        </div>

        <div className="absolute left-4 top-4 w-8 h-8 border-2 border-white/40 rounded-br-full" />
        <div className="absolute right-4 top-4 w-8 h-8 border-2 border-white/40 rounded-bl-full" />
        <div className="absolute left-4 bottom-4 w-8 h-8 border-2 border-white/40 rounded-tr-full" />
        <div className="absolute right-4 bottom-4 w-8 h-8 border-2 border-white/40 rounded-tl-full" />

        <motion.div
          className="absolute"
          animate={{
            x: [-20, window.innerWidth + 20],
            y: [0, 20, -20, 0],
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: 20,
            height: 20,
            background: "radial-gradient(circle at 30% 30%, white, #ccc)",
            borderRadius: "50%",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          }}
        />

        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-48 bg-[repeating-linear-gradient(0deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-48 bg-[repeating-linear-gradient(0deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-sm bg-black/20 p-8 rounded-lg"
        >
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {language === "en" 
              ? "Ball Out of Play!" 
              : "!الكرة خارج الملعب"}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/80">
            {language === "en"
              ? "Looks like this play went out of bounds. Let's get back in the game!"
              : "!يبدو أن هذه اللعبة خرجت عن الحدود. دعنا نعود إلى المباراة"}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#2a5e1e] rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              {language === "en" ? "Back to Home" : "العودة للرئيسية"}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
