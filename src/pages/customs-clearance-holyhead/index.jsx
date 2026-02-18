import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Send, Truck, FileCheck, AlertTriangle, ClipboardCheck, Anchor, CalendarCheck} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Holyhead | Global Customs Clearance Ltd",
    description:
      "Efficient customs clearance services at Holyhead port. We handle import/export declarations, HMRC compliance, duty and VAT management for all cargo types. Keep your supply chain moving smoothly with our expert support.",
    keywords:
      "Customs Clearance Holyhead, Import Export Declarations Holyhead, HMRC Compliance Holyhead, Duty and VAT Management Holyhead, Cargo Types Customs Clearance Holyhead, Supply Chain Efficiency Holyhead, Global Customs Clearance Ltd",
  };

  const features = [
    {
      title: "Fast Submission of Import & Export Declarations",
      desc: "We ensure all customs entries are correctly lodged ahead of departure or arrival, avoiding holdups that can disrupt time-sensitive ferry crossings.",
      icon: <Send size={24} />,
    },
    {
      title: "Support for Ro-Ro, Accompanied & Unaccompanied Freight",
      desc: "We help hauliers, drivers and logistics providers navigate border processes for trailers, containers, and groupage shipments moving between the UK and Ireland.",
      icon: <Truck size={24} />,
    },
    {
      title: "GVMS, Transit & Post-Brexit Compliance",
      desc: "We manage GVMS entries, T1/T2 transit documentation, and all post-Brexit customs procedures required for UK–EU movements.",
      icon: <FileCheck size={24} />,
    },
    {
      title: "Accurate Commodity Codes, Valuation & Documentation Checks",
      desc: "We validate HS codes, customs values, duties and VAT, reducing risks of delays, inspections and penalties.",
      icon: <ClipboardCheck size={24} />,
    },
    {
      title: "7-Day Support for Time-Critical Ferry Traffic",
      desc: "Holyhead’s high-tempo environment demands reliable, responsive customs support — available every day when needed.",
      icon: <CalendarCheck size={24} />,
    },
  ];
  
    
  const services = [
    {
      title: "Holyhead Port Capabilities",
      desc: "Holyhead offers:",
      items: [
        "A major RoRo ferry hub linking the UK and Ireland with frequent sailings.",
        "Handling for freight, vehicles, agricultural goods, chemicals and regulated products.",
        "24-hour, deep-water, lock-free access with excellent road and rail connections.",
        "Strategic Irish Sea location connecting UK, Ireland, France and Spain through established shipping lines.",
      ],
      extra:
        "These capabilities make Holyhead essential for cross-border supply chains.",
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required for Holyhead Customs Clearance",
      desc: "To ensure smooth clearance:",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading / Ferry Manifest",
        "EORI Number (UK/EU as applicable)",
        "Correct HS Codes",
        "Customs Declaration (CDS)",
        "Additional certificates where relevant (e.g., phytosanitary, hazardous goods permits, vehicle compliance)",
      ],
      icon: <FileText size={28} />,
    },
    {
      title: "Common Challenges — And How We Help Avoid Them",
      desc: "Holyhead sees frequent delays caused by:",
      items: [
        "Incorrect or incomplete customs paperwork",
        "Misaligned documentation vs ferry manifests",
        "Tight ferry schedules restricting clearance windows",
        "Seasonal spikes in freight volume",
        "Additional checks for regulated goods",
      ],
      extra:
        "Our proactive checks, early submissions and close coordination with hauliers and ferry operators help prevent these issues and keep your cargo on schedule.",
      icon: <AlertTriangle size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Holyhead"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "Holyhead Port is one of the UK’s busiest Irish Sea gateways, linking Wales with Ireland through high‑frequency roll‑on/roll‑off (RoRo) ferries. It handles a significant volume of freight and passenger traffic every year, making it a crucial hub for UK–Ireland trade. Efficient customs clearance at Holyhead is vital to ensure goods move smoothly across this heavily trafficked corridor and avoid delays caused by tight ferry schedules.",
            "At Global Customs Clearance, we support hauliers, importers and exporters moving goods through Holyhead by providing fast, compliant and consistent customs‑clearance services tailored to the port’s unique operational environment.",
          ]}
        />

        <NewService />

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at Holyhead
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Holyhead’s heavy RoRo traffic means customs documentation must be correct and submitted early. All goods entering or leaving the port must be declared through the UK Customs Declaration Service (CDS). Early, accurate submissions are essential to align with ferry timetables and prevent missed sailings.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            The port handles general freight, vehicles, agricultural goods, chemicals and more — many of which require additional controls, such as phytosanitary certification or vehicle compliance checks.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">          
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us for Customs Clearance in Holyhead
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
              Holyhead Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Whether you’re transporting trailers, vehicles, groupage, agricultural products or specialist cargo, we provide the fast, accurate and compliant customs‑clearance service needed to keep goods moving across the Irish Sea.
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
