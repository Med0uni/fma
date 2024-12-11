"use client"

import { useLanguage } from '@/providers/language-provider'
import { Apple, Facebook, Instagram, Linkedin, PlayCircle, Twitter } from 'lucide-react'

export default function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="bg-secondary mt-auto">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-2">FM Arabia</h2>
              <p className="text-muted-foreground text-sm">
                {language === 'en' 
                  ? 'Your comprehensive Football Manager community and database'
                  : 'مجتمع وقاعدة بيانات شاملة لمدير كرة القدم'
                }
              </p>
            </div>

            {/* Download Section */}
            <div>
              <h3 className="text-sm font-semibold mb-4">
                {language === 'en' ? 'Get the FM Arabia App' : 'احصل على تطبيق FM Arabia'}
              </h3>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background hover:bg-accent rounded-md text-sm"
                >
                  <Apple className="h-5 w-5" />
                  <span>App Store</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background hover:bg-accent rounded-md text-sm"
                >
                  <PlayCircle className="h-5 w-5" />
                  <span>Google Play</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold mb-4">
                {language === 'en' ? 'Follow Us' : 'تابعنا'}
              </h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">
                {language === 'en' ? 'Features' : 'المميزات'}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === 'en' ? 'Tactics' : 'التكتيكات'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === 'en' ? 'Wonderkids' : 'المواهب الشابة'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === 'en' ? 'Team Guides' : 'دليل الفرق'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === 'en' ? 'Training' : 'التدريب'}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">
                {language === 'en' ? 'Community' : 'المجتمع'}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === 'en' ? 'Forums' : 'المنتديات'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === 'en' ? 'Discord' : 'ديسكورد'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === 'en' ? 'Blog' : 'المدونة'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === 'en' ? 'Support' : 'الدعم'}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">
                {language === 'en' ? 'Legal' : 'قانوني'}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === 'en' ? 'Terms of Service' : 'شروط الخدمة'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === 'en' ? 'Cookie Policy' : 'سياسة ملفات الارتباط'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === 'en' ? 'About Us' : 'معلومات عنا'}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} FM Arabia. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
            </p>
            <div className="flex items-center gap-6">
              <button className="text-sm text-muted-foreground hover:text-primary">
                {language === 'en' ? 'Cookies Settings' : 'إعدادات ملفات الارتباط'}
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary">
                {language === 'en' ? 'Do not sell my data' : 'لا تبع بياناتي'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
