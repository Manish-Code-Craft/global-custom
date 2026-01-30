
import PageHead from "@/components/ui/PageHead"
import Header from "@/components/ui/Header";
import Layout from "@/components/ui/Layout";
import Contact from "@/components/ui/Contact";

export default function Index({ preview }) {
  const PageMeta = {
   title: "Contact Global Cust | Expert Customs Solutions",
   description:"Get in touch with Global Cust for all inquiries. Our team is ready to assist with your logistics needs. Contact us for expert support and information.",
   keywords: "reliable customs clearance, best customs brokerage, hassle-free imports, export clearance solutions, trade compliance experts, efficient logistics services, UK customs specialists ",
 };
    return(
      <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
      <Header />
      <Contact />
    </Layout>
    </>
  );
}
