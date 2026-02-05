import React from "react"
import NewService from "@/components/Home/Services/NewService"
import Layout from "@/components/ui/Layout"
import Heroservice from "@/components/ui/Heroservice"
import PageHead from "@/components/ui/PageHead"
import Image from "next/image"
import {
  FileText,
  Send,
  Truck,
  Hash,
  Calculator,
  Briefcase,
  Clock,
  ShoppingCart,
  Users,
  DownloadCloud, 
  UploadCloud, Info,
  CheckCircle,
} from "lucide-react";
import Testimonials from "@/components/ui/Testimonials"
import SiteFAQs from "@/components/ui/SiteFAQs"
import SiteCta from "@/components/ui/SiteCta"

export default function Services({preview}){  
   const PageMeta = {
    title: "Customs Clearance Kent | Global Customs Clearance Ltd",
    description:"Discover seamless Customs Clearance services in Kent with Global Customs Clearance Ltd. Streamline your imports and exports efficiently today. Call now!",
    keywords: "Customs Clearance Kent, Kent Customs Brokers, Import Export Clearance Kent, Global Customs Clearance, UK Customs Clearance Services,",
  };

  const services = [
    { title: "Import Declarations (CDS)", desc: "Fast, accurate import declarations for goods entering the UK.", icon: <FileText /> },
    { title: "Export Declarations", desc: "Full export filings for goods leaving the UK.", icon: <Send /> },
    { title: "T1 Transit Documents", desc: "Creation and discharge of T1s for goods moving onward into Europe.", icon: <Truck /> },
    { title: "HS Code Classification", desc: "Correct commodity codes to avoid overpaying duty.", icon: <Hash /> },
    { title: "Duty & VAT Consultancy", desc: "Guidance on duty reliefs, VAT accounting, and cost-saving opportunities.", icon: <Calculator /> },
    { title: "Temporary Admission & ATA Carnets", desc: "Support for goods entering the UK temporarily.", icon: <Briefcase /> },
    { title: "Urgent & Same-Day Clearance", desc: "Priority processing for time-critical shipments.", icon: <Clock /> },
    { title: "E-commerce & Amazon FBA Clearance", desc: "Specialist support for online sellers and fulfilment centres.", icon: <ShoppingCart /> },
    { title: "Support for Freight Forwarders & Hauliers", desc: "White-label customs services for logistics providers.", icon: <Users /> },
  ];

  const requirements = [
    { title: "Commercial Invoice", details: ["Seller and buyer details", "Product descriptions", "HS codes", "Value", "Currency", "Incoterms"] },
    { title: "Packing List", details: ["Details of weights, quantities, and packaging."] },
    { title: "Transport Document", details: ["Bill of lading", "Airway bill", "CMR"] },
    { title: "EORI Number", details: ["Required for all UK/EU movements."] },   
    { title: "Destination Details", details: ["Bonded warehouse", "Customs office or,", "Final delivery point"] },
    { title: "Vehicle & Driver Details", details: ["For road transport."] }
  ];

  const features = [
    { title: "Local Expertise", desc: "We understand Kent’s ports, routes, and logistics network." },
    { title: "Fast Turnaround", desc: "We process declarations quickly to keep your goods moving." },
    { title: "Compliance-First Approach", desc: "We ensure every declaration meets HMRC requirements." },
    { title: "Transparent Pricing", desc: "Clear, competitive rates with no hidden fees." },
    { title: "24/7 Support", desc: "Urgent shipments? No problem — we’re always available." },
    { title: "Nationwide Coverage", desc: "We support all major UK ports and airports." },
  ];
  
  const problems = [
    { title: "Incorrect HS Codes", desc: "We classify goods accurately to avoid overpayment." },
    { title: "Wrong CPC Codes", desc: "Incorrect procedure codes can cause delays or rejected declarations." },
    { title: "Missing Document Codes", desc: "CDS requires specific document references for many goods." },
    { title: "Incorrect Valuation", desc: "Errors in customs value can trigger audits or penalties." },
    { title: "Duty Relief Misuse", desc: "We ensure reliefs are applied correctly and legally." },
    { title: "Post-Clearance Errors", desc: "We handle amendments and corrections on your behalf." },
  ];

  const kentFaq = [
    {
      question: "How long does customs clearance take in Kent?",
      answer: "Most declarations are processed quickly, but timing depends on documentation, port traffic, and HMRC checks.",
    },
    {
      question: "Do you support CDS import declarations?",
      answer: "Yes — all import declarations are processed through CDS.",
    },
    {
      question: "Can you handle urgent or same-day shipments?",
      answer: "Absolutely. We offer priority processing for time-critical goods.",
    },
    {
      question: "Do you work with freight forwarders?",
      answer: "Yes — we provide white-label customs services for logistics companies.",
    },
    {
      question: "What if I don’t know my HS codes?",
      answer: "We can classify your goods accurately.",
    },
  ];
  
    
    return(
        <>
        <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
          <Heroservice 
            title="Customs Clearance Kent" 
            desc={[
              "Fast, Reliable Import & Export Support Across the County",           
            ]} 
            backgroundImage="/images/service-bg.jpg"
          />

          <NewService/>

          <section className="pb-[80px] ">
            <div className="max-w-[1350px] mx-auto px-[15px]">
              <div className="lg:flex lg:flex-row sm:flex sm:flex-col items-center gap-[66px] service_last">

                <div className="service-image">
                  <div className="xl:block">
                    <div className="relative">
                      <Image
                        className="w-full rounded-lg"
                        src="/images/service-road.jpg"
                        alt="Customs clearance service"
                        width={573}
                        height={500}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 lg:gap-[30px] xl:gap-[64px] content-center">
                  <h2 className="mt-8 font-bold text-5xl lg:text-heading-1 md:text-[46px] text-[35px] mb-[22px]">
                    Customs Clearance Kent
                  </h2>

                  <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
                  Kent is the gateway to UK trade. With major ports such as Dover, Sheerness,
                  Thamesport, and the Eurotunnel terminal at Folkestone, thousands of shipments move
                  through the county every day. Whether you’re importing goods into the UK or exporting
                  products to Europe and beyond, fast and compliant customs clearance is essential to
                  keeping your supply chain running smoothly
                  </p>
                  <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
                  Global Customs provides specialist customs clearance services across Kent,
                  supporting importers, exporters, freight forwarders, hauliers, manufacturers, and
                  e-commerce businesses. Based locally, we understand the unique demands of Kent’s
                  logistics network — from Dover’s high-volume traic to the inland border facilities at
                  Sevington and Ashford.
                  </p>

                  <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
                  This page explains how our customs clearance service works, the ports we cover, what
                  documents you need, and why businesses across Kent trust Global Customs for fast,
                  accurate, and compliant declarations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 bg-slate-50 ">
            <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">Our T1 Transit Services</h2>
                <p className="mt-4 text-slate-600">We provide a complete range of T1 services:</p>
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

          {/* Requirements Section */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-5xl mx-auto px-[12px] md:px-[36px] xl:px-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">What You Need for a T1 Transit Document</h2>
                <p className="text-slate-600 mt-4">To create a T1 quickly, we typically require:</p>
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
                  <p className="font-bold text-[#0ea5e9]">If you’re unsure about any of this, we guide you step-by-step.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Who We Work With - Image 2 */}
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
                  <p className="text-slate-600 mb-6">Our clients include:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                      'Importers','Exporters', 'Freight forwarders', 'Hauliers',
                      'Retailers', 'Manufacturers', 'E-commerce sellers', 
                      'Amazon FBA merchants', 'Automotive suppliers', 'Food & drink distributors'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                    Whether you move one shipment a month or hundreds per week, we tailor our service to your needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

         {/* What You Need for Customs Clearance */}
          <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Decorative background element to match modern logistics theme */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-1/2 -z-10" />
            
            <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
              <div className="max-w-3xl mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  What You Need for Customs Clearance in Kent
                </h2>
                <p className=" text-slate-600 leading-relaxed">
                  To process your customs declaration quickly, we typically require the following documentation and details:
                </p>
              </div>

              {/* Using grid-cols-12 to allow the Imports wrapper to be wider (7 columns vs 5) for balance */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Imports Card - Occupies 7 columns */}
                <div className="lg:col-span-7 group bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 hover:border-[#0ea5e9] transition-all duration-300">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-slate-900">For Imports</h3>
                    <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0ea5e9]">
                      <DownloadCloud size={24} />
                    </div>
                  </div>
                  
                  {/* Split into two columns: 1-7 in first, remaining in second */}
                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
                    {/* First Grid (Points 1-7) */}
                    <div className="space-y-4">
                      {[
                        'Commercial invoice', 'Packing list', 'Bill of lading / CMR / airway bill',
                        'HS codes (if known)', 'Country of origin', 'Incoterms', 
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 group/item">
                          <CheckCircle className="text-[#0ea5e9] h-5 w-5 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 font-medium text-[15px] leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Second Grid (Remaining) */}
                    <div className="space-y-4">
                      {[
                        'CPC code','EORI number', 'VAT number (if applicable)', 'Licences or certificates (if required)'
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 group/item">
                          <CheckCircle className="text-[#0ea5e9] h-5 w-5 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 font-medium text-[15px] leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Exports Card - Occupies 5 columns */}
                <div className="lg:col-span-5 group bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl border border-slate-800 hover:border-[#0ea5e9] transition-all duration-3000 h-full">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-white">For Exports</h3>
                    <div className="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#0ea5e9]">
                      <UploadCloud size={24} />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      'Commercial invoice', 'Packing list', 'Export commodity codes',
                      'Transport details', 'Destination country', 'EORI number'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <CheckCircle className="text-[#0ea5e9] h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-white font-medium text-[15px] leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-4 p-6 bg-white rounded-2xl border-l-4 border-[#0ea5e9] shadow-sm max-w-2xl">
                <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-[#0ea5e9]">
                  <Info size={20} strokeWidth={3} />
                </div>
                <p className="text-slate-700 font-medium">
                  If you’re unsure about any of this, we guide you step-by-step.
                </p>
              </div>
            </div>
          </section>

          {/* How We Ensure Fast Filing */}
          <section className="py-20 bg-white">
            <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How Global Customs Ensures Fast, Compliant Clearance</h2>
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
            <h2 className="text-3xl font-bold mb-12 text-center">
              Common Food & Drink Customs Problems We Solve
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

          {/* Industries */}
          <section className="py-20 bg-white">
            <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
              <div className="text-left lg:text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Industries We Support in Kent
                </h2>
                <p className="text-slate-600 mb-10">
                  We work with businesses across:
                </p>
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
                  "Amazon FBA sellers"
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
                Whether you import small parcels or full containers, we can support your needs.
              </p>
            </div>
          </section>

          <Testimonials />
          
          <SiteFAQs
            sectionTitle="FAQs"
            sectionDescription="Answers to key questions about Kent customs clearance and CDS imports."
            buttonText="get a quote"
            buttonLink="/contact"
            faqs={kentFaq}
          />

          <SiteCta
            title="Need fast, reliable customs clearance in Kent?"
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