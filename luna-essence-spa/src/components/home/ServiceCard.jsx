import { Link } from 'react-router-dom'

function ServiceCard({ service, className = '' }) {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            <Link to={`/services/${service.slug}`} className="group">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/EDE7D9/8B7B6B?text=' + service.name
                        }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="text-center max-w-xs">
                    <h3 className="text-h4 font-serif text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {service.name}
                    </h3>
                    <p className="text-body-sm font-sans text-neutral-600 mb-3">
                        {service.description}
                    </p>
                    <span className="text-body-sm font-sans text-neutral-900 font-medium group-hover:underline">
                        Read →
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default ServiceCard