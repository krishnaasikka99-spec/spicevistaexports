import { Flame, Sparkles, ShoppingBag, Package } from 'lucide-react';

export default function Products() {
  const wholeSpices = [
    { name: 'Cumin Seeds', origin: 'Gujarat, Rajasthan', uses: 'Tempering, curries, spice blends', flavor: 'Warm, earthy, slightly citrusy' },
    { name: 'Coriander Seeds', origin: 'Rajasthan, Madhya Pradesh', uses: 'Curries, pickles, spice mixes', flavor: 'Citrusy, sweet, slightly nutty' },
    { name: 'Black Pepper', origin: 'Kerala, Karnataka', uses: 'Universal seasoning, marinades', flavor: 'Sharp, pungent, woody' },
    { name: 'Green Cardamom', origin: 'Kerala, Tamil Nadu', uses: 'Desserts, tea, rice dishes', flavor: 'Sweet, floral, aromatic' },
    { name: 'Cloves', origin: 'Kerala, Tamil Nadu', uses: 'Garam masala, rice, desserts', flavor: 'Sweet, warm, intense' },
    { name: 'Cinnamon Sticks', origin: 'Kerala, Karnataka', uses: 'Biryani, curries, beverages', flavor: 'Sweet, woody, warming' }
  ];

  const groundSpices = [
    { name: 'Turmeric Powder', origin: 'Tamil Nadu, Andhra Pradesh', uses: 'Base for curries, health drinks', flavor: 'Earthy, slightly bitter, warm' },
    { name: 'Red Chilli Powder', origin: 'Andhra Pradesh, Karnataka', uses: 'Heat and color in dishes', flavor: 'Fiery hot to mildly spicy' },
    { name: 'Coriander Powder', origin: 'Rajasthan, Madhya Pradesh', uses: 'Curry base, marinades', flavor: 'Mild, sweet, lemony' },
    { name: 'Cumin Powder', origin: 'Gujarat, Rajasthan', uses: 'Seasoning, curries, dals', flavor: 'Nutty, peppery, earthy' }
  ];

  const blends = [
    { name: 'Garam Masala', composition: 'Cardamom, cinnamon, cloves, cumin, coriander', uses: 'Finishing spice for curries and vegetables' },
    { name: 'Curry Powder', composition: 'Turmeric, coriander, cumin, fenugreek, chili', uses: 'Base for Indian-style curry dishes' },
    { name: 'Meat Masala', composition: 'Black pepper, cardamom, cinnamon, cloves, mace', uses: 'Marinating and cooking meat dishes' },
    { name: 'Chaat Masala', composition: 'Mango powder, cumin, black salt, chili', uses: 'Snacks, salads, street food seasoning' }
  ];

  const specialtyExports = [
    { name: 'Kashmiri Saffron', origin: 'Kashmir', note: 'Premium grade, deep color, strong aroma', uses: 'Desserts, rice, beverages' },
    { name: 'Asafoetida (Hing)', origin: 'Afghanistan/Iran (processed in India)', note: 'Pure and compound varieties', uses: 'Tempering, lentils, vegetables' },
    { name: 'Bay Leaves', origin: 'Uttarakhand, Himachal Pradesh', note: 'Dried, fragrant leaves', uses: 'Biryani, curries, soups' },
    { name: 'Fenugreek Seeds', origin: 'Rajasthan, Gujarat', note: 'Bitter-sweet, aromatic', uses: 'Tempering, pickles, curry base' }
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            A Carefully Curated Collection of India's Finest Spices
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mr-6 shadow-lg">
              <Sparkles className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-amber-900">Whole Spices</h2>
              <p className="text-gray-600 text-lg">Pure, unprocessed, full of natural oils and aroma</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wholeSpices.map((spice, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-amber-600">
                <h3 className="text-2xl font-bold text-amber-900 mb-3">{spice.name}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-gray-800">Origin:</span> <span className="text-gray-600">{spice.origin}</span></p>
                  <p><span className="font-semibold text-gray-800">Flavor:</span> <span className="text-gray-600">{spice.flavor}</span></p>
                  <p><span className="font-semibold text-gray-800">Uses:</span> <span className="text-gray-600">{spice.uses}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-700 rounded-full flex items-center justify-center mr-6 shadow-lg">
              <Flame className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-amber-900">Ground Spices</h2>
              <p className="text-gray-600 text-lg">Finely ground, ready to use, maintaining full potency</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groundSpices.map((spice, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-red-600">
                <h3 className="text-2xl font-bold text-amber-900 mb-3">{spice.name}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-gray-800">Origin:</span> <span className="text-gray-600">{spice.origin}</span></p>
                  <p><span className="font-semibold text-gray-800">Flavor Profile:</span> <span className="text-gray-600">{spice.flavor}</span></p>
                  <p><span className="font-semibold text-gray-800">Common Uses:</span> <span className="text-gray-600">{spice.uses}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-700 rounded-full flex items-center justify-center mr-6 shadow-lg">
              <ShoppingBag className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-amber-900">Premium Spice Blends</h2>
              <p className="text-gray-600 text-lg">Expertly balanced, traditional recipes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blends.map((blend, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-orange-600">
                <h3 className="text-2xl font-bold text-amber-900 mb-3">{blend.name}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-gray-800">Composition:</span> <span className="text-gray-600">{blend.composition}</span></p>
                  <p><span className="font-semibold text-gray-800">Best For:</span> <span className="text-gray-600">{blend.uses}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-800 to-orange-900 rounded-full flex items-center justify-center mr-6 shadow-lg">
              <Package className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-amber-900">Specialty Exports</h2>
              <p className="text-gray-600 text-lg">Rare and premium selections for discerning markets</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialtyExports.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-amber-800">
                <h3 className="text-2xl font-bold text-amber-900 mb-3">{item.name}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-gray-800">Origin:</span> <span className="text-gray-600">{item.origin}</span></p>
                  <p><span className="font-semibold text-gray-800">Note:</span> <span className="text-gray-600">{item.note}</span></p>
                  <p><span className="font-semibold text-gray-800">Uses:</span> <span className="text-gray-600">{item.uses}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Custom Solutions for Your Business</h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            We understand that every market and customer has unique needs. That's why we offer:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Custom Blends</h3>
              <p className="text-amber-100">
                Work with our experts to develop unique spice blends tailored to your market preferences and culinary traditions
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Private Label Packaging</h3>
              <p className="text-amber-100">
                Launch your own brand with our private labeling services — we handle sourcing, processing, and packaging
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Flexible Pack Sizes</h3>
              <p className="text-amber-100">
                From small retail packs to bulk industrial quantities, we accommodate orders of all sizes
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-amber-100">
                Every batch comes with detailed quality certificates and meets international food safety standards
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
