import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-950 to-stone-900 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">SV</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">SpiceVista Exports</h3>
                <p className="text-xs text-amber-300">Since 1994</p>
              </div>
            </div>
            <p className="text-sm text-amber-200 leading-relaxed">
              From Delhi's Heart to the World — Exporting the Essence of India.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#/products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#/quality" className="hover:text-white transition-colors">Quality & Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/global-reach" className="hover:text-white transition-colors">Global Reach</a></li>
              <li><a href="#/partner" className="hover:text-white transition-colors">Partner With Us</a></li>
              <li><a href="#/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 text-amber-400 flex-shrink-0" />
                <span>142/17 Faridabad (HR)-121002, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-amber-400 flex-shrink-0" />
                <a href="mailto:spicevistaexports@gmail.com" className="hover:text-white transition-colors">
                  spicevistaexports@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-amber-400 flex-shrink-0" />
                <a href="tel:+919999409777" className="hover:text-white transition-colors">
                  +91-9999409777
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-sm">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-green-900 text-green-200 rounded-full text-xs font-semibold">
              🇮🇳 Made in India
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-blue-900 text-blue-200 rounded-full text-xs font-semibold">
              🌍 Exporting Globally
            </span>
          </div>
          <p className="text-amber-300">
            © {new Date().getFullYear()} SpiceVista Exports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
