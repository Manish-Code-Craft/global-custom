import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Truck, Map, Repeat,  Anchor, ClipboardCheck, AlertTriangle} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Belfast | Global Customs Clearance Ltd",
    description:
      "Ensure smooth customs clearance at the Port of Tyne with our expert import/export documentation, duty and VAT support, and transit procedure management. We help businesses navigate UK port logistics efficiently while ensuring compliance with HMRC regulations. Trust us for fast, reliable customs processing and freight handling in Belfast.",
    keywords:
      "customs clearance tyne, port of tyne customs, import export documentation tyne, duty and VAT support tyne, transit procedures tyne, HMRC compliance tyne, freight handling tyne, customs broker tyne, international trade tyne, logistics support tyne",
  };

  const features = [
    {
      title: "Exact & Compliant Import/Export Declarations",
      desc: "We ensure import and export declarations are submitted accurately to HMRC, preventing inspection delays, storage charges or penalties.",
      icon: <FileText size={24} />,
    },
    {
      title: "Specialist NI–GB–EU Knowledge",
      desc: "Belfast’s cross-border environment demands precise regulatory understanding. We ensure all declarations meet the dual-system requirements for Northern Ireland, GB and EU trade.",
      icon: <Map size={24} />,
    },
    {
      title: "Transit (T1/T2) Handling",
      desc: "We manage transit movements for goods travelling under customs control between the UK, Northern Ireland and the EU.",
      icon: <Repeat size={24} />,
    },
    {
      title: "Documentation Checks & HS Classification",
      desc: "We verify invoices, packing lists and transport documents, apply correct HS/TARIC codes, and calculate duties and VAT accurately.",
      icon: <ClipboardCheck size={24} />,
    },
    {
      title: "Support for All Freight Types",
      desc: "Whether your goods move by road, sea or multimodal routes, we provide inspection-ready documentation and ensure your cargo meets all customs requirements.",
      icon: <Truck size={24} />,
    },
  ];
  
    
  const services = [
    {
      title: "Belfast Port Capabilities",
      desc: "Belfast Port provides:",
      items: [
        "70% of NI seaborne trade handled on site",
        "24.5 million tonnes of annual cargo throughput",
        "NI’s largest bulk, container and general cargo operations",
        "Extensive links to GB, Ireland and EU markets",
      ],
      extra:
        "This makes Belfast a critical logistics and customs gateway for companies across food, manufacturing, retail, chemicals, construction and energy sectors.",
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required for Belfast Customs Clearance",
      desc: "Typical requirements include:",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading / Airway Bill / Ferry documentation",
        "Import or Export Declarations",
        "HS/Commodity Codes",
        "Value, weight and origin information",
        "EORI Number",
        "Additional certifications where relevant (agri-food, DEFRA, Port Health)",
      ],
      extra:
        "We ensure documentation is complete, compliant and accurately submitted to avoid delays.",
      icon: <FileText size={28} />,
    },
    {
      title: "Common Causes of Delays — And How We Prevent Them",
      desc: "Delays at Belfast often result from:",
      items: [
        "Incorrect HS codes or tariff misclassification",
        "Inaccurate values or missing documentation",
        "BTOM-related increased checks for agri-food and regulated goods",
        "Misalignment between accompanying documents and customs entries",
      ],
      extra:
        "Our proactive checks, early submissions and expert regulatory knowledge minimise these risks.",
      icon: <AlertTriangle size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Belfast"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "Belfast Port is Northern Ireland’s largest and busiest commercial port, handling around 70% of all Northern Ireland seaborne trade and supporting over 24.5 million tonnes of cargo annually. It is also the region’s biggest passenger hub, serving more than 1.5 million ferry travellers each year.",
            "Because Northern Ireland sits at the intersection of UK, EU and all‑Ireland trade, customs procedures at Belfast are uniquely complex, requiring strict accuracy, correct declarations and compliance with the special regulatory frameworks that apply to NI‑GB and NI‑EU movements.",
            "At Global Customs Clearance, we ensure your goods move through Belfast smoothly, compliantly and without costly delays.",
          ]}
        />

        <NewService />

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at Belfast
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Belfast’s position within the post‑Brexit trading landscape means customs processes differ from other UK ports. Declarations must be correctly aligned with UK rules, and in many cases EU requirements, due to NI’s dual‑market access arrangements.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            The port handles bulk cargo, containers, general freight and specialised goods, all of which require accurate documentation including invoices, packing lists, bills of lading/waybills, and detailed customs declarations covering value, weight, commodity codes, country of origin and Incoterms. Incorrect or incomplete documentation can trigger physical, identity or documentary checks, which have increased under the UK’s Border Target Operating Model (BTOM).
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
              Belfast Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Whether you’re importing into Northern Ireland, exporting to Great Britain or delivering goods into the EU via Belfast, we provide fast, compliant and reliable customs‑clearance support tailored to NI’s unique regulatory environment.
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
