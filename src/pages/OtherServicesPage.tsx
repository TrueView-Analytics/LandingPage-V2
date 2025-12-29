import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Globe, BarChart3, Users, Shield, TrendingUp, Target, ChevronDown, CheckCircle, Hotel, ShoppingBag, Building, Briefcase, MessageSquare, Calendar, Brain, Home, UtensilsCrossed, HeartPulse, Sparkles, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import diagramML from '../assets/diagram-machine-learning.png';
import ragImg from '../assets/rag.png';
import wordpressImg from '../assets/Wordpress Transparent.png';
import DiagnosisModal from '../components/DiagnosisModal';

export default function OtherServicesPage() {
 const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-white">
        <Hero />
        <Methodology />
        <Services />
        <Sectors />
        <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <CTA onOpenModal={() => setIsModalOpen(true)} />
      </div>
      
      <DiagnosisModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-blue-600 to-slate-900 text-white overflow-hidden pt-24 pb-32">
      {/* Elementos decorativos animados */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Contenido */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/40 rounded-full px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>{t.specializedServicesAI}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-left">
              <span className="block mb-2 text-left">{t.advancedSolutionsTitle}</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent gradient-animate text-left">
                {t.aiDataStrategy}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
              {t.scalingDecisions}
            </p>

            <p className="text-lg text-slate-200 leading-relaxed max-w-2xl">
              {t.expandCapabilitiesDesc}
            </p>
          </div>

          {/* Columna derecha - Grid de 4 mockups */}
          <div className="relative w-full">
            <div className="grid grid-cols-2 gap-4">
              
              {/* 1. Dashboard Analytics */}
              <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="absolute top-2 right-2 z-10 inline-flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded-full text-[10px] font-semibold">
                  <BarChart3 className="w-3 h-3" />
                  <span>Analytics</span>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-2 w-16 bg-slate-200 rounded"></div>
                      <div className="w-10 h-4 bg-blue-100 rounded"></div>
                    </div>
                    <div className="text-2xl font-bold text-slate-800">+24.7%</div>
                    <div className="flex items-end gap-0.5 h-8 mt-2">
                      {[40, 60, 45, 75, 55, 85].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white rounded-lg p-2 border border-slate-200">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-1">
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                      <div className="text-lg font-bold text-slate-800">87%</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-slate-200">
                      <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-1">
                        <Users className="w-3 h-3 text-white" />
                      </div>
                      <div className="text-lg font-bold text-slate-800">+12K</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. AI Chatbot */}
              <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="absolute top-2 right-2 z-10 inline-flex items-center gap-1 bg-cyan-600 text-white px-2 py-1 rounded-full text-[10px] font-semibold">
                  <MessageSquare className="w-3 h-3" />
                  <span>Chatbot</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                    <div className="w-7 h-7 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-800 text-[11px]">AI Assistant</div>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-[9px] text-slate-500">En línea</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-2 shadow-sm">
                      <p className="text-white text-[9px] leading-relaxed">¿Necesitas optimizar datos?</p>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-slate-100 rounded-lg p-2 shadow-sm max-w-[80%]">
                        <p className="text-slate-700 text-[9px]">Sí, análisis predictivo</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-2 shadow-sm">
                      <p className="text-white text-[9px] mb-1">Puedo ayudarte con:</p>
                      <div className="space-y-0.5">
                        {['Segmentación', 'Predicción', 'Tendencias'].map((item, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-cyan-300 rounded-full"></div>
                            <span className="text-white text-[8px]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg px-2 py-1.5 shadow-sm">
                      <div className="flex gap-0.5 justify-center">
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Revenue Platform */}
              <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="absolute top-2 right-2 z-10 inline-flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded-full text-[10px] font-semibold">
                  <TrendingUp className="w-3 h-3" />
                  <span>Revenue</span>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-semibold text-slate-600">Ingresos Totales</span>
                      <div className="flex items-center gap-1 text-green-600">
                        <TrendingUp className="w-3 h-3" />
                        <span className="text-[9px] font-bold">+18%</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-slate-800">$847K</div>
                    <div className="h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" style={{ width: '73%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    {[
                      { label: 'MRR', value: '$24K', percent: 85, color: 'blue' },
                      { label: 'ARR', value: '$290K', percent: 92, color: 'cyan' },
                      { label: 'LTV', value: '$12K', percent: 68, color: 'green' }
                    ].map((metric, i) => (
                      <div key={i} className="bg-white rounded-lg p-2 border border-slate-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[8px] font-semibold text-slate-600">{metric.label}</span>
                          <span className="text-[10px] font-bold text-slate-800">{metric.value}</span>
                        </div>
                        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-400 rounded-full`} style={{ width: `${metric.percent}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Smart Search Engine */}
              <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="absolute top-2 right-2 z-10 inline-flex items-center gap-1 bg-purple-600 text-white px-2 py-1 rounded-full text-[10px] font-semibold">
                  <Sparkles className="w-3 h-3" />
                  <span>Search</span>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-white rounded-xl p-2 border-2 border-blue-500 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-blue-600" />
                      <div className="flex-1 h-2 bg-slate-100 rounded"></div>
                      <Sparkles className="w-3 h-3 text-purple-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    {[
                      { icon: '📊', title: 'Informe Q4 2024', type: 'PDF', relevance: 98 },
                      { icon: '📈', title: 'Análisis Ventas', type: 'Excel', relevance: 95 },
                      { icon: '🎯', title: 'KPIs Marketing', type: 'Dashboard', relevance: 92 }
                    ].map((doc, i) => (
                      <div key={i} className="bg-white rounded-lg p-2 border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{doc.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="text-[9px] font-semibold text-slate-800 truncate">{doc.title}</div>
                            <div className="text-[8px] text-slate-500">{doc.type}</div>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-1 w-6 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500" style={{ width: `${doc.relevance}%` }}></div>
                            </div>
                            <span className="text-[8px] font-bold text-purple-600">{doc.relevance}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-2 border border-purple-200">
                    <div className="flex items-center gap-1">
                      <Brain className="w-3 h-3 text-purple-600" />
                      <span className="text-[8px] font-semibold text-purple-700">IA procesando 24.8K documentos</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm font-semibold text-blue-500 mb-4">
            <Target className="w-4 h-4" />
            {t.specializedServices}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.ourServicesTitle}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.solutionsDesignedDesc}
          </p>
        </div>

        <div className="space-y-16">
          {/* Data Analysis & ML */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 hover:shadow-xl hover:shadow-blue-200/60 hover:border-blue-200 transition-all duration-300">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm font-semibold text-blue-600 mb-4">
                  <BarChart3 className="w-4 h-4" />
                  {t.dataAndAnalytics}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                  {t.dataAnalysisBIML}
                </h3>
                <p className="text-lg text-slate-700 mb-3 leading-relaxed">
                  {t.dataAnalysisDesc1}
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  {t.dataAnalysisDesc2}
                </p>
              </div>

              {/* Content sections */}
              <div className="space-y-8">
                {/* Qué aportamos */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    {t.whatWeProvide}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      t.dataAnalysisPoint1,
                      t.dataAnalysisPoint2,
                      t.dataAnalysisPoint3,
                      t.dataAnalysisPoint4,
                      t.dataAnalysisPoint5,
                      t.dataAnalysisPoint6
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enfoque práctico */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2 text-lg">
                    <Target className="w-5 h-5 text-blue-600" />
                    {t.practicalApproach}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {t.practicalApproachDesc}
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="text-sm text-slate-700 italic">{t.practicalApproachNote}</p>
                  </div>
                </div>

                {/* Para quién e Impacto */}
                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2 text-base">
                      <Target className="w-5 h-5 text-blue-600" />
                      {t.forWhom}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{t.forWhomDesc}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2 text-base">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      {t.expectedImpact}
                    </h4>
                    <ul className="space-y-2">
                      {[
                        { icon: BarChart3, text: t.impactPoint1 },
                        { icon: CheckCircle, text: t.impactPoint2 },
                        { icon: Zap, text: t.impactPoint3 },
                        { icon: TrendingUp, text: t.impactPoint4 }
                      ].map((impact, i) => {
                        const Icon = impact.icon;
                        return (
                          <li key={i} className="flex items-start gap-2">
                            <Icon className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{impact.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link to="/contact" className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                  {t.requestInformation}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* RAG Systems */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 hover:shadow-xl hover:shadow-blue-200/60 hover:border-blue-200 transition-all duration-300">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm font-semibold text-blue-600 mb-4">
                  <Brain className="w-4 h-4" />
                  {t.enterpriseAI}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                  {t.ragSystemsTitle}
                </h3>
                <p className="text-lg text-slate-700 mb-3 leading-relaxed">
                  {t.ragDesc1}
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  {t.ragDesc2}
                </p>
              </div>

              {/* Content sections */}
              <div className="space-y-8">
                {/* Ventajas clave */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                    <Target className="w-5 h-5 text-blue-600" />
                    {t.keyAdvantages}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      t.ragPoint1,
                      t.ragPoint2,
                      t.ragPoint3,
                      t.ragPoint4,
                      t.ragPoint5
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Aplicaciones */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    {t.applications}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      t.ragApp1,
                      t.ragApp2,
                      t.ragApp3,
                      t.ragApp4,
                      t.ragApp5
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impacto esperado */}
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    {t.expectedImpact}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      { icon: Zap, text: t.ragImpact1 },
                      { icon: Shield, text: t.ragImpact2 },
                      { icon: Target, text: t.ragImpact3 },
                      { icon: TrendingUp, text: t.ragImpact4 }
                    ].map((result, i) => {
                      const Icon = result.icon;
                      return (
                        <li key={i} className="flex items-start gap-2">
                          <Icon className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600 leading-relaxed">{result.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link to="/contact" className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                  {t.requestInformation}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Strategic Consulting */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 hover:shadow-xl hover:shadow-blue-200/60 hover:border-blue-200 transition-all duration-300">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm font-semibold text-blue-600 mb-4">
                  <Briefcase className="w-4 h-4" />
                  {t.analyticStrategy}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {t.consultingTitle}
                </h3>
                <p className="text-lg text-slate-700 mb-3 leading-relaxed">
                  {t.consultingDesc1}
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  {t.consultingDesc2}
                </p>
              </div>

              {/* Content sections */}
              <div className="space-y-8">
                {/* Qué hacemos */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    {t.whatWeDoConsulting}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      t.consultingPoint1,
                      t.consultingPoint2,
                      t.consultingPoint3,
                      t.consultingPoint4,
                      t.consultingPoint5
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cómo trabajamos */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2 text-lg">
                    <Target className="w-5 h-5 text-blue-600" />
                    {t.howWeWork}
                  </h4>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {t.howWeWorkDesc}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { num: '1', title: t.workStep1Title, desc: t.workStep1Desc },
                      { num: '2', title: t.workStep2Title, desc: t.workStep2Desc },
                      { num: '3', title: t.workStep3Title, desc: t.workStep3Desc },
                      { num: '4', title: t.workStep4Title, desc: t.workStep4Desc }
                    ].map((step) => (
                      <div key={step.num} className="flex gap-3 bg-slate-50 rounded-lg p-3 border border-slate-200">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                          {step.num}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-slate-900 text-sm mb-1">{step.title}</div>
                          <div className="text-xs text-slate-600">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impacto esperado */}
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    {t.expectedImpact}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      { icon: BarChart3, text: t.consultingImpact1 },
                      { icon: Target, text: t.consultingImpact2 },
                      { icon: CheckCircle, text: t.consultingImpact3 },
                      { icon: TrendingUp, text: t.consultingImpact4 }
                    ].map((impact, i) => {
                      const Icon = impact.icon;
                      return (
                        <li key={i} className="flex items-start gap-2">
                          <Icon className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600 leading-relaxed">{impact.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link to="/contact" className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                  {t.requestInformation}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Methodology() {
  const { t } = useLanguage();
  
  const steps = [
    { num: '1', title: t.step1Title, desc: t.step1Desc },
    { num: '2', title: t.step2Title, desc: t.step2Desc },
    { num: '3', title: t.step3Title, desc: t.step3Desc },
    { num: '4', title: t.step4Title, desc: t.step4Desc }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.ourMethodology}
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t.methodologyDesc}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.num} 
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector Line (hidden on mobile, shown on desktop) */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-blue-300 to-transparent -translate-x-4"></div>
              )}
              
              <div className="bg-white rounded-2xl p-8 h-full border-2 border-slate-100 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1">
                {/* Number Badge */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-black text-white">{step.num}</span>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  const { t } = useLanguage();
  
  const sectors = [
    {
      name: t.hospitalityTourism,
      description: t.hospitalityDesc,
      gradient: 'from-[#1A73E8] to-[#2B7BFF]',
      icon: Hotel
    },
    {
      name: t.retailEcommerce,
      description: t.retailEcommerceDesc,
      gradient: 'from-[#2B7BFF] to-[#3B82F6]',
      icon: ShoppingBag
    },
    {
      name: t.realEstateTitle,
      description: t.realEstateDescSector,
      gradient: 'from-[#3B82F6] to-[#4A90E2]',
      icon: Home
    },
    {
      name: t.restaurantsTitle,
      description: t.restaurantsDesc,
      gradient: 'from-[#1A73E8] to-[#2563EB]',
      icon: UtensilsCrossed
    },
    {
      name: t.professionalServices,
      description: t.professionalServicesDesc,
      gradient: 'from-[#2563EB] to-[#3B82F6]',
      icon: Briefcase
    },
    {
      name: t.healthcareTitle,
      description: t.healthcareDesc,
      gradient: 'from-[#2B7BFF] to-[#4A90E2]',
      icon: HeartPulse
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F7F9FC] relative overflow-hidden">
      {/* Background geometric lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1A73E8" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <line x1="10%" y1="0" x2="40%" y2="100%" stroke="#1A73E8" strokeWidth="1" opacity="0.3"/>
          <line x1="60%" y1="0" x2="90%" y2="100%" stroke="#1A73E8" strokeWidth="1" opacity="0.3"/>
          <circle cx="20%" cy="20%" r="100" fill="none" stroke="#2B7BFF" strokeWidth="1" opacity="0.2"/>
          <circle cx="80%" cy="80%" r="150" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.2"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">{t.sectorsWeWorkWith}</h2>
          <p className="text-lg text-slate-500 font-light">{t.presenceInIndustries}</p>
        </div>

        <div className="relative flex items-center justify-center min-h-[750px]">
          {/* Central node with Wordpress image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48 z-20 flex items-center justify-center">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#1A73E8] rounded-full blur-2xl opacity-20"></div>

              {/* Circle background matching node colors */}
              <div className="absolute inset-4 bg-gradient-to-br from-[#1A73E8] to-[#2B7BFF] rounded-full flex items-center justify-center shadow-2xl border-2 border-[#3B82F6]/20">
                <img src={wordpressImg} alt="Wordpress" className="w-24 h-24 object-contain" />
              </div>

              {/* Outer subtle border */}
              <div className="absolute -inset-3 border-2 border-[#3B82F6]/30 rounded-full"></div>
            </div>
          </div>

          {/* Sector cards in radial layout */}
          {sectors.map((sector, i) => {
            const angle = (i * 60) - 90;
            const radius = 320;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div key={i}>
                {/* Connection line */}
                <svg
                  className="absolute top-1/2 left-1/2 pointer-events-none"
                  style={{
                    width: Math.abs(x) + 120,
                    height: Math.abs(y) + 120,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1
                  }}
                >
                  <line
                    x1={x < 0 ? Math.abs(x) + 60 : 60}
                    y1={y < 0 ? Math.abs(y) + 60 : 60}
                    x2={x < 0 ? 60 : Math.abs(x) + 60}
                    y2={y < 0 ? 60 : Math.abs(y) + 60}
                    stroke="#1A73E8"
                    strokeWidth="1.5"
                    opacity="0.15"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Sector card */}
                <div
                  className="absolute z-10"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  <div className="relative group cursor-pointer">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-[#1A73E8] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                    {/* Card */}
                    <div className={`relative w-48 h-48 rounded-2xl bg-gradient-to-br ${sector.gradient} p-6 flex flex-col items-center justify-center text-white shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1`}>
                      <sector.icon className="w-10 h-10 mb-4 opacity-90" strokeWidth={1.5} />
                      <h3 className="text-base font-bold text-center mb-2 leading-tight">{sector.name}</h3>
                      <p className="text-xs text-center opacity-95 font-light leading-snug">{sector.description}</p>

                      {/* Subtle inner glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}

function FAQ({ openFaq, setOpenFaq }: { openFaq: number | null; setOpenFaq: (n: number | null) => void }) {
  const { t } = useLanguage();
  
  const faqs = [
    {
      q: t.faqOtherQ1,
      a: t.faqOtherA1
    },
    {
      q: t.faqOtherQ2,
      a: t.faqOtherA2
    },
    {
      q: t.faqOtherQ3,
      a: t.faqOtherA3
    },
    {
      q: t.faqOtherQ4,
      a: t.faqOtherA4
    },
    {
      q: t.faqOtherQ5,
      a: t.faqOtherA5
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t.frequentlyAskedQuestions}</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-black">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ onOpenModal }: { onOpenModal: () => void }) {
  const { t } = useLanguage();
  
  return (
    <section className="py-32 px-6 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {t.transformDataDecisions}
        </h2>
        <p className="text-xl mb-12 text-blue-100 leading-relaxed">
          {t.ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-base hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5" />
            {t.scheduleCallBtn}
          </Link>
          <button 
            onClick={onOpenModal}
            className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 border-2 border-white"
          >
            <MessageSquare className="w-5 h-5" />
            {t.requestFreeDiagnosisBtn}
          </button>
        </div>
      </div>
    </section>
  );
}
