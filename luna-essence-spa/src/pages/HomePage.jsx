import Container from '../components/shared/Container'

function HomePage() {
  return (
    <div>
      {/* Hero Section - Placeholder */}
      <section className="py-20 bg-background">
        <Container>
          <div className="text-center">
            <h1 className="text-h1 font-serif text-black mb-6">
              Welcome to Luna Essence Spa
            </h1>
            <p className="text-body-lg text-neutral-700 max-w-2xl mx-auto mb-8">
              Your sanctuary for wellness, beauty, and relaxation
            </p>
            <a
              href="/services"
              className="inline-block px-8 py-4 bg-primary-600 text-white text-cta font-medium rounded hover:bg-primary-700 transition-colors"
            >
              Explore Services
            </a>
          </div>
        </Container>
      </section>

      {/* Services Preview - Placeholder */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-h2 font-serif text-black text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-background p-6 rounded-lg">
                <h3 className="text-h4 font-serif mb-4">Service {item}</h3>
                <p className="text-body-md text-neutral-600">
                  Service description will go here
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default HomePage
