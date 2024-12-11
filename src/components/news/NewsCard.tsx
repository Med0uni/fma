"use client"

import { motion } from "framer-motion"
import { Calendar, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/providers/language-provider"

interface NewsCardProps {
  title: string
  titleAr: string
  excerpt: string
  excerptAr: string
  date: string
  category: string
  categoryAr: string
  slug: string
  image: string
}

export default function NewsCard({
  title,
  titleAr,
  excerpt,
  excerptAr,
  date,
  category,
  categoryAr,
  slug,
  image
}: NewsCardProps) {
  const { language } = useLanguage()

  return (
    <div className="group relative rounded-lg border bg-card overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col md:flex-row h-full">
        <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
          <Image
            src={image}
            alt={language === "en" ? title : titleAr}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        
        <div className="flex-1 p-4 md:p-6">
          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-2">
            <Calendar className="h-3 w-3 md:h-4 md:w-4" />
            <time dateTime={date}>{date}</time>
            <span>•</span>
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              {language === "en" ? category : categoryAr}
            </span>
          </div>
          
          <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {language === "en" ? title : titleAr}
          </h3>
          
          <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-2">
            {language === "en" ? excerpt : excerptAr}
          </p>

          <Link 
            href={`/news/${slug}`}
            className="inline-flex items-center text-primary hover:text-primary/80 text-sm md:text-base transition-colors"
          >
            <span>{language === "en" ? "Read More" : "اقرأ المزيد"}</span>
            <ChevronRight className={`h-4 w-4 ${language === "ar" ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </div>
    </div>
  )
}
