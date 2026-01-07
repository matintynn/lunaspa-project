import Container from '../shared/Container'
import heroBgImage from '../../assets/images/background/hero-bg-image.png'
import tiffanyImage from '../../assets/images/staffs/tiffany-image.jpg'
import angieImage from '../../assets/images/staffs/angie-image.jpg'
import daisieImage from '../../assets/images/staffs/daisie-image.jpg'

/**
 * TeamSection Component
 * 
 * Displays team members with their photos, experience, and bios.
 * Features rounded-top profile images with border styling.
 * 
 * @component
 * @returns {JSX.Element} Team section
 */
function TeamSection() {
    const teamMembers = [
        {
            image: tiffanyImage,
            experience: '5 years experience',
            name: 'Tiffany Nguyen',
            title: 'Esthetician and Lash tech',
            bio: 'With 5+ years as a medical esthetician, I blend science and care to create personalized treatments that target acne, texture, and skin health—helping you feel confident and radiant.'
        },
        {
            image: angieImage,
            experience: '4 years experience',
            name: 'Angie Tran',
            title: 'Esthetician and Lash tech',
            bio: 'Experienced medical esthetician focused on acne, pigmentation, and skin renewal. Angie delivers tailored, science-backed treatments that restore skin health, clarity, and long-lasting confidence.'
        },
        {
            image: daisieImage,
            experience: '6 years experience',
            name: 'Daisie Lai',
            title: 'Esthetician and Lash tech',
            bio: 'Medical esthetician specializing in corrective skincare, acne, and skin rejuvenation. Daisie combines clinical knowledge with personalized treatments to help clients achieve healthy.'
        }
    ]

    return (
        <section>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 py-16 md:py-24 lg:py-32">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col">
                            {/* Image with rounded top corners */}
                            <div className="relative mb-6">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full aspect-[3/4] object-cover border border-primary-600"
                                    style={{
                                        borderRadius: '999px 999px 0 0'
                                    }}
                                />
                            </div>

                            {/* Member info */}
                            <div className="flex flex-col space-y-2">
                                {/* Experience tag */}
                                <div className="">
                                    <span className="inline-block bg-secondary-100 text-neutral-600 font-medium italic text-sm px-3 py-1 rounded-full">
                                        {member.experience}
                                    </span>
                                </div>
                                <h3 className="font-serif italic text-[40px] leading-tight text-primary-800">
                                    {member.name}
                                </h3>
                                <p className="font-sans font-medium text-base text-primary-800">
                                    {member.title}
                                </p>
                                <p className="font-sans font-light text-base text-neutral-500 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default TeamSection
