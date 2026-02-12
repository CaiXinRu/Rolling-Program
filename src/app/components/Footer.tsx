"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#111] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-rp-red to-rp-orange flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">
                  R
                </span>
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">
                Rolling <span className="text-rp-red">Program</span>
              </span>
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
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              Our Systems
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#smart-parking"
                  className="text-gray-400 hover:text-rp-red transition-colors"
                >
                  Smart Parking
                </a>
              </li>
              <li>
                <a
                  href="#semiconductor-control"
                  className="text-gray-400 hover:text-rp-orange transition-colors"
                >
                  Semiconductor Control
                </a>
              </li>
              <li>
                <a
                  href="#parking-access"
                  className="text-gray-400 hover:text-rp-yellow transition-colors"
                >
                  Access Control
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              Contact Us
            </h4>
            <address className="not-italic text-gray-400 space-y-3">
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
                123 Innovation Drive,
                <br />
                Tech Park, TP 90210
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
                  href="mailto:info@rollingprogram.com"
                  className="hover:text-white transition-colors"
                >
                  info@rollingprogram.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Rolling Program. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
