import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Clock, ShieldCheck, Boxes, AlertTriangle, MapPin, Anchor, ClipboardList} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Teesport | Global Customs Clearance Ltd",
    description:
      "Ensure smooth customs clearance at Teesport with our expert import/export services. We handle all cargo types, documentation and HMRC compliance to keep your goods moving without delays.",
    keywords:
      "Teesport customs clearance, import/export services, HMRC compliance, cargo handling, duty and VAT support, Scottish trade solutions",
  };

  const features = [
    {
      title: "Full Import & Export Declarations",
      desc: "We handle end-to-end customs entries for all cargo types, ensuring declarations are accurate, compliant and submitted on time.",
      icon: <FileText size={24} />,
    },
    {
      title: "Pre-Lodged Entries for Faster Release",
      desc: "We submit documentation before vessel arrival, reducing clearance delays and enabling quicker onward movement.",
      icon: <Clock size={24} />,
    },
    {
      title: "Duties, VAT & Tariff Management",
      desc: "Our team calculates and manages import duties and VAT, helping you avoid penalties and ensuring full regulatory compliance.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Expertise Across All Cargo Types",
      desc: "Teesport handles metals, steel, agribulk, forest products, containers and project cargo — all requiring accurate commodity codes and documentation.",
      icon: <Boxes size={24} />,
    },
    {
      title: "Understanding Local Customs Requirements",
      desc: "Every port has its own procedural nuances. We understand Teesport’s local customs rules and ensure all documentation aligns with port expectations.",
      icon: <MapPin size={24} />,
    },
  ]; 
    
  const services = [
    {
      title: "Teesport Port Capabilities",
      desc: "Teesport offers:",
      items: [
        "28 million tonnes of cargo per year from container, Ro-Ro and bulk operations.",
        "40 million tonnes across the wider Tees & Hartlepool complex.",
        "Deep-water quays capable of handling large dry-bulk and project cargo vessels.",
        "Excellent transport connections, including an onsite intermodal rail terminal providing direct access to the national rail network.",
        "Strong European & Scandinavian trade links, plus deep-sea container services.",
      ],
      extra:
        "These capabilities make Teesport a critical hub for UK manufacturing, chemical, agrifood and energy industries.",
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required for Teesport Customs Clearance",
      desc: "To ensure seamless customs processing, you will need:",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading / CMR",
        "Import or Export Licences (if applicable)",
        "Commodity Code and Valuation",
        "CDS/CHIEF Declarations",
        "EORI Number",
      ],
      extra:
        "We ensure all documentation is accurate, compliant and submitted promptly.",
      icon: <FileText size={28} />,
    },
    {
      title: "Common Causes of Delays — And How We Help Avoid Them",
      desc: "Delays often arise due to:",
      items: [
        "Incorrect tariff classification",
        "Missing or incomplete paperwork",
        "Misdeclared values",
        "Incorrect duty/VAT calculations",
        "Late submission of declarations",
      ],
      extra:
        "Our proactive compliance checks and pre-lodged entries significantly minimise risks and help keep your cargo moving.",
      icon: <AlertTriangle size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Teesport"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "Teesport is one of the UK’s most important deep‑water ports, handling around 28 million tonnes of cargo per year and serving as a major gateway for imports and exports across the North of England. Owned and operated by PD Ports, Teesport connects directly to global markets through strong European, Scandinavian and deep‑sea routes, making efficient customs clearance essential for keeping supply chains moving smoothly.",
            "At Global Customs Clearance, we provide fast, compliant and accurate customs‑clearance support for all cargo moving through Teesport — from containers and Ro‑Ro freight to dry bulk, steel, agribulk, timber and project cargo.",
          ]}
        />

        <NewService />

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at Teesport
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Teesport benefits from a lock‑free marine opening, giving vessels immediate access to the North Sea and enabling fast turnaround times for shipments. It also supports container, Ro‑Ro and bulk cargo operations across specialist terminals staffed by experienced port teams. The wider Tees and Hartlepool complex handles around 40 million tonnes annually, giving the region a competitive advantage for trade with Europe, Scandinavia and emerging deep‑sea markets.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            To keep cargo moving efficiently, importers and exporters must meet HMRC requirements, submit accurate declarations, and ensure that duties and VAT are correctly accounted for.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">          
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us for Customs Clearance in Teesport
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group
                    ${idx === 0 ? "md:col-span-2" : ""}
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
              ))}
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
              Teesport Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Whether you’re moving containerised freight, project cargo, bulk materials or Ro‑Ro shipments, we provide smooth, compliant and efficient customs‑clearance support across Teesport.
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
