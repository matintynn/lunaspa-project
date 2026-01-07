import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../shared/Button'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-primary-600 transition-colors duration-300 bg-background"
      style={{
        height: '120px',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
        backgroundSize: '400px 400px'
      }}>
      <div className="mx-auto px-4 nav:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center" style={{ width: '280px' }}>
            <img
              src="/images/luna-logo.svg"
              alt="Luna Essence Spa"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <span
              className="text-h3 font-serif text-neutral-900 hidden"
              style={{ display: 'none' }}
            >
              Luna Essence Spa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden nav:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-navlink font-serif transition-colors ${isActive(link.path)
                  ? 'text-neutral-900 font-semibold'
                  : 'text-neutral-500 hover:text-neutral-900'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons & CTA - Desktop */}
          <div className="hidden nav:flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/people/Luna-Essence-Medspa-and-Lash/61579948200539/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                title="Follow us on TikTok"
              >
                <img
                  src="/images/social-icons/facebook-icon.svg"
                  alt="Facebook"
                  className="w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/lunaessencespa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                title="Follow us on Instagram"
              >
                <img
                  src="/images/social-icons/instagram-icon.svg"
                  alt="Instagram"
                  className="w-full h-full"
                />
              </a>
              <a
                href="https://www.tiktok.com/@lunaessencespa?_r=1&_t=ZT-92pRzWyyKsp&fbclid=IwY2xjawPKZsNleHRuA2FlbQIxMABicmlkETFSUDdoMjl1QmZPQnVNdUVZc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHv4wg3oO49fprfanWnN1hqKKgZy9XKMJ3OhQK3IgFBZwcyAWfuqyYu4znBsf_aem_-QhiGUb7pC-Z-Bbs7Z4JDA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                title="Follow us on TikTok"
              >
                <img
                  src="/images/social-icons/tiktok-icon.svg"
                  alt="TikTok"
                  className="w-full h-full"
                />
              </a>
            </div>
            <a
              href="https://thelunamedspa.glossgenius.com/services"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="primary" size="md">
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="nav:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="absolute h-0.5 w-6 bg-neutral-900 -translate-y-2" />
            <span className="absolute h-0.5 w-6 bg-neutral-900 translate-y-2" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Slide in from right */}
      <div
        className={`nav:hidden fixed top-0 right-0 w-72 h-screen bg-background shadow-sm transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-12 right-6 w-8 h-8 flex items-center justify-center"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="absolute h-0.5 w-6 bg-neutral-900 rotate-45" />
          <span className="absolute h-0.5 w-6 bg-neutral-900 -rotate-45" />
        </button>

        <nav className="flex flex-col p-6 space-y-6 mt-32">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-navlink font-serif ${isActive(link.path)
                ? 'text-neutral-900 font-semibold'
                : 'text-neutral-600'
                }`}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Button - Mobile */}
          <Button size="md" className="w-full mt-4">
            Book Now
          </Button>

          {/* Social Icons - Mobile */}
          <div className="flex gap-4 pt-6 border-t border-neutral-200">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center"
            >
              <img
                src="/images/social-icons/facebook-icon.svg"
                alt="Facebook"
                className="w-full h-full"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center"
            >
              <img
                src="/images/social-icons/instagram-icon.svg"
                alt="Instagram"
                className="w-full h-full"
              />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center"
            >
              <img
                src="/images/social-icons/tiktok-icon.svg"
                alt="TikTok"
                className="w-full h-full"
              />
            </a>
          </div>
        </nav>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div
          className="nav:hidden fixed inset-0 bg-black/20 z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Header