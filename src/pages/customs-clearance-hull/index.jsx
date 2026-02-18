import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Clock,Package,ShieldCheck, Activity,} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Hull | Global Customs Clearance Ltd",
    description:
      "Ensure fast, compliant customs clearance at the Port of Hull with Global Customs Clearance. Our expert team handles all cargo types, providing accurate declarations, duty guidance and 24/7 status updates to keep your goods moving smoothly through this key UK port.",
    keywords:
      "customs clearance hull, port of hull customs, hmrc customs clearance, cds chief declarations, hull import export, customs services hull, hull cargo clearance, customs compliance hull, hull port customs, customs brokerage hull",
  };

  const features = [
    {
      title: "Full Import & Export Declarations",
      desc: "We manage HMRC‑compliant customs entries for all types of goods at the Port of Hull, using CDS/CHIEF‑connected systems to ensure rapid processing and minimal delays.",
      icon: <FileText size={24} />,
    },
    {
      title: "Expertise with Hull’s Specialized Cargo Types",
      desc: "Hull is the UK’s leading timber port and hosts specialised handling for weather‑sensitive cargoes such as steel and bagged products. We ensure the correct document set, tariff codes and import controls are met for every shipment.",
      icon: <Package size={24} />,
    },
    {
      title: "Fast, Pre‑Lodged Clearance",
      desc: "We pre‑submit customs declarations before vessels arrive, ensuring your goods can be released immediately upon landing whenever possible",
      icon: <Clock size={24} />,
    },
    {
      title: "Guidance on Duties, VAT & Licensing",
      desc: "Whether you need help with EORI registration, duty calculations or licensing requirements (e.g., DEFRA‑controlled items or restricted goods), we provide clear guidance to keep you compliant",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "24/7 Status Updates & Proactive Compliance",
      desc: "We monitor arrival, clearance and release 24/7 and maintain audit‑ready compliance reporting for your business.",
      icon: <Activity size={24} />,
    },
  ];
  
  const services = [
    {
      title: "Hull Port Capabilities",
      desc: "The Port of Hull supports:",
      items: [
        "10 million tonnes of cargo per year and £12+ billion in trade",
        "100,000+ containers handled annually at Hull Container Terminal (Queen Elizabeth Dock",
        "Specialist cargo facilities, including the UK’s first fully enclosed cargo‑handling building for weather‑sensitive goods",
        "Extensive storage, including cold storage (24,000 m³ / 10,000‑pallet capacity) and 230,000 m² of transit sheds",
        "Strong connectivity via M62, M18 and M1, plus inland waterway access",
        
      ],
      extra: "This infrastructure makes Hull an efficient, well‑connected gateway for UK importers and exporters.",
      icon: <CheckCircle2 size={28} />
    },
    {
      title: "Documentation Required for Hull Customs Clearance",
      desc: "To clear goods through Hull efficiently, you will need:",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading / CMR",
        "CDS/CHIEF declarations",
        "Any required licences or certificates (e.g., agricultural, restricted goods)",
      ],
      extra: "Accurate and complete documentation helps reduce the risk of holds or inspections.",
      icon: <FileText size={28} />
      
    },
    {
      title: "Specialist Support Available",
      desc: "Depending on your cargo, additional controls may apply:",
      items: [
       "DEFRA for agricultural/plant goods",
       "Port Health for food‑related shipments",
       "Forestry Commission for timber and forest products",
      ],
      extra: "These agencies can influence clearance times, and we manage all requirements on your behalf.",
      icon: <ShieldCheck size={28} />
      
    },    
  ];
    
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Hull"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "When importing or exporting through the Port of Hull, choosing the right customs‑clearance partner is essential to avoid delays, compliance issues, and unexpected costs. Hull is one of the UK’s most strategically important ports, handling millions of tonnes of cargo every year and serving as a major gateway for European and global trade.",
            "At Global Customs Clearance, we provide fast, accurate and fully compliant customs services to ensure your goods move smoothly through the Port of Hull — whether you are shipping containers, Ro‑Ro freight, bulk commodities, forest products or temperature‑sensitive goods.",
          ]}
        />

        <NewService />

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at Hull
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
              The Port of Hull operates strict HMRC‑controlled procedures, requiring businesses to submit accurate declarations, proper classification and all mandatory supporting documentation.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Missing or incorrect paperwork can trigger port inspections, added costs or severe delays. Hull handles a diverse mix of cargo — including timber, steel, bagged goods, forest products, containers and Ro‑Ro — making compliance essential for avoiding disruption to your supply chain.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Us for Customs Clearance at Hull
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

         {/* Our Customs Services */}
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
              Hull Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-4 max-w-4xl mx-auto leading-relaxed">
            Whether you're a first‑time importer or a large international business, we ensure compliant, fast and stress‑free customs clearance at the Port of Hull. 
            </p>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Our expertise, sector‑specific knowledge and pre‑lodged systems help keep your goods moving without delay.
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
