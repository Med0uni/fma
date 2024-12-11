import { Metadata } from "next"
import PageBanner from "@/components/ui/page-banner"
import { Newspaper } from "lucide-react"

export const metadata: Metadata = {
  title: "News - FM Arabia",
  description: "Latest Football Manager news, updates, and community highlights.",
}

export default function NewsPage() {
  return (
    <div>
      <PageBanner
        title="Latest News"
        titleAr="آخر الأخبار"
        subtitle="Stay updated with the latest Football Manager news, updates, and community highlights."
        subtitleAr="ابق على اطلاع بآخر أخبار Football Manager والتحديثات وأبرز أحداث المجتمع."
        backgroundImage="/images/banners/news.jpg"
        icon={<Newspaper className="w-full h-full" />}
        hasSearch
      />
      <div className="container py-12">
        {/* News content will go here */}
      </div>
    </div>
  )
}
