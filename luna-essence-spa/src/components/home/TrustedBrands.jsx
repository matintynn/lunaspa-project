import smallBackground from '../../assets/images/background/small-bg-image.png'

function TrustedBrands() {
    const brands = [
        { name: 'CNP', image: '/images/product-brands/cnp-brand-image.svg' },
        { name: 'Dermaplane Pro', image: '/images/product-brands/dermaplane-brand-image.svg' },
        { name: 'Glymed Plus', image: '/images/product-brands/glymed-brand-image.svg' },
        { name: 'Image Skincare', image: '/images/product-brands/image-brand-image.svg' },
        { name: 'Medicube', image: '/images/product-brands/medicude-brand-image.svg' },
        { name: 'Rejuran', image: '/images/product-brands/rejuran-brand-image.svg' },
        { name: 'SkinCeuticals', image: '/images/product-brands/skinceuticals-brand-image.svg' },
        { name: 'Xtreme Lashes', image: '/images/product-brands/xtreme-brand-image.svg' },
    ]

    // Duplicate the array to create seamless infinite loop
    const duplicatedBrands = [...brands, ...brands, ...brands]

    return (
        <section className="py-16 border-primary-600 bg-transparent" style={{
            backgroundImage: `url(${smallBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="text-center mb-4">
                <h2 className="text-[32px] md:text-[56px] font-medium font-serif italic text-primary-800">
                    Trusted Brands We Use
                </h2>
            </div>

            <div className="relative overflow-hidden flex items-center ">
                <div className="flex animate-scroll-brands whitespace-nowrap">
                    {duplicatedBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center justify-center px-16 flex-shrink-0"
                        >
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="w-auto object-contain"
                                onError={(e) => {
                                    e.target.src = `https://via.placeholder.com/120x80/EDE7D9/8B7B6B?text=${brand.name}`
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes scroll-brands {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-brands {
          animation: scroll-brands 40s linear infinite;
          display: flex;
        }

        .animate-scroll-brands:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    )
}

export default TrustedBrands