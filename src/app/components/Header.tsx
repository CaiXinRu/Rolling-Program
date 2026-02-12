"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../images/RP_LOGO.png";

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
          ? "bg-white shadow-lg py-3"
          : "bg-white backdrop-blur-md py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-start items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src={Logo}
            alt="Rolling Program Logo"
            width={Logo.width}
            height={Logo.height}
            className="h-12 w-auto object-contain"
            style={{ maxWidth: 220 }}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
