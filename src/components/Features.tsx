import React from 'react';
import { 
  Smartphone, 
  Monitor, 
  Shield, 
  MapPin, 
  AlertCircle, 
  MessageCircle,
  Wallet,
  Heart,
  ShoppingCart,
  BarChart3,
  Eye,
  Key,
  Database,
  Zap
} from 'lucide-react';

const Features = () => {
  const guardAppFeatures = [
    { icon: MapPin, title: 'GPS Breadcrumbing', description: 'Real-time location tracking with verified check-ins' },
    { icon: AlertCircle, title: 'Incident Capture', description: 'Quick incident reporting with photo and audio evidence' },
    { icon: MessageCircle, title: 'Secure Chat', description: 'Encrypted communication between guards and dispatch' },
    { icon: Wallet, title: 'Digital Wallet', description: 'Faster pay, micro-loans, and financial services' },
    { icon: Heart, title: 'Telehealth Access', description: 'Healthcare consultations and wellness support' },
    { icon: ShoppingCart, title: 'Marketplace', description: 'Food ordering and equipment procurement' }
  ];

  const hqCommandFeatures = [
    { icon: BarChart3, title: 'Analytics Dashboard', description: 'Real-time operational insights and KPI tracking' },
    { icon: Eye, title: 'CCTV Integration', description: 'Seamless camera system ingress and monitoring' },
    { icon: AlertCircle, title: 'Incident Queue', description: 'Centralized incident management and response' },
    { icon: Database, title: 'Chain of Custody', description: 'Immutable audit trails for compliance' },
    { icon: Zap, title: 'SOAR Automation', description: 'Automated response and workflow orchestration' },
    { icon: Key, title: 'API Integration', description: 'Connect with existing security infrastructure' }
  ];

  const securityFeatures = [
    { icon: Shield, title: 'End-to-End Encryption', description: 'Military-grade security for all communications' },
    { icon: Key, title: 'RBAC/SSO', description: 'Role-based access control and single sign-on' },
    { icon: Database, title: 'Immutable Logs', description: 'Tamper-proof audit trails and evidence storage' }
  ];

  const FeatureCard = ({ icon: Icon, title, description, gradient }: {
    icon: any;
    title: string;
    description: string;
    gradient: string;
  }) => (
    <div className="group bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-slate-50 mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
    </div>
  );

  return (
    <section id="features" className="py-20    bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Complete Security Operations Platform
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From mobile-first guard applications to enterprise command centers, 
            we provide the complete toolkit for modern security operations.
          </p>
        </div>

        {/* Guard App Features */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Guard App</h3>
                <p className="text-slate-600">Android-first mobile platform</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {guardAppFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient="bg-gradient-to-br from-teal-500 to-teal-600"
              />
            ))}
          </div>
        </div>

        {/* HQ Command Features */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">HQ Command Console</h3>
                <p className="text-slate-600">Enterprise operations center</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {hqCommandFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient="bg-gradient-to-br from-cyan-500 to-cyan-600"
              />
            ))}
          </div>
        </div>

        {/* Security & Compliance */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Security & Compliance</h3>
                <p className="text-slate-600">Enterprise-grade protection</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient="bg-gradient-to-br from-slate-500 to-slate-600"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;