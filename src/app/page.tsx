"use client";
import React, { useState } from "react";
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
  const [activeSystemIndex, setActiveSystemIndex] = useState(0);
  const currentSystem = SYSTEMS[activeSystemIndex];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />

        <SystemsTabSection
          systems={SYSTEMS}
          activeIndex={activeSystemIndex}
          onTabChange={setActiveSystemIndex}
        />

        {/* New ALPR Specific Sections */}
        <TrustBar />
        <PartnerOpportunity />
        <HowItWorks />
        <Testimonials
          testimonials={currentSystem.testimonials}
          themeColor={currentSystem.themeColor}
        />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
