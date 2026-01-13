import { X, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface DiagnosisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiagnosisModal({ isOpen, onClose }: DiagnosisModalProps) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    servicio: '',
    propiedades: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Track Google Ads conversion if available
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion();
    }
    // Form will submit naturally to Formspree
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {language === 'es' 
              ? 'Solicitar Diagnóstico Inicial Gratuito' 
              : 'Request Free Initial Diagnosis'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            {language === 'es'
              ? 'Completa el formulario y nuestro equipo te contactará para realizar un diagnóstico personalizado de tu negocio sin compromiso.'
              : 'Fill out the form and our team will contact you to perform a personalized diagnosis of your business with no obligation.'}
          </p>

          <form
            action="https://formspree.io/f/mvgvrpoj"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="_subject" value="Nueva solicitud de diagnóstico inicial" />
            <input type="hidden" name="_language" value={language} />

            <div>
              <label htmlFor="diagnosis-name" className="block text-sm font-semibold text-gray-900 mb-2">
                {language === 'es' ? 'Nombre Completo' : 'Full Name'} *
              </label>
              <input
                type="text"
                id="diagnosis-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder={language === 'es' ? 'Juan Pérez' : 'John Doe'}
                required
              />
            </div>

            <div>
              <label htmlFor="diagnosis-email" className="block text-sm font-semibold text-gray-900 mb-2">
                {language === 'es' ? 'Correo Electrónico' : 'Email Address'} *
              </label>
              <input
                type="email"
                id="diagnosis-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder={language === 'es' ? 'juan@empresa.com' : 'john@company.com'}
                required
              />
            </div>

            <div>
              <label htmlFor="diagnosis-phone" className="block text-sm font-semibold text-gray-900 mb-2">
                {language === 'es' ? 'Teléfono' : 'Phone'} *
              </label>
              <input
                type="tel"
                id="diagnosis-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder={language === 'es' ? '+34 600 000 000' : '+1 (555) 000-0000'}
                required
              />
            </div>

            <div>
              <label htmlFor="diagnosis-company" className="block text-sm font-semibold text-gray-900 mb-2">
                {language === 'es' ? 'Nombre de la Empresa' : 'Company Name'} *
              </label>
              <input
                type="text"
                id="diagnosis-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder={language === 'es' ? 'Mi Hotel o Negocio' : 'My Hotel or Business'}
                required
              />
            </div>

            <div>
              <label htmlFor="diagnosis-servicio" className="block text-sm font-semibold text-gray-900 mb-2">
                {language === 'es' ? 'Servicio' : 'Service'} *
              </label>
              <select
                id="diagnosis-servicio"
                name="servicio"
                value={formData.servicio}
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
              <label htmlFor="diagnosis-propiedades" className="block text-sm font-semibold text-gray-900 mb-2">
                {language === 'es' ? '¿Cuántas Propiedades gestionas?' : 'How many properties do you manage?'} *
              </label>
              <select
                id="diagnosis-propiedades"
                name="propiedades"
                value={formData.propiedades}
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
              <label htmlFor="diagnosis-message" className="block text-sm font-semibold text-gray-900 mb-2">
                {language === 'es' ? 'Cuéntanos sobre tu negocio' : 'Tell us about your business'}
              </label>
              <textarea
                id="diagnosis-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                placeholder={language === 'es' 
                  ? 'Describe brevemente tu negocio y qué te gustaría mejorar...' 
                  : 'Briefly describe your business and what you would like to improve...'}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
              >
                {language === 'es' ? 'Cancelar' : 'Cancel'}
              </button>
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>{language === 'es' ? 'Enviar Solicitud' : 'Send Request'}</span>
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
