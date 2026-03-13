import {
  Construction,
  Settings,
  Lightbulb,
  Home,
  Droplets,
  Plug,
  FileCheck,
  Car,
  Camera,
  Thermometer,
  Waves,
  PhoneCall,
  Zap,
  Fan,
  Power,
  AlertTriangle,
  PanelTop,
  Lamp,
  Siren,
  ToggleLeft,
  ClipboardCheck,
  ShieldAlert,
  
  PlugZap,
  Wrench, Flame
  
} from "lucide-react";

export const services = [
  {
    title: "Electrical Installations",
    slug: "electrical-installations",
    icon: Construction,
    img: "/pic1.png",
    text: "New circuits, sockets and lighting installation.",
    description:
      "Precision-engineered electrical installations for modern residential and high-demand commercial environments. We handle everything from complete consumer unit upgrades to dedicated circuits for high-load appliances like EV chargers or electric showers. Our process involves a rigorous load-calculation to ensure your new system is future-proofed and fully compliant with 18th Edition Wiring Regulations. We prioritize clean, efficient installs that minimize structural disruption while maximizing electrical efficiency and safety.",
    
    certification: "NICEIC / Part P Compliant"
  },
  
  {
    title: "Lighting Design & Repair",
    slug: "lighting-repair",
    icon: Lightbulb,
    img: "/et1.webp",
    text: "Repair internal and external lighting.",
    description:
      "Expert restoration and optimization of indoor and outdoor lighting systems. We solve complex issues ranging from flickering LED arrays and faulty ballast units to compromised external security lighting systems. Beyond simple repairs, we provide modern energy-efficiency audits, replacing power-hungry legacy fixtures with high-output, low-consumption smart lighting solutions. This not only restores visibility but significantly enhances the security and aesthetic value of your property while lowering utility costs.",
    
    certification: "Internal & External Certified"
  },
  {
    title: "Power Socket Solutions",
    slug: "sockets",
    icon: Plug,
    img: "/et2.webp",
    text: "Install additional power sockets.",
    description:
      "Eliminate the risk of electrical fires caused by overloaded extension leads and 'daisy-chaining.' We provide strategic power-point placement, installing high-specification sockets including integrated USB-C charging ports and heavy-duty 13A outlets for kitchens and workshops. Whether you require flush-mounted finishes for a luxury home or galvanized steel trunking for industrial durability, our installations ensure a balanced load across your ring main to prevent localized overheating and circuit tripping.",
   
    certification: "Load-Balanced Installation"
  },
  {
    title: "Professional PAT Testing",
    slug: "pat-testing",
    icon: FileCheck,
    img: "/et3.webp",
    text: "Portable Appliance Testing services.",
    description:
      "Comprehensive safety compliance for businesses, landlords, and educational facilities. Our Portable Appliance Testing (PAT) goes beyond a simple visual check; we perform earth continuity, insulation resistance, and lead polarity tests to ensure every device is safe for use. Upon completion, you receive a digital asset register and a formal Certificate of Compliance, which is essential for maintaining insurance validity and meeting statutory Health & Safety obligations in the workplace.",
   
    certification: "IET Code of Practice Standard"
  },
  {
    title: "Full Property Rewiring",
    slug: "full-rewiring",
    icon: Home,
    img: "/et4.webp",
    text: "Upgrade outdated wiring systems.",
    description:
      "A complete electrical 'heart transplant' for your property. Aging vulcanized rubber or lead-sheathed cables are significant fire risks and cannot handle the load of modern smart appliances. Our full rewiring service replaces all outdated infrastructure with high-grade, fire-retardant cabling and modern RCD-protected consumer units. This not only guarantees the safety of the occupants but also provides the necessary certification to increase your property's market value and pass rigorous home buyer surveys.",
   
    certification: "Complete 18th Edition Rewire"
  },
 {
  title: "Fuse Board Replacement",
  slug: "fuse-board-replacement",
  icon: Plug,
  img: "/et5.webp",
  text: "Upgrade outdated fuse boards with modern safety protection.",
  description:
    "Your fuse board (consumer unit) is the control center of your electrical system. Older fuse boards often lack modern safety features such as RCD protection, which increases the risk of electric shock and fire. Our professional fuse board replacement service upgrades your system to a modern 18th Edition compliant consumer unit with advanced circuit protection. This improves safety, reliability, and ensures your electrical installation meets current UK regulations.",
 
  certification: "18th Edition Consumer Unit Installation"
},
{
  title: "RCD Tripping",
  slug: "rcd-tripping",
  icon: Plug,
  img: "/et6.webp",
  text: "Fast diagnosis and repair for frequently tripping RCD circuits.",
  description:
    "If your RCD keeps tripping, it usually means there is a fault in your electrical system such as a damaged appliance, faulty wiring, or moisture in circuits. Our qualified electricians quickly diagnose the cause of RCD tripping using professional testing equipment. We identify the faulty circuit or appliance and safely resolve the issue, restoring power and ensuring your electrical system remains fully protected against shocks and electrical fires.",
  
  certification: "NICEIC Approved Electrical Testing"
},
{
  title: "EICR (Electrical Installation Condition Report)",
  slug: "electrical-installation-condition-report",
  icon: FileCheck,
  img: "/et7.webp",
  text: "Professional EICR testing to assess the safety and condition of your electrical installation.",
  description:
    "An Electrical Installation Condition Report (EICR) is a detailed inspection of your property's electrical system to ensure it meets current safety standards. Our NICEIC approved electricians carry out comprehensive testing of wiring, circuits, consumer units, earthing, and electrical connections. We identify potential hazards, deterioration, and non-compliant installations, providing a full report with recommendations for any necessary remedial work. EICR certificates are essential for landlords, property sales, insurance requirements, and ensuring the safety of occupants.",
 
  certification: "NICEIC Approved Electrical Inspection & Testing"
},
{
  title: "EV (Electric Vehicle) Charger Installations",
  slug: "ev-charger-installations",
  icon: Car,
  img: "/et8.webp",
  text: "Professional installation of home and commercial EV charging points.",
  description:
    "We provide safe and professional EV (Electric Vehicle) charger installation for homes, workplaces, and commercial properties. Our qualified electricians assess your electrical system, install dedicated circuits, and ensure the charger is correctly connected to your consumer unit. We install reliable and efficient charging points compatible with all major electric vehicle brands, allowing you to charge your car quickly and safely at your property. All installations are carried out in compliance with current electrical regulations for maximum safety and performance.",
  
  certification: "NICEIC Approved EV Charger Installation"
},
{
  title: "CCTV Installation",
  slug: "cctv-installation",
  icon: Camera,
  img: "/et18.webp",
  text: "Professional CCTV camera installation to protect your home or business.",
  description:
    "We provide professional CCTV installation services for homes, offices, shops, and commercial properties. Our experienced technicians design and install high-quality surveillance systems that allow you to monitor your property 24/7. We install indoor and outdoor security cameras with clear HD recording, remote mobile viewing, motion detection, and secure storage. Our systems help deter intruders, improve safety, and give you complete peace of mind knowing your property is protected at all times.",
  
  certification: "Professional Security System Installation"
},
{
  title: "Thermostat Installation",
  slug: "thermostat-installation",
  icon: Thermometer,
  img: "/et10.webp",
  text: "Professional thermostat installation to improve comfort and energy efficiency.",
  description:
    "We provide professional thermostat installation and replacement services for homes and commercial properties. Our electricians install modern and smart thermostats that allow you to control your heating system more efficiently. Whether you are upgrading to a programmable thermostat or installing a smart thermostat with mobile control, we ensure safe wiring and proper configuration. A properly installed thermostat helps regulate indoor temperature, reduce energy consumption, and improve overall comfort in your property.",
  
  certification: "Professional Electrical Heating Control Installation"
},
{
  title: "Electric Underfloor Heating Installations",
  slug: "electric-underfloor-heating-installations",
  icon: Waves,
  img: "/e11.webp",
  text: "Efficient electric underfloor heating installation for comfortable and evenly heated spaces.",
  description:
    "We provide professional electric underfloor heating installation for homes, bathrooms, kitchens, and commercial properties. Our qualified electricians install reliable heating systems beneath your flooring to deliver consistent and energy-efficient warmth throughout the room. Electric underfloor heating removes the need for bulky radiators, improves heat distribution, and enhances comfort during colder months. We ensure safe electrical connections, proper insulation, and precise thermostat integration for optimal performance and energy efficiency.",
 
  certification: "Professional Electric Underfloor Heating Installation"
},
{
  title: "Intercom Installation",
  slug: "intercom-installation",
  icon: PhoneCall,
  img: "/et11.webp",
  text: "Professional intercom system installation for secure and convenient communication.",
  description:
    "We provide professional intercom installation services for residential buildings, offices, apartments, and commercial properties. Our technicians install modern audio and video intercom systems that allow you to communicate with visitors and control access to your property safely. Whether you need a simple door entry intercom or an advanced video intercom system with mobile connectivity, we ensure reliable wiring, clear communication, and seamless integration with your building's security setup.",
 
  certification: "Professional Intercom & Access Control Installation"
},
{
  title: "Circuit Breaker Repair",
  slug: "circuit-breaker-repair",
  icon: Zap,
  img: "/et5.webp",
  text: "Expert circuit breaker repair to restore safe and reliable power in your property.",
  description:
    "We provide professional circuit breaker repair services for homes, apartments, and commercial properties. Our electricians diagnose and repair faulty breakers, tripping circuits, and damaged wiring to ensure your electrical system operates safely.",
  
  certification: "Certified Electrical Troubleshooting & Breaker Repair"
},
{
  title: "Ceiling Fan Installation",
  slug: "ceiling-fan-installation",
  icon: Fan,
  img: "/et15.webp",
  text: "Professional ceiling fan installation for improved comfort and energy efficiency.",
  description:
    "We offer safe and professional ceiling fan installation services ensuring secure mounting, proper wiring, and smooth operation.",
  
  certification: "Professional Electrical Fixture Installation"
},
{
  title: "No Power in Part of House",
  slug: "partial-power-outage-repair",
  icon: Power,
  img: "/et19.webp",
  text: "Fast diagnosis and repair for power loss in specific areas of your home.",
  description:
    "Our electricians identify wiring issues, tripped breakers, or damaged circuits and restore power safely.",
  
  certification: "Certified Electrical Fault Diagnosis"
},
{
  title: "Flickering Lights",
  slug: "flickering-lights-repair",
  icon: Lightbulb,
  img: "/et16.webp",
  text: "Reliable repair for flickering or unstable lighting in your home or office.",
  description:
    "We inspect wiring, switches, and circuits to eliminate flickering lights and restore stable illumination.",
  
  certification: "Professional Electrical Lighting Repair"
},
{
  title: "Overloaded Circuit Breakers",
  slug: "overloaded-circuit-breaker-repair",
  icon: AlertTriangle,
  img: "/et9.webp",
  text: "Professional solutions for overloaded circuits and frequently tripping breakers.",
  description:
    "Our electricians analyze electrical load and provide solutions like circuit balancing or breaker replacement.",
 
  certification: "Certified Electrical Load Management"
},
{
  title: "Electrical Panel Repair",
  slug: "electrical-panel-repair",
  icon: PanelTop,
  img: "/et5.webp",
  text: "Expert electrical panel repair to maintain safe power distribution.",
  description:
    "We repair damaged panels, faulty breakers, and loose connections to ensure safe electricity flow.",
  
  certification: "Professional Electrical Panel Service"
},
{
  title: "LED Upgrade",
  slug: "led-upgrade",
  icon: Lamp,
  img: "/et20.webp",
  text: "Upgrade your lighting to energy-efficient LED solutions for better brightness and lower power bills.",
  description:
    "We replace outdated lighting with modern LED systems that save energy and improve brightness.",
  
  certification: "Certified LED Lighting Installation"
},
{
  title: "Smoke Detector Installation",
  slug: "smoke-detector-installation",
  icon: Siren,
  img: "/et14.webp",
  text: "Professional smoke detector installation to improve safety and early fire detection.",
  description:
    "Our technicians install and wire smoke detectors correctly to ensure reliable fire detection.",
  
  certification: "Professional Fire Safety Device Installation"
},
{
  title: "Dimmer Switches",
  slug: "dimmer-switch-installation",
  icon: ToggleLeft,
  img: "/et13.webp",
  text: "Install modern dimmer switches to control lighting brightness and create the perfect ambiance.",
  description:
    "Dimmer switches allow flexible lighting control and help reduce energy consumption.",
  
  certification: "Certified Lighting Control Installation"
},
{
  title: "Annual Electrical Inspection",
  slug: "annual-electrical-inspection",
  icon: ClipboardCheck,
  img: "/et7.webp",
  text: "Comprehensive annual electrical inspections to keep your property safe and compliant.",
  description:
    "We inspect wiring, panels, outlets, and breakers to identify potential electrical hazards early.",
  
  certification: "Certified Electrical Safety Inspection"
},
{
  title: "Emergency Lighting Installation",
  slug: "emergency-lighting-installation",
  icon: ShieldAlert,
  img: "/e13.webp",
  text: "Professional emergency lighting installation to ensure safety during power outages.",
  description:
    "Emergency lighting systems automatically activate during outages to help occupants safely exit buildings.",
 
  certification: "Professional Emergency Lighting Installation"
},
{
  title: "Power Outage",
  slug: "power-outage-repair",
  icon: PlugZap,
  img: "/et21.webp",
  text: "Fast troubleshooting and repair for unexpected power outages in your home or business.",
  description:
    "We diagnose electrical failures and restore power quickly and safely.",
 
  certification: "Certified Electrical Fault Diagnosis"
},
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
    title: "Electric Boilers",
    slug: "electric-boilers",
    icon: Droplets,
    img: "/o9.webp",
    text: "Silent, energy-efficient electric boiler installs.",
    description: "The modern alternative to gas. Electric boilers are 99% efficient and eliminate the risk of Carbon Monoxide. Perfect for apartments and properties without a gas supply, our installations focus on rapid hot water recovery times and integration with existing wet heating systems for a seamless transition to electric.",
    
    certification: "G3 Unvented Hot Water"
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
    title: "Electrical Repair & Fault Finding",
    slug: "electrical-repair-fault-finding",
    icon: Wrench,
    img: "/et9.webp",
    text: "Diagnosing and fixing electrical faults quickly and safely.",
    description:
      "Our electricians specialize in identifying and repairing electrical issues such as power outages, tripping circuits, faulty wiring, and malfunctioning switches or sockets. Using professional diagnostic tools, we locate faults efficiently and carry out safe, compliant repairs to restore reliable power throughout your property.",
    certification: "Minor Works Certified",
  },
  {
    title: "Fire Alarm",
    slug: "fire-alarm",
    icon: Flame,
    img: "/et17.webp",
    text: "Professional fire alarm installation and maintenance.",
    description:
      "We install and maintain reliable fire alarm systems to protect homes and businesses. Our service includes smoke detector installation, alarm system upgrades, wiring checks, and testing to ensure full compliance with safety standards. Early detection systems provide critical warning and enhance overall building safety.",
    certification: "Safety Compliance Certified",
  },

];

