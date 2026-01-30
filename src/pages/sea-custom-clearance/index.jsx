import Container from "@/components/ui/Container";
import Head from "next/head";
import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Layout from "@/components/ui/Layout";
import Heroroad from "@/components/ui/Heroroad";
import Seafaq from "@/components/ui/Seafaq/Seafaq";
import PageHead from "@/components/ui/PageHead";

export default function Sea({ preview }) {
    const PageMeta = {
        title: "Global Custom Clearance",
        description: "At Global Customs Clearance Ltd our focus is to provide the best customer service in the business whilst completing all assignments with the highest level of quality.",
        keywords:"Seamless Clearance Process, Quality Customs Clearance, Expert Customs Handling, Reliable Import Export Services, ",
    };
    return (
        <>
        <PageHead PageMeta={PageMeta} />
            <Layout>
                <Heroroad
                    bannerdescription='Arrange the handling of your goods before they arrive in the UK by appointing us to efficiently customs clear and book deliveries. A customs agent requires a "badge" (electronic login) for each inventory linked port that they intend to clear at. Otherwise, they cannot access the inventory and cannot present entries. At non inventory linked ports you simply submit entries to customs and inform the driver/port of the entry details. The inventory systems used by ports around the UK are CCS UK for airfreight, Destin8 and CNS for ocean freight. We can offer customs clearance at several ports across the UK with full control, flexibility and visibility for our customers. This growing list of port links is reflective of the general growth and expansion of our business and our consistent effort to respond to customer requirements in an ever-changing logistics industry.'
                    title='Sea Freight'
                    title2="Sea Freight"
                    description='Global Custom Clearance (UK) specializes in sea freight custom clearance, ensuring your shipments comply with all regulations for smooth transit. Our services include documentation handling, duty and VAT calculation, and coordination with port authorities. We streamline the process to minimize delays and optimize costs, providing real-time tracking and comprehensive support. Trust our expertise to manage your sea freight efficiently and reliably, ensuring timely delivery and compliance.'
                    image1="/images/sea-big.jpg"
                    image2='/images/sea-small.jpg'
                    image3='/images/sea-small2.jpg'
                    backgroundImage="/images/sea-bg.jpg"
                />
                <Testimonials />
                <Seafaq />
            </Layout>
        </>
    );
}
