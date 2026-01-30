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
import FeliixstoweWhyChoose from "@/components/Pages/FeliixstoweWhyChoose"
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
    title: "Customs Clearance Felixstowe | Global Customs Clearance Ltd",
    description:"Discover seamless Customs Clearance services in Felixstowe with Global Customs Clearance Ltd. Streamline your imports and exports efficiently today. Call now!",
    keywords: "Customs Clearance Felixstowe, Felixstowe Customs Brokers, Import Export Clearance Felixstowe, Global Customs Clearance, UK Customs Clearance Services,",
  };
    return(
        <>
        <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
        <Heroservice title="Customs Clearance Felixstowe" desc="Navigating the complexities of customs clearance services for the United Kingdom can be a challenge, but Global Custom Clearance Ltd. is here to simplify the process. We offer comprehensive customs clearance services, including import, export, and transit, ensuring your shipments move smoothly and efficiently. Our team of experienced professionals is dedicated to providing accurate and timely customs clearance solutions that meet the highest compliance standards. Choose Global Custom Clearance Ltd. for reliable, efficient, and compliant customs clearance services." backgroundImage="/images/service-bg.jpg"/>
        <NewService/>
        <FeliixstoweWhyChoose/>
        <Servicedef  />
        </Layout>
        </>
    )
}