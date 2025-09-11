import React from 'react';
import { Users, Building, TrendingUp, Heart, Shield, BarChart3 } from 'lucide-react';

const ValuePropositions = () => {
  const valueProps = [
    {
      icon: Users,
      title: 'For Guards',
      subtitle: 'Professional empowerment & welfare',
      benefits: [
        'Faster pay through digital wallets',
        'Access to telehealth and wellness programs',
        'Food and gear marketplace access',
        'Career development and training',
        'Professional dignity and recognition'
      ],
      gradient: 'from-teal-500 to-teal-600',
      bgGradient: 'from-teal-50 to-cyan-50'
    },
    {
      icon: Building,
      title: 'For Clients',
      subtitle: 'Verifiable security operations',
      benefits: [
        'Real-time SLA verification and reporting',
        '30-50% faster incident response times',
        'Complete operational visibility',
        'Audit-ready compliance documentation',
        'Proactive risk management'
      ],
      gradient: 'from-cyan-500 to-cyan-600',
      bgGradient: 'from-cyan-50 to-indigo-50'
    },
    {
      icon: TrendingUp,
      title: 'For Agencies',
      subtitle: 'Operational excellence & growth',
      benefits: [
        'Higher profit margins through efficiency',
        'Improved guard retention rates',
        'Data-driven operational insights',
        'Competitive differentiation',
        'Scalable business processes'
      ],
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50 to-green-50'
    }
  ];

  return (
    <section id="value" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Value for Every Stakeholder
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our platform creates measurable value across the entire security ecosystem, 
            from individual guards to enterprise clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${prop.bgGradient} p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className={`w-full h-full bg-gradient-to-br ${prop.gradient} rounded-full transform translate-x-8 -translate-y-8`}></div>
              </div>

              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${prop.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <prop.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{prop.title}</h3>
                <p className="text-slate-600 font-medium mb-6">{prop.subtitle}</p>

                <ul className="space-y-3">
                  {prop.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-br ${prop.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-slate-700 text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to transform your security operations?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join forward-thinking security organizations that are setting new standards 
              for accountability, efficiency, and guard welfare.
            </p>
            <a href="#contact">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Schedule Your Pilot Program
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;