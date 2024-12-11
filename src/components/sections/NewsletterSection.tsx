'use client'

import { useLanguage } from '@/providers/language-provider'
import { motion } from 'framer-motion'
import { Mail, Star, Trophy, Bell } from 'lucide-react'
import { useState } from 'react'

export default function NewsletterSection() {
  const { language } = useLanguage()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add newsletter subscription logic here
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background with pattern and gradient */}
      <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20" />

      {/* Content */}
      <div className="container relative py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl space-y-8 text-center"
        >
          {/* Icons */}
          <div className="mb-8 flex justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Trophy className="h-8 w-8 text-primary" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Star className="h-8 w-8 text-primary" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Bell className="h-8 w-8 text-primary" />
            </motion.div>
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {language === 'en'
                ? 'Join Our Winning Team!'
                : '!انضم إلى فريقنا الرابح'}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {language === 'en'
                ? 'Get exclusive tips, tactics, and FM insights delivered straight to your inbox.'
                : 'احصل على نصائح وتكتيكات حصرية ورؤى FM مباشرة إلى بريدك الإلكتروني.'}
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md flex-col items-center gap-4"
          >
            <div className="w-full space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'en' ? 'Your Name' : 'اسمك'}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-primary"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    language === 'en' ? 'Your Email' : 'بريدك الإلكتروني'
                  }
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-primary"
                  required
                />
                <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground 
                transition-all duration-200 hover:opacity-90 
                ${isSubmitting ? 'cursor-not-allowed opacity-70' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                  {language === 'en' ? 'Subscribing...' : '...جاري الاشتراك'}
                </span>
              ) : language === 'en' ? (
                'Subscribe Now'
              ) : (
                'اشترك الآن'
              )}
            </motion.button>
          </motion.form>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            {language === 'en'
              ? 'Join 10,000+ managers already winning with our newsletter!'
              : '!انضم إلى أكثر من 10,000 مدير يفوزون بالفعل مع نشرتنا الإخبارية'}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
