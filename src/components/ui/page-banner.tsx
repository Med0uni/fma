"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/providers/language-provider"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface PageBannerProps {
  title: string
  titleAr: string
  subtitle?: string
  subtitleAr?: string
  backgroundImage: string
  icon?: React.ReactNode
  height?: "sm" | "md" | "lg"
  align?: "left" | "center"
  hasSearch?: boolean
  actions?: React.ReactNode
}

const heightClasses = {
  sm: "h-[200px]",
  md: "h-[300px]",
  lg: "h-[400px]"
}

export default function PageBanner({
  title,
  titleAr,
  subtitle,
  subtitleAr,
  backgroundImage,
  icon,
  height = "md",
  align = "center",
  hasSearch,
  actions
}: PageBannerProps) {
  const { language } = useLanguage()

  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden",
        heightClasses[height]
      )}
      role="banner"
      aria-label={language === "en" ? title : titleAr}
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      </div>

      <div 
        className={cn(
          "relative h-full container flex flex-col justify-center",
          align === "center" ? "items-center text-center" : "items-start text-left"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 text-primary">
            {icon && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="h-8 w-8 md:h-10 md:w-10"
              >
                {icon}
              </motion.div>
            )}
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {language === "en" ? title : titleAr}
            </motion.h1>
          </div>

          {(subtitle || subtitleAr) && (
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {language === "en" ? subtitle : subtitleAr}
            </motion.p>
          )}

          {hasSearch && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full max-w-lg mt-6"
            >
              <input
                type="search"
                placeholder={language === "en" ? "Search..." : "...بحث"}
                className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border backdrop-blur-sm focus:border-primary transition-colors"
              />
            </motion.div>
          )}

          {actions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6"
            >
              {actions}
            </motion.div>
          )}
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--background)_0%,transparent_10%,transparent_90%,var(--background)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </motion.div>
    </div>
  )
}
