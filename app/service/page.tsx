
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { services } from "@/data/service";

const page = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = services.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#F8F9FA] py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] mb-6">
            Electrical <span className="text-[#EFAC19]">Services</span>
          </h2>
          <div className="w-24 h-2 bg-[#EFAC19] mx-auto rounded-full"></div>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-16 flex items-center bg-white rounded-xl shadow px-4">
          <Search className="text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search services..."
            className="w-full p-4 outline-none text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.slug}
                className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition flex flex-col"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-[#EFAC19] mb-6">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {service.text}
                </p>

                <Link
                  href={`/service/${service.slug}`}
                  className="flex items-center gap-2 text-[#EFAC19] font-bold text-xs uppercase"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default page;