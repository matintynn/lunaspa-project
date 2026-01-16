import ServiceDetailTemplate from '../../components/services/ServiceDetailTemplate'
import { useServiceMenu } from '../../hooks/useServiceMenu'
import medicalImage from '../../assets/images/services/medical-service-image.png'


const policies = {
    refill: [
        '🩺 A medical consultation is required for all injectable and device-based services prior to treatment.',
        '⏳ Neuromodulator results are evaluated at a 2-week follow-up. Schedule refinement visits within 14 days.',
        '🚫 Please avoid blood thinners, alcohol, and strenuous workouts 24 hours before and after injectables.',
    ]
}

const fallbackServices = [
    {
        title: 'Chemical Peels - Rejuvenate Your Skin',
        price: '$150 and up',
        description: 'Chemical peels gently exfoliate the skin by removing dead surface cells, revealing fresher, smoother, and more radiant skin underneath. They help improve uneven skin tone, fine lines, acne scars, pigmentation, and dullness.',
        image: medicalImage,
    }
]

function MedicalServiceDetail() {
    const { services, loading } = useServiceMenu('medical', fallbackServices)

    return (
        <ServiceDetailTemplate
            header="Medical Treatments Menu"
            services={services}
            policies={policies}
            bookingUrl="https://thelunamedspa.glossgenius.com/services"
            loading={loading}
        />
    )
}

export default MedicalServiceDetail
