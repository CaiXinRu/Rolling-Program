"use client";

import {
  BarChart3,
  Briefcase,
  Building2,
  Construction,
  Cpu,
  CreditCard,
  Globe,
  Hand,
  Hospital,
  Landmark,
  Lock,
  School,
  Search,
  ShieldCheck,
  ShoppingBag,
  Store,
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
  /** 若有提供則以影片取代主視覺圖片 */
  video?: string;
  features: string[];
  products: SystemProduct[];
  themeColor: string;
  targetClients: string;
  partnerOpportunity: {
    name: string;
    icon: React.ReactNode;
    description: string;
  }[];
  testimonials: {
    customerName: string;
    feedback: string;
    jobTitle: string;
    imageId: string;
  }[];
}

export const SYSTEMS: SystemData[] = [
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
        image: "/images/plateRead-edge.png",
      },
    ],
    partnerOpportunity: [
      {
        name: "Gated Communities & HOAs",
        icon: <Users className="w-8 h-8" />,
        description:
          "Enhance community security, streamline visitor management, and create a more convenient living experience for residents with intelligent access solutions.",
      },
      {
        name: "Apartments & Multi-Family",
        icon: <Building2 className="w-8 h-8" />,
        description:
          "Implement automated, secure access control to boost tenant satisfaction and streamline property management for your apartment buildings.",
      },
      {
        name: "Commercial & Industrial",
        icon: <Warehouse className="w-8 h-8" />,
        description:
          "From employees and visitors to cargo vehicles, strengthen access control with automated workflows to optimize your operational security and logistical efficiency.",
      },
      {
        name: "Self-Storage & Warehouses",
        icon: <Cpu className="w-8 h-8" />,
        description:
          "Provide customers with secure, convenient 24/7 self-access, while enhancing overall facility security and management effectiveness.",
      },
      {
        name: "Construction Sites",
        icon: <Construction className="w-8 h-8" />,
        description:
          "Protect your valuable on-site assets and prevent unauthorized entry with strict access controls for both personnel and vehicles.",
      },
      {
        name: "Campuses & Private Roads",
        icon: <School className="w-8 h-8" />,
        description:
          "Effectively manage vehicle access and monitor traffic on campuses and private roads, creating a safer, more orderly environment for students, faculty, staff, and visitors.",
      },
    ],
    testimonials: [
      {
        customerName: "Sarah Jenkins",
        feedback:
          "Rolling Program turned chaotic gate logs into instant, searchable intelligence—security and operations are night and day better.",
        jobTitle: "Property Manager, HOA",
        imageId: "HOA",
      },
      {
        customerName: "Nomi Anderson",
        feedback:
          "We cut staffing needs while gaining real analytics on traffic and repeats. Reporting is effortless now.",
        jobTitle: "Ops Director, Multi-Family",
        imageId: "Ops",
      },
    ],
  },
  {
    id: "auto-parking",
    title: "Automated Parking Management Solution",
    shortDesc: "Achieve fully automated and unmanned parking management.",
    fullDesc:
      "This solution is specifically designed for public or commercial parking facilities, aiming to achieve fully automated and unmanned management. Based on an AI-driven Automatic License Plate Recognition (ALPR) system, vehicles can enter and exit without stopping, taking a ticket, or touching any equipment.",
    image: "/images/auto-parking-pic.png",
    video: "/images/auto-parking.mp4",
    themeColor: "rp-orange",
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
        image: "/images/license-plate-recognition.png",
      },
      {
        name: "ParkVision Payment Kiosk",
        description:
          "Interactive pay-on-foot station with multi-payment support.",
        image: "/images/parkVision-payment-kiosk.png",
      },
    ],
    partnerOpportunity: [
      {
        name: "Manual Operations",
        icon: <Hand className="w-8 h-8" />,
        description:
          "Say goodbye to tedious manual fee collection and ticket management. Our system minimizes human error while maximizing and providing full transparency for your revenue.",
      },
      {
        name: "Markets",
        icon: <Store className="w-8 h-8" />,
        description:
          "Effortlessly handle the high traffic and short-term parking demands of markets. Provide a quick and easy payment process to increase parking space turnover and make shopping easier for your customers.",
      },
      {
        name: "Malls",
        icon: <ShoppingBag className="w-8 h-8" />,
        description:
          "Seamlessly integrate the parking and shopping experience with support for diverse payment methods and retail validation.",
      },
      {
        name: "Offices",
        icon: <Briefcase className="w-8 h-8" />,
        description:
          "Offer convenient monthly parking solutions for employees while simplifying the validation process for visitors, enhancing your corporate image and operational efficiency.",
      },
      {
        name: "Government",
        icon: <Landmark className="w-8 h-8" />,
        description:
          "Provide a clear and efficient management solution for both official vehicles and the general public, improving the quality of government services.",
      },
      {
        name: "Hospitals",
        icon: <Hospital className="w-8 h-8" />,
        description:
          "In times when care is most needed, we provide the simplest, most stress-free payment options to ensure a smoother and easier experience for patients and visitors.",
      },
    ],
    testimonials: [
      {
        customerName: "Michael Chen",
        feedback:
          "Transitioning to an unmanned system was the best decision for our bottom line. We’ve eliminated manual errors and now have total, real-time transparency over our revenue.",
        jobTitle: "Operations Manager, Regional Shopping Mall",
        imageId: "Manager",
      },
      {
        customerName: "Dr. Linda Zhao",
        feedback:
          "In a high-stress hospital environment, the 'no-stop' entry and diverse payment options have significantly improved the visitor experience.",
        jobTitle: "Facility Director, City Hospital",
        imageId: "Facility",
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
