'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner, Shepperton',
    content: 'Jack and his team did an outstanding job rewiring our entire house. They were professional, punctual, and left everything spotless. The quality of work exceeded our expectations. Highly recommended!',
    rating: 5,
    image: '👩',
  },
  {
    name: 'David Thompson',
    role: 'Business Owner, Local Retail',
    content: 'We needed emergency electrical repairs for our shop, and Jack responded immediately. He diagnosed and fixed the problem quickly, getting us back up and running the same day. Excellent service!',
    rating: 5,
    image: '👨',
  },
  {
    name: 'Emma Richardson',
    role: 'Landlord, Multiple Properties',
    content: 'I use Jack The Electrician for all my rental properties. Their EICR certificates are always thorough and delivered on time. Fair pricing and reliable service - couldn\'t ask for more.',
    rating: 5,
    image: '👩‍💼',
  },
  {
    name: 'Michael Brown',
    role: 'Homeowner, Shepperton',
    content: 'Had Jack install new lighting throughout our home. His attention to detail and craftsmanship is exceptional. He also gave us great advice on energy-efficient options. Will definitely use again!',
    rating: 5,
    image: '👨‍💼',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-h2 font-heading mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied clients across Shepperton
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-primary/10">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">{testimonials[currentIndex].image}</div>
                <div>
                  <h4 className="text-xl font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  <div className="flex mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "{testimonials[currentIndex].content}"
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '500+', label: 'Happy Customers' },
            { number: '10+', label: 'Years Experience' },
            { number: '100%', label: 'Satisfaction Rate' },
            { number: '24/7', label: 'Emergency Service' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}