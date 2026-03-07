"use client";

import React, { useState } from "react";
import { 
  Clock, Zap, Search, X, ArrowRight, ShieldCheck, 
  Lightbulb, Activity, ZapOff, Home, ClipboardCheck, 
  Lock, Droplets, Thermometer, Construction, Settings, 
  Plug, FileCheck, Cpu
} from "lucide-react";

const Service = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const electricalServices = [
    { title: "Electrical Installations", text: "New circuits, consumer units, and full-scale power distribution for residential and commercial builds.", icon: <Construction /> },
    { title: "Electrical Repairs", text: "Rapid fault finding and repair for damaged wiring, switches, and faulty appliances.", icon: <Settings /> },
    { title: "Electric Heaters", text: "Installation and emergency repair of wall-mounted panel heaters and storage heaters.", icon: <Thermometer /> },
    { title: "Lighting Repair", text: "Fixing internal and external lighting, including LED upgrades and security floodlights.", icon: <Lightbulb /> },
    { title: "Fused Spurs", text: "Safe installation and repair of fused connection units for boilers and heavy appliances.", icon: <Zap /> },
    { title: "Electric Radiators", text: "Maintenance and installation of modern, energy-efficient electric radiator systems.", icon: <Activity /> },
    { title: "EICR Reports", text: "Comprehensive Electrical Installation Condition Reports for landlords and home buyers.", icon: <ClipboardCheck /> },
    { title: "NICEIC Installers", text: "Certified work by approved contractors ensuring compliance with BS7671 standards.", icon: <ShieldCheck /> },
    { title: "Electric Boilers", text: "Specialized electrical support for electric flow boilers and combined heating units.", icon: <Droplets /> },
    { title: "Door Entry Systems", text: "Electronic access control, intercom repair, and secure magnetic lock installations.", icon: <Lock /> },
    { title: "Immersion Heaters", text: "Fixing hot water issues by repairing or replacing immersion elements and thermostats.", icon: <Droplets /> },
    { title: "Tripping Circuits", text: "Emergency diagnostics for recurring RCD trips and unexplained fuse box failures.", icon: <ZapOff /> },
    { title: "Full Rewiring", text: "Updating old, dangerous wiring to meet modern safety standards and power demands.", icon: <Home /> },
    { title: "Sockets", text: "Adding new power points, USB sockets, and replacing old decorative faceplates.", icon: <Plug /> },
    { title: "PAT Testing", text: "Portable Appliance Testing to ensure workplace safety and legal compliance.", icon: <FileCheck /> },
    { title: "BMS Systems", text: "Electrical wiring and maintenance for automated Building Management Systems.", icon: <Cpu /> },
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
          <p className="text-[#717182] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            NICEIC Approved technicians providing expert installations and 24/7 
            emergency support across the greater metropolitan area.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <div className="flex items-center bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden px-4 transition-all focus-within:ring-2 focus-within:ring-[#EFAC19]">
            <Search className="text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search services (e.g. 'EICR', 'Rewiring')..."
              className="w-full p-4 outline-none text-gray-700 bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <X 
                className="cursor-pointer text-gray-400 hover:text-black transition-colors" 
                onClick={() => setSearchTerm("")} 
              />
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.length > 0 ? (
            filtered.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#EFAC19]/20 flex flex-col"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-[#F4F5F6] rounded-2xl flex items-center justify-center text-[#EFAC19] mb-6 group-hover:bg-[#EFAC19] group-hover:text-white transition-all duration-300 transform group-hover:rotate-3">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 32, strokeWidth: 2 })}
                </div>
                
                <h3 className="font-black text-xl text-[#1A1A1A] mb-4 group-hover:text-[#EFAC19] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#717182] text-sm leading-relaxed mb-8 flex-grow">
                  {service.text}
                </p>
                
                <button className="flex items-center gap-2 text-[#EFAC19] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Book Now <ArrowRight size={14} />
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-400 font-bold text-xl bg-white rounded-[3rem] border-2 border-dashed">
              No services found matching your search.
            </div>
          )}
        </div>

        {/* Support Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="bg-[#E84D59] text-white p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="bg-white/20 p-5 rounded-3xl shrink-0">
                <Clock size={44} />
            </div>
            <div className="text-center md:text-left">
              <p className="text-2xl font-black italic mb-2">24/7 Availability</p>
              <p className="opacity-90 leading-relaxed">Emergency repairs available around the clock, 365 days a year.</p>
            </div>
          </div>

          <div className="bg-[#1B253A] text-white p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="bg-[#EFAC19] text-black p-5 rounded-3xl shrink-0">
                <Zap size={44} />
            </div>
            <div className="text-center md:text-left">
              <p className="text-2xl font-black italic mb-2">45-Minute Response</p>
              <p className="opacity-90 leading-relaxed">Fast on-site arrival guaranteed for all urgent electrical faults.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;