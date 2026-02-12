"use client";

import React, { useCallback, useEffect, useState } from "react";
import { SystemData } from "../constants";
import SystemSection from "./SystemSection";

const TAB_IDS = ["smart-parking", "parking-access"] as const;

function hashToIndex(hash: string): number {
  const normalized = hash.replace(/^#/, "").toLowerCase();
  const idx = TAB_IDS.indexOf(normalized as (typeof TAB_IDS)[number]);
  return idx >= 0 ? idx : 0;
}

function indexToHash(index: number): string {
  return TAB_IDS[index] ?? TAB_IDS[0];
}

interface SystemsTabSectionProps {
  systems: SystemData[];
}

const SystemsTabSection: React.FC<SystemsTabSectionProps> = ({ systems }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const syncFromHash = useCallback(() => {
    setActiveIndex(hashToIndex(window.location.hash));
  }, []);

  useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash]);

  const setTab = useCallback((index: number) => {
    setActiveIndex(index);
    window.history.replaceState(null, "", "#" + indexToHash(index));
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "ArrowLeft" && index > 0) {
        e.preventDefault();
        setTab(index - 1);
      } else if (e.key === "ArrowRight" && index < systems.length - 1) {
        e.preventDefault();
        setTab(index + 1);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setTab(index);
      }
    },
    [systems.length, setTab],
  );

  const getThemeBorderClass = (themeColor: string) => {
    switch (themeColor) {
      case "rp-red":
        return "border-rp-red";
      case "rp-orange":
        return "border-rp-orange";
      case "rp-yellow":
        return "border-rp-yellow";
      default:
        return "border-rp-red";
    }
  };

  const getThemeTextClass = (themeColor: string) => {
    switch (themeColor) {
      case "rp-red":
        return "text-rp-red";
      case "rp-orange":
        return "text-rp-orange";
      case "rp-yellow":
        return "text-rp-yellow";
      default:
        return "text-rp-red";
    }
  };

  if (systems.length === 0) return null;

  const currentSystem = systems[activeIndex];
  const tabPanelId = "systems-tabpanel";

  return (
    <>
      <section id="systems" className="relative">
        <div className="border-b border-gray-200 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div
              role="tablist"
              aria-label="Product solutions"
              className="flex gap-1 pt-6 pb-0"
            >
              {systems.map((system, index) => (
                <button
                  key={system.id}
                  role="tab"
                  id={`systems-tab-${index}`}
                  aria-selected={activeIndex === index}
                  aria-controls={tabPanelId}
                  tabIndex={activeIndex === index ? 0 : -1}
                  onClick={() => setTab(index)}
                  onKeyDown={(e) => onKeyDown(e, index)}
                  className={`
                  px-6 py-4 font-semibold text-lg transition-colors duration-200
                  border-b-2 -mb-px
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rp-red
                  ${activeIndex === index ? getThemeTextClass(system.themeColor) + " " + getThemeBorderClass(system.themeColor) : "border-transparent text-gray-500 hover:text-gray-700"}
                `}
                >
                  {system.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          role="tabpanel"
          id={tabPanelId}
          aria-labelledby={`systems-tab-${activeIndex}`}
          tabIndex={0}
        >
          <SystemSection system={currentSystem} reverse={false} />
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Target Clients
            </h2>
            <p className="text-lg text-gray-600">
              Industries and partners we serve
              <br />— from parking operators to property managers and
              enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentSystem.partnerOpportunity.map((sector, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-red-50 text-rp-red rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rp-red group-hover:text-white transition-colors duration-300">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                  {sector.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SystemsTabSection;
