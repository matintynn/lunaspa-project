import { useState, useMemo } from 'react'
import Button from '../shared/Button'
import ServiceImageCircle from '../shared/ServiceImageCircle'
import arrowIcon from '../../assets/images/icons/arrow-icon.svg'

const ALL = 'All'
const UNCATEGORIZED = 'Other'

function getCategories(services) {
    const seen = new Set()
    for (const s of services) {
        seen.add(s.subCategory || UNCATEGORIZED)
    }
    return [ALL, ...Array.from(seen)]
}

function FacialServiceMenu({ services = [], bookingUrl, loading }) {
    const categories = useMemo(() => getCategories(services), [services])
    const [active, setActive] = useState(ALL)

    const filtered = useMemo(
        () =>
            active === ALL
                ? services
                : services.filter((s) => (s.subCategory || UNCATEGORIZED) === active),
        [active, services]
    )

    if (loading) {
        return (
            <div className="text-center text-neutral-500 font-light py-12">
                Loading services...
            </div>
        )
    }

    if (services.length === 0) {
        return (
            <div className="text-center text-neutral-500 font-light py-12">
                New services are coming soon. Please check back!
            </div>
        )
    }

    return (
        <div>
            {/* Sticky filter bar */}
            <div className="sticky top-[120px] z-30 py-4 mb-12">
                {/* Mobile: dropdown */}
                <div className="md:hidden">
                    <select
                        value={active}
                        onChange={(e) => setActive(e.target.value)}
                        className="w-full px-5 py-2.5 rounded-full text-sm font-medium border border-primary-200 bg-white text-primary-800 appearance-none focus:outline-none focus:border-primary-500"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%233B482C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: '44px' }}
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Desktop: pills */}
                <div className="hidden md:flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={[
                                'flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border',
                                active === cat
                                    ? 'bg-primary-800 text-white border-primary-800'
                                    : 'bg-white text-primary-800 border-primary-200 hover:border-primary-500 hover:bg-primary-50',
                            ].join(' ')}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filtered service cards */}
            <div className="space-y-20">
                {filtered.map((service, idx) => (
                    <ServiceCard key={`${service.title}-${idx}`} service={service} bookingUrl={bookingUrl} />
                ))}
            </div>
        </div>
    )
}

function ServiceCard({ service, bookingUrl }) {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8">
            <ServiceImageCircle
                src={service.image}
                alt={service.title}
            />
            <div className="flex-1 w-full">
                <div className="flex items-center gap-4 mb-2">
                    <h2 className="text-h2 font-serif font-semibold italic text-primary-800">{service.title}</h2>
                    <span
                        className="bg-secondary-100 text-primary-800 font-semibold px-4 py-2 rounded-full text-lg"
                        style={{ fontFamily: 'DM Sans', fontStyle: 'italic' }}
                    >
                        {service.price}
                    </span>
                </div>
                <p className="text-neutral-500 font-light mb-2">{service.description}</p>
                {(service.noteTitle || (service.addNote && service.addNote.length > 0)) && (
                    <div className="text-neutral-500 font-light mb-4">
                        {service.noteTitle && (
                            <strong className="text-primary-800">{service.noteTitle}</strong>
                        )}
                        {service.addNote && service.addNote.length > 0 && (
                            <ul className="list-disc ml-6 mt-1">
                                {service.addNote.map((note, i) => (
                                    <li key={i}>{note}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
                {bookingUrl && (
                    <Button
                        variant="secondary"
                        icon={arrowIcon}
                        onClick={() => window.open(bookingUrl, '_blank')}
                        className="mt-3"
                    >
                        Book Now
                    </Button>
                )}
            </div>
        </div>
    )
}

export default FacialServiceMenu

