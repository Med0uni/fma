"use client"

import { useLanguage } from "@/providers/language-provider"
import { Coffee, Heart, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function SupportSection() {
  const { language } = useLanguage()

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-lg overflow-hidden"
    >
      <div className="relative bg-gradient-to-br from-primary via-purple-500 to-pink-500 p-6 text-white">
        <div className="absolute top-0 left-0 w-full h-full">
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
                repeatType: "reverse",
              }}
            >
              <Coffee className="h-12 w-12" />
            </motion.div>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold">
              {language === "en" ? "Support FM Arabia" : "ادعم FM Arabia"}
            </h3>
            <p className="text-sm text-white/90">
              {language === "en" 
                ? "Help us keep the community growing"
                : "ساعدنا في تنمية المجتمع"}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-white text-primary font-medium py-3 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
          >
            <Heart className="h-4 w-4 fill-primary" />
            <span>
              {language === "en" ? "Become a Supporter" : "كن داعماً"}
            </span>
            <Sparkles className="h-4 w-4" />
          </motion.button>

          <p className="text-xs text-center text-white/80">
            {language === "en"
              ? "Join our amazing supporters and get exclusive perks!"
              : "انضم إلى داعمينا الرائعين واحصل على مزايا حصرية!"}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
