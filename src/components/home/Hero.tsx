"use client"

import { motion } from "framer-motion"
import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useLanguage } from "@/providers/language-provider"
import { ArrowRight, ChevronDown } from "lucide-react"

const Hero = () => {
  const { language } = useLanguage()
  
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine)
  }, [])

  const scrollToContent = () => {
    const contentSection = document.getElementById("main-content")
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden bg-secondary">
      <Particles
        className="absolute inset-0"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
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
              value: "#0053FF",
            },
            links: {
              color: "#0053FF",
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
            <span className="text-sm md:text-base text-primary font-semibold uppercase tracking-wider">
              {language === "en" ? "Welcome to the Community" : "مرحباً بك في المجتمع"}
            </span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
              {language === "en" ? (
                <>
                  Your Ultimate
                  <span className="text-primary block mt-2 font-extrabold">
                    Football Manager
                  </span>
                  Community
                </>
              ) : (
                <>
                  مجتمعك الأول
                  <span className="text-primary block mt-2 font-extrabold">
                    لمدير كرة القدم
                  </span>
                  العربي
                </>
              )}
            </h1>
          </motion.div>

          <motion.p
            className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {language === "en"
              ? "Join thousands of managers sharing tactics, discovering wonderkids, and mastering the game together."
              : "انضم إلى آلاف المدربين يتشاركون التكتيكات، يكتشفون المواهب الشابة، ويتقنون اللعبة معًا."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-shadow"
            >
              {language === "en" ? "Get Started" : "ابدأ الآن"}
              <ArrowRight className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--accent))" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-background border-2 border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              {language === "en" ? "Learn More" : "اعرف المزيد"}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                value: "500+",
                label: language === "en" ? "FM24 Wonderkids" : "مواهب شابة",
                description: language === "en" ? "Potential superstars under 20" : "نجوم المستقبل تحت 20 عامًا",
              },
              {
                value: "300+",
                label: language === "en" ? "Free Transfers" : "انتقالات مجانية",
                description: language === "en" ? "Available on free transfer" : "متاح للانتقال المجاني",
              },
              {
                value: "200+",
                label: language === "en" ? "Best Bargains" : "أفضل الصفقات",
                description: language === "en" ? "Value for money players" : "لاعبون بقيمة مناسبة",
              },
              {
                value: "400+",
                label: language === "en" ? "Contract Expiring" : "عقود منتهية",
                description: language === "en" ? "Players with expiring contracts" : "لاعبون بعقود منتهية",
              },
              {
                value: "50+",
                label: language === "en" ? "Richest Clubs" : "أغنى الأندية",
                description: language === "en" ? "Clubs with biggest budgets" : "الأندية ذات الميزانيات الأكبر",
              },
              {
                value: "24/7",
                label: language === "en" ? "FM Updates" : "تحديثات FM",
                description: language === "en" ? "Latest database updates" : "أحدث تحديثات قاعدة البيانات",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="group p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="text-3xl font-bold text-primary group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="font-medium text-foreground mt-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.description}</div>
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
            repeatType: "reverse",
          }}
          className="flex flex-col items-center gap-2 hover:text-primary transition-colors"
        >
          <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {language === "en" ? "Scroll to explore" : "اسحب للاستكشاف"}
          </span>
          <ChevronDown className="h-4 w-4 text-muted-foreground animate-bounce hover:text-primary" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
