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
  /** 受控模式：由父層決定目前 tab，並在切換時回報 */
  activeIndex?: number;
  onTabChange?: (index: number) => void;
}

const SystemsTabSection: React.FC<SystemsTabSectionProps> = ({
  systems,
  activeIndex: controlledIndex,
  onTabChange,
}) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const isControlled = controlledIndex !== undefined && onTabChange !== undefined;
  const activeIndex = isControlled ? controlledIndex : internalIndex;

  const syncFromHash = useCallback(() => {
    const idx = hashToIndex(window.location.hash);
    if (isControlled) onTabChange?.(idx);
    else setInternalIndex(idx);
  }, [isControlled, onTabChange]);

  useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash]);

  const setTab = useCallback(
    (index: number) => {
      if (isControlled) onTabChange?.(index);
      else setInternalIndex(index);
      window.history.replaceState(null, "", "#" + indexToHash(index));
    },
    [isControlled, onTabChange],
  );

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

  const getHoverTextClass = (themeColor: string) => {
    switch (themeColor) {
      case "rp-red":
        return "hover:text-rp-red";
      case "rp-orange":
        return "hover:text-rp-orange";
      case "rp-yellow":
        return "hover:text-rp-yellow";
      default:
        return "hover:text-white";
    }
  };

  if (systems.length === 0) return null;

  const currentSystem = systems[activeIndex];
  const tabPanelId = "systems-tabpanel";

  return (
    <>
      <section id="systems" className="relative">
        <div className="container mx-auto px-6 md:px-12 py-6 md:py-12">
          <div
            role="tablist"
            aria-label="Product solutions"
            className="flex flex-col md:flex-row w-full max-w-4xl mx-auto gap-2 md:gap-3"
          >
            {systems.map((system, index) => (
              <button
                key={system.id}
                type="button"
                role="tab"
                id={`systems-tab-${index}`}
                aria-selected={activeIndex === index}
                aria-controls={tabPanelId}
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => setTab(index)}
                onKeyDown={(e) => onKeyDown(e, index)}
                className={`flex-1 rounded-full border-2 bg-white px-6 py-3.5 text-center font-semibold leading-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rp-red ${
                  activeIndex === index
                    ? `${getThemeTextClass(system.themeColor)} ${getThemeBorderClass(system.themeColor)}`
                    : "border-gray-200 text-rp-dark hover:border-gray-300 " +
                      getHoverTextClass(system.themeColor)
                }`}
              >
                {system.title}
              </button>
            ))}
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
    </>
  );
};

export default SystemsTabSection;
