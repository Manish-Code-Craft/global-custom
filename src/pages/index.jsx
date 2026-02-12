import Layout from "@/components/ui/Layout";
import PageHead from "@/components/ui/PageHead";
import React, { useState, useEffect } from 'react';
import { 
  Ship, 
  Globe, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Box, 
  ArrowRight, 
  Zap,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from "next/link";
import WhyUsSection from "@/components/ui/New/WhyUsSection";
import PortSection from "@/components/ui/New/PortSection";

// --- Data ---

const services = [
  {
    title: "Customs Clearance",
    description: "Seamless clearance for imports and exports across all major UK ports.",
    icon: <FileText className="w-6 h-6" />,
    link:"/customs-clearance-uk"
  },
  {
    title: "CDS Declarations",
    description: "Full compliance with the latest Customs Declaration Service (CDS) systems.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    link:"/cds-declarations"
  },
  {
    title: "T1 Transit",
    description: "Efficient transit documentation for goods moving through the UK.",
    icon: <Globe className="w-6 h-6" />,
    link:"/t1-transit-documents"
  },
  {
    title: "HS Code Classification",
    description: "Expert classification to ensure accurate duty payments and compliance.",
    icon: <Box className="w-6 h-6" />,
    link:"/hs-code-classification"
  },
  {
    title: "Duty Consultancy",
    description: "Strategic advice to optimize duty costs and navigate trade tariffs.",
    icon: <ShieldCheck className="w-6 h-6" />,
    link:"/duty-vat-consultancy"
  },
  {
    title: "Get a Fast Quote",
    description: "Ready to move goods? Contact us now for a competitive price and immediate support.",
    icon: <Zap className="w-6 h-6" />,
    link:"/contact"
  }
];

const ports = [
  { name: "Felixstowe", code: "FXT" },
  { name: "Southampton", code: "SOU" },
  { name: "Dover", code: "DOV" },
  { name: "London Gateway", code: "LGP" }
];

const features = [
  { title: "Local Expertise", desc: "Specialists based in Kent with deep knowledge of UK logistics." },
  { title: "Fast Turnaround", desc: "Speed is our priority to keep your supply chain moving." },
  { title: "24/7 Support", desc: "Round-the-clock customs support for peace of mind." },
  { title: "Trusted Partner", desc: "Reliable partner for UK importers, exporters, and freight forwarders." }
];

const testimonials = [
  {
    name: "James Anderson",
    role: "Logistics Manager, TechImports Ltd",
    content: "Global Customs has transformed our supply chain. Their speed on CDS declarations is unmatched, and the 24/7 support means we never worry about weekend arrivals.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Director, FreshFoods UK",
    content: "Dealing with perishable goods requires absolute precision. The team in Kent handles our clearances flawlessly. Highly recommended for anyone needing reliability.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Operations Head, Global Trade Co",
    content: "The transition to CDS was a nightmare until we switched to Global Customs. Their expertise saved us thousands in potential delays and duty overpayments.",
    rating: 5
  }
];

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/60 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-80"        >
          <source src="https://www.globalcust.co.uk/videos/banner-main.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 w-full pt-16">
        <div className="md:w-3/4 lg:w-2/3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#049fe1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#049fe1]"></span>
            </span>
            <span className="text-white/90 text-xs font-bold uppercase tracking-widest">
              Specialists Based in Kent
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-sm">
            Fast, Reliable UK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049fe1] via-sky-400 to-[#049fe1] bg-[length:200%_auto] animate-gradient">
              Customs Clearance
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-normal leading-relaxed">
            24/7 customs support for importers, exporters, freight forwarders, and e-commerce businesses. Speed and compliance guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="/contact" className="group relative px-8 py-4 bg-[#049fe1] text-white rounded-full font-bold text-lg shadow-[0_0_40px_-10px_rgba(4,159,225,0.5)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_-15px_rgba(4,159,225,0.6)] hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                Contact Us Today <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </Link>
            
            <Link href="tel:+7653483432" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            +44 1634 565540
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest text-white/70">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description,link, index }) => (
  <Link href={link} className="group relative p-8 bg-white rounded-3xl border border-slate-100 transition-all duration-500 hover:border-[#049fe1]/20 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1">
    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
      <div className="text-[#049fe1] transform rotate-12 scale-150">{icon}</div>
    </div>
    
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#049fe1] mb-6 group-hover:bg-[#049fe1] group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
      {icon}
    </div>
    
    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#049fe1] transition-colors">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm font-medium">{description}</p>
    
    <div className="mt-6 flex items-center gap-2 text-[#049fe1] font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
      {index === 5 ? "Get started" : "Learn more"} <ArrowRight size={14} />
    </div>
  </Link>
);

