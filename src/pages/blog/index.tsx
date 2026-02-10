interface IndexProps {
  allPosts: any
  preview: any
}

import { GetStaticProps } from "next";
import Container from "@/components/ui/Container";
import Layout from "@/components/ui/Layout";
import { getAllPostsForHome } from "@/lib/api";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import MoreStories from "@/components/blog/MoreStories";

const Index: React.FC<IndexProps> = ({ allPosts, preview }) => {

  const posts = allPosts?.edges || [];

  const PageMeta = {
    title: "Blog - Global Custom Clearance Ltd.",
    description: "Blog - Global Custom Clearance Ltd.",
    keywords:
      "reliable customs clearance, best customs brokerage, hassle-free imports, export clearance solutions, trade compliance experts, efficient logistics services, UK customs specialists",
  };

  return (
    <>
      <PageHead PageMeta={PageMeta} post="" />

      <Layout preview={preview}>
        <Heroservice
          title="Blog"
          desc="Global Custom Clearance Ltd."
          backgroundImage="/images/service-bg.jpg"
        />

        <Container ContainerClass="">
          <div className="mt-[80px]">
            <MoreStories posts={posts} />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};

export default Index;
