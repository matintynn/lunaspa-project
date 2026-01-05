import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white mt-auto">
      <div className="max-w-container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-h5 font-serif mb-4">Luna Essence Spa</h3>
            <p className="text-body-sm text-neutral-400">
              Your sanctuary for wellness and beauty
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-body-md font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-body-sm text-neutral-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-body-sm text-neutral-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-body-sm text-neutral-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-body-sm text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-body-md font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-body-sm text-neutral-400">
              <li>Email: info@lunaessence.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-body-xs text-neutral-500">
            © {new Date().getFullYear()} Luna Essence Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
