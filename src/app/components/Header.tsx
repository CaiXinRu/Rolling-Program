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
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-rp-red to-rp-orange flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <span className="text-white font-bold text-xl leading-none">R</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            Rolling <span className="text-rp-red">Program</span>
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
