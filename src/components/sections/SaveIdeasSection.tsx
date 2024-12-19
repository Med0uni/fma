'use client'

import { useLanguage } from '@/providers/language-provider'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Trophy, Users, Coins } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const demoSaveIdeas = [
  {
    title: 'From Non-League to Champions League',
    titleAr: 'من الدوريات الدنيا إلى دوري الأبطال',
    excerpt:
      'Start your journey with a non-league team and build them up to European glory. Perfect for long-term saves.',
    excerptAr:
      'ابدأ رحلتك مع فريق من الدوريات الدنيا وقم ببنائه للمجد الأوروبي. مثالي للحفظ طويل المدى.',
    date: '2024-02-15',
    category: 'Road to Glory',
    categoryAr: 'طريق المجد',
    image: '/images/saves/road-to-glory.jpg',
    slug: 'non-league-to-champions',
    difficulty: 'Hard',
    difficultyAr: 'صعب',
    duration: 'Long Term',
    durationAr: 'طويل المدى',
    budget: 'Low',
    budgetAr: 'منخفضة',
  },
  {
    title: 'Ajax Youth Development Challenge',
    titleAr: 'تحدي تطوير الشباب مع أياكس',
    excerpt:
      "Follow in the footsteps of Ajax's legendary youth system. Focus on developing young talents into world-class stars.",
    excerptAr:
      'اتبع خطى نظام الشباب الأسطوري لأياكس. ركز على تطوير المواهب الشابة إلى نجوم عالميين.',
    date: '2024-02-14',
    category: 'Youth Academy',
    categoryAr: 'أكاديمية الشباب',
    image: '/images/saves/ajax-youth.jpg',
    slug: 'ajax-youth-challenge',
    difficulty: 'Medium',
    difficultyAr: 'متوسط',
    duration: 'Medium Term',
    durationAr: 'متوسط المدى',
    budget: 'Medium',
    budgetAr: 'متوسطة',
  },
  {
    title: 'Moneyball in Serie A',
    titleAr: 'مانيبول في الدوري الإيطالي',
    excerpt:
      "Use data-driven recruitment to build a successful team on a budget in Italy's top flight.",
    excerptAr:
      'استخدم التوظيف القائم على البيانات لبناء فريق ناجح بميزانية محدودة في الدوري الإيطالي.',
    date: '2024-02-13',
    category: 'Financial Challenge',
    categoryAr: 'التحدي المالي',
    image: '/images/saves/moneyball.jpg',
    slug: 'moneyball-serie-a',
    difficulty: 'Hard',
    difficultyAr: 'صعب',
    duration: 'Short Term',
    durationAr: 'قصير المدى',
    budget: 'Low',
    budgetAr: 'منخفضة',
  },
  {
    title: "Restore AC Milan's Glory",
    titleAr: 'استعادة مجد ميلان',
    excerpt:
      'Take control of AC Milan and bring back their European dominance. A perfect fallen giant challenge.',
    excerptAr:
      'تولى إدارة ميلان وأعد هيمنتهم الأوروبية. تحدي مثالي للعملاق الساقط.',
    date: '2024-02-12',
    category: 'Fallen Giant',
    categoryAr: 'العملاق الساقط',
    image: '/images/saves/milan.jpg',
    slug: 'restore-milan-glory',
    difficulty: 'Medium',
    difficultyAr: 'متوسط',
    duration: 'Long Term',
    durationAr: 'طويل المدى',
    budget: 'High',
    budgetAr: 'عالية',
  },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-green-500/10 text-green-500'
    case 'medium':
      return 'bg-yellow-500/10 text-yellow-500'
    case 'hard':
      return 'bg-red-500/10 text-red-500'
    default:
      return 'bg-primary/10 text-primary'
  }
}

export default function SaveIdeasSection() {
  const { language } = useLanguage()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: 'start',
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="overflow-hidden rounded-lg bg-gradient-to-br from-secondary/50 via-secondary/30 to-transparent backdrop-blur-sm">
      <div className="p-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {language === 'en' ? 'Save Ideas' : 'أفكار اللعب'}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {language === 'en'
                ? 'Find your next FM adventure'
                : 'اعثر على مغامرتك القادمة في FM'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollPrev}
              className="rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-sm transition-colors hover:bg-background disabled:opacity-50"
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollNext}
              className="rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-sm transition-colors hover:bg-background disabled:opacity-50"
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {demoSaveIdeas.map((idea, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[300px] flex-[0_0_80%] md:flex-[0_0_45%] lg:flex-[0_0_400px]"
              >
                <Link
                  href={`/save-ideas/${idea.slug}`}
                  className="group block h-full overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={idea.image}
                      alt={language === 'en' ? idea.title : idea.titleAr}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                      {language === 'en' ? idea.category : idea.categoryAr}
                    </div>

                    {/* Difficulty Badge */}
                    <div
                      className={`absolute right-4 top-4 rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm ${getDifficultyColor(
                        idea.difficulty
                      )}`}
                    >
                      {language === 'en' ? idea.difficulty : idea.difficultyAr}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                      {language === 'en' ? idea.title : idea.titleAr}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                      {language === 'en' ? idea.excerpt : idea.excerptAr}
                    </p>

                    {/* Stats Grid */}
                    <div className="mt-6 grid grid-cols-3 gap-4 border-t pt-4">
                      <div className="text-center">
                        <Trophy className="mx-auto mb-1 h-4 w-4 text-primary" />
                        <span className="text-xs text-muted-foreground">
                          {language === 'en' ? idea.duration : idea.durationAr}
                        </span>
                      </div>
                      <div className="text-center">
                        <Users className="mx-auto mb-1 h-4 w-4 text-primary" />
                        <span className="text-xs text-muted-foreground">
                          {language === 'en'
                            ? idea.difficulty
                            : idea.difficultyAr}
                        </span>
                      </div>
                      <div className="text-center">
                        <Coins className="mx-auto mb-1 h-4 w-4 text-primary" />
                        <span className="text-xs text-muted-foreground">
                          {language === 'en' ? idea.budget : idea.budgetAr}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {demoSaveIdeas.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index === selectedIndex
                  ? 'w-6 bg-primary'
                  : 'w-1.5 bg-primary/30'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
