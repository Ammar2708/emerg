"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <div className="text-white text-center">
      <div
        className="relative bg-center bg-cover md:min-h-[90vh] min-h-[70vh] flex flex-col justify-center items-center px-4"
        style={{ backgroundImage: "url(/bg1.webp)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 md:space-y-9 space-y-4 max-w-5xl"
        >
          <h1 className="font-heading text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight">
            24/7 Emergency Electrical Services
          </h1>

          <p className="font-heading text-xl md:text-3xl lg:text-4xl font-semibold text-[#f4f4f4]">
            Immediate Response
          </p>

          <p className="text-base md:text-xl lg:text-2xl text-[#b9b9bf] leading-relaxed">
            Licensed professionals arrive within 45 minutes. <span className="text-red-600">NICEIC</span> <span className="text-yellow-500">qulified</span> <span className="text-white">eletriction</span>,
            Transparent pricing and emergency service you can trust.
          </p>

          <div className="pt-4">
            <a href="tel:02039733443">
              <motion.button 
                // The Pulse Effect
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="font-heading bg-[#EFAC19] hover:bg-[#ff4400] text-black font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg"
              >
                Call Now
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;