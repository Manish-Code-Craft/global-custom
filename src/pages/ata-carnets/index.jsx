import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import Layout from "@/components/ui/Layout";
import PageHead from "@/components/ui/PageHead";
import React, { useState } from 'react';
import { Ship, Plane, AlertCircle } from 'lucide-react';
import {
  Boxes,
  PackageSearch,
  RefreshCcw,
  FileCheck,
  Calculator,
  BadgeCheck,
  LifeBuoy,
  CheckCircle2,
  Warehouse,
  CheckCircle,
  Link as LinkIcon,
} from "lucide-react";

import SiteFAQs from "@/components/ui/SiteFAQs";
import SiteCta from "@/components/ui/SiteCta";
import Btn from "@/components/ui/Btns/Btn";
import ServiceHero from "@/components/ui/New/ServiceHero";
import NewInnerBanner from "@/components/ui/New/NewInnerBanner";

export default function Road({ preview }) {

  const PageMeta = {
    title: "ATA Carnets | Temporary Export & Import Without Duty or VAT",
    description:
      "ATA Carnets allow goods to move internationally without paying duty or VAT. Expert ATA Carnet support for UK businesses.",
    keywords:
      "ATA Carnet UK, Temporary Export UK, Temporary Import, Duty Free International Movement, ATA Carnet Services",
  };

  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    { title: "ATA Carnet Application", desc: "Full support with applying for an ATA Carnet.", icon: <FileCheck /> },
    { title: "Goods Eligibility Review", desc: "Confirm goods qualify for ATA Carnet use.", icon: <Boxes /> },
    { title: "Carnet Customs Declarations", desc: "Correct use of vouchers and counterfoils.", icon: <PackageSearch /> },
    { title: "Border Usage Guidance", desc: "Step-by-step guidance for border presentation.", icon: <BadgeCheck /> },
    { title: "Carnet Compliance Monitoring", desc: "Avoid penalties, claims, or misuse.", icon: <RefreshCcw /> },
    { title: "Re-import & Discharge Support", desc: "Correct closure of ATA Carnets.", icon: <CheckCircle /> },
    { title: "Ongoing Carnet Advisory", desc: "Support for frequent international movements.", icon: <LifeBuoy /> },
  ];

  const risks = [
    "Full duty and VAT charges",
    "Customs penalties or claims",
    "Incorrect carnet stamping",
    "Goods detained at borders",
    "Invalid carnet usage",
    "Failure to re-export goods",
    "Financial guarantees enforced",
  ];

  const locations = [
    {
      title: "Major Ports",
      icon: <Ship className="w-8 h-8 text-[#3daee0]" />,
      items: ["Felixstowe", "Southampton", "London Gateway", "Dover", "Liverpool", "Hull", "Immingham", "Bristol", "Tilbury"],
    },
    {
      title: "Airports",
      icon: <Plane className="w-8 h-8 text-[#3daee0]" />,
      items: ["Heathrow", "Gatwick", "Manchester", "East Midlands", "Birmingham", "Stansted"],
    },
    {
      title: "Inland Border Facilities",
      icon: <Warehouse className="w-8 h-8 text-[#3daee0]" />,
      items: ["Sevington", "Ashford", "Dover Western Docks", "Birmingham", "Warrington"],
    },
  ];

  const requirements = [
    { title: "Goods Description", details: ["Detailed list of goods including serial numbers."] },
    { title: "Purpose of Movement", details: ["Exhibition, professional use, samples, or equipment."] },
    { title: "Countries to Be Visited", details: ["List of carnet member countries."] },
    { title: "Travel Dates", details: ["Entry and exit timelines for each country."] },
    { title: "Ownership Confirmation", details: ["Goods remain under the same ownership."] },
    { title: "Return Plan", details: ["Confirmation goods will return to the UK."] },
  ];

  const problems = [
    { title: "Incorrect Carnet Use", desc: "We ensure goods qualify and are used correctly." },
    { title: "Missing Customs Stamps", desc: "We prevent invalidation of the carnet." },
    { title: "Border Delays", desc: "We reduce hold-ups through correct preparation." },
    { title: "Financial Claims", desc: "We minimise risk of guarantee enforcement." },
    { title: "Expired Carnets", desc: "We track validity and timelines." },
    { title: "Non-Reexported Goods", desc: "We prevent duty becoming payable." },
  ];

  const features = [
    { title: "ATA Carnet Specialists", desc: "Extensive experience with carnet movements." },
    { title: "End-to-End Guidance", desc: "From application to final discharge." },
    { title: "Border-Ready Preparation", desc: "We ensure documents are correct before travel." },
    { title: "Risk & Cost Control", desc: "Avoid penalties and unnecessary charges." },
    { title: "Fast, Clear Advice", desc: "Practical support when travelling internationally." },
  ];

  const classificationFaq = [
    {
      question: "What is an ATA Carnet?",
      answer: "An ATA Carnet allows temporary export and import of goods without paying duty or VAT.",
    },
    {
      question: "How long is an ATA Carnet valid?",
      answer: "Typically valid for up to 12 months.",
    },
    {
      question: "What goods can use an ATA Carnet?",
      answer: "Professional equipment, exhibition goods, and commercial samples.",
    },
    {
      question: "Can I use an ATA Carnet in multiple countries?",
      answer: "Yes — as long as countries are carnet members.",
    },
    {
      question: "Do you support carnet re-import?",
      answer: "Yes — we ensure correct discharge on return to the UK.",
    },
  ];

  const points = [
    { condition: "Temporary export from the UK", example: "Exhibitions or trade shows" },
    { condition: "Temporary import abroad", example: "Professional equipment use" },
    { condition: "No sale of goods", example: "Goods remain under ownership" },
    { condition: "Multiple border crossings", example: "Single carnet used repeatedly" },
    { condition: "Goods return to the UK", example: "Carnet discharged correctly" },
  ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>

        <NewInnerBanner
          title="ATA Carnets"
          backgroundImage="/images/road-bg.jpg"
          bannerDescription={[
            "Move Goods Internationally Without Paying Duty or VAT",
            "ATA Carnets allow goods to be temporarily exported and imported without paying customs duty or VAT. Errors in usage can result in heavy charges — expert support is essential.",
          ]}
        />

        <ServiceHero
          title="ATA Carnet Services"
          description={[
            "Global Customs provides expert ATA Carnet services for UK businesses moving goods internationally for exhibitions, professional use, or demonstrations.",
            "We guide you through the full carnet process, from application to final re-import, ensuring compliance at every border.",
          ]}
          image1="/images/road-big.jpg"
          image2="/images/road-small.jpg"
          image3="/images/road-smaal2.jpg"
        />

        {/* WHAT IS ATA CARNET */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              What Is an <span className="text-[#3daee0]">ATA Carnet</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              An ATA Carnet is an international customs document that allows goods to move temporarily between countries without paying import duty or VAT, provided the goods are re-exported.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Duty and VAT suspended",
                "Valid across multiple countries",
                "Time-limited document",
                "Goods must return",
                "Strict customs stamping rules",
                "Financial guarantee required",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md border border-gray-200">
                  <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-[#3daee0] text-white text-sm font-semibold">✓</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-[#3daee0]/5 border-l-4 border-[#3daee0]">
              <p className="text-gray-700">
                Incorrect ATA Carnet use can trigger full duty, VAT, and penalties.
              </p>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-24 font-sans">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-3/5">
                <h2 className="text-3xl font-bold text-slate-900 mb-10">
                  Why ATA Carnets Must Be Used Correctly
                </h2>

                <p className="text-xl text-slate-500 mb-8 font-medium">
                  Incorrect carnet handling can result in:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {risks.map((risk, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white shadow-md rounded-xl border border-slate-100">
                      <AlertCircle className="text-red-500 w-5 h-5 flex-shrink-0" />
                      <span className="text-slate-700 font-semibold">{risk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/5 lg:mt-24">
                <div className="relative p-1 bg-gradient-to-b from-[#3daee0] to-blue-600 rounded-[2.5rem] shadow-2xl shadow-blue-200">
                  <div className="bg-white rounded-[2.4rem] p-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6">
                      <CheckCircle2 className="text-[#3daee0] w-10 h-10" />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                      We ensure your ATA Carnet is used correctly at every border.
                    </p>
                    <div className="mt-8 pt-8 border-t border-slate-100">
                      <Btn link="/contact" title="Contact Us" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">
                Our ATA Carnet Services
              </h2>
              <p className="mt-4 text-slate-600">
                Complete support for international carnet movements:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <div className="text-[#0ea5e9] mb-4">
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
                    alt="ATA Carnet services"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Who Uses ATA Carnets
                </h2>
                <p className="text-slate-600 mb-6">
                  ATA Carnets are commonly used by:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Exhibitors and event organisers",
                    "Manufacturers",
                    "Film and media crews",
                    "Engineers and technicians",
                    "Professional service providers",
                    "Automotive companies",
                    "Technology firms",
                    "International contractors",
                    "Freight forwarders",
                    "Sales teams",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>

                <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  If your goods are travelling internationally on a temporary basis, an ATA Carnet may be required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">
                What We Need to Arrange an ATA Carnet
              </h2>
              <p className="text-slate-600 mt-4">
                To apply for and manage an ATA Carnet, we typically require:
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
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
                  We prepare everything to ensure your carnet is border-ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              How Global Customs Supports ATA Carnets
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
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

        {/* PROBLEMS */}
        <section className="py-20 bg-[#0ea5e9] text-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Common ATA Carnet Problems We Solve
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((prob, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h4 className="font-bold text-lg mb-2">
                    {prob.title}
                  </h4>
                  <p className="text-blue-50 text-sm">
                    {prob.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-24 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-left lg:text-center">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                Industries We Support
              </h2>
              <p className="text-slate-600 mb-10">
                ATA Carnets are widely used across:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#3daee0] mb-12">
              {[
                "Exhibitions & events",
                "Film & media",
                "Manufacturing",
                "Engineering",
                "Automotive",
                "Technology",
                "Professional services",
                "Sales & marketing",
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
              Wherever your goods are travelling temporarily, we ensure carnet compliance.
            </p>
          </div>
        </section>

        <Testimonials />

        <SiteFAQs
          sectionTitle="FAQs"
          sectionDescription="Common questions about ATA Carnets."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={classificationFaq}
        />

        <SiteCta
          title="Need help with an ATA Carnet?"
          description="Contact Global Customs today for expert ATA Carnet support and international compliance."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

      </Layout>
    </>
  );
}
