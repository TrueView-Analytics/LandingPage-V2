import favicon from '../assets/Favicon Transparent.ico';
import logoText from '../assets/logo_text.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={favicon} alt="TrueView Analytics logo" className="h-12 md:h-16 w-auto block" />
              <div>
                <img src={logoText} alt="TrueView Analytics" className="h-12 md:h-16" />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Transforming hotel reviews into strategic insights through AI-powered analytics and data intelligence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services/#SaaS-Hotels" className="hover:text-white transition-colors">SaaS Hotels</Link></li>
              <li><Link to="/services/#SaaS-Pymes" className="hover:text-white transition-colors">SaaS Pymes</Link></li>
              <li><Link to="/services/#Enterprise-CX" className="hover:text-white transition-colors">Enterprise CX</Link></li>
              <li><Link to="/services/#Additional-Services" className="hover:text-white transition-colors">Additional Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a className="hover:text-white transition-colors">Platform</a></li>
              <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 TrueView Analytics. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
