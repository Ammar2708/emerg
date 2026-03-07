"use client";

import React, { useState } from "react";
import { 
  Clock, Zap, Search, X, ArrowRight, ShieldCheck, 
  Lightbulb, Activity, ZapOff, Home, ClipboardCheck, 
  Lock, Droplets, Thermometer, Construction, Settings, 
  Plug, FileCheck, Cpu, LucideIcon 
} from "lucide-react";

interface ServiceItem {
  title: string;
  text: string;
  icon: LucideIcon; // This tells TypeScript exactly what type of icon it is
}

const Service = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const electricalServices: ServiceItem[] = [
    { title: "Electrical Installations", text: "New circuits...", icon: Construction },
    { title: "Electrical Repairs", text: "Rapid fault finding...", icon: Settings },
    { title: "Electric Heaters", text: "Installation...", icon: Thermometer },
    { title: "Lighting Repair", text: "Fixing internal...", icon: Lightbulb },
    { title: "Fused Spurs", text: "Safe installation...", icon: Zap },
    { title: "Electric Radiators", text: "Maintenance...", icon: Activity },
    { title: "EICR Reports", text: "Comprehensive...", icon: ClipboardCheck },
    { title: "NICEIC Installers", text: "Certified work...", icon: ShieldCheck },
    { title: "Electric Boilers", text: "Specialized...", icon: Droplets },
    { title: "Door Entry Systems", text: "Electronic access...", icon: Lock },
    { title: "Immersion Heaters", text: "Fixing hot water...", icon: Droplets },
    { title: "Tripping Circuits", text: "Emergency diagnostics...", icon: ZapOff },
    { title: "Full Rewiring", text: "Updating old...", icon: Home },
    { title: "Sockets", text: "Adding new power points...", icon: Plug },
    { title: "PAT Testing", text: "Portable Appliance...", icon: FileCheck },
    { title: "BMS Systems", text: "Electrical wiring...", icon: Cpu },
  ];

  const filtered = electricalServices.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#F8F9FA] py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] mb-6">
            Electrical <span className="text-[#EFAC19]">Services</span>
          </h2>
          <div className="w-24 h-2 bg-[#EFAC19] mx-auto mb-6 rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <div className="flex items-center bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden px-4">
            <Search className="text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search services..."
              className="w-full p-4 outline-none text-black bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((service, index) => {
            const IconComponent = service.icon; // Capital 'I' for component rendering
            return (
              <div key={index} className="group bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#EFAC19]/20 flex flex-col">
                <div className="w-16 h-16 bg-[#F4F5F6] rounded-2xl flex items-center justify-center text-[#EFAC19] mb-6 group-hover:bg-[#EFAC19] group-hover:text-white transition-all duration-300 transform group-hover:rotate-3">
                  <IconComponent size={32} strokeWidth={2} />
                </div>
                <h3 className="font-black text-xl text-[#1A1A1A] mb-4">{service.title}</h3>
                <p className="text-[#717182] text-sm mb-8 flex-grow">{service.text}</p>
                <button className="flex items-center gap-2 text-[#EFAC19] font-bold text-xs uppercase tracking-widest">
                  Book Now <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;