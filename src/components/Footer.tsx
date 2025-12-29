import favicon from '../assets/Favicon Transparent.ico';
import logoText from '../assets/logo_text.png';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 
          Grid Layout Strategy:
          - Mobile (< md): Single column stack
          - Desktop (>= md): CSS Grid con 2 áreas principales
          - Left: Logo + descripción (ocupa más espacio, ~40%)
          - Right: 3 columnas de navegación (distribuidas equitativamente, ~60%)
        */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 lg:gap-12 mb-8">
          
          {/* Left Section: Brand Identity */}
          <div className="flex flex-col justify-start max-w-sm">
            {/* Logo optimizado: dimensiones fijas, alineación vertical centrada */}
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={favicon} 
                alt="TrueView Analytics logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain flex-shrink-0" 
              />
              <img 
                src={logoText} 
                alt="TrueView Analytics" 
                className="h-8 sm:h-10 w-auto object-contain max-w-[180px]" 
              />
            </div>
            {/* Descripción con line-height óptimo para legibilidad */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {t.transformingHotelReviews}
            </p>
          </div>

          {/* Right Section: Navigation Columns (Grid de 3 columnas equitativas) */}
          <nav className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Producto */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {t.product}
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/services#SaaS-Hotels" 
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                  >
                    {t.saasHotels}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services#SaaS-Pymes" 
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                  >
                    {t.saasPymes}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services#SaaS-Properties" 
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                  >
                    {t.saasProperties}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services#Enterprise-CX" 
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                  >
                    {t.enterpriseCX}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Servicios Adicionales */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {t.additionalServices}
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/other-services#bi-analytics" 
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                  >
                    {t.biDataAnalytics}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/other-services#ai-knowledge" 
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                  >
                    {t.aiKnowledgeManagement}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/other-services#consulting" 
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                  >
                    {t.dataStrategyConsulting}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Empresa */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {t.company}
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/#about" 
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                  >
                    {t.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                  >
                    {t.contact}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact#faq" 
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                  >
                    {t.frequentQuestions}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/privacy" 
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                  >
                    {t.privacyPolicy}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 TrueView Analytics. {t.allRightsReserved}
            </p>
            <Link 
              to="/privacy" 
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
            >
              {t.privacyPolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
