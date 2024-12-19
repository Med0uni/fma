'use client'

import { useLanguage } from '@/providers/language-provider'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Clock,
  ArrowRight,
  Gamepad2,
  Users,
  Trophy,
  Briefcase,
  LineChart,
  Shield,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const guides = [
  {
    title: 'Complete Training Guide for FM24',
    titleAr: 'دليل التدريب الكامل لـ FM24',
    excerpt:
      'Master the new training system and develop world-class players with our comprehensive guide.',
    excerptAr:
      'أتقن نظام التدريب الجديد وطور لاعبين من الطراز العالمي مع دليلنا الشامل.',
    category: 'Training',
    categoryAr: 'التدريب',
    icon: Briefcase,
    readTime: '15',
    image: '/images/guides/training.jpg',
    slug: 'training-guide-fm24',
    difficulty: 'Advanced',
    difficultyAr: 'متقدم',
  },
  {
    title: 'Youth Development Masterclass',
    titleAr: 'دورة متقدمة في تطوير الشباب',
    excerpt:
      'Learn how to build a successful youth academy and nurture the next generation of superstars.',
    excerptAr:
      'تعلم كيفية بناء أكاديمية شباب ناجحة ورعاية الجيل القادم من النجوم.',
    category: 'Youth',
    categoryAr: 'الشباب',
    icon: Users,
    readTime: '12',
    image: '/images/guides/youth.jpg',
    slug: 'youth-development-masterclass',
    difficulty: 'Intermediate',
    difficultyAr: 'متوسط',
  },
  {
    title: 'Advanced Tactical Analysis',
    titleAr: 'التحليل التكتيكي المتقدم',
    excerpt:
      'Deep dive into tactical analysis, player roles, and creating winning formations.',
    excerptAr: 'تعمق في التحليل التكتيكي وأدوار اللاعبين وإنشاء تشكيلات فائزة.',
    category: 'Tactics',
    categoryAr: 'التكتيكات',
    icon: Gamepad2,
    readTime: '20',
    image: '/images/guides/tactics.jpg',
    slug: 'advanced-tactical-analysis',
    difficulty: 'Advanced',
    difficultyAr: 'متقدم',
  },
  {
    title: 'Financial Management Tips',
    titleAr: 'نصائح الإدارة المالية',
    excerpt:
      'Learn how to balance the books, manage wages, and build a sustainable club.',
    excerptAr: 'تعلم كيفية موازنة الدفاتر وإدارة الأجور وبناء نادٍ مستدام.',
    category: 'Finance',
    categoryAr: 'المالية',
    icon: LineChart,
    readTime: '10',
    image: '/images/guides/finance.jpg',
    slug: 'financial-management-tips',
    difficulty: 'Intermediate',
    difficultyAr: 'متوسط',
  },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'bg-green-500/10 text-green-500'
    case 'intermediate':
      return 'bg-yellow-500/10 text-yellow-500'
    case 'advanced':
      return 'bg-purple-500/10 text-purple-500'
    default:
      return 'bg-primary/10 text-primary'
  }
}

export default function FMGuidesSection() {
  const { language } = useLanguage()

  return (
    <section className="mt-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {language === 'en' ? 'FM Guides' : 'أدلة FM'}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {language === 'en'
              ? 'Master the game with our in-depth guides'
              : 'أتقن اللعبة مع أدلتنا المتعمقة'}
          </p>
        </div>
        <Link
          href="/guides"
          className="group flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
        >
          <span>{language === 'en' ? 'View All' : 'عرض الكل'}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {guides.map((guide, index) => (
          <motion.div
            key={guide.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={`/guides/${guide.slug}`}
              className="group relative flex h-full overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              {/* Left Content */}
              <div className="relative flex w-1/3 items-center justify-center bg-gradient-to-br from-primary/5 via-primary/10 to-transparent p-6">
                <guide.icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Right Content */}
              <div className="flex-1 p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${getDifficultyColor(
                      guide.difficulty
                    )}`}
                  >
                    {language === 'en' ? guide.difficulty : guide.difficultyAr}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>
                      {guide.readTime}{' '}
                      {language === 'en' ? 'min read' : 'دقيقة قراءة'}
                    </span>
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
                  {language === 'en' ? guide.title : guide.titleAr}
                </h3>

                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                  {language === 'en' ? guide.excerpt : guide.excerptAr}
                </p>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>
                    {language === 'en' ? guide.category : guide.categoryAr}
                  </span>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 border-2 border-primary/0 transition-all duration-300 group-hover:border-primary/10" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Featured Guide Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 overflow-hidden rounded-lg border bg-card"
      >
        <Link href="/guides/complete-beginners-guide" className="group block">
          <div className="relative flex flex-col gap-6 md:flex-row">
            {/* Image Section */}
            <div className="relative h-48 w-full md:h-auto md:w-2/5">
              <Image
                src="/images/guides/featured.jpg"
                alt="Complete Beginner's Guide"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col justify-center p-6">
              <div className="mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {language === 'en' ? 'Featured Guide' : 'الدليل المميز'}
                </span>
              </div>

              <h3 className="mb-2 text-2xl font-bold transition-colors group-hover:text-primary">
                {language === 'en'
                  ? "Complete Beginner's Guide to FM24"
                  : 'الدليل الكامل للمبتدئين في FM24'}
              </h3>

              <p className="mb-4 text-muted-foreground">
                {language === 'en'
                  ? 'Everything you need to know to start your Football Manager journey. From basic controls to advanced features.'
                  : 'كل ما تحتاج إلى معرفته لبدء رحلتك في Football Manager. من الضوابط الأساسية إلى الميزات المتقدمة.'}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>
                    30 {language === 'en' ? 'min read' : 'دقيقة قراءة'}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="h-4 w-4" />
                  <span>
                    {language === 'en'
                      ? 'Beginner Friendly'
                      : 'مناسب للمبتدئين'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  )
}
