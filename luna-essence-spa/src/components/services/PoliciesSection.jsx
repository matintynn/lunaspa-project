import Container from '../shared/Container'

/**
 * PoliciesSection Component
 * 
 * Displays service policies with the same styling as TestimonialsSection.
 * Features background image, primary-100 background, and proper spacing.
 * 
 * @param {Object} policies - Object containing refill and correction policies
 * @param {string} consentFormUrl - URL to the consent form
 * @returns {JSX.Element} Policies section
 */
function PoliciesSection({ policies, consentFormUrl }) {
    return (
        <section>
            <div className="py-20">
                <h3 className="font-serif font-semibold italic text-h2 text-primary-800 mb-8">
                    Policies
                </h3>
                <div className="">
                    {/* Consent Form */}
                    {consentFormUrl && (
                        <div className="mb-6">
                            <strong className="text-primary-800 font-semibold">Consent:</strong>
                            <p className="text-base md:text-md leading-relaxed text-neutral-500 font-light font-sans mt-2">
                                Before coming to the clinic, please fill out our{' '}
                                <a
                                    href={consentFormUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-800 font-semibold underline hover:text-primary-600 transition-colors"
                                >
                                    Consent & Liability Waiver Form
                                </a>{' '}
                                to save time when you arrive.
                            </p>
                        </div>
                    )}
                    <div className="mb-6">
                        <strong className="text-primary-800 font-semibold">Keep in mind:</strong>
                        <ul className="list-none ml-0 mt-2">
                            {policies.refill.map((p, i) => (
                                <li key={i} className="text-base md:text-md leading-relaxed text-neutral-500 font-light font-sans mb-2">{p}</li>
                            ))}
                        </ul>
                    </div>
                    {/* <div>
                        <strong className="text-primary-800 font-semibold">Note:</strong>
                        <p className="text-base md:text-md leading-relaxed text-neutral-500 font-light font-sans mt-2">{policies.correction}</p>
                        <p className="text-sm italic leading-relaxed text-neutral-500 font-light font-sans mt-2">{policies.note}</p>
                    </div> */}
                </div>
            </div>
        </section >
    )
}

export default PoliciesSection