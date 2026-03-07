import React from "react";
import { Clock, Star, UsersRound, Shield, CheckCircle2 } from "lucide-react";

const Chose = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed & Insured",
      desc: "Fully licensed technicians with comprehensive insurance coverage for your peace of mind.",
    },
    {
      icon: <UsersRound className="w-8 h-8" />,
      title: "Family-Owned",
      desc: "Locally owned and operated family business serving our community for over 15 years.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "5-Star Rated",
      desc: "Consistently rated 5 stars by our customers for quality service and reliability.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Response",
      desc: "Emergency response within 60 minutes, with upfront pricing and no hidden fees.",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Happy Customers", value: "1,000+" },
    { label: "Emergency Service", value: "24/7" },
    { label: "Response Time", value: "45min" },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EFAC19]/10 text-[#EFAC19] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" /> Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A]">
            HS Emergency Services
          </h2>
          <p className="text-[#717182] text-lg md:text-xl max-w-2xl mx-auto">
            Trust, reliability, and emergency expertise you can count on when it matters most.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group relative bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle hover accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#EFAC19] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="bg-gray-50 text-[#EFAC19] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#EFAC19] group-hover:text-white transition-colors duration-300">
                {f.icon}
              </div>
              
              <h3 className="font-bold text-xl mb-3 text-[#1A1A1A]">{f.title}</h3>
              <p className="text-[#717182] leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section - Reimagined for a "Pro" look */}
        <div className="mt-20 bg-[#1B253A] rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          {/* Abstract background decoration */}
          <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-[#EFAC19] opacity-10 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {stats.map((s, i) => (
              <div key={i} className="text-center space-y-2">
                <p className="text-4xl md:text-5xl font-black text-[#EFAC19]">
                  {s.value}
                </p>
                <p className="text-gray-400 font-medium uppercase tracking-widest text-xs md:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chose;