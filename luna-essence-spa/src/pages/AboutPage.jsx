import Container from '../components/shared/Container'

function AboutPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-h1 font-serif text-black mb-8 text-center">
            About Us
          </h1>
          <div className="prose prose-lg">
            <p className="text-body-lg text-neutral-700 mb-6">
              Welcome to Luna Essence Spa, where wellness meets elegance.
            </p>
            <p className="text-body-md text-neutral-600 mb-4">
              About page content will go here. This section will include information about the spa, 
              its history, mission, and team members.
            </p>
            <p className="text-body-md text-neutral-600">
              More content will be added based on your Figma design...
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutPage
