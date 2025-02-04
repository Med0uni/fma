'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Youtube, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/providers/language-provider'
import { FaDiscord, FaXTwitter, FaInstagram } from 'react-icons/fa6'

export default function SocialPanel() {
  const { language } = useLanguage()

  const socialLinks = [
    {
      name: 'Discord',
      Icon: FaDiscord,
      color: 'hover:bg-[#5865F2]',
      url: '#',
    },
    {
      name: 'Twitter',
      Icon: FaXTwitter,
      color: 'hover:bg-black',
      url: '#',
    },
    {
      name: 'Facebook',
      Icon: Facebook,
      color: 'hover:bg-[#4267B2]',
      url: '#',
    },
    {
      name: 'Instagram',
      Icon: FaInstagram,
      color: 'hover:bg-[#E4405F]',
      url: '#',
    },
    {
      name: 'Youtube',
      Icon: Youtube,
      color: 'hover:bg-[#FF0000]',
      url: '#',
    },
  ]

  return (
    <div className="mt-[80px] rounded-lg border bg-card p-6">
      <h2 className="mb-6 text-xl font-semibold">
        {language === 'en' ? 'Join Our Community' : 'انضم إلى مجتمعنا'}
      </h2>

      <div className="space-y-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center gap-3 rounded-lg border p-3 hover:border-transparent ${social.color} group transition-all hover:text-white`}
          >
            <social.Icon className="h-5 w-5" />
            <span className="font-medium">{social.name}</span>
            <span className="ms-auto opacity-0 transition-opacity group-hover:opacity-100">
              {language === 'en' ? 'Join' : 'انضم'}
            </span>
          </motion.a>
        ))}
      </div>

      <div className="mt-6 border-t pt-6">
        <div className="text-center text-sm text-muted-foreground">
          {language === 'en'
            ? 'Stay updated with the latest FM news and community updates'
            : 'ابق على اطلاع بآخر أخبار FM وتحديثات المجتمع'}
        </div>
      </div>
    </div>
  )
}
