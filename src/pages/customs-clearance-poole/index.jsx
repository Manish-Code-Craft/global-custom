import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Send, Truck, Repeat, AlertTriangle, ShieldCheck, Anchor, CalendarCheck} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Poole | Global Customs Clearance Ltd",
    description:
      "Efficient customs clearance services at Poole Port for importers, exporters and hauliers. Fast, compliant handling of RoRo freight, GVMS management, duty & VAT support. Get your quote today.",
    keywords:
      "customs clearance poole, poole port customs, import export poole, ro ro freight poole, gvms poole, duty vat support poole, compliant customs poole, fast clearance poole",
  };

  const features = [
    {
      title: "Accurate Import & Export Declarations",
      desc: "We ensure that all customs entries are correctly prepared and submitted in line with UK customs requirements, reducing risk of delays or holds.",
      icon: <FileText size={24} />,
    },
    {
      title: "Support for Ro-Ro, Groupage & Container Cargo",
      desc: "Whether your goods arrive as accompanied trailers, unaccompanied units, groupage consignments or container loads, we handle all documentation and compliance steps.",
      icon: <Truck size={24} />,
    },
    {
      title: "Duty, VAT & Tariff Classification",
      desc: "We validate HS codes, customs valuation and all tax calculations to ensure your goods meet HMRC regulations and avoid penalties.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Transit (T1 / T2) Procedures",
      desc: "We manage transit declarations for goods moving onwards to EU or UK customs offices, ensuring compliant movement under T-systems.",
      icon: <Repeat size={24} />,
    },
    {
      title: "7-Day Operational Support",
      desc: "Poole’s freight environment is time-sensitive. We provide ongoing support to keep goods flowing efficiently and avoid vessel misses.",
      icon: <CalendarCheck size={24} />,
    },
  ];
  
    
  const services = [
    {
      title: "Poole Port Capabilities",
      desc: "Poole offers:",
      items: [
        "A large commercial harbour supporting Ro-Ro ferries, break-bulk and container services.",
        "Regular freight routes to Europe and the Channel Islands.",
        "Handling for full-container loads (FCL), LCL/groupage, vehicles and bulk commodities.",
        "Import services for vehicles requiring pre-DVLA customs clearance (NOVA). [",
      ],
      extra:
        "Poole’s multimodal capability makes it an important gateway for numerous industries on the South Coast.",
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required for Poole Customs Clearance",
      desc: "To ensure goods clear quickly:",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading / Ferry Documentation",
        "EORI Number",
        "HS / Commodity Codes",
        "Customs Declaration (CDS)",
        "Transit Documents (T1/T2) if applicable",
      ],
      extra:
        "Proper documentation is essential, particularly for goods moving under Ro-Ro schedules.",
      icon: <FileText size={28} />,
    },
    {
      title: "Common Causes of Delays — And How We Prevent Them",
      desc: "Delays at Poole often occur due to:",
      items: [
        "Incorrect or incomplete customs documentation",
        "Missing HS codes or valuation inaccuracies",
        "Late submission of declarations before ferry departure",
        "Errors with transit documentation",
      ],
      extra:
        "Our proactive compliance checks and early lodgement processes ensure your goods move with minimal interruption.",
      icon: <AlertTriangle size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Poole"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "The Port of Poole is a key South Coast ferry and commercial port, connecting the UK with continental Europe and the Channel Islands. With regular Ro‑Ro freight services, container movements and break‑bulk cargo, Poole plays an important role in facilitating regional and international trade. Efficient and accurate customs‑clearance procedures are essential to avoid delays, missed sailings and compliance issues.",
            "At Global Customs Clearance, we provide fast, compliant and reliable customs‑clearance services tailored specifically to Poole’s ferry‑led logistics environment.",
          ]}
        />

        <NewService />

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at Poole
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Poole handles high‑tempo Ro‑Ro ferry operations, meaning hauliers and freight forwarders must have all customs documentation ready before arrival. Incorrect or incomplete paperwork can result in immediate disruption, including goods being held or vehicles missing sailings altogether.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            The port supports a wide range of cargo types — including full‑container loads, groupage shipments, vehicle imports, break‑bulk cargo and Ro‑Ro trailers — many of which require precise customs classification and declarations.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">          
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us for Customs Clearance in Poole
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
              Poole Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
              From Ro‑Ro trailers and groupage shipments to containerised and break‑bulk freight, we offer reliable, compliant and efficient customs‑clearance services for all cargo moving through Poole.
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
