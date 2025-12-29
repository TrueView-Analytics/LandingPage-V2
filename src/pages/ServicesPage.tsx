import { Building2, TrendingUp, Target, Check, Sparkles, ArrowRight, Globe, Zap, BarChart3, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import mockupHotels from '../assets/Beige Minimalist Mockup Instagram Post-2.png';
import mockupProperties from '../assets/Beige Minimalist Mockup Instagram Post-2 copia.png';
import dashboardEnterprise from '../assets/dashboard-enterprise.png';
import { useLanguage } from '../context/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Rediseñado */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-600 to-slate-900 text-white overflow-hidden pt-24 pb-32">
        {/* Elementos decorativos animados */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda - Contenido */}
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/40 rounded-full px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span>{t.aiDataAnalysis}</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-left">
                <span className="block mb-2 text-left">{t.transformWord}</span>
                <span className="block mb-2 text-left">{t.dataIntoWord}</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent gradient-animate text-left">
                  {t.smartDecisions}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                {t.aiPoweredPlatforms}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact" className="group bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                  <span>{t.requestFreeDemo}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={() => {
                    const element = document.getElementById('soluciones-industria');
                    if (element) {
                      const yOffset = 80;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/40 hover:border-white/60"
                >
                  {t.exploreSolutions}
                </button>
              </div>

              {/* Social icons (Instagram, LinkedIn) */}
              <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                <a href="https://www.instagram.com/trueviewanalytics/" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zM17.75 6.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/trueview-analytics-innovation/posts/?feedView=all" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v13H0V8zm7.5 0H12v1.9h.1c.6-1 2.1-2 4.3-2 4.6 0 5.5 3 5.5 6.9V21H17v-6.5c0-1.6 0-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5V21H7.5V8z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Columna derecha - Visual */}
            <div className="relative animate-float hidden lg:block">
              <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-400">
                  {/* Alert badge: nuevas reseñas */}
                  <div className="absolute top-4 right-4 z-30 inline-flex items-center gap-2 bg-cyan-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v1h1a1 1 0 011 1v6.586a1 1 0 01-.293.707l-3.414 3.414A1 1 0 0112.586 18H4a2 2 0 01-2-2V5z" />
                    </svg>
                    <span>{t.newReviews}</span>
                  </div>
                  <div className="space-y-4 relative">
                    {/* Simulación de dashboard (más impactante) */}
                    <div className="relative bg-white rounded-xl p-4 border border-slate-200 shadow-xl overflow-hidden">
                      {/* diagonal highlight */}
                      <div className="absolute -left-16 -top-10 w-36 h-56 bg-gradient-to-br from-white/80 to-white/10 transform rotate-12 opacity-60 blur-xl animate-pulse-slow pointer-events-none"></div>
                      <div className="h-3 w-24 bg-slate-200 rounded mb-3 relative z-10"></div>
                      <div className="h-32 rounded-lg shadow-inner z-10 overflow-hidden">
                        <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="areaA" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                              <stop offset="100%" stopColor="#eef2ff" stopOpacity="0.6" />
                            </linearGradient>
                            <linearGradient id="lineA" x1="0" x2="1">
                              <stop offset="0%" stopColor="#06b6d4" />
                              <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                          </defs>

                          {/* area under line */}
                          <path d="M0,64 L20,44 L40,36 L60,42 L80,32 L100,36 L120,28 L140,24 L160,30 L180,22 L200,22 L200,80 L0,80 Z" fill="url(#areaA)" />

                          {/* animated stroke line */}
                          <path id="sparkline" d="M0,64 L20,44 L40,36 L60,42 L80,32 L100,36 L120,28 L140,24 L160,30 L180,22" fill="none" stroke="url(#lineA)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="300" strokeDashoffset="300">
                            <animate attributeName="stroke-dashoffset" from="300" to="0" dur="1.2s" fill="freeze" />
                          </path>

                          {/* points with subtle pulse */}
                          <g>
                            <circle cx="20" cy="44" r="3.5" fill="#fff" stroke="#06b6d4" strokeWidth="1" opacity="0.95">
                              <animate attributeName="r" values="3.5;5;3.5" dur="1.6s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="60" cy="42" r="3.5" fill="#fff" stroke="#06b6d4" strokeWidth="1" opacity="0.9">
                              <animate attributeName="r" values="3.5;5;3.5" dur="1.6s" begin="0.2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="100" cy="36" r="3.5" fill="#fff" stroke="#06b6d4" strokeWidth="1" opacity="0.9">
                              <animate attributeName="r" values="3.5;5;3.5" dur="1.6s" begin="0.4s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="140" cy="24" r="3.5" fill="#fff" stroke="#06b6d4" strokeWidth="1" opacity="0.9">
                              <animate attributeName="r" values="3.5;5;3.5" dur="1.6s" begin="0.6s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="180" cy="22" r="3.5" fill="#fff" stroke="#06b6d4" strokeWidth="1" opacity="0.9">
                              <animate attributeName="r" values="3.5;5;3.5" dur="1.6s" begin="0.8s" repeatCount="indefinite" />
                            </circle>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                        <div className="h-2 w-16 bg-slate-200 rounded mb-2"></div>
                        <div className="h-8 w-20 bg-slate-200 rounded"></div>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                        <div className="h-2 w-16 bg-slate-200 rounded mb-2"></div>
                        <div className="h-8 w-20 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Badges flotantes (más suaves, en blanco para contraste) */}
                  <div className="absolute -top-6 -right-6 bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-2xl border border-slate-200">
                    {t.roiPercent}
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-2xl border border-slate-200">
                    {t.advancedAI}
                  </div>
                  {/* subtle glow */}
                  <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-30 bg-gradient-to-b from-white/40 via-white/10 to-transparent"></div>
                </div>
            </div>
          </div>
        </div>

      </section>

      {/* Lo Que Aporta TrueView */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm font-semibold text-blue-700 mb-4">
              <Sparkles className="w-4 h-4" />
              {t.aiAnalysisTech}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t.aiAtServiceTitle}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.aiAtServiceDesc}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Left Column - How it Works */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  {t.howItWorks}
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{t.deepAnalysis}</h4>
                      <p className="text-slate-600">
                        {t.deepAnalysisDesc}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{t.sentimentEvaluation}</h4>
                      <p className="text-slate-600">
                        {t.sentimentEvaluationDesc}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{t.actionableInsights}</h4>
                      <p className="text-slate-600">
                        {t.actionableInsightsDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Globe,
                  title: t.unifiedInformation,
                  description: t.unifiedInformationDesc
                },
                {
                  icon: Zap,
                  title: t.totalAutomation,
                  description: t.totalAutomationDesc
                },
                {
                  icon: Target,
                  title: t.immediateAction,
                  description: t.immediateActionDesc
                },
                {
                  icon: TrendingUp,
                  title: t.multiBusiness,
                  description: t.multiBusinessDesc
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats - Cuadrados con gradiente */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cuadrado 1 - Automated */}
            <div className="group relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl p-10 md:p-12 text-white overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105">
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
              
              <div className="relative text-center">
                <div className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-br from-white to-cyan-100 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {t.automated100}
                </div>
                <div className="text-lg font-semibold text-white/95">{t.automatedLabel}</div>
              </div>
            </div>

            {/* Cuadrado 2 - Monitoring */}
            <div className="group relative bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-500 rounded-3xl p-10 md:p-12 text-white overflow-hidden shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-105">
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
              
              <div className="relative text-center">
                <div className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {t.monitoring247}
                </div>
                <div className="text-lg font-semibold text-white/95">{t.monitoringLabel}</div>
              </div>
            </div>

            {/* Cuadrado 3 - AI Precision */}
            <div className="group relative bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 rounded-3xl p-10 md:p-12 text-white overflow-hidden shadow-2xl hover:shadow-blue-400/50 transition-all duration-500 hover:scale-105">
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-700/20 rounded-full blur-2xl"></div>
              
              <div className="relative text-center">
                <div className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {t.aiPrecision}
                </div>
                <div className="text-lg font-semibold text-white/95">{t.aiPrecisionLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestras Soluciones - Secciones Individuales */}
      <section id="soluciones-industria" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm font-semibold text-blue-700 mb-4">
              <Target className="w-4 h-4" />
              {t.specializedSolutions}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t.solutionsForYourIndustry}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.solutionsDescription}
            </p>
          </div>

          {/* SaaS Hoteles */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Contenido */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm font-semibold text-blue-700">
                  <Building2 className="w-4 h-4" />
                  SAAS HOTELES
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {t.saasHotelsTitle}
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t.saasHotelsDescription}
                </p>

                <div className="space-y-3">
                  {[
                    t.saasHotelsFeature1,
                    t.saasHotelsFeature2,
                    t.saasHotelsFeature3,
                    t.saasHotelsFeature4,
                    t.saasHotelsFeature5
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link to="/contact" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-xl">
                    {t.saasHotelsButton}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-sm text-slate-500 mt-3">
                    <strong>{t.perfectFor}</strong> {t.saasHotelsPerfectFor}
                  </p>
                </div>
              </div>

              {/* Imagen */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <img
                  src={mockupHotels}
                  alt="Dashboard Hoteles"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* SaaS Propiedades */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Imagen - Orden invertido en desktop */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 md:order-1">
                <img
                  src={mockupProperties}
                  alt="Dashboard Propiedades"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Contenido */}
              <div className="space-y-6 md:order-2">
                <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm font-semibold text-blue-700">
                  <Building2 className="w-4 h-4" />
                  SAAS PROPIEDADES
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {t.saasPropertiesTitle}
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t.saasPropertiesDescription}
                </p>

                <div className="space-y-3">
                  {[
                    t.saasPropertiesFeature1,
                    t.saasPropertiesFeature2,
                    t.saasPropertiesFeature3,
                    t.saasPropertiesFeature4,
                    t.saasPropertiesFeature5
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link to="/contact" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-xl">
                    {t.saasPropertiesButton}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-sm text-slate-500 mt-3">
                    <strong>{t.perfectFor}</strong> {t.saasPropertiesPerfectFor}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SaaS PYMEs */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Contenido */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm font-semibold text-blue-700">
                  <Users className="w-4 h-4" />
                  SAAS PYMES
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {t.saasPymesTitle}
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t.saasPymesDescription}
                </p>

                <div className="space-y-3">
                  {[
                    t.saasPymesFeature1,
                    t.saasPymesFeature2,
                    t.saasPymesFeature3,
                    t.saasPymesFeature4
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-100 rounded-xl p-4 border border-slate-200">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {[t.saasPymesExtra1, t.saasPymesExtra2, t.saasPymesExtra3, t.saasPymesExtra4].map((extra, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700">
                        <Check className="w-4 h-4 text-blue-600" />
                        <span>{extra}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/contact" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-xl">
                    {t.saasPymesButton}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-sm text-slate-500 mt-3">
                    <strong>{t.perfectFor}</strong> {t.saasPymesPerfectFor}
                  </p>
                </div>
              </div>

              {/* Card de características */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h4 className="text-xl font-bold text-slate-900 mb-6">{t.keyCapabilities}</h4>
                <div className="space-y-4">
                  {[
                    { icon: Users, title: t.multiChannelAnalysis, desc: t.multiChannelDesc },
                    { icon: BarChart3, title: t.benchmarking, desc: t.benchmarkingDesc },
                    { icon: Target, title: t.segmentation, desc: t.segmentationDesc },
                    { icon: Zap, title: t.smartAlerts, desc: t.smartAlertsDesc }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-900">{item.title}</h5>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise CX */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Imagen - Orden invertido en desktop */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 md:order-1">
                <img
                  src={dashboardEnterprise}
                  alt="Dashboard Enterprise"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Contenido */}
              <div className="space-y-6 md:order-2">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  <Shield className="w-4 h-4" />
                  ENTERPRISE CX
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {t.enterpriseCxTitle}
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t.enterpriseCxDescription}
                </p>

                <div className="space-y-3">
                  {[
                    t.enterpriseCxFeature1,
                    t.enterpriseCxFeature2,
                    t.enterpriseCxFeature3,
                    t.enterpriseCxFeature4
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link to="/contact" className="group bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-xl">
                    {t.enterpriseCxButton}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-sm text-slate-500 mt-3">
                    <strong>{t.perfectFor}</strong> {t.enterpriseCxPerfectFor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología - Cómo Funciona el Viaje */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t.digitalTransformation4Stages}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
              {t.methodologyDescription1}
            </p>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.methodologyDescription2}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: t.diagnosisStage,
                description: t.diagnosisStageDesc,
                icon: Target,
                bgColor: "bg-blue-100",
                textColor: "text-blue-600"
              },
              {
                step: "02",
                title: t.implementationStage,
                description: t.implementationStageDesc,
                icon: Zap,
                bgColor: "bg-emerald-100",
                textColor: "text-emerald-600"
              },
              {
                step: "03",
                title: t.analysisStage,
                description: t.analysisStageDesc,
                icon: TrendingUp,
                bgColor: "bg-cyan-100",
                textColor: "text-cyan-600"
              },
              {
                step: "04",
                title: t.growthStage,
                description: t.growthStageDesc,
                icon: Sparkles,
                bgColor: "bg-purple-100",
                textColor: "text-purple-600"
              }
            ].map((stage, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border-t-4 border-blue-600">
                  <div className={`w-16 h-16 ${stage.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                    <stage.icon className={`w-8 h-8 ${stage.textColor}`} />
                  </div>
                  <div className="text-5xl font-bold text-slate-200 mb-2">{stage.step}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{stage.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{stage.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - El Destino Alcanzable */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            {t.joinCompaniesTransformed}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t.startDigitalTransformation}
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.discoverCustomerOpinions}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="group bg-white text-blue-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
              {t.schedulePersonalizedDemo}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="bg-blue-600/20 hover:bg-blue-600/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20">
              {t.wantMoreInfo}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
