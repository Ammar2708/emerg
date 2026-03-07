import React from "react";
import { 
  Clock, 
  Zap, 
  Wrench, 
  Hammer, 
  Thermometer, 
  Lightbulb, 
  ShieldCheck, 
  Heater ,
  Settings,
} from "lucide-react";

const Serve = () => {
  const services = [
    {
      title: "Electrical installations",
      text: "Emergency electrical repairs and safety inspections.",
      // Hammer/Wrench combo feels like "Installation"
      icon: <Settings className="w-10 h-10 text-black" />, 
    },
    {
      title: "Electrical repairs",
      text: "Safe solutions for all your electrical problems.",
      icon: <Wrench className="w-10 h-10 text-black" />,
    },
    {
      title: "Electric Heaters",
      text: "Stay warm with reliable heater service.",
      icon: <Thermometer className="w-10 h-10 text-black" />,
    },
    {
      title: "Lighting Repair",
      text: "Bright solutions for lighting problems.",
      icon: <Lightbulb className="w-10 h-10 text-black" />,
    },
    {
      title: "Fused Spurs",
      text: "Safe fuse repair you can trust.",
      icon: <ShieldCheck className="w-10 h-10 text-black" />,
    },
    {
      title: "Electric Radiators",
      text: "Professional radiator repair service.",
      icon: <Heater className="w-10 h-10 text-black" />,
    },
  ];

  return (
    <div className="text-center bg-[#F5F6F7] px-4 py-16 md:px-16">
      {/* Header */}
      <h2 className="text-3xl md:text-5xl font-bold">Emergency Services</h2>
      <p className="text-[#717182] text-base md:text-xl pt-5 max-w-2xl mx-auto">
        Professional technicians ready to handle any emergency situation with
        bold expertise and approved by NICEIC
      </p>

      {/* Services Grid */}
      <div className="flex flex-wrap gap-8 justify-center pt-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-[2rem] flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full sm:w-[300px]"
          >
            {/* Professional Circular Icon Badge */}
            <div className="bg-[#EFAC19] w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-inner">
              {service.icon}
            </div>
            
            <h3 className="font-bold text-xl mb-3">{service.title}</h3>
            <p className="text-[#717182] text-sm leading-relaxed mb-6 flex-grow">
              {service.text}
            </p>
            
            <button className="bg-[#EFAC19] hover:bg-black hover:text-white text-black font-bold px-8 py-2.5 rounded-full transition-colors duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a href="/service">
          <button className="bg-[#EFAC19] hover:bg-black hover:text-white text-black font-bold px-10 py-3 rounded-full transition-all duration-300 shadow-lg cursor-pointer">
            Show more
          </button>
        </a>
      </div>

      {/* Hero Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
        <div className="bg-[#E84D59] text-white p-10 rounded-[2.5rem] flex flex-col items-center hover:brightness-110 transition duration-300">
          <div className="bg-white/20 p-4 rounded-full mb-4">
            <Clock className="w-10 h-10" />
          </div>
          <p className="text-2xl font-bold">24/7 Availability</p>
          <p className="text-lg opacity-90 mt-2">
            Emergency services available around the clock, every day
          </p>
        </div>

        <div className="bg-[#4B7FA0] text-white p-10 rounded-[2.5rem] flex flex-col items-center hover:brightness-110 transition duration-300">
          <div className="bg-white/20 p-4 rounded-full mb-4">
            <Zap className="w-10 h-10" />
          </div>
          <p className="text-2xl font-bold">45-Minute Response</p>
          <p className="text-lg opacity-90 mt-2">
            Fast emergency response within 45 minutes of your call
          </p>
        </div>
      </div>
    </div>
  );
};

export default Serve;