import ServiceDetailTemplate from '../../components/services/ServiceDetailTemplate'
import { useServiceMenu } from '../../hooks/useServiceMenu'
import facialImage from '../../assets/images/services/facial-service-image.png'

const addOns = [
    'LED Light Therapy Boost: $35',
    'Nano Infusion Eye Perfection: $45',
    'Advanced Peel Layer: $55',
    'Cooling Algae Mask Upgrade: $25',
]

const policies = {
    refill: [
        '⏱ Please arrive 10 minutes early to complete a quick skin analysis.',
        '🧖‍♀️ Pause active exfoliants (retinol, AHAs, BHAs) 3 days before your treatment.',
        '💧 Hydrate well the day before and after for best glow results.',
    ],
}

const fallbackServices = [
    {
        title: 'Luna Glow Facial (60mins)',
        price: '$75',
        description: 'A refreshing facial with cleanse, exfoliation, massage, extractions, high-frequency, and mask for smooth, radiant, and healthy-looking skin',
        image: facialImage,
    }
]

function FacialServiceDetail() {
    const { services, loading } = useServiceMenu('facial', fallbackServices)

    return (
        <ServiceDetailTemplate
            header="FACIAL MENU"
            services={services}
            policies={policies}
            bookingUrl="https://thelunamedspa.glossgenius.com/services"
            consentFormUrl="https://docs.google.com/forms/d/1twLLht_nJYMz9kTXsPDmCZjnNjl-HykDfzsVaXwbldU/viewform"
            loading={loading}
        />
    )
}

export default FacialServiceDetail
