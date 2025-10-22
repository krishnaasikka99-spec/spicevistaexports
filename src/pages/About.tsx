import { Users, Target, Heart, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Quality',
      description: 'We never compromise on the quality and authenticity of our spices'
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'Honest business practices and transparent dealings with all partners'
    },
    {
      icon: Target,
      title: 'Authenticity',
      description: 'Preserving the true essence and flavor of traditional Indian spices'
    },
    {
      icon: TrendingUp,
      title: 'Customer Satisfaction',
      description: 'Building lasting relationships through exceptional service and products'
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About SpiceVista Exports</h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Three decades of passion, expertise, and commitment to bringing India's finest spices to the world
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold mb-6">
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                A Journey Rooted in Tradition
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  SpiceVista Exports began its journey in 1994 in the bustling spice markets of Delhi,
                  where the aroma of countless spices fills the air and centuries-old trading traditions
                  continue to thrive. What started as a small family-run business focused on serving
                  local wholesalers has evolved into a trusted name in the global spice trade.
                </p>
                <p>
                  Our founders brought with them deep knowledge passed down through generations — the
                  ability to identify the finest quality spices by sight, touch, and aroma. They understood
                  not just the commercial value of spices, but their cultural significance and the stories
                  they carry from farm to table.
                </p>
                <p>
                  For three decades, we have built our reputation on sourcing the finest spices from trusted
                  farmers and suppliers across India. From the cardamom plantations of Kerala to the saffron
                  fields of Kashmir, from the turmeric farms of Tamil Nadu to the cumin fields of Gujarat —
                  we have established direct relationships with the best producers in every region.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl font-bold text-white">30+</span>
                    </div>
                    <h3 className="text-2xl font-bold text-amber-900">Years of Excellence</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                      <span className="font-semibold text-amber-900">Founded</span>
                      <span className="text-gray-700">1994</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                      <span className="font-semibold text-amber-900">Global Exports</span>
                      <span className="text-gray-700">2020</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                      <span className="font-semibold text-amber-900">Countries Served</span>
                      <span className="text-gray-700">15+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">From Local to Global</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our evolution reflects our commitment to excellence and adaptation to global market needs
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">The Early Years (1994-2010)</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                We began by serving domestic wholesalers and retailers in Delhi and surrounding regions.
                During this time, we honed our expertise in spice grading, quality assessment, and building
                relationships with farmers and suppliers. Our reputation for delivering consistent quality
                and fair dealing helped us grow steadily in the local market.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Modernization & Growth (2010-2020)</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                We invested in advanced cleaning, sorting, and packaging equipment. We obtained key
                certifications including FSSAI, ISO, and HACCP compliance. Our processing facility was
                upgraded to meet international standards, preparing us for the global stage while maintaining
                the traditional quality that our customers trusted.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Global Expansion (2020-Present)</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Today, SpiceVista Exports serves customers in Europe, North America, the Middle East, and
                beyond. We have mastered the complexities of international shipping, export documentation,
                and meeting diverse regulatory requirements. Yet, we remain committed to the same values
                that guided us from the beginning — quality, authenticity, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-700">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-3xl md:text-4xl font-light italic leading-relaxed mb-8">
            "For us, every spice tells a story — of soil, sun, and centuries of Indian tradition."
          </blockquote>
          <p className="text-xl text-amber-200 leading-relaxed">
            This philosophy continues to drive us as we share India's aromatic heritage with the world,
            one carefully selected, expertly processed spice at a time.
          </p>
        </div>
      </section>
    </div>
  );
}
