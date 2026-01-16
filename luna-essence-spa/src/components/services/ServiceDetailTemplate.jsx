import { useNavigate } from 'react-router-dom'
import Container from '../shared/Container'
import Button from '../shared/Button'
import AddOnServicesSection from './AddOnServicesSection'
import PoliciesSection from './PoliciesSection'
import arrowIcon from '../../assets/images/icons/arrow-icon.svg'
import lunaLogo from '../../assets/images/luna-logo.svg'

// Circular image container component - Luna Spa branded style
// Outer circle: 300px, bg-secondary-200
// Inner circle: 270px, border-primary-600, contains the image
function ServiceImageCircle({ src, alt, fallbackSrc = lunaLogo }) {
    const imageSrc = src || fallbackSrc
    const isFallback = !src

    return (
        <div
            className="relative rounded-full bg-secondary-200"
            style={{ width: '300px', height: '300px' }}
        >
            <div
                className="absolute rounded-full border border-primary-600 overflow-hidden flex items-center justify-center"
                style={{ width: '270px', height: '270px', top: '15px', right: '40px' }}
            >
                <img
                    src={imageSrc}
                    alt={alt}
                    className={isFallback ? 'w-32 h-32 object-contain opacity-50' : 'w-full h-full object-cover'}
                />
            </div>
        </div>
    )
}


function ServiceDetailTemplate({ header, services = [], addOns = [], policies, bookingUrl, loading = false, emptyMessage = 'New services are coming soon. Please check back!' }) {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    const hasPolicies = policies && (
        (Array.isArray(policies.refill) && policies.refill.length > 0) ||
        Boolean(policies.correction) ||
        Boolean(policies.note)
    )

    return (
        <section className="mt-24">
            <Container className='py-20 md:pb-16'>
                <h1 className="text-h1 font-serif font-semibold italic text-primary-800 text-center mb-12">
                    {header}
                </h1>
                <div className="mx-auto">
                    {services.length === 0 && (
                        <div className="text-center text-neutral-500 font-light py-12">
                            {loading ? 'Loading services...' : emptyMessage}
                        </div>
                    )}
                    {services.map((service, idx) => {
                        return (
                            <div key={`${service.title}-${idx}`} className="flex flex-col md:flex-row items-center gap-8 mb-24">
                                <ServiceImageCircle
                                    src={service.image}
                                    alt={service.title}
                                />
                                <div className="flex-1 w-full">
                                    <div className="flex items-center gap-4 mb-2">
                                        <h2 className="text-h2 font-serif font-semibold italic text-primary-800">{service.title}</h2>
                                        <span className="bg-secondary-100 text-primary-800 font-semibold px-4 py-2 rounded-full text-lg" style={{ fontFamily: 'DM Sans', fontStyle: 'italic' }}>
                                            {service.price}
                                        </span>
                                    </div>
                                    <p className="text-neutral-500 font-light mb-2">{service.description}</p>
                                    {(service.noteTitle || (service.addNote && service.addNote.length > 0)) && (
                                        <div className="text-neutral-500 font-light mb-4">
                                            {service.noteTitle && (
                                                <strong className="text-primary-800">{service.noteTitle}</strong>
                                            )}
                                            {service.addNote && service.addNote.length > 0 && (
                                                <ul className="list-disc ml-6 mt-1">
                                                    {service.addNote.map((r, i) => (
                                                        <li key={i}>{r}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                    {bookingUrl && (
                                        <Button
                                            variant="secondary"
                                            icon={arrowIcon}
                                            onClick={() => window.open(bookingUrl, '_blank')}
                                            className="mt-3"
                                        >
                                            Book Now
                                        </Button>
                                    )}
                                </div>
                            </div>
                        )
                    })}

                    {Array.isArray(addOns) && addOns.length > 0 && (
                        <AddOnServicesSection addOns={addOns} />
                    )}

                    {hasPolicies && (
                        <PoliciesSection policies={policies} />
                    )}

                    {/* Go Back Button */}
                    <div className="text-center mt-12">
                        <Button variant="secondary" onClick={handleGoBack}>
                            Go Back to Previous Page
                        </Button>
                    </div>                </div>
            </Container>
        </section>
    )
}

export default ServiceDetailTemplate
