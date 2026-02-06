import React from "react"
import NewService from "@/components/Home/Services/NewService"
import Layout from "@/components/ui/Layout"
import Heroservice from "@/components/ui/Heroservice"
import PageHead from "@/components/ui/PageHead"
import Image from "next/image"
import { FileText, Anchor, Train, Box, MapPin, Send, Truck, Hash, Calculator, Briefcase, Clock, ShoppingCart, Users, DownloadCloud, UploadCloud, Info, CheckCircle } from "lucide-react";
import Testimonials from "@/components/ui/Testimonials"
import SiteFAQs from "@/components/ui/SiteFAQs"
import SiteCta from "@/components/ui/SiteCta"

export default function Services({ preview }) {
  const PageMeta = {
    title: "Customs Clearance Dover | Port of Dover Customs Brokers",
    description: "Expert Customs Clearance in Dover and Folkestone. Specialist GMR generation and CDS declarations for Ro-Ro freight via the Port of Dover and Eurotunnel.",
    keywords: "Customs Clearance Dover, Port of Dover Brokers, GMR Generation Dover, Eurotunnel Customs, Kent Border Clearance, M20 Customs Support",
  };

  const services = [
    { title: "Import Declarations (CDS)", desc: "Rapid processing for goods arriving via the Port of Dover Eastern Docks and the Eurotunnel.", icon: <FileText /> },
    { title: "Export Declarations", desc: "Ensuring seamless exit for UK goods heading to Europe via the short-sea channel routes.", icon: <Send /> },
    { title: "GMR & GVMS Support", desc: "Instant Goods Movement Reference (GMR) generation to ensure your truck can board the ferry or shuttle.", icon: <Truck /> },
    { title: "T1 & T2 Transit Docs", desc: "Specialist transit documentation for goods moving across multiple European borders from Dover.", icon: <Hash /> },
    { title: "Duty & VAT Consultancy", desc: "Advice on Postponed VAT Accounting (PVA) and managing duty deferment at the border.", icon: <Calculator /> },
    { title: "Inland Border Support", desc: "Assistance with declarations and inspections at the Sevington or Motis Inland Border Facilities.", icon: <MapPin /> },
    { title: "Urgent 24/7 Clearance", desc: "Round-the-clock support for time-critical Ro-Ro freight crossing the Channel.", icon: <Clock /> },
    { title: "E-commerce & Small Parcels", desc: "Customs solutions for high-frequency e-commerce movements through the Kent gateways.", icon: <ShoppingCart /> },
    { title: "Haulier & Driver Support", desc: "Direct communication with drivers and haulage firms to resolve border hold-ups fast.", icon: <Users /> },
  ];

  const requirements = [
    { title: "Port of Dover (Eastern Docks)", details: ["World's busiest Ro-Ro port", "Primary gateway for EU-UK road freight"] },
    { title: "Eurotunnel (Folkestone)", details: ["Fast-track rail freight connectivity", "Critical for 'Just-in-Time' supply chains"] },
    { title: "Sevington IBF", details: ["Primary inland inspection site for Dover traffic", "T1 discharge and ATA Carnet processing"] },
    { title: "M20 & A2 Corridors", details: ["Strategic monitoring of truck movements via Operation Brock", "Local support for Dover-based haulage hubs"] },
    { title: "Motis FSA (Dover)", details: ["Inland clearance and truck stop facility support"] },
  ];

  const features = [
    { title: "Dover Specialist Knowledge", desc: "Deep understanding of the unique Ro-Ro requirements at the Dover and Folkestone borders." },
    { title: "Instant GMR Generation", desc: "We provide the references needed for the GVMS system to prevent port delays." },
    { title: "HMRC Compliance", desc: "Expert filing in the Customs Declaration Service (CDS) with a focus on fast-moving road freight." },
    { title: "Transparent Pricing", desc: "Competitive, flat-fee structure with no hidden costs for cross-channel traders." },
    { title: "24/7 Border Support", desc: "Our brokers are available day and night to mirror the 24-hour operation of the Port." },
    { title: "Strategic Kent Presence", desc: "Local expertise that knows the Kent road networks and border facilities intimately." },
  ];

  const problems = [
    { title: "GMR Record Mismatch", desc: "We resolve GVMS errors that prevent trucks from checking in at the ferry terminal." },
    { title: "Port Health (SPS) Delays", desc: "Navigating IPAFFS and sanitary checks for food and plant imports at Dover." },
    { title: "Inbound Transit Issues", desc: "Resolving 'Office of Transit' discrepancies for goods arriving from the EU." },
    { title: "Incomplete Paperwork", desc: "Liaising with European suppliers to secure missing commercial data mid-transit." },
    { title: "Inventory Linking Errors", desc: "Ensuring seamless communication between port systems and HMRC's CDS." },
    { title: "Unexpected Inspections", desc: "Guiding drivers through the process at Sevington or Dover's Western Docks." },
  ];

  const doverFaq = [
    {
      question: "How quickly can you generate a GMR for Dover?",
      answer: "We can generate a GMR (Goods Movement Reference) almost instantly once the declaration is pre-lodged in the CDS system.",
    },
    {
      question: "Do you handle both Dover and the Eurotunnel?",
      answer: "Yes, we provide full customs brokerage for freight crossing via P&O, DFDS, and Irish Ferries at Dover, as well as Eurotunnel Le Shuttle.",
    },
    {
      question: "What happens if my truck is sent to Sevington?",
      answer: "If your vehicle is directed to the Sevington Inland Border Facility for an inspection, we can manage the documentation and help resolve any customs queries on-site.",
    },
    {
      question: "Can you help with T1 transit documents from the EU?",
      answer: "Yes, we specialize in discharging T1 transit movements and ensuring the final import declaration is completed correctly.",
    },
    {
      question: "Are your brokers available 24 hours a day?",
      answer: "Since Dover never sleeps, neither do we. Our team provides 24/7 support for all cross-channel freight.",
    },
  ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Dover"
          desc={[
            "Fast-Track Customs Brokerage for the Port of Dover & Eurotunnel",
          ]}
          backgroundImage="/images/service-bg.jpg"
        />

        <NewService />

        <section className="pb-[80px] ">
          <div className="max-w-[1350px] mx-auto px-[15px]">
            <div className="lg:flex lg:flex-row sm:flex sm:flex-col items-center gap-[66px] service_last">

              <div className="service-image">
                <div className="xl:block">
                  <div className="relative">
                    <Image
                      className="w-full rounded-lg"
                      src="/images/service-road.jpg"
                      alt="Customs clearance Dover"
                      width={573}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 lg:gap-[30px] xl:gap-[64px] content-center">
                <h2 className="mt-8 font-bold text-5xl lg:text-heading-1 md:text-[46px] text-[35px] mb-[22px]">
                  Customs Clearance Dover
                </h2>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
                  The Port of Dover is the lifeblood of UK-EU trade, handling thousands of trucks daily. For businesses using the short-sea crossing, speed is the most critical factor. Any delay at the border can disrupt entire supply chains, making expert customs clearance an absolute necessity for Dover freight.
                </p>
                <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
                  Global Customs specializes in the rapid-response environment of the Dover and Folkestone gateways. We understand the complexities of the Goods Vehicle Movement Service (GVMS) and provide the precise CDS declarations required to get your driver through the terminal and onto the water without delay.
                </p>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
                  Whether you are moving fresh produce, automotive parts, or retail goods via the M20, our Dover-focused brokerage ensures your cargo remains on schedule, 24/7.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Section */}
        <section className="py-20 bg-slate-50 overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Dover: The UK's Primary 
                <span className="text-[#0ea5e9]"> Ro-Ro Gateway</span>
              </h2>
              <p className=" text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                With a crossing time of just 90 minutes, Dover is the heartbeat of international trade. We provide the digital infrastructure to keep it moving.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="">
                <div className="space-y-6">
                  <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                    <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9] shrink-0">
                      <Truck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">GVMS & GMR Integration</h4>
                      <p className="text-slate-600">Immediate GMR generation for seamless boarding at Dover Eastern Docks.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                    <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9] shrink-0">
                      <Train size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Eurotunnel Specialists</h4>
                      <p className="text-slate-600">Dedicated customs support for freight using the Folkestone rail shuttle.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                    <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9] shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Inland Border Links</h4>
                      <p className="text-slate-600">Full management of declarations requiring inspection at Sevington IBF.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-50/50 rounded-3xl -z-10 rotate-1" />
                  <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-8">
                      <MapPin className="text-[#0ea5e9]" size={28} />
                      <h3 className="text-2xl font-bold text-white">Dover Strategic Facilities</h3>
                    </div>
                    <ul className="grid grid-cols-1 gap-4">
                      {['Port of Dover Eastern Docks', 'Eurotunnel Terminal (Folkestone)', 'Sevington Inland Border Facility', 'Western Docks Inspection Site'].map((facility, i) => (
                        <li key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl text-white font-medium">
                          <div className="h-2 w-2 rounded-full bg-[#0ea5e9]" />
                          {facility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Customs Services for Dover Trade</h2>
              <p className="mt-4 text-slate-600">Supporting every type of Channel-crossing freight:</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <div className="text-[#0ea5e9] mb-4">
                    {React.cloneElement(service.icon, { size: 32 })}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ports Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Key Gateways We Support</h2>
              <p className="text-slate-600 mt-4">Integrated brokerage at the UK's most critical border points:</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="space-y-8">
                {requirements.map((req, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                    <div className="md:w-1/3">
                      <h4 className="font-bold text-lg text-slate-900">{req.title}</h4>
                    </div>
                    <div className="md:w-2/3">
                      <ul className="list-disc pl-5 space-y-1 text-slate-600">
                        {req.details.map((detail, j) => (
                          <li key={j}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                  <Image
                    src="/images/road-custom.png"
                    width={800}
                    height={800}
                    alt="Dover Port Logistics"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Work With</h2>
                <p className="text-slate-600 mb-6">Our Dover border clients include:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    'Road Haulage Firms', 'Logistics Providers', 'EU Manufacturers', 'UK Exporters',
                    'Fresh Produce Traders', 'Just-in-Time Suppliers', 'E-commerce Distributors',
                    'Freight Forwarders', 'Independent Truckers', 'Industrial Wholesalers'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What You Need for Dover Clearance
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">For Dover Imports</h3>
                  <DownloadCloud className="text-[#0ea5e9]" size={24} />
                </div>
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
                  <div className="space-y-4">
                    {[
                      'Commercial invoice', 'Packing list', 'CMR (Transport document)',
                      'HS Commodity codes', 'Origin evidence', 'Agreed Incoterms',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-[#0ea5e9] h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 font-medium text-[15px]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {[
                      'GB EORI Number', 'VAT Registration', 'IPAFFS (for food)', 'HMRC Deferment info'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-[#0ea5e9] h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 font-medium text-[15px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl h-full">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">For Dover Exports</h3>
                  <UploadCloud className="text-[#0ea5e9]" size={24} />
                </div>
                <div className="space-y-4">
                  {[
                    'Sales invoice', 'Packing manifest', 'Export commodity codes',
                    'Haulier/Truck details', 'Destination country', 'EORI number'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-[#0ea5e9] h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-white font-medium text-[15px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Your Local Partner at the Frontier</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                  <CheckCircle className="text-[#0ea5e9] mb-4 h-8 w-8" />
                  <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold mb-12 text-center">Solving Dover Border Challenges</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((prob, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h4 className="font-bold text-[#0ea5e9] text-lg mb-2">{prob.title}</h4>
                  <p className="text-blue-50">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <SiteFAQs
          sectionTitle="Dover Customs FAQs"
          sectionDescription="Essential information for Ro-Ro freight crossing the Kent border."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={doverFaq}
        />

        <SiteCta
          title="Need rapid customs clearance at Dover?"
          description="Contact our Kent-based team for instant GMR generation and 24/7 border support."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
        />
      </Layout>
    </>
  )
}