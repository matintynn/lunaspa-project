import ServiceDetailTemplate from '../../components/services/ServiceDetailTemplate'
import { useServiceMenu } from '../../hooks/useServiceMenu'
import bodyImage from '../../assets/images/services/body-service-image.png'

const addOns = [
    'Infrared Dome Extend (15 min): $30',
    'Dry Brushing Ritual: $20',
    'Localized Cupping Therapy: $35',
    'CBD Recovery Balm: $25',
]

const policies = {
    refill: [
        '🕒 Please arrive 15 minutes early to complete wellness intake and change into spa garments.',
        '🚰 Drink at least 16 oz of water before and after detox or sculpting services to support lymphatic drainage.',
        '⚕️ Consult your physician before booking if you have cardiovascular conditions, metal implants, or are pregnant.',
    ],
}

const fallbackServices = [
    {
        title: 'Luna Signature Back Treatment',
        price: '$200',
        image: bodyImage,
    },
    {
        title: 'Back Peels Treatment',
        price: '$170',
        image: bodyImage,
    },
    {
        title: 'Arm Treatment',
        price: '$100',
        image: bodyImage,
    }
]

function BodyServiceDetail() {
    const { services, loading } = useServiceMenu('body', fallbackServices)

    return (
        <ServiceDetailTemplate
            header="BODY MENU"
            services={services}
            policies={policies}
            bookingUrl="https://thelunamedspa.glossgenius.com/services"
            loading={loading}
        />
    )
}

export default BodyServiceDetail
