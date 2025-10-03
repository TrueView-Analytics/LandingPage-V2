export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10L80 25L50 40L20 25L50 10Z" fill="#4169E1"/>
                <path d="M50 30L70 40L50 50L30 40L50 30Z" fill="#4169E1"/>
                <path d="M50 50L60 55L50 60L40 55L50 50Z" fill="#4169E1"/>
                <path d="M50 65L55 67.5L50 70L45 67.5L50 65Z" fill="#4169E1"/>
                <path d="M50 75L52.5 76.25L50 77.5L47.5 76.25L50 75Z" fill="#4169E1"/>
              </svg>
              <div>
                <h3 className="text-xl font-bold">TrueView Analytics</h3>
                <p className="text-sm text-blue-400">SEE BEYOND DATA</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Transforming hotel reviews into strategic insights through AI-powered analytics and data intelligence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">SaaS Hotels</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SaaS SMEs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Enterprise CX</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Platform</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 TrueView Analytics. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
