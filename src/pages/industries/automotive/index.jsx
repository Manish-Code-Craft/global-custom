import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import Layout from "@/components/ui/Layout";
import PageHead from "@/components/ui/PageHead";
import React, { useState } from 'react';
import {FileText, Warehouse, Hash, Boxes, Globe, PoundSterling, Calculator, Clock, Truck, CheckCircle, Link as LinkIcon,} from "lucide-react";
import SiteFAQs from "@/components/ui/SiteFAQs";
import SiteCta from "@/components/ui/SiteCta";
import ServiceHero from "@/components/ui/New/ServiceHero";
import NewInnerBanner from "@/components/ui/New/NewInnerBanner";

export default function Road ({ preview }) {

  const PageMeta = {
    title: "Automotive Customs Clearance Services UK | Global Customs",
    description:"Specialist automotive customs clearance services for vehicle imports, parts, and components. HMRC-compliant clearance across the UK.",
    keywords:"automotive customs clearance, vehicle import UK, car parts customs, HMRC automotive clearance, Global Customs",
  };

  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    { title: "Vehicle Import Declarations", desc: "Customs clearance for cars, vans, trucks, and specialist vehicles.", icon: <FileText /> },
    { title: "Automotive HS Code Classification", desc: "Accurate commodity codes for vehicles, parts, and components.", icon: <Hash /> },
    { title: "Bulk Parts & Components Clearance", desc: "Support for large consignments and production supply chains.", icon: <Boxes /> },
    { title: "Duty & VAT Calculations", desc: "Correct duty and VAT treatment for automotive goods.", icon: <Calculator /> },
    { title: "Trade Agreement & Origin Checks", desc: "Ensure eligibility for reduced or zero duty rates.", icon: <Globe /> },
    { title: "Manufacturer & OEM Support", desc: "Clearance for factories, assembly plants, and tier suppliers.", icon: <Warehouse /> },
    { title: "Urgent & Same-Day Clearance", desc: "Priority clearance for time-critical automotive shipments.", icon: <Clock /> },
    { title: "Support for Freight & Logistics Partners", desc: "White-label customs services for automotive logistics.", icon: <Truck /> },
  ];

  const requirements = [
    { title: "Commercial Invoice", details: ["Vehicle or part description", "HS codes (if available)", "Value", "Currency", "Incoterms"] },
    { title: "Packing List", details: ["Weights, quantities, and packaging details."] },
    { title: "Transport Document", details: ["Bill of lading", "Airway bill", "CMR"] },
    { title: "EORI Number", details: ["Required for all UK importers and exporters."] },   
    { title: "VAT Number (if applicable)", details: ["For import VAT accounting."] },
    { title: "Vehicle Details", details: ["VIN numbers, model details, or part numbers."] }
  ];

  const features = [
    { title: "Automotive Industry Expertise", desc: "Deep knowledge of automotive supply chains and regulations." },
    { title: "Fast Turnaround", desc: "We minimise delays that impact production schedules." },
    { title: "Compliance-First Approach", desc: "Declarations aligned with HMRC automotive requirements." },
    { title: "Transparent Pricing", desc: "Clear costs with no hidden charges." },
    { title: "Nationwide Coverage", desc: "Clearance across all UK ports and airports." },
    { title: "24/7 Support", desc: "Support for urgent production-critical shipments." },
  ]; 

  const problems = [
    { title: "Incorrect Commodity Codes", desc: "We ensure accurate classification of vehicles and components." },
    { title: "Production Line Delays", desc: "We prioritise clearance to keep manufacturing moving." },
    { title: "Supplier Documentation Errors", desc: "We correct invoices and paperwork issues." },
    { title: "Origin & Duty Errors", desc: "We verify trade agreement eligibility." },
    { title: "Multi-Part Shipments", desc: "We manage complex, high-volume declarations." },
    { title: "Post-Clearance Amendments", desc: "We handle corrections and HMRC queries." },
  ]; 

  const automotiveFaq = [
    {
      question: "Do you clear complete vehicles and car parts?",
      answer: "Yes — we handle both complete vehicles and individual automotive components.",
    },
    {
      question: "Can you support automotive manufacturers and OEMs?",
      answer: "Absolutely — we work with OEMs, tier suppliers, and assembly plants.",
    },
    {
      question: "Do you support urgent automotive shipments?",
      answer: "Yes — we offer same-day and priority clearance.",
    },
    {
      question: "Can you help with HS code classification for parts?",
      answer: "Yes — we provide accurate classification for all automotive goods.",
    },
    {
      question: "Do you support trade agreement checks?",
      answer: "Yes — we confirm origin and duty relief eligibility.",
    },
  ];   
  
  return(
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
          
        <NewInnerBanner
          title="Customs Clearance for Automotive"
          backgroundImage="/images/road-bg.jpg"
          bannerDescription={[
            "Specialist Customs Clearance for the Automotive Industry", 
            "The automotive supply chain relies on speed, precision, and compliance. From complete vehicle imports to time-critical components, accurate customs clearance is essential to avoid delays, penalties, and production disruption."        
          ]}
        />

        <ServiceHero
          title="Automotive Customs Clearance Services"
          description={[
            "Global Customs provides specialist automotive customs clearance services for manufacturers, suppliers, logistics providers, and vehicle importers. We understand the pressures of just-in-time supply chains and production deadlines.",
            "This page explains how our automotive customs clearance service works, what documents are required, and why automotive businesses across the UK trust Global Customs for reliable, compliant clearance.",         
          ]}
          image1="/images/road-big.jpg"
          image2="/images/road-small.jpg"
          image3="/images/road-smaal2.jpg"
        />

        <section className="py-20 bg-slate-50">     
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">

            <h2 className="text-3xl font-bold text-slate-900 mb-4 ">
              Why <span className="text-[#3daee0]">Automotive Imports</span> Are Different        
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Automotive shipments often involve:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Just-in-time supply chains",
                "High-value components",
                "Multiple part numbers and SKUs",
                "Strict production deadlines",
                "Trade agreement origin rules",
                "Regulatory and compliance requirements",
                "Time-critical manufacturing schedules",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-lg border border-gray-200 hover:border-[#3daee0] transition-colors duration-300"
                >
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#3daee0] text-white text-sm font-semibold">
                    ✓
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-[#3daee0]/5 border-l-4 border-[#3daee0]">
              <p className="text-gray-700">
                Delays in automotive clearance can disrupt entire production lines.
              </p>
            </div>

          </div>
        </section>  

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Automotive Customs Clearance Services
              </h2>
              <p className="text-slate-600">
                Comprehensive customs support for the automotive sector:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all">
                  <div className="text-[#3daee0] mb-4">
                    {React.cloneElement(service.icon, { size: 32 })}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                  <Image 
                    src="/images/road-custom.png" 
                    width={800}
                    height={800}
                    alt="Automotive customs clearance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Who We Work With
                </h2>
                <p className="text-slate-600 mb-6">
                  Our automotive services support:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Vehicle manufacturers",
                    "OEMs",
                    "Tier 1 & Tier 2 suppliers",
                    "Automotive importers",
                    "Logistics providers",
                    "Freight forwarders",
                    "Dealership groups",
                    "Aftermarket suppliers",
                    "Electric vehicle businesses",
                    "Motorsport teams",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>

                <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  From individual vehicles to full production supply chains, we can support your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">
                What You Need for Automotive Customs Clearance
              </h2>
              <p className="text-slate-600 mt-4">
                To process your automotive shipment efficiently, we typically require:
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8">
              <div className="space-y-8">
                {requirements.map((req, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                    <div className="md:w-1/3">
                      <h4 className="font-bold text-lg text-slate-900">
                        {req.title}
                      </h4>
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
                  We guide you through every requirement to avoid delays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              How Global Customs Supports Automotive Businesses
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((item, i) => (
                <div key={i} className="bg-white shadow-md p-6 rounded-lg border border-slate-100">
                  <CheckCircle className="text-[#0ea5e9] mb-4 h-8 w-8" />
                  <h4 className="font-bold text-lg text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Common Automotive Customs Problems We Solve
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
                Industries We Support
              </h2>
              <p className="text-slate-600 mb-10">
                Our automotive customs services support:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#3daee0] mb-12">
              {[
                "Vehicle manufacturing",
                "Automotive parts",
                "Electric vehicles",
                "Motorsport",
                "Aftermarket suppliers",
                "Commercial vehicles",
                "Logistics & transport",
                "Automotive technology",
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
              From prototype parts to mass production, we keep your supply chain moving.
            </p>
          </div>
        </section>

        <Testimonials />

        <SiteFAQs
          sectionTitle="FAQs"
          sectionDescription="Answers to common automotive customs clearance questions."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={automotiveFaq}
        />

        <SiteCta
          title="Need reliable automotive customs clearance?"
          description="Contact Global Customs today for expert automotive customs support and fast, compliant clearance."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

      </Layout>
    </>
  );
}
