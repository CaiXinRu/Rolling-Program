"use client";
import { BoxIcon, CheckIcon } from "lucide-react";
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
  // Determine text color classes based on themeColor string
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
          className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16`}
        >
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div
              className={`absolute inset-0 translate-x-4 translate-y-4 rounded-xl ${getThemeBgClass()} opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y-6`}
            ></div>
            <img
              src={system.image}
              alt={system.title}
              className="relative z-10 rounded-xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-rp-dark">
              {system.title}
            </h2>
            <p className={`text-xl font-medium mb-6 ${getThemeTextClass()}`}>
              {system.shortDesc}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {system.fullDesc}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Features List */}
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span
                    className={`w-8 h-8 rounded-full ${getThemeBgClass()} bg-opacity-10 flex items-center justify-center ${getThemeTextClass()}`}
                  >
                    <CheckIcon className="w-4 h-4" />
                  </span>
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {system.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <CheckIcon
                        className={`w-5 h-5 shrink-0 mt-0.5 ${getThemeTextClass()}`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products List */}
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span
                    className={`w-8 h-8 rounded-full ${getThemeBgClass()} bg-opacity-10 flex items-center justify-center ${getThemeTextClass()}`}
                  >
                    <BoxIcon className="w-4 h-4" />
                  </span>
                  Core Products
                </h3>
                <div className="space-y-4">
                  {system.products.map((product, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex gap-4 items-center group hover:shadow-md transition-all"
                    >
                      <div className="shrink-0 w-14 h-14 rounded-md overflow-hidden bg-gray-50 border border-gray-100">
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
