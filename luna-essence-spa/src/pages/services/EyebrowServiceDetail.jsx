import ServiceDetailTemplate from '../../components/services/ServiceDetailTemplate'
import { useServiceMenu } from '../../hooks/useServiceMenu'
import eyebrowImage from '../../assets/images/services/eyebrown-service-image.png'

const addOns = [
    'Lip or Chin Wax: $15',
    'Soothing Hydro Jelly Mask: $20',
    'Brow Rehab Serum Take-Home: $45',
]

const policies = {
    refill: [
        '🪄 Please allow 3–4 weeks of growth before shaping for best design results.',
        '🌿 Pause retinol or exfoliating acids 5 days before brow waxing or lamination.',
        '💧 Keep brows dry for 24 hours after lamination or tint services.',
    ],
}

const fallbackServices = [
    {
        title: 'Brow Lamination + Tint',
        price: '$95',
        description: 'Lift, shape, and add color to your brows for a fuller, polished look that lasts 6-8 weeks.',
        image: eyebrowImage,
    },
]

function EyebrowServiceDetail() {
    const { services, loading } = useServiceMenu('eyebrow', fallbackServices)

    return (
        <ServiceDetailTemplate
            header="Eyebrow Menu"
            services={services}
            policies={policies}
            bookingUrl="https://thelunamedspa.glossgenius.com/services"
            consentFormUrl="https://docs.google.com/forms/d/1rmbgChZiFYYVuq_eZehGVZL9tJjnUArMqfRb38lArz0/viewform"
            loading={loading}
        />
    )
}

export default EyebrowServiceDetail
