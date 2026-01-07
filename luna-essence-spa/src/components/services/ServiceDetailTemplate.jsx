import { useNavigate } from 'react-router-dom'
import Container from '../shared/Container'
import Button from '../shared/Button'
import AddOnServicesSection from './AddOnServicesSection'
import PoliciesSection from './PoliciesSection'
import arrowIcon from '../../assets/images/icons/arrow-icon.svg'


function ServiceDetailTemplate({ header, services, addOns, policies, extraServices, images, bookingUrl }) {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <section className="mt-24">
            <Container className='py-20 md:pb-16'>
                <h1 className="text-h1 font-serif font-semibold italic text-primary-800 text-center mb-12">
                    {header}
                </h1>
                <div className="mx-auto">
                    {services.map((service, idx) => (
                        <div key={service.title} className="flex flex-col md:flex-row items-center gap-8 mb-24">
                            <img
                                src={images[idx]}
                                alt={service.title}
                                style={{ width: 'auto', height: 'auto', maxWidth: '300px' }}
                            />
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-2">
                                    <h2 className="text-h2 font-serif font-semibold italic text-primary-800">{service.title}</h2>
                                    <span className="bg-secondary-100 text-primary-800 font-semibold px-4 py-2 rounded-full text-lg" style={{ fontFamily: 'DM Sans', fontStyle: 'italic' }}>
                                        {service.price}
                                    </span>
                                </div>
                                <p className="text-neutral-500 font-light mb-2">{service.description}</p>
                                <div className="text-neutral-500 font-light mb-4">
                                    <strong className="text-primary-800">{service.refillTitle}</strong>
                                    <ul className="list-disc ml-6 mt-1">
                                        {service.refills.map((r, i) => (
                                            <li key={i}>{r}</li>
                                        ))}
                                    </ul>
                                </div>
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
                    ))}

                    <AddOnServicesSection addOns={addOns} />

                    <PoliciesSection policies={policies} />

                    {/* Extra Services */}
                    {/* <div>
                        <h3 className="text-h3 font-serif font-semibold italic text-primary-800 mb-4">Other services</h3>
                        <ul className="flex flex-wrap gap-4">
                            {extraServices.map((s, i) => (
                                <li key={i} className="border rounded-full px-4 py-2 text-primary-800 bg-white">{s}</li>
                            ))}
                        </ul>
                    </div> */}
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
