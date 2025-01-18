import { Metadata } from 'next'
import PageBanner from '@/components/ui/page-banner'
import { GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tutorials - FM Arabia',
  description:
    'Learn Football Manager with our comprehensive guides and tutorials.',
}

export default function TutorialsPage() {
  return (
    <div>
      <PageBanner
        title="Tutorials"
        titleAr="الدروس"
        subtitle="Master Football Manager with our comprehensive guides and tutorials."
        subtitleAr="أتقن Football Manager مع أدلتنا ودروسنا الشاملة."
        backgroundImage="/assets/banners/trainig.png"
        icon={<GraduationCap className="h-full w-full" />}
      />
      <div className="container py-12">
        {/* Tutorials content will go here */}
      </div>
    </div>
  )
}
