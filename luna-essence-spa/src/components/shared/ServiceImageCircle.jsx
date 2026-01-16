import lunaLogo from '../../assets/images/luna-logo.svg'

/**
 * ServiceImageCircle Component
 * 
 * Luna Spa branded circular image container with offset inner circle.
 * - Outer circle: background secondary-200
 * - Inner circle: offset to right, border-primary-600, contains the image
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for the image
 * @param {string} fallbackSrc - Fallback image if src is not provided
 * @param {string} size - Size variant: 'sm' (200px), 'md' (300px), 'lg' (384px)
 */
function ServiceImageCircle({ src, alt, fallbackSrc = lunaLogo, size = 'md' }) {
    const imageSrc = src || fallbackSrc
    const isFallback = !src

    // Size configurations
    const sizeConfig = {
        sm: {
            outer: { width: '200px', height: '200px' },
            inner: { width: '180px', height: '180px', top: '10px', right: '28px' },
            fallbackImg: 'w-20 h-20'
        },
        md: {
            outer: { width: '300px', height: '300px' },
            inner: { width: '270px', height: '270px', top: '15px', right: '40px' },
            fallbackImg: 'w-32 h-32'
        },
        lg: {
            outer: { width: '384px', height: '384px' },
            inner: { width: '346px', height: '346px', top: '19px', right: '50px' },
            fallbackImg: 'w-40 h-40'
        }
    }

    const config = sizeConfig[size] || sizeConfig.md

    return (
        <div
            className="relative rounded-full bg-secondary-200 flex-shrink-0"
            style={config.outer}
        >
            <div
                className="absolute rounded-full overflow-hidden border border-primary-600"
                style={config.inner}
            >
                <img
                    src={imageSrc}
                    alt={alt}
                    className={isFallback
                        ? `${config.fallbackImg} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`
                        : 'w-full h-full'
                    }
                />
            </div>
        </div>
    )
}

export default ServiceImageCircle
