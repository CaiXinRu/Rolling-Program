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
}

export const SYSTEMS: SystemData[] = [
  {
    id: "smart-parking",
    title: "Smart Parking System",
    shortDesc: "Intelligent space management and automated billing.",
    fullDesc:
      "Revolutionize your parking facilities with our cutting-edge Smart Parking System. Utilizing advanced IoT sensors and real-time data analytics, we optimize space utilization, reduce congestion, and provide a frictionless experience for users while maximizing revenue for operators.",
    image: "https://picsum.photos/seed/smartpark/800/600",
    themeColor: "rp-red",
    features: [
      "Real-time stall availability tracking",
      "Dynamic pricing & automated billing",
      "Mobile app integration for reservation",
      "Comprehensive data analytics dashboard",
    ],
    products: [
      {
        name: "RollPark Node",
        description:
          "High-precision ceiling or floor-mounted ultrasonic/magnetic sensor.",
        image: "https://picsum.photos/seed/node1/200/200",
      },
      {
        name: "ParkVision Kiosk",
        description:
          "Interactive, durable pay-on-foot station with multi-payment support.",
        image: "https://picsum.photos/seed/kiosk2/200/200",
      },
      {
        name: "SpaceFlow Cloud",
        description:
          "Centralized management software for multi-site monitoring.",
        image: "https://picsum.photos/seed/cloud3/200/200",
      },
    ],
  },
  {
    id: "semiconductor-control",
    title: "Semiconductor Control System",
    shortDesc: "Precision automation for high-yield manufacturing.",
    fullDesc:
      "In the high-stakes environment of semiconductor manufacturing, precision is everything. Our control systems integrate seamlessly with existing FAB infrastructures to automate wafer handling, maintain strict environmental controls, and ensure SECS/GEM compliance, driving unprecedented yield rates.",
    image: "https://picsum.photos/seed/semicond/800/600",
    themeColor: "rp-orange",
    features: [
      "Sub-millimeter automated wafer handling",
      "Real-time defect detection integration",
      "Strict SECS/GEM protocol compliance",
      "Micro-environmental condition monitoring",
    ],
    products: [
      {
        name: "SemiCore Controller",
        description:
          "Robust edge computing unit for real-time equipment interfacing.",
        image: "https://picsum.photos/seed/semicore1/200/200",
      },
      {
        name: "WaferTrack Logic",
        description:
          "Advanced routing software to optimize lot movement and reduce bottlenecks.",
        image: "https://picsum.photos/seed/wafer2/200/200",
      },
      {
        name: "YieldGuard Module",
        description:
          "AI-driven anomaly detection system for early defect identification.",
        image: "https://picsum.photos/seed/yield3/200/200",
      },
    ],
  },
  {
    id: "parking-access",
    title: "Parking Access Control System",
    shortDesc: "Secure, seamless entry and exit management.",
    fullDesc:
      "Ensure secure and efficient vehicle throughput with our advanced Access Control Systems. Combining state-of-the-art ALPR technology with robust physical barriers, we provide tailored solutions for commercial, residential, and high-security facilities, ensuring only authorized access while maintaining flow.",
    image: "https://picsum.photos/seed/accessctrl/800/600",
    themeColor: "rp-yellow",
    features: [
      "High-accuracy ALPR (Automatic License Plate Recognition)",
      "Long-range RFID and NFC mobile access",
      "High-speed barrier gate synchronization",
      "Integrated visitor management portal",
    ],
    products: [
      {
        name: "GateKeeper Pro",
        description:
          "Heavy-duty, high-speed automated barrier arm for high-traffic zones.",
        image: "https://picsum.photos/seed/gatekeeper1/200/200",
      },
      {
        name: "PlateRead Edge",
        description:
          "Weatherproof camera system with onboard plate recognition processing.",
        image: "https://picsum.photos/seed/plateread2/200/200",
      },
      {
        name: "AccessHub Manager",
        description:
          "Web-based platform for issuing credentials and managing tenant access.",
        image: "https://picsum.photos/seed/accesshub3/200/200",
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
