import { Handshake, DollarSign, Package, Truck, Users, Target } from 'lucide-react';

export default function Partner() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Direct sourcing and efficient operations mean better margins for you'
    },
    {
      icon: Package,
      title: 'Consistent Quality Supply',
      description: 'Reliable inventory and strong supplier network ensure steady availability'
    },
    {
      icon: Truck,
      title: 'Flexible Packaging',
      description: 'Multiple pack sizes from retail pouches to bulk containers'
    },
    {
      icon: Users,
      title: 'Private Labeling',
      description: 'Launch your own brand with our white-label and custom packaging services'
    }
  ];

  const partnerTypes = [
    {
      title: 'Importers & Distributors',
      description: 'Expand your portfolio with authentic Indian spices. We offer competitive pricing, consistent quality, and reliable supply for wholesale distribution.',
      features: ['Volume discounts', 'Credit terms for established partners', 'Marketing support materials', 'Exclusive territory options']
    },
    {
      title: 'Retail Chains & Supermarkets',
      description: 'Offer your customers genuine Indian flavors with our retail-ready packaging or private label solutions.',
      features: ['Custom pack sizes', 'Barcode and labeling support', 'Promotional materials', 'Seasonal product recommendations']
    },
    {
      title: 'Restaurant Groups & Caterers',
      description: 'Get bulk supplies of premium spices that meet your kitchen\'s exact specifications and maintain consistency across locations.',
      features: ['Customized blends', 'Large format packaging', 'Regular supply contracts', 'Chef consultation services']
    },
    {
      title: 'Food Manufacturers',
      description: 'Source high-quality spices for your products. We understand food industry requirements and provide certificates for compliance.',
      features: ['Bulk quantities', 'Quality certificates & CoA', 'Consistent specs', 'Technical support']
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Partner With Us</h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Build Your Business with a Trusted Spice Partner
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold mb-6">
              Why Partner With SpiceVista
            </div>
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              We're More Than Just a Supplier
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              When you partner with SpiceVista Exports, you're working with a team that has spent 30 years
              building expertise in sourcing, processing, and delivering exceptional Indian spices. We're
              invested in your success and committed to being a reliable, long-term partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Whatever your business model, we have a partnership solution that works for you
            </p>
          </div>

          <div className="space-y-8">
            {partnerTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                    <Handshake className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-amber-900 mb-4">{type.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {type.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
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
                Our Partnership Process
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Getting started is simple. We focus on understanding your needs and building a relationship
                based on trust and mutual success.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Initial Consultation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Contact us to discuss your requirements. We'll learn about your business, target market,
                      and specific spice needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Product Selection & Samples</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We'll recommend products based on your needs and send samples for evaluation. This helps
                      ensure our spices meet your quality expectations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Customization & Pricing</h3>
                    <p className="text-gray-700 leading-relaxed">
                      If you need custom blends, private labeling, or specific packaging, we'll work together
                      to design the perfect solution. We'll provide transparent pricing and terms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">First Order & Logistics</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Once approved, we process your order with full attention to quality and compliance. Our
                      logistics team handles all export documentation and coordinates shipment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Ongoing Partnership</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We stay in close contact, ensuring timely reorders, addressing any concerns, and looking
                      for ways to support your business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-900 to-orange-800 rounded-2xl p-10 text-white shadow-2xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                  <Target className="text-amber-900" size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Commitment to You</h3>
                <ul className="space-y-4 text-lg text-amber-100">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Transparent and honest communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Consistent product quality across all orders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Competitive pricing without hidden costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Responsive customer service and support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Flexibility to grow with your business</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-2xl border-2 border-amber-200">
                <h3 className="text-2xl font-bold text-amber-900 mb-6">What Makes Us Different?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Many spice exporters can ship products. We bring 30 years of deep industry knowledge,
                  established farmer relationships, and a genuine commitment to quality.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We've been in your customers' shoes — we know what it takes to build trust through
                  product excellence and reliable service. Let us help you succeed in your market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start a Partnership?
          </h2>
          <p className="text-xl text-amber-100 mb-10 leading-relaxed">
            Whether you're exploring new suppliers or looking to expand your product range,
            we're here to discuss how SpiceVista can support your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#/contact"
              className="inline-block px-10 py-5 bg-white text-amber-900 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Contact Us Today
            </a>
            <a
              href="#/products"
              className="inline-block px-10 py-5 bg-amber-700 text-white text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white"
            >
              View Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
