"use client"

import { useLanguage } from "@/providers/language-provider"
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

interface ScoutingCardProps {
  title: string
  titleAr: string
  date: string
  image: string
  slug: string
  category: string
  categoryAr: string
}

export default function ScoutingCard({
  title,
  titleAr,
  date,
  image,
  slug,
  category,
  categoryAr
}: ScoutingCardProps) {
  const { language } = useLanguage()

  return (
    <Link href={`/scouting/${slug}`}>
      <div className="group relative rounded-lg border bg-card overflow-hidden hover:border-primary/50 hover:shadow-md transition-all duration-300">
        <div className="relative h-32 w-full">
          <Image
            src={image}
            alt={language === "en" ? title : titleAr}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-2 left-2 px-2 py-1 bg-primary/10 rounded-md text-primary text-sm">
            {language === "en" ? category : categoryAr}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-1">
            {language === "en" ? title : titleAr}
          </h3>
          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{date}</time>
          </div>
        </div>
      </div>
    </Link>
  )
}
