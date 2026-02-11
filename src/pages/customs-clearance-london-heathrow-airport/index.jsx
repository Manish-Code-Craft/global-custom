import React from "react"
import NewService from "@/components/Home/Services/NewService"
import Layout from "@/components/ui/Layout"
import Heroservice from "@/components/ui/Heroservice"
import PageHead from "@/components/ui/PageHead"
import Image from "next/image"
import { 
  Plane, 
  ShieldCheck, 
  Clock, 
  Globe, 
  AlertCircle, 
  Truck, 
  FileCheck, 
  Activity,
  Box,
  Zap, 
  CheckCircle, Eye, Shield
} from 'lucide-react';
import Testimonials from "@/components/ui/Testimonials"
import SiteFAQs from "@/components/ui/SiteFAQs"
import SiteCta from "@/components/ui/SiteCta"

export default function Airports({ preview }) {
  const PageMeta = {
    title: "Customs Clearance at London Heathrow Airport (LHR) | Fast, Compliant Air Cargo Declarations",
    description: "Specialist customs clearance services for air cargo at London Heathrow Airport. Fast, accurate, and compliant import/export declarations to ensure your shipments clear customs without delay.",
    keywords: "Heathrow customs clearance, air cargo customs, LHR import export, fast customs clearance, compliant air freight declarations, 24/7 Heathrow support",
  };

  
  const expectations = [
    {
      icon: Zap,
      title: "Speed",
      text:
        "Bespoke processes designed specifically around Heathrow air cargo environment.",
    },
    {
      icon: CheckCircle,
      title: "Accuracy",
      text: "Every declaration is submitted correctly — first time.",
    },
    {
      icon: Eye,
      title: "Transparency",
      text:
        "Clear pricing, upfront communication, and no hidden charges.",
    },
    {
      icon: Shield,
      title: "Reliability",
      text:
        "A dedicated team available whenever your cargo lands, day or night.",
    },
  ];

  
  const heathrowFaq = [
    {
      question: "How fast can you clear goods at Heathrow?",
      answer: "Clearances are processed rapidly once documents are received. We support urgent and time‑critical shipments 24/7.",
    },
    {
      question: "Can you handle AOGshipments?",
      answer: "Yes — AOG is one of our core competencies with priority handling.",
    },
    {
      question: "Do you process CDS declarations?",
      answer: "Absolutely — all import and export declarations are fully CDS‑compliant.",
    },
    {
      question: "Can you assist with T1 documents?",
      answer: "Yes, we issue and manage T1s for onward movement.",
    },
  ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <div className="pt-[80px]">
          <Heroservice
            title="Customs Clearance London Heathrow Airport (LHR)
  "
            desc={[
              "Fast • Compliant • 24/7 Air Cargo Support for Heathrow Airport",
            ]}
            backgroundImage="/images/airports-banner.webp"
          />
        </div>

        <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-slate-700 leading-relaxed">
            London Heathrow Airport (LHR) is the UK’s busiest international gateway, handling millions of tonnes of air cargo every year. With such high traffic, even small customs issues can lead to long delays, storage charges, and missed delivery deadlines.
          </p>
          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-[#0ea5e9] rounded-r-xl">
            <p className="text-xl font-medium text-[#0ea5e9]">
              We provide rapid, accurate, and fully managed customs clearance for all shipments passing through Heathrow — ensuring your goods move without disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50" id="services">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Us for Heathrow Customs Clearance?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <Zap className="text-[#0ea5e9] shrink-0 w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">Rapid Release of Air Cargo</h3>
                <p className="text-sm text-slate-600">We process declarations quickly to minimise dwell times, avoid airline storage fees, and prevent clearance delays.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <Globe className="text-[#0ea5e9] shrink-0 w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">Full Import & Export Expertise</h3>
                <p className="text-sm text-slate-600">Whether moving general cargo, high-value goods, perishables, pharmaceuticals, AOG parts, or consolidated shipments — we clear it fast and correctly.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <Activity className="text-[#0ea5e9] shrink-0 w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">Heathrow‑Experienced Customs Specialists</h3>
                <p className="text-sm text-slate-600">Daily operations at LHR mean we understand the airport’s unique processes, handlers, and airline procedures.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <Clock className="text-[#0ea5e9] shrink-0 w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">True 24/7 Support</h3>
                <p className="text-sm text-slate-600">Air freight doesn’t sleep — neither do we. We cover urgent arrivals, night operations, and weekend/holiday shipments.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <ShieldCheck className="text-[#0ea5e9] shrink-0 w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">Accurate, HMRC‑Compliant Declarations</h3>
                <p className="text-sm text-slate-600">Our experts eliminate classification errors, valuation mistakes, and documentation issues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Import & Export Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold mb-12 text-center">Import & Export Customs Clearance at LHR</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Import */}
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Truck className="text-[#0ea5e9] w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Import Clearance (Air Freight)</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">• Air import declarations (CDS)</li>
                <li className="flex items-start gap-2">• Duty & VAT calculations</li>
                <li className="flex items-start gap-2">• Specialized handling for high‑value and restricted goods</li>
                <li className="flex items-start gap-2">• Handling of certificates, licences, and compliance documentation</li>
                <li className="flex items-start gap-2">• Real‑time updates from arrival to release</li>
              </ul>
            </div>

            {/* Export */}
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Plane className="text-[#0ea5e9] w-6 h-6 transform -rotate-45" />
                </div>
                <h3 className="text-2xl font-bold">Export Clearance (Air Freight)</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">• Export declarations</li>
                <li className="flex items-start gap-2">• ATA Carnet handling</li>
                <li className="flex items-start gap-2">• Ensuring goods are cleared before airline deadlines</li>
                <li className="flex items-start gap-2">• Digital paperwork to prevent delays</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AOG Section */}
      <section className="py-20 bg-[#0ea5e9] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="shrink-0">
              <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center border-4 border-[#0ea5e9]">
                <AlertCircle className="w-10 h-10 text-blue-300" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">AOG / Time‑Critical Shipments</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Aircraft‑on‑Ground (AOG) cargo requires immediate action to avoid operational disruption. We provide: priority handling, instant declarations for rapid release, 24/7 communication, and direct coordination with handling agents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transit & ETSF */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold mb-10 text-center">Transit, T1 & ETSF Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-200 p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileCheck className="text-[#0ea5e9]" /> T1 Transit Documents
              </h3>
              <p className="text-slate-600">
                We create and manage T1 documents for goods moving under transit to other airports, warehouses, or border points.
              </p>
            </div>
            <div className="border border-slate-200 p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Box className="text-[#0ea5e9]" /> ETSF Support
              </h3>
              <p className="text-slate-600">
                If your cargo is held at an External Temporary Storage Facility (ETSF), we work directly with warehouse operators to release it smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Services */}
      <section className="py-20 bg-slate-50" id="specialist">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold mb-12 text-center">Specialist Services for Heathrow Cargo</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-b-4 border-[#0ea5e9] shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-[#0ea5e9]">Pharmaceutical & Cold‑Chain Cargo</h4>
              <p className="text-sm text-slate-600">Temperature‑sensitive shipments cleared urgently to protect integrity.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-b-4 border-[#0ea5e9] shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-[#0ea5e9]">E‑Commerce & Consolidated Shipments</h4>
              <p className="text-sm text-slate-600">Speed‑focused processes for parcels, fulfilment centres, and consolidators.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-b-4 border-[#0ea5e9] shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-[#0ea5e9]">Automotive & Aerospace Parts</h4>
              <p className="text-sm text-slate-600">Expert HS‑code classification and rapid release for just‑in‑time supply chains.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-b-4 border-[#0ea5e9] shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-[#0ea5e9]">High‑Value Goods</h4>
              <p className="text-sm text-slate-600">Secure handling, full documentation checks, and compliant clearance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold mb-12 text-center">
              What You Can Expect From Us
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {expectations.map(({ icon: Icon, title, text }) => (
                <div key={title} className="text-center">
                  <Icon className="w-10 h-10 mx-auto mb-4 text-[#0ea5e9]" />
                  <h4 className="font-bold text-xl mb-2">{title}</h4>
                  <p className="text-slate-600 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <SiteFAQs
          sectionTitle="Frequently Asked Questions"         
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={heathrowFaq}
        />

        <SiteCta
          title="Ready to Clear Your Heathrow Cargo Without Delay?"
          description="Contact us today to discuss your specific needs and discover how we can ensure your shipments clear customs at Heathrow quickly, accurately, and without hassle."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
        />
      </Layout>
    </>
  )
}