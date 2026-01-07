import Container from '../components/shared/Container'
import TestimonialsSection from '../components/shared/TestimonialsSection'
import TeamSection from '../components/home/TeamSection'

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
    image: '/src/assets/images/staffs/tiffany-image.jpg'
  },
  {
    name: 'Angie Tran',
    title: 'Master Injector',
    bio: 'Expert in facial aesthetics',
    image: '/src/assets/images/staffs/angie-image.jpg'
  },
  {
    name: 'Daisie Lai',
    title: 'Wellness Consultant',
    bio: 'Holistic beauty specialist',
    image: '/src/assets/images/staffs/daisie-image.jpg'
  }
]

function AboutPage() {
  return (
    <div className="mt-24">
      {/* Header Section */}
      <Container className="py-20 md:pb-16">
        <h1 className="text-h1 font-serif font-semibold italic text-primary-800 text-center">
          About Luna
        </h1>
      </Container>

      {/* Main Content */}
      <Container className="pb-16">
        <div className="mx-auto space-y-8" style={{ maxWidth: '700px' }}>
          <div className="space-y-6 text-md font-light leading-relaxed text-neutral-500">
            <p>
              At Luna Med Spa, we believe that healthy, radiant skin is more than just appearance—it's a reflection of confidence, self-care, and well-being.
            </p>

            <p>
              Our journey began with a simple mission: to create a space where science, artistry, and compassion meet. We're here to guide you through every step of your skincare journey, combining medical expertise with personalized treatments designed for real, lasting results.
            </p>
          </div>

          {/* About Image */}
          <div className="my-12">
            <img
              src="/src/assets/images/about-image.jpg"
              alt="Luna Med Spa"
              className="w-full h-96 object-cover"
              style={{ borderRadius: '24px' }}
            />
          </div>

          <div className="space-y-6 text-md leading-relaxed font-light text-neutral-500">
            <p>
              Every client who walks through our doors has a unique story written on their skin. Our mission is to listen, understand, and help rewrite that story—turning challenges like acne, sensitivity, or pigmentation into opportunities for renewed confidence and glow.
            </p>

            <p>
              We are committed to using only trusted, professional-grade products and the latest technology to ensure safety, effectiveness, and the highest standard of care.
            </p>

            <p>
              <span className="text-neutral-600 font-semibold">Our Mission:</span> To provide personalized, science-backed skincare solutions that enhance natural beauty, restore confidence, and promote long-term skin health.
            </p>

            <p>
              <span className="text-neutral-600 font-semibold">Our Vision:</span> To be the trusted partner in every client's skincare journey, where expert care meets compassion, innovation, and lasting results.
            </p>
          </div>
        </div>
      </Container>

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Team Section */}
      <TeamSection teamMembers={teamMembers} />
    </div>
  )
}

export default AboutPage
