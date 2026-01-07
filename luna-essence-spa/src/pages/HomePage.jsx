import { Link } from 'react-router-dom'
import Container from '../components/shared/Container'
import HeroSection from '../components/home/HeroSection'
import TrustIndicators from '../components/shared/TrustIndicators'
import TrustedBrands from '../components/home/TrustedBrands'
import TestimonialsSection from '../components/shared/TestimonialsSection'
import TeamSection from '../components/home/TeamSection'
import CTASection from '../components/home/CTASection'
import ServicesSection from '../components/services/ServicesSection'

// Data
const testimonials = [
  {
    author: 'Emily R.',
    quote: "I've never felt this safe walking into a med spa. The girls at Luna hype you up from the moment you walk in. My skin looks amazing, but honestly… the confidence boost is the real magic."
  },
  {
    author: 'Hannah P.',
    quote: "I was nervous about trying injectables, but Luna made everything feel so easy and calm. They explained everything in simple words and made me feel like I was hanging out with a supportive friend."
  }
]

const teamMembers = [
  {
    name: 'Tiffany Nguyen',
    title: 'Lead Aesthetician',
    bio: 'Specialist in advanced skincare treatments',
    image: '/src/assets/images/team/team-1.jpg'
  },
  {
    name: 'Angie Tran',
    title: 'Master Injector',
    bio: 'Expert in facial aesthetics',
    image: '/src/assets/images/team/team-2.jpg'
  },
  {
    name: 'Daisie Lai',
    title: 'Wellness Consultant',
    bio: 'Holistic beauty specialist',
    image: '/src/assets/images/team/team-3.jpg'
  }
]

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