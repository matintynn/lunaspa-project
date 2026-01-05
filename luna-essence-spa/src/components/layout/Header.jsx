import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../shared/Button'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100) // Adjust 100 to your preference
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <header className={`fixed top-0 left-0 w-full z-50 border-b border-primary-600 transition-colors duration-900 ${isScrolled ? 'bg-background' : 'bg-transparent'
      }`} style={{ height: '120px' }}>
      <div className="mx-auto px-4 nav:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center" style={{ width: '280px' }}>
            <img
              src="/src/assets/images/luna-logo.svg"
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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
              >
                <img
                  src="/src/assets/images/social-icons/facebook-icon.svg"
                  alt="Facebook"
                  className="w-full h-full"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
              >
                <img
                  src="/src/assets/images/social-icons/instagram-icon.svg"
                  alt="Instagram"
                  className="w-full h-full"
                />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
              >
                <img
                  src="/src/assets/images/social-icons/tiktok-icon.svg"
                  alt="TikTok"
                  className="w-full h-full"
                />
              </a>
            </div>
            <Button>Book Now</Button>
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
                src="/src/assets/images/social-icons/facebook-icon.svg"
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
                src="/src/assets/images/social-icons/instagram-icon.svg"
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
                src="/src/assets/images/social-icons/tiktok-icon.svg"
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