import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Clock, ShieldCheck, Layers, AlertTriangle, Settings, Anchor, ClipboardList} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Bristol | Global Customs Clearance Ltd",
    description:
      "Efficient customs clearance services at the Port of Bristol. We handle all cargo types with expert knowledge of HMRC regulations, ensuring fast, compliant import and export processing for your business.",
    keywords:
      "Bristol customs clearance, customs services Bristol, import export Bristol, HMRC compliance Bristol, cargo clearance Bristol, Ro-Ro customs Bristol, container customs Bristol, bulk cargo customs Bristol",
  };

  const features = [
    {
      title: "Fast, Accurate Import & Export Declarations",
      desc: "We manage CDS/CHIEF declarations, ensuring correct commodity codes, valuation, licensing, and HMRC compliance for all goods moving through Bristol.",
      icon: <FileText size={24} />,
    },
    {
      title: "Pre-Lodged Entries for Faster Release",
      desc: "Customs entries are prepared and submitted before vessel arrival, reducing dwell time at Avonmouth and Portbury terminals.",
      icon: <Clock size={24} />,
    },
    {
      title: "Sector-Specific Expertise",
      desc: "Bristol handles energy bulk cargo, steel, timber, food imports requiring DEFRA/Port Health notifications, and high-volume retail freight — all managed with precise customs control.",
      icon: <Layers size={24} />,
    },
    {
      title: "Duties, VAT & EORI Support",
      desc: "We assist with duty deferment accounts, correct VAT treatments, import duty calculations, and full support for new importers.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "AEO-Level Compliance & Advanced Port Systems",
      desc: "We operate within robust compliance frameworks and work seamlessly with Destin8, IPAFFS, and other advanced port systems used at Bristol.",
      icon: <Settings size={24} />,
    },
  ];
  
    
  const services = [
    {
      title: "Bristol Port Capabilities",
      desc: "Bristol provides:",
      items: [
        "Deep-sea access with vessels up to 14.5m draught",
        "Over £450m invested in port development since 1991",
        "2,600-acre dock estate zoned for industrial use, with 1,000 additional acres for development",
        "High-capacity freight handling with minimal congestion and rapid ship turnaround",
        "Strong regional GDP contribution, exceeding £1 billion annually",
        "Electronic customs clearance via the Destin8 system with local agents available if required",
      ],
      extra:
        "These capabilities make Bristol one of the UK’s most efficient import/export gateways.",
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required for Bristol Customs Clearance",
      desc: "To avoid delays, you’ll need:",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading / CMR",
        "Import/Export Licences (when required)",
        "Commodity Codes & Duty/VAT valuations",
        "CDS/CHIEF Customs Declaration",
      ],
      extra:
        "We ensure all documents are prepared accurately and submitted on time.",
      icon: <FileText size={28} />,
    },
    {
      title: "Common Causes of Delays — and How We Prevent Them",
      desc: "Delays typically arise from:",
      items: [
        "Incorrect commodity codes",
        "Missing documentation",
        "Misdeclared values",
        "Port Health or DEFRA holds",
        "Late submission of declarations",
      ],
      extra:
        "Our proactive checks, correct classification, and pre-lodged entries significantly reduce risk of inspections or compliance issues",
      icon: <AlertTriangle size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Bristol"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "The Port of Bristol — operating from Avonmouth and Royal Portbury docks — is the largest commercial port in the South West and a major gateway for UK and international trade. It offers deep‑sea access, extensive logistics infrastructure, and excellent motorway and rail connections, making it a highly efficient entry point for importers and exporters across the region.",
            "At Global Customs Clearance, we provide fast, compliant and accurate customs‑clearance services to keep your shipments moving smoothly through Bristol’s busy port environment.",
          ]}
        />

        <NewService />

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at Bristol
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Bristol is one of the UK’s most strategically located deep-sea ports, connecting directly to major inland distribution networks and reducing travel time for supply chains. Its facilities support a wide range of cargo types including bulk, unitised freight, containers, vehicles, steel, timber, and foodstuffs.

            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            Customs clearance is essential for ensuring goods meet HMRC requirements and are released without delays. Bristol operates electronic clearance through the Destin8 port system, supports CHIEF/CDS declaration processing, and maintains multiple approvals for bonded storage and customs-controlled goods.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">          
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us for Customs Clearance in Bristol
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
              Bristol Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Whether you’re a local South‑West business or a global importer using Bristol as your UK gateway, we ensure smooth, compliant and efficient customs processing at both Avonmouth and Royal Portbury docks.
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
