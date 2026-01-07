import { useState } from 'react'
import Container from '../components/shared/Container'

// FAQ data with Luna's brand voice
const faqs = [
  {
    question: "Who performs the medical aesthetic treatments?",
    answer: "Our skilled team of licensed medical professionals and certified aestheticians perform all treatments. Each team member is extensively trained in the latest techniques and safety protocols, ensuring you receive expert care in a comfortable, supportive environment."
  },
  {
    question: "Do I need a consultation before booking a treatment?",
    answer: "We highly recommend a consultation to understand your skin goals and concerns. During this personalized session, we'll assess your skin, discuss your desired outcomes, and create a custom treatment plan that's perfect for you. It's all about making sure you feel confident and informed every step of the way."
  },
  {
    question: "Is booking with Luna easy and stress-free?",
    answer: "Absolutely! We've designed our booking process to be as smooth as your skin will be after treatment. Simply call us, book online, or stop by in person. Our friendly team will handle all the details and answer any questions you have."
  },
  {
    question: "Are your treatments and products safe and regulated?",
    answer: "Safety is our top priority. We use only FDA-approved treatments and professional-grade products from trusted brands. All our procedures follow strict medical protocols, and our facility meets the highest safety and sanitation standards."
  },
  {
    question: "Do you offer follow-up or aftercare support?",
    answer: "Of course! Your journey doesn't end when you leave our spa. We provide detailed aftercare instructions and are always available to answer questions or address concerns. We want to ensure you get the best results and feel supported throughout your entire skincare journey."
  },
  {
    question: "How do I know which treatment is right for me?",
    answer: "That's what we're here for! During your consultation, we'll listen to your concerns, assess your skin type and condition, and recommend treatments that align with your goals and lifestyle. We believe in honest, personalized recommendations—no pressure, just expert guidance tailored to you."
  }
]

// FAQ Item Component
function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-primary-700 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className={`w-full p-4 text-left flex justify-between items-start hover:bg-secondary-100 transition-colors ${isOpen ? 'bg-secondary-100' : ''
          }`}
      >
        <span className="font-medium text-primary-800 flex-1 pr-4">{faq.question}</span>
        <div
          className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 flex-shrink-0`}
        >
          <span className={`text-3xl font-light transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
            +
          </span>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 text-primary-800 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  )
}

function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="mt-24">
      {/* Header Section */}
      <Container className="py-20 md:pb-16">
        <h1 className="text-h1 font-serif font-semibold italic text-primary-800 text-center">
          Contact Us
        </h1>
      </Container>

      {/* Contact Info Section */}
      <Container className="pb-16">
        <div className="mx-auto" style={{ maxWidth: '700px' }}>
          {/* Contact and Follow Us */}
          <div className="flex flex-col md:flex-row justify-between mb-12 gap-8">
            {/* Contact Info - Left */}
            <div>
              <h3 className="text-h3 font-serif font-bold italic text-primary-800 mb-4">Contact</h3>
              <div className="space-y-3 text-neutral-500 font-light text-body-md">
                <p>
                  <span className="font-semibold text-neutral-600">Address:</span>{' '}
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
                  <span className="text-neutral-600 font-semibold">Phone:</span> (555) 123-4567
                </p>
                <p>
                  <span className="text-neutral-600 font-semibold">Email:</span>{' '}
                  <a
                    href="mailto:thelunamedspa@gmail.com"
                    className="hover:text-primary-700 transition-colors"
                  >
                    thelunamedspa@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Follow Us - Right */}
            <div className="md:text-right">
              <h3 className="text-h3 font-serif font-bold italic text-primary-800 mb-4">Follow Us</h3>
              <div className="flex gap-4 md:justify-end">
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
            </div>
          </div>

          {/* Quote */}
          <div className="mb-4">
            <p className="text-h3 font-serif font-bold italic text-primary-800 leading-tight">
              "Come in, say hi, and get your glow on girls"
            </p>
          </div>

          {/* Map */}
          <div className="mb-16">
            <a
              href="https://maps.app.goo.gl/soAudmixkutjSauB9"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity"
            >
              <img
                src="/images/luna-map.svg"
                alt="Luna Med Spa Location - Click to view in Google Maps"
                className="w-full h-auto object-contain cursor-pointer"
              />
            </a>
          </div>
        </div>
      </Container>

      {/* FAQ Section */}
      <Container className="pb-32">
        <div className="mx-auto" style={{ maxWidth: '700px' }}>
          <h2 className="text-h1 font-serif font-semibold italic text-primary-800 text-center mb-12 leading-none">
            Let us put your mind at ease
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column - First 3 FAQs */}
            <div className="space-y-6">
              {faqs.slice(0, 3).map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  isOpen={openFAQ === index}
                  onToggle={() => toggleFAQ(index)}
                />
              ))}
            </div>

            {/* Right Column - Last 3 FAQs */}
            <div className="space-y-6">
              {faqs.slice(3, 6).map((faq, index) => (
                <FAQItem
                  key={index + 3}
                  faq={faq}
                  isOpen={openFAQ === (index + 3)}
                  onToggle={() => toggleFAQ(index + 3)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ContactPage
