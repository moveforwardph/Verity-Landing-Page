import React from 'react';
import { Network, Database, Zap, Globe, MapPin, Eye } from 'lucide-react';

const FutureVision = () => {
  const phase2Features = [
    {
      icon: Network,
      title: 'Nationwide Network Integration',
      description: 'Seamless integration with PNP and Emergency Operations Centers',
      status: 'Coming 2025'
    },
    {
      icon: Database,
      title: 'Federated Event Bus',
      description: 'Real-time data sharing across security networks and jurisdictions',
      status: 'Development'
    },
    {
      icon: Zap,
      title: 'Dispatch Interoperability',
      description: 'Cross-platform dispatch coordination and resource sharing',
      status: 'Coming 2025'
    },
    {
      icon: Eye,
      title: 'Evidence Vault',
      description: 'Centralized, immutable evidence storage with chain-of-custody',
      status: 'Coming 2025'
    },
    {
      icon: MapPin,
      title: 'Intelligence Heatmaps',
      description: 'Predictive analytics and threat intelligence visualization',
      status: 'Research'
    },
    {
      icon: Globe,
      title: 'Global Security Network',
      description: 'International security information sharing and coordination',
      status: 'Vision 2026'
    }
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-cyan-100 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            <span className="text-teal-800 font-semibold text-sm">Phase 2 Vision</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            The Future of Security Operations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building towards a connected ecosystem where security operations are seamlessly 
            integrated, intelligently automated, and globally coordinated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {phase2Features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  feature.status.includes('2025') 
                    ? 'bg-green-100 text-green-800' 
                    : feature.status === 'Development' 
                      ? 'bg-cyan-100 text-cyan-800'
                      : feature.status === 'Research'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-purple-100 text-purple-800'
                }`}>
                  {feature.status}
                </span>
              </div>

              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-teal-50 group-hover:to-cyan-50 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-slate-600 group-hover:text-teal-600 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap Timeline */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Development Roadmap</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white font-bold text-lg">Q1</span>
              </div>
              <div className="text-white font-semibold mb-1">Core Platform</div>
              <div className="text-slate-300 text-sm">Guard App & HQ Command</div>
            </div>
            
            <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-green-500 to-teal-500"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white font-bold text-lg">Q2</span>
              </div>
              <div className="text-white font-semibold mb-1">Network Integration</div>
              <div className="text-slate-300 text-sm">PNP & EOC Connectivity</div>
            </div>
            
            <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white font-bold text-lg">Q3</span>
              </div>
              <div className="text-white font-semibold mb-1">Intelligence Layer</div>
              <div className="text-slate-300 text-sm">Heatmaps & Analytics</div>
            </div>
            
            <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white font-bold text-lg">2026</span>
              </div>
              <div className="text-white font-semibold mb-1">Global Network</div>
              <div className="text-slate-300 text-sm">International Expansion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;