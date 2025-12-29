import { Mail, MapPin, Send, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion();
    }
  };

  const faqs = [
    {
      question: t.faqQ1,
      answer: t.faqA1
    },
    {
      question: t.faqQ2,
      answer: t.faqA2
    },
    {
      question: t.faqQ3,
      answer: t.faqA3
    },
    {
      question: t.faqQ4,
      answer: t.faqA4
    },
    {
      question: t.faqQ5,
      answer: t.faqA5
    },
    {
      question: t.faqQ6,
      answer: t.faqA6
    },
    {
      question: t.faqQ7,
      answer: t.faqA7
    },
    {
      question: t.faqQ8,
      answer: t.faqA8
    },
    {
      question: t.faqQ9,
      answer: t.faqA9
    },
    {
      question: t.faqQ10,
      answer: t.faqA10
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section with Contact Form */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-600 to-slate-900 text-white overflow-hidden pt-32 pb-16">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.getInTouch}
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              {t.readyToTransform}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {t.contactInformation}
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                {t.ourTeamReady}
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{t.emailLabel}</p>
                    <p className="text-slate-300">
                      <a href="mailto:info@trueviewanalytics.com" className="text-white hover:text-gray-100 underline">
                        info@trueviewanalytics.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{t.location}</p>
                    <p className="text-slate-300">Spain</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="font-semibold mb-2">{t.scheduleDemoHeading}</p>
                <p className="text-slate-300 text-sm">
                  {t.scheduleDemoText}
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <form className="space-y-6" action="https://formspree.io/f/mvgvrpoj" method="POST" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    {t.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all"
                    placeholder={t.fullNamePlaceholder}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    {t.emailAddress}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all"
                    placeholder={t.emailPlaceholder}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2">
                    {t.companyName}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all"
                    placeholder={t.companyPlaceholder}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    {t.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all resize-none"
                    placeholder={t.messagePlaceholder}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-white to-blue-100 text-slate-900 px-6 py-4 rounded-lg hover:from-gray-100 hover:to-blue-50 transition-all font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>{t.sendMessage}</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {t.faq}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'es' ? 'Encuentra respuestas a las preguntas más comunes' : 'Find answers to common questions'}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 transition-all hover:shadow-md"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={24}
                    className={`text-blue-600 flex-shrink-0 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
