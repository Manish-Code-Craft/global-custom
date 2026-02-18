import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Clock, ShieldCheck, Factory, Ship, SearchCheck, Anchor, ClipboardList} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Immingham | Global Customs Clearance Ltd",
    description:
      "Ensure fast, compliant customs clearance at the Port of Immingham with Global Customs Clearance. Our expert brokers handle all cargo types, providing accurate declarations, duty guidance and 24/7 support to keep your goods moving without delay.",
    keywords:
      "customs clearance immingham, immingham customs broker, import export immingham, hmrc customs immingham, cds chief immingham, immingham port customs, customs declarations immingham, duty vat immingham, immingham cargo clearance",
  };

  const features = [
    {
      title: "Full Import & Export Declarations",
      desc: "We submit accurate CDS/CHIEF customs entries for all cargo types, ensuring HMRC compliance and smooth clearance through the UK frontier.",
      icon: <FileText size={24} />,
    },
    {
      title: "Pre-Lodged Entries to Avoid Delays",
      desc: "With Immingham’s high traffic volumes, we pre-submit customs declarations before arrival so goods can be released immediately upon landing.",
      icon: <Clock size={24} />,
    },
    {
      title: "Sector-Specific Expertise",
      desc: "Immingham is a major hub for energy goods, raw materials, and industrial freight. We apply the correct tariffs, licensing, and compliance controls every time.",
      icon: <Factory size={24} />,
    },
    {
      title: "Duties, VAT & Compliance Support",
      desc: "We manage duty calculations, VAT treatment, customs valuation, and classification to minimise the risk of delays, errors, or penalties.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Ro-Ro, Container, Bulk & Hazardous Cargo Handling",
      desc: "From Ro-Ro and containers to bulk and hazardous cargo, we ensure precise documentation for all Immingham freight terminals.",
      icon: <Ship size={24} />,
    },
    {
      title: "Inspection & Border Agency Assistance",
      desc: "If shipments are selected for inspection or require additional documentation, we liaise directly with HMRC and border authorities to resolve issues fast.",
      icon: <SearchCheck size={24} />,
    },
  ];
    
const services = [
  {
    title: "Immingham Port Capabilities",
    desc: "Immingham offers:",
    items: [
      "Largest UK port by tonnage – ~46m tonnes annually",
      "Major hub for energy generation supply chains",
      "Extensive Ro-Ro capacity – 8 berths, 30+ weekly European sailings",
      "Deep-water container and Lo-Lo facilities for global trade routes",
      "Strategic North Sea location enabling efficient access to Northern Europe & the Baltics",      
    ],
    extra:"This makes Immingham one of the most strategically important freight gateways in the UK.",
    icon: <Anchor size={28} />,
  },
  {
    title: "Documentation Required for Immingham Customs Clearance",
    desc: "For smooth clearance, you must provide:",
    items: [
      "Commercial Invoice",
      "Packing List",
      "Bill of Lading / Airway Bill",
      "Import/Export Licences (where required)",
      "Customs Declaration (CDS)",
    ],
    extra:"Accurate documentation ensures faster processing and reduces the likelihood of inspections.",
    icon: <FileText size={28} />,
  },
  {
    title: "Typical Customs Procedures at Immingham",
    desc: "The customs process includes:",
    items: [
      "Pre-Arrival Notification submitted before vessel arrival.",
      "Cargo Declaration upon arrival for HMRC processing.",
      "Verification of Documentation (invoices, packing lists, origin certificates).",
      "Physical Inspection when required by customs or risk assessment.",
      "Payment of Duties & Taxes before release.",
      "Release of Goods once all requirements are met",
    ],
    icon: <ClipboardList size={28} />,
  },
];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Immingham"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "Immingham is the UK’s largest port by tonnage, handling more than 46 million tonnes of cargo each year and serving as a critical gateway for energy, manufacturing, automotive, bulk and containerised freight. Its scale, deep‑water facilities and high sailing frequency make efficient customs clearance essential for keeping supply chains moving.",
            "At Global Customs Clearance, we ensure your goods pass through Immingham’s busy customs environment quickly, compliantly and with minimal disruption — whether you are shipping Ro‑Ro, containers, dry bulk, liquid bulk or specialist freight.",
          ]}
        />

        <NewService />

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at Immingham
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
              The Port of Immingham operates strict HMRC‑controlled procedures, requiring businesses to submit accurate declarations, proper classification and all mandatory supporting documentation.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Missing or incorrect paperwork can trigger port inspections, added costs or severe delays. Immingham handles a diverse mix of cargo — including timber, steel, bagged goods, forest products, containers and Ro‑Ro — making compliance essential for avoiding disruption to your supply chain.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">          
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us for Immingham Customs Clearance
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
              Immingham Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Whether you’re dealing with high-volume Ro‑Ro cargo, complex industrial imports or multi‑modal logistics, we provide fast, compliant and reliable customs solutions at the Port of Immingham.
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
