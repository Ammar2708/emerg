"use client";

import  { use, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { services } from "@/data/service";
import { motion, AnimatePresence } from "framer-motion";

import { readTransformValue } from "framer-motion";





const Serve = () => {
 const [searchTerm, setSearchTerm] = useState("");
  const visibleCount = 6;

  const filtered = services.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Parent container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // FIXED easing
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="bg-[#F8F9FA] py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] mb-6">
              Electrical <span className="text-[#EFAC19]">Services</span>
            </h2>

            <div className="w-24 h-2 bg-[#EFAC19] mx-auto rounded-full mb-8"></div>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-md mx-auto"
          >
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Search for a service..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EFAC19] transition-all bg-white shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.slice(0, visibleCount).map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  layout
                  key={service.slug}
                  
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col border border-transparent hover:border-[#EFAC19]/20"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-[#EFAC19] mb-6 group-hover:bg-[#EFAC19] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                    <Icon size={30} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-[#1A1A1A] group-hover:text-[#EFAC19] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                    {service.text}
                  </p>

                  {/* Link */}
                  <Link
                    href={`/service/${service.slug}`}
                    className="flex items-center gap-2 text-[#EFAC19] font-bold text-xs uppercase tracking-wider group/link"
                  >
                    Learn More
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        {filtered.length > visibleCount && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/service"
              className="px-8 py-4 bg-[#EFAC19] text-white font-bold rounded-full hover:bg-[#d99714] transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Serve