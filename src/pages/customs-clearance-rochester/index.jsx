import React from "react"
import NewService from "@/components/Home/Services/NewService"
import Layout from "@/components/ui/Layout"
import Heroservice from "@/components/ui/Heroservice"
import PageHead from "@/components/ui/PageHead"
import Image from "next/image"
import { FileText, Anchor, Train, Box, MapPin, Send, Truck, Hash, Calculator, Briefcase, Clock, ShoppingCart, Users, DownloadCloud, UploadCloud, Info, CheckCircle, Factory } from "lucide-react";
import Testimonials from "@/components/ui/Testimonials"
import SiteFAQs from "@/components/ui/SiteFAQs"
import SiteCta from "@/components/ui/SiteCta"

export default function Services({ preview }) {
  const PageMeta = {
    title: "Customs Clearance Rochester | Medway Customs Brokers",
    description: "Expert Customs Clearance in Rochester and the Medway area. Fast, compliant import & export declarations for businesses near the M2 and Kent ports. Call now!",
    keywords: "Customs Clearance Rochester, Medway Customs Brokers, Rochester Import Export, Kent Customs Services, Medway Logistics Support, CDS Declarations Rochester",
  };

  const services = [
    { title: "Import Declarations (CDS)", desc: "Reliable processing for Rochester businesses importing raw materials or finished goods.", icon: <FileText /> },
    { title: "Export Declarations", desc: "Helping Medway manufacturers reach global markets with full export compliance.", icon: <Send /> },
    { title: "T1 Transit Documents", desc: "Facilitating the movement of goods from Rochester to European destinations via the Kent coast.", icon: <Truck /> },
    { title: "HS Code Classification", desc: "Precise commodity coding to ensure Medway businesses pay the correct duty and VAT.", icon: <Hash /> },
    { title: "Duty & VAT Consultancy", desc: "Specialist advice on Postponed VAT Accounting and duty deferment schemes.", icon: <Calculator /> },
    { title: "Temporary Admission", desc: "Support for specialist machinery or equipment entering Rochester on a temporary basis.", icon: <Briefcase /> },
    { title: "Urgent & Same-Day Clearance", desc: "Priority handling for time-sensitive shipments arriving at nearby ports.", icon: <Clock /> },
    { title: "E-commerce & Amazon FBA", desc: "Customs solutions for Rochester’s growing community of online retailers.", icon: <ShoppingCart /> },
    { title: "Support for Logistics Providers", desc: "Partnering with Rochester-based haulage and freight companies for white-label services.", icon: <Users /> },
  ];

  const requirements = [
    { title: "Port of Sheerness", details: ["Convenient proximity for automotive and bulk cargo", "Specialist fresh produce clearances"] },
    { title: "Medway Logistics Corridors", details: ["M2 & A2 transit support", "Direct access to North Kent industrial estates"] },
    { title: "Thamesport", details: ["Containerised cargo clearance", "Easy access for Rochester-based distributors"] },
    { title: "Port of Dover & Eurotunnel", details: ["Fast-track declarations for Rochester hauliers", "T1 transit discharge"] },
    { title: "Inland Border Facilities", details: ["Sevington (M20) and local Medway transit points"] },
  ];

  const features = [
    { title: "Medway Knowledge", desc: "We understand the specific logistics needs of Rochester’s industrial and retail sectors." },
    { title: "Strategic Location", desc: "Perfectly positioned to support businesses along the A2 and M2 corridors." },
    { title: "HMRC Compliance", desc: "Expert filing in the Customs Declaration Service (CDS) to avoid costly errors." },
    { title: "Transparent Fees", desc: "Straightforward pricing with no hidden charges for Rochester importers." },
    { title: "Real-Time Support", desc: "Direct access to our brokers whenever your shipment is on the move." },
    { title: "Comprehensive Coverage", desc: "Specialist support for air, sea, and road freight throughout the UK." },
  ];

  const problems = [
    { title: "Incorrect Procedure Codes", desc: "We ensure the right CPC is used to prevent overpayment of taxes." },
    { title: "Port Health Delays", desc: "Navigating Medway and Kent port health requirements for restricted goods." },
    { title: "Valuation Errors", desc: "Accurate customs valuation to protect Rochester firms from future audits." },
    { title: "Missing Document Links", desc: "Ensuring all commercial paperwork aligns perfectly with CDS requirements." },
    { title: "Duty Relief Misapplication", desc: "Identifying opportunities for duty drawbacks or inward processing relief." },
    { title: "Transit Discrepancies", desc: "Resolving T1 and T2 document issues at Kentish borders." },
  ];

  const rochesterFaq = [
    {
      question: "Can you handle customs for businesses in the Medway City Estate?",
      answer: "Yes, we support many businesses across Rochester’s industrial estates, including the Medway City Estate and Gillingham Business Park.",
    },
    {
      question: "Which is the closest port you clear for Rochester?",
      answer: "We frequently handle clearances for Sheerness and Thamesport, as well as high-volume traffic through Dover and the Eurotunnel.",
    },
    {
      question: "Do you offer VAT advice for Rochester startups?",
      answer: "Absolutely. We guide new importers on EORI registration and Postponed VAT Accounting (PVA).",
    },
    {
      question: "How do I send my documents to you?",
      answer: "You can upload your commercial invoices and packing lists via our secure digital portal for immediate review.",
    },
    {
      question: "Are you available for weekend clearances?",
      answer: "Yes, we provide 24/7 support for urgent and time-critical shipments moving through Kent.",
    },
  ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <Heroservice
          title="Customs Clearance Rochester"
          desc={[
            "Professional Import & Export Support for Businesses in the Medway Region",
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
                      alt="Customs clearance Rochester"
                      width={573}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 lg:gap-[30px] xl:gap-[64px] content-center">
                <h2 className="mt-8 font-bold text-5xl lg:text-heading-1 md:text-[46px] text-[35px] mb-[22px]">
                  Customs Clearance Rochester
                </h2>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
                  Rochester is a vital hub within the Medway logistics network. Positioned perfectly between London and the Kent coast, Rochester-based businesses rely on the fast movement of goods via the M2 and A2. Whether you are a local manufacturer in the Medway City Estate or an e-commerce seller based in the historic town centre, compliant customs clearance is the key to your success.
                </p>
                <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
                  Global Customs provides dedicated customs brokerage for Rochester, offering a bridge between local Medway commerce and international markets. We specialise in navigating the complexities of the post-Brexit landscape, ensuring that your imports and exports are handled with precision, speed, and full HMRC compliance.
                </p>

                <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
                  From the deep-sea terminals at Thamesport to the automotive hubs at Sheerness, we offer local expertise that keeps Medway moving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Rochester Is Strategic */}
        <section className="py-20 bg-slate-50 overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Rochester: A Strategic Link in 
                <span className="text-[#0ea5e9]"> North Kent Trade</span>
              </h2>
              <p className=" text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                With its rich industrial heritage and modern logistics parks, Rochester serves as a critical junction for goods entering the UK and heading toward the capital.
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
                      <h4 className="font-bold text-slate-900 text-lg">M2 & A2 Access</h4>
                      <p className="text-slate-600">Direct connectivity for road freight moving to and from Dover and Folkestone.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                    <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9] shrink-0">
                      <Anchor size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Proximity to Sheerness</h4>
                      <p className="text-slate-600">Efficient clearance for automotive, forest products, and bulk cargo.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-slate-100">
                    <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9] shrink-0">
                      <Factory size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Industrial Hubs</h4>
                      <p className="text-slate-600">Dedicated support for Medway City Estate and local manufacturing parks.</p>
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
                      <h3 className="text-2xl font-bold text-white">Medway Coverage Zones</h3>
                    </div>
                    <ul className="grid grid-cols-1 gap-4">
                      {['Rochester & Strood', 'Medway City Estate', 'Kingsnorth & Isle of Grain'].map((facility, i) => (
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
            <div className="mt-12 flex items-center justify-center gap-4 p-6 bg-white rounded-2xl border-l-4 border-r-4 border-[#0ea5e9] shadow-sm ">
              <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-[#0ea5e9]">
                <Info size={20} strokeWidth={3} />
              </div>
              <p className="text-slate-700 font-medium">
                Our local presence ensures we can assist with port inspections and documentation queries across the Medway region.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Customs Services for Rochester Businesses</h2>
              <p className="mt-4 text-slate-600">Supporting every sector of Rochester’s diverse business landscape:</p>
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
              <h2 className="text-3xl font-bold text-slate-900">Medway & Kent Gateways</h2>
              <p className="text-slate-600 mt-4">We provide integrated customs brokerage at all regional terminals:</p>
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
                <p className="font-bold text-[#0ea5e9]">Connecting Rochester businesses to the world through Kent’s premier ports.</p>
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
                    alt="Rochester Logistics warehouse"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Partner With</h2>
                <p className="text-slate-600 mb-6">Our Medway clients include:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    'Medway Manufacturers', 'Rochester Retailers', 'Kentish Hauliers', 'Global Exporters',
                    'Engineering Firms', 'Wholesale Distributors', 'Online Shop Owners',
                    'Amazon FBA Merchants', 'Automotive Importers', 'Construction Suppliers'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  Whether you move occasional pallets or daily truckloads, we tailor our Rochester customs service to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-1/2 -z-10" />
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What You Need for Customs in Rochester
              </h2>
              <p className=" text-slate-600 leading-relaxed">
                To ensure your goods clear the border without delays, we typically require:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 group bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 hover:border-[#0ea5e9] transition-all duration-300">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">For Medway Imports</h3>
                  <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0ea5e9]">
                    <DownloadCloud size={24} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
                  <div className="space-y-4">
                    {[
                      'Commercial invoice', 'Packing list', 'Transport docs (CMR/BOL)',
                      'HS Commodity codes', 'Origin evidence', 'Agreed Incoterms',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <CheckCircle className="text-[#0ea5e9] h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 font-medium text-[15px] leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {[
                      'GB EORI Number', 'VAT Registration', 'Specialist Certificates', 'HMRC Deferment info'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <CheckCircle className="text-[#0ea5e9] h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 font-medium text-[15px] leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 group bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl border border-slate-800 hover:border-[#0ea5e9] transition-all duration-3000 h-full">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">For Medway Exports</h3>
                  <div className="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#0ea5e9]">
                    <UploadCloud size={24} />
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    'Sales invoice', 'Packing manifest', 'Export commodity codes',
                    'Haulier details', 'Destination country', 'EORI number'
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
                Unsure about your HS codes? Our Rochester team can assist with accurate classification.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Rochester Businesses Trust Global Customs</h2>
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
              Solving Local Customs Hurdles in Rochester
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
                Industries We Support in Rochester
              </h2>
              <p className="text-slate-600 mb-10">
                Specialist support for Medway’s core economic sectors:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#3daee0] mb-12">
              {[
                "Advanced Manufacturing",
                "Automotive Logistics",
                "Construction & Building",
                "Retail & E-commerce",
                "Food & Drink Distribution",
                "Paper & Forest Products",
                "Chemicals & Pharma",
                "Technology & Electronics"
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
              Small business or large industrial enterprise – we have the expertise to scale with you.
            </p>
          </div>
        </section>

        <Testimonials />

        <SiteFAQs
          sectionTitle="Rochester Customs FAQs"
          sectionDescription="Your guide to seamless importing and exporting in the Medway region."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={rochesterFaq}
        />

        <SiteCta
          title="Need reliable customs clearance in Rochester?"
          description="Contact our Medway team today for fast, accurate filings and 24/7 customs support."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />
      </Layout>
    </>
  )
}