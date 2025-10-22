import { ShieldCheck, Award, Microscope, Package2, Truck, CheckCircle } from 'lucide-react';

export default function Quality() {
  const qualitySteps = [
    {
      icon: CheckCircle,
      title: 'Sourcing',
      description: 'Direct procurement from trusted farmers and verified suppliers across India'
    },
    {
      icon: Microscope,
      title: 'Testing',
      description: 'Rigorous quality checks for purity, moisture content, and contaminants'
    },
    {
      icon: Package2,
      title: 'Processing',
      description: 'Advanced cleaning, sorting, and grading in hygienic facilities'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Compliance with FSSAI, ISO, HACCP, and international standards'
    },
    {
      icon: Package2,
      title: 'Packaging',
      description: 'Food-grade materials maintaining freshness and preventing contamination'
    },
    {
      icon: Truck,
      title: 'Shipping',
      description: 'Temperature-controlled logistics ensuring product integrity during transit'
    }
  ];

  const certifications = [
    { name: 'FSSAI', description: 'Food Safety and Standards Authority of India' },
    { name: 'ISO 22000', description: 'Food Safety Management System' },
    { name: 'HACCP', description: 'Hazard Analysis and Critical Control Points' },
    { name: 'APEDA', description: 'Agricultural and Processed Food Products Export Development Authority' },
    { name: 'Spices Board India', description: 'Ministry of Commerce & Industry, Govt. of India' }
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Quality & Process</h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Excellence at Every Stage — From Farm to Container
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold mb-6">
              Our Commitment
            </div>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Uncompromising Quality Standards
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Every spice that leaves our facility has been through a rigorous quality assurance process,
              ensuring you receive only the finest products that meet international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualitySteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                From Farm to Container: Our Journey
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Step 1: Sourcing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We work directly with trusted farmers and suppliers across India's best spice-growing regions.
                    Our team personally visits farms and markets to select only premium-grade raw materials.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Step 2: Quality Testing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Upon arrival at our facility, each batch undergoes comprehensive testing. We check for
                    moisture content, foreign matter, aflatoxin levels, and overall quality parameters.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Step 3: Cleaning & Sorting</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Using advanced machinery, spices are cleaned to remove impurities, stems, and foreign particles.
                    Electronic sorting ensures uniform size and quality.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Step 4: Grading & Processing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Spices are graded based on color, size, and quality. For ground spices, we use low-temperature
                    grinding to preserve natural oils and flavor compounds.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Step 5: Hygienic Packaging</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Spices are packaged in food-grade materials in our ISO-certified facility. We use multi-layer
                    packaging to protect against moisture, light, and contamination.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Step 6: Final Inspection & Export</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Before shipping, each consignment undergoes final inspection. We provide detailed quality
                    certificates and ensure proper documentation for smooth customs clearance.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-900 to-orange-800 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">Our Quality Promise</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <ShieldCheck className="mr-3 mt-1 flex-shrink-0" size={24} />
                    <span>100% natural spices with no artificial additives or colors</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="mr-3 mt-1 flex-shrink-0" size={24} />
                    <span>Strict adherence to international food safety standards</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="mr-3 mt-1 flex-shrink-0" size={24} />
                    <span>Regular third-party laboratory testing</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="mr-3 mt-1 flex-shrink-0" size={24} />
                    <span>Traceability from source to shipment</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="mr-3 mt-1 flex-shrink-0" size={24} />
                    <span>Temperature-controlled storage and transportation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">Processing Facility</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span>ISO 22000:2018 Certified</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span>HACCP Compliant</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span>Dedicated cleaning and sorting lines</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span>Modern grinding and blending equipment</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span>Climate-controlled storage areas</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span>In-house quality testing laboratory</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our commitment to quality is validated by leading food safety and export certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">{cert.name}</h3>
                <p className="text-gray-700">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
