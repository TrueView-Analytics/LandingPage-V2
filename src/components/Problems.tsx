import { Users, Megaphone, Target, BarChart3, Gauge, Eye } from 'lucide-react';
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white pb-16">
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

        <div className="mt-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {t.portfolioControlTitle}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.portfolioControlDesc}
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: BarChart3,
                  title: t.portfolioPoint1Title,
                  description: t.portfolioPoint1Desc
                },
                {
                  icon: Gauge,
                  title: t.portfolioPoint2Title,
                  description: t.portfolioPoint2Desc
                },
                {
                  icon: Eye,
                  title: t.portfolioPoint3Title,
                  description: t.portfolioPoint3Desc
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 inline-flex w-6 h-6 items-center justify-center rounded-md bg-blue-50">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-gray-900">{item.title}: </span>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full">
            <AnalyticsVisualization className="max-w-3xl mx-auto lg:mx-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AnalyticsVisualization({ className = '' }: { className?: string }) {
  const properties = [
    {
      name: "Propiedad 1",
      location: "Alicante, España",
      rating: 7.8,
      booking: 446,
      reviews: 316,
      positive: 1441,
      negative: 1022,
      nss: "16.6%",
      ratio: "1.41"
    },
    {
      name: "Propiedad 2",
      location: "Madrid, España",
      rating: 8.2,
      booking: 25,
      reviews: 16,
      positive: 64,
      negative: 31,
      nss: "34.0%",
      ratio: "2.06"
    },
    {
      name: "Propiedad 3",
      location: "Valencia, España",
      rating: 8.9,
      booking: 790,
      reviews: 527,
      positive: 725,
      negative: 275,
      nss: "45.0%",
      ratio: "2.64"
    }
  ];

  return (
    <div className={`w-full ${className}`}>
      <div className="bg-white rounded-2xl shadow-xl shadow-blue-100/60 border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 px-4 py-5 border-b-4 border-blue-900 text-center">
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2h2v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">Propiedades</h3>
          </div>
          <p className="text-xs sm:text-sm text-blue-100">Centraliza y compara el rendimiento de tus propiedades en un solo lugar</p>
        </div>

        {/* Table */}
        <div className="overflow-hidden">
          <table className="w-full table-fixed">
            <thead className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 border-b-2 border-blue-300">
              <tr>
                <th className="px-2 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-blue-900 bg-blue-50/50">Propiedad</th>
                <th className="px-2 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-blue-900 bg-blue-50/50">Punt.</th>
                <th className="px-2 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-blue-900 bg-blue-50/50">Reviews</th>
                <th className="px-2 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-green-700 bg-green-50/50">Positivas</th>
                <th className="px-2 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-red-700 bg-red-50/50">Negativas</th>
                <th className="px-2 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-orange-900 bg-orange-50/50">NSS</th>
                <th className="px-2 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-blue-900 bg-blue-50/50">Ratio</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-blue-50/30 transition-colors">
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2h2v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 text-xs leading-tight truncate">{property.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-1">
                      <span className="text-[11px]">⭐</span>
                      <span className="font-semibold text-gray-900 text-xs">{property.rating}</span>
                    </div>
                  </td>
                  <td className="px-2 py-3 text-xs text-gray-700">{property.booking}</td>
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-green-600 text-xs">{property.positive}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-3.5 h-3.5 text-green-600"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                    </div>
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-red-600 text-xs">{property.negative}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down w-3.5 h-3.5 text-red-600"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
                    </div>
                  </td>
                  <td className="px-2 py-3 text-xs font-semibold text-orange-600">{property.nss}</td>
                  <td className="px-2 py-3 text-xs font-semibold text-gray-900">{property.ratio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 text-xs text-gray-600">
          <p>Total Properties: <span className="font-semibold text-gray-900">3</span></p>
        </div>
      </div>
    </div>
  );
}
