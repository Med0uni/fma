import { Metadata } from 'next'
import PageBanner from '@/components/ui/page-banner'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Downloads - FM Arabia',
  description:
    'Download tactics, skins, and other resources for Football Manager.',
}

export default function DownloadsPage() {
  return (
    <div>
      <PageBanner
        title="Downloads"
        titleAr="التحميلات"
        subtitle="Access tactics, skins, and other essential resources for your FM journey."
        subtitleAr="الوصول إلى التكتيكات والمظاهر وغيرها من الموارد الأساسية لرحلتك في FM."
        backgroundImage="/images/banners/downloads.jpg"
        icon={<Download className="h-full w-full" />}
        hasSearch
      />
      <div className="container py-12">
        {/* Downloads content will go here */}
      </div>
    </div>
  )
}
