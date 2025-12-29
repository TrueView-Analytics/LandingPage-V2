import { TrendingUp, Target, Users, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import DiagnosisModal from './DiagnosisModal';

export default function Platform() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const infoCards = [
    { 
      icon: TrendingUp, 
      title: t.reputationOverviewTitle,
      description: t.reputationOverviewDesc
    },
    { 
      icon: Target, 
      title: t.keyProblemsTitle,
      description: t.keyProblemsDesc
    },
    { 
      icon: Users, 
      title: t.customerInsightsTitle,
      description: t.customerInsightsDesc
    }
  ];

  const benefits = [
    t.diagnosisBenefit1,
    t.diagnosisBenefit2,
    t.diagnosisBenefit3,
    t.diagnosisBenefit4,
    t.diagnosisBenefit5,
    t.diagnosisBenefit6
  ];

  return (
    <section id="diagnosis" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <span className="text-sm font-semibold">{t.customerExperienceBIPlatform}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.freeDiagnosisTitle}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.freeDiagnosisSubtitle}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Info Cards */}
          <div className="space-y-6">
            {infoCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl flex-shrink-0">
                      <Icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - CTA Card */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.whyRequestDiagnosisTitle}
              </h3>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 p-1.5 rounded-full mt-0.5 flex-shrink-0">
                      <Check className="text-green-600" size={18} strokeWidth={3} />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <span>{t.requestFreeDiagnosis}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">
                  {t.diagnosisTrustBadge}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <DiagnosisModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
