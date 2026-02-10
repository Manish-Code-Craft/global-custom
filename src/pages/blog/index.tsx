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
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(({ node }) =>
    node.title.toLowerCase().includes(search.toLowerCase()) ||
    node.excerpt.toLowerCase().includes(search.toLowerCase())
  );

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
        <Heroservice
          title="Knowledge Hub"
          desc="Expert customs guidance, compliance insights, and trade intelligence"
          backgroundImage="/images/service-bg.jpg"
        />

        {/* TOOLBAR */}
        <Container>
          <div className="mt-[80px] mb-12 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b pb-8">
              {/* Search */}
              <div className="relative w-full md:max-w-md">
                <input
                  type="text"
                  placeholder="Search knowledge base..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#3daee0]"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#3daee0]" />
              </div>

              {/* View Toggle */}
              <div className="bg-gray-100 p-1 rounded-lg flex">
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
              </div>
            </div>
          </div>

          {/* POSTS */}
          <div
            className={`max-w-6xl mx-auto ${
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
