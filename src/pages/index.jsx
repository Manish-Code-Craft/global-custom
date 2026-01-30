import Head from "next/head";
import Header from "@/components/ui/Header";
import Layout from "@/components/ui/Layout";
import Hero from "@/components/ui/Hero";
import AboutArea from "@/components/ui/AboutArea";
import NewService from "@/components/Home/Services/NewService";
import Testimonials  from "@/components/ui/Testimonials";
import Faq from "@/components/ui/Faq/Faq";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PageHead from "@/components/ui/PageHead";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const container = useRef();
  useGSAP(() => {  
     let scrollTriggers = gsap.utils.toArray(".scroll-trigger");
     let scrollItem = gsap.utils.toArray(".scroll-item");
     scrollTriggers.forEach((scrollTrigger, index) => {
         ScrollTrigger.create({
             trigger: scrollTrigger,
             start: 'top bottom',
             end: 'bottom top',
             toggleClass: { targets: scrollItem[index], className: "c-active" }
         });
     });
     
   });
   const PageMeta = {
    title: "Global Customs Clearance Ltd | Customs Clearance",
    description:"Global Customs Clearance, the leading Customs Brokers offering 24 hour services to ensure that your clearances are not delayed.",
    keywords: "Global Customs Clearance, Customs Brokers, Customs Clearance Services,  Fast Customs Clearance, International Customs Brokerage, Freight Forwarding and Customs Clearance,",
  };
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
    <Hero/>
    <NewService /> 
      <AboutArea/>
      <Testimonials/>
      {/* <Moredef/> */}
      <Faq/>
</Layout>
</>
  );
}