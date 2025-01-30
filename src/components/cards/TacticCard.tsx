'use client'

import { motion } from 'framer-motion'
import { Download, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { TacticCardProps } from '@/types/props/tacticCardProps'
import { useLanguage } from '@/providers/language-provider'

export default function TacticCard({
  title,
  formation,
  featuredImage,
  slug,
}: TacticCardProps) {
  const { language } = useLanguage()

  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${featuredImage?.url || '/default-image.jpg'}`

  return (
    <Link href={`/tactics/${slug}`}>
      <div className="group relative h-[280px] overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-md">
        <div className="relative h-36 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-2 left-2 rounded-md bg-primary/10 px-2 py-1 text-sm text-primary">
            {formation}
          </div>
        </div>
        <div className="flex h-[136px] flex-col justify-between p-4">
          <h3 className="line-clamp-2 text-base font-semibold transition-colors group-hover:text-primary">
            {title}
          </h3>
          <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