const ServicesSection = () => {
  return (
    <section className="py-32 bg-slate-50/50 relative">
      <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#049fe1] font-bold tracking-widest text-xs uppercase bg-[#049fe1]/10 px-3 py-1 rounded-full">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 tracking-tight">Comprehensive <br />Customs Solutions</h2>
          </div>
          <p className="text-slate-500 max-w-md text-lg leading-relaxed">
            Tailored services ensuring your goods move smoothly across borders with total compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PortCard = ({ name, code }) => (
  <div className="relative group overflow-hidden rounded-2xl bg-slate-50 p-1">
    <div className="relative h-full bg-white rounded-xl p-6 flex items-center justify-between transition-all duration-300 group-hover:shadow-lg border border-transparent group-hover:border-slate-100">
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#049fe1] group-hover:text-white transition-all duration-300">
          <Ship size={20} />
        </div>
        <div>
          <h4 className="font-bold text-slate-800 text-lg group-hover:text-[#049fe1] transition-colors">{name}</h4>
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">UK Gateway</span>
        </div>
      </div>
      <div className="text-3xl font-black text-slate-100 group-hover:text-slate-900/5 transition-colors duration-300 font-mono tracking-tighter">
        {code}
      </div>
    </div>
  </div>
);

const PortsSection = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Major Ports Covered</h2>
          <p className="text-slate-500 text-lg">We operate at all major UK gateways, providing consistent and reliable clearance wherever your cargo arrives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ports.map((port, idx) => (
            <PortCard key={idx} {...port} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#049fe1]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#049fe1]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#049fe1] font-bold tracking-widest text-sm uppercase">Client Stories</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Trusted by Industry Leaders</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Slider Container */}
          <div className="relative min-h-[300px] md:min-h-[250px] flex items-center justify-center">
             {testimonials.map((testimonial, index) => {
               const isActive = index === currentIndex;
               return (
                 <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform
                      ${isActive ? 'opacity-100 translate-x-0 z-20' : 'opacity-0 translate-x-12 z-0'}
                    `}
                 >
                   <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center relative">
                      {/* Quote Icon */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#049fe1] rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-slate-50">
                        <Quote size={20} fill="currentColor" />
                      </div>

                      <div className="flex justify-center gap-1 mb-6 mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                        ))}
                      </div>

                      <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed italic mb-8">
                        "{testimonial.content}"
                      </p>

                      <div>
                        <h4 className="text-lg font-bold text-slate-900">{testimonial.name}</h4>
                        <p className="text-slate-500 text-sm">{testimonial.role}</p>
                      </div>
                   </div>
                 </div>
               );
             })}
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 p-3 rounded-full bg-white text-slate-400 hover:text-[#049fe1] shadow-lg border border-slate-100 hover:scale-110 transition-all z-30"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 p-3 rounded-full bg-white text-slate-400 hover:text-[#049fe1] shadow-lg border border-slate-100 hover:scale-110 transition-all z-30"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#049fe1] w-8' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-[#049fe1] relative overflow-hidden isolate">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-sky-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>

      <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-tight">
            Why Choose <br /> Global Customs?
          </h2>
          <div className="grid gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group flex gap-5">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-[#049fe1] transition-all duration-300">
                    <CheckCircle2 size={18} strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sky-50 leading-relaxed font-medium opacity-90">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:pl-10">
          <div className="relative bg-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl shadow-sky-900/20">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#049fe1]/5 rounded-3xl flex items-center justify-center text-[#049fe1] mb-8 ring-8 ring-[#049fe1]/5">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Certified Excellence</h3>
              <p className="text-slate-500 mb-10 leading-relaxed">
                We maintain the highest standards of compliance, security, and efficiency in the industry.
              </p>
              
              <div className="flex gap-8 items-center justify-center w-full">
                <div className="group flex flex-col items-center gap-3">
                  <div className="h-20 w-32 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:border-[#049fe1] group-hover:shadow-md transition-all duration-300">
                     <span className="font-black text-slate-300 text-3xl group-hover:text-[#049fe1] transition-colors">AEO</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Standard</span>
                </div>
                <div className="w-px h-16 bg-slate-100"></div>
                <div className="group flex flex-col items-center gap-3">
                  <div className="h-20 w-32 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:border-[#049fe1] group-hover:shadow-md transition-all duration-300">
                     <span className="font-black text-slate-300 text-3xl group-hover:text-[#049fe1] transition-colors">ISO</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50"></div>
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#049fe1]/10 border border-[#049fe1]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#049fe1] animate-pulse"></span>
            <span className="text-[#049fe1] text-xs font-bold uppercase tracking-wider">Ready to Ship?</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
          Let's Clear Your Customs <br/> <span className="text-[#049fe1]">Hassle-Free</span>
        </h2>
        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience the fastest, most reliable customs clearance service in the UK. Get a quote in minutes, not days.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link href="/contact" className="px-10 py-5 bg-[#049fe1] text-white rounded-full font-bold text-xl shadow-[0_10px_30px_-10px_rgba(4,159,225,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(4,159,225,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
            Get Your Quote <ArrowRight size={24} />
          </Link>
          <Link href="tel:+441634565540" className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-700 rounded-full font-bold text-xl hover:border-[#049fe1] hover:text-[#049fe1] transition-all duration-300">
            Talk to an Expert
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-slate-400 font-medium flex items-center justify-center gap-2">
           <CheckCircle2 size={16} className="text-green-500" /> No hidden fees
           <span className="w-1 h-1 rounded-full bg-slate-300"></span>
           <CheckCircle2 size={16} className="text-green-500" /> Fast response time
        </p>
      </div>
    </section>
  );
};
export default function Home() {

   const PageMeta = {
    title: "Global Customs Clearance Ltd | Customs Clearance",
    description:"Global Customs Clearance, the leading Customs Brokers offering 24 hour services to ensure that your clearances are not delayed.",
    keywords: "Global Customs Clearance, Customs Brokers, Customs Clearance Services,  Fast Customs Clearance, International Customs Brokerage, Freight Forwarding and Customs Clearance,",
  };
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
    <Hero />
      <ServicesSection />
      {/* <PortsSection /> */}
      <PortSection/>
      <TestimonialsSection />
      <WhyUsSection/>
      {/* <WhyChooseUs /> */}
      <CTASection />
 </Layout>
</>
  );
}