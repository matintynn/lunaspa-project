import ServiceDetailTemplate from '../../components/services/ServiceDetailTemplate'
import { useServiceMenu } from '../../hooks/useServiceMenu'
import classicImage from '../../assets/images/services/lash-service/classic-lash-image.png'
import wetImage from '../../assets/images/services/lash-service/wet-lash-image.png'
import hybridImage from '../../assets/images/services/lash-service/hybrid-lash-image.png'
import megaImage from '../../assets/images/services/lash-service/mega-lash-image.png'

const addOns = [
    'Lash Bath: $10',
    'Foreign Fill (from another salon): +$10–$20 depending on lash condition',
    'Lash Removal: $25',
    'Lash Removal - Fullset : $10',
    'Wispy Style : $20',
    'Lash tint : $25',
]

const policies = {
    refill: [
        '⏰ For best results and cost savings, please book addNote every 2–3 weeks.',
        '💼 addNote requested after 3 weeks or when over 40% of lashes have shed will be treated as a Full Set.',
        '💖 We cannot guarantee refill quality on lashes applied by other technicians or unknown products.',
        '📌 Because of natural factors and individual lash retention, some lashes may shed after your appointment. We offer a complimentary correction within 3 days of the service date. Clients must contact us within this time frame to return for the correction.',
        '(*) Please note: Any correction requests made after the first 3 days following your appointment will not be accepted.',
    ],
}

const fallbackServices = [
    {
        title: 'Classic full set (Individual)',
        price: '$99',
        description: 'Classic lashes enhance your eyes with a simple, clean look—one extension applied to each lash.',
        noteTitle: 'Classic Refill:',
        addNote: [
            '1 weeks : $50',
            '2 weeks : $55',
            '3 weeks : $65',
            'Over 3 weeks: Full Set Price Applies',
        ],
        image: classicImage,
    },
    {
        title: 'Wet look full set (Individual 2D - 3D)',
        price: '$109',
        description: 'Wet look lashes blend volume and classic techniques with 2–3 extensions per natural lash.',
        noteTitle: 'Wet Look Refill:',
        addNote: [
            '1 weeks : $55',
            '2 weeks : $65',
            '3 weeks : $75',
            'Over 3 weeks: Full Set Price Applies',
        ],
        image: wetImage,
    },
    {
        title: 'Hybrid full set (Classic - Volume 2D - 4D)',
        price: '$129',
        description: 'Hybrid lashes mix Classic and Volume 2D-4D for a balanced, natural, and slightly fuller effect.',
        noteTitle: 'Hybrid Refill:',
        addNote: [
            '1 week : $60',
            '2 weeks: $65',
            '3 weeks: $75',
            'Over 3 weeks: Full Set Price Applies',
        ],
        image: hybridImage,
    },
    {
        title: 'Mega full set (8D - 16D)',
        price: '$155',
        description: 'Mega Volume lashes use 8–16 extensions per natural lash for a bold, ultra-dramatic, full look.',
        noteTitle: 'Mega Volume Refill:',
        addNote: [
            '1 week : $85',
            '2 weeks: $125',
            '3 weeks: $155',
            'Over 3 weeks: Full Set Price Applies',
        ],
        image: megaImage,
    },
]

function LashServiceDetail() {
    const { services, loading } = useServiceMenu('lash', fallbackServices)

    return (
        <ServiceDetailTemplate
            header="LASH MENU"
            services={services}
            addOns={addOns}
            policies={policies}
            bookingUrl="https://thelunamedspa.glossgenius.com/services"
            consentFormUrl="https://docs.google.com/forms/d/1hzSUwNeb3_IwiVew1W8M3oBeHOfyMWXePchXUfdkWAQ/viewform"
            loading={loading}
        />
    )
}

export default LashServiceDetail
