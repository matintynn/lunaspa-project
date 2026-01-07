import { Link } from 'react-router-dom'
import Container from '../shared/Container'
import Button from '../shared/Button'
import heroImage from '../../assets/images/hero-image.png'
import heroBackground from '../../assets/images/background/hero-bg-image.png'
import arrowIcon from '../../assets/images/icons/arrow-icon.svg'

function HeroSection() {
    return (
        <section
            style={{
                backgroundImage: `url(${heroBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Container className="relative z-10">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center py-40 lg:pt-44 lg:pb-28">
                    {/* Mobile: Image on top, Desktop: Content on left */}
                    <div className="order-1 md:order-2 relative">
                        <div className="relative flex justify-center md:justify-end">
                            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
                                {/* Image circle */}
                                <div className="relativeoverflow-hidden">
                                    <img
                                        src={heroImage}
                                        alt="Relaxing spa treatment"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content: Below image on mobile, Left on desktop */}
                    <div className="order-2 md:order-1 space-y-4 md:space-y-6">
                        <h1 className="font-serif italic text-primary-800 text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] lg:leading-[-1.05] tracking-[-1px] font-semibold">
                            Your journey to radiance starts here.
                        </h1>

                        <p className="font-sans text-body-lg text-neutral-500 leading-relaxed font-light">
                            At Luna, you're welcomed, supported, and treated with care. No judgment, no stress--just gentle treatments that help your confidence shine through. Book a time that works for you.
                        </p>

                        <div className="flex flex-wrap">
                            <a
                                href="https://thelunamedspa.glossgenius.com/services"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button variant="primary" size="md">
                                    Book Now
                                </Button>
                            </a>

                            <Link to="/services">
                                <Button
                                    variant="tertiary"
                                    size="md"
                                    icon={arrowIcon}
                                    className="text-neutral-700 hover:text-neutral-900"
                                >
                                    Our Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HeroSection
