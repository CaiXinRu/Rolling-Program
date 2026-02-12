"use client";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-rp-dark shadow-lg py-3"
          : "bg-rp-dark/90 backdrop-blur-md py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-start items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rp-red rounded-lg flex items-center justify-center transform rotate-3">
            <span className="text-white font-black text-xl">RP</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tighter leading-none text-white">
              ROLLING
            </span>
            <span className="font-bold text-xs tracking-widest text-rp-red leading-none">
              PROGRAM
            </span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
