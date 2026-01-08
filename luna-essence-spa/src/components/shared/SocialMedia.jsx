/**
 * SocialMedia Component
 * 
 * Reusable component for displaying social media links (Facebook, Instagram, TikTok).
 * Used across Header, Footer, and Contact page for consistent social presence.
 * 
 * @component
 * @param {string} className - Additional CSS classes for the container
 * @param {string} iconSize - Tailwind width/height class (default: "w-6 h-6")
 * @returns {JSX.Element} Social media icon links
 */
function SocialMedia({ className = "", iconSize = "w-6 h-6" }) {
    const socialLinks = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/people/Luna-Essence-Medspa-and-Lash/61579948200539/",
            icon: "/images/social-icons/facebook-icon.svg",
            title: "Follow us on Facebook"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/lunaessencespa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            icon: "/images/social-icons/instagram-icon.svg",
            title: "Follow us on Instagram"
        },
        {
            name: "TikTok",
            url: "https://www.tiktok.com/@lunaessencespa?_r=1&_t=ZT-92pRzWyyKsp&fbclid=IwY2xjawPKZsNleHRuA2FlbQIxMABicmlkETFSUDdoMjl1QmZPQnVNdUVZc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHv4wg3oO49fprfanWnN1hqKKgZy9XKMJ3OhQK3IgFBZwcyAWfuqyYu4znBsf_aem_-QhiGUb7pC-Z-Bbs7Z4JDA",
            icon: "/images/social-icons/tiktok-icon.svg",
            title: "Follow us on TikTok"
        }
    ]

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${iconSize} flex items-center justify-center hover:opacity-70 transition-opacity`}
                    title={social.title}
                >
                    <img
                        src={social.icon}
                        alt={social.name}
                        className="w-full h-full"
                    />
                </a>
            ))}
        </div>
    )
}

export default SocialMedia
