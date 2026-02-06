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
    title: "Customs Clearance Tilbury | Global Customs Clearance Ltd",
    description: "Reliable customs clearance services at the Port of Tilbury. Import & export declarations, CDS filings, and urgent clearance support.",
    keywords: "Customs Clearance Tilbury, Port of Tilbury Customs Broker, Import Export Clearance Tilbury, UK Customs Clearance Services",
  };

  const services = [
    { title: "Import Declarations (CDS)", desc: "Accurate CDS import declarations for containerised, RoRo, and bulk cargo arriving at Tilbury.", icon: <FileText /> },
    { title: "Export Declarations", desc: "Compliant export declarations for goods leaving the UK via Tilbury.", icon: <Send /> },
    { title: "T1 Transit Documents", desc: "Creation and discharge of T1 documents for onward EU movements.", icon: <Truck /> },
    { title: "HS Code Classification", desc: "Correct commodity code classification to avoid delays and overpaid duty.", icon: <Hash /> },
    { title: "Duty & VAT Consultancy", desc: "Advice on customs valuation, VAT accounting, and relief eligibility.", icon: <Calculator /> },
    { title: "Temporary Admission & ATA Carnets", desc: "Support for goods entering the UK temporarily via Tilbury.", icon: <Briefcase /> },
    { title: "Urgent & Same-Day Clearance", desc: "Priority customs clearance for time-critical Tilbury arrivals.", icon: <Clock /> },
    { title: "E-commerce & Amazon FBA Clearance", desc: "Clearance for goods moving to UK fulfilment and distribution centres.", icon: <ShoppingCart /> },
    { title: "Support for Freight Forwarders & Hauliers", desc: "White-label customs services for logistics operators.", icon: <Users /> },
  ];

  const requirements = [
    { title: "Port of Tilbury", details: ["Containerised imports", "RoRo freight", "Bulk and project cargo"] },
    { title: "London Gateway", details: ["Deep-sea container shipments", "High-volume imports"] },
    { title: "Thames River Terminals", details: ["Construction materials", "Industrial bulk goods"] },
    { title: "Tilbury Port Facilities", details: ["Customs examinations", "Port Health inspections"] },
    { title: "Inland Border Facilities", details: ["Tilbury IBF", "Sevington IBF"] },
  ];

  const features = [
    { title: "Tilbury Port Expertise", desc: "Hands-on experience with Tilbury port systems and clearance procedures." },
    { title: "Fast Turnaround", desc: "Pre-arrival filing to minimise delays and storage charges." },
    { title: "Compliance-First Approach", desc: "Every declaration prepared in line with HMRC and CDS rules." },
    { title: "Transparent Pricing", desc: "Clear pricing with no hidden costs." },
    { title: "24/7 Support", desc: "Support for urgent and out-of-hours port movements." },
    { title: "Nationwide Coverage", desc: "Seamless support as goods move inland across the UK." },
  ];

  const problems = [
    { title: "Port Delays", desc: "We prevent delays caused by missing or incorrect declarations." },
    { title: "Incorrect CPC Codes", desc: "Wrong procedure codes can block release — we apply the correct ones." },
    { title: "Port Health Holds", desc: "We manage documentation for regulated and controlled goods." },
    { title: "Incorrect Valuation", desc: "Accurate customs values to avoid HMRC penalties or audits." },
    { title: "Duty Relief Errors", desc: "Correct application of reliefs and suspensions." },
    { title: "Post-Clearance Amendments", desc: "Amendments and voluntary disclosures handled efficiently." },
  ];

  const tilburyFaq = [
    {
      question: "How long does customs clearance take at Tilbury?",
      answer: "Most declarations are processed quickly, subject to documentation, inspections, and HMRC checks.",
    },
    {
      question: "Do you handle Port Health and inspections?",
      answer: "Yes — we support goods requiring Port Health or regulatory clearance.",
    },
    {
      question: "Can you provide same-day clearance?",
      answer: "Yes — we offer urgent and same-day customs clearance services.",
    },
    {
      question: "Do you work with freight forwarders and hauliers?",
      answer: "Absolutely. We provide white-label customs services.",
    },
    {
      question: "What if my HS codes are incorrect?",
      answer: "We review and correct classifications before submission.",
    },
  ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>

        <Heroservice
          title="Customs Clearance Tilbury"
          desc={["Fast, Reliable Import & Export Support at the Port of Tilbury"]}
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
                      alt="Customs clearance Tilbury"
                      width={573}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 lg:gap-[30px] xl:gap-[64px] content-center">
                <h2 className="mt-8 font-bold text-5xl lg:text-heading-1 md:text-[46px] text-[35px] mb-[22px]">
                  Customs Clearance Tilbury
                </h2>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
                  The Port of Tilbury is a key UK river port serving London and the South East, handling
                  containerised, RoRo, bulk, and project cargo every day.
                </p>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
                  Global Customs provides specialist customs clearance services at Tilbury, supporting
                  importers, exporters, freight forwarders, hauliers, and distribution centres.
                </p>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
                  This page explains how our Tilbury customs clearance service works, the facilities we
                  cover, the documentation required, and why businesses trust Global Customs.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Why Tilbury Is Critical for
                <span className="text-[#0ea5e9]"> UK Customs Clearance</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                Tilbury plays a vital role in supplying London and the South East, with fast access to
                road, rail, and inland distribution networks.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                  <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9]">
                    <Anchor size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Port of Tilbury</h4>
                    <p className="text-slate-600">Major UK river port serving London and the South East.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                  <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9]">
                    <Train size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Road & Rail Connectivity</h4>
                    <p className="text-slate-600">Direct access to the M25, A13, and national rail freight routes.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                  <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9]">
                    <Box size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Bulk & Project Cargo</h4>
                    <p className="text-slate-600">Specialist handling for industrial and construction cargo.</p>
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
                    {["Tilbury IBF", "Sevington IBF"].map((facility, i) => (
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
              <h2 className="text-3xl font-bold text-slate-900">Our Customs Clearance Services in Tilbury</h2>
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
              <h2 className="text-3xl font-bold text-slate-900">Ports & Facilities We Cover in Tilbury</h2>
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
                  Wherever your goods enter or leave Tilbury, we manage the customs process.
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
                <p className="text-slate-600 mb-6">Our Tilbury clients include:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Importers",
                    "Exporters",
                    "Freight forwarders",
                    "Hauliers",
                    "Retailers",
                    "Manufacturers",
                    "E-commerce sellers",
                    "Amazon FBA merchants",
                    "Construction suppliers",
                    "Food & drink distributors",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>

                <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  Whether you move one shipment or hundreds per week, we tailor our service to your operation.
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
                What You Need for Customs Clearance in Tilbury
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
              Common Customs Problems We Solve in Tilbury
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
                Industries We Support in Tilbury
              </h2>
              <p className="text-slate-600 mb-10">We work with businesses across:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#3daee0] mb-12">
              {[
                "E-commerce",
                "Automotive",
                "Food & drink",
                "Pharmaceuticals",
                "Retail",
                "Manufacturing",
                "Logistics & freight forwarding",
                "Construction & infrastructure",
              ].map((ind, i) => (
                <div key={i} className="border-b border-r border-[#3daee0] px-6 py-6 text-slate-900 font-medium">
                  {ind}
                </div>
              ))}
            </div>

            <p className="text-slate-900 text-center font-medium">
              Whether you import small parcels or oversized project cargo, we can support your operation.
            </p>
          </div>
        </section>

        <Testimonials />

        <SiteFAQs
          sectionTitle="FAQs"
          sectionDescription="Answers to key questions about customs clearance at the Port of Tilbury."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={tilburyFaq}
        />

        <SiteCta
          title="Need fast, reliable customs clearance at Tilbury?"
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
