"use client";

import React, { useState } from "react";
import {
  Clock,
  Zap,
  ArrowRight,
  Phone,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";

// Ensure this path matches your file structure exactly
import { otherServices } from "@/data/otservice";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = otherServices.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#F8F9FA] pb-24 font-sans min-h-screen py-20 px-4 md:px-16">
      
      {/* HERO SECTION */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] mb-6">
          Other <span className="text-[#EFAC19]">Services</span>
        </h2>
        <div className="w-24 h-2 bg-[#EFAC19] mx-auto rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* SEARCH BAR */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <div className="flex items-center bg-white rounded-2xl shadow-sm border border-gray-100 px-4 transition-all focus-within:ring-2 focus-within:ring-[#EFAC19]/50">
            <Search className="text-gray-400 shrink-0" size={20} />
            <input
              type="text"
              placeholder="Search services (e.g. Rewiring, CCTV)..."
              className="w-full p-4 outline-none text-black bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="p-2 text-gray-400 hover:text-black transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* SERVICES GRID */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.slug}
                  className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-start"
                >
                  <div className="w-16 h-16 bg-[#F4F5F6] rounded-2xl flex items-center justify-center text-[#EFAC19] mb-8 group-hover:bg-[#EFAC19] group-hover:text-white transition-all">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="font-black text-xl text-[#1A1A1A] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-[#717182] text-sm mb-8 flex-grow leading-relaxed">
                    {service.text}
                  </p>

                  <Link
                    href={`/service/${service.slug}`}
                    className="flex items-center gap-2 text-[#EFAC19] font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
             <p className="text-xl text-gray-400 font-bold">No services found matching "{searchTerm}"</p>
          </div>
        )}

        {/* TRUST/GUARANTEE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          <div className="bg-[#D43947] p-10 rounded-[3rem] text-white flex gap-6 items-center shadow-xl">
            <Clock size={48} className="opacity-50 shrink-0" />
            <div>
              <p className="text-2xl font-black italic">24/7 Response</p>
              <p className="opacity-80">
                Our emergency teams are active 24 hours a day.
              </p>
            </div>
          </div>

          <div className="bg-[#1B253A] p-10 rounded-[3rem] text-white flex gap-6 items-center shadow-xl">
            <Zap size={48} className="text-[#EFAC19] shrink-0" />
            <div>
              <p className="text-2xl font-black italic text-[#EFAC19]">
                45-Minute Arrival
              </p>
              <p className="opacity-80">
                Fast arrival times guaranteed for emergency calls.
              </p>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 text-center">
          <p className="text-gray-400 font-bold mb-6 tracking-widest uppercase text-sm">Need immediate help?</p>
          <a
            href="tel:+442039733443"
            className="inline-flex items-center gap-4 bg-[#EFAC19] hover:bg-black text-black hover:text-white px-12 py-5 rounded-full font-black text-xl transition-all shadow-2xl hover:scale-105"
          >
            <Phone fill="currentColor" size={24} /> 020 3973 3443
          </a>
        </div>

      </div>
    </div>
  );
};

export default Page;