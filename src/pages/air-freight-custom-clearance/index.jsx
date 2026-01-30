import Container from "@/components/ui/Container";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Layout from "@/components/ui/Layout";
import Heroroad from "@/components/ui/Heroroad";
import Testimonials from "@/components/ui/Testimonials";
import Airfaq from "@/components/ui/Airfaq/Airfaq";
import PageHead from "@/components/ui/PageHead";

export default function air ({ preview }) {
  const PageMeta = {
   title: "UK Air Freight Customs Made Easy | Global Cust",
   description:"Global Cust provides efficient air freight customs clearance services, ensuring quick and compliant handling of your international shipments for smooth delivery. ",
   keywords:"Air Freight Customs Clearance, International Air Freight Services, Fast Customs Clearance, Global Customs Clearance, Air Cargo Clearance, Import Export Customs,",
 };
    return(
      <>
      <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
        <Heroroad bannerdescription='Arrange the handling of your goods before they arrive in the UK by appointing us to efficiently customs clear and book deliveries. We cover Heathrow, Gatwick, Stansted, Birmingham and Manchester airports - 7 days a week * 24-hour notice require for weekend clearance services.For urgent shipments, we provide worldwide air freight customs clearance and delivery services from all major UK air freight ports. We have competitive air freight clearance rates and solutions for both import and export custom clearances.
        Freight is handled securely and professionally. With daily collections and deliveries, we ensure that your airfreight cargo reaches you or your client without delay. We oversee aspects of the shipping process, including documentation, clearance, and transport within UK mainland.' title='Air Freight' title2="Air Freight" description="At Global Custom Clearance (UK), our air freight services ensure your goods reach their destination quickly and efficiently. We provide comprehensive solutions, including real-time tracking, customs clearance, and coordination with international carriers. Our expertise guarantees timely delivery, compliance with regulations, and cost-effective solutions for all your air freight needs. Trust us to handle your shipments with precision and reliability, ensuring smooth and swift transit every time." image1="/images/air-big.jpg" image2='/images/air-small.jpg' image3='/images/air-small02.jpg' backgroundImage="/images/air-bg.jpg"/>
        <Testimonials/>
         <Airfaq/>
    </Layout>
    </>
    )
}