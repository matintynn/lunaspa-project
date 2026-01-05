function TestimonialCard({ testimonial }) {
    return (
        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-lg">
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className="w-5 h-5 fill-yellow-500"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                ))}
            </div>

            {/* Quote */}
            <p className="text-neutral-700 text-body-md font-sans leading-relaxed mb-6 italic">
                "{testimonial.quote}"
            </p>

            {/* Author */}
            <p className="text-neutral-900 font-serif font-medium text-h5">
                {testimonial.author}
            </p>
        </div>
    )
}

export default TestimonialCard