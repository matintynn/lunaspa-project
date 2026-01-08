import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../shared/Button'

const sections = [
    { id: 'intro', label: 'Back to Top' },
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'spacing', label: 'Spacing & Layout' },
    { id: 'ui', label: 'UI Elements' },
    { id: 'iconography', label: 'Iconography' },
    { id: 'social', label: 'Social Media' },
    { id: 'reference', label: 'Quick Reference' },
]

function QuickAccessBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSection = (id) => (e) => {
        e.preventDefault()
        const el = document.getElementById(id)
        if (!el) return
        const header = document.querySelector('header')
        const offset = (header?.clientHeight || 0) + 12
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
        setIsMenuOpen(false)
    }

    return (
        <nav className="w-full mt-12 bg-secondary-200 border-y border-primary-600 z-40 transition-all">
            {/* Desktop: pills */}
            <div className="max-w-container mx-auto px-4 nav:flex flex-wrap gap-2 py-6 hidden">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="shrink-0"
                        onClick={scrollToSection(section.id)}
                    >
                        <Button
                            variant="secondary"
                            size="sm"
                            className="group flex items-center gap-2 px-4 py-2"
                        >
                            {section.label}
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </Button>
                    </a>
                ))}
                <Link to="/" className="shrink-0">
                    <Button
                        variant="primary"
                        size="sm"
                        className="px-4 py-2"
                    >
                        Go to Website
                    </Button>
                </Link>
            </div>

            {/* Mobile: Quick Links bar */}
            <div className="nav:hidden flex items-center justify-between px-4 py-4">
                <span className="text-body-lg font-serif text-primary-800">Quick Links</span>
                <button
                    className="relative w-8 h-8 flex items-center justify-center"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle quick links"
                >
                    <span className="absolute h-0.5 w-6 bg-neutral-900 -translate-y-2" />
                    <span className="absolute h-0.5 w-6 bg-neutral-900 translate-y-2" />
                </button>
            </div>

            {/* Mobile drawer */}
            <div
                className={`nav:hidden fixed top-0 right-0 w-72 h-screen bg-background shadow-sm transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-12 right-6 w-8 h-8 flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close quick links"
                >
                    <span className="absolute h-0.5 w-6 bg-neutral-900 rotate-45" />
                    <span className="absolute h-0.5 w-6 bg-neutral-900 -rotate-45" />
                </button>

                <div className="flex flex-col p-6 space-y-4 mt-32">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            onClick={scrollToSection(section.id)}
                            className="text-navlink font-serif text-neutral-800"
                        >
                            {section.label}
                        </a>
                    ))}
                    <Link
                        to="/"
                        className="text-navlink font-serif text-primary-700 font-semibold pt-4 border-t border-neutral-200"
                    >
                        Go to Website →
                    </Link>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="nav:hidden fixed inset-0 bg-black/20"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </nav>
    )
}

export default QuickAccessBar
