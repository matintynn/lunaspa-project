import { useNavigate } from 'react-router-dom'
import { useServiceMenu } from '../../hooks/useServiceMenu'
import Container from '../../components/shared/Container'
import Button from '../../components/shared/Button'
import FacialServiceMenu from '../../components/services/FacialServiceMenu'
import AddOnServicesSection from '../../components/services/AddOnServicesSection'
import PoliciesSection from '../../components/services/PoliciesSection'
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
        description: 'A refreshing facial with cleanse, exfoliation, massage, extractions, high-frequency, and mask for smooth, radiant, and healthy-looking skin.',
        image: facialImage,
        subCategory: 'Classic Facials',
    },
    {
        title: 'Deep Pore Cleansing Facial (75mins)',
        price: '$95',
        description: 'Targets congested pores with deep cleansing, steam, gentle extractions, and a purifying mask to leave your skin clear and refreshed.',
        image: facialImage,
        subCategory: 'Classic Facials',
    },
    {
        title: 'Collagen Renewal Facial (60mins)',
        price: '$110',
        description: 'Stimulates collagen production with peptide-rich serums, firming massage techniques, and a lifting mask to visibly reduce fine lines.',
        image: facialImage,
        subCategory: 'Anti-Aging',
    },
    {
        title: 'Microcurrent Lift Facial (75mins)',
        price: '$135',
        description: 'Uses low-level microcurrent technology to tone facial muscles, improve contour, and firm the skin for a non-surgical lifting effect.',
        image: facialImage,
        subCategory: 'Anti-Aging',
    },
    {
        title: 'Vitamin C Glow Treatment (60mins)',
        price: '$100',
        description: 'Packed with antioxidant-rich Vitamin C to fade dark spots, even skin tone, and restore natural luminosity for a healthy, lit-from-within glow.',
        image: facialImage,
        subCategory: 'Brightening',
    },
    {
        title: 'Clarity Acne Facial (60mins)',
        price: '$95',
        description: 'Calms active breakouts and congestion with salicylic-based exfoliation, targeted extractions, and a soothing anti-inflammatory mask.',
        image: facialImage,
        subCategory: 'Acne & Clarifying',
    },
    {
        title: 'Back Facial (60mins)',
        price: '$90',
        description: 'Full cleanse, exfoliation, steam, extractions, and a hydrating mask applied to the back — ideal for breakouts or dry skin in hard-to-reach areas.',
        image: facialImage,
        subCategory: 'Specialty',
    },
]

const BOOKING_URL = 'https://thelunamedspa.glossgenius.com/services'
const CONSENT_URL = 'https://docs.google.com/forms/d/1twLLht_nJYMz9kTXsPDmCZjnNjl-HykDfzsVaXwbldU/viewform'

function FacialServiceDetail() {
    const { services, loading } = useServiceMenu('facial', fallbackServices)
    const navigate = useNavigate()

    return (
        <section className="mt-24">
            <Container className="py-20 md:pb-16">
                {/* Page header */}
                <h1 className="text-h1 font-serif font-semibold italic text-primary-800 text-center mb-4">
                    Facial Menu
                </h1>

                {/* Consent form sub-headline */}
                {CONSENT_URL && (
                    <p className="text-center text-neutral-500 font-light mb-4">
                        Before coming to the clinic, please fill out our{' '}
                        <a
                            href={CONSENT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-800 font-semibold underline hover:text-primary-600 transition-colors"
                        >
                            Consent &amp; Liability Waiver Form
                        </a>{' '}
                        to save time when you arrive.
                    </p>
                )}

                {/* Categorised service menu */}
                <div className="mx-auto mt-2">
                    <FacialServiceMenu
                        services={services}
                        bookingUrl={BOOKING_URL}
                        loading={loading}
                    />

                    <div className="mt-24">
                        <AddOnServicesSection addOns={addOns} />
                    </div>

                    <PoliciesSection policies={policies} />

                    <div className="text-center mt-12">
                        <Button variant="secondary" onClick={() => navigate(-1)}>
                            Go Back to Previous Page
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FacialServiceDetail
