import React from 'react';
import { ArrowRight, Play, Smartphone, Monitor } from 'lucide-react';

const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const Hero = () => {
  return (
    <section className="relative  bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute inset-0 bg-[url('${backgroundPattern}')]`}></div>
      </div>

      <div className="relative container mx-auto px-6 pt-48 pb-60">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 place-items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Proof-First Security.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Real-Time Trust.
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Every check-in, patrol, and incident—verified, audit-ready, and secure. 
                Transform your security operations with accountability at every step.
              </p>
 {/*
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Book a 90-Day Pilot</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="group border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              Trust Indicators */}
              <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 text-slate-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>95% Verified Check-ins</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>50% Fewer Disputes</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>30% Faster Response</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Guard App Mockup */}
                <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl shadow-2xl border border-slate-700">
                  <div className="flex items-center space-x-2 mb-4">
                    <Smartphone className="w-5 h-5 text-teal-400" />
                    <span className="text-white font-medium">Guard App</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-teal-500/20 border border-teal-400/30 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <span className="text-white">Time Tracking</span>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 text-slate-300">
                      GPS: Verified ✓
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 text-slate-300">
                      Incident Report: Ready
                    </div>
                  </div>
                </div>

                {/* HQ Command Dashboard Mockup */}
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-slate-700 to-slate-800 p-4 rounded-2xl shadow-2xl border border-slate-600 max-w-xs">
                  <div className="flex items-center space-x-2 mb-3">
                    <Monitor className="w-4 h-4 text-cyan-400" />
                    <span className="text-white text-sm font-medium">HQ Command</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-green-500/20 border border-green-400/30 rounded p-2 text-xs text-green-300">
                      All Guards: Active
                    </div>
                    <div className="bg-slate-600/50 rounded p-2 text-xs text-slate-300">
                      Real-time Analytics
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-teal-400/20 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-12 left-8 w-8 h-8 bg-cyan-400/30 rounded-full blur-sm animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;