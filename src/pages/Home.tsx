import { Link } from 'react-router-dom';
import { Award, Globe2, Leaf, ShieldCheck, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const highlights = [
    {
      icon: Star,
      title: '30+ Years of Legacy',
      description: 'Three decades of excellence in spice trading'
    },
    {
      icon: Leaf,
      title: 'Sourced from India\'s Finest',
      description: 'Direct from India\'s best spice markets'
    },
    {
      icon: Globe2,
      title: 'Exporting Globally',
      description: 'Serving Europe, USA, Middle East & beyond'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Standards',
      description: 'Stringent quality control & certifications'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-red-900"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
          }}
        ></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-6 py-2 bg-amber-600 text-white rounded-full text-sm font-semibold shadow-lg animate-fade-in">
            Since 1994 • Trusted Globally
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            From Delhi's Heart to the World
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-amber-100 mb-8 font-light">
            Exporting the Essence of India
          </p>

          <p className="text-lg sm:text-xl text-amber-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            SpiceVista Exports is a trusted name in Indian spices for over 30 years,
            now bringing that legacy to global kitchens with authentic flavors and uncompromising quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/products"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Explore Our Range
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-amber-900 font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-cream-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-amber-600"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <highlight.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Why Choose SpiceVista?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Three decades of expertise in sourcing, grading, and packaging India's finest spices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Heritage & Experience</h3>
                  <p className="text-gray-600">
                    Over 30 years of deep knowledge in sourcing, blending, and grading authentic Indian spices
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">
                    Rigorous quality control processes meeting international standards
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe2 className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Global Reach</h3>
                  <p className="text-gray-600">
                    Trusted partner for importers and distributors across continents
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900 to-orange-800 rounded-2xl p-12 text-white shadow-2xl">
              <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6">
                "For us, every spice tells a story — of soil, sun, and centuries of Indian tradition."
              </blockquote>
              <p className="text-amber-200 text-lg">
                Our commitment to authenticity and quality has been the foundation of our success for over three decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Ready to Experience Authentic Indian Spices?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Partner with us to bring the finest Indian flavors to your customers
          </p>
          <Link
            to="/partner"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-amber-600 to-orange-700 text-white text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Become a Partner
            <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
