import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Truck, FileCheck, Clock,  Anchor, ClipboardCheck, AlertTriangle} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Harwich | Global Customs Clearance Ltd",
    description:
      "Efficient customs clearance services at Harwich port. We handle import/export documentation, duty and VAT support, transit procedures and HMRC compliance for smooth cargo processing.",
    keywords:
      "Harwich customs clearance, import/export documentation, duty and VAT support, transit procedures, HMRC compliance, cargo processing, short-sea freight, bulk cargo, digital customs integration",
  };

  const features = [
    {
      title: "Accurate Import & Export Declarations",
      desc: "We validate invoices, packing lists, transport documents, HS codes and customs values before submitting correct CDS declarations.",
      icon: <FileText size={24} />,
    },
    {
      title: "Specialists in Ro-Ro, Containers & Groupage",
      desc: "Harwich handles over 1.5 million Ro-Ro units annually, requiring precise documentation to avoid slowdowns.",
      icon: <Truck size={24} />,
    },
    {
      title: "GVMS, Transit & Post-Brexit Compliance",
      desc: "We prepare GVMS entries, T1/T2 forms and safety/security declarations for smooth EU–UK trade.",
      icon: <FileCheck size={24} />,
    },
    {
      title: "24/7 Support for Time-Sensitive Shipments",
      desc: "Harwich’s ferry schedule demands timely clearance — we ensure declarations are processed on time.",
      icon: <Clock size={24} />,
    },
  ];
    
  const services = [
    {
      title: "Harwich Port Capabilities",
      desc: "Harwich offers:",
      items: [
        "Deep-water harbour supporting large cargo vessels and ferries.",
        "Major Ro-Ro gateway to the Netherlands and Germany.",
        "Container, trailer, groupage and bulk-cargo handling.",
        "Direct links to national road and rail routes.",
      ],
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required",
      desc: "",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading / Ferry documentation",
        "HS Codes",
        "CDS Import/Export Declaration",
        "Origin certificates (where applicable)",
      ],
      icon: <FileText size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Harwich"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "Harwich International Port is a major UK ferry and freight gateway on the east coast of England, linking the UK to Northern Europe — especially the Harwich–Hook of Holland route. With deep‑water facilities and strong road/rail links, the port handles Ro‑Ro, containers, bulk cargo, and multimodal logistics, making efficient customs clearance essential for avoiding delays.",
            "At Global Customs Clearance, we manage accurate, compliant and fast customs‑clearance services for all Harwich‑bound imports and exports.",
          ]}
        />

        <NewService />

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Why Customs Clearance Matters at Harwich
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Harwich processes significant volumes of Ro‑Ro traffic, trailers, containers, dry bulk, and general freight, requiring strict compliance with HMRC controls. All goods arriving from or departing to third countries must pass through full UK customs procedures, including documentation verification, duty assessment and physical checks where required.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            Incorrect documentation, missing HS codes, or valuation errors can cause cargo holds, missed ferry cut‑offs, or costly delays — particularly in Harwich’s high‑frequency European ferry environment.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">          
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us for Customs Clearance in Harwich
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-6 flex flex-row items-start gap-5 shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#049fe1]/10 flex items-center justify-center text-[#049fe1] shrink-0 group-hover:bg-[#049fe1] group-hover:text-white transition-all mt-1">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>     

        <section className="py-24 bg-slate-50">
          <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => {
                const isFeatured =
                  services.length > 2 && idx === 0;

                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group
                      ${isFeatured ? "md:col-span-2" : ""}
                    `}
                  >
                    <div className="bg-slate-900 p-8 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white max-w-[70%]">
                        {service.title}
                      </h3>

                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#049fe1] backdrop-blur-sm group-hover:bg-[#049fe1] group-hover:text-white transition-all">
                        {service.icon}
                      </div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      <p className="text-slate-600 font-medium mb-4">
                        {service.desc}
                      </p>

                      <ul className="space-y-3 mb-6 flex-1">
                        {service.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate-500"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-[#049fe1] shrink-0 mt-0.5"
                            />
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
                );
              })}
            </div>

          </div>
        </section>



        <section className="py-24 bg-blue-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50"></div>
          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#049fe1]/10 border border-[#049fe1]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#049fe1] animate-pulse"></span>
              <span className="text-[#049fe1] text-xs font-bold uppercase tracking-wider">
                Ready to Ship?
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Let Us Handle Your <br />{" "}
              <span className="text-[#049fe1]">
              Harwich Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            From European ferry traffic to container loads and bulk shipments, we deliver fast and compliant customs‑clearance solutions tailored to Harwich.
            </p>            

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <SiteButton href="/contact" label="Get Your Quote" />
              <SiteButton
                href="tel:+441634565540"
                label="Talk to an Expert"
                variant="outline"
              />
            </div>

            <p className="mt-8 text-sm text-slate-400 font-medium flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" /> No hidden
              fees
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <CheckCircle2 size={16} className="text-green-500" /> Fast
              response time
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
