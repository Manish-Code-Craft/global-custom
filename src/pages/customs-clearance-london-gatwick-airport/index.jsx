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
    title: "Customs Clearance at London Gatwick Airport (LGW) | Fast, Compliant Air Freight Solutions",
    description: "Specialist customs clearance services at London Gatwick Airport (LGW) for imports, exports, e‑commerce, and time‑critical air freight. Fast, accurate, compliant solutions tailored to LGW’s unique operating environment.",
    keywords: "Gatwick customs clearance, LGW air freight customs, import clearance Gatwick, export clearance LGW, e‑commerce customs Gatwick, time‑critical air freight LGW, HMRC compliant declarations Gatwick, T1 transit LGW, ETSF support Gatwick, bonded services LGW",
  };

  
  const expectations = [
    {
      icon: Zap,
      title: "Speed & Efficiency ",
      text:
        "Quick declarations and proactive communication.",
    },
    {
      icon: CheckCircle,
      title: "Zero Hassle",
      text: "We handle documentation, declarations, compliance, and communication.",
    },
    {
      icon: Eye,
      title: "Transparent Pricing",
      text:
        "Clear fees with no surprises.",
    },
    {
      icon: Shield,
      title: "Dedicated Support",
      text:
        "24/7 readiness as soon as your cargo lands.",
    },
  ];

  
  const heathrowFaq = [
    {
      question: "How fast can you clear goods at Gatwick?",
      answer: "Most shipments are cleared quickly once documents are submitted",
    },
    {
      question: "Do you operate 24/7 at LGW?",
      answer: "Yes.",
    },
    {
      question: "Do you handle T1 documents?",
      answer: "Yes.",
    },
    {
      question: "Can you handle e‑commerce and parcel shipments?",
      answer: "Absolutely.",
    },
  ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <div className="pt-[80px]">
          <Heroservice
            title="Customs Clearance London Gatwick Airport (LGW)
  "
            desc={[
              "Fast • Accurate • Professional • 24/7 Air Cargo Support",
            ]}
            backgroundImage="/images/airports-banner.webp"
          />
        </div>

        <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-slate-700 leading-relaxed">
          London Gatwick Airport (LGW) is one of the UK’s most important aviation hubs, handling a growing volume of imports, exports, e‑commerce traffic, and time‑critical air freight. To keep your goods moving smoothly, you need fast, compliant, and reliable customs clearance tailored specifically to Gatwick’s operating environment.
          </p>
          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-[#0ea5e9] rounded-r-xl">
            <p className="text-xl font-medium text-[#0ea5e9]">
            We provide complete air‑freight customs solutions at Gatwick, ensuring your cargo is cleared  quickly, correctly, and without disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50" id="services">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Us for Gatwick Customs Clearance?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <Zap className="text-[#0ea5e9] shrink-0 w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">Fast, Efficient Processing</h3>
                <p className="text-sm text-slate-600">Rapid customs clearance to prevent storage charges and delays</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <Globe className="text-[#0ea5e9] shrink-0 w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">Experienced Gatwick Specialists</h3>
                <p className="text-sm text-slate-600">Daily collaboration with LGW handlers, warehouses, and ground agents.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <Activity className="text-[#0ea5e9] shrink-0 w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">24/7 Operational Support</h3>
                <p className="text-sm text-slate-600">Overnight flights, weekend arrivals, urgent shipments — all covered.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <Clock className="text-[#0ea5e9] shrink-0 w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">All Cargo Types</h3>
                <p className="text-sm text-slate-600">General freight, e‑commerce parcels, perishables, pharma, automotive, aerospace, high‑value goods.</p>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Import & Export Clearance at LGW</h2>
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
                <li className="flex items-start gap-2">• CDS import declarations</li>
                <li className="flex items-start gap-2">• Duty & VAT calculations</li>
                <li className="flex items-start gap-2">• Restricted/sensitive cargo handling</li>
                <li className="flex items-start gap-2">• Full documentation checks</li>
                <li className="flex items-start gap-2">• Real‑time progress updates</li>
              </ul>
            </div>

            {/* Export */}
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Plane className="text-[#0ea5e9] w-6 h-6 transform -rotate-45" />
                </div>
                <h3 className="text-2xl font-bold">Export Clearance</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">• CDS export declarations</li>
                <li className="flex items-start gap-2">• Airline‑ready documentation</li>
                <li className="flex items-start gap-2">• ATA Carnet handling</li>
                <li className="flex items-start gap-2">• Seamless processing to meet departure deadlines</li>
                <li className="flex items-start gap-2">• Secure handling for controlled goods</li>
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
              <h2 className="text-3xl font-bold mb-4">Urgent, Time‑Critical & AOG Supports</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
              Priority customs handling, immediate responses for urgent clearances, direct coordination with handlers, and 24/7 availability for AOG cargo.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transit & ETSF */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold mb-10 text-center">T1 Transit, ETSF & Bonded Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileCheck className="text-[#0ea5e9]" /> T1 Transit Documents
              </h3>
              <p className="text-slate-600">
              For onward movement to other airports, warehouses, or EU destinations.
              </p>
            </div>
            <div className="border border-slate-200 p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Box className="text-[#0ea5e9]" /> ETSF Support
              </h3>
              <p className="text-slate-600">
              Coordination with ETSFs around Gatwick for fast release
              </p>
            </div>
            <div className="border border-slate-200 p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Network className="text-[#0ea5e9]" /> Bonded Processes
              </h3>
              <p className="text-slate-600">
              Support for customs‑controlled storage and deferred declarations.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Services */}
      <section className="py-20 bg-slate-50" id="specialist">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold mb-12 text-center">Cargo Types We Specialise In</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-b-4 border-[#0ea5e9] shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-gray-900">E‑Commerce & Fulfilment</h4>
            </div>
            <div className="bg-white p-6 rounded-xl border-b-4 border-[#0ea5e9] shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-gray-900">Pharmaceutical & Temperature‑Controlled</h4>
            </div>
            <div className="bg-white p-6 rounded-xl border-b-4 border-[#0ea5e9] shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-gray-900">Automotive & Aerospace</h4>
            </div>
            <div className="bg-white p-6 rounded-xl border-b-4 border-[#0ea5e9] shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-gray-900">Consumer Goods & General Cargo</h4>
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
          title="Ready to Clear Your London Gatwick Cargo Without Delay?"
          description="Contact us today to discuss your specific needs and discover how we can ensure your shipments clear customs at Heathrow quickly, accurately, and without hassle."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
        />
      </Layout>
    </>
  )
}