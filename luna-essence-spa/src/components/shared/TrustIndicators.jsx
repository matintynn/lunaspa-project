function TrustIndicators() {
  const indicators = [
    'Licensed Esthetician',
    'Medical Assistant (MA)',
    'Injector for Botox (CP)',
    'Safe Space for Beauty',
    'MBA | Grow your business & expand my network',
  ]

  // Duplicate the array to create seamless infinite loop
  const duplicatedIndicators = [...indicators, ...indicators, ...indicators]

  return (
    <section className="relative overflow-hidden border-t border-b border-primary-600 bg-transparent py-8">
      <div className="flex animate-scroll whitespace-nowrap">
        {duplicatedIndicators.map((indicator, index) => (
          <span
            key={index}
            className="inline-flex items-center font-serif text-body-xl text-primary-700"
            style={{ marginRight: '120px' }}
          >
            {indicator}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default TrustIndicators
