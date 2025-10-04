import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import favicon from '../assets/Favicon Transparent.ico';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // location unused after removing scroll helper

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={favicon} alt="TrueView Analytics logo" width={40} height={40} className="block" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">TrueView Analytics</h1>
              <p className="text-xs text-blue-600 tracking-wide">SEE BEYOND DATA</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#about">
            <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About Us
            </button>
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </Link>
            <Link to="/#contact">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact
            </button>
            </Link>
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
              <Link to="/#about">
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
                About Us
              </button>
              </Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
                Services
              </Link>
              <Link to="/#contact">
              <button onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-left">
                Contact
              </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
