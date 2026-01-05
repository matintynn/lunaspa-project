import { Link } from 'react-router-dom'
import Container from '../components/shared/Container'

const services = [
  { slug: 'facial', name: 'Facial', description: 'Rejuvenating facial treatments' },
  { slug: 'lash', name: 'Lash', description: 'Professional lash services' },
  { slug: 'eyebrow', name: 'Eyebrow', description: 'Eyebrow shaping and styling' },
  { slug: 'body', name: 'Body', description: 'Full body treatments' },
  { slug: 'medical-treatments', name: 'Medical Treatments', description: 'Advanced medical spa services' },
  { slug: 'skincare', name: 'Skincare', description: 'Comprehensive skincare solutions' },
]

function ServicesPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-h1 font-serif text-black mb-6">
            Our Services
          </h1>
          <p className="text-body-lg text-neutral-700 max-w-2xl mx-auto">
            Discover our range of premium spa and wellness services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              <h3 className="text-h4 font-serif text-black mb-4 group-hover:text-primary-600 transition-colors">
                {service.name}
              </h3>
              <p className="text-body-md text-neutral-600 mb-4">
                {service.description}
              </p>
              <span className="text-body-sm text-primary-600 font-medium group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default ServicesPage
