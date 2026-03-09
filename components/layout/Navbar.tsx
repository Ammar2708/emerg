"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Clock } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service Area", href: "/serve" },
    { name: "Electrical Services", href: "/service" },
    { name: "Other Services", href: "/otserve" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-2xl">
      {/* Top Professional Info Bar */}
      <div className="hidden sm:flex bg-[#111827] text-[#D1D4D8] text-[10px] md:text-xs py-2 px-6 justify-between border-b border-gray-800">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-[#EFAC19]" /> 
            24/7 Emergency Response London
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:info@hsconstructionandelectrical.co.uk" className="hover:text-white transition">
            info@hsconstructionandelectrical.co.uk
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#1B253A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-90 transition">
            <Image 
              src="/logo.png" 
              alt="HS Construction and Electrical Logo" 
              width={180} 
              height={80} 
              priority // Added priority since this is "above the fold"
              className="w-auto h-10 md:h-12 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6 xl:gap-8 font-semibold text-sm uppercase tracking-wide">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="relative group py-2"
              >
                <span className="group-hover:text-[#EFAC19] transition duration-300">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#EFAC19] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Call Button (Desktop) */}
          <div className="hidden md:block">
            <a href="tel:02039733443">
              <button className="group bg-[#EFAC19] hover:bg-white text-black font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2">
                <Phone size={18} className="group-hover:animate-bounce fill-black" />
                <span className="whitespace-nowrap">020 3973 3443</span>
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu" // Added for accessibility
              className="p-2 text-[#EFAC19] bg-white/10 rounded-lg transition-colors hover:bg-white/20"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div 
        className={`lg:hidden bg-[white] border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-medium hover:text-[#EFAC19] border-b border-gray-700/50 pb-2 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:+442039733443" className="block pt-4">
            <button className="w-full bg-[#EFAC19] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
              <Phone size={20} className="fill-black" />
              Call Emergency Line
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;