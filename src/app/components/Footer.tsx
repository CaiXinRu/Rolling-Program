"use client";
import { HouseIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function scrollToSystemsAndHash(
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
) {
  e.preventDefault();
  const element = document.getElementById("systems");
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    window.location.hash = id;
  }
}

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#111] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 bg-white rounded-lg p-2 w-fit">
              <Image
                src="/images/RP_LOGO.png"
                alt="Rolling Program Logo"
                width={220}
                height={48}
                className="h-12 w-auto object-contain"
                style={{ maxWidth: 220 }}
              />
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              Delivering robust, scalable, and intelligent control systems for
              parking, access, and semiconductor manufacturing worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rp-red transition-colors"
              >
                <HouseIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              Our Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#smart-parking"
                  onClick={(e) => scrollToSystemsAndHash(e, "smart-parking")}
                  className="text-gray-400 hover:text-rp-red transition-colors"
                >
                  Smart Parking Solutions
                </a>
              </li>
              <li>
                <a
                  href="#parking-access"
                  onClick={(e) => scrollToSystemsAndHash(e, "parking-access")}
                  className="text-gray-400 hover:text-rp-yellow transition-colors"
                >
                  Vehicle Access Platform
                </a>
              </li>
              {/* <li>
                <a
                  href="#semiconductor-control"
                  className="text-gray-400 hover:text-rp-orange transition-colors"
                >
                  Semiconductor Fab Solutions
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              Contact Us
            </h4>
            <address className="not-italic text-gray-400 space-y-3 text-sm">
              <p className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-rp-gray shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <a
                  href="tel:+18445387267"
                  className="hover:text-white transition-colors"
                >
                  +1 (844) 538-7267
                </a>
              </p>
              <p className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-rp-gray mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                Pasadena, CA 91101
              </p>
              <p className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-rp-gray shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=info@rollingtrans.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  info@rollingtrans.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} RollingProgram. All rights
            reserved.
          </p>
          {/* <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
