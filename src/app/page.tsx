import Hero from '@/components/home/Hero'
import NewsSection from '@/components/sections/NewsSection'
import SocialPanel from '@/components/social/SocialPanel'
import ScoutingSection from '@/components/sections/ScoutingSection'
import TacticsSection from '@/components/sections/TacticsSection'
import SaveIdeasSection from '@/components/sections/SaveIdeasSection'
import SupportSection from '@/components/sections/SupportSection'
import NewsletterSection from '@/components/sections/NewsletterSection'

export default function Home() {
  return (
    <div>
      <Hero />
      <div id="main-content" className="container py-12">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="space-y-12 lg:w-3/4">
            <NewsSection />
            <div className="grid gap-8 md:grid-cols-2">
              <ScoutingSection />
              <TacticsSection />
            </div>
          </div>
          <div className="lg:w-1/4 lg:pl-4">
            <div className="sticky-until-news">
              <SocialPanel />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="lg:w-3/4">
              <SaveIdeasSection />
            </div>
            <div className="lg:w-1/4">
              <div className="sticky-until-news">
                <SupportSection />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <NewsletterSection />
      </div>
    </div>
  )
}
