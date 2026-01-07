import TrustedBrands from "../components/home/TrustedBrands"
import ServicesSection from "../components/services/ServicesSection"
import TestimonialsSection from "../components/shared/TestimonialsSection"


function ServicesPage() {
  return (
    <div className="mt-24">
      <ServicesSection />
      <TrustedBrands />
      <TestimonialsSection />
      <div className="mb-24"></div>
    </div>
  )
}

export default ServicesPage
