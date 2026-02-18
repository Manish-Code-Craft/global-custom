import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Wheat, ShieldCheck, ClipboardCheck, Repeat, Anchor, CalendarCheck} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Goole | Global Customs Clearance Ltd",
    description:
      "Ensure smooth customs clearance at Goole with our expert services. We handle all import/export documentation, duty and VAT support, and transit procedures to keep your shipments moving efficiently through this key UK port.",
    keywords:
      "Goole customs clearance, import/export documentation, duty and VAT support, transit procedures, UK port logistics, efficient customs processing, HMRC compliance, Goole freight handling",
  };

  const features = [
    {
      title: "Accurate Documentation & Declaration Submission",
      desc: "We ensure all customs entries are correctly filed through HMRC systems, with precise HS codes, valuation and origin information.",
      icon: <FileText size={24} />,
    },
    {
      title: "Bulk & Agricultural Cargo Expertise",
      desc: "We support customs requirements for agri-bulk, coal, grain, minerals and industrial products, including certificates and controls required for regulated goods.",
      icon: <Wheat size={24} />,
    },
    {
      title: "Tariff & Duty Management",
      desc: "We calculate duties, VAT and preferential tariffs under qualifying trade agreements, ensuring you pay the correct amounts and avoid post-clearance adjustments.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "End-to-End Compliance Support",
      desc: "We help ensure that all documentation matches physical cargo, preventing inspections triggered by mismatched data.",
      icon: <ClipboardCheck size={24} />,
    },
  ];
  
    
  const services = [
    {
      title: "Goole Port Capabilities",
      desc: "Goole offers:",
      items: [
        "Strategic inland access to Humber Estuary / North Sea shipping.",
        "Handling for agricultural products, bulk cargo, machinery and steel.",
        "Connectivity to road, rail and coastal shipping networks.",
      ],
      extra:
        "These capabilities make Goole a strong choice for industries requiring bulk movement and inland distribution.",
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required for Goole Customs Clearance",
      desc: "Typically required documents:",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading / Waybill",
        "Certificates of Origin",
        "Phytosanitary or sanitary certificates (where applicable)",
        "Import/Export Licences for controlled products",
        "HMRC Customs Declaration via CDS/GDS",
      ],
      extra:
        "We ensure every document is correct and compliant to minimise the risk of customs holds.",
      icon: <FileText size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Goole"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "The Port of Goole is the UK’s largest inland port, located on the River Ouse with direct access to the Humber Estuary and the North Sea. As a major hub for bulk cargo, agricultural products, coal, steel and heavy machinery, Goole requires meticulous customs‑clearance processes to ensure shipments pass smoothly through the port.",
            "At Global Customs Clearance, we support importers, exporters and logistics operators moving goods through Goole with fast, accurate and fully compliant customs‑clearance services.",
          ]}
        />

        <NewService />

        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at Goole
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Goole’s cargo mix includes bulk commodities and agricultural products, which often fall under strict tariff classifications and may require additional certificates such as phytosanitary documentation. Incorrect declarations or incomplete paperwork can quickly lead to inspections, storage delays or penalties.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            Because Goole is an inland port, scheduling and documentation accuracy are critical to avoid delays both upstream and downstream along the Humber logistics chain.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">          
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us for Customs Clearance in Goole
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
              Goole Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Whether you’re moving bulk commodities, agricultural freight, machinery or containerised cargo, we ensure your shipments clear customs quickly and compliantly at the Port of Goole.
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
