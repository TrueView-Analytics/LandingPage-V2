import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    servicio: '',
    propiedades: '',
    message: ''
  });

  // form is submitted via native POST to Formspree; keep formData for optional client-side use

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Track Google Ads conversion
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion();
    }
    
    // Let the form submit naturally to Formspree
    // No need to prevent default - form will submit normally
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.getInTouch}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.readyToTransform}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t.contactInformation}
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t.ourTeamReady}
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="text-blue-600" size={24} />
                </div>
              <div>
                  <p className="font-semibold text-gray-900 mb-1">{t.emailLabel}</p>
                  <p className="text-gray-600">
                    <a href="mailto:info@trueviewanalytics.com" className="text-blue-600 underline">
                      info@trueviewanalytics.com
                    </a>
                  </p>
                </div>
              </div>

              

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{t.location}</p>
                  <p className="text-gray-600">Spain</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl text-white">
              <p className="font-semibold mb-2">{t.scheduleDemoHeading}</p>
              <p className="text-blue-50 text-sm">
                {t.scheduleDemoText}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <form className="space-y-6" action="https://formspree.io/f/mvgvrpoj" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t.fullName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder={t.fullNamePlaceholder}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t.emailAddress}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder={t.emailPlaceholder}
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t.companyName}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder={t.companyPlaceholder}
                  required
                />
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-semibold text-gray-900 mb-2">
                  {language === 'es' ? 'Servicio' : 'Service'}
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  required
                >
                  <option value="">{language === 'es' ? 'Selecciona un servicio' : 'Select a service'}</option>
                  <option value="SAAS HOTELES">SAAS HOTELES</option>
                  <option value="SAAS PROPIEDADES">SAAS PROPIEDADES</option>
                  <option value="SAAS PYMES">SAAS PYMES</option>
                  <option value="SERVICIOS ESPECIALIZADOS">SERVICIOS ESPECIALIZADOS</option>
                </select>
              </div>

              <div>
                <label htmlFor="propiedades" className="block text-sm font-semibold text-gray-900 mb-2">
                  {language === 'es' ? '¿Cuántas Propiedades gestionas?' : 'How many properties do you manage?'}
                </label>
                <select
                  id="propiedades"
                  name="propiedades"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  required
                >
                  <option value="">{language === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
                  <option value="1">1</option>
                  <option value="2-5">2-5</option>
                  <option value="6-20">6-20</option>
                  <option value="+20">+20</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder={t.messagePlaceholder}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>{t.sendMessage}</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
