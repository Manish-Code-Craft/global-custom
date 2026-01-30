import Head from "next/head";
import Header from "@/components/ui/Header";
import Layout from "@/components/ui/Layout";
import HeroInnerPage from "@/components/ui/HeroInnerPage";
import Faq from "@/components/ui/Faq/Faq";
import PageHead from "@/components/ui/PageHead";

export default function ThankYou({ preview }) {
  const PageMeta = {
      title: "Gobal Custom Clearance",
      description: "At Global Customs Clearance Ltd our focus is to provide the best customer service in the business whilst completing all assignments with the highest level of quality.",
  };
  return (
    <>
    <Head>
    <script>
      gtag('event', 'ads_conversion_Contact_Us_1', {
        // <event_parameters>
      });
    </script>

    </Head>
    <PageHead PageMeta={PageMeta} />
    <Layout preview={preview}>
        <HeroInnerPage
            title="Thanks you for your interest."
            content="Your requirement is received and we will contact you soon!"
        />
        <Faq/>
    </Layout>
    </>
  );
}