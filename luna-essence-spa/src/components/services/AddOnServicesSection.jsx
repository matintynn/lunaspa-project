import Container from '../shared/Container'

/**
 * AddOnServicesSection Component
 * 
 * Displays add-on services with the same styling as TestimonialsSection.
 * Features background image, primary-100 background, and proper spacing.
 * 
 * @param {Array} addOns - Array of add-on service strings
 * @returns {JSX.Element} Add-on services section
 */
function AddOnServicesSection({ addOns }) {
    return (
        <section className="relative border-t border-b border-primary-600">
            <Container className="relative z-10 bg-primary-100 border-x border-primary-600">
                <div className="py-16 px-16">
                    <h3 className="font-serif font-semibold italic text-h2 text-primary-800 mb-4">
                        Add-On Services
                    </h3>
                    <div>
                        <ul className="space-y-3 text-base md:text-md leading-relaxed text-neutral-600 font-light font-sans">
                            {addOns.map((item, i) => (
                                <li key={i} className="pb-0">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AddOnServicesSection