'use client'

import { useLanguage } from '@/providers/language-provider'
import Image from 'next/image'
import Link from 'next/link'
import { Download, Star } from 'lucide-react'

interface TacticCardProps {
  title: string
  titleAr: string
  formation: string
  downloads: number
  rating: number
  image: string
  slug: string
}

export default function TacticCard({
  title,
  titleAr,
  formation,
  downloads,
  rating,
  image,
  slug,
}: TacticCardProps) {
  const { language } = useLanguage()

  return (
    <Link href={`/tactics/${slug}`}>
      <div className="group relative overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-md">
        <div className="relative h-32 w-full">
          <Image
            src={image}
            alt={language === 'en' ? title : titleAr}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-2 left-2 rounded-md bg-primary/10 px-2 py-1 text-sm text-primary">
            {formation}
          </div>
        </div>
        <div className="p-4">
          <h3 className="line-clamp-1 font-semibold transition-colors group-hover:text-primary">
            {language === 'en' ? title : titleAr}
          </h3>
          <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>{downloads}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
