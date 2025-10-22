import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Let's Start a Conversation About Quality Indian Spices
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-12">
                <div className="inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold mb-6">
                  Get in Touch
                </div>
                <h2 className="text-4xl font-bold text-amber-900 mb-6">
                  We'd Love to Hear From You
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Whether you're interested in becoming a partner, need product information, or have questions
                  about our export services, our team is here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-md">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Our Location</h3>
                    <p className="text-gray-700 leading-relaxed">
                      SpiceVista Exports<br />
                      142/17 Faridabad (HR)-121002<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-md">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Email Us</h3>
                    <a
                      href="mailto:spicevistaexports@gmail.com"
                      className="text-gray-700 hover:text-amber-900 transition-colors text-lg"
                    >
                      spicevistaexports@gmail.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-md">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Call or WhatsApp</h3>
                    <a
                      href="tel:+919999409777"
                      className="text-gray-700 hover:text-amber-900 transition-colors text-lg"
                    >
                      +91-9999409777
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Available via WhatsApp for international clients
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-md">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Saturday: 9:00 AM - 6:00 PM (IST)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-amber-900 mb-6">Send Us a Message</h3>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-gray-800 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="United States"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements, questions, or how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-700 text-white font-semibold py-4 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-900 to-orange-800 rounded-2xl p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Looking for Samples?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              We understand the importance of testing product quality before committing to a partnership.
              Contact us to request samples of our spices — we'll be happy to send them to you for evaluation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:spicevistaexports@gmail.com?subject=Sample Request"
                className="inline-block px-8 py-4 bg-white text-amber-900 font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Request Samples via Email
              </a>
              <a
                href="https://wa.me/919999409777?text=Hello,%20I%27d%20like%20to%20request%20samples"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
