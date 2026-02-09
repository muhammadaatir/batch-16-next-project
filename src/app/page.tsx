import HeroSection from '@/components/homepage/HeroSection'
import FeaturesSection from '@/components/homepage/FeaturesSection'
import ContactSection from '@/components/homepage/ContactSection'
import CounterClient from '@/components/CounterClient'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <CounterClient />
      </div>
      <FeaturesSection />
      <ContactSection />
    </main>
  )
}