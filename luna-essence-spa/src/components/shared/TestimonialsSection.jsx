import Container from './Container'
import smallBackground from '../../assets/images/background/small-bg-image.png'

/**
 * TestimonialsSection Component
 * 
 * Displays customer testimonials with name, rating, and quote.
 * Responsive layout: 2 columns on desktop/tablet, stacked on mobile.
 * 
 * Features:
 * - Max width: 1188px (via Container)
 * - Background: primary-100 with noise effect
 * - Border: 1px solid primary-600 (top and bottom)
 * - Spacing: 80px desktop, 56px tablet, 32px mobile (stack)
 * - Star ratings with full/half star support
 * 
 * @component
 * @returns {JSX.Element} Testimonials section
 */
function TestimonialsSection() {
    const testimonials = [
        {
            name: 'Emily R.',
            rating: 5,
            quote: "I've never felt this safe walking into a med spa. The girls at Luna hype you up from the moment you walk in. My skin looks amazing, but honestly… the confidence boost is the real magic."
        },
        {
            name: 'Hannah P.',
            rating: 4.5,
            quote: "I was nervous about trying injectables, but Luna made everything feel so easy and calm. They explained everything in simple words and made me feel like I was hanging out with a supportive friend."
        }
    ]

    const renderStars = (rating) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        // Full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg
                    key={`full-${i}`}
                    className="w-5 h-5 fill-secondary-800"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
            )
        }

        // Half star
        if (hasHalfStar) {
            stars.push(
                <svg
                    key="half"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="half-fill">
                            <stop offset="50%" stopColor="#66503A" />
                            <stop offset="50%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#half-fill)"
                        stroke="#66503A"
                        strokeWidth="1"
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    />
                </svg>
            )
        }

        return stars
    }

    return (
        <section className="relative border-t border-b border-primary-600 md:h-[480px]" style={{
            backgroundImage: `url(${smallBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Container className="relative z-10 bg-primary-100 border-x border-primary-600 md:h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20 md:h-full">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`flex flex-col space-y-4 py-20 px-8 md:py-0 md:flex md:justify-center ${index === 1 ? 'border-t border-primary-600 md:border-t-0' : ''}`}>
                            {/* Name */}
                            <h3 className="font-serif italic text-2xl md:text-3xl font-semibold text-primary-800">
                                {testimonial.name}
                            </h3>

                            {/* Rating stars */}
                            <div className="flex gap-1">
                                {renderStars(testimonial.rating)}
                            </div>

                            {/* Quote */}
                            <p className="text-base font-light md:text-md leading-relaxed text-neutral-500 font-sans">
                                {testimonial.quote}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default TestimonialsSection
