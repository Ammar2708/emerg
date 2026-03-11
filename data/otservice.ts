import {
  Thermometer,
  Shield,
  Hammer,
  Home,
  Wind,
  Fan,
  FileCheck,
  HardHat,
  Droplets,
  Lock,
  Flame,
  Activity,
  RefreshCw,
  Plug,
  ShieldCheck,
  Construction
} from "lucide-react";

export const otherServices = [
  {
    title: "Heating Installation",
    slug: "heating-installation",
    icon: Thermometer,
    img: "/o1.webp",
    text: "Expert central heating and smart thermostat setups.",
    description: "High-efficiency thermal solutions ranging from full central heating system design to localized radiator upgrades. We specialize in integrating smart climate controls like Nest and Hive, ensuring your heating system operates at peak energy efficiency while providing consistent, programmable warmth across all zones of your property.",
   
    certification: "Gas Safe & NICEIC Integrated"
  },
  {
    title: "CCTV Surveys",
    slug: "cctv-surveys",
    icon: Shield,
    img: "/o2.webp",
    text: "Detailed camera inspections for security and drainage.",
    description: "Advanced digital imaging surveys used for both security auditing and sub-surface fault detection. Our high-definition CCTV crawlers identify structural weaknesses, blockages, or electrical conduit damage without the need for invasive excavation, providing you with a frame-by-frame diagnostic report and a clear path for remediation.",
   
    certification: "NSI Gold Standard Imaging"
  },
  {
    title: "Door Carpentry",
    slug: "door-carpentry",
    icon: Hammer,
    img: "/o3.webp",
    text: "Specialist fire door and architectural joinery.",
    description: "Precision carpentry focusing on structural integrity and fire safety compliance. We install certified fire doors with intumescent stripping and heavy-duty closing mechanisms, ensuring your property meets strict building control regulations while maintaining high-end architectural aesthetics and sound-dampening qualities.",
    
    certification: "BM TRADA Q-Mark Certified"
  },
  {
    title: "Roofing Repairs",
    slug: "roofing-repairs",
    icon: Home,
    img: "/o4.webp",
    text: "Emergency leak response and structural maintenance.",
    description: "Rapid-response roofing interventions to prevent internal water damage and electrical short-circuits. From replacing storm-damaged tiles to heat-welded flat roof membranes, we restore the waterproof envelope of your property using weather-resistant materials designed to withstand extreme UK coastal and inland conditions.",
    
    certification: "NFRC Competent Person"
  },
  {
    title: "Air Conditioning",
    slug: "air-conditioning",
    icon: Wind,
    img: "/o5.webp",
    text: "High-efficiency split system installations.",
    description: "Advanced climate control solutions for residential bedrooms and high-density server rooms. We install whisper-quiet split systems and multi-zone VRF units that provide both rapid cooling and energy-efficient heat pump warming, featuring HEPA filtration to improve internal air quality and reduce allergens.",
   
    certification: "REFCOM F-Gas Certified"
  },
  {
    title: "Extractor Fans",
    slug: "extractor-fans",
    icon: Fan,
    img: "/o6.webp",
    text: "Powerful moisture-extraction for mold prevention.",
    description: "High-performance mechanical ventilation designed to eliminate humidity at the source. We install humidistat-controlled centrifugal fans in kitchens and wet rooms that automatically activate when moisture levels rise, preventing black mold growth and protecting your property's structural timber and paintwork.",
   
    certification: "Building Regs Doc F Compliant"
  },
  {
    title: "EICR Reports",
    slug: "eicr-reports",
    icon: FileCheck,
    img: "/o7.webp",
    text: "Official electrical safety compliance for landlords.",
    description: "A comprehensive 'MOT' for your electrical system. Our EICR inspections involve dead-testing and live-testing of every circuit to identify 'C1' (Danger Present) and 'C2' (Potentially Dangerous) faults. Essential for legal rental compliance, providing a detailed breakdown of your installation's safety status.",
   
    certification: "NICEIC Approved Inspector"
  },
  {
    title: "NICEIC Installers",
    slug: "niceic-installers",
    icon: HardHat,
    img: "/niceic.webp",
    text: "Accredited electrical installations to UK standards.",
    description: "Verified electrical works performed by Platinum-level NICEIC contractors. This ensures all work is self-certified to Part P of the Building Regulations and is covered by the NICEIC Platinum Promise, giving you total peace of mind that your installation meets the highest safety benchmarks in the UK.",
    
    certification: "NICEIC Approved Contractor"
  },
  {
    title: "Electric Boilers",
    slug: "electric-boilers",
    icon: Droplets,
    img: "/o9.webp",
    text: "Silent, energy-efficient electric boiler installs.",
    description: "The modern alternative to gas. Electric boilers are 99% efficient and eliminate the risk of Carbon Monoxide. Perfect for apartments and properties without a gas supply, our installations focus on rapid hot water recovery times and integration with existing wet heating systems for a seamless transition to electric.",
    
    certification: "G3 Unvented Hot Water"
  },
  {
    title: "Door Entry Systems",
    slug: "door-entry-systems",
    icon: Lock,
    img: "/o10.webp",
    text: "Secure audio/video intercom and fob access.",
    description: "Sophisticated access control for multi-unit residential blocks and commercial offices. We install vandal-resistant IP intercoms with smartphone integration, allowing you to view and grant access to visitors remotely, combined with encrypted fob readers to ensure only authorized personnel enter the premises.",
    
    certification: "SSAIB Security Certified"
  },
  {
    title: "Immersion Heaters",
    slug: "immersion-heaters",
    icon: Flame,
    img: "/o11.webp",
    text: "Fast repair of hot water heating elements.",
    description: "Specialist repair and replacement of faulty immersion elements and thermostats. We diagnose 'no hot water' issues quickly, checking for limescale buildup and electrical burnout, and installing high-grade Incoloy elements that offer superior corrosion resistance in hard-water areas.",
   
    certification: "Part P Electrical Safety"
  },
  {
    title: "Tripping Circuits",
    slug: "tripping-circuits",
    icon: Activity,
    img: "/o12.webp",
    text: "Expert diagnostic fault-finding for RCD trips.",
    description: "Persistent circuit tripping is a sign of an underlying safety issue. Using insulation resistance testers and earth leakage clamps, we pinpoint whether the trip is caused by a faulty appliance, dampness in the circuit, or a degraded consumer unit, providing a permanent fix rather than a temporary reset.",
    
    certification: "Advanced Diagnostic Specialist"
  },
  {
    title: "Full Rewiring",
    slug: "full-rewiring",
    icon: RefreshCw,
    img: "/o13.webp",
    text: "Complete removal of outdated wiring systems.",
    description: "Total replacement of legacy wiring with modern, safe alternatives. We strip out old rubber or lead cables and install multi-core PVC-sheathed wiring, modernizing your switches, sockets, and consumer units to handle the electrical demands of 21st-century living while ensuring full fire safety compliance.",
    
    certification: "18th Edition Full Rewire"
  },
  {
    title: "Sockets & Switches",
    slug: "sockets-switches",
    icon: Plug,
    img: "/o14.webp",
    text: "Modern power point and switch additions.",
    description: "Upgrading your interface with power. We install decorative brushed-steel or matte-black sockets and touch-sensitive switches. All installations include deep-backbox fitting to ensure flush mounting and secondary earth bonding for metal faceplates, combining high-end design with robust electrical safety.",
   
    certification: "Minor Works Certified"
  },
  {
    title: "PAT Testing",
    slug: "pat-testing",
    icon: ShieldCheck,
    img: "/o15.webp",
    text: "Portable appliance safety testing for businesses.",
    description: "Statutory safety testing of all plug-in appliances. We utilize calibrated PAT testers to check earth leakage and insulation on everything from office laptops to industrial kitchen equipment, providing you with a full asset register and pass/fail labels to satisfy HSE and insurance requirements.",
    
    certification: "IET Code of Practice Standard"
  },
  {
    title: "BMS Systems",
    slug: "bms-systems",
    icon: Construction,
    img: "/o16.webp",
    text: "Automated building management and utility optimization.",
    description: "The 'brain' of your building. We design and install Building Management Systems (BMS) that centralize control of lighting, heating, and security. By using logic-based automation, we significantly reduce energy waste and provide real-time monitoring of your property’s vital infrastructure via a single interface.",
    
    certification: "KNX / Trend Certified Partner"
  },
];