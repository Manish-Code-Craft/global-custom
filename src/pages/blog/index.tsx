interface IndexProps {
  allPosts:any
  edges:any
  preview:any
}
import { GetStaticProps } from "next";
import Container from "@/components/ui/Container";
import MoreStories from "@/components/blog/MoreStories";
import HeroPost from "@/components/blog/HeroPost";
import Layout from "@/components/ui/Layout";
import { getAllPostsForHome } from "@/lib/api";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
const Index: React.FC<IndexProps> = ({ allPosts: { edges }, preview }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  const PageMeta = {
    title: "Blog - Global Custom Clearance Ltd.",
    description:"Blog - Global Custom Clearance Ltd.",
    keywords: "reliable customs clearance, best customs brokerage, hassle-free imports, export clearance solutions, trade compliance experts, efficient logistics services, UK customs specialists ",
  };
  return (
    <>
    <PageHead PageMeta={PageMeta} post=""/>
    <Layout preview={preview}>
      <Heroservice title="Blog" desc="Global Custom Clearance Ltd." backgroundImage="/images/service-bg.jpg"/>
      <Container ContainerClass=''>
        <div className="mt-[80px]">
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
      </Container>
    </Layout>
    </>
  );
}
export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};

export default Index;