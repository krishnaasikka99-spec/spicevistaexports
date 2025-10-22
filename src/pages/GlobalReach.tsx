import { Globe2, MapPin, Ship, TrendingUp } from 'lucide-react';

export default function GlobalReach() {
  const regions = [
    {
      name: 'Europe',
      countries: ['United Kingdom', 'Germany', 'France', 'Netherlands', 'Spain', 'Italy'],
      highlight: 'Growing demand for authentic Indian spices in European kitchens and restaurants'
    },
    {
      name: 'North America',
      countries: ['United States', 'Canada'],
      highlight: 'Serving diverse communities and fusion cuisine establishments'
    },
    {
      name: 'Middle East',
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman'],
      highlight: 'Strong Indian diaspora and regional appreciation for aromatic spices'
    },
    {
      name: 'Asia-Pacific',
      countries: ['Singapore', 'Malaysia', 'Australia'],
      highlight: 'Multicultural markets with established Indian food culture'
    }
  ];

  const capabilities = [
    {
      icon: Ship,
      title: 'Export Documentation',
      description: 'Expert handling of all export paperwork, certificates, and customs requirements'
    },
    {
      icon: Globe2,
      title: 'International Standards',
      description: 'Products meet FDA, EU, and other regional food safety regulations'
    },
    {
      icon: MapPin,
      title: 'Logistics Network',
      description: 'Partnerships with reliable freight forwarders for timely deliveries'
    },
    {
      icon: TrendingUp,
      title: 'Market Understanding',
      description: 'Deep knowledge of regional preferences and packaging requirements'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Global Reach</h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Bringing India's Authentic Flavors to Kitchens Worldwide
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold mb-6">
              Our Mission
            </div>
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Making India's Authentic Flavors Available Worldwide
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              After 30 years of perfecting our craft in India's domestic market, we've expanded our horizons
              to share the richness of Indian spices with the world. Our global expansion is built on the
              same foundation of quality, authenticity, and customer service that has made us successful at home.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-amber-900 mb-2">15+</div>
                <p className="text-gray-700 font-medium">Countries Served</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-amber-900 mb-2">100+</div>
                <p className="text-gray-700 font-medium">International Clients</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-amber-900 mb-2">500+</div>
                <p className="text-gray-700 font-medium">Containers Shipped</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-amber-900 mb-2">99%</div>
                <p className="text-gray-700 font-medium">On-Time Delivery</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white border-2 border-amber-200 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <capability.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">{capability.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Where We Export
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our spices have found their way into homes, restaurants, and food businesses across continents
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mr-4">
                    <Globe2 className="text-white" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-amber-900">{region.name}</h3>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 text-lg mb-4">{region.highlight}</p>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-medium"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                Why International Partners Choose Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Consistent Quality</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Every shipment maintains the same high standards. Our rigorous quality control ensures
                      your customers receive the same exceptional product every time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Compliance Expertise</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We understand and meet the regulatory requirements of different markets. All necessary
                      certifications, test reports, and documentation are provided.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Reliable Supply Chain</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our established relationships with farmers and modern inventory management ensure
                      consistent supply, even during peak seasons or crop variations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-800 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Competitive Pricing</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Direct sourcing and efficient operations allow us to offer competitive prices without
                      compromising on quality. Volume discounts available for regular customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Responsive Service</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our dedicated export team understands the importance of timely communication and quick
                      problem resolution. We're here to support your business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-900 to-orange-800 rounded-2xl p-10 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">Regional Adaptability</h3>
                <p className="text-xl text-amber-100 leading-relaxed mb-6">
                  We understand that different markets have different needs. Whether it's adjusting spice
                  heat levels for European palates, providing specific packaging for Middle Eastern markets,
                  or meeting FDA requirements for North America, we customize our offerings accordingly.
                </p>
                <p className="text-lg text-amber-200">
                  Our experience in diverse markets makes us an ideal partner for your expansion plans.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-2xl border-2 border-amber-200">
                <h3 className="text-2xl font-bold text-amber-900 mb-6">Shipping & Logistics</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <Ship className="mr-3 mt-1 text-amber-600 flex-shrink-0" size={20} />
                    <span>Container shipping (FCL & LCL options available)</span>
                  </li>
                  <li className="flex items-start">
                    <Ship className="mr-3 mt-1 text-amber-600 flex-shrink-0" size={20} />
                    <span>Air freight for urgent or smaller orders</span>
                  </li>
                  <li className="flex items-start">
                    <Ship className="mr-3 mt-1 text-amber-600 flex-shrink-0" size={20} />
                    <span>Door-to-door delivery coordination</span>
                  </li>
                  <li className="flex items-start">
                    <Ship className="mr-3 mt-1 text-amber-600 flex-shrink-0" size={20} />
                    <span>Real-time tracking and shipment updates</span>
                  </li>
                  <li className="flex items-start">
                    <Ship className="mr-3 mt-1 text-amber-600 flex-shrink-0" size={20} />
                    <span>Insurance coverage options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            Ready to Expand Your Product Line?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Whether you're an established importer, a growing retail chain, or a restaurant group looking for
            authentic Indian spices, we're ready to support your needs with quality products and reliable service.
          </p>
          <a
            href="#/contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-amber-600 to-orange-700 text-white text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
