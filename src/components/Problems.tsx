import { Users, Megaphone, Target } from 'lucide-react';
import insightsImage from '../assets/insights.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export default function Problems() {
  const { language } = useLanguage();
  const t = translations[language];

  const problems = [
    {
      icon: Users,
      titleKey: "lostInFeedback",
      descKey: "lostInFeedbackDesc",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Megaphone,
      titleKey: "inconsistentResponse",
      descKey: "inconsistentResponseDesc",
      color: "bg-blue-600 text-white",
      featured: true
    },
    {
      icon: Target,
      titleKey: "missedOpportunities",
      descKey: "missedOpportunitiesDesc",
      color: "bg-blue-50 text-blue-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white pb-2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.whyNeed}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.problems}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all hover:scale-105 ${
                  problem.featured
                    ? 'bg-blue-600 text-white shadow-xl'
                    : 'bg-blue-50 hover:shadow-lg'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${
                  problem.featured ? 'bg-white/20' : 'bg-white'
                }`}>
                  <Icon size={32} className={problem.featured ? 'text-white' : 'text-blue-600'} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${
                  problem.featured ? 'text-white' : 'text-gray-900'
                }`}>
                  {t[problem.titleKey as keyof typeof t]}
                </h3>
                <p className={`leading-relaxed ${
                  problem.featured ? 'text-blue-50' : 'text-gray-600'
                }`}>
                  {t[problem.descKey as keyof typeof t]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Insights Image */}
        <div className="mt-20 text-center">
          <img 
            src={insightsImage} 
            alt="Business insights visualization" 
            className="w-full max-w-2xl h-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
