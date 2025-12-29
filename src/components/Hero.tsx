import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const dynamicTextRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => 
          (prevIndex + 1) % t.dynamicTexts.length
        );
        setIsAnimating(false);
      }, 400); // Duración de fade out
    }, 2900); // Cambio cada 2.9 segundos

    return () => clearInterval(interval);
  }, [t.dynamicTexts.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-blue-600 to-slate-900 text-white overflow-hidden pt-24 pb-20 md:pb-32">
      {/* Elementos decorativos animados */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16 lg:py-20">
        {/* Grid con 2 columnas en desktop, safe area garantizada */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Columna izquierda - Contenido de texto (60% del espacio en desktop) */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8 z-10 relative">
            <div className="inline-block animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/40 rounded-full px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm">
                {t.aiDataAnalytics}
              </div>
            </div>
            
            {/* H1 con altura automática y contenedor que permite wrap - TODO alineado a la izquierda */}
            <div className="min-h-[200px] md:min-h-[240px] lg:min-h-[280px]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.2] text-left">
                {/* Texto fijo blanco */}
                <span className="block text-white mb-3 md:mb-4 text-left">
                  {t.businessIntelligence}
                </span>
                
                {/* Contenedor del texto rotativo - permite 2 líneas si necesario, alineado a la izquierda */}
                <span 
                  ref={containerRef}
                  className="block w-full min-h-[1.2em] max-h-[2.4em] text-left"
                >
                  <span 
                    ref={dynamicTextRef}
                    className={`block bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent transition-all duration-400 ease-in-out text-left ${
                      isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                    }`}
                    aria-live="polite"
                    style={{
                      lineHeight: '1.2',
                      textAlign: 'left'
                    }}
                  >
                    {t.dynamicTexts[currentTextIndex]}
                  </span>
                </span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-xl">
              {t.leverageAI}
            </p>
            
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-xl">
              {t.improveGuest}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="group bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>{t.requestDemoFree}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('platform');
                  if (element) {
                    const yOffset = -80;
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

          {/* Columna derecha - Dashboard Mockup (40% del espacio en desktop) */}
          <div className="lg:col-span-5 relative">
            {/* Desktop mockup completo */}
            <div className="hidden lg:block animate-fade-in" style={{animationDelay: '0.2s'}}>
              <DashboardMockup />
            </div>
            
            {/* Versión móvil/tablet simplificada del mockup */}
            <div className="lg:hidden animate-fade-in">
              <div className="w-full max-w-md mx-auto bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl p-6 border border-slate-200">
                {/* Header mini */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 -m-6 mb-4 p-4 rounded-t-2xl">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/30 rounded"></div>
                    <span className="text-white font-bold text-sm">TrueView Analytics</span>
                  </div>
                </div>
                
                {/* Métricas mini */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div className="text-xs text-blue-600 font-semibold">Score</div>
                    <div className="text-lg font-black text-blue-900">94%</div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded-lg border border-cyan-200">
                    <div className="text-xs text-cyan-600 font-semibold">Reviews</div>
                    <div className="text-lg font-black text-cyan-900">1.2K</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                    <div className="text-xs text-purple-600 font-semibold">Rating</div>
                    <div className="text-lg font-black text-purple-900">8.2★</div>
                  </div>
                </div>
                
                {/* Gráfico mini */}
                <div className="flex items-end justify-between h-24 gap-1">
                  {[65, 45, 78, 55, 88, 72, 95, 68].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t opacity-80" 
                         style={{height: `${height}%`}}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

// Componente de Dashboard Mockup ilustrativo - versión optimizada y contenida
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[550px] h-auto ml-auto perspective-1000">
      {/* Contenedor principal con efecto 3D sutil */}
      <div className="relative w-full transform hover:scale-[1.02] transition-transform duration-500">
        
        {/* Panel principal - Dashboard */}
        <div className="relative w-full bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
          {/* Header del dashboard */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 md:p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/30 rounded-lg"></div>
              <span className="text-white font-bold text-sm md:text-base">TrueView Analytics</span>
            </div>
            <div className="flex gap-2">
              <div className="w-16 md:w-20 h-6 md:h-8 bg-white/20 rounded-lg backdrop-blur-sm"></div>
              <div className="w-6 md:w-8 h-6 md:h-8 bg-white/20 rounded-lg backdrop-blur-sm"></div>
            </div>
          </div>

          {/* Contenido del dashboard */}
          <div className="p-4 md:p-6 space-y-3 md:space-y-4">
            {/* Métricas principales */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 md:p-4 rounded-xl border border-blue-200">
                <div className="text-[10px] md:text-xs text-blue-600 font-semibold mb-1">Sentiment</div>
                <div className="text-lg md:text-2xl font-black text-blue-900">94%</div>
                <div className="text-[10px] md:text-xs text-green-600 font-medium mt-1">↗ +5.3%</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-3 md:p-4 rounded-xl border border-cyan-200">
                <div className="text-[10px] md:text-xs text-cyan-600 font-semibold mb-1">Reviews</div>
                <div className="text-lg md:text-2xl font-black text-cyan-900">1.2K</div>
                <div className="text-[10px] md:text-xs text-green-600 font-medium mt-1">↗ +12%</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 md:p-4 rounded-xl border border-purple-200">
                <div className="text-[10px] md:text-xs text-purple-600 font-semibold mb-1">Rating</div>
                <div className="text-lg md:text-2xl font-black text-purple-900">8.2★</div>
                <div className="text-[10px] md:text-xs text-green-600 font-medium mt-1">↗ +0.3</div>
              </div>
            </div>

            {/* Gráfico simulado */}
            <div className="bg-white p-3 md:p-4 rounded-xl border border-slate-200 h-32 md:h-40">
              <div className="flex items-end justify-between h-full gap-1 md:gap-2">
                {[65, 45, 78, 55, 88, 72, 95, 68, 82, 90].map((height, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity" 
                       style={{height: `${height}%`}}></div>
                ))}
              </div>
            </div>

            {/* Lista de insights */}
            <div className="space-y-2">
              <div className="bg-white p-2 md:p-3 rounded-lg border border-slate-200 flex items-center gap-2 md:gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] md:text-xs font-semibold text-slate-800 truncate">Positive feedback detected</div>
                  <div className="text-[9px] md:text-xs text-slate-500 truncate">Staff service +32% mentions</div>
                </div>
              </div>
              <div className="bg-white p-2 md:p-3 rounded-lg border border-slate-200 flex items-center gap-2 md:gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse flex-shrink-0" style={{animationDelay: '0.5s'}}></div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] md:text-xs font-semibold text-slate-800 truncate">Trending topic</div>
                  <div className="text-[9px] md:text-xs text-slate-500 truncate">Breakfast quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta flotante - Análisis AI - Posicionada de forma contenida */}
        <div className="absolute -bottom-6 -left-12 md:-left-16 w-48 md:w-56 bg-white rounded-xl shadow-xl p-3 md:p-4 border border-slate-200 animate-float z-10">
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-slate-800 text-xs md:text-sm">AI Insights</span>
          </div>
          <div className="space-y-2">
            <div className="text-[10px] md:text-xs text-slate-600 leading-relaxed">
              "Guests love location. Improve breakfast variety."
            </div>
            <div className="flex gap-1 md:gap-2 flex-wrap">
              <div className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded text-[9px] md:text-xs font-medium">Location</div>
              <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-[9px] md:text-xs font-medium">Service</div>
            </div>
          </div>
        </div>

        {/* Tarjeta flotante - Reseña Positiva (DERECHA SUPERIOR) */}
        <div className="absolute top-8 -right-32 md:-right-36 w-48 md:w-56 bg-white rounded-xl shadow-xl p-3 md:p-4 border border-slate-200 z-10">
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <span className="font-bold text-slate-800 text-xs md:text-sm">Customer Review</span>
            <div className="w-2 h-2 bg-green-500 rounded-full ml-auto flex-shrink-0"></div>
          </div>
          <div className="space-y-2">
            <div className="text-[10px] md:text-xs text-slate-600 leading-relaxed">
              "<span className="bg-green-100 text-green-800 px-0.5 rounded">Great service</span> and very <span className="bg-green-100 text-green-800 px-0.5 rounded">friendly staff</span>. <span className="bg-green-100 text-green-800 px-0.5 rounded">Rooms</span> were <span className="bg-green-100 text-green-800 px-0.5 rounded">clean</span> and <span className="bg-green-100 text-green-800 px-0.5 rounded">comfortable</span>."
            </div>
            <div className="flex gap-1 md:gap-2 flex-wrap">
              <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-[9px] md:text-xs font-medium">Service</div>
              <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-[9px] md:text-xs font-medium">Cleanliness</div>
              <div className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-[9px] md:text-xs font-medium">Staff</div>
              <div className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-[9px] md:text-xs font-medium">Rooms</div>
              <div className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-[9px] md:text-xs font-medium">Comfort</div>
            </div>
          </div>
        </div>

        {/* Tarjeta flotante - Reseña Negativa (DERECHA INFERIOR) */}
        <div className="absolute bottom-16 -right-32 md:-right-36 w-48 md:w-56 bg-white rounded-xl shadow-xl p-3 md:p-4 border border-slate-200 z-10">
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <span className="font-bold text-slate-800 text-xs md:text-sm">Customer Review</span>
            <div className="w-2 h-2 bg-red-500 rounded-full ml-auto flex-shrink-0"></div>
          </div>
          <div className="space-y-2">
            <div className="text-[10px] md:text-xs text-slate-600 leading-relaxed">
              "<span className="bg-red-100 text-red-800 px-0.5 rounded">Breakfast options were limited</span> and the <span className="bg-red-100 text-red-800 px-0.5 rounded">check-in process was slow</span>."
            </div>
            <div className="flex gap-1 md:gap-2 flex-wrap">
              <div className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-[9px] md:text-xs font-medium">Breakfast</div>
              <div className="px-2 py-1 bg-red-100 text-red-700 rounded text-[9px] md:text-xs font-medium">Check-in</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
