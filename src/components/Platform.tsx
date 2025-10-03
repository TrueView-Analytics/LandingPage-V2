import { BarChart3, Brain, Users, Check } from 'lucide-react';

export default function Platform() {
  const features = [
    { icon: BarChart3, text: "Interactive Dashboards" },
    { icon: Brain, text: "Consultive AI" },
    { icon: Users, text: "Client Segmentation" }
  ];

  const benefits = [
    "Direct impact on customer experience",
    "Increases OTA scores",
    "Identifies improvement areas",
    "Detects your KMOTS (Key Moments of Truth)",
    "Measures your actions",
    "Segments by client type"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">BI-CX Platform</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Direct Customer Data Analysis Platform
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our mission is to help service businesses truly listen to their clients, improving online reputation, profitability, and customer experience.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <span className="font-semibold text-gray-900">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Now?</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <Check className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl text-white">
              <p className="text-sm font-semibold mb-2">Industry Impact</p>
              <p className="text-2xl font-bold">+1 reputation point = +11.2% price increase potential</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
