import Image from 'next/image'

const services = [
  {
    title: 'Home Electrical',
    description: 'Complete residential electrical services including installations, repairs, rewiring, lighting solutions, and electrical safety inspections for your home.',
    image: 'https://images.unsplash.com/photo-1581166418878-11f0dde922c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ0MDAxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: ['Lighting Installation', 'Socket & Switch Replacement', 'Fuse Box Upgrades', 'Home Rewiring'],
  },
  {
    title: 'Business Electrical',
    description: 'Professional commercial electrical services for offices, retail spaces, and industrial facilities. Emergency callouts and planned maintenance available.',
    image: 'https://images.unsplash.com/photo-1564943608180-39066aa78292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwzfHxlbGVjdHJpY2lhbiUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ0MDAxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ['Commercial Installations', 'Emergency Repairs', 'Lighting Design', 'Maintenance Contracts'],
  },
  {
    title: 'EICR Certificates',
    description: 'Comprehensive Electrical Installation Condition Reports (EICR) for landlords, homeowners, and businesses. Fully certified and compliant with regulations.',
    image: 'https://images.unsplash.com/photo-1683115097173-f24516d000c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHw0fHxlbGVjdHJpY2lhbiUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ0MDAxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    features: ['Full Property Inspection', 'Detailed Reports', 'Compliance Certification', 'Fast Turnaround'],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-h2 font-heading mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Professional electrical solutions tailored to your needs. From residential repairs to commercial installations, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card overflow-hidden group hover:scale-105 transform transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-5 h-5 text-secondary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-600 transition-colors duration-300"
                >
                  Get a Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold mb-4">Additional Services</h3>
            <p className="text-gray-600">We offer a comprehensive range of electrical services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔌', title: 'Emergency Callouts', desc: '24/7 availability' },
              { icon: '💡', title: 'LED Lighting', desc: 'Energy-efficient solutions' },
              { icon: '🔋', title: 'EV Charging', desc: 'Electric vehicle points' },
              { icon: '⚡', title: 'PAT Testing', desc: 'Portable appliance testing' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}