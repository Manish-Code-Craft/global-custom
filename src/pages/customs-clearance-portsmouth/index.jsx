import NewService from "@/components/Home/Services/NewService";
import Layout from "@/components/ui/Layout";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import React from "react";
import { CheckCircle2, FileText, Send, Truck, FileCheck, AlertTriangle, ShieldCheck, Anchor, CalendarCheck} from "lucide-react";
import SiteButton from "@/components/ui/Btns/SiteButton";

export default function Services({ preview }) {  

  const PageMeta = {
    title: "Customs Clearance Portsmouth | Global Customs Clearance Ltd",
    description:
      "Efficient customs clearance services at Portsmouth Port, a key UK–Ireland trade hub. We support hauliers and logistics providers with fast, compliant import/export declarations, GVMS management and duty/VAT handling to keep your goods moving smoothly across the Irish Sea.",
    keywords:
      "Portsmouth customs clearance, UK–Ireland trade, RoRo freight, import/export declarations, GVMS management, duty and VAT handling, cross-border logistics, Irish Sea shipping, haulier support, logistics provider services",
  };

  const features = [
    {
      title: "Fast Import & Export Declarations",
      desc: "We submit CDS declarations promptly to ensure goods clear without delay and are released quickly from Temporary Storage.",
      icon: <FileText size={24} />,
    },
    {
      title: "Experienced RoRo & Trailer Freight Handling",
      desc: "Portsmouth is predominantly a RoRo ferry port. We manage both accompanied and unaccompanied freight documentation, ensuring hauliers can board ferries without disruption.",
      icon: <Truck size={24} />,
    },
    {
      title: "Compliance with Post-Brexit GB-EU Procedures",
      desc: "We ensure correct documentation including TADs, ATA/TIR carnets, and all EU-related customs requirements needed for GB–EU movements.",
      icon: <FileCheck size={24} />,
    },
    {
      title: "Duty, VAT & Tariff Management",
      desc: "We assist with duty calculations, VAT requirements and commodity-code classification to reduce the risk of incorrect declarations or HMRC holds.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Support for Special & Regulated Cargo",
      desc: "We help you navigate requirements for animals, plants, firearms, hazardous freight and other controlled goods that require pre-authorisation.",
      icon: <AlertTriangle size={24} />,
    },
  ]; 
    
  const services = [
    {
      title: "Portsmouth Port Capabilities",
      desc: "Portsmouth offers:",
      items: [
        "One of the UK’s largest natural harbours, supporting freight, ferries and naval activity.",
        "Extensive RoRo infrastructure with regular services to France and Spain via Brittany Ferries.",
        "Strong road connections direct to the national motorway network.",
        "Multiple berths for freight, container and project cargo vessels.",
        "A Temporary Storage customs model with CNS inventory linking.",
      ],
      extra:
        "Portsmouth’s connectivity makes it a vital hub for importers, exporters, and logistics operations serving southern England and beyond.",
      icon: <Anchor size={28} />,
    },
    {
      title: "Documentation Required for Portsmouth Customs Clearance",
      desc: "To keep goods moving smoothly through Portsmouth, you will need:",
      items: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading / Ferry Booking Reference",
        "Relevant Transit Documents (TAD)",
        "ATA / TIR Carnet (if applicable)",
        "EORI Number",
        "HS/Commodity Codes",
        "Safety & security declarations when required",
      ],
      extra:
        "Our team ensures all paperwork is accurate and aligned with Portsmouth’s border processes.",
      icon: <FileText size={28} />,
    },
    {
      title: "Common Causes of Delays at Portsmouth — And How We Prevent Them",
      desc: "Delays often occur due to:",
      items: [
        "Missing or incorrect ferry booking references",
        "Incomplete declarations before arrival",
        "Incorrect commodity codes or valuations",
        "Failure to meet GVMS or Temporary Storage requirements",
        "Issues with regulated or special-category cargo",
      ],
      extra:
        "Our proactive compliance checks and early submission of documents significantly reduce these risks.",
      icon: <AlertTriangle size={28} />,
    },
  ];
  
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Portsmouth"
          backgroundImage="/images/service-bg.jpg"
          desc={[
            "Portsmouth International Port is one of the UK’s most important south‑coast gateways, serving freight, passengers, RoRo ferry traffic, and global trade routes. As a major commercial and ferry port, Portsmouth handles millions of customers and a large volume of cargo each year, making efficient customs‑clearance processes essential for avoiding delays and keeping supply chains moving.",
            "With strong motorway links via the M275 and A3 direct access to London, along with extensive ferry services operated by Brittany Ferries, Portsmouth plays a key role in GB‑EU trade.",
            "At Global Customs Clearance, we support importers, exporters, hauliers and logistics providers to ensure fast, compliant and cost‑effective customs‑clearance at Portsmouth.",
          ]}
        />

        <NewService />

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Customs Clearance Matters at Portsmouth
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Following the UK’s departure from the EU, Portsmouth operates under full customs controls, requiring all imports and exports to meet UK customs regulations. The port functions as a Temporary Storage location, meaning goods arriving can remain under customs control while declarations are submitted — but accurate documentation is crucial to avoid delays or storage charges.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
            Portsmouth also uses the Goods Vehicle Movement Service (GVMS) for certain RoRo movements, requiring hauliers to be ‘border ready’ with correct references and declarations before arrival. Because ferry schedules operate tightly, even minor customs issues can result in vehicles missing sailings or being held until documentation is corrected.
            </p>
          </div>
        </section>       

        <section className="py-24 bg-[#049fe1] relative overflow-hidden isolate">          
          <div className="mxl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us for Customs Clearance in Portsmouth
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
              Portsmouth Customs Clearance
              </span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed">
            Whether you’re moving trailers, vehicles, containers, specialist freight or high‑volume RoRo shipments, we provide fast, compliant and professional customs‑clearance services tailored to Portsmouth’s busy operational environment.
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
