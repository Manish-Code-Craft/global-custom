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
   title: "Cds Declarations | Road Customs Clearance Services UK",
   description:"Global Custom Clearance (UK) provides expert road customs clearance services, ensuring efficient and compliant transport of goods across UK borders. Our experienced team manages all aspects of customs documentation, duty calculations, and regulatory compliance to facilitate smooth transit for your road freight shipments.",
   keywords:"Road Customs Clearance, Border Clearance Services, Fast Customs Processing, Freight Forwarding Solutions,",
 };
    return(
      <>
      <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
        <Heroroad bannerdescription='The UK’s Customs Declaration Service (CDS) is now the central platform for all import
and export declarations. Whether you’re bringing goods into the UK or sending products
overseas, every shipment must be declared correctly through CDS. Errors can lead to
delays, rejected entries, additional charges, or goods being held at the border.
Global Customs provides fast, compliant CDS declarations for importers, exporters,
freight forwarders, hauliers, manufacturers, and e-commerce businesses. Our team
ensures your declarations are accurate, complete, and submitted on time — helping
you avoid delays and keep your supply chain moving.
This page explains how CDS works, what information you need, and why businesses
across the UK trust Global Customs for reliable, expert customs filing' title='CDS-Declarations' title2='CDS-Declarations' description="Global Custom Clearance (UK) offers specialized road freight custom clearance services, ensuring smooth transit and compliance with UK regulations. Our expert team handles all documentation, duty calculations, and regulatory requirements, minimizing delays and optimizing cost-efficiency. With our comprehensive approach, we guarantee seamless clearance for all types of road freight, enhancing the efficiency and reliability of your supply chain operations. Choose us for expert road freight custom clearance solutions."
        image1="/images/road-big.jpg" image2='/images/road-small.jpg' image3='/images/road-smaal2.jpg' backgroundImage="/images/road-bg.jpg"
       />
       <Testimonials/>
       <Servicefaq/>
    </Layout>
    </>
    )
}