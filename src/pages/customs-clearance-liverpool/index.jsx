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
import Whychoose from "@/components/ui/Whychoose"
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
    title: " Customs Clearance Liverpool | Global Customs Clearance Ltd",
    description:"Looking for reliable customs clearance services in Liverpool? Global Customs Clearance Ltd offers top-notch solutions for all your custom clearance needs.",
    keywords:"Customs Clearance Liverpool, Liverpool Customs Brokers, Reliable Customs Clearance Services, Global Customs Clearance, Fast Customs Clearance Liverpool, ",
  };
    return(
        <>
        <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
        <Heroservice title="Customs Clearance Liverpool" desc="Choosing Global Customs Clearance for Customs Clearance Liverpool" backgroundImage="/images/service-bg.jpg"/>
        <NewService/>
        <Servicedef title="Choosing Global Customs Clearance for Customs Clearance Liverpool" description="In today's fast-paced global economy, businesses that import and export goods must navigate a complex web of regulations, documentation, and tariffs. Managing customs clearance efficiently is critical to ensuring goods arrive on time and without unexpected delays. For companies in Liverpool, partnering with the right customs clearance provider can make all the difference between a seamless supply chain and costly hold-ups."
         description1="This is where Global Customs Clearance Ltd. comes in. With a reputation for reliability, precision, and customer-centric service, the company offers customs clearance solutions that meet the highest standards. If you're looking for customs clearance in Liverpool, here’s why Global Customs Clearance Ltd. should be your top choice."

         image1="/images/service-road.jpg" title2="Why Customs Clearance Matters" description2="Before diving into the services offered by Global Customs Clearance Ltd., it's important to understand why efficient customs clearance is so crucial for businesses involved in international trade. Customs clearance is the process that goods must go through when being transported internationally, including the filing of necessary paperwork, ensuring compliance with local regulations, and paying applicable taxes and duties."
         description22="Without expert handling, this process can become a major bottleneck for businesses. Delays, incorrect documentation, or misunderstanding regulations can lead to penalties, seized goods, or frustrated customers. Partnering with a professional customs clearance provider helps businesses navigate these complexities, streamlining the process and ensuring their goods move swiftly across borders."
          image2="/images/service-sea.jpg" title3="" description3=" " image3="" imageUrl="" />
          <Whychoose  />
        </Layout>
        </>
    )
}