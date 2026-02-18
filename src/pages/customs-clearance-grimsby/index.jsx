import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, MapPin, Wind, AlertTriangle, Repeat, Anchor, CalendarCheck} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Grimsby | Global Customs Clearance Ltd",
    description:
      "Ensure smooth customs clearance at Grimsby with our expert services. We handle all import/export documentation, duty and VAT support, and transit procedures to keep your shipments moving efficiently through this key UK port.",
    keywords:
      "Grimsby customs clearance, import/export documentation, duty and VAT support, transit procedures, UK port logistics, efficient customs processing, HMRC compliance, Grimsby freight handling",
  };

  const features = [
    {
      title: "Expert Handling Across Humber Ports",
      desc: "We support Grimsby shipments with full coverage across the Humber region, ensuring unified documentation and compliance.",
      icon: <MapPin size={24} />,
    },
    {
      title: "Bulk, Windfarm & Project Cargo Expertise",
      desc: "Freight such as offshore wind components, heavy machinery, industrial equipment and vehicles require specialised customs support — which we provide through detailed compliance checks.",
      icon: <Wind size={24} />,
    },
    {
      title: "Accurate Declarations & Documentation",
      desc: "We prepare and submit precise customs entries to prevent HMRC queries, port inspections or delays.",
      icon: <FileText size={24} />,
    },
    {
      title: "Support for Import, Export & Transit Movements",
      desc: "Our team manages declarations for all cargo directions, including T1/T2 transit for onward EU movement.",
      icon: <Repeat size={24} />,
    },
  ];
    
  const services = [
    {
      title: "Grimsby Port Capabilities",
      desc: "Grimsby offers:",
      items: [
        "Access to Humber deep-water logistics via Immingham & Hull.",
        "Ship agency, stevedoring and port logistics for offshore wind, marine construction and supply vessels.",
        "Freight forwarding, warehousing and nationwide road links.",
      ],
      extra:
        "These strengths make Grimsby suitable for complex industrial cargo, project logistics, and multi-modal movements.",
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required for Grimsby Customs Clearance",
      desc: "You will need:",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading / Waybill",
        "HS/Commodity Codes",
        "Import/Export Declarations",
        "Licences (if applicable: DEFRA, Port Health, Forestry)",
      ],
      extra:
        "We ensure all paperwork is accurate, compliant and ready for timely submission.",
      icon: <FileText size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Grimsby"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "Grimsby is a key Humber-region port with strong links to UK and international supply chains. Historically known for fishing, Grimsby today supports offshore wind operations, project cargo, automotive logistics, and general freight movements. As part of the wider Humber Ports complex, it benefits from shared infrastructure and customs systems spanning Hull, Immingham, Grimsby and Killingholme, making accurate and efficient customs clearance essential for smooth cargo operations.",
            "At Global Customs Clearance, we ensure your shipments through Grimsby are processed quickly, compliantly and without disruption.",
          ]}
        />

        <NewService />

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at Grimsby
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Grimsby handles a diverse mix of cargo including offshore energy equipment, bulk loads, vehicles and commercial freight. Customs requirements vary significantly depending on cargo type, meaning precise classification, correct HS codes and accurate documentation are essential to avoid inspections or delays.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            Because Grimsby operates alongside Immingham and Hull in the Humber cluster, shipments frequently move between ports — making consistency and accuracy in your customs paperwork critical in ensuring seamless logistics.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">          
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us for Customs Clearance in Grimsby
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              Grimsby Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Whether you're shipping bulk, vehicles, offshore equipment or general freight, we deliver compliant, cost‑effective customs‑clearance support to keep your supply chain running smoothly across the Humber region.
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
