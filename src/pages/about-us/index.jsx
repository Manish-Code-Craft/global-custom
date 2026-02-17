
import PageHead from "@/components/ui/PageHead"
import Layout from "@/components/ui/Layout";
import AboutArea from "@/components/ui/AboutArea";
import HeroAbout from "@/components/ui/HeroAbout";
import Faq from "@/components/ui/Faq/Faq";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Heroservice from "@/components/ui/Heroservice";
import {ShieldCheck, CheckCircle2, FileText, Award, Clock, FileCheck, Zap, Info, Target } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);


export default function About({ preview }) {
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
      title: "Global Custom Clearance",
      description:"Our focus on personalized service, competitive rates and customer satisfaction ensures that we always meet and exceed expectations.",
      keywords: "reliable customs clearance, best customs brokerage, hassle-free imports, export clearance solutions, trade compliance experts, efficient logistics services, UK customs specialists ",
    };

    const services = [
      {
        title: "UK Import & Export Customs Clearance",
        desc: "We handle all types of UK customs declarations, including:",
        items: [
          "Import declarations",
          "Export declarations",
          "Temporary admission (TA)",
          "Returned goods relief (RGR)",
          "T1 transit documents",
          "Post‑clearance amendments and compliance checks"
        ],
        icon: <FileText size={28} />
      },
      {
        title: "Port Health & SPS Release",
        desc: "We manage Port Health and Sanitary/Phytosanitary (SPS) requirements, including:",
        items: [
          "CHED‑D (Products of non‑animal origin)",
          "CHED‑P (Products of animal origin)",
          "Liaison with Port Health authorities for rapid release",
          "Pre‑notification and compliance checks"
        ],
        icon: <CheckCircle2 size={28} />
      },
      {
        title: "Safety & Security Declarations",
        desc: "We complete all required safety and security filings, including:",
        items: [
          "ENS (Entry Summary Declaration)",
          "GMR (Goods Movement Reference) for GVMS ports",
          "IC21 declarations",
          "EIDR/EIDP (ELO) simplified declarations where applicable"
        ],
        icon: <ShieldCheck size={28} />
      },
      {
        title: "ATA Carnet Specialists",
        desc: "We provide complete ATA Carnet support for:",
        items: [
          "Exhibitions and trade shows",
          "Film, TV, and production equipment",
          "Touring performances",
          "Temporary professional equipment",
          "International events and cultural tours"
        ],
        extra: "Our service includes carnet checking, preparation guidance, and support for customs endorsement at departure and arrival.",
        icon: <Award size={28} />
      },
      {
        title: "Temporary Import & Export Procedures",
        desc: "We help businesses navigate:",
        items: [
          "Temporary admission",
          "Re‑exportation",
          "Re‑importation",
          "Duty‑free movements",
          "Customs compliance for short‑term overseas use"
        ],
        icon: <Clock size={28} />
      }
    ];

    const whyChoose = [
      { 
        title: "Speed & Accuracy", 
        text: "We understand that customs delays cost time and money. Our processes are built for rapid turnaround and precise documentation.",
        icon: <Zap size={24} />
      },
      { 
        title: "Compliance‑Focused", 
        text: "Every declaration is completed correctly the first time, reducing the risk of inspections, penalties, or shipment holds.",
        icon: <FileCheck size={24} />
      },
      { 
        title: "Transparent Communication", 
        text: "We keep you informed at every stage with clear, proactive updates — no hidden fees, no surprises.",
        icon: <Info size={24} />
      },
      { 
        title: "Specialists, Not Generalists", 
        text: "We focus solely on customs clearance, allowing us to deliver a higher level of expertise and reliability.",
        icon: <Target size={24} />
      }
    ];

  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout preview={preview}>
        {/* <HeroAbout backgroundImage="/images/about-banner.jpg"/> */}
        <Heroservice 
          title="About Global Custom" 
          desc={[
            "Our focus on personalized service, competitive rates and customer satisfaction ensures that we always meet and exceed expectations.",    
            "Global Custom is a specialist UK customs clearance provider, supporting businesses with fast, compliant, and accurate border processing. We focus exclusively on customs declarations, ATA Carnets, Port Health releases, and temporary import/export procedures, helping companies move goods smoothly through UK ports and airports.",       
          ]} 
          backgroundImage="/images/about-banner.jpg"
        />
       
       {/* Mission Banner */}
        <section className="bg-[#049fe1] py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              "Our mission is simple: Make customs clearance fast, compliant, and easy to understand."
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#049fe1]/10 border border-[#049fe1]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#049fe1]"></span>
                <span className="text-[#049fe1] text-xs font-bold uppercase tracking-wider">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 !leading-[1.3]">
                Expertise Meets  <span className="text-[#049fe1]">Efficiency</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                At Global Custom, we combine deep regulatory expertise with modern digital tools to eliminate delays, reduce errors, and provide complete transparency.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Whether you’re importing commercial goods, exporting equipment, or managing temporary admissions, we deliver clear guidance and dependable results.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200"></div>
                <span className="text-slate-400 font-medium text-sm uppercase tracking-widest">Trusted By Business</span>
                <div className="h-px flex-1 bg-slate-200"></div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 relative">
              {/* Decorative background icon */}
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <ShieldCheck size={200} className="text-[#049fe1]" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Businesses trust us because we offer:</h3>
              <div className="space-y-4 relative z-10">
                {[
                  "Fast and accurate customs processing",
                  "Clear, jargon‑free communication",
                  "Full compliance with regulations",
                  "A single point of contact",
                  "Proactive support for time‑critical shipments"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 transition-transform hover:-translate-y-1 duration-300">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#049fe1]/10 flex items-center justify-center text-[#049fe1] shrink-0">
                      <CheckCircle2 size={14} strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Customs Services */}
        <section className="py-24 bg-slate-50">
          <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#049fe1] font-bold tracking-widest text-xs uppercase bg-[#049fe1]/10 px-3 py-1 rounded-full">Services</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6">Our Customs Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group">
                  <div className="bg-slate-900 p-8 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white max-w-[70%]">{service.title}</h3>
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#049fe1] backdrop-blur-sm group-hover:bg-[#049fe1] group-hover:text-white transition-all">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-slate-600 font-medium mb-4">{service.desc}</p>
                    <ul className="space-y-3 mb-6 flex-1">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                          <CheckCircle2 size={16} className="text-[#049fe1] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {service.extra && (
                      <p className="text-sm text-slate-500 italic border-t border-slate-100 pt-4 mt-auto">
                        {service.extra}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Global Custom */}
        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Global Custom</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#049fe1]/10 flex items-center justify-center text-[#049fe1] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Commitment</h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-10">
              At Global Custom, we believe customs clearance should be straightforward. Whether you’re moving a single case or coordinating a full production, we provide the same level of care, precision, and accountability.
            </p>
            <div className="inline-block p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-2xl font-bold text-[#049fe1]">
                Your goods. Your deadlines. Your compliance. <br/>
                <span className="text-slate-900">We make customs clearance work the way it should.</span>
              </p>
            </div>
          </div>
        </section>

        {/* <AboutArea/> */}  
        {/* <Whyus/> */}
      <Faq/>
      
    </Layout>
    </>
  );
}