import { useState, useEffect } from 'react'
import ServiceDetailTemplate from '../components/services/ServiceDetailTemplate'
import { fetchServicesByCategory, formatServices } from '../lib/sanity-queries'

const lashImages = [
    '/images/services/lash-service/classic-lash-image.png',
    '/images/services/lash-service/wet-lash-image.png',
    '/images/services/lash-service/hybrid-lash-image.png',
    '/images/services/lash-service/mega-lash-image.png',
]

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
        '⏰ For best results and cost savings, please book refills every 2–3 weeks.',
        '💼 Refills requested after 3 weeks or when over 40% of lashes have shed will be treated as a Full Set.',
        '💖 We cannot guarantee refill quality on lashes applied by other technicians or unknown products.',
    ],
    correction:
        'Because of natural factors and individual lash retention, some lashes may shed after your appointment. We offer a complimentary correction within 3 days of the service date. Clients must contact us within this time frame to return for the correction.',
    note:
        '(*) Please note: Any correction requests made after the first 3 days following your appointment will not be accepted.',
}

// Fallback lash services if Sanity data fails
const fallbackLashServices = [
    {
        title: 'Classic full set (Individual)',
        price: '$99',
        description: 'Classic lashes enhance your eyes with a simple, clean look—one extension applied to each lash.',
        refillTitle: 'Classic Refill:',
        refills: [
            '1 weeks : $50',
            '2 weeks : $55',
            '3 weeks : $65',
            'Over 3 weeks: Full Set Price Applies',
        ],
    },
    {
        title: 'Wet look full set (Individual 2D - 3D)',
        price: '$109',
        description: 'Wet look lashes blend volume and classic techniques with 2–3 extensions per natural lash.',
        refillTitle: 'Wet Look Refill:',
        refills: [
            '1 weeks : $55',
            '2 weeks : $65',
            '3 weeks : $75',
            'Over 3 weeks: Full Set Price Applies',
        ],
    },
    {
        title: 'Hybrid full set (Classic - Volume 2D - 4D)',
        price: '$129',
        description: 'Hybrid lashes mix Classic and Volume 2D-4D for a balanced, natural, and slightly fuller effect.',
        refillTitle: 'Hybrid Refill:',
        refills: [
            '1 week : $60',
            '2 weeks: $65',
            '3 weeks: $75',
            'Over 3 weeks: Full Set Price Applies',
        ],
    },
    {
        title: 'Mega full set (8D - 16D)',
        price: '$155',
        description: 'Mega Volume lashes use 8–16 extensions per natural lash for a bold, ultra-dramatic, full look.',
        refillTitle: 'Mega Volume Refill:',
        refills: [
            '1 week : $85',
            '2 weeks: $125',
            '3 weeks: $155',
            'Over 3 weeks: Full Set Price Applies',
        ],
    },
]

function LashServiceDetail() {
    const [lashServices, setLashServices] = useState(fallbackLashServices)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadLashServices = async () => {
            try {
                const services = await fetchServicesByCategory('lash')
                if (services.length > 0) {
                    const formattedServices = formatServices(services)
                    setLashServices(formattedServices.map(service => ({
                        title: service.title,
                        price: service.price,
                        description: service.description,
                        refillTitle: service.refillTitle,
                        refills: service.refills || [],
                    })))
                }
            } catch (error) {
                console.error('Failed to load lash services:', error)
            } finally {
                setLoading(false)
            }
        }

        loadLashServices()
    }, [])
    return (
        <ServiceDetailTemplate
            header="LASH MENU"
            services={lashServices}
            addOns={addOns}
            policies={policies}
            images={lashImages}
            bookingUrl="https://thelunamedspa.glossgenius.com/services"
        />
    )
}

export default LashServiceDetail