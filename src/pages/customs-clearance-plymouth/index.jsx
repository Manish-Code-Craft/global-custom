import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Boxes, Zap, Handshake, AlertTriangle, ClipboardCheck, Anchor, CalendarCheck} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Plymouth | Global Customs Clearance Ltd",
    description:
      "Efficient and compliant customs clearance services for Plymouth port. We handle import/export documentation, duty & VAT support, Ro-Ro freight, and transit procedures to ensure your goods move smoothly through Plymouth’s ferry-led logistics environment.",
    keywords:
      "Plymouth customs clearance, import export documentation Plymouth, Ro-Ro freight customs, duty and VAT support Plymouth, transit procedures T1 T2 Plymouth, compliant customs services Plymouth, freight clearance Plymouth port",
  };

  const features = [
    {
      title: "End-to-End Import & Export Declaration Handling",
      desc: "We prepare and submit all customs entries, ensuring complete compliance with UK customs requirements and minimising clearance delays.",
      icon: <FileText size={24} />,
    },
    {
      title: "Support for All Cargo Types",
      desc: "From standard goods to hazardous materials and specialised shipments, we manage commodity-code classification, duty calculations and all required documentation.",
      icon: <Boxes size={24} />,
    },
    {
      title: "Fast, Efficient Processing",
      desc: "We streamline the clearance process using advanced systems and experienced staff to reduce downtime, prevent storage costs and accelerate shipment release.",
      icon: <Zap size={24} />,
    },
    {
      title: "Local Knowledge & Strong Port Relationships",
      desc: "With a deep understanding of Plymouth’s logistics environment and operational flow, our expertise helps expedite clearance and prevent procedural bottlenecks.",
      icon: <Handshake size={24} />,
    },
    {
      title: "Comprehensive Support for Complex Shipments",
      desc: "We assist with documentation preparation, certificates of origin, packing lists, valuation checks and end-to-end communication with customs authorities.",
      icon: <ClipboardCheck size={24} />,
    },
  ];
  
  
    
  const services = [
    {
      title: "Plymouth Port Capabilities",
      desc: "Plymouth offers:",
      items: [
        "High-volume sea freight capacity, supporting both domestic and international shipping routes.",
        "Multimodal links, including proximity to Exeter International Airport and major road connections.",
        "Full container load (FCL) and less-than-container load (LCL) options for flexible cargo handling.",
        "Integrated freight forwarding and logistics support for sea, road, rail and air cargo.",
      ],
      extra:
        "These capabilities make Plymouth an excellent gateway for businesses requiring reliable access to UK and international markets.",
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required for Plymouth Customs Clearance",
      desc: "To ensure accurate and seamless customs processing, you will need:",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading / shipment documentation",
        "EORI Number",
        "HS / Commodity Codes",
        "Accurate customs valuation details",
        "Relevant certificates (origin, safety, compliance) where requiredWe manage all document verification and submission on your behalf.",
      ],
      icon: <FileText size={28} />,
    },
    {
      title: "Common Causes of Delays — And How We Help Prevent Them",
      desc: "Delays at Plymouth can occur due to:",
      items: [
        "Missing or incomplete documentation",
        "Incorrect HS codes or valuation errors",
        "Late submissions to HMRC systems",
        "Failure to meet post-Brexit compliance procedures",
        "Issues with specialised or regulated goods",
      ],
      extra:
        "Our proactive audit process and precise document handling significantly reduce these risks and keep your goods moving.",
      icon: <AlertTriangle size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Plymouth"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "The Port of Plymouth is an important South Coast gateway, benefiting from its strategic coastal location, strong multimodal connectivity, and access to major shipping routes. Plymouth supports high‑volume sea freight, integrates with road and air networks, and acts as a critical logistics hub for businesses importing or exporting goods across the UK and internationally.",
            "At Global Customs Clearance, we provide fast, compliant and reliable customs‑clearance services to ensure your goods move smoothly through Plymouth without delay or unexpected costs.",
          ]}
        />

        <NewService />

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at Plymouth
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Plymouth handles a wide variety of cargo, including containerised freight, bulk shipments, and specialist or high‑value goods. The port’s active freight environment means that accurate customs documentation, correct classification, and timely submission of declarations are essential to avoid delays, HMRC queries, or storage charges.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            As with all UK ports, complete customs compliance is now required for both GB imports and exports, making expert handling of duties, VAT and regulatory rules critical for maintaining efficient supply chains.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">          
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us for Customs Clearance in Plymouth
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
              Plymouth Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Whether you’re shipping containerised goods, bulk freight, high‑value items or specialist cargo, we provide smooth, compliant and efficient customs‑clearance solutions tailored to Plymouth’s operational requirements.
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
