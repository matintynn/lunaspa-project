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
        title: 'Lymphatic Drainage Massage',
        price: '$135',
        description: 'Manual, rhythmic strokes encourage detoxification, reduce puffiness, and support immune health after surgery or travel.',
        image: bodyImage,
    },
    {
        title: 'Body Sculpt + RF Tightening',
        price: '$225',
        description: 'Radiofrequency heat plus vacuum therapy contours stubborn zones and boosts collagen for firmer-looking skin.',
        image: bodyImage,
    },
    {
        title: 'Infrared Detox Wrap',
        price: '$165',
        description: 'Mineral-enriched wrap with infrared heat to encourage sweat detox, ease muscle tension, and smooth the appearance of cellulite.',
        image: bodyImage,
    },
    {
        title: 'Back Renewal Ritual',
        price: '$155',
        description: 'Deep cleanse, exfoliation, extractions, and hydrating mask dedicated to the back, perfect before events or vacations.',
        image: bodyImage,
    },
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
