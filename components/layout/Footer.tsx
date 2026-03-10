import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";


const Footer = () => {
  return (
    <div className="w-full">

      {/* Brand Logos Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-12">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8">

            {["/a2.webp", "/a3.webp", "/a4.webp", "/a6.webp"].map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt={`Brand ${i}`}
                width={140}
                height={80}
                className="h-12 sm:h-16 md:h-20 w-auto object-contain transition duration-300 hover:scale-105"
              />
            ))}

          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#1B253A] text-[#D1D4D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo + Description */}
          <div>
            <Image src="/logo.png" alt="Logo" width={180} height={80} />
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              We have NICEIC qualified electricians providing fast,
              dependable 24/7 service across London.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl text-white font-semibold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Service Area", href: "/serve" },
                { name: "Electrical Services", href: "/service" },
                { name: "Other Services", href: "/otserve" },
                { name: "Contact", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-[#EFAC19] transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
         <div>
  <h3 className="text-lg sm:text-xl text-white font-semibold mb-5">
    Services
  </h3>

  <ul className="space-y-3 text-sm">
    {[
      { name: "Rewiring", slug: "full-rewiring" },
      { name: "Fault Finding", slug: "electrical-repairs" },
      { name: "RCD Tripping", slug: "rcd-tripping" },
      { name: "Fuse Board Replacement", slug: "fuse-board-replacement" },
      {
        name: "Electrical Installation Condition Report",
        slug: "electrical-installations",
      },
    ].map((service, j) => (
      <li key={j}>
        <Link
          href={`/service/${service.slug}`}
          className="hover:text-[#EFAC19] transition duration-300"
        >
          {service.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl text-white font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-sm">

              <a
                href="tel:+442039733443"
                className="flex items-center gap-3 hover:text-[#EFAC19] transition"
              >
                <Phone size={18} className="text-[#EFAC19]" />
                020 3973 3443
              </a>

              <a
                href="mailto:info@hsconstructionandelectrical.co.uk"
                className="flex items-center gap-3 hover:text-[#EFAC19] transition break-all"
              >
                <Mail size={18} className="text-[#EFAC19]" />
                info@hsconstructionandelectrical.co.uk
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#EFAC19] mt-1 shrink-0" />
                <span className="leading-relaxed">
                  Unit 1, 187 Parchmore Road, Thornton Heath,
                  London CR7 8HD, United Kingdom
                </span>
              </div>
            </div>

            {/* Call Button */}
            <div className="mt-6">
              <a href="tel:02039733443">
                <button className="w-full bg-[#EFAC19] hover:bg-orange-500 text-black font-semibold py-2.5 rounded-full transition duration-300 shadow-md hover:scale-105">
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 text-center py-4 text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} HS Construction and Electrical Group Ltd.
          All rights reserved.
        </div>
      </footer>
      <a
              href="tel:02039733443"
              className="fixed bottom-6 right-6 bg-[#EFAC19] text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg hover:scale-110 transition animate-bounce hover:animate-ping hover:bg-[#ff4400]"
            >
              <Phone size={28} />
            </a>
    </div>
  );
};

export default Footer;