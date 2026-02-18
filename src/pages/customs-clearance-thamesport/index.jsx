import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Cpu, Boxes, Repeat,  Anchor, ClipboardCheck, AlertTriangle} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Thamesport | Global Customs Clearance Ltd",
    description:
      "Efficient customs clearance services at Thamesport, Scotland’s deepest container terminal. We handle import/export documentation, duty and VAT support, transit procedures and HMRC compliance to ensure smooth cargo flow through this key Scottish port. Trust us for expert customs clearance at Thamesport.",
    keywords:
      "Thamesport customs clearance, customs services Thamesport, import export documentation Thamesport, duty and VAT support Thamesport, transit procedures Thamesport, HMRC compliance Thamesport, efficient customs clearance Scotland, container terminal customs clearance, refrigerated cargo customs clearance, food import customs clearance, industrial cargo customs clearance",
  };

  const features = [
    {
      title: "Accurate Import & Export Entries",
      desc: "We handle all CDS declarations, ensuring that HS codes, valuations and regulatory details are correct.",
      icon: <FileText size={24} />,
    },
    {
      title: "Full Digital Integration with Port Systems",
      desc: "Thamesport’s automated systems require precise digital submissions — our procedures align with port-controlled clearance channels for rapid processing.",
      icon: <Cpu size={24} />,
    },
    {
      title: "Support for Bulk, Breakbulk & Short-Sea Containers",
      desc: "We manage customs for machinery, infrastructure goods, industrial cargo and short-sea containers, all of which require tailored compliance.",
      icon: <Boxes size={24} />,
    },
    {
      title: "Transit, GVMS & Documentation Handling",
      desc: "We prepare T1/T2 transit forms, safety & security declarations, and all supporting paperwork needed for seamless cross-border movement.",
      icon: <Repeat size={24} />,
    },
  ];
  
    
  const services = [
    {
      title: "Thamesport Port Capabilities",
      desc: "Thamesport offers:",
      items: [
        "UK’s only fully automated port operated by HPH.",
        "Strong road links via the A2 and M2, 35 miles from London.",
        "Ideal for short-sea freight, bulk cargo and transhipment.",
        "Digital customs environment with direct system connectivity.",
        "Supports both imports and exports for commercial and private shippers.",
      ],
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required for Thamesport Customs Clearance",
      desc: "",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading",
        "CDS Customs Declaration",
        "HS / Commodity Codes",
        "Import/Export Licences (where required)",
      ],
      extra:
        "Our team ensures accuracy to prevent holds, inspection delays or incorrect duty assessments.",
      icon: <FileText size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Thamesport"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "Thamesport is a strategically located Kent port near the mouth of the River Medway, just 35 miles from London. Originally a deep‑sea container port, it now specialises in short‑sea and bulk‑cargo operations, providing direct access for UK‑bound freight and logistics serving London and the South East.",
            "Thamesport is also the UK’s only fully automated port, operated by Hutchison Port Holdings (HPH), with customs formalities electronically managed through advanced port‑system integrations.",
            "At Global Customs Clearance, we support shippers, freight forwarders and importers/exporters using Thamesport with accurate, efficient and fully compliant customs processing.",
          ]}
        />

        <NewService />

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at Thamesport
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Thamesport receives a broad mix of cargo including short‑sea containers, bulk freight, infrastructure materials and road‑transhipped goods. All shipments must pass through Border Force/HMRC control, requiring correct declarations and documentation.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            Due to the port’s high level of automation and digital customs systems, declarations must be precise and submitted early to avoid delays or disruption to vessel schedules.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">          
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us for Customs Clearance in Thamesport
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
              Thamesport Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Whether you operate regular short‑sea movements, bulk shipments or occasional exports, we provide streamlined, compliant and reliable customs‑clearance support tailored to Thamesport’s automated processes.
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
