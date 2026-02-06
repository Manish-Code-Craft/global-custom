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
    title: "Customs Clearance Medway | Global Customs Clearance Ltd",
    description: "Specialist customs clearance services across Medway. Import & export declarations, CDS filings, and port clearance support.",
    keywords: "Customs Clearance Medway, Medway Ports Customs Broker, Import Export Clearance Medway, UK Customs Clearance Services",
  };

  const services = [
    { title: "Import Declarations (CDS)", desc: "Accurate CDS import declarations for cargo arriving through Medway ports and river terminals.", icon: <FileText /> },
    { title: "Export Declarations", desc: "Compliant export filings for goods leaving the UK via Medway and the Thames estuary.", icon: <Send /> },
    { title: "T1 Transit Documents", desc: "Preparation and discharge of T1s for goods moving onward into the EU.", icon: <Truck /> },
    { title: "HS Code Classification", desc: "Correct commodity code classification to avoid duty errors and delays.", icon: <Hash /> },
    { title: "Duty & VAT Consultancy", desc: "Advice on customs valuation, VAT accounting, and duty reliefs.", icon: <Calculator /> },
    { title: "Temporary Admission & ATA Carnets", desc: "Support for goods entering Medway on a temporary basis.", icon: <Briefcase /> },
    { title: "Urgent & Same-Day Clearance", desc: "Priority clearance for time-critical shipments.", icon: <Clock /> },
    { title: "E-commerce & Amazon FBA Clearance", desc: "Customs support for goods moving to UK fulfilment centres.", icon: <ShoppingCart /> },
    { title: "Support for Freight Forwarders & Hauliers", desc: "White-label customs services for logistics providers.", icon: <Users /> },
  ];

  const requirements = [
    { title: "Medway Ports", details: ["Bulk cargo", "Construction materials", "River-based imports"] },
    { title: "River Thames Terminals", details: ["Short-sea shipping", "Project cargo"] },
    { title: "Sheerness (Nearby)", details: ["Automotive imports", "RoRo traffic"] },
    { title: "Chatham & Rochester Wharves", details: ["Industrial cargo", "Commercial imports"] },
    { title: "Inland Border Facilities", details: ["Sevington IBF", "Dover IBF"] },
  ];

  const features = [
    { title: "Medway & Thames Expertise", desc: "Deep understanding of Medway’s river ports and customs processes." },
    { title: "Fast Turnaround", desc: "Pre-arrival submissions to reduce delays and demurrage." },
    { title: "Compliance-First Approach", desc: "All declarations prepared fully in line with HMRC and CDS rules." },
    { title: "Transparent Pricing", desc: "Clear costs with no hidden charges." },
    { title: "24/7 Support", desc: "Support for urgent movements and out-of-hours clearance." },
    { title: "Nationwide Coverage", desc: "Seamless support as goods move inland across the UK." },
  ];

  const problems = [
    { title: "River Port Delays", desc: "We prevent delays caused by incomplete or late declarations." },
    { title: "Incorrect CPC Codes", desc: "Wrong procedure codes can block release — we apply the correct ones." },
    { title: "Documentation Gaps", desc: "Missing references corrected before submission." },
    { title: "Incorrect Valuation", desc: "Accurate customs values to avoid audits or penalties." },
    { title: "Duty Relief Errors", desc: "Correct application of reliefs and suspensions." },
    { title: "Post-Clearance Amendments", desc: "Amendments and voluntary disclosures handled efficiently." },
  ];

  const medwayFaq = [
    {
      question: "How long does customs clearance take in Medway?",
      answer: "Most declarations are processed quickly, depending on documentation, inspections, and HMRC checks.",
    },
    {
      question: "Do you support river port and wharf clearances?",
      answer: "Yes — we regularly handle customs clearance for Medway river ports and terminals.",
    },
    {
      question: "Can you provide urgent or same-day clearance?",
      answer: "Yes — priority and same-day services are available.",
    },
    {
      question: "Do you work with freight forwarders and hauliers?",
      answer: "Absolutely. We provide white-label customs services.",
    },
    {
      question: "What if my HS codes are wrong?",
      answer: "We review and correct classifications before filing.",
    },
  ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>

        <Heroservice
          title="Customs Clearance Medway"
          desc={["Reliable Import & Export Support Across Medway"]}
          backgroundImage="/images/service-bg.jpg"
        />

        <NewService />

        <section className="pb-[80px]">
          <div className="max-w-[1350px] mx-auto px-[15px]">
            <div className="lg:flex lg:flex-row sm:flex sm:flex-col items-center gap-[66px] service_last">

              <div className="service-image">
                <div className="xl:block">
                  <div className="relative">
                    <Image
                      className="w-full rounded-lg"
                      src="/images/service-road.jpg"
                      alt="Customs clearance Medway"
                      width={573}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 lg:gap-[30px] xl:gap-[64px] content-center">
                <h2 className="mt-8 font-bold text-5xl lg:text-heading-1 md:text-[46px] text-[35px] mb-[22px]">
                  Customs Clearance Medway
                </h2>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
                  Medway is a key logistics and industrial area along the River Thames, supporting
                  bulk cargo, construction materials, and commercial imports serving Kent and the South East.
                </p>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
                  Global Customs provides specialist customs clearance services across Medway,
                  supporting importers, exporters, freight forwarders, hauliers, and manufacturers.
                </p>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
                  This page explains how our Medway customs clearance service works, the facilities we
                  cover, what documentation is required, and why businesses trust Global Customs.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Why Medway Is Important for
                <span className="text-[#0ea5e9]"> UK Customs Clearance</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                Medway’s river access, proximity to Sheerness and Dover, and strong road links make it
                a strategic location for UK imports and exports.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                  <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9]">
                    <Anchor size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Medway River Ports</h4>
                    <p className="text-slate-600">Handling bulk, industrial, and commercial cargo.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                  <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9]">
                    <Train size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Road & Rail Links</h4>
                    <p className="text-slate-600">Direct access to the M2, M20, and regional rail freight routes.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                  <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9]">
                    <Box size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Industrial Supply Chain</h4>
                    <p className="text-slate-600">Supporting construction, manufacturing, and energy sectors.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-blue-50/50 rounded-3xl -z-10 rotate-1" />
                <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl">
                  <div className="flex items-center gap-3 mb-8">
                    <MapPin className="text-[#0ea5e9]" size={28} />
                    <h3 className="text-2xl font-bold text-white">Inland Border Facilities</h3>
                  </div>

                  <ul className="grid grid-cols-1 gap-4">
                    {["Sevington IBF", "Dover IBF"].map((facility, i) => (
                      <li key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl text-white font-medium">
                        <div className="h-2 w-2 rounded-full bg-[#0ea5e9]" />
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-4 p-6 bg-white rounded-2xl border-l-4 border-r-4 border-[#0ea5e9] shadow-sm">
              <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-[#0ea5e9]">
                <Info size={20} strokeWidth={3} />
              </div>
              <p className="text-slate-700 font-medium">
                These facilities manage inspections, customs checks, and regulatory controls.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Our Customs Clearance Services in Medway</h2>
              <p className="mt-4 text-slate-600">We provide a complete range of customs services:</p>
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

        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Ports & Facilities We Cover in Medway</h2>
              <p className="text-slate-600 mt-4">We provide full customs coverage across:</p>
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

              <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                <p className="font-bold text-[#0ea5e9]">
                  Wherever your goods enter or leave Medway, we manage the customs process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                  <Image
                    src="/images/road-custom.png"
                    width={800}
                    height={800}
                    alt="Logistics warehouse"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Work With</h2>
                <p className="text-slate-600 mb-6">Our Medway clients include:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Importers",
                    "Exporters",
                    "Freight forwarders",
                    "Hauliers",
                    "Retailers",
                    "Manufacturers",
                    "Construction suppliers",
                    "Industrial distributors",
                    "E-commerce sellers",
                    "Food & drink importers",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>

                <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  From occasional shipments to continuous supply chains, we tailor our service to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-1/2 -z-10" />

          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What You Need for Customs Clearance in Medway
              </h2>
              <p className="text-slate-600 leading-relaxed">
                To process your customs declaration efficiently, we typically require:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">For Imports</h3>
                  <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0ea5e9]">
                    <DownloadCloud size={24} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
                  {[
                    "Commercial invoice",
                    "Packing list",
                    "Bill of lading / CMR / airway bill",
                    "HS codes (if known)",
                    "Country of origin",
                    "Incoterms",
                    "CPC code",
                    "EORI number",
                    "VAT number (if applicable)",
                    "Licences or certificates (if required)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-[#0ea5e9] h-5 w-5 mt-0.5" />
                      <span className="text-slate-700 font-medium text-[15px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl border border-slate-800">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">For Exports</h3>
                  <div className="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#0ea5e9]">
                    <UploadCloud size={24} />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Commercial invoice",
                    "Packing list",
                    "Export commodity codes",
                    "Transport details",
                    "Destination country",
                    "EORI number",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-[#0ea5e9] h-5 w-5 mt-0.5" />
                      <span className="text-white font-medium text-[15px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-12 flex items-center gap-4 p-6 bg-white rounded-2xl border-l-4 border-[#0ea5e9] shadow-sm max-w-2xl">
              <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-[#0ea5e9]">
                <Info size={20} strokeWidth={3} />
              </div>
              <p className="text-slate-700 font-medium">
                If you’re unsure about any documentation, we guide you step-by-step.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              How Global Customs Ensures Fast, Compliant Clearance
            </h2>

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

        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Common Customs Problems We Solve in Medway
            </h2>

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

        <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-left lg:text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Industries We Support in Medway
              </h2>
              <p className="text-slate-600 mb-10">We work with businesses across:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#3daee0] mb-12">
              {[
                "Construction",
                "Manufacturing",
                "Food & drink",
                "Automotive",
                "Retail",
                "Energy & utilities",
                "Logistics & freight forwarding",
                "E-commerce",
              ].map((ind, i) => (
                <div key={i} className="border-b border-r border-[#3daee0] px-6 py-6 text-slate-900 font-medium">
                  {ind}
                </div>
              ))}
            </div>

            <p className="text-slate-900 text-center font-medium">
              Whether your cargo arrives by river, road, or short-sea shipping, we can support your business.
            </p>
          </div>
        </section>

        <Testimonials />

        <SiteFAQs
          sectionTitle="FAQs"
          sectionDescription="Answers to key questions about customs clearance in Medway."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={medwayFaq}
        />

        <SiteCta
          title="Need fast, reliable customs clearance in Medway?"
          description="Contact Global Customs today for expert support, accurate declarations, and 24/7 assistance."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

      </Layout>
    </>
  )
}
