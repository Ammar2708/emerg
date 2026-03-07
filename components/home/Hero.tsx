import React from "react";

const Hero = () => {
  return (
    <div className="text-white text-center">
      <div
        className="relative bg-center bg-cover md:min-h-[90vh] min-h-[70vh] flex flex-col justify-center items-center space-y-5 px-4"
        style={{ backgroundImage: "url(/bg1.webp)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 md:space-y-9 space-y-4 md:p-5 max-w-5xl">

          <p className="font-heading text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight">
            24/7 Emergency Electrical Services
          </p>

          <p className="font-heading text-xl md:text-3xl lg:text-4xl font-semibold text-[#f4f4f4]">
            Immediate Response
          </p>

          <p className="text-base md:text-xl lg:text-2xl text-[#b9b9bf] leading-relaxed">
            Licensed professionals arrive within 45 minutes. No hidden fees,
            transparent pricing and emergency service you can trust.
          </p>

          {/* Button */}
          <div className=" md:block pt-4">
            <a href="tel:+1234567890">
              <button className="font-heading bg-[#EFAC19] hover:bg-[#ff4400] text-black font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg hover:scale-105">
                Call Now
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;