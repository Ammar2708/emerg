import React from "react";
import { Layers, Eye, Star, Award } from "lucide-react";

const Card = () => {
  const values = [
    {
      title: "Our Vision",
      text: "We are committed to raising standards of service and safety and to achieving maximum value by working in partnership with Clients, Consultants and Suppliers whilst avoiding waste and damage to the environment.",
      icon: <Eye size={32} strokeWidth={2.5} />,
    },
    {
      title: "Our Strength",
      text: "We have technical and delivery skills comparable to far larger organizations. Our preconstruction service adds value by delivering innovative solutions. We deliver quality projects on time.",
      icon: <Layers size={32} strokeWidth={2.5} />,
    },
    {
      title: "About Our Crew",
      text: "Expert staff is vital to the continued success and growth of our business. We invest in professional development to ensure our employees have the right skills to meet client demands.",
      icon: <Star size={32} strokeWidth={2.5} />,
    },
  ];

  return (
    <div className="py-20 px-6 md:px-16 bg-[#F4F5F6]">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#EFAC19] font-bold text-xs uppercase tracking-[0.2em] mb-4">
              <Award size={16} /> Excellence in Service
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-tight">
              A Strong Experience in  Electrical
            </h2>
          </div>
          <div className="hidden md:block w-24 h-1 bg-[#EFAC19] mb-4"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#EFAC19]/20"
            >
              {/* Professional Icon Badge */}
              <div className="w-16 h-16 rounded-2xl bg-[#F4F5F6] text-[#EFAC19] flex items-center justify-center mb-8 group-hover:bg-[#EFAC19] group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                {item.icon}
              </div>
              
              <h3 className="font-extrabold text-2xl mb-4 text-[#1A1A1A]">
                {item.title}
              </h3>
              
              <p className="text-[#717182] leading-relaxed text-sm md:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Subtle decorative bottom element */}
        <div className="mt-16 flex justify-center opacity-20">
            <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-[#717182]"></div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;