import { GetStaticProps } from "next";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Layout from "@/components/ui/Layout";
import { getAllPostsForHome } from "@/lib/api";
import Heroservice from "@/components/ui/Heroservice";
import PageHead from "@/components/ui/PageHead";
import PostPreview from "@/components/blog/PostPreview";
import { Search, LayoutGrid, List } from "lucide-react";

/* =======================
   TYPES
======================= */

interface PostNode {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: any;
  isSticky?: boolean;
}

interface PostEdge {
  node: PostNode;
}

interface AllPosts {
  edges: PostEdge[];
}

interface IndexProps {
  allPosts: AllPosts;
  preview: boolean;
}

/* =======================
   COMPONENT
======================= */

const Index: React.FC<IndexProps> = ({ allPosts, preview }) => {
  const posts: PostEdge[] = allPosts?.edges ?? [];
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [search, setSearch] = useState("");

  const filteredPosts = posts
  .filter(({ node }) =>
    node.title.toLowerCase().includes(search.toLowerCase()) ||
    node.excerpt.toLowerCase().includes(search.toLowerCase())
  )
  .sort((a, b) => {
    const aSticky = a.node.isSticky ? 1 : 0;
    const bSticky = b.node.isSticky ? 1 : 0;
    return bSticky - aSticky; // Sticky posts first
  });


  const PageMeta = {
    title: "Knowledge Hub | Global Custom Clearance Ltd.",
    description:
      "Expert customs clearance guides, import/export insights, UK border updates and compliance knowledge.",
    keywords:
      "customs clearance blog, import export guides, UK customs advice, CDS declarations, border compliance",
  };

  return (
    <>
      <PageHead PageMeta={PageMeta} post="" />

      <Layout preview={preview}>
        {/* HERO */}
        {/* <Heroservice
          title="Knowledge Hub"
          desc="Expert customs guidance, compliance insights, and trade intelligence"
          backgroundImage="/images/service-bg.jpg"
        /> */}
        <section className="bg-black text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3daee0]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                  <h1 className="text-5xl md:text-[70px] font-bold mb-6 tracking-tight">
                  Knowledge <span className="text-[#3daee0]">Hub.</span>
                  </h1>
                  <p className="text-gray-400 text-md max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                  Expert customs guidance, compliance insights, and trade intelligence
                  </p>
                  
                  <div className="max-w-2xl mx-auto relative group">
                  <input
                  type="text"
                  placeholder="Search knowledge base..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-2xl py-5 px-14 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3daee0] focus:bg-white/15 transition-all text-lg"
              
                />
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-[#3daee0]" />
                  </div>
                </div>
              </section>

        {/* TOOLBAR */}
        {/* <div className="max-w-[800px] m-auto"> */}
        <Container ContainerClass="">
          <div className="mt-[80px] mb-12">
            <div className="flex flex-row justify-end gap-6 border-b pb-8">

              {/* View Toggle */}
              <div className="bg-gray-100 p-1 rounded-lg flex">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${
                    viewMode === "list"
                      ? "bg-white shadow text-[#3daee0]"
                      : "text-gray-400"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${
                    viewMode === "grid"
                      ? "bg-white shadow text-[#3daee0]"
                      : "text-gray-400"
                  }`}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* POSTS */}
          <div
            className={` ${
              viewMode === "grid"
                ? "grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                : "flex flex-col gap-6"
            }`}
          >
            {filteredPosts.map(({ node }) => (
              <PostPreview
                key={node.slug}
                coverImage={node.featuredImage}
                title={node.title}
                date={node.date}
                excerpt={node.excerpt}
                slug={node.slug}
                viewMode={viewMode}
                isSticky={node.isSticky}
              />
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-32 text-gray-400 text-sm font-semibold">
              No articles match your search.
            </div>
          )}
        </Container>
        {/* </div> */}
      </Layout>
    </>
  );
};

/* =======================
   DATA
======================= */

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: {
      allPosts,
      preview,
    },
    revalidate: 10,
  };
};

export default Index;
