import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// existing imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ValuePropositions from "./components/ValuePropositions";
import ImpactMetrics from "./components/ImpactMetrics";
import FutureVision from "./components/FutureVision";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";


import { Helmet, HelmetProvider } from "react-helmet-async";

// new page
import OneParanaque from "./pages/OneParanaque";
import ScrollToTop from "./components/ScrolltoTop";


function HomeLanding() {
  return (
    <>
      <Helmet>
        <title>Verity • Command and Control Landing Page</title>
        <link rel="icon" type="image/svg+xml" href="/favicons/logo.svg" />
        
      </Helmet>

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
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
 
      <BrowserRouter>
             <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/projects/OneParanaque" element={<OneParanaque />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
