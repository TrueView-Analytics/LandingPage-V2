import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10L80 25L50 40L20 25L50 10Z" fill="#4169E1"/>
              <path d="M50 30L70 40L50 50L30 40L50 30Z" fill="#4169E1"/>
              <path d="M50 50L60 55L50 60L40 55L50 50Z" fill="#4169E1"/>
              <path d="M50 65L55 67.5L50 70L45 67.5L50 65Z" fill="#4169E1"/>
              <path d="M50 75L52.5 76.25L50 77.5L47.5 76.25L50 75Z" fill="#4169E1"/>
            </svg>
            <div>
              <h1 className="text-xl font-bold text-gray-900">TrueView Analytics</h1>
              <p className="text-xs text-blue-600 tracking-wide">SEE BEYOND DATA</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About Us
            </button>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </Link>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
                About Us
              </button>
              <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
                Services
              </Link>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
