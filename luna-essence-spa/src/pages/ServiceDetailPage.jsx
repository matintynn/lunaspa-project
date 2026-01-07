import { useParams, Link } from 'react-router-dom'
import Container from '../components/shared/Container'

const serviceDetails = {
  facial: {
    name: 'Facial Treatments',
    description: 'Comprehensive facial treatments for all skin types',
    content: 'Detailed information about facial services will go here...',
  },
  eyebrow: {
    name: 'Eyebrow Services',
    description: 'Expert eyebrow shaping and styling',
    content: 'Detailed information about eyebrow services will go here...',
  },
  body: {
    name: 'Body Treatments',
    description: 'Full body wellness and relaxation treatments',
    content: 'Detailed information about body treatments will go here...',
  },
  'medical-treatments': {
    name: 'Medical Treatments',
    description: 'Advanced medical spa and aesthetic treatments',
    content: 'Detailed information about medical treatments will go here...',
  },
  skincare: {
    name: 'Skincare Solutions',
    description: 'Comprehensive skincare treatments and consultations',
    content: 'Detailed information about skincare services will go here...',
  },
}

function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const service = serviceDetails[serviceSlug] || {
    name: 'Service Not Found',
    description: 'The service you are looking for does not exist',
    content: '',
  }

  return (
    <div className="py-20 bg-background min-h-screen">
      <Container>
        <Link
          to="/services"
          className="inline-block mb-8 text-body-md text-primary-600 hover:underline"
        >
          ← Back to Services
        </Link>

        <div className="max-w-3xl">
          <h1 className="text-h1 font-serif text-black mb-6">
            {service.name}
          </h1>
          <p className="text-body-lg text-neutral-700 mb-8">
            {service.description}
          </p>
          <div className="prose prose-lg">
            <p className="text-body-md text-neutral-600">
              {service.content || 'Service details will be added here...'}
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ServiceDetailPage

