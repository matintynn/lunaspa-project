import Container from '../shared/Container'
import Button from '../shared/Button'
import smallBackground from '../../assets/images/background/small-bg-image.png'
import imageDecor from '../../assets/images/image-decor-bg.png'
import arrowIcon from '../../assets/images/icons/arrow-icon.svg'
import { Link } from 'react-router-dom'

/**
 * CTASection Component
 * 
 * Call-to-action section promoting Luna's empowering approach to beauty.
 * 
 * Features:
 * - Layout: Content left, image right
 * - Background: primary-100 with noise effect
 * - Border: 1px solid primary-600 (top/bottom outer, left/right inner)
 * - Responsive: Stacks on mobile
 * - Links to about page
 * 
 * @component
 * @returns {JSX.Element} CTA section
 */
function CTASection() {
    return (
        <section
            className="relative border-t border-b border-primary-600 md:h-[480px]"
            style={{
                backgroundImage: `url(${smallBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Container className="relative z-10 bg-transparent border-x border-primary-600 md:h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:h-full">
                    {/* Content - Left */}
                    <div className="flex flex-col justify-center space-y-6 py-16 px-0 md:pr-10 lg:px-8">
                        {/* Headline */}
                        <h2 className="font-serif italic text-3xl md:text-4xl lg:text-[40px] font-semibold text-primary-800 leading-tight">
                            Created for Women Who Want Beauty Without the Intimidation
                        </h2>

                        {/* Sub-headline */}
                        <p className="text-base md:text-md leading-relaxed text-neutral-500 font-sans font-light">
                            From day one, Luna has been your supportive hype team—combining gentle care, aesthetic excellence, and a zero-stress experience. Our story is about helping you feel beautiful in a way that feels natural, safe, and empowering.
                        </p>

                        {/* Button */}
                        <Link to="/about">
                            <Button
                                variant="secondary"
                                size="md"
                                icon={arrowIcon}
                                className="text-neutral-700 hover:text-neutral-900"
                            >
                                Read more
                            </Button>
                        </Link>
                    </div>

                    {/* Image/Decor - Right */}
                    <div className="hidden md:block relative overflow-hidden">
                        <img
                            src={imageDecor}
                            alt="decor image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CTASection
