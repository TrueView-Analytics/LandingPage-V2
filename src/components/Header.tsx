import { Menu, X, ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import favicon from '../assets/Favicon Transparent.ico';
import logoText from '../assets/logo_text.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const t = translations[language];
  
  const isServicesPage = location.pathname === '/services' || location.pathname === '/other-services';
  const isContactPage = location.pathname === '/contact';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={favicon} alt="TrueView Analytics logo" className="h-9 md:h-11 w-auto block" />
            <div>
              <img src={logoText} alt="TrueView Analytics" className="h-7 md:h-8" />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-2 ml-8">
            <Link to="/#about">
            <button className="text-gray-700 hover:text-blue-600 transition-colors text-base px-3 py-3">
              {t.aboutUs}
            </button>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`transition-colors text-base px-3 py-3 flex items-center gap-1 ${isServicesPage ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                {t.services}
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/services" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">
                  {t.saaSolutions}
                </Link>
                <Link to="/other-services" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg border-t border-gray-200">
                  {t.otherServices}
                </Link>
              </div>
            </div>
            
            <Link to="/contact">
            <button className={`transition-colors text-base px-3 py-3 ${isContactPage ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
              {t.contact}
            </button>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3 ml-auto">
            <Link to="/contact">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-base">
              {t.login}
            </button>
            </Link>
            
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors text-base px-3 py-3"
              >
                <span>{language === 'es' ? '🇪🇸' : '🇬🇧'}</span>
                <ChevronDown size={18} className={`transform transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => {
                      setLanguage('es');
                      setIsLanguageOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm rounded-t-lg text-left"
                  >
                    <span className="flex items-center space-x-2">
                      <span>🇪🇸</span>
                      <span>Español</span>
                    </span>
                    {language === 'es' && <Check size={18} className="text-blue-600" />}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm rounded-b-lg border-t border-gray-200 text-left"
                  >
                    <span className="flex items-center space-x-2">
                      <span>🇬🇧</span>
                      <span>English</span>
                    </span>
                    {language === 'en' && <Check size={18} className="text-blue-600" />}
                  </button>
                </div>
              )}
            </div>
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
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors text-base py-3 text-left">
                {t.aboutUs}
              </button>
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`transition-colors text-base py-3 text-left flex items-center gap-1 ${isServicesPage ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  {t.services}
                  <ChevronDown size={16} className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-2">
                    <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors text-base py-2 text-left block">
                      {t.saaSolutions}
                    </Link>
                    <Link to="/other-services" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors text-base py-2 text-left block">
                      {t.otherServices}
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/contact">
              <button onClick={() => setIsMenuOpen(false)} className={`transition-colors text-base py-3 text-left ${isContactPage ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                {t.contact}
              </button>
              </Link>
              
              {/* Mobile Language Selector */}
              <div>
                <button 
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-base py-3 text-left flex items-center gap-1 w-full"
                >
                  <span>{language === 'es' ? '🇪🇸 Español' : '🇬🇧 English'}</span>
                  <ChevronDown size={16} className={`transform transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
                </button>
                {isLanguageOpen && (
                  <div className="pl-4 space-y-2 border-l-2 border-gray-200 ml-2">
                    <button
                      onClick={() => {
                        setLanguage('es');
                        setIsLanguageOpen(false);
                      }}
                      className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors text-base py-2 text-left"
                    >
                      <span className="flex items-center space-x-2">
                        <span>🇪🇸</span>
                        <span>Español</span>
                      </span>
                      {language === 'es' && <Check size={18} className="text-blue-600" />}
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsLanguageOpen(false);
                      }}
                      className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors text-base py-2 text-left"
                    >
                      <span className="flex items-center space-x-2">
                        <span>🇬🇧</span>
                        <span>English</span>
                      </span>
                      {language === 'en' && <Check size={18} className="text-blue-600" />}
                    </button>
                  </div>
                )}
              </div>
              
              <Link to="/contact">
              <button onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors text-base text-left">
                {t.login}
              </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
