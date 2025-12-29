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
  return (
    <div className="w-full max-w-3xl px-4">
      <div className="relative h-[380px] md:h-[420px]">
        
        {/* Chart 1 - Line Chart (Back Left) */}
        <div className="absolute top-0 left-0 w-[280px] sm:w-[350px] md:w-[420px] h-56 sm:h-64 md:h-72 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl md:rounded-3xl shadow-2xl border-2 md:border-4 border-blue-600 p-4 md:p-6 z-10 transform rotate-[-3deg] hover:rotate-[-1deg] hover:scale-105 transition-all duration-500">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">Trend Analysis</h3>
              <p className="text-xs text-gray-500">Growth metrics</p>
            </div>
          </div>
          <svg viewBox="0 0 300 140" className="w-full h-40">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {/* Grid */}
            {[1, 2, 3, 4, 5].map((i) => (
              <line key={i} x1="25" y1={i * 26} x2="290" y2={i * 26} stroke="#e5e7eb" strokeWidth="1.5" />
            ))}
            {/* Area fill */}
            <polygon points="30,120 30,75 75,60 120,70 165,35 210,50 255,25 280,40 280,120" fill="url(#lineGradient)" />
            {/* Line */}
            <polyline points="30,75 75,60 120,70 165,35 210,50 255,25 280,40" fill="none" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Secondary line */}
            <polyline points="30,90 75,75 120,85 165,50 210,65 255,45 280,55" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
          </svg>
        </div>

        {/* Chart 2 - Donut Chart (Center) */}
        <div className="absolute top-12 sm:top-14 md:top-16 left-1/2 transform -translate-x-1/2 w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 bg-gradient-to-br from-white to-purple-50/50 rounded-2xl md:rounded-3xl shadow-2xl border-2 md:border-4 border-blue-600 p-4 md:p-6 z-30 hover:scale-110 transition-all duration-500">
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 5a1 1 0 112 0v4a1 1 0 11-2 0V5zm1 8a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-gray-900">Sentiment Score</h3>
              <p className="text-[10px] md:text-xs text-gray-500">Customer feedback</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-32 sm:h-36 md:h-44">
            <div className="relative">
              <svg viewBox="0 0 160 160" className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 transform -rotate-90">
                <defs>
                  <linearGradient id="positiveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                  <linearGradient id="neutralGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6b7280" />
                    <stop offset="100%" stopColor="#6b7280" />
                  </linearGradient>
                  <linearGradient id="negativeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="55" fill="none" stroke="#e5e7eb" strokeWidth="11" />
                {/* Positive - 70% (241.15 of 345.58) */}
                <circle 
                  cx="80" 
                  cy="80" 
                  r="55" 
                  fill="none" 
                  stroke="url(#positiveGrad)" 
                  strokeWidth="11"
                  strokeDasharray="241.15 345.58"
                  strokeLinecap="round"
                />
                {/* Neutral - 20% (69.12 of 345.58) */}
                <circle 
                  cx="80" 
                  cy="80" 
                  r="55" 
                  fill="none" 
                  stroke="url(#neutralGrad)" 
                  strokeWidth="11"
                  strokeDasharray="69.12 345.58"
                  strokeDashoffset="-241.15"
                  strokeLinecap="round"
                />
                {/* Negative - 10% (34.56 of 345.58) */}
                <circle 
                  cx="80" 
                  cy="80" 
                  r="55" 
                  fill="none" 
                  stroke="url(#negativeGrad)" 
                  strokeWidth="11"
                  strokeDasharray="34.56 345.58"
                  strokeDashoffset="-310.27"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl sm:text-2xl font-black bg-gradient-to-br from-green-600 to-green-400 bg-clip-text text-transparent">Overall</span>
              </div>
            </div>
          </div>
          <div className="flex justify-around mt-1 px-1 md:px-2">
            <div className="text-center">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full mx-auto mb-1"></div>
              <p className="text-[9px] md:text-[10px] font-bold text-gray-700">70%</p>
              <p className="text-[8px] md:text-[9px] text-gray-500">Positive</p>
            </div>
            <div className="text-center">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gray-500 rounded-full mx-auto mb-1"></div>
              <p className="text-[9px] md:text-[10px] font-bold text-gray-700">20%</p>
              <p className="text-[8px] md:text-[9px] text-gray-500">Neutral</p>
            </div>
            <div className="text-center">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full mx-auto mb-1"></div>
              <p className="text-[9px] md:text-[10px] font-bold text-gray-700">10%</p>
              <p className="text-[8px] md:text-[9px] text-gray-500">Negative</p>
            </div>
          </div>
        </div>

        {/* Chart 3 - Bar Chart (Right) */}
        <div className="absolute top-6 sm:top-7 md:top-8 right-0 w-[280px] sm:w-[320px] md:w-[360px] h-52 sm:h-56 md:h-64 bg-gradient-to-br from-white to-cyan-50/50 rounded-2xl md:rounded-3xl shadow-2xl border-2 md:border-4 border-blue-600 p-4 md:p-6 z-20 transform rotate-[2deg] hover:rotate-[1deg] hover:scale-105 transition-all duration-500">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-gray-900">Weekly Reviews</h3>
              <p className="text-[10px] md:text-xs text-gray-500">Last 7 days</p>
            </div>
          </div>
          <div className="flex items-end justify-around gap-1.5 sm:gap-2 px-3 md:px-4 h-24 sm:h-28 md:h-32">
            {[60, 95, 70, 115, 80, 100, 120].map((height, i) => {
              const values = [23, 35, 28, 42, 31, 38, 45];
              return (
                <div key={i} className="flex-1 flex flex-col items-center justify-end group">
                  <span className="text-[9px] md:text-[10px] font-bold text-gray-700 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {values[i]}
                  </span>
                  <div 
                    className={`w-full rounded-t-md md:rounded-t-lg shadow-md transition-all duration-300 group-hover:scale-110 ${
                      i % 3 === 0 ? 'bg-gradient-to-t from-blue-700 via-blue-500 to-blue-400' :
                      i % 3 === 1 ? 'bg-gradient-to-t from-cyan-600 via-cyan-400 to-cyan-300' :
                      'bg-gradient-to-t from-green-600 via-green-400 to-green-300'
                    }`}
                    style={{height: `${height}px`}}
                  />
                  <span className="text-[8px] md:text-[9px] font-bold text-gray-500 mt-1 md:mt-1.5">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
