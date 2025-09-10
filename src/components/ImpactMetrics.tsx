import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Clock, TrendingDown, Target, Users, Shield } from 'lucide-react';

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ value, suffix = '', duration = 2000 }: {
    value: number;
    suffix?: string;
    duration?: number;
  }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const increment = value / (duration / 50);
        const timer = setInterval(() => {
          setCurrent(prev => {
            const next = prev + increment;
            if (next >= value) {
              clearInterval(timer);
              return value;
            }
            return next;
          });
        }, 50);
        return () => clearInterval(timer);
      }
    }, [isVisible, value, duration]);

    return <span>{Math.floor(current)}{suffix}</span>;
  };

  const metrics = [
    {
      icon: CheckCircle,
      value: 95,
      suffix: '%',
      label: 'Verified Check-ins',
      description: 'GPS-verified patrol confirmations with tamper-proof logging',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingDown,
      value: 50,
      suffix: '%+',
      label: 'Fewer Disputes',
      description: 'Reduction in client-guard disagreements through verifiable proof',
      gradient: 'from-cyan-500 to-cyan-500'
    },
    {
      icon: Clock,
      value: 30,
      suffix: '%',
      label: 'Faster Response',
      description: 'Mean Time to Resolution (MTTR) improvement for incidents',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Target,
      value: 95,
      suffix: '%',
      label: 'SLA Conformance',
      description: 'Service Level Agreement compliance with real-time monitoring',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      value: 78,
      suffix: '%',
      label: 'Guard Retention',
      description: 'Higher retention through professional development and welfare',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Shield,
      value: 99,
      suffix: '%',
      label: 'System Uptime',
      description: 'Enterprise-grade reliability with 24/7 monitoring',
      gradient: 'from-indigo-500 to-cyan-500'
    }
  ];

  return (
    <section id="impact" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Measurable Impact
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real results from organizations that have implemented proof-first security operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${metric.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {metric.label}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-400 mb-1">
              <AnimatedNumber value={247} />
            </div>
            <div className="text-slate-400 text-sm">Guards Active</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">
              <AnimatedNumber value={12} />k+
            </div>
            <div className="text-slate-400 text-sm">Check-ins/Month</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">
              <AnimatedNumber value={43} />
            </div>
            <div className="text-slate-400 text-sm">Client Properties</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400 mb-1">
              <AnimatedNumber value={99} />.9%
            </div>
            <div className="text-slate-400 text-sm">Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;