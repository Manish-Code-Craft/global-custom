import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Layout from "@/components/ui/Layout";
import Testimonials from "@/components/ui/Testimonials";
import Heroreview from "@/components/ui/Heroreview";
import PageHead from "@/components/ui/PageHead";

export default function Testimonial ({ preview }) {
    const PageMeta = {
        title: "Client Testimonials | Trusted by Global Cust Customers",
        description: "See why businesses trust Global Cust for top-notch customs clearance and logistics services. Read client testimonials and success stories across the UK",
        keywords: "customs clearance UK, customs brokerage services, logistics solutions UK, import export services, customs clearance testimonials, freight forwarding UK, ",
    };
    return(
        <>
        <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
        <Heroreview/>
        <Testimonials/>
    </Layout>
    </>
    )
}