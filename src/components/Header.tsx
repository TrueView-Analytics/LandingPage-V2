import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import favicon from '../assets/Favicon Transparent.ico';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
  const location = useLocation(); // to get the current route
  const navigate = useNavigate(); // to change the route
  
  // Check if we are on the home page or another route
  if (location.pathname === '/') {
    // If on the homepage, just scroll smoothly to the section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // If not on the homepage, navigate to the current path + hash (for smooth scroll)
    navigate(`${location.pathname}#${id}`, { replace: true });
    
    // Optional: smooth scroll to the section if on the same page
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Optionally close the menu if open
  setIsMenuOpen(false);
};

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
