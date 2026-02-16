import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import Layout from "@/components/ui/Layout";
import PageHead from "@/components/ui/PageHead";
import React, { useState } from 'react';
import {FileText, Warehouse, Hash, Boxes, Globe, PoundSterling, Calculator, Clock, Truck, CheckCircle,
  Factory,
  Car,
  Cpu,
  Cog,
  Plane,
  Hammer,
  Layers,
  Settings,
  Link as LinkIcon,} from "lucide-react";
import SiteFAQs from "@/components/ui/SiteFAQs";
import SiteCta from "@/components/ui/SiteCta";
import ServiceHero from "@/components/ui/New/ServiceHero";
import NewInnerBanner from "@/components/ui/New/NewInnerBanner";
import SupportedIndustries from "@/components/ui/New/SupportedIndustries";

export default function Road ({ preview }) {

  const PageMeta = {
    title: "Manufacturing Customs Clearance Services UK | Global Customs",
    description:"Specialist manufacturing customs clearance services for raw materials, components, and finished goods. HMRC-compliant UK clearance.",
    keywords:"manufacturing customs clearance UK, factory imports UK, production supply chain customs, HMRC manufacturing clearance",
  };

  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    { title: "Manufacturing Import Declarations", desc: "Accurate CDS declarations for raw materials, components, and machinery.", icon: <FileText /> },
    { title: "HS Code Classification", desc: "Correct classification for manufacturing inputs and finished goods.", icon: <Hash /> },
    { title: "Bulk & High-Volume Shipments", desc: "Support for large-scale production consignments.", icon: <Boxes /> },
    { title: "Duty & Import VAT Calculations", desc: "Correct duty and VAT treatment to protect cash flow.", icon: <Calculator /> },
    { title: "Trade Agreement & Origin Support", desc: "Ensure eligibility for reduced or zero-duty rates.", icon: <Globe /> },
    { title: "Warehouse & Bonded Clearance", desc: "Support for bonded warehouses and inward processing.", icon: <Warehouse /> },
    { title: "Urgent & Same-Day Clearance", desc: "Priority processing to avoid production stoppages.", icon: <Clock /> },
    { title: "Support for Logistics & Freight Partners", desc: "White-label customs services for manufacturing supply chains.", icon: <Truck /> },
  ];

  const requirements = [
    { title: "Commercial Invoice", details: ["Goods description", "HS codes (if known)", "Value", "Currency", "Incoterms"] },
    { title: "Packing List", details: ["Weights, quantities, and packaging details."] },
    { title: "Transport Document", details: ["Bill of lading", "Airway bill", "CMR"] },
    { title: "EORI Number", details: ["Required for all UK manufacturers importing or exporting."] },   
    { title: "VAT Number (if applicable)", details: ["For import VAT and accounting schemes."] },
    { title: "Production Details", details: ["Part numbers, BOM references, or machine specifications."] }
  ];

  const features = [
    { title: "Manufacturing Expertise", desc: "Deep understanding of production and supply-chain customs requirements." },
    { title: "Fast Turnaround", desc: "We minimise delays that impact manufacturing schedules." },
    { title: "Compliance-First Approach", desc: "Aligned with HMRC, CDS, and trade rules." },
    { title: "Transparent Pricing", desc: "Clear, predictable costs for manufacturers." },
    { title: "Nationwide Coverage", desc: "Clearance across all UK ports and airports." },
    { title: "24/7 Support", desc: "Support for time-critical production shipments." },
  ]; 

  const problems = [
    { title: "Production Delays", desc: "We prioritise clearance to keep factories running." },
    { title: "Incorrect HS Codes", desc: "We prevent misclassification and duty overpayment." },
    { title: "Supplier Documentation Errors", desc: "We fix missing or incorrect paperwork." },
    { title: "Origin & Duty Issues", desc: "We verify trade agreement eligibility." },
    { title: "High-Volume Shipments", desc: "We manage complex, bulk declarations." },
    { title: "Post-Clearance Amendments", desc: "We handle corrections and HMRC follow-ups." },
  ]; 

  const industries = [
    { name: "General manufacturing", icon: <Factory size={24} /> },
    { name: "Automotive production", icon: <Car size={24} /> },
    { name: "Electronics manufacturing", icon: <Cpu size={24} /> },
    { name: "Industrial machinery", icon: <Cog size={24} /> },
    { name: "Aerospace", icon: <Plane size={24} /> },
    { name: "Metal fabrication", icon: <Hammer size={24} /> },
    { name: "Plastics & polymers", icon: <Layers size={24} /> },
    { name: "Engineering & fabrication", icon: <Settings size={24} /> },
  ];

  const manufacturingFaq = [
    {
      question: "Do you support manufacturers importing raw materials?",
      answer: "Yes — we handle raw materials, components, machinery, and finished goods.",
    },
    {
      question: "Can you support bonded warehousing or inward processing?",
      answer: "Yes — we provide full support for duty suspension schemes.",
    },
    {
      question: "Do you offer urgent clearance for production delays?",
      answer: "Absolutely — same-day clearance is available.",
    },
    {
      question: "Can you help with HS code classification?",
      answer: "Yes — we provide accurate classification for all manufacturing goods.",
    },
    {
      question: "Do you support exports as well?",
      answer: "Yes — we manage both manufacturing imports and exports.",
    },
  ];   
  
  return(
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
          
        <NewInnerBanner
          title="Customs Clearance for Manufacturing"
          backgroundImage="/images/road-bg.jpg"
          bannerDescription={[
            "Specialist Customs Clearance for Manufacturing Supply Chains", 
            "Manufacturing depends on reliable, compliant imports and exports. From raw materials to finished products, accurate customs clearance is essential to avoid production delays, cost overruns, and compliance risks."        
          ]}
        />

        <ServiceHero
          title="Manufacturing Customs Clearance Services"
          description={[
            "Global Customs provides specialist manufacturing customs clearance services for factories, producers, and industrial supply chains. We understand the pressures of just-in-time manufacturing and complex international sourcing.",
            "This page explains how our manufacturing customs clearance service works, what documents are required, and why UK manufacturers trust Global Customs for fast, compliant clearance.",         
          ]}
          image1="/images/road-big.jpg"
          image2="/images/road-small.jpg"
          image3="/images/road-smaal2.jpg"
        />

        <section className="py-20 bg-slate-50">     
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">

            <h2 className="text-3xl font-bold text-slate-900 mb-4 ">
              Why <span className="text-[#3daee0]">Manufacturing Imports</span> Are Different        
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Manufacturing shipments often involve:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Just-in-time production schedules",
                "High-volume raw materials",
                "Specialised machinery and components",
                "Complex bills of materials",
                "Trade agreement origin rules",
                "Tight production deadlines",
                "High cost of border delays",
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
                Delays at the border can shut down entire production lines.
              </p>
            </div>

          </div>
        </section>  

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Manufacturing Customs Clearance Services
              </h2>
              <p className="text-slate-600">
                End-to-end customs support for manufacturers:
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
                    alt="Manufacturing customs clearance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Who We Work With
                </h2>
                <p className="text-slate-600 mb-6">
                  Our manufacturing services support:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Manufacturing companies",
                    "Factories and production plants",
                    "OEMs and suppliers",
                    "Industrial producers",
                    "Engineering firms",
                    "Electronics manufacturers",
                    "Automotive suppliers",
                    "Aerospace manufacturers",
                    "Import managers",
                    "Supply chain teams",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>

                <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  From raw materials to finished products, we keep manufacturing moving.
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
                What You Need for Manufacturing Customs Clearance
              </h2>
              <p className="text-slate-600 mt-4">
                To clear manufacturing shipments efficiently, we typically require:
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
                  We guide you through every step to avoid production delays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              How Global Customs Supports Manufacturers
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
              Common Manufacturing Customs Problems We Solve
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
        {/* <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-left lg:text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Industries We Support
              </h2>
              <p className="text-slate-600 mb-10">
                Our manufacturing customs services support:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#3daee0] mb-12">
              {[
                "General manufacturing",
                "Automotive production",
                "Electronics manufacturing",
                "Industrial machinery",
                "Aerospace",
                "Metal fabrication",
                "Plastics & polymers",
                "Engineering & fabrication",
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
              When manufacturing efficiency matters, we deliver reliable customs clearance.
            </p>
          </div>
        </section> */}

        <SupportedIndustries 
          title="Industries We Support"
          subtitle="Our food and drink customs services support:"
          industries={industries}
          bottomText="From chilled imports to shelf-stable goods, we keep your products moving."
          bg="bg-white"
        />

        <Testimonials />

        <SiteFAQs
          sectionTitle="FAQs"
          sectionDescription="Answers to common manufacturing customs clearance questions."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={manufacturingFaq}
        />

        <SiteCta
          title="Need reliable manufacturing customs clearance?"
          description="Contact Global Customs today for expert manufacturing customs support and fast, compliant clearance."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

      </Layout>
    </>
  );
}
