import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1759542877886-39d81e8f2eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHRlYW18ZW58MHwwfHx8MTc2NDQwMDE3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jack The Electrician team"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-2xl max-w-xs">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-lg font-semibold">Years of Excellence</div>
              <div className="text-sm text-primary-100 mt-2">Serving Shepperton & surrounding areas</div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              About Us
            </div>

            <h2 className="text-h2 font-heading mb-6">
              Your Trusted Electrical Partner in Shepperton
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Jack The Electrician has been serving the Shepperton community for over a decade, providing top-quality electrical services to both residential and commercial clients. Our team of licensed and experienced electricians are dedicated to delivering exceptional workmanship and customer satisfaction on every project.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              We pride ourselves on our attention to detail, professionalism, and commitment to safety. Whether you need a simple repair or a complete electrical installation, we have the expertise and equipment to get the job done right the first time.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'Licensed & Insured',
                  description: 'All our electricians are fully qualified and certified to the highest standards.',
                },
                {
                  title: 'Quality Guaranteed',
                  description: 'We stand behind our work with comprehensive warranties and guarantees.',
                },
                {
                  title: 'Transparent Pricing',
                  description: 'No hidden fees. Clear, upfront quotes before we start any work.',
                },
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{point.title}</h4>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn btn-primary">
                Get a Free Quote
              </a>
              <a href="tel:12345678910" className="btn btn-outline">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                12345678910
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl font-heading font-bold mb-4">Why Choose Jack The Electrician?</h3>
            <p className="text-lg text-gray-600">
              We're committed to providing the highest quality electrical services with unmatched customer care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Fast Response',
                description: 'Quick turnaround times for all projects and 24/7 emergency service',
              },
              {
                icon: '🛡️',
                title: 'Safety First',
                description: 'Strict adherence to all safety regulations and building codes',
              },
              {
                icon: '💰',
                title: 'Fair Pricing',
                description: 'Competitive rates with no hidden costs or surprise charges',
              },
              {
                icon: '⭐',
                title: 'Expert Team',
                description: 'Highly skilled electricians with years of hands-on experience',
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}