import React from 'react';
import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';

const FinalCTA = () => {
  const benefits = [
    { icon: CheckCircle, text: '90-day pilot program with full support' },
    { icon: Clock, text: 'Setup completed within 2 weeks' },
    { icon: Users, text: 'Dedicated success team and training' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Turn Security into Proof.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Start Your Pilot Today.
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join the security organizations that are setting new standards for accountability, 
            efficiency, and professional excellence. Experience the difference proof-first 
            operations can make.
          </p>

          {/* Benefits */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-slate-300">
                <benefit.icon className="w-5 h-5 text-teal-400" />
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons 
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Request Demo & Pilot</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/5">
              Schedule Discovery Call
            </button>
          </div>
*/}
          {/* Contact Info */}
          <div className="border-t border-white/10 pt-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p className="text-slate-400">contact@mfi.company</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Phone</h3>
                <p className="text-slate-400">+(632) 8364-4365</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Response Time</h3>
                <p className="text-slate-400">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;