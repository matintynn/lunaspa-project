import { Link } from 'react-router-dom'
import Button from '../shared/Button'
import backgroundImage from '../../assets/images/background/background-image.png'
import arrowIcon from '../../assets/images/icons/arrow-icon.svg'
import facialImage from '../../assets/images/services/facial-service-image.png'
import lashImage from '../../assets/images/services/lash-service-image.png'
import eyebrowImage from '../../assets/images/services/eyebrown-service-image.png'
import bodyImage from '../../assets/images/services/body-service-image.png'
import medicalImage from '../../assets/images/services/medical-service-image.png'
import skincareImage from '../../assets/images/services/skincare-service-image.png'

/**
 * ServicesSection Component
 * 
 * Displays all service offerings in a staggered grid layout with circular images.
 * Features alternating content placement with offset on even items.
 * 
 * @component
 * @returns {JSX.Element} Services section with grid of service cards
 */
function ServicesSection() {
    const services = [
        {
            id: 1,
            title: 'Facial',
            description: 'Customized facials and advanced skin treatments',
            buttonText: 'View Menu',
            link: '/services/facial',
            image: facialImage,
        },
        {
            id: 2,
            title: 'Lash',
            description: 'Professional eyelash extensions and treatments',
            buttonText: 'View Menu',
            link: '/services/lash',
            image: lashImage,
        },
        {
            id: 3,
            title: 'Eyebrows',
            description: 'Expert eyebrow shaping and enhancement services',
            buttonText: 'View Menu',
            link: '/services/eyebrow',
            image: eyebrowImage,
        },
        {
            id: 4,
            title: 'Body',
            description: 'Body treatments and wellness therapies',
            buttonText: 'View Menu',
            link: '/services/body',
            image: bodyImage,
        },
        {
            id: 5,
            title: 'Medical Treatments',
            description: 'Medical aesthetic procedures including Botox and fillers',
            buttonText: 'View Menu',
            link: '/services/medical',
            image: medicalImage,
        },
        {
            id: 6,
            title: 'Skincare Products',
            description: 'Skin care formulations for visible, lasting results',
            buttonText: 'Explore',
            externalLink: 'https://thelunamedspa.glossgenius.com/services',
            image: skincareImage,
        }
    ]

    return (
        <>
            <style>{`
                .services-section {
                    background-image: none;
                }
                @media (min-width: 768px) {
                    .services-section {
                        background-image: url(${backgroundImage});
                        background-size: cover;
                        background-position: center;
                    }
                }
            `}</style>
            <section className="services-section relative py-20 md:pb-16">
                <div className="max-w-container mx-auto px-8">
                    {/* Section Header */}
                    <h2 className="text-h1 font-serif font-semibold italic text-primary-800 text-center mb-10">
                        Our Services
                    </h2>

                    {/* Services Grid - Staggered Layout */}
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col gap-12 md:gap-0">
                            {services.map((service, index) => {
                                const isEven = (index + 1) % 2 === 0
                                const isLarge = [0, 1, 3, 5].includes(index) // Facial, Lash, Body, Skincare
                                const imageSize = isLarge ? 'w-80 h-80 md:w-96 md:h-96' : 'w-80 h-80 md:w-96 md:h-96'

                                return (
                                    <div
                                        key={service.id}
                                        className={`group flex flex-col items-center md:items-stretch md:flex-row gap-8 md:gap-12 ${isEven
                                            ? 'md:flex-row-reverse md:text-right'
                                            : 'md:flex-row md:text-left'
                                            }`}
                                    >
                                        {/* Image */}
                                        <div className={`${imageSize} flex-shrink-0`}>
                                            <div className="background-transparent w-full h-full">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-contain rounded-full transition-transform duration-300 ease-in-out group-hover:animate-float"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className={`flex flex-col justify-center space-y-4 w-full max-w-sm mx-auto md:max-w-none md:mx-0 text-center ${isEven ? 'md:text-right' : 'md:text-left'
                                            }`}>
                                            <h3 className="font-serif italic text-h2 text-primary-800">
                                                {service.title}
                                            </h3>
                                            <p className="font-sans text-body-md text-neutral-500 leading-relaxed">
                                                {service.description}
                                            </p>
                                            <div className={`flex ${isEven
                                                ? 'justify-center md:justify-end'
                                                : 'justify-center md:justify-start'
                                                }`}>
                                                {service.link ? (
                                                    <Link to={service.link}>
                                                        <Button
                                                            variant="secondary"
                                                            size="md"
                                                            className="group"
                                                            icon={arrowIcon}
                                                        >
                                                            {service.buttonText}
                                                        </Button>
                                                    </Link>
                                                ) : service.externalLink ? (
                                                    <Button
                                                        variant="secondary"
                                                        size="md"
                                                        className="group"
                                                        icon={arrowIcon}
                                                        onClick={() => window.open(service.externalLink, '_blank')}
                                                    >
                                                        {service.buttonText}
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        variant="secondary"
                                                        size="md"
                                                        className="group"
                                                        icon={arrowIcon}
                                                    >
                                                        {service.buttonText}
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesSection
