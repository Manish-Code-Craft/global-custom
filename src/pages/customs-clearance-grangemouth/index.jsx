import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Clock, ShieldCheck, Boxes, AlertTriangle, MapPin, Anchor, ClipboardList} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Grangemouth | Global Customs Clearance Ltd",
    description:
      "Efficient customs clearance services for importers and exporters using the Port of Grangemouth. We ensure fast, compliant processing of your shipments through Avonmouth and Royal Portbury docks.",
    keywords:
      "Grangemouth customs clearance, import/export services, Avonmouth customs, Royal Portbury customs, UK port clearance, HMRC compliance, CHIEF/CDS declarations, Destin8 port system, bonded storage, customs-controlled goods",
  };

  const features = [
    {
      title: "Complete Import & Export Declarations",
      desc: "We prepare and submit all customs declarations accurately and on time, ensuring compliance for both inbound and outbound shipments.",
      icon: <FileText size={24} />,
    },
    {
      title: "Experience Handling All Cargo Types",
      desc: "From containerised freight to bulk loads and Ro-Ro cargo, our team ensures every movement meets HMRC requirements.",
      icon: <Boxes size={24} />,
    },
    {
      title: "Duty, VAT & Documentation Support",
      desc: "We assist with commodity-code classification, duty calculations, VAT assessment, and all required documentation.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Fast, Efficient Clearance to Avoid Delays",
      desc: "Our detailed compliance checks, timely submissions and industry experience help ensure your goods pass customs smoothly.",
      icon: <Clock size={24} />,
    },
    {
      title: "Support for Scotland-Specific Trade Needs",
      desc: "We understand the unique requirements of Scottish importers and exporters, offering tailored solutions for local and international supply chains.",
      icon: <MapPin size={24} />,
    },
  ];
  
  
  
    
  const services = [
    {
      title: "Grangemouth Port Capabilities",
      desc: "Grangemouth offers:",
      items: [
        "9 million tonnes of cargo annually across container, liquid and general cargo terminals.",
        "Scotland’s largest container terminal, serving major international trade routes.",
        "70% of Scotland’s population within one hour, ideal for inland distribution.",
        "Key connections to the Netherlands, Germany, Ireland and global markets via major shipping lines such as Maersk and CMA CGM.",
      ],
      extra:
        "This makes Grangemouth a central logistics hub for Scottish industry.",
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required for Grangemouth Customs Clearance",
      desc: "To ensure clearance without delays, you will need:",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading or CMR",
        "Import/Export Licences where applicable",
        "Correct Commodity Codes",
        "CDS/CHIEF Declarations",
      ],
      extra:
        "We assist in preparing all required documents correctly.",
      icon: <FileText size={28} />,
    },
    {
      title: "Common Causes of Customs Delays (and How We Prevent Them)",
      desc: "The most frequent causes include:",
      items: [
        "Incorrect commodity codes",
        "Incomplete documentation",
        "Misdeclared values",
        "Delays in submission",
        "Regulatory holds for specialist cargo",
      ],
      extra:
        "Our proactive checks and streamlined submission process significantly reduce these risks.",
      icon: <AlertTriangle size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Grangemouth"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "The Port of Grangemouth is Scotland’s largest and busiest port, handling millions of tonnes of cargo each year and serving as the country’s primary gateway for containerised freight, bulk goods and international trade. Its strategic position between Glasgow and Edinburgh, with 70% of Scotland’s population within one hour’s drive, makes it a crucial distribution and logistics hub for Scottish businesses.",
            "At Global Customs Clearance, we provide efficient, compliant and streamlined customs‑clearance services for all shipments passing through Grangemouth, ensuring your goods move without delays.",
          ]}
        />

        <NewService />

        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at Grangemouth
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Grangemouth plays a key role in Scotland’s economy, facilitating the flow of over £6 billion worth of goods each year, including food and drink, machinery, fuel, timber, paper and equipment for the oil & gas industry.

            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            As Scotland’s main container port, it supports both domestic and international trade routes, making accurate customs documentation and compliance essential for avoiding delays to high‑value freight.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">          
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us for Customs Clearance in Grangemouth
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
              Grangemouth Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Whether your goods are containerised, bulk, industrial, or specialised cargo, we provide reliable, compliant and cost‑effective customs‑clearance support tailored to Scotland’s busiest port.
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
