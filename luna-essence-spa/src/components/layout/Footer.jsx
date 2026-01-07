import { Link } from 'react-router-dom'
import lunaLogo from '../../assets/images/luna-logo.svg'

/**
 * Footer Component
 * 
 * Site footer with contact info, hours, services, and social links.
 * 
 * Layout:
 * - Top: Brand name
 * - Middle: 4 columns (Contact, Hours, Services, Follow Us)
 * - Bottom: Copyright and designer credit
 * 
 * @component
 * @returns {JSX.Element} Footer
 */
function Footer() {
  return (
    <footer
      className="bg-secondary-200"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E")`,
        backgroundSize: '400px 400px'
      }}
    >
      <div className="max-w-container mx-auto px-8 py-10 md:pt-14 md:pb-4">
        {/* Top Section - Brand */}
        <div className="mb-8 pb-6 border-b border-primary-600">
          <h2 className="font-serif italic text-h2 text-primary-800">
            Luna Essence Med Spa
          </h2>
        </div>

        {/* Middle Section - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1 - Contact */}
          <div>
            <h5 className="font-serif text-h4 font-semibold italic text-primary-800 mb-4">Contact</h5>
            <div className="space-y-3 text-body-md font-sans text-neutral-500">
              <p>
                <span className="font-medium text-neutral-700">Address:</span>{' '}
                <a
                  href="https://maps.app.goo.gl/soAudmixkutjSauB9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-700 transition-colors cursor-pointer"
                >
                  3057 W. Holcombe Blvd, Suite 109, Houston, Texas 7702
                </a>
              </p>
              <p>
                <span className="font-medium text-neutral-700">Phone:</span> (555) 123-4567
              </p>
              <p>
                <span className="font-medium text-neutral-700">Email:</span>{' '}
                <a
                  href="mailto:thelunamedspa@gmail.com"
                  className="hover:text-primary-700 transition-colors"
                >
                  thelunamedspa@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 2 - Hours */}
          <div>
            <h5 className="font-serif text-h4 font-semibold italic text-primary-800 mb-4">Hours</h5>
            <div className="space-y-2 text-body-md font-sans text-neutral-500">
              <p>Monday - Friday: 9am - 7pm</p>
              <p>Saturday: 9am - 6pm</p>
              <p>Sunday: 10am - 5pm</p>
            </div>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h5 className="font-serif text-h4 font-semibold italic text-primary-800 mb-4">Services</h5>
            <ul className="space-y-2 text-body-md font-sans">
              <li>
                <Link
                  to="/services"
                  className="text-neutral-500 hover:text-primary-700 transition-colors"
                >
                  Face Treatments
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-500 hover:text-primary-700 transition-colors"
                >
                  Body Treatments
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-500 hover:text-primary-700 transition-colors"
                >
                  Medical Aesthetics
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-500 hover:text-primary-700 transition-colors"
                >
                  Skin Care Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-500 hover:text-primary-700 transition-colors"
                >
                  Lash Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-500 hover:text-primary-700 transition-colors"
                >
                  Eyebrow Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Follow Us */}
          <div>
            <h5 className="font-serif text-h4 font-semibold italic text-primary-00 mb-4">Follow Us</h5>
            <div className="space-y-4">
              <a
                href="https://instagram.com/lunaessencespa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-md font-sans text-neutral-500 hover:text-primary-700 transition-colors block"
              >
                @lunaessencespa
              </a>
              <img
                src={lunaLogo}
                alt="Luna Essence Med Spa Logo"
                className="w-32 h-auto"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-4 border-t border-primary-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-md font-sans text-neutral-500">
            © 2025 Luna Essence Med Spa. All rights reserved.
          </p>
          <p className="text-body-md font-sans text-neutral-500">
            Site design by{' '}
            <a
              href="https://matintruong.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-700 transition-colors"
            >
              Matin Truong
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer