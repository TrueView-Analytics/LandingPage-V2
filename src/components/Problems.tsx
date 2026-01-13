import { Users, Megaphone, Target } from 'lucide-react';
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

        {/* Analytics Visualization */}
        <div className="mt-20 flex justify-center">
          <AnalyticsVisualization />
        </div>
      </div>
    </section>
  );
}

function AnalyticsVisualization() {
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
    <div className="w-full max-w-6xl px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 px-6 py-8 border-b-4 border-blue-900 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2h2v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white">Propiedades</h3>
          </div>
          <p className="text-blue-100">Centraliza y compara el rendimiento de tus propiedades en un solo lugar</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 border-b-2 border-blue-300">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input type="checkbox" className="w-5 h-5 rounded border-blue-300 cursor-pointer" />
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50/50">Propiedad</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50/50">Ubicación</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50/50">Puntuación</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50/50">Reviews</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50/50">Menciones</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50/50">Positivas</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50/50">Negativas</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-orange-900 bg-orange-50/50">NSS</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50/50">Ratio</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-blue-50/30 transition-colors">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2h2v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{property.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{property.location}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-semibold text-gray-900">{property.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{property.booking}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{property.reviews}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-green-600">{property.positive}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-4 h-4 text-green-600"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-red-600">{property.negative}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down w-4 h-4 text-red-600"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-orange-600">{property.nss}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{property.ratio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 text-sm text-gray-600">
          <p>Total Properties: <span className="font-semibold text-gray-900">3</span></p>
        </div>
      </div>
    </div>
  );
}
