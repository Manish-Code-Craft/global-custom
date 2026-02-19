import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Footer from "@/components/ui/Footer";
import Layout from "@/components/ui/Layout";
import Header from "@/components/ui/Header";
import Container from "@/components/ui/Container";
// import Schemas from '@/components/schemas/PostPageSchemas';
import PostBody from "@/components/blog/PostBody";
import MoreStories from "@/components/blog/MoreStories";
import PostHeader from "@/components/blog/PostHeader";
import PostTitle from "@/components/blog/PostTitle";
import Tags from "@/components/blog/Tags";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import Link from "next/link";
import PageHead from "@/components/ui/PageHead";
export default function Post({ post, posts, preview }) {
const router = useRouter();
const morePosts = posts?.edges;
if (!router.isFallback && !post?.slug) {
return 
<ErrorPage statusCode={404} />
;
}

const links = [
    {
      href: "/hs-code-guides-understanding-finding-using-the-correct-commodity-codes",
      text: "HS Code Guides",
    },
    {
      href: "/duty-relief-guides-how-to-reduce-or-eliminate-import-duties-legally",
      text: "Duty Relief Guides",
    },
    {
      href: "/port-guides-navigating-uk-ports-for-smooth-customs-clearance",
      text: "Port Guides",
    },
    {
      href: "/customs-glossary-key-terms-every-importer-exporter-should-know",
      text: "Customs Glossary",
    },
    {
      href: "/importer-checklists",
      text: "Importer Checklists",
    },
    {
      href: "/cds-vs-chief-guides",
      text: "CDS vs CHIEF Guides",
    },
    {
      href: "/how-to-avoid-port-delays",
      text: "How to Avoid Port Delays",
    },
    {
      href: "/how-to-classify-goods-correctly",
      text: "How to Classify Goods Correctly",
    },
    {
      href: "/post-brexit-customs-advice-uk-importers-exporters",
      text: "Post-Brexit Customs Advice",
    },
    {
      href: "/importer-mistakes-common-errors-how-to-avoid-them",
      text: "Common Importer Mistakes",
    },
    {
      href: "/prepare-for-uk-customs-audit-guide",
      text: "How to Prepare for a Customs Audit",
    },
    {
      href: "/uk-duty-relief-schemes-import-costs-guide",
      text: "Understanding Duty Relief Schemes",
    },
    {
      href: "/temporary-admission-uk-duty-vat-relief",
      text: "Temporary Admission Explained",
    },
    {
      href: "/ata-carnet-step-by-step-guide",
      text: "ATA Carnet Step-by-Step",
    },
    {
      href: "/speed-up-uk-customs-clearance-guide",
      text: "How to Speed Up Customs Clearance",
    },
    {
      href: "/uk-import-rules-2026-changes-risks-opportunities",
      text: "What Importers Must Know in 2026",
    },
    {
      href: "/reduce-duty-costs-legally-uk-importers",
      text: "How to Reduce Duty Costs Legally",
    },
    {
      href: "/ecommerce-importing-guide-uk-compliance",
      text: "E-commerce Importing Guide",
    },
    {
      href: "/amazon-fba-import-guide-uk",
      text: "Amazon FBA Import Guide",
    },
    {
      href: "/uk-border-changes-explained-importers-guide",
      text: "UK Border Changes Explained",
    },
  ];
  
const PageMeta = {
    title: `${post.seo.title ? post.seo.title : post.title}`,
    description: post.seo.metaDesc ? post.seo.metaDesc : post.title,
    ogimage: post.featuredImage?.node.sourceUrl,
    keywords:"Customs Clearance,Customs Clearance UK, United Kingdom"
};
return (
    <>
    <PageHead PageMeta={PageMeta} post={post} />
<Layout preview={preview}>
    <Header/>
    {router.isFallback ? (
    <PostTitle>Loading…</PostTitle>
    ) : (
    <>
    <div className="bg-white section relative mt-12">
        <article>
            <Container>
                <div className="lg:grid lg:grid-cols-12 gap-12 ">
                    <div className=" lg:col-span-8 md:col-span-12 col-span-12">
                        <PostHeader
                            title={post.title}
                            coverImage={post.featuredImage}
                            date={post.date}
                            author={post.author}
                            categories={post.categories}
                            />
                       
                        <PostBody content={post.content} />
                        <footer>
                            {post.tags.edges.length > 0 && 
                            <Tags tags={post.tags} />
                            }
                        </footer>
                    </div>
                    
                    <div className="col-span-12 lg:col-span-4 h-fit border shadow-md pb-6 px-4">
                        <div className="pt-2 ">
                            <h2 className="pb-1 font-[800] text-[24px] mb-2 border-[#3daee0] border-b-4">Knowledge Hub</h2>
                        </div>
                        <div className="flex flex-col gap-1">
                            {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="py-[5px]  border-b text-sm hover:translate-x-2 hover:text-[#3daee0] text-[18px] transition-transform duration-300 ease-in-out"
                                >
                                {link.text}
                            </Link>
                        ))}
                        </div>
                    </div>                    
                </div>
            </Container>
        </article>
        {/* <div className="pb-[1px]">
            <Container>
                {morePosts.length > 0 && 
                <MoreStories posts={morePosts} />
                }
            </Container>
        </div> */}
    </div>
    </>
    )}
</Layout>
</>
);
}
export const getServerSideProps= async ({
params,
preview = false,
previewData,
}) => {
const data = await getPostAndMorePosts(params?.slug, preview, previewData);
return {
props: {
preview,
post: data.post,
posts: data.posts,
revalidate: 10,
}
};
};