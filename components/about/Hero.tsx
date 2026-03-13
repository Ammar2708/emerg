import React from "react";
import { CheckCircle2, ShieldCheck, Users, Zap, Phone } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-[#F4F5F6] py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#EFAC19]/10 text-[#EFAC19] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
            About Our Company
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1A1A1A]">
            About Us
          </h1>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Section */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                HS Construction and Electrical <br />
                <span className="text-[#EFAC19] text-2xl md:text-3xl">(Group Ltd)</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#EFAC19] rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-[#717386] leading-relaxed">
              <p>
                For over 15 years, **HS Construction and Electrical** has been the trusted
                choice for emergency electrical, installations, and maintenance services 
                in our community. As a family-owned business, we understand the urgency 
                and stress that comes with home and commercial emergencies.
              </p>

              <p>
                Our team of **<span className="text-red-600">NICEIC </span> approved**, licensed, and experienced technicians is available 24/7
                to provide fast, reliable solutions when you need them most. We
                pride ourselves on transparent pricing, quality workmanship, and
                exceptional customer service.
              </p>
            </div>

            {/* Features with Professional Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: <ShieldCheck className="w-5 h-5" />, text: "Licensed & Bonded" },
                { icon: <Users className="w-5 h-5" />, text: "Family Owned" },
                { icon: <Zap className="w-5 h-5" />, text: "24/7 Emergency" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-[#EFAC19]">{item.icon}</div>
                  <span className="font-bold text-sm text-[#1A1A1A]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full">
            <div className="relative">
              {/* Decorative background element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#EFAC19] rounded-2xl -z-10 opacity-20 hidden md:block"></div>
              
              <img
                src="/pic1.png"
                alt="HS Construction Team at Work"
                className="w-full h-[400px] md:h-[500px] rounded-[2.5rem] object-cover shadow-2xl border-8 border-white"
              />
              
              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-50">
                <p className="text-[#EFAC19] text-3xl font-black">15+</p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Hero;