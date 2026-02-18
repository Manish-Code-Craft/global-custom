import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Truck, ShieldCheck, FileCheck,  Anchor, Globe, AlertTriangle} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Port of Tyne (South Shields) | Global Customs Clearance Ltd",
    description:
      "Ensure smooth customs clearance at Port of Tyne (South Shields) with our expert services. We handle all import/export documentation, duty and VAT support, and transit procedures to keep your shipments moving efficiently through this key UK port.",
    keywords:
      "Port of Tyne (South Shields) customs clearance, import/export documentation, duty and VAT support, transit procedures, UK port logistics, efficient customs processing, HMRC compliance, Port of Tyne (South Shields) freight handling",
  };

  const features = [
    {
      title: "Accurate & Compliant Import / Export Declarations",
      desc: "We prepare and submit all customs entries with exact HS codes, valuation data, and declaration details to prevent delays and ensure HMRC compliance.",
      icon: <FileText size={24} />,
    },
    {
      title: "Support for Containerised, Ro-Ro & Specialist Cargo",
      desc: "The port handles container freight, breakbulk, personal effects, offshore equipment and more. We provide full support across all cargo types with seamless documentation and port coordination.",
      icon: <Truck size={24} />,
    },
    {
      title: "GVMS & Post-Brexit Compliance",
      desc: "We manage Goods Vehicle Movement Service (GVMS) entries, transit paperwork and all post-Brexit regulatory requirements to keep shipments border-ready.",
      icon: <FileCheck size={24} />,
    },
    {
      title: "Reduced Risk of Delays & Added Charges",
      desc: "Incorrect paperwork or misclassification is a common cause of clearance issues in Tyne. Our detailed compliance checks minimise inspections, rejections and penalties.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Local Knowledge With Global Capability",
      desc: "The port connects to major global shipping lines—including Maersk, CMA CGM and Hapag-Lloyd—so accurate documentation is key. We navigate Tyne's specific operational requirements to keep your freight moving efficiently.",
      icon: <Globe size={24} />,
    },
  ]; 
    
  const services = [
    {
      title: "Port of Tyne Capabilities",
      desc: "The Port of Tyne offers:",
      items: [
        "A major deep-sea container terminal supporting global import/export flows.",
        "Connections to major global markets (USA, Norway, Germany, Europe).",
        "Strong local connectivity to North East industry hubs (Newcastle, Sunderland, Gateshead).",
        "Handling for containers, project cargo, Ro-Ro, energy-related freight and personal-effects shipments.",
      ],
      extra:
        "These capabilities make Tyne an important gateway for both national and international trade.",
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required for Tyne Customs Clearance",
      desc: "You will need:",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading / Waybill",
        "HS / Commodity Codes",
        "Import or Export Declaration (CDS)",
        "Transit Documents (T1 / T2) when required",
        "EORI Number",
      ],
      extra:
        "We ensure every document is complete, accurate and submitted at the right time to avoid delays.",
      icon: <FileText size={28} />,
    },
    {
      title: "Common Causes of Delays — And How We Prevent Them",
      desc: "Delays at Tyne commonly happen due to:",
      items: [
        "Incorrect HS codes or shipment valuation",
        "Documentary errors or mismatches",
        "Incomplete GVMS data",
        "Late submissions to HMRC",
        "Regulatory changes following Brexit",
      ],
      extra:
        "We mitigate these risks with proactive compliance reviews and early declaration submission.",
      icon: <AlertTriangle size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Port of Tyne (South Shields)"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "The Port of Tyne—located near South Shields, Newcastle, Gateshead and Sunderland—is one of the UK’s most strategically positioned deep‑sea ports. It serves as a major hub for international trade, supporting industries such as renewable energy, manufacturing, automotive, food processing and offshore logistics. With strong global connections to key markets including the United States, Norway and Germany, the port plays an essential role in both import and export supply chains.",
            "At Global Customs Clearance, we ensure your shipments pass smoothly through the Port of Tyne with fast, compliant and cost‑effective customs‑clearance solutions.",
          ]}
        />

        <NewService />

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at <br />Port of Tyne
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Customs clearance at Tyne involves strict documentation, accurate declarations, and compliance with UK customs requirements. All goods leaving or entering via Tyne require correct submission of customs declarations, including commercial invoices, packing lists, and bills of lading. Missing or incorrect information can cause delays, additional checks or unexpected charges.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            Because Tyne serves high‑volume freight—including containers, Ro‑Ro traffic, bulk goods and specialist cargo—accurate customs processing is essential to maintain supply chain reliability.
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
              Port of Tyne Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Whether you’re moving containers, project cargo, Ro‑Ro trailers, offshore equipment or personal effects, we provide efficient, compliant and stress‑free customs‑clearance support tailored to the Port of Tyne.
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
