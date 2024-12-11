import { Metadata } from 'next'
import PageBanner from '@/components/ui/page-banner'
import { Gamepad2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tactics - FM Arabia',
  description:
    'Browse and download winning Football Manager tactics and formations.',
}

export default function TacticsPage() {
  return (
    <div>
      <PageBanner
        title="Tactics"
        titleAr="التكتيكات"
        subtitle="Explore winning formations and strategies from the community."
        subtitleAr="استكشف التشكيلات والاستراتيجيات الناجحة من المجتمع."
        backgroundImage="/images/banners/tactics.jpg"
        icon={<Gamepad2 className="h-full w-full" />}
        hasSearch
      />
      <div className="container py-12">
        {/* Tactics content will go here */}
      </div>
    </div>
  )
}
