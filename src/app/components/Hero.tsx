"use client";
import { Zap } from "lucide-react";
import React from "react";
import { SYSTEMS } from "../constants";

const Hero: React.FC = () => {
  const getHoverTextClass = (color: string) => {
    switch (color) {
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

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-rp-dark overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-rp-red/20 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-rp-orange/10 blur-[120px]"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-rp-orange text-sm font-bold uppercase tracking-wider animate-pulse">
            <Zap className="w-4 h-4 mr-2" />
            Live Demo Available
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Hands-Free Gate Access Powered by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rp-red via-rp-orange to-rp-yellow">
              License Plate Recognition
            </span>
          </h1>
          <p className="text-lg md:text-xl text-rp-gray mb-12 max-w-3xl leading-relaxed">
            Eliminate manual checks, speed up entry, block threats instantly,
            and gain full visibility with searchable logs, traffic analytics,
            and optional paid access—managed from one simple dashboard.
          </p>

          <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-800/40 border border-gray-700 rounded-2xl backdrop-blur-md overflow-hidden p-1.5 gap-1.5 shadow-2xl">
            {SYSTEMS.map((system) => (
              <a
                key={system.id}
                href={`#${system.id}`}
                onClick={(e) => scrollToSection(e, system.id)}
                className={`flex-1 flex flex-col md:flex-row items-center justify-center gap-3 px-4 py-4 md:py-5 rounded-xl transition-all duration-300 group hover:bg-gray-700/50 text-center text-gray-300 ${getHoverTextClass(system.themeColor)}`}
              >
                <span className="font-semibold transition-colors duration-300 leading-tight">
                  {system.title}
                </span>
                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center border border-gray-600 group-hover:border-current transition-colors duration-300 shrink-0 hidden md:flex">
                  <svg
                    className="w-3.5 h-3.5 text-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
