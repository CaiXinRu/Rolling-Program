"use client";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Play,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import React from "react";
import { TARGET_SECTORS, TRUST_ITEMS } from "../constants";

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-rp-dark py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className="mb-3 text-rp-red group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-wide leading-tight px-4">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const WhoItsFor: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Secure, Efficient Vehicle Access for Properties That Can't Afford
            Delays
          </h2>
          <p className="text-lg text-gray-600">
            Rolling Program is built for managers and teams handling high-volume
            access, security, and flow—without the staffing headaches.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_SECTORS.map((sector, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-red-50 text-rp-red rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rp-red group-hover:text-white transition-colors duration-300">
                {sector.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                {sector.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Tailored automation workflows designed specifically for your
                operational needs.
              </p>
            </div>
          ))}
          <div className="bg-rp-red p-8 rounded-3xl shadow-xl flex flex-col justify-between text-white group cursor-pointer overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to automate?</h3>
              <p className="text-white/80 text-sm mb-6">
                Join hundreds of property managers scaling their security
                infrastructure.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&to=sales@program.com.tw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-black uppercase tracking-widest text-xs hover:translate-x-2 transition-transform"
              >
                Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <Target className="absolute -bottom-8 -right-8 w-40 h-40 text-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const PartnerOpportunity: React.FC = () => {
  return (
    <section className="py-24 bg-[#212121ff] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1 bg-rp-orange/20 text-rp-orange rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Channel Partners
            </div>
            <h2 className="text-4xl font-extrabold mb-8 leading-tight">
              Launch ALPR Solutions Faster —{" "}
              <span className="text-rp-orange">No R&D Required</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Gate companies, integrators, and security providers add
              cutting-edge ALPR to their offerings instantly with Rolling
              Program's proven platform.
            </p>
            <ul className="space-y-6 mb-12">
              {[
                "Zero development or engineering investment",
                "No hardware stocking or inventory",
                "Field-proven across industries",
                "Rapid deployment with full training & support",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="mt-1 w-6 h-6 bg-rp-red rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://mail.google.com/mail/?view=cm&to=sales@program.com.tw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-rp-orange text-white font-bold rounded-full hover:scale-105 transition-transform"
            >
              Become a Partner
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1000"
              alt="Partner Program"
              className="rounded-[2.5rem] shadow-2xl border border-white/10 transform -rotate-2 hover:rotate-0 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-rp-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Simple, Powerful ALPR Automation in 3 Steps
          </h2>
          <div className="w-24 h-1 bg-rp-red mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gray-100 -z-10" />

          {[
            {
              step: "01",
              title: "Capture",
              description:
                "Accurate cameras read plates in real time, day or night with superior low-light performance.",
              icon: <Zap className="w-8 h-8" />,
            },
            {
              step: "02",
              title: "Decide",
              description:
                "Whitelist opens gates instantly; blacklist denies access and sends instant staff alerts.",
              icon: <ShieldCheck className="w-8 h-8" />,
            },
            {
              step: "03",
              title: "Track & Optimize",
              description:
                "Every event logs for instant search, exports, and analytics on peaks and traffic patterns.",
              icon: <BarChart3 className="w-8 h-8" />,
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white border-4 border-brand-red rounded-full flex items-center justify-center text-rp-red font-black text-xl mb-8 relative bg-white">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="#"
            className="px-10 py-4 bg-rp-dark text-white rounded-full font-bold hover:bg-rp-red transition-all shadow-xl inline-flex items-center"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            What Our Customers Say
          </h2>
          <div className="text-brand-red flex justify-center space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Play key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-10 rounded-[2.5rem] relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-xl italic text-gray-700 leading-relaxed mb-8">
                “Rolling Program turned chaotic gate logs into instant,
                searchable intelligence—security and operations are night and
                day better.”
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="https://i.pravatar.cc/150?u=pm1"
                  className="w-14 h-14 rounded-full"
                  alt="James Anderson Avatar"
                />
                <div>
                  <div className="font-bold text-gray-900">James Anderson</div>
                  <div className="text-rp-red text-sm font-bold uppercase tracking-widest">
                    Property Manager, HOA
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-8 text-8xl text-gray-200 font-serif leading-none z-0 pointer-events-none opacity-50">
              “
            </div>
          </div>
          <div className="bg-[#212121ff] p-10 rounded-[2.5rem] relative overflow-hidden text-white">
            <div className="relative z-10">
              <p className="text-xl italic text-gray-300 leading-relaxed mb-8">
                “We cut staffing needs while gaining real analytics on traffic
                and repeats. Reporting is effortless now.”
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="https://i.pravatar.cc/150?u=ops1"
                  className="w-14 h-14 rounded-full"
                  alt="Sarah Jenkins Avatar"
                />
                <div>
                  <div className="font-bold">Sarah Jenkins</div>
                  <div className="text-rp-orange text-sm font-bold uppercase tracking-widest">
                    Ops Director, Multi-Family
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-8 text-8xl text-white/5 font-serif leading-none z-0 pointer-events-none">
              “
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-rp-red text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Automate Access and Gain Total Visibility?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          See Rolling Program handle ALPR entry, smart rules, instant logs,
          analytics, multi-site control, and payment options—tailored to your
          properties.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://mail.google.com/mail/?view=cm&to=sales@program.com.tw"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-rp-red font-black uppercase tracking-widest text-lg rounded-full hover:scale-105 transition-transform shadow-2xl"
          >
            Book a Demo
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=sales@program.com.tw"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-transparent border-2 border-white text-white font-black uppercase tracking-widest text-lg rounded-full hover:bg-white hover:text-rp-red transition-all"
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
};
