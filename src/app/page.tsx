"use client";
import React from "react";
import {
  FinalCTA,
  HowItWorks,
  PartnerOpportunity,
  Testimonials,
  TrustBar,
  WhoItsFor,
} from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SystemSection from "./components/SystemSection";
import { SYSTEMS } from "./constants";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />

        <section id="systems" className="relative">
          {SYSTEMS.map((system, index) => (
            <div id={system.id} key={system.id}>
              <SystemSection system={system} reverse={index % 2 !== 0} />
            </div>
          ))}
        </section>

        {/* New ALPR Specific Sections */}
        <TrustBar />
        <WhoItsFor />
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
