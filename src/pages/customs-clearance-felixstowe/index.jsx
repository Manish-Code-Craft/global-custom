import NewService from "@/components/Home/Services/NewService"
import Layout from "@/components/ui/Layout"
import Head  from "next/head"
import Servicedef from "@/components/ui/Servicedef"
import Heroservice from "@/components/ui/Heroservice"
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PageHead from "@/components/ui/PageHead"
import FeliixstoweWhyChoose from "@/components/Pages/FeliixstoweWhyChoose"
import React, { useState, useEffect } from 'react';
import { 
  Ship, 
  Globe, 
  CheckCircle2, 
  Container, 
  FileText, 
  Box, 
  ArrowRight, 
  Train,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Users,
  Clock,
  Award,
  Menu,
  X,
  MapPin,
  Truck,
  Factory,
  ShoppingBag,
  Beaker,
  Utensils,
  Anchor,
  Navigation
} from 'lucide-react';
import SiteButton from "@/components/ui/Btns/SiteButton"
gsap.registerPlugin(ScrollTrigger);
export default function Services({preview}){
    const container = useRef();
    useGSAP(() => {  
       let scrollTriggers = gsap.utils.toArray(".scroll-trigger");
       let scrollItem = gsap.utils.toArray(".scroll-item");
       scrollTriggers.forEach((scrollTrigger, index) => {
           ScrollTrigger.create({
               trigger: scrollTrigger,
               start: 'top bottom',
               end: 'bottom top',
               toggleClass: { targets: scrollItem[index], className: "c-active" }
           });
       });
       
     });

   const PageMeta = {
    title: "Customs Clearance Felixstowe | Global Customs Clearance Ltd",
    description:"Discover seamless Customs Clearance services in Felixstowe with Global Customs Clearance Ltd. Streamline your imports and exports efficiently today. Call now!",
    keywords: "Customs Clearance Felixstowe, Felixstowe Customs Brokers, Import Export Clearance Felixstowe, Global Customs Clearance, UK Customs Clearance Services,",
  };

  const liverpoolFeatures = [
    { 
      title: "Rapid Processing & Zero-Delay Focus", 
      desc: "We work quickly and accurately to keep your cargo moving and avoid quay rent or demurrage.", 
      icon: <Clock size={24} /> 
    },
    { 
      title: "Full Import & Export Coverage", 
      desc: "We handle all declaration types, including import entries, export declarations, T1 transit documents, and EX-A.", 
      icon: <Globe size={24} /> 
    },
    { 
      title: "Daily Operations at Felixstowe", 
      desc: "Our team works closely with carriers, port operators, and hauliers at Felixstowe, ensuring seamless communication and efficient clearance.", 
      icon: <Ship size={24} /> 
    },
    { 
      title: "Transparent, Competitive Pricing", 
      desc: "Clear, fair rates with no hidden extras.", 
      icon: <CheckCircle2 size={24} /> 
    },
    { 
      title: "Direct Access to Experienced Specialists", 
      desc: "You get real support from real customs experts — not automated systems.", 
      icon: <Users size={24} /> 
    },
  ];
  

  const liverpoolServices = [
    { 
      title: "Import Customs Clearance", 
      intro: "We manage all import declarations into the UK, including:",
      items: [
        "Standard imports",
        "High-value and controlled goods",
        "Preferential origin claims",
        "Duty & VAT calculations",
        "Post-clearance amendments and corrections"
      ],
      icon: <ArrowRight className="rotate-90" /> 
    },
    { 
      title: "Export Customs Clearance", 
      intro: "Reliable, compliant export processing:",
      items: [
        "EX-A creation",
        "Export declarations for all commodity types",
        "Support with carrier and port requirements"
      ],
      icon: <ArrowRight className="-rotate-90" /> 
    },
    { 
      title: "T1 Transit Documents", 
      intro: "If your goods are moving onward to the EU or bonded facilities, we provide:",
      items: [
        "T1 creation",
        "LRN numbers",
        "Liaison with hauliers and port authorities",
        "Correct discharge at destination"
      ],
      icon: <FileText /> 
    },
    { 
      title: "Specialist Customs Procedures", 
      intro: "We also support:",
      items: [
        "Temporary admission",
        "Returned goods relief",
        "Inward/Outward processing",
        "Customs warehousing"
      ],
      icon: <Star /> 
    },
  ];
  

  const industries = [
    { name: "Retail & e‑commerce", icon: <ShoppingBag /> },
    { name: "Automotive", icon: <Truck /> },
    { name: "Food & drink", icon: <Utensils /> },
    { name: "Machinery & engineering", icon: <Factory /> },
    { name: "Chemicals", icon: <Beaker /> },
    { name: "Consumer goods", icon: <Box /> },
  ];

  const whyPortItems = [
    { text: "Extensive global shipping routes", icon: <Ship size={28} /> },
    { text: "High‑capacity container terminals", icon: <Container size={28} /> },
    { text: "Fast access to the Midlands and South East", icon: <MapPin size={28} /> },
    { text: "Strong rail and road connectivity", icon: <Train size={28} /> },
  ]; 

    return(
        <>
        <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance at the Port of Felixstowe"         
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "Fast, Accurate & Fully Compliant UK Customs Services",           
            "If your goods are moving through the Port of Felixstowe, you need a customs partner who understands the port’s systems, carriers, and operational flow. We provide fast, reliable, and fully compliant customs clearance for importers, exporters, freight forwarders, and hauliers using Felixstowe — the UK’s busiest container port.",           
            "From containerised cargo to groupage and specialist shipments, our team ensures your goods clear customs smoothly, without delays or unexpected charges.",           
          ]} 
          />
        
        <NewService/>
        
        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us for Customs Clearance at Felixstowe?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liverpoolFeatures.map((feature, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-6 flex flex-row items-start gap-5 shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent">
                  <div className="w-12 h-12 rounded-xl bg-[#049fe1]/10 flex items-center justify-center text-[#049fe1] shrink-0 group-hover:bg-[#049fe1] group-hover:text-white transition-all mt-1">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

         {/* Services Grid - Redesigned */}
      <section className="py-24 bg-slate-50">
        <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#049fe1] font-bold tracking-widest text-xs uppercase bg-[#049fe1]/10 px-3 py-1 rounded-full">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6">Our Customs Services at the Port of Felixstowe</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {liverpoolServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                {/* Header Section */}
                <div className="bg-slate-900 p-8 flex items-center justify-between relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="h-1 w-12 bg-[#049fe1] rounded-full"></div>
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#049fe1] relative z-10 backdrop-blur-sm group-hover:bg-[#049fe1] group-hover:text-white transition-all duration-500">
                    {React.cloneElement(service.icon, { size: 32 })}
                  </div>
                  {/* Decorative faint background icon */}
                  <div className="absolute -right-6 -bottom-6 text-white/5 transform rotate-12 scale-150 pointer-events-none">
                     {React.cloneElement(service.icon, { size: 140 })}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <p className="text-slate-600 font-medium mb-6 text-lg leading-relaxed border-b border-slate-100 pb-6">
                    {service.intro}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 size={18} className="text-[#049fe1] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Separated */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Industries We Support</h3>
            <p className="text-slate-500 mb-12 text-lg max-w-2xl mx-auto">We work with a wide range of sectors shipping through Felixstowe, including:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((ind, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#049fe1]/30 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#049fe1] shadow-sm group-hover:bg-[#049fe1] group-hover:text-white transition-colors">
                    {React.cloneElement(ind.icon, { size: 24 })}
                  </div>
                  <span className="font-bold text-slate-700 text-sm group-hover:text-[#049fe1] transition-colors">{ind.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 text-center">
              <p className="font-bold text-lg text-[#0ea5e9]">If it moves through Felixstowe, we can clear it.</p>
            </div>
        </div>
      </section>

      {/* Why Port of Liverpool - Standalone Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#049fe1]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

         <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#049fe1]/10 border border-[#049fe1]/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#049fe1] animate-pulse"></span>
                  <span className="text-[#049fe1] text-xs font-bold uppercase tracking-wider">Strategic Gateway</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Why the <span className="text-[#049fe1]">Port of Felixstowe?</span></h3>
                <p className="text-slate-400 text-lg leading-relaxed ">
                Our local expertise ensures your goods move through the port efficiently and compliantly. Felixstowe is the UK’s largest and busiest container port, offering:
                </p>
              </div>
              <div className="md:w-1/2 flex justify-end">
                {/* Visual element or decorative icon could go here, for now keeping it clean space */}
                 <div className="hidden md:block p-8 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
                   <Anchor size={64} className="text-[#049fe1] opacity-80" />
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {whyPortItems.map((item, i) => (
                 <div key={i} className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:bg-slate-800 transition-colors group">
                   <div className="w-16 h-16 bg-[#049fe1]/10 rounded-2xl flex items-center justify-center text-[#049fe1] mb-6 group-hover:scale-110 transition-transform duration-300">
                     {item.icon}
                   </div>
                   <p className="text-white text-lg font-medium leading-relaxed">
                     {item.text}
                   </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-24 bg-blue-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#049fe1]/10 border border-[#049fe1]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#049fe1] animate-pulse"></span>
              <span className="text-[#049fe1] text-xs font-bold uppercase tracking-wider">Ready to Ship?</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Get a Fast Quote for <br/> <span className="text-[#049fe1]">Customs Clearance at Felixstowe</span>
          </h2>
          <p className="text-xl text-slate-500 mb-4 max-w-4xl mx-auto leading-relaxed">
          Whether you need a one‑off clearance or ongoing support, we’re ready to help.
          Tell us about your shipment and we’ll provide a quick, competitive quote.
          </p>
          <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
          Contact us today for expert customs clearance at the Port of Felixstowe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">         
            <SiteButton href="/contact" label="Get Your Quote"/>
            <SiteButton href="tel:+441634565540" label="Talk to an Expert" variant="outline"/>
          </div>
          
          <p className="mt-8 text-sm text-slate-400 font-medium flex items-center justify-center gap-2">
            <CheckCircle2 size={16} className="text-green-500" /> No hidden fees
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <CheckCircle2 size={16} className="text-green-500" /> Fast response time
          </p>
        </div>
      </section>
        {/* <Heroservice title="Customs Clearance Felixstowe" desc="Navigating the complexities of customs clearance services for the United Kingdom can be a challenge, but Global Custom Clearance Ltd. is here to simplify the process. We offer comprehensive customs clearance services, including import, export, and transit, ensuring your shipments move smoothly and efficiently. Our team of experienced professionals is dedicated to providing accurate and timely customs clearance solutions that meet the highest compliance standards. Choose Global Custom Clearance Ltd. for reliable, efficient, and compliant customs clearance services." backgroundImage="/images/service-bg.jpg"/>
        <NewService/>
        <FeliixstoweWhyChoose/>
        <Servicedef  /> */}
        </Layout>
        </>
    )
}