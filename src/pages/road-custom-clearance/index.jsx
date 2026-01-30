import Container from "@/components/ui/Container";
import Head from "next/head";
import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Layout from "@/components/ui/Layout";
import Heroroad from "@/components/ui/Heroroad";
import Servicefaq from "@/components/ui/Servicefaq/Servicefaq";
import PageHead from "@/components/ui/PageHead";

export default function Road ({ preview }) {
  const PageMeta = {
   title: "Seamless UK Road Customs Solutions | Global Cust",
   description:"Global Cust delivers efficient road customs clearance solutions, ensuring seamless and timely border crossings for your shipments with expert handling.",
   keywords:"Road Customs Clearance, Border Clearance Services, Fast Customs Processing, Freight Forwarding Solutions,",
 };
    return(
      <>
      <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
        <Heroroad bannerdescription='When transport companies move your cargo through the UK or EU have an experienced agent on hand to get you through borders smoothly <br> WE CLEAR INVENTORY LINKED OR NON- INVENTORY LINKED (GVMS) CARGO INCLUDING DOVER PENTANT CLEARANCE (MOTIS AND STOP24).

        Dover and Eurotunnel are not inventory linked and neither are most RORO ports. At an inventory linked port, you access the port record and present entries against it. Nothing can leave until the inventory is finalised, meaning that all goods are either cleared or offloaded and the container is free to proceed.

        Inventory systems
        CSN / Destin8/ Pentant / CCS
        Non-inventory systems
        IPAFF (PEACH, CHED-D, CHED-P)' title='Road Custom Clearance' title2='Road Custom Clearance' description="Global Custom Clearance (UK) offers specialized road freight custom clearance services, ensuring smooth transit and compliance with UK regulations. Our expert team handles all documentation, duty calculations, and regulatory requirements, minimizing delays and optimizing cost-efficiency. With our comprehensive approach, we guarantee seamless clearance for all types of road freight, enhancing the efficiency and reliability of your supply chain operations. Choose us for expert road freight custom clearance solutions."
        image1="/images/road-big.jpg" image2='/images/road-small.jpg' image3='/images/road-smaal2.jpg' backgroundImage="/images/road-bg.jpg"
       />
       <Testimonials/>
       <Servicefaq/>
    </Layout>
    </>
    )
}