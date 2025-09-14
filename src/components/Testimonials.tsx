import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Verity • Command and Control  transformed our security operations completely. The proof-first approach eliminated disputes and gave our clients complete confidence in our services. Our operational efficiency improved by 40% in the first quarter.",
      name: "Maria Santos",
      title: "Operations Director",
      company: "SecureGuard Philippines",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The real-time verification and audit trails have been game-changing for our compliance requirements. We now have complete visibility into our security operations and can provide clients with detailed, verifiable reports.",
      name: "Robert Chen",
      title: "Security Manager",
      company: "Metro Property Solutions",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "Our guards love the platform - faster pay, telehealth access, and professional development tools. Retention rates improved dramatically, and guard satisfaction scores are at an all-time high.",
      name: "Jennifer Rodriguez",
      title: "HR Director",
      company: "Elite Security Services",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const trustLogos = [
    { name: "ISO 27001", logo: "🔒" },
    { name: "SOC 2", logo: "🛡️" },
    { name: "GDPR", logo: "🔐" },
    { name: "BSP Compliant", logo: "🏦" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Testimonials
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Security Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Organizations across the Philippines are transforming their security operations 
            with our proof-first platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-cyan-800 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.title}</div>
                  <div className="text-sm text-cyan-800 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>  

        {/* Trust Signals */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Enterprise-Grade Security & Compliance
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustLogos.map((trust, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300"
              >
                <div className="text-3xl mb-2">{trust.logo}</div>
                <div className="font-semibold text-slate-800">{trust.name}</div>
              </div>
            ))}
          </div>

          {/* Pilot Partner Logos */}
          <div className="mt-12 p-6 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-100">
            <h4 className="text-lg font-semibold text-slate-800 mb-4">
              Pilot Partners & Early Adopters
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-slate-200 rounded-lg px-6 py-3 text-slate-600 font-medium">
                SecureGuard Philippines
              </div>
              <div className="bg-slate-200 rounded-lg px-6 py-3 text-slate-600 font-medium">
                Metro Property Solutions
              </div>
              <div className="bg-slate-200 rounded-lg px-6 py-3 text-slate-600 font-medium">
                Elite Security Services
              </div>
              <div className="bg-slate-200 rounded-lg px-6 py-3 text-slate-600 font-medium">
                Fortress Protection
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
