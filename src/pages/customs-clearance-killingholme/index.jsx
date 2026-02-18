import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Repeat, Users, Clock,  Anchor, ClipboardCheck, AlertTriangle} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Killingholme | Global Customs Clearance Ltd",
    description:
      "Efficient customs clearance services for Killingholme port imports and exports. We handle documentation, duty support, transit procedures and HMRC compliance to ensure smooth cargo processing at this key UK ferry gateway.",
    keywords:
      "Killingholme customs clearance, import/export documentation, HMRC compliance, duty support, transit procedures, UK ferry port customs, Ro-Ro customs clearance, container customs clearance, bulk cargo customs clearance",
  };

  const features = [
    {
      title: "Accurate Import & Export Declarations",
      desc: "We handle full CDS declarations with validated HS codes, valuation checks, and correct commodity classifications, reducing the risk of delays or penalties.",
      icon: <FileText size={24} />,
    },
    {
      title: "Specialists in Bulk, Industrial & Hazardous Cargo",
      desc: "We manage compliance for regulated and dangerous goods, ensuring SDS, licences and safety documents meet UK border requirements.",
      icon: <AlertTriangle size={24} />,
    },
    {
      title: "T1 / T2 Transit Documentation",
      desc: "We issue transit documents quickly for EU-bound and customs-controlled movements, including for road freight crossing European borders.",
      icon: <Repeat size={24} />,
    },
    {
      title: "Support for Freight Forwarders & Hauliers",
      desc: "We provide neutral, confidential clearance support for logistics companies and forwarders requiring precision and speed at Killingholme.",
      icon: <Users size={24} />,
    },
    {
      title: "End-to-End Shipment Management",
      desc: "From declarations and duty/VAT calculations to Port Health liaison and documentation coordination, we manage the entire process.",
      icon: <ClipboardCheck size={24} />,
    },
  ];
  
    
  const services = [
    {
      title: "Killingholme Port Capabilities",
      desc: "Killingholme offers:",
      items: [
        "One of the UK’s largest Ro-Ro ports, handling over 1.5 million units per year.",
        "Bulk-cargo capabilities for grain, fertilisers, aggregates and industrial materials.",
        "Reliable European connections including Rotterdam, Germany and China.",
        "Strong Humber-region integration with Immingham and Grimsby.",
      ],
      extra:
        "These features make Killingholme a vital gateway for UK–EU supply chains.",
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required for Killingholme Customs Clearance",
      desc: "To avoid shipment holds or inspection delays, you will need:",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading / Ro-Ro Manifest",
        "CDS Import or Export Declaration",
        "HS/Commodity Codes",
        "Safety Data Sheets (for hazardous goods)",
        "Import/Export Licences (where applicable)",
      ],
      extra:
        "Our team checks all documents in advance to ensure accuracy and compliance.",
      icon: <FileText size={28} />,
    },
    {
      title: "Common Challenges — And How We Prevent Them",
      desc: "Goods may be delayed due to:",
      items: [
        "Misclassified HS codes or incorrect valuation",
        "Missing SDS or import licences for hazardous goods",
        "Incomplete origin evidence preventing preferential tariff claims",
        "Errors in declarations during the CHIEF → CDS transition",
      ],
      extra:
        "We resolve these issues proactively through early document reviews, precise classifications and compliance checks.",
      icon: <AlertTriangle size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Killingholme"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "The Port of Killingholme is one of the UK’s busiest Ro‑Ro hubs, handling more than 1.5 million units of Ro‑Ro cargo annually, including trailers, containers, cars, grain, fertilisers and aggregates. Strategically located in North East Lincolnshire, the port connects the UK to key European markets such as the Netherlands, Germany and beyond, and plays an essential role within the wider Humber logistics ecosystem.",
            "With significant volumes of automotive, bulk, industrial and hazardous cargo moving through the port, ensuring efficient, compliant and accurate customs clearance is vital.",
          ]}
        />

        <NewService />

        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Why Customs Clearance Matters at Killingholme
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Killingholme handles a diverse range of freight — from steel, chemicals and oil to Ro‑Ro trailers and bulk commodities — each requiring strict compliance with customs, safety and regulatory frameworks. Incorrect HS codes, missing safety documentation, valuation errors or incomplete declarations can lead to inspections, delays, unexpected storage fees or even cargo being held.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            Hazardous or controlled cargo is particularly sensitive, requiring precise Safety Data Sheets (SDS), import licences and regulatory checks through DEFRA, Port Health and the Forestry Commission.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">          
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us for Customs Clearance in Killingholme
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
              Killingholme Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Whether you're moving Ro‑Ro units, industrial cargo, hazardous materials or bulk shipments, we offer fast, compliant and reliable customs‑clearance services tailored to Killingholme’s operational needs.
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
