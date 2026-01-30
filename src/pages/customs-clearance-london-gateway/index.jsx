import NewService from "@/components/Home/Services/NewService"
import Layout from "@/components/ui/Layout"
import Head  from "next/head"
import Servicedef from "@/components/ui/Servicedef"
import Heroservice from "@/components/ui/Heroservice"
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PageHead from "@/components/ui/PageHead"
import GatwayWhyChoose from "../../components/Pages/GatwayWhyChoose"
gsap.registerPlugin(ScrollTrigger);
export default function Services({preview}){
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
    title: "Professional Customs Clearance Services London Gateway",
    description:"Looking for expert Custom Clearance services at London Gateway? Trust Global Customs Clearance Ltd. for seamless customs clearance solutions!",
    keywords:"Custom Clearance London Gateway, London Gateway Customs Brokers, UK Customs Clearance Services, Global Customs Clearance, Import Export Clearance London,",
  };
    return(
        <>
        <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
        <Heroservice title="Customs Clearance London Gateway" desc="Navigating the complexities of customs clearance services for the United Kingdom can be a challenge, but Global Custom Clearance Ltd. is here to simplify the process. We offer comprehensive customs clearance services, including import, export, and transit, ensuring your shipments move smoothly and efficiently. Our team of experienced professionals is dedicated to providing accurate and timely customs clearance solutions that meet the highest compliance standards. Choose Global Custom Clearance Ltd. for reliable, efficient, and compliant customs clearance services." backgroundImage="/images/service-bg.jpg"/>
        <NewService/>
        <Servicedef title="The Ultimate Guide to Choose the Right Customs Clearance London Gateway" description="Navigating the complexities of customs clearance can be daunting, especially for businesses importing or exporting goods through the UK’s busiest ports, such as London Gateway and Liverpool. Whether you're a small business owner or a large corporation, finding the right customs clearance service is crucial to ensure compliance with regulations, timely deliveries, and cost-effective operations." 
        description1="In this guide, we’ll explore the essential Factors to Consider When Choosing Customs Clearance London Gateway, focusing on the efficient and trusted services provided by Global Customs Clearance Ltd. at London Gateway."
        image1="/images/service-road.jpg"/>
        <GatwayWhyChoose/>
        </Layout>
        </>
    )
}