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
  Network,
  CheckCircle, Eye, Shield
} from 'lucide-react';
import Testimonials from "@/components/ui/Testimonials"
import SiteFAQs from "@/components/ui/SiteFAQs"
import SiteCta from "@/components/ui/SiteCta"

export default function Airports({ preview }) {
  const PageMeta = {
    title: "Customs Clearance Chatham | Medway Customs Brokers",
    description: "Expert Customs Clearance in Chatham and Chatham Maritime. Fast, compliant import & export declarations for businesses near the M2 and Kent ports. Call now!",
    keywords: "Customs Clearance Chatham, Chatham Maritime Customs, Medway Port Services, Import Export Chatham, Kent Customs Broker, CDS Declarations Medway",
  };

  
  const expectations = [
    {
      icon: Zap,
      title: "Speed and Efficiency ",
      text:
        "Fast declarations and proactive communication. ",
    },
    {
      icon: CheckCircle,
      title: "Fully Managed Service",
      text: " Paperwork, submissions, handler contact, compliance.",
    },
    {
      icon: Eye,
      title: "Transparent Fees",
      text:
        "Clear pricing.",
    },
    {
      icon: Shield,
      title: "Dedicated 24/7 Support",
      text:
        "Experts ready whenever shipmentsarrive.",
    },
  ];

  
  const heathrowFaq = [
    {
      question: "How fast can you clear shipments at EMA?",
      answer: "Express and urgent cargo receive priority handling.",
    },
    {
      question: "Do you provide 24/7 support at EMA? ",
      answer: "Yes.",
    },
    {
      question: "Do you manage T1 transit documents?",
      answer: "Absolutely.",
    },
    {
      question: "Can you handle high‑volume e‑commerce shipments? ",
      answer: "Yes.",
    },
  ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <div>
          <Heroservice
            title="CUSTOMS CLEARANCE – EAST MIDLANDS AIRPORT (EMA)"
            desc={[
              "Fast • Accurate • 24/7 Customs Support for the UK’s Premier Air Cargo Hub",
            ]}
            backgroundImage="/images/service-bg.jpg"
          />
        </div>

        <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-slate-700 leading-relaxed">
           East Midlands Airport (EMA) is the UK’s largest dedicated air‑cargo airport, serving major integrators, express carriers, e‑commerce operators, freight forwarders, and time‑critical industries nationwide. With continuous overnight movements and high‑volume parcel traffic,speed, precision, and reliability in customs clearance are essential.

          </p>
          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-[#0ea5e9] rounded-r-xl">
            <p className="text-xl font-medium text-[#0ea5e9]">
              We provide rapid, fully managed customs clearance at EMA — ensuring your goods move quickly, compliantly, and with zero disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50" id="services">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Us for EMA Customs Clearance?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <Zap className="text-[#0ea5e9] shrink-0 w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">Built for High‑Volume, High‑Speed Operations</h3>
                <p className="text-sm text-slate-600">Systems designed for express and e‑commerce networks.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <Globe className="text-[#0ea5e9] shrink-0 w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">Deep Local Experience</h3>
                <p className="text-sm text-slate-600">Daily work whandlers, integrators, ETSFs, and bonded warehouses.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <Activity className="text-[#0ea5e9] shrink-0 w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
                <p className="text-sm text-slate-600">Matching EMA’s strong overnight operations.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <Clock className="text-[#0ea5e9] shrink-0 w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">Accuracy That Prevents Delays</h3>
                <p className="text-sm text-slate-600">Correct HS codes, valuation, documentation. </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <ShieldCheck className="text-[#0ea5e9] shrink-0 w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">All Cargo Types</h3>
                <p className="text-sm text-slate-600">Parcels, pallets, perishables, high‑value goods, urgent manufacturing parts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Import & Export Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold mb-12 text-center">Import & Export at EMA Import Clearance</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Import */}
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Truck className="text-[#0ea5e9] w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">CDS Declarations</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">• Duty/VAT</li>
                <li className="flex items-start gap-2">• Controlled Goods</li>
                <li className="flex items-start gap-2">• Documentation Checks</li>
                <li className="flex items-start gap-2">• Real‑time updates</li>
              </ul>
            </div>

            {/* Export */}
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Plane className="text-[#0ea5e9] w-6 h-6 transform -rotate-45" />
                </div>
                <h3 className="text-2xl font-bold">Export Clearance </h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">• CDS Declarations</li>
                <li className="flex items-start gap-2">• Airline Paperwork</li>
                <li className="flex items-start gap-2">• ATA Carnet</li>
                <li className="flex items-start gap-2">• Priority Submissions</li> 
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
              <h2 className="text-3xl font-bold mb-4">Urgent, Overnight & Express Specialists</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Immediate clearance for time‑critical shipments, priority handling for express/e‑commerce, direct coordination with handlers, 24/7 operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transit & ETSF */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold mb-10 text-center">Transit, T1, ETSF & Bonded Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileCheck className="text-[#0ea5e9]" /> T1 Transit Documents
              </h3>
              <p className="text-slate-600">
                T1 issuance and management for onward movement.
              </p>
            </div>
            <div className="border border-slate-200 p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Box className="text-[#0ea5e9]" /> ETSF Support
              </h3>
              <p className="text-slate-600">
                ETSF Coordination for fast release
              </p>
            </div>
             <div className="border border-slate-200 p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Network className="text-[#0ea5e9]" /> Bonded Processes
              </h3>
              <p className="text-slate-600">
                Bonded warehousing support for deferred declarations and high‑value storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Services */}
      <section className="py-20 bg-slate-50" id="specialist">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold mb-12 text-center">Industries We Support at EMA</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-b-4 border-[#0ea5e9] shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-[#0ea5e9]">E‑Commerce & Express Parcels</h4> 
            </div>
            <div className="bg-white p-6 rounded-xl border-b-4 border-[#0ea5e9] shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-[#0ea5e9]">Retail & Consumer Goods</h4> 
            </div>
            <div className="bg-white p-6 rounded-xl border-b-4 border-[#0ea5e9] shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-[#0ea5e9]">Automotive & Manufacturing</h4> 
            </div>
            <div className="bg-white p-6 rounded-xl border-b-4 border-[#0ea5e9] shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-[#0ea5e9]">Aerospace & Engineering</h4> 
            </div>
             <div className="bg-white p-6 rounded-xl border-b-4 border-[#0ea5e9] shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-[#0ea5e9]">Perishables & Temperature‑Sensitive Goods</h4> 
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