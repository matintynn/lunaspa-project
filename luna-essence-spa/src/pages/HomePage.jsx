import { Link } from 'react-router-dom'
import Container from '../components/shared/Container'
import ServiceCard from '../components/home/ServiceCard'
import TestimonialCard from '../components/home/TestimonialCard'
import TeamMemberCard from '../components/home/TeamMemberCard'
import HeroSection from '../components/home/HeroSection'

// Data
const services = [
  {
    slug: 'facial',
    name: 'Facial',
    description: 'Rejuvenating facial treatments for glowing skin',
    image: '/src/assets/images/services/facial-service.jpg'
  },
  {
    slug: 'lash',
    name: 'Lash',
    description: 'Professional lash extensions and lifts',
    image: '/src/assets/images/services/lash-service.jpg'
  },
  {
    slug: 'eyebrow',
    name: 'Eyebrows',
    description: 'Expert eyebrow shaping and styling',
    image: '/src/assets/images/services/eyebrow-service.jpg'
  },
  {
    slug: 'body',
    name: 'Body',
    description: 'Full body wellness treatments',
    image: '/src/assets/images/services/body-service.jpg'
  },
  {
    slug: 'medical-treatments',
    name: 'Medical Treatments',
    description: 'Advanced medical spa services',
    image: '/src/assets/images/services/medical-service.jpg'
  },
  {
    slug: 'skincare',
    name: 'Skincare Products',
    description: 'Premium skincare solutions',
    image: '/src/assets/images/services/skincare-service.jpg'
  },
]

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

const trustIndicators = [
  'Natural Ingredient',
  'Medical-Grade Skill',
  'Spaces to Relax in SLO',
  'Why choose our beauty'
]

function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Trust Indicators */}
      <section className="bg-primary-50 py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center justify-center">
                <span className="text-body-sm md:text-body-md font-sans text-neutral-700 font-medium">
                  {indicator}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <h2 className="text-h2 font-serif text-neutral-900 text-center mb-16">
            Our Services
          </h2>

          {/* Asymmetric Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {/* Left Column */}
              <div className="space-y-16">
                <ServiceCard service={services[0]} />
                <ServiceCard service={services[2]} />
                <ServiceCard service={services[4]} />
              </div>

              {/* Right Column - Shifted Down */}
              <div className="space-y-16 md:mt-32">
                <ServiceCard service={services[1]} />
                <ServiceCard service={services[3]} />
                <ServiceCard service={services[5]} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-16 bg-background">
        <Container>
          <h2 className="text-h3 font-serif text-neutral-900 text-center mb-12">
            Trusted Brands We Use
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
            {['toulab', 'xyzal', 'obagi', 'image', 'biojuve', 'glymed', 'skinceuticals'].map((brand, index) => (
              <div key={index} className="h-12">
                <img
                  src={`/src/assets/images/brands/${brand}.png`}
                  alt={brand}
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/120x40/EDE7D9/8B7B6B?text=${brand}`
                  }}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/src/assets/images/background/cta-bg.png"
                  alt="Spa ambiance"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400/EDE7D9/8B7B6B?text=Spa+Ambiance'
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-h3 font-serif text-neutral-900 mb-6">
                Created for Women Who Want Beauty Without the Intimidation
              </h2>
              <p className="text-body-lg font-sans text-neutral-700 mb-6 leading-relaxed">
                Luna isn't about clinical aesthetics or celebrity-grade glam. It's a safe, welcoming space where the focus is on you—celebrating beauty while embracing the imperfections that make you human.
              </p>
              <Link
                to="/about"
                className="inline-block px-8 py-3 border-2 border-neutral-900 text-neutral-900 font-sans font-medium rounded-md hover:bg-neutral-900 hover:text-white transition-colors text-body-md"
              >
                Read More →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer Info Section */}
      <section className="py-16 bg-primary-100">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h3 font-serif text-neutral-900 mb-4">
              Luna Essence Med Spa
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center md:text-left">
            {/* Address */}
            <div>
              <h3 className="text-h5 font-serif font-semibold text-neutral-900 mb-3">Address</h3>
              <p className="text-neutral-600 text-body-sm font-sans">
                99734 Vista De La Playa<br />
                Corona del Mar, CA 92625<br />
                Email: lunaessence@yopmail.com
              </p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-h5 font-serif font-semibold text-neutral-900 mb-3">Hours</h3>
              <p className="text-neutral-600 text-body-sm font-sans">
                Mon - Fri: 9am - 7pm<br />
                Sat: 10am - 6pm<br />
                Sun: Closed
              </p>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-h5 font-serif font-semibold text-neutral-900 mb-3">Follow Us</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://facebook.com" className="hover:opacity-70">
                  <img src="/src/assets/images/social-icons/facebook-icon.svg" alt="Facebook" className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" className="hover:opacity-70">
                  <img src="/src/assets/images/social-icons/instagram-icon.svg" alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="https://tiktok.com" className="hover:opacity-70">
                  <img src="/src/assets/images/social-icons/tiktok-icon.svg" alt="TikTok" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-neutral-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-neutral-500">Map will be embedded here</span>
            </div>
          </div>
        </Container>
      </section>
    </div >
  )
}

export default HomePage