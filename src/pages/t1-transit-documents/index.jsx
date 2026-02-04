import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import Layout from "@/components/ui/Layout";
import PageHead from "@/components/ui/PageHead";
import React, { useState } from 'react';
import { Ship, Plane,AlertCircle,} from 'lucide-react';
import {
  FileText,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Warehouse,
  Globe2,
  Clock,
  Truck,
  CheckCircle, 
  Link as LinkIcon, 
} from "lucide-react";

import SiteFAQs from "@/components/ui/SiteFAQs";
import SiteCta from "@/components/ui/SiteCta";
import Btn from "@/components/ui/Btns/Btn";
import ServiceHero from "@/components/ui/New/ServiceHero";
import NewInnerBanner from "@/components/ui/New/NewInnerBanner";

export default function Road ({ preview }) {

  const PageMeta = {
   title: "T1 Transit Documents  | Custom Clearance Services UK",
   description:" Fast, compliant T1 transit document services for goods moving to Europe. Ensure smooth customs transit with Global Customs.",
   keywords:"T1 transit documents, customs transit UK, export transit paperwork, European transit declarations, customs clearance Europe, T1 document services, UK export compliance, Global Customs T1 services",
 };


 const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    { title: "T1 Creation", desc: "We create T1 documents quickly and accurately.", icon: <FileText /> },
    { title: "T1 Discharge", desc: "We ensure the T1 is closed correctly at the destination.", icon: <CheckCircle2 /> },
    { title: "Transit Guarantee Coverage", desc: "We operate under approved transit guarantees.", icon: <ShieldCheck /> },
    { title: "Port & Border Support", desc: "Including Dover, Eurotunnel, Felixstowe, Southampton, and more.", icon: <MapPin /> },
    { title: "Inland Border Facility (IBF) Support", desc: "We handle T1 movements through Sevington, Ashford, and other IBFs.", icon: <Warehouse /> },
    { title: "Multi-Country Transit Movements", desc: "For goods moving across several EU/UK borders.", icon: <Globe2 /> },
    { title: "Urgent & Same-Day T1s", desc: "Priority processing for time-critical shipments.", icon: <Clock /> },
    { title: "Support for Freight Forwarders & Hauliers", desc: "White-label transit services for logistics providers.", icon: <Truck /> },
  ];

  const risks = [
    "Goods being held at the border",
    "Delays at ports and inland border facilities",
    "Fines or penalties",
    "Missed delivery deadlines",
    "Supply chain disruption",
    "Additional customs checks"
  ];

  const locations = [
    {
      title: "Major Ports",
      icon: <Ship className="w-8 h-8 text-[#3daee0]" />,
      items: ["Felixstowe", "Southampton", "London Gateway", "Dover", "Liverpool", "Hull", "Immingham", "Bristol", "Tilbury"]
    },
    {
      title: "Airports",
      icon: <Plane className="w-8 h-8 text-[#3daee0]" />,
      items: ["Heathrow", "Gatwick", "Manchester", "East Midlands", "Birmingham", "Stansted"]
    },
    {
      title: "Inland Border Facilities",
      icon: <Warehouse className="w-8 h-8 text-[#3daee0]" />,
      items: ["Sevington", "Ashford", "Dover Western Docks", "Birmingham", "Warrington"]
    }
  ];
 
  const requirements = [
    { title: "Commercial Invoice", details: ["Seller and buyer details", "Product descriptions", "HS codes", "Value", "Currency", "Incoterms"] },
    { title: "Packing List", details: ["Details of weights, quantities, and packaging."] },
    { title: "Transport Document", details: ["Bill of lading", "Airway bill", "CMR"] },
    { title: "EORI Number", details: ["Required for all UK/EU movements."] },   
    { title: "Destination Details", details: ["Bonded warehouse", "Customs office or,", "Final delivery point"] },
    { title: "Vehicle & Driver Details", details: ["For road transport."] }
  ];

  const problems = [
    { title: "Incorrect HS Codes", desc: "We classify goods accurately to avoid delays." },
    { title: "Wrong Office of Destination", desc: "We ensure the correct customs office is selected." },
    { title: "Missing Transit Guarantee", desc: "We operate under approved guarantees." },
    { title: "Incorrect Valuation", desc: "Errors in customs value can cause T1 rejection." },
    { title: "Failed Discharge", desc: "We ensure the T1 is closed properly." },
    { title: "Border Delays", desc: "We help prevent holds at ports and IBFs." },
  ];
  

  const features = [
    { title: "Expert Knowledge of Transit Rules", desc: "We stay up to date with all UK and EU transit regulations." },
    { title: "Fast Turnaround", desc: "We process T1s quickly to keep your goods moving." },
    { title: "Compliance-First Approach", desc: "We ensure every T1 meets customs requirements." },
    { title: "Transparent Pricing", desc: "Clear, competitive rates with no hidden fees." },
    { title: "Nationwide Coverage", desc: "We support all major UK ports and airports." },
    { title: "24/7 Support", desc: "Urgent shipments? No problem — we’re always available." },
  ];
  

  const t1Faq = [
    {
      question: "How long does a T1 take to create?",
      answer: "Most T1s are processed quickly, depending on documentation and customs traffic.",
    },
    {
      question: "Do you support T1s for both UK and EU movements?",
      answer: "Yes — we handle transit movements in both directions.",
    },
    {
      question: "Can you handle urgent or same-day T1s?",
      answer: "Absolutely. We offer priority processing for time-critical goods.",
    },
    {
      question: "Do you work with freight forwarders?",
      answer: "Yes — we provide white-label transit services for logistics companies.",
    },
    {
      question: "What if I don’t know my HS codes?",
      answer: "We can classify your goods accurately.",
    },
  ];
  
  
  const points = [
    {
      condition: "Goods enter the UK from the EU but are not staying in the UK",
      example: "France → UK → Ireland"
    },
    {
      condition: "Goods move from the UK into the EU under transit",
      example: "UK → Belgium → Germany"
    },
    {
      condition: "Goods are destined for a bonded warehouse",
      example: "Duties and VAT are suspended until release"
    },
    {
      condition: "Goods pass through multiple borders",
      example: "Transit ensures smooth movement"
    },
    {
      condition: "Goods are non-EU origin entering the EU",
      example: "T1 prevents immediate duty charges"
    }
  ];
  
    return(
      <>
      <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
          
      <NewInnerBanner
        title="T1 Transit Documents"
        backgroundImage="/images/road-bg.jpg"
        bannerDescription={[
          "Fast, Compliant Transit Movement Support Across the UK & EU", 
          "When goods move through the UK or EU without being released into free circulation, a T1 transit document is required. This document ensures that customs duties and VAT are suspended while the goods travel from one customs territory to another. Whether you’re transporting goods from the EU into the UK, moving shipments from the UK into Europe, or routing cargo through multiple countries, the T1 process must be completed accurately to avoid delays, fines, or goods being held at the border"        
        ]}
      />

      <ServiceHero
        title="T1 Transit Documents"
        description={[
          "Global Customs provides fast, compliant T1 transit documents for hauliers, freight forwarders, importers, exporters, and logistics providers. We handle the entire process — from creating the T1 to ensuring it is safely discharged at the destination — so your goods move smoothly across borders.",
          "This page explains how T1 transit works, when you need it, what documents are required, and why businesses across the UK trust Global Customs for reliable, expert transit support.",         
        ]}
        image1="/images/road-big.jpg"
        image2="/images/road-small.jpg"
        image3="/images/road-smaal2.jpg"
      />

      <section className="py-20 bg-slate-50">     
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">

          {/* Title */}
          <h2 className="text-3xl font-bold text-slate-900 mb-10 ">
            What Is a <span className="text-[#3daee0]">T1 Transit Document?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            A T1 is an official customs transit document that allows goods to move
            under customs control from one location to another without paying
            duties or VAT at the border. Taxes and duties are only settled once the
            goods reach their final destination.
          </p>

          {/* Use cases */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Goods entering the UK from the EU but destined for another country",
              "Goods moving from the UK into the EU under transit",
              "Shipments passing through multiple EU or UK borders",
              "Goods stored in a bonded warehouse before final release",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-lg border border-gray-200 hover:border-[#3daee0] transition-colors duration-300"
              >
                <span className="mt-1 flex flex-shrink-0 h-6 w-6 items-center justify-center rounded-full bg-[#3daee0] text-white text-sm font-semibold">
                  ✓
                </span>
                <p className="text-gray-700 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-12 p-6 rounded-xl bg-[#3daee0]/5 border-l-4 border-[#3daee0]">
            <p className="text-gray-700">
              The T1 process ensures full compliance with customs regulations while
              keeping goods moving efficiently across borders without unnecessary
              financial delays.
            </p>
          </div>

        </div>
     
    </section>
      
      <section className="py-24  font-sans">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Side: The "Why" & The "Risks" */}
            <div className="lg:w-3/5">             
              <h2 className="text-3xl font-bold text-slate-900 mb-10">
                Why T1 Transit Matters
              </h2>
              
              <p className="text-xl text-slate-500 mb-8 font-medium">
               Incorrect or incomplete T1 documents can cause:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {risks.map((risk, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 shadow-md bg-white rounded-xl border border-slate-100">
                    <AlertCircle className="text-red-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-slate-700 font-semibold">{risk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: The Resolution Card */}
            <div className="lg:w-2/5 lg:mt-24">
              <div className="relative p-1 bg-gradient-to-b from-[#3daee0] to-blue-600 rounded-[2.5rem] shadow-2xl shadow-blue-200">
                <div className="bg-white rounded-[2.4rem] p-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6">
                    <CheckCircle2 className="text-[#3daee0] w-10 h-10" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                  Global Customs ensures your T1 is created correctly and discharged properly.
                  </p>
                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <Btn link="/contact" title="Contact Us"/>                  
                  </div>
                </div>
              </div>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Needs a T1 Transit Document?</h2>
              <p className="text-slate-600 mb-6">Our T1 services support:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                   'Hauliers', 'Freight forwarders', 'Importers','Exporters', 
                  'Retailers', 'Manufacturers', 'E-commerce sellers', 
                  'Amazon FBA merchants', 'Automotive suppliers', 'Food & drink distributors'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                If your goods are moving across borders without being released into free circulation, you likely need a T1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need a T1 */}
      <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[#3daee0] font-bold tracking-widest uppercase text-sm mb-2">Requirements</p>
            <h2 className="text-3xl font-bold text-white">When You Need a T1</h2>
          </div>
          <div className="hidden md:block h-[2px] flex-grow mx-8 mb-4 bg-slate-200" />
        </div>

        <div className="space-y-4">
          {points.map((item, index) => (
            <div 
              key={index}
              className="group flex flex-col md:flex-row md:items-center bg-white p-6 rounded-2xl border-2 border-slate-200 transition-all duration-300 hover:border-[#3daee0] hover:shadow-xl hover:shadow-[#3daee010]"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-[#3daee0]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-[#3daee0] transition-colors">
                    {item.condition}
                  </h3>
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-medium uppercase tracking-wider">
                    {item.example.startsWith('Example:') ? item.example : `Example: ${item.example}`}
                  </div>
                </div>
              </div>
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

      {/* How We Ensure Fast Filing */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How Global Customs Ensures Fast, Compliant Transit</h2>
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

      {/* Common Problems */}
      <section className="py-20 bg-[#0ea5e9] text-white">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold mb-12 text-center">Common T1 Problems We Solve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((prob, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="font-bold text-lg mb-2">{prob.title}</h4>
                <p className="text-blue-50 text-sm">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>     

      {/* Industries Support */}
      <section className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">

          <div className=" text-left lg:text-center">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Industries We Support
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
              "Amazon FBA sellers",
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
          Whether you move small parcels or full trailers, we can support your needs.
          </p>

        </div>
      </section>



       <Testimonials/>
       <SiteFAQs
         sectionTitle="FAQs"
         sectionDescription="Common questions about T1 transit processing and support."
         buttonText="get a quote"
         buttonLink="/contact"
         faqs={t1Faq}
       />
       <SiteCta
          title="Need fast, reliable T1 transit documents?"
          description="Contact Global Customs today for expert support, accurate filings, and 24/7 assistance"
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

    

    </Layout>
    </>
    )
}