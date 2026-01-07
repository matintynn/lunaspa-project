import Container from '../shared/Container'

/**
 * PoliciesSection Component
 * 
 * Displays service policies with the same styling as TestimonialsSection.
 * Features background image, primary-100 background, and proper spacing.
 * 
 * @param {Object} policies - Object containing refill and correction policies
 * @returns {JSX.Element} Policies section
 */
function PoliciesSection({ policies }) {
    return (
        <section>
            <div className="py-20">
                <h3 className="font-serif font-semibold italic text-h2 text-primary-800 mb-8">
                    Policies (recommended to include)
                </h3>
                <div className="">
                    <div className="mb-6">
                        <strong className="text-primary-800 font-semibold">Refill Policy:</strong>
                        <ul className="list-none ml-0 mt-2">
                            {policies.refill.map((p, i) => (
                                <li key={i} className="text-base md:text-md leading-relaxed text-neutral-500 font-light font-sans mb-2">{p}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <strong className="text-primary-800 font-semibold">Lash Correction Policy:</strong>
                        <p className="text-base md:text-md leading-relaxed text-neutral-500 font-light font-sans mt-2">{policies.correction}</p>
                        <p className="text-sm italic leading-relaxed text-neutral-500 font-light font-sans mt-2">{policies.note}</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default PoliciesSection