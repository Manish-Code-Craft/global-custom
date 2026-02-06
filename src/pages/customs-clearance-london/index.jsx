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
    title: "Customs Clearance London | London Gateway & Tilbury Brokers",
    description: "Expert Customs Clearance in London. Specialized brokerage for London Gateway, Port of Tilbury, and Heathrow. Fast, compliant CDS declarations for the capital.",
    keywords: "Customs Clearance London, London Gateway Brokers, Tilbury Port Customs, London Import Export, Heathrow Customs Services, Thames Estuary Logistics",
  };

  const services = [
    { title: "Import Declarations (CDS)", desc: "Reliable processing for London businesses importing containerised cargo or air freight.", icon: <FileText /> },
    { title: "Export Declarations", desc: "Helping London's global traders reach international markets with full export compliance.", icon: <Send /> },
    { title: "London Gateway Specialists", desc: "Deep expertise in handling automated container clearances at DP World London Gateway.", icon: <Box /> },
    { title: "HS Code Classification", desc: "Precise commodity coding to ensure London firms pay the correct duty and VAT.", icon: <Hash /> },
    { title: "Duty & VAT Consultancy", desc: "Specialist advice on Postponed VAT Accounting and duty deferment for London importers.", icon: <Calculator /> },
    { title: "Heathrow Air Freight", desc: "Fast-track customs support for time-sensitive cargo arriving at London Heathrow Airport.", icon: <Clock /> },
    { title: "Port of Tilbury Support", desc: "Comprehensive clearance for bulk, paper, and grain imports at the historic Port of Tilbury.", icon: <Anchor /> },
    { title: "E-commerce & Amazon FBA", desc: "Customs solutions for London’s massive community of online retailers and FBA sellers.", icon: <ShoppingCart /> },
    { title: "Wholesale & Distribution", desc: "Partnering with London-based distribution centres for high-volume customs management.", icon: <Users /> },
  ];

  const requirements = [
    { title: "DP World London Gateway", details: ["UK's most advanced automated container port", "Strategic terminal for Asian and European trade"] },
    { title: "Port of Tilbury", details: ["London's major multi-modal port", "Critical hub for construction, paper, and bulk commodities"] },
    { title: "Heathrow & City Airports", details: ["High-speed air freight clearance", "Support for express and perishable goods"] },
    { title: "Thames Estuary Cluster", details: ["Strategic monitoring of goods entering via the Thames", "Direct links to East London industrial zones"] },
    { title: "M25 & A13 Corridors", details: ["Primary logistics arteries for the capital's supply chain"] },
  ];

  const features = [
    { title: "London Market Knowledge", desc: "We understand the fast-paced logistics requirements of the capital’s diverse business sectors." },
    { title: "Strategic Thames Links", desc: "Perfectly positioned to support businesses using London Gateway and Tilbury ports." },
    { title: "HMRC Compliance", desc: "Expert filing in the Customs Declaration Service (CDS) to ensure error-free London trade." },
    { title: "Transparent Pricing", desc: "Clear, competitive fee structures with no hidden costs for London businesses." },
    { title: "Real-Time Tracking", desc: "Direct communication on your shipment’s status as it moves through the London ports." },
    { title: "Multi-Modal Expertise", desc: "Specialist support for sea, air, and road freight entering the Greater London area." },
  ];

  const problems = [
    { title: "Incorrect CPC Codes", desc: "We ensure the right Customs Procedure Codes are used to avoid tax overpayment." },
    { title: "Port Authority Hold-ups", desc: "Resolving documentation issues quickly at London Gateway and Tilbury terminals." },
    { title: "Valuation Discrepancies", desc: "Ensuring accurate customs valuation to protect London firms from HMRC audits." },
    { title: "Missing Shipping Links", desc: "Aligning commercial invoices with Bill of Lading data for seamless CDS entry." },
    { title: "Duty Relief Errors", desc: "Maximising inward processing and temporary admission benefits for London trade." },
    { title: "Heathrow Transit Delays", desc: "Streamlining air freight paperwork for immediate terminal release." },
  ];

  const londonFaq = [
    {
      question: "Do you handle clearances at London Gateway?",
      answer: "Yes, we are fully integrated with the systems at DP World London Gateway to provide rapid container clearance.",
    },
    {
      question: "Can you assist with air freight at Heathrow?",
      answer: "Absolutely. We manage air freight declarations for businesses across London, ensuring fast turnaround at Heathrow and London City airports.",
    },
    {
      question: "Do you offer support for Tilbury-based wholesalers?",
      answer: "Yes, we specialize in bulk and multi-modal clearances for wholesalers operating in and around the Port of Tilbury.",
    },
    {
      question: "How do I register for an EORI in London?",
      answer: "Our team can guide you through the EORI registration process and ensure your VAT settings are optimized for importing.",
    },
    {
      question: "Is your London service available for urgent shipments?",
      answer: "Yes, we offer 24/7 support for time-critical shipments arriving at London’s major sea and air terminals.",
    },
  ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance London"
          desc={[
            "Premier Import & Export Support for London's Sea Ports and Airports",
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
                      alt="Customs clearance London"
                      width={573}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 lg:gap-[30px] xl:gap-[64px] content-center">
                <h2 className="mt-8 font-bold text-5xl lg:text-heading-1 md:text-[46px] text-[35px] mb-[22px]">
                  Customs Clearance London
                </h2>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
                  London is the UK’s economic engine, fueled by a complex web of global trade. From the high-tech automation of **London Gateway** to the industrial strength of **Tilbury** and the speed of **Heathrow**, London-based businesses require a customs partner who can operate across all modes of transport.
                </p>
                <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
                  Global Customs provides comprehensive brokerage services across the Greater London area. We bridge the gap between your international suppliers and the HMRC, ensuring that every declaration is filed with precision in the Customs Declaration Service (CDS).
                </p>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
                  Whether you are importing consumer goods for the London retail market or exporting industrial components via the Thames, our expert brokers keep your supply chain moving.
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
                London: The Heart of 
                <span className="text-[#0ea5e9]"> UK International Trade</span>
              </h2>
              <p className=" text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                Connecting the capital to the world through the Thames Estuary and the UK’s busiest airports.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="">
                <div className="space-y-6">
                  <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                    <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9] shrink-0">
                      <Anchor size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">London Gateway & Tilbury</h4>
                      <p className="text-slate-600">Expertise in both automated container terminals and multi-modal bulk ports.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                    <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9] shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Heathrow Air Freight</h4>
                      <p className="text-slate-600">Specialist support for high-priority air cargo and express logistics.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                    <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9] shrink-0">
                      <Truck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">M25 Logistics Hubs</h4>
                      <p className="text-slate-600">Tailored customs solutions for distribution centres across the Greater London area.</p>
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
                      <h3 className="text-2xl font-bold text-white">London Strategic Points</h3>
                    </div>
                    <ul className="grid grid-cols-1 gap-4">
                      {['DP World London Gateway', 'Port of Tilbury', 'London Heathrow Airport (LHR)', 'London City Airport'].map((facility, i) => (
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
              <h2 className="text-3xl font-bold text-slate-900">Customs Brokerage for London Businesses</h2>
              <p className="mt-4 text-slate-600">Comprehensive support for the capital's trade sectors:</p>
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
              <h2 className="text-3xl font-bold text-slate-900">Major London Hubs We Cover</h2>
              <p className="text-slate-600 mt-4">We provide integrated customs brokerage at London’s primary trade terminals:</p>
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
                    alt="London Logistics"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Work With</h2>
                <p className="text-slate-600 mb-6">Our London-based clients include:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    'Global Importers', 'London Retailers', 'Wholesale Distributors', 'Amazon FBA Sellers',
                    'Manufacturing Hubs', 'E-commerce Startups', 'Logistics Providers',
                    'Freight Forwarders', 'Construction Firms', 'Automotive Importers'
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
                London Customs Requirements
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">For London Imports</h3>
                  <DownloadCloud className="text-[#0ea5e9]" size={24} />
                </div>
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
                  <div className="space-y-4">
                    {[
                      'Commercial invoice', 'Packing list', 'Transport docs (BOL/AWB)',
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
                      'GB EORI Number', 'VAT Registration', 'Specialist Certificates', 'HMRC Deferment info'
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
                  <h3 className="text-2xl font-bold text-white">For London Exports</h3>
                  <UploadCloud className="text-[#0ea5e9]" size={24} />
                </div>
                <div className="space-y-4">
                  {[
                    'Sales invoice', 'Packing manifest', 'Export commodity codes',
                    'Transport details', 'Destination country', 'EORI number'
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
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Compliant, Fast, & Reliable</h2>
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
            <h2 className="text-3xl font-bold mb-12 text-center">Navigating London's Customs Challenges</h2>
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
          sectionTitle="London Customs FAQs"
          sectionDescription="Essential guide for businesses trading through London's ports and airports."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={londonFaq}
        />

        <SiteCta
          title="Need professional customs clearance in London?"
          description="Contact our team today for fast, accurate filings and expert brokerage across the London trade network."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
        />
      </Layout>
    </>
  )
}