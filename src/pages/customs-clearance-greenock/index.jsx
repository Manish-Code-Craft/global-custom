import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, ShieldCheck, Snowflake, Globe,  Anchor, ClipboardCheck, AlertTriangle} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Greenock | Global Customs Clearance Ltd",
    description:
      "Ensure smooth customs clearance at Greenock Port with our expert services. We handle import/export documentation, duty and VAT support, transit procedures, HMRC compliance and freight handling for all cargo types. Trust us to navigate the complexities of customs regulations and keep your goods moving efficiently through Greenock.",
    keywords:
      "Greenock customs clearance, import/export documentation, duty and VAT support, transit procedures, HMRC compliance, freight handling, customs regulations, Greenock Port logistics",
  };

  const features = [
    {
      title: "Accurate Import & Export Declarations",
      desc: "We ensure all customs entries are correctly prepared, submitted and compliant with UK procedures, reducing the risk of delays.",
      icon: <FileText size={24} />,
    },
    {
      title: "Port Health & Regulatory Support",
      desc: "We handle the required coordination for goods subject to DEFRA or Port Health controls, including food, plant and animal products.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Support for Reefer & High-Value Cargo",
      desc: "With Greenock’s 220-point reefer expansion and major cold-chain operations, we provide enhanced compliance checks for temperature-controlled cargo.",
      icon: <Snowflake size={24} />,
    },
    {
      title: "Local Expertise with Global Connectivity",
      desc: "Greenock is connected to global shipping lines and supported by strong local freight-forwarding expertise. We align our service with local port requirements for seamless clearance.",
      icon: <Globe size={24} />,
    },
  ];
    
  const services = [
    {
      title: "Greenock Port Capabilities",
      desc: "Greenock offers:",
      items: [
        "Deepest container terminal in Scotland with 12.6 m depth.",
        "100,000 TEU capacity, upgraded storage and modern equipment.",
        "Major reefer-cargo hub with 220 electrical points.",
        "Extensive warehousing & devanning facilities.",
        "Part of the Clydeport system managing 15.4 million tonnes of cargo annually.",
      ],
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required for Greenock Customs Clearance",
      desc: "",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading / Container Documents",
        "HS / Commodity Codes",
        "CDS Import/Export Declarations",
        "Certificates (origin, Port Health, etc., if required)",
      ],
      extra:
        "We ensure all documentation is complete and compliant before submission.",
      icon: <FileText size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Greenock"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "The Port of Greenock is Scotland’s deepest container terminal, located on the west coast near Glasgow. It handles up to 100,000 TEUs per year, supported by a 372‑metre quay, 12.6‑metre depth, extensive warehousing and over 220 reefer points, making it a major gateway for Scottish imports and exports.",
            "Greenock forms part of the Clydeport network and connects Scotland to global markets across Europe and the Americas. With frontline customs procedures, Port Health interaction and growing refrigerated‑cargo capacity, efficient customs clearance is essential for smooth cargo flow.",
            "At Global Customs Clearance, we support shippers, retailers, food importers and industrial operators moving goods through Greenock with fast, compliant and precise customs‑clearance services.",
          ]}
        />

        <NewService />

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at Greenock
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Greenock handles a range of cargo types including containers, bulk freight, energy products, retail goods, perishables and industrial materials. Many shipments require strict documentation and compliance checks to avoid delays, particularly refrigerated cargo and foodstuffs subject to Port Health scrutiny.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            The port’s growing investment in cranes, cold‑chain capability and transatlantic links makes accurate declarations and pre‑clearance essential to maintaining supply‑chain efficiency.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">          
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us for Customs Clearance in Tyne (South Shields)
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
              Greenock Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Whether you are importing refrigerated cargo, retail goods, food products, construction materials or exporting Scottish produce abroad, we provide fast and compliant customs‑clearance solutions for Greenock.
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
