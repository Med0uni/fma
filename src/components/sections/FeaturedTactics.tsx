'use client'

import { AnimatedCard } from '@/components/ui/animated-card'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { StaggerList } from '@/components/ui/stagger-list'
import { motion } from 'framer-motion'
import { Trophy, Users, Star } from 'lucide-react'
import Image from 'next/image'

const tactics = [
  {
    title: 'Gegenpress 4-3-3',
    downloads: '2.5k',
    rating: 4.8,
    image: '/images/tactics/tactic1.jpg',
  },
  {
    title: 'Tiki-Taka 4-2-3-1',
    downloads: '1.8k',
    rating: 4.7,
    image: '/images/tactics/tactic2.jpg',
  },
  {
    title: 'Counter-Attack 5-3-2',
    downloads: '1.2k',
    rating: 4.6,
    image: '/images/tactics/tactic3.jpg',
  },
]

export default function FeaturedTactics() {
  return (
    <section className="py-16">
      <ScrollReveal>
        <div className="container">
          <div className="mb-12 text-center">
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Featured Tactics
            </motion.h2>
            <motion.p
              className="mt-4 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover winning strategies from our community
            </motion.p>
          </div>

          <StaggerList className="grid gap-6 md:grid-cols-3">
            {tactics.map((tactic, index) => (
              <AnimatedCard key={index} className="group">
                <div className="p-6">
                  <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={tactic.image}
                      alt={tactic.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="mb-4 text-xl font-semibold">{tactic.title}</h3>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{tactic.downloads} downloads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span>{tactic.rating}</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </StaggerList>
        </div>
      </ScrollReveal>
    </section>
  )
}
