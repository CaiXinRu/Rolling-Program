"use client";
import { Zap } from "lucide-react";
import React from "react";

const HERO_BG_IMAGE = "/images/car-outdoor.png";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 md:pt-48 md:pb-20 overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/75" aria-hidden />
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
          <p className="text-lg md:text-xl text-rp-light mb-12 max-w-3xl leading-relaxed">
            Eliminate manual checks, speed up entry, block threats instantly,
            and gain full visibility with searchable logs, traffic analytics,
            and optional paid access—managed from one simple dashboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
