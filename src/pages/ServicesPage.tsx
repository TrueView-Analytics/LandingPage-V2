import { Hotel, Building2, TrendingUp, Database, MessageSquare, Target, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import servicesImg from '../assets/services.jpg';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${servicesImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive AI-powered solutions designed to transform your customer data into strategic business advantages
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">SaaS Solutions</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Subscription-based software platforms tailored to your business size and industry needs
            </p>

            <div className="space-y-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center" id="SaaS-Hotels">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl">
                  <div className="bg-white inline-flex p-4 rounded-xl mb-6 shadow-md">
                    <Hotel size={40} className="text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">SaaS Hotels</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Specialized software license designed exclusively for hotels looking to leverage their customer review data for strategic improvements.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Real-time review aggregation from major OTAs</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">AI-powered sentiment analysis and trend detection</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Guest segmentation by type, origin, and preferences</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Actionable insights to improve guest experience</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Reputation score tracking and improvement recommendations</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Perfect For</h4>
                    <p className="text-gray-600">Independent hotels, boutique properties, and small hotel groups wanting to compete with larger chains through data-driven decision making.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Key Benefits</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Increase occupancy rates by understanding guest preferences</li>
                      <li>• Improve online reputation scores</li>
                      <li>• Identify service gaps before they impact ratings</li>
                      <li>• Make data-backed decisions on amenities and services</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center" id="SaaS-Pymes">
                <div className="order-2 lg:order-1 space-y-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Perfect For</h4>
                    <p className="text-gray-600">Restaurants, retail stores, service providers, and any customer-facing business wanting to enhance their customer experience.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Key Benefits</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Track customer satisfaction across multiple channels</li>
                      <li>• Identify most valuable customers and their preferences</li>
                      <li>• Respond faster to negative feedback</li>
                      <li>• Build loyalty through personalized experiences</li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 lg:order-2 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl">
                  <div className="bg-white inline-flex p-4 rounded-xl mb-6 shadow-md">
                    <Building2 size={40} className="text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">SaaS Pymes</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Flexible software solution for small and medium enterprises across all service industries to enhance customer experience through data intelligence.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Multi-channel feedback collection and analysis</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Customer behavior pattern recognition</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Competitive benchmarking tools</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Automated reporting and alerts</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Integration with existing CRM systems</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white" id="Enterprise-CX">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="bg-white/20 inline-flex p-4 rounded-xl mb-6">
                      <TrendingUp size={40} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Enterprise CX</h3>
                    <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                      Advanced analytics platform for hotel chains and large enterprises, integrating data from all locations to optimize experience, reputation, and profitability at scale.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Check className="text-white mt-1 flex-shrink-0" size={20} />
                        <span className="text-blue-50">Multi-property dashboard with centralized insights</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="text-white mt-1 flex-shrink-0" size={20} />
                        <span className="text-blue-50">Advanced predictive analytics and forecasting</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="text-white mt-1 flex-shrink-0" size={20} />
                        <span className="text-blue-50">Custom machine learning models for your data</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="text-white mt-1 flex-shrink-0" size={20} />
                        <span className="text-blue-50">Enterprise-grade security and compliance</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="text-white mt-1 flex-shrink-0" size={20} />
                        <span className="text-blue-50">Dedicated account manager and priority support</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
                      <h4 className="font-bold text-white mb-2">Perfect For</h4>
                      <p className="text-blue-50">Hotel chains, multi-location businesses, and large enterprises managing hundreds or thousands of customer touchpoints daily.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
                      <h4 className="font-bold text-white mb-2">Key Benefits</h4>
                      <ul className="text-blue-50 space-y-2">
                        <li>• Unified view across all properties and locations</li>
                        <li>• Benchmark performance between locations</li>
                        <li>• Scale best practices across the organization</li>
                        <li>• Drive revenue through data-driven strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-20" id="Additional-Services">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Additional Services</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Specialized consulting and custom solutions for unique business challenges
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all">
                <div className="bg-blue-100 inline-flex p-4 rounded-xl mb-6">
                  <Database size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analysis</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Custom solutions to exploit any data source. From cleaning and advanced processing to predictive models and machine learning that optimize strategic decisions in any sector.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Check className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Data cleaning and preprocessing</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Statistical analysis and visualization</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Predictive modeling</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Machine learning implementation</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all">
                <div className="bg-blue-100 inline-flex p-4 rounded-xl mb-6">
                  <MessageSquare size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">RAG Systems for Businesses</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We create Retrieval-Augmented Generation systems tailored to any business needs, integrating internal and external data to build intelligent assistants and automated response systems.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Check className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Custom AI assistants</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Semantic search engines</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Automated response systems</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Knowledge base integration</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all">
                <div className="bg-blue-100 inline-flex p-4 rounded-xl mb-6">
                  <Target size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Consulting</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We design strategies to improve every customer interaction, from first contact to post-sale. We develop action plans and measure their impact on satisfaction and loyalty.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Check className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Customer journey mapping</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Experience optimization strategies</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">KPI definition and tracking</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Implementation support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss which solution is right for your business
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg shadow-xl"
          >
            <span>Contact Us Today</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
