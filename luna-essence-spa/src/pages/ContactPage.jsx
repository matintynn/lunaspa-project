import { useForm } from 'react-hook-form'
import Container from '../components/shared/Container'

function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
    // Handle form submission here
  }

  return (
    <div className="py-20 bg-background min-h-screen">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-h1 font-serif text-black mb-8 text-center">
            Contact Us
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-body-sm font-medium text-neutral-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {errors.name && (
                  <p className="mt-1 text-body-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-body-sm font-medium text-neutral-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {errors.email && (
                  <p className="mt-1 text-body-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-body-sm font-medium text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-body-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-600 text-white text-cta font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-h5 font-serif text-black mb-4">Contact Information</h3>
              <ul className="space-y-2 text-body-md text-neutral-700">
                <li>Email: info@lunaessence.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Spa Street, City, State 12345</li>
              </ul>
            </div>
            <div>
              <h3 className="text-h5 font-serif text-black mb-4">Hours</h3>
              <ul className="space-y-2 text-body-md text-neutral-700">
                <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
                <li>Saturday: 10:00 AM - 6:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ContactPage
