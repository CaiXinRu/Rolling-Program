"use client";
import React from "react";
import {
  FinalCTA,
  HowItWorks,
  PartnerOpportunity,
  Testimonials,
  TrustBar,
} from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SystemsTabSection from "./components/SystemsTabSection";
import { SYSTEMS } from "./constants";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />

        <SystemsTabSection systems={SYSTEMS} />

        {/* New ALPR Specific Sections */}
        <TrustBar />
        <PartnerOpportunity />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
