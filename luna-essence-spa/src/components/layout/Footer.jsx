import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-h5 font-serif mb-4">Luna Essence Spa</h3>
            <p className="text-body-sm font-sans text-neutral-400 leading-relaxed">
              Your sanctuary for wellness and beauty. Experience the perfect blend of science and self-care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-body-md font-sans font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-body-sm font-sans text-neutral-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-body-sm font-sans text-neutral-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-body-sm font-sans text-neutral-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-body-sm font-sans text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-body-md font-sans font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-body-sm font-sans text-neutral-400">
              <li>Email: lunaessence@yopmail.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>99734 Vista De La Playa<br />Corona del Mar, CA 92625</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-body-sm font-sans text-neutral-500">
            © {new Date().getFullYear()} Luna Essence Spa. All rights reserved. Designed with care.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer