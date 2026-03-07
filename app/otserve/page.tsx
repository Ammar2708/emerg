"use client";

import React, { useState } from "react";
import { 
  Clock, Zap, ShieldCheck, ArrowRight, Phone, 
  Thermometer, Shield, Hammer, Home, Wind, Search,
  Fan, FileCheck, HardHat, Droplets, Lock, 
  Flame, Activity, RefreshCw, Plug, Construction, X 
} from "lucide-react";
import Link from "next/link";

const page = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allServices = [
    { title: "Heating Installation", text: "Expert central heating setups, radiator replacements, and smart thermostat integration.", icon: <Thermometer className="w-8 h-8" />, category: "maintenance" },
    { title: "CCTV Surveys", text: "Detailed camera inspections for security auditing and drainage fault finding.", icon: <Shield className="w-8 h-8" />, category: "security" },
    { title: "Door Carpentry", text: "Specialist fire door fitting, frame repairs, and bespoke architectural joinery.", icon: <Hammer className="w-8 h-8" />, category: "construction" },
    { title: "Roofing Repairs", text: "Emergency leak response, tile replacement, and structural flat roof maintenance.", icon: <Home className="w-8 h-8" />, category: "construction" },
    { title: "Air Conditioning", text: "Installation of high-efficiency split systems for climate-controlled environments.", icon: <Wind className="w-8 h-8" />, category: "maintenance" },
    { title: "Extractor Fans", text: "Powerful moisture-extraction solutions to prevent mold in kitchens and bathrooms.", icon: <Fan className="w-8 h-8" />, category: "maintenance" },
    { title: "EICR Reports", text: "Official Electrical Installation Condition Reports for landlords and commercial compliance.", icon: <FileCheck className="w-8 h-8" />, category: "electrical" },
    { title: "NICEIC Installers", text: "Accredited electrical installations verified to meet current UK safety regulations.", icon: <HardHat className="w-8 h-8" />, category: "electrical" },
    { title: "Electric Boilers", text: "Silent, energy-efficient electric boiler installs for modern apartment living.", icon: <Droplets className="w-8 h-8" />, category: "maintenance" },
    { title: "Door Entry Systems", text: "Secure audio/video intercom systems and fob access control for multi-unit blocks.", icon: <Lock className="w-8 h-8" />, category: "security" },
    { title: "Immersion Heaters", text: "Fast repair of heating elements and thermostats for hot water cylinders.", icon: <Flame className="w-8 h-8" />, category: "maintenance" },
    { title: "Tripping Circuits", text: "Expert diagnostic fault-finding to resolve recurring fuse box and RCD trips.", icon: <Activity className="w-8 h-8" />, category: "electrical" },
    { title: "Full Rewiring", text: "Comprehensive domestic rewires to ensure safety and handle modern power demands.", icon: <RefreshCw className="w-8 h-8" />, category: "electrical" },
    { title: "Sockets & Switches", text: "Internal and external power point additions with decorative finish options.", icon: <Plug className="w-8 h-8" />, category: "electrical" },
    { title: "PAT Testing", text: "Safety compliance testing for portable appliances in commercial and rental spaces.", icon: <ShieldCheck className="w-8 h-8" />, category: "electrical" },
    { title: "BMS Systems", text: "Building Management Systems to automate and optimize property utilities.", icon: <Construction className="w-8 h-8" />, category: "maintenance" },
  ];

  const filteredServices = allServices.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#F8F9FA] pb-24 font-sans min-h-screen">
      {/* Hero Header */}
      <div className="bg-[#1B253A] text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#EFAC19]/20 text-[#EFAC19] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <ShieldCheck size={16} /> Accredited Excellence
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter">
            Other <span className="text-[#EFAC19]">Services</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            From emergency electrical to structural roofing, we provide 
            certified solutions for every aspect of your property.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Search Bar Container */}
        <div className="max-w-2xl mx-auto -mt-10 relative z-20 mb-20">
          <div className="bg-white p-2 rounded-3xl shadow-2xl flex items-center border border-gray-100 transition-all focus-within:ring-4 focus-within:ring-[#EFAC19]/20">
            <div className="pl-5 text-gray-400">
              <Search size={24} />
            </div>
            <input
              type="text"
              placeholder="Search for a service (e.g. 'Rewiring', 'CCTV')..."
              className="w-full p-4 text-lg bg-transparent border-none focus:outline-none text-[#1A1A1A]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="p-4 text-gray-400 hover:text-black">
                    <X size={20} />
                </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-start"
              >
                <div className="w-16 h-16 bg-[#F4F5F6] rounded-2xl flex items-center justify-center text-[#EFAC19] mb-8 group-hover:bg-[#EFAC19] group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                  {service.icon}
                </div>
                
                <h3 className="font-black text-xl text-[#1A1A1A] mb-4 leading-tight">{service.title}</h3>
                <p className="text-[#717182] text-sm mb-8 leading-relaxed flex-grow">
                  {service.text}
                </p>
                
                <Link href="/contact" className="flex items-center gap-2 text-[#EFAC19] font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
                  Get a Quote <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-gray-200">
            <p className="text-2xl font-bold text-gray-400">No services found matching "{searchTerm}"</p>
            <button onClick={() => setSearchTerm("")} className="mt-4 text-[#EFAC19] font-bold underline">Show all services</button>
          </div>
        )}

        {/* Response Guarantee Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          <div className="bg-[#D43947] p-10 rounded-[3rem] text-white flex gap-6 items-center shadow-xl">
            <Clock size={48} className="shrink-0 opacity-50" />
            <div>
              <p className="text-2xl font-black italic">24/7 Response</p>
              <p className="opacity-80">Our emergency teams are active across London 24 hours a day.</p>
            </div>
          </div>
          <div className="bg-[#1B253A] p-10 rounded-[3rem] text-white flex gap-6 items-center shadow-xl border border-white/10">
            <Zap size={48} className="shrink-0 text-[#EFAC19]" />
            <div>
              <p className="text-2xl font-black italic text-[#EFAC19]">45-Minute Arrival</p>
              <p className="opacity-80">Fast arrival times guaranteed for all emergency call-outs.</p>
            </div>
          </div>
        </div>

        {/* Footer Contact CTA */}
        <div className="mt-24 text-center">
            <p className="text-gray-500 font-bold mb-6">IMMEDIATE ASSISTANCE REQUIRED?</p>
            <a href="tel:+442039733443" className="inline-flex items-center gap-4 bg-[#EFAC19] hover:bg-black text-black hover:text-white px-12 py-5 rounded-full font-black text-xl transition-all shadow-2xl hover:scale-105">
                <Phone fill="currentColor" /> 020 3973 3443
            </a>
        </div>
      </div>
    </div>
  );
};

export default page;