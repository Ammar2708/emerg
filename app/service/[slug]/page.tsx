import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/service";
import { otherServices } from "@/data/otservice"; 
import { notFound } from "next/navigation";
import { Phone, CheckCircle2, ChevronLeft } from "lucide-react";
import { Metadata } from "next";

// Merge both data sets for global searching
const allServices = [...services, ...otherServices];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);
  
  return {
    title: `${service?.title || "Service"} | Professional 24/7 Electrician`,
    description: service?.description?.slice(0, 160),
  };
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) return notFound();

  const Icon = service.icon;

  return (
    <main className="max-w-7xl mx-auto py-12 px-6 lg:py-20 animate-in fade-in duration-500">
      {/* Navigation */}
      <Link 
        href="/service" 
        className="group flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#EFAC19] transition-all mb-10"
      >
        <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        BACK TO SERVICES
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Visual Column */}
        <div className="lg:col-span-5 lg:order-2 lg:sticky lg:top-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border-[6px] border-white bg-gray-50">
            <Image
              src={service.img} 
              alt={`${service.title} - Professional Electrician Service`}
              fill
              priority 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
              quality={90}
            />
            
          </div>
        </div>

        {/* Content Column */}
        <section className="lg:col-span-7 lg:order-1">
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#EFAC19]/10 rounded-2xl text-[#EFAC19]">
                <Icon size={38} strokeWidth={2.5} />
              </div>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-gray-100 to-transparent" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8  uppercase leading-[0.9]">
              {service.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium max-w-2xl">
              {service.description}
            </p>
          </header>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
            {[
              "NICEIC Member",
              "Response in < 45 Mins",
              "No Hidden Call-out Fees",
              "12-Month Work Guarantee"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="text-[#EFAC19] shrink-0" size={24} />
                <span className="font-bold text-gray-800 italic uppercase text-sm tracking-wide">{item}</span>
              </div>
            ))}
          </div>

          {/* Emergency Call Action */}
          <div className="bg-gray-900 rounded-[2.5rem] p-3 flex flex-col md:flex-row items-center shadow-2xl ring-1 ring-white/10">
            <div className="flex-1 px-8 py-6 text-center md:text-left">
              <span className="block text-[#EFAC19] text-xs font-black uppercase tracking-widest mb-1 italic">Emergency dispatch</span>
              <p className="text-white text-2xl font-bold uppercase ">Speak to an Engineer</p>
            </div>
            <a 
              href="tel:0123456789" 
              className="w-full md:w-auto bg-[#EFAC19] hover:bg-white hover:scale-[1.02] transition-all text-black font-black py-6 px-12 rounded-[2rem] flex items-center justify-center gap-4 text-xl group italic shadow-xl"
            >
              <Phone size={26} fill="black" className="group-hover:rotate-12 transition-transform" />
              02039733443
            </a>
          </div>
        </section>
      </div>

     
      
    </main>
  );
}