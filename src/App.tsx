import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ValuePropositions from './components/ValuePropositions';
import ImpactMetrics from './components/ImpactMetrics';
import FutureVision from './components/FutureVision';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ValuePropositions />
      <ImpactMetrics />
      <FutureVision />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;