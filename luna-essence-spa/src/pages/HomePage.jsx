import HeroSection from '../components/home/HeroSection'
import TrustIndicators from '../components/shared/TrustIndicators'
import TrustedBrands from '../components/home/TrustedBrands'
import TestimonialsSection from '../components/shared/TestimonialsSection'
import TeamSection from '../components/home/TeamSection'
import CTASection from '../components/home/CTASection'
import ServicesSection from '../components/services/ServicesSection'

function HomePage() {
  return (
    <div className="overflow-hidden mb-24">
      <HeroSection />

      <TrustIndicators />

      <ServicesSection />

      <TrustedBrands />

      <TestimonialsSection />

      <TeamSection />

      <CTASection />

    </div >
  )
}

export default HomePage