import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/quality', label: 'Quality & Process' },
    { path: '/global-reach', label: 'Global Reach' },
    { path: '/partner', label: 'Partner With Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-white">SV</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">SpiceVista Exports</h1>
              <p className="text-xs text-amber-200">Since 1994</p>
            </div>
          </Link>

          <div className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'text-amber-100 hover:bg-amber-700 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-amber-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-amber-900 border-t border-amber-700">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-100 hover:bg-amber-700 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
