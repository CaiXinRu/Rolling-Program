"use client";
import { BoxIcon, CheckIcon, UsersIcon } from "lucide-react";
import React from "react";
import { SystemData } from "../constants";

interface SystemSectionProps {
  system: SystemData;
  reverse?: boolean;
}

const SystemSection: React.FC<SystemSectionProps> = ({
  system,
  reverse = false,
}) => {
  const getThemeTextClass = () => {
    switch (system.themeColor) {
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

  const getThemeBgClass = () => {
    switch (system.themeColor) {
      case "rp-red":
        return "bg-rp-red";
      case "rp-orange":
        return "bg-rp-orange";
      case "rp-yellow":
        return "bg-rp-yellow";
      default:
        return "bg-rp-red";
    }
  };

  return (
    <div
      className={`py-20 md:py-32 border-b border-gray-200 last:border-0 ${reverse ? "bg-white" : "bg-rp-light"}`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div
          className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-start gap-16`}
        >
          {/* Image Side - Only sticky on desktop (lg:sticky) to prevent stacking issues on mobile */}
          <div className="w-full lg:w-1/2 relative group lg:sticky lg:top-32">
            <div
              className={`absolute inset-0 translate-x-4 translate-y-4 rounded-xl ${getThemeBgClass()} opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y-6`}
            ></div>
            <img
              src={system.image}
              alt={system.title}
              className="relative z-10 rounded-xl shadow-2xl w-full h-[300px] md:h-[450px] object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-rp-dark leading-tight">
              {system.title}
            </h2>
            <p className={`text-xl font-semibold mb-6 ${getThemeTextClass()}`}>
              {system.shortDesc}
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {system.fullDesc}
            </p>

            <div className="space-y-12">
              {/* Features List */}
              <div className="bg-white/50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-rp-dark">
                  <span
                    className={`w-10 h-10 rounded-full ${getThemeBgClass()} bg-opacity-10 flex items-center justify-center ${getThemeTextClass()}`}
                  >
                    <CheckIcon className="w-5 h-5 text-white" />
                  </span>
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {system.features.map((feature, idx) => {
                    const [title, desc] = feature.split(": ");
                    return (
                      <li key={idx} className="flex items-start gap-4">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 ${getThemeBgClass()}`}
                        ></div>
                        <div>
                          <span className="font-bold text-rp-dark block text-base mb-1">
                            {title}
                          </span>
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {desc}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Target Clients */}
              <div className="bg-rp-dark text-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span
                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ${getThemeTextClass()}`}
                  >
                    <UsersIcon className="w-5 h-5" />
                  </span>
                  Target Clients
                </h3>
                <p className="text-gray-300 leading-relaxed font-medium">
                  {system.targetClients}
                </p>
              </div>

              {/* Products List */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-rp-dark">
                  <span
                    className={`w-10 h-10 rounded-full ${getThemeBgClass()} bg-opacity-10 flex items-center justify-center ${getThemeTextClass()}`}
                  >
                    <BoxIcon className="w-5 h-5 text-white" />
                  </span>
                  Core Products
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {system.products.map((product, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-center group hover:shadow-lg hover:border-transparent transition-all duration-300"
                    >
                      <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-50 border border-gray-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h4
                          className={`font-bold text-sm mb-1 transition-colors group-hover:${getThemeTextClass()}`}
                        >
                          {product.name}
                        </h4>
                        <p className="text-xs text-gray-500 leading-snug">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSection;
