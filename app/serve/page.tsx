"use client"

import { MapPin, Clock, Phone } from "lucide-react"

export default function ServiceArea() {
  // Array of areas - no type changes needed as TS infers string[]
  const areas = [
    "Balham", "Clapham", "Wandsworth", "Stanwell",
    "Thornton Heath", "Croydon", "Streatham", "Brixton",
    "Battersea", "Putney", "Wimbledon", "Richmond",
    "Kingston", "Chelsea", "Fulham", "Kensington"
  ]

  return (
    <section className="py-20 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#EFAC19]/10 text-[#EFAC19] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">
            <MapPin size={16} /> Coverage
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1A1A1A]">
            Our Service Area
          </h1>
          <p className="text-[#717182] text-lg md:text-xl">
            We proudly provide 24/7 emergency electrical and construction services 
            across London and the surrounding boroughs.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT SIDE - Info & Areas */}
          <div className="flex flex-col justify-between space-y-10">
            
            <div className="space-y-8">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-8 h-1 bg-[#EFAC19] rounded-full"></span>
                Areas We Cover
              </h2>
              
              {/* Service Areas Grid */}
              <div className="grid grid-cols-2 gap-4">
                {areas.map((area) => (
                  <div 
                    key={area} // Changed from index to area name for better React reconciliation
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-50 hover:border-[#EFAC19]/30 hover:bg-[#FDF8EE] transition-all duration-300 group"
                  >
                    <div className="bg-[#EFAC19]/10 p-1.5 rounded-lg group-hover:bg-[#EFAC19] group-hover:text-white transition-colors">
                      <MapPin size={16} className="text-[#EFAC19] group-hover:text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm md:text-base">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Promise Card */}
            <div className="bg-[#1B253A] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-[#EFAC19] opacity-10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#EFAC19] p-3 rounded-2xl">
                    <Clock className="text-black h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">45-Minute Response</h3>
                    <p className="text-[#EFAC19] text-xs font-bold uppercase tracking-widest">Emergency Guarantee</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Our technicians are strategically stationed throughout London to ensure we reach you in under 45 minutes, 365 days a year.
                </p>

                <a href="tel:02039733443" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-[#EFAC19] transition-all">
                  <Phone size={18} />
                  Check Availability
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Fixed Google Map */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white relative min-h-[400px]">
            <iframe
              // Fixed the URL to a standard Google Maps Embed URL
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.1473666065!2d-0.2416815372343619!3d51.52877184048702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Map Overlay Badge */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100 hidden sm:block">
                <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Engineers Active Now
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}