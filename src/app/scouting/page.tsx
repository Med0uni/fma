import { Metadata } from "next"
import PageBanner from "@/components/ui/page-banner"
import { Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Scouting - FM Arabia",
  description: "Discover wonderkids, hidden gems, and player recommendations for Football Manager.",
}

export default function ScoutingPage() {
  return (
    <div>
      <PageBanner
        title="Scouting Network"
        titleAr="شبكة الكشافة"
        subtitle="Find the next generation of superstars and hidden gems."
        subtitleAr="اعثر على الجيل القادم من النجوم والمواهب المخفية."
        backgroundImage="/images/banners/scouting.jpg"
        icon={<Search className="w-full h-full" />}
        hasSearch
      />
      <div className="container py-12">
        {/* Scouting content will go here */}
      </div>
    </div>
  )
}
