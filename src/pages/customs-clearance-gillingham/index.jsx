import React from "react"
import NewService from "@/components/Home/Services/NewService"
import Layout from "@/components/ui/Layout"
import Heroservice from "@/components/ui/Heroservice"
import PageHead from "@/components/ui/PageHead"
import Image from "next/image"
import {
  FileText,
  Anchor,
  Train,
  Box,
  MapPin,
  Send,
  Truck,
  Hash,
  Calculator,
  Briefcase,
  Clock,
  ShoppingCart,
  Users,
  DownloadCloud,
  UploadCloud,
  Info,
  CheckCircle,
} from "lucide-react"
import Testimonials from "@/components/ui/Testimonials"
import SiteFAQs from "@/components/ui/SiteFAQs"
import SiteCta from "@/components/ui/SiteCta"

export default function Services({ preview }) {
  const PageMeta = {
    title: "Customs Clearance Gillingham | Global Customs Clearance Ltd",
    description:
      "Professional customs clearance services in Gillingham. Import & export declarations, Medway river port clearance, and CDS customs support.",
    keywords:
      "Customs Clearance Gillingham, Gillingham Customs Broker, Import Export Clearance Gillingham, Medway Customs Clearance",
  }

  const services = [
    { title: "Import Declarations (CDS)", desc: "Accurate CDS import declarations for cargo arriving via Gillingham and the River Medway.", icon: <FileText /> },
    { title: "Export Declarations", desc: "Fully compliant export declarations for goods leaving the UK through Medway ports.", icon: <Send /> },
    { title: "T1 Transit Documents", desc: "Creation and discharge of T1 documents for goods moving onward into the EU.", icon: <Truck /> },
    { title: "HS Code Classification", desc: "Correct commodity code classification to avoid delays and duty overpayment.", icon: <Hash /> },
    { title: "Duty & VAT Consultancy", desc: "Support with customs valuation, VAT accounting, and duty relief schemes.", icon: <Calculator /> },
    { title: "Temporary Admission & ATA Carnets", desc: "Customs support for goods entering the UK temporarily via Gillingham.", icon: <Briefcase /> },
    { title: "Urgent & Same-Day Clearance", desc: "Priority customs clearance for time-sensitive river and road shipments.", icon: <Clock /> },
    { title: "E-commerce & Amazon FBA Clearance", desc: "Clearance for stock moving to UK fulfilment centres from Medway ports.", icon: <ShoppingCart /> },
    { title: "Support for Freight Forwarders & Hauliers", desc: "White-label customs services for logistics providers operating in Kent.", icon: <Users /> },
  ]

  const requirements = [
    { title: "Gillingham Wharves", details: ["Bulk cargo imports", "Construction materials", "Project and industrial cargo"] },
    { title: "River Medway Terminals", details: ["Short-sea shipping", "Industrial and manufacturing imports"] },
    { title: "Sheerness Port (Nearby)", details: ["Automotive traffic", "RoRo and specialist cargo"] },
    { title: "Thames Estuary Ports", details: ["Containerised imports", "Commercial freight"] },
    { title: "Inland Border Facilities", details: ["Sevington IBF", "Dover IBF"] },
  ]

  const features = [
    { title: "Local Medway Expertise", desc: "In-depth understanding of customs processes at Gillingham and Medway river ports." },
    { title: "Fast Turnaround", desc: "Pre-lodged declarations to minimise delays at the quay." },
    { title: "Compliance-First Approach", desc: "Every declaration prepared to HMRC and CDS requirements." },
    { title: "Transparent Pricing", desc: "Clear pricing with no hidden charges." },
    { title: "24/7 Support", desc: "Out-of-hours support for urgent shipments." },
    { title: "Nationwide Coverage", desc: "Seamless support as goods move inland across the UK." },
  ]

  const problems = [
    { title: "River Port Delays", desc: "We prevent delays caused by incomplete or late customs submissions." },
    { title: "Incorrect CPC Codes", desc: "Wrong procedure codes corrected before filing." },
    { title: "Missing Documentation", desc: "We identify and resolve documentation gaps quickly." },
    { title: "Incorrect Valuation", desc: "Accurate customs values to avoid penalties or audits." },
    { title: "Misused Duty Reliefs", desc: "Ensuring reliefs are applied correctly and legally." },
    { title: "Post-Clearance Errors", desc: "Fast amendments and voluntary disclosures handled on your behalf." },
  ]

  const gillinghamFaq = [
    {
      question: "How long does customs clearance take in Gillingham?",
      answer: "Most declarations are processed quickly, depending on documentation accuracy and HMRC checks.",
    },
    {
      question: "Do you clear goods at Gillingham river wharves?",
      answer: "Yes — we regularly handle customs clearance for Gillingham and Medway river terminals.",
    },
    {
      question: "Can you provide same-day customs clearance?",
      answer: "Yes. We offer priority and same-day clearance for urgent shipments.",
    },
    {
      question: "Do you work with freight forwarders and hauliers?",
      answer: "Absolutely. We provide white-label customs services for logistics providers.",
    },
    {
      question: "What if my HS codes are incorrect?",
      answer: "We review and correct HS codes before submitting declarations.",
    },
  ]

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>

        <Heroservice
          title="Customs Clearance Gillingham"
          desc={["Reliable Import & Export Support Across the Medway Area"]}
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
                      alt="Customs clearance Gillingham"
                      width={573}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 lg:gap-[30px] xl:gap-[64px] content-center">
                <h2 className="mt-8 font-bold text-5xl lg:text-heading-1 md:text-[46px] text-[35px] mb-[22px]">
                  Customs Clearance Gillingham
                </h2>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
                  Gillingham is a key commercial and industrial hub on the River Medway, supporting bulk cargo,
                  construction materials, and manufacturing imports serving Kent and the South East.
                </p>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
                  Global Customs provides specialist customs clearance services in Gillingham,
                  supporting importers, exporters, freight forwarders, hauliers, manufacturers,
                  and project cargo operators.
                </p>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
                  This page explains how our customs clearance service works in Gillingham,
                  the facilities we cover, and why businesses trust Global Customs for fast,
                  accurate, and compliant declarations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="py-20 bg-slate-50 overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Why Gillingham Is Important for
                <span className="text-[#0ea5e9]"> UK Customs Clearance</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                Gillingham’s position on the River Medway makes it a strategic entry point for bulk
                and industrial cargo serving Kent and Greater London.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                    <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9] shrink-0">
                      <Anchor size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">River Medway Access</h4>
                      <p className="text-slate-600">Ideal for bulk, project, and short-sea cargo.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                    <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9] shrink-0">
                      <Train size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Strong Transport Links</h4>
                      <p className="text-slate-600">Efficient road and rail connections across Kent.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                    <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9] shrink-0">
                      <Box size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Industrial & Construction Focus</h4>
                      <p className="text-slate-600">Supporting manufacturing and infrastructure sectors.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
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
            </div>

            <div className="mt-12 flex items-center justify-center gap-4 p-6 bg-white rounded-2xl border-l-4 border-r-4 border-[#0ea5e9] shadow-sm">
              <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-[#0ea5e9]">
                <Info size={20} strokeWidth={3} />
              </div>
              <p className="text-slate-700 font-medium">
                These facilities handle customs checks and inspections for goods moving through the Medway area.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">
                Our Customs Clearance Services in Gillingham
              </h2>
              <p className="mt-4 text-slate-600">
                We provide a complete range of customs services across the Medway area:
              </p>
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

        {/* PORTS & FACILITIES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">
                Ports & Facilities We Cover in Gillingham
              </h2>
              <p className="text-slate-600 mt-4">
                We provide full customs coverage across:
              </p>
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
                  Wherever your goods enter or leave the Medway area, we can handle the customs process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE WORK WITH */}
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
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Who We Work With
                </h2>
                <p className="text-slate-600 mb-6">
                  Our clients in Gillingham include:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Importers",
                    "Exporters",
                    "Freight forwarders",
                    "Hauliers",
                    "Manufacturers",
                    "Construction suppliers",
                    "E-commerce sellers",
                    "Amazon FBA merchants",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>

                <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  Whether you handle occasional shipments or daily cargo movements,
                  we tailor our service to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU NEED */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-1/2 -z-10" />

          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What You Need for Customs Clearance in Gillingham
              </h2>
              <p className="text-slate-600 leading-relaxed">
                To process your customs declaration quickly, we typically require the following:
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
                  <div className="space-y-4">
                    {[
                      "Commercial invoice",
                      "Packing list",
                      "Bill of lading / CMR / airway bill",
                      "HS codes (if known)",
                      "Country of origin",
                      "Incoterms",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-[#0ea5e9] h-5 w-5 mt-0.5" />
                        <span className="text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {[
                      "CPC code",
                      "EORI number",
                      "VAT number (if applicable)",
                      "Licences or certificates (if required)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-[#0ea5e9] h-5 w-5 mt-0.5" />
                        <span className="text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
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
                      <span className="text-white font-medium">{item}</span>
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

        {/* FEATURES */}
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

        {/* PROBLEMS */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Common Customs Problems We Solve in Gillingham
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((prob, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h4 className="font-bold text-[#0ea5e9] text-lg mb-2">
                    {prob.title}
                  </h4>
                  <p className="text-blue-50">
                    {prob.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-left lg:text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Industries We Support in Gillingham
              </h2>
              <p className="text-slate-600 mb-10">
                We work with businesses across:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#3daee0] mb-12">
              {[
                "Construction",
                "Manufacturing",
                "Automotive",
                "Retail",
                "E-commerce",
                "Food & drink",
                "Logistics & freight forwarding",
                "Project cargo",
              ].map((ind, i) => (
                <div
                  key={i}
                  className="border-b border-r border-[#3daee0] px-6 py-6 text-slate-900 font-medium"
                >
                  {ind}
                </div>
              ))}
            </div>

            <p className="text-slate-900 text-center font-medium">
              Whether you import bulk materials or finished goods, we can support your operation.
            </p>
          </div>
        </section>

        <Testimonials />

        <SiteFAQs
          sectionTitle="FAQs"
          sectionDescription="Answers to key questions about customs clearance in Gillingham."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={gillinghamFaq}
        />

        <SiteCta
          title="Need fast, reliable customs clearance in Gillingham?"
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
