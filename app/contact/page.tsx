"use client"

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, AlertTriangle, Clock, ShieldCheck, Headphones, Loader2 } from "lucide-react"

export default function Page() {
  // FIX: Added type <HTMLFormElement> and initial value (null)
  const form = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);

  // FIX: Defined the event type for TypeScript
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Safety check: Ensure the form reference is actually linked to the DOM
    if (!form.current) {
      alert("Form reference error. Please try again.");
      return;
    }

    setIsPending(true);

    emailjs.sendForm(
      'service_m9c3rsn', 
      'template_5vy3qqk', 
      form.current, 
      '3R2aN4QZ5TNoPtPTP'
    )
    .then((result) => {
        alert("Request sent successfully! We will contact you shortly.");
        form.current?.reset(); // Use optional chaining for safety
    }, (error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send request. Please try calling our hotline.");
    })
    .finally(() => setIsPending(false));
  };

  return (
    <section className="bg-[#1B253A] py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFAC19] opacity-5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-[#EFAC19]/10 text-[#EFAC19] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
          <Clock size={16} /> 24/7 Rapid Response
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-black tracking-tight">
          Request Service Now
        </h1>
        <p className="text-gray-400 text-lg mt-6">
          Whether it's a scheduled project or a 2 AM emergency, our NICEIC qualified team is standing by.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
        <div className="lg:col-span-7 bg-white rounded-[2.5rem] shadow-2xl p-8 sm:p-12 border border-gray-100">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-[#1A1A1A]">Service Request</h2>
            <div className="w-12 h-1.5 bg-[#EFAC19] rounded-full mt-2"></div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Full Name</label>
                <input
                  name="user_name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#EFAC19] focus:bg-white transition-all text-black"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Phone Number</label>
                <input
                  name="user_phone"
                  type="text"
                  required
                  placeholder="07xxx xxxxxx"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#EFAC19] focus:bg-white transition-all text-black"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Email Address</label>
              <input
                name="user_email"
                type="email"
                required
                placeholder="name@example.com"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#EFAC19] focus:bg-white transition-all text-black"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Nature of Issue</label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Briefly describe the emergency or electrical work required..."
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#EFAC19] focus:bg-white transition-all resize-none text-black"
              />
            </div>

            <button
              disabled={isPending}
              type="submit"
              className="w-full bg-[#EFAC19] hover:bg-[#1A1A1A] text-black hover:text-white disabled:bg-gray-400 font-black py-5 rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group"
            >
              {isPending ? <Loader2 className="animate-spin" /> : "Submit Request"}
              <ShieldCheck className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* RIGHT SIDE (Stayed the same) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#D43947] p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Phone size={32} className="animate-pulse" />
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  Live Status: Active
                </div>
              </div>
              <h3 className="text-xl font-bold opacity-90 mb-1">Emergency Hotline</h3>
              <p className="text-4xl sm:text-5xl font-black mb-6 tracking-tighter">020 3973 3443</p>
              <a href="tel:02039733443" className="block">
                <button className="w-full bg-white text-[#D43947] font-black py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg">
                  TAP TO CALL NOW
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2.5rem] text-white shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#EFAC19] p-3 rounded-2xl text-black">
                <Headphones size={24} />
              </div>
              <h3 className="text-2xl font-bold">Direct Support</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-[#EFAC19] mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-sm sm:text-base font-medium break-all">info@hsconstructionandelectrical.co.uk</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-[#EFAC19] mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Accreditation</p>
                  <p className="text-sm sm:text-base font-medium">NICEIC Approved Contractor</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#EFAC19] p-6 rounded-[2rem] flex items-center gap-5 text-black">
             <div className="shrink-0 bg-black/10 p-3 rounded-xl">
               <AlertTriangle size={32} className="text-black" />
             </div>
             <p className="text-sm font-bold leading-tight">
               Critical hazard? Skip the form and call the hotline immediately for a 30-minute arrival.
             </p>
          </div>
        </div>
      </div>
    </section>
  )
}