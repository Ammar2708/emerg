import {
  Construction,
  Settings,
  Lightbulb,
  Home,
  Plug,
  FileCheck,
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
    warranty: "12-Month Workmanship Guarantee",
    certification: "NICEIC / Part P Compliant"
  },
  {
    title: "Electrical Repairs & Fault Finding",
    slug: "electrical-repairs",
    icon: Settings,
    img: "/pic2.webp",
    text: "Rapid fault finding and electrical repairs.",
    description:
      "When power fails, safety is the immediate priority. Our rapid-response repair team utilizes advanced diagnostic equipment, including thermal imaging and circuit tracing, to identify hidden faults—such as degraded insulation, loose neutral connections, or overloaded breakers—that standard visual inspections miss. We provide an immediate diagnostic report and on-the-spot repairs to eliminate fire hazards and restore your property’s power with minimal downtime, available 24 hours a day for true emergencies.",
    warranty: "Emergency Response Priority",
    certification: "Certified Fault-Finding Specialist"
  },
  {
    title: "Lighting Design & Repair",
    slug: "lighting-repair",
    icon: Lightbulb,
    img: "/pic3.webp",
    text: "Repair internal and external lighting.",
    description:
      "Expert restoration and optimization of indoor and outdoor lighting systems. We solve complex issues ranging from flickering LED arrays and faulty ballast units to compromised external security lighting systems. Beyond simple repairs, we provide modern energy-efficiency audits, replacing power-hungry legacy fixtures with high-output, low-consumption smart lighting solutions. This not only restores visibility but significantly enhances the security and aesthetic value of your property while lowering utility costs.",
    warranty: "High-Efficiency LED Guarantee",
    certification: "Internal & External Certified"
  },
  {
    title: "Power Socket Solutions",
    slug: "sockets",
    icon: Plug,
    img: "/pic4.webp",
    text: "Install additional power sockets.",
    description:
      "Eliminate the risk of electrical fires caused by overloaded extension leads and 'daisy-chaining.' We provide strategic power-point placement, installing high-specification sockets including integrated USB-C charging ports and heavy-duty 13A outlets for kitchens and workshops. Whether you require flush-mounted finishes for a luxury home or galvanized steel trunking for industrial durability, our installations ensure a balanced load across your ring main to prevent localized overheating and circuit tripping.",
    warranty: "Flush-Finish Guarantee",
    certification: "Load-Balanced Installation"
  },
  {
    title: "Professional PAT Testing",
    slug: "pat-testing",
    icon: FileCheck,
    img: "/pic5.webp",
    text: "Portable Appliance Testing services.",
    description:
      "Comprehensive safety compliance for businesses, landlords, and educational facilities. Our Portable Appliance Testing (PAT) goes beyond a simple visual check; we perform earth continuity, insulation resistance, and lead polarity tests to ensure every device is safe for use. Upon completion, you receive a digital asset register and a formal Certificate of Compliance, which is essential for maintaining insurance validity and meeting statutory Health & Safety obligations in the workplace.",
    warranty: "Full Compliance Documentation",
    certification: "IET Code of Practice Standard"
  },
  {
    title: "Full Property Rewiring",
    slug: "full-rewiring",
    icon: Home,
    img: "/pic6.webp",
    text: "Upgrade outdated wiring systems.",
    description:
      "A complete electrical 'heart transplant' for your property. Aging vulcanized rubber or lead-sheathed cables are significant fire risks and cannot handle the load of modern smart appliances. Our full rewiring service replaces all outdated infrastructure with high-grade, fire-retardant cabling and modern RCD-protected consumer units. This not only guarantees the safety of the occupants but also provides the necessary certification to increase your property's market value and pass rigorous home buyer surveys.",
    warranty: "Full System Certification",
    certification: "Complete 18th Edition Rewire"
  }
];