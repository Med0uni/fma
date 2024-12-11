"use client"

import { useLanguage } from "@/providers/language-provider"
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

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
  },
  {
    title: 'Build a National Dynasty',
    titleAr: 'بناء سلالة وطنية',
    excerpt:
      'Guide a nation from international obscurity to World Cup glory over multiple tournaments.',
    excerptAr:
      'قد منتخبًا من الغموض الدولي إلى مجد كأس العالم عبر بطولات متعددة.',
    date: '2024-02-11',
    category: 'International',
    categoryAr: 'دولي',
    image: '/images/saves/national.jpg',
    slug: 'national-dynasty',
  },
]
export default function SaveIdeasSection() {
  const { language } = useLanguage()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="rounded-lg bg-secondary/50 overflow-hidden h-full">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            {language === "en" ? "Save Ideas" : "أفكار اللعب"}
          </h2>
          <Link
            href="/save-ideas"
            className="text-primary hover:underline"
          >
            {language === "en" ? "View All" : "عرض المزيد"}
          </Link>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full p-2 -ml-4 shadow-lg backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full p-2 -mr-4 shadow-lg backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {demoSaveIdeas.map((idea, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <Link href={`/save-ideas/${idea.slug}`}>
                    <div className="mx-4 rounded-lg border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 group">
                      <div className="relative h-[200px]">
                        <Image
                          src={idea.image}
                          alt={language === "en" ? idea.title : idea.titleAr}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <span className="px-2 py-1 bg-primary/10 rounded-md text-primary text-sm">
                            {language === "en" ? idea.category : idea.categoryAr}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {language === "en" ? idea.title : idea.titleAr}
                        </h3>
                        <p className="text-muted-foreground">
                          {language === "en" ? idea.excerpt : idea.excerptAr}
                        </p>
                        <div className="mt-4 text-sm text-muted-foreground">
                          {idea.date}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {demoSaveIdeas.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedIndex
                    ? 'bg-primary'
                    : 'bg-primary/30'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
