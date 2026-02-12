"use client";

import {
  BarChart3,
  Building2,
  Construction,
  Cpu,
  CreditCard,
  Globe,
  Lock,
  School,
  Search,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import LicensePlateRecognitionImage from "./images/License Plate Recognition.png";
import ParkVisionKioskImage from "./images/ParkVision Payment Kiosk.png";
import PlateReadEdgeImage from "./images/PlateRead Edge.png";

export interface SystemProduct {
  name: string;
  description: string;
  image: string;
}

export interface SystemData {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  products: SystemProduct[];
  themeColor: string;
  targetClients: string;
}

export const SYSTEMS: SystemData[] = [
  {
    id: "smart-parking",
    title: "Smart Parking Solutions",
    shortDesc: "Achieve fully automated and unmanned parking management.",
    fullDesc:
      "This solution is specifically designed for public or commercial parking facilities, aiming to achieve fully automated and unmanned management. Based on an AI-driven Automatic License Plate Recognition (ALPR) system, vehicles can enter and exit without stopping, taking a ticket, or touching any equipment.",
    image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
    themeColor: "rp-red",
    features: [
      "Automated Payments: Multiple smart payment methods for unmanned, automatic fee deductions.",
      "Cloud-Based Accounting Platform: Real-time, accurate cloud-based reports and financial management.",
      "Enhanced Operational Efficiency: Significantly reduces labor costs and transforms the facility into a high-efficiency smart asset.",
    ],
    targetClients:
      "Public Parking Facilities, Shopping Malls, Hospitals, Commercial Office Buildings.",
    products: [
      {
        name: "License Plate Recognition",
        description:
          "AI-powered camera system for instantaneous vehicle identification and seamless automated entry.",
        image: LicensePlateRecognitionImage.src,
      },
      {
        name: "ParkVision Payment Kiosk",
        description:
          "Interactive pay-on-foot station with multi-payment support.",
        image: ParkVisionKioskImage.src,
      },
    ],
  },
  {
    id: "parking-access",
    title: "Smart Vehicle Access Control Platform",
    shortDesc: "Intelligent access for private or restricted areas.",
    fullDesc:
      '"Rolling Program" is an intelligent vehicle access platform designed for private or restricted areas, offering top-tier security and convenience. Utilizing ALPR technology, the vehicle\'s license plate serves as the sole credential for access.',
    image:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=800",
    themeColor: "rp-yellow",
    features: [
      "Enhanced Security: Precise control through intelligent blacklist and whitelist management.",
      "Contactless Access: Authorized vehicles enter seamlessly without waiting or remote controls.",
      "Data Visualization: Complete tracking and analysis for comprehensive management visibility.",
    ],
    targetClients:
      "Gated Communities, Industrial Facilities, Warehouses & Logistics Centers, Private Parks, Construction Sites.",
    products: [
      {
        name: "GateKeeper Pro",
        description:
          "Heavy-duty, high-speed automated barrier arm for high-traffic zones.",
        image:
          "https://images.unsplash.com/photo-1588362951121-3ee319b018b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=200",
      },
      {
        name: "PlateRead Edge",
        description:
          "Weatherproof camera system with onboard plate recognition processing.",
        image: PlateReadEdgeImage.src,
      },
    ],
  },
  {
    id: "semiconductor-control",
    title: "Semiconductor Fab Sensing & Control Solution",
    shortDesc: "Powered by partner Microprogram Information Co., Ltd.",
    fullDesc:
      'This solution is provided by our partner, "Microprogram Information Co., Ltd.," and is specifically designed for the semiconductor industry. Centered on the "SemiSensor" brand of high-precision, industrial-grade sensors, it provides reliable data acquisition and real-time control to enhance process stability.',
    image:
      "https://images.unsplash.com/photo-1591815302525-756a9bcc3425?auto=format&fit=crop&q=80&w=800",
    themeColor: "rp-orange",
    features: [
      "Process Environment Monitoring: Precise tracking of temp, humidity, pressure, and particles in cleanrooms.",
      "Equipment Health Monitoring: Predict failure and improve OEE through status integration.",
      "Facility System Integration: Applied in gas/chemical supply or ultra-pure water systems for safe operation.",
    ],
    targetClients:
      "Semiconductor Manufacturers, OSAT (Outsourced Semiconductor Assembly and Test) companies, and related equipment and material suppliers.",
    products: [
      {
        name: "SemiCore Controller",
        description:
          "Robust edge computing unit for real-time equipment interfacing.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200",
      },
      {
        name: "YieldGuard Module",
        description:
          "AI-driven anomaly detection system for early defect identification.",
        image:
          "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=200",
      },
    ],
  },
];

export const TRUST_ITEMS = [
  {
    text: "Hands-Free ALPR Automation",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    text: "Smart Whitelist & Blacklist Rules",
    icon: <Lock className="w-6 h-6" />,
  },
  { text: "Instant Searchable Logs", icon: <Search className="w-6 h-6" /> },
  {
    text: "Traffic Patterns & Analytics",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    text: "Optional Payment Kiosk Integration",
    icon: <CreditCard className="w-6 h-6" />,
  },
  {
    text: "Centralized Multi-Site Dashboard",
    icon: <Globe className="w-6 h-6" />,
  },
];

export const TARGET_SECTORS = [
  { name: "Gated Communities & HOAs", icon: <Users className="w-8 h-8" /> },
  {
    name: "Apartments & Multi-Family",
    icon: <Building2 className="w-8 h-8" />,
  },
  { name: "Commercial & Industrial", icon: <Warehouse className="w-8 h-8" /> },
  { name: "Self-Storage & Warehouses", icon: <Cpu className="w-8 h-8" /> },
  { name: "Parking Operators & Garages", icon: <Truck className="w-8 h-8" /> },
  { name: "Construction Sites", icon: <Construction className="w-8 h-8" /> },
  { name: "Campuses & Private Roads", icon: <School className="w-8 h-8" /> },
];
