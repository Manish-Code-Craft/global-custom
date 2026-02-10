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
  { href: "/hs-code-guides", text: "HS Code Guides" },
  { href: "/duty-relief-guides", text: "Duty Relief Guides" },
  { href: "/port-guides", text: "Port Guides" },
  { href: "/customs-glossary", text: "Customs Glossary" },
  { href: "/importer-checklists", text: "Importer Checklists" },
  { href: "/cds-vs-chief-guides", text: "CDS vs CHIEF Guides" },
  { href: "/how-to-avoid-port-delays", text: "How to Avoid Port Delays" },
  { href: "/how-to-classify-goods-correctly", text: "How to Classify Goods Correctly" },
  { href: "/post-brexit-customs-advice", text: "Post-Brexit Customs Advice" },
  { href: "/common-importer-mistakes", text: "Common Importer Mistakes" },
  { href: "/how-to-prepare-for-a-customs-audit", text: "How to Prepare for a Customs Audit" },
  { href: "/understanding-duty-relief-schemes", text: "Understanding Duty Relief Schemes" },
  { href: "/temporary-admission-explained", text: "Temporary Admission Explained" },
  { href: "/ata-carnet-step-by-step", text: "ATA Carnet Step-by-Step" },
  { href: "/how-to-speed-up-customs-clearance", text: "How to Speed Up Customs Clearance" },
  { href: "/what-importers-must-know-in-2026", text: "What Importers Must Know in 2026" },
  { href: "/how-to-reduce-duty-costs-legally", text: "How to Reduce Duty Costs Legally" },
  { href: "/e-commerce-importing-guide", text: "E-commerce Importing Guide" },
  { href: "/amazon-fba-import-guide", text: "Amazon FBA Import Guide" },
  { href: "/uk-border-changes-explained", text: "UK Border Changes Explained" },
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
    <div className="bg-white section relative">
        <article>
            <Container>
                <div className="grid grid-cols-12 gap-12 ">
                    <div className="pr-[50px] border-r-[1px] border-r-[#f0f0f0] lg:col-span-8 md:col-span-12 col-span-12">
                        <PostHeader
                            title={post.title}
                            coverImage={post.featuredImage}
                            date={post.date}
                            author={post.author}
                            categories={post.categories}
                            />
                        {/* 
                        <CoverImage title={post.title} coverImage={post.featuredImage} />
                        */}
                        <PostBody content={post.content} />
                        <footer>
                            {post.tags.edges.length > 0 && 
                            <Tags tags={post.tags} />
                            }
                        </footer>
                    </div>
                    <div className="col-span-12 lg:col-span-4 shadow-md  sticky top-24 h-fit border border-[#3daee0] p-4 "> 
                        <div className="border  shadow-lg">
                        <div className="pt-[5px] px-3">
                            <h2 className="pb-3 font-[800] text-[42px] mb-6 border-[#3daee0] border-b-4">Knowledge Hub</h2>
                        </div>
                        <div className="flex flex-col gap-3">
                            {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="py-[5px] px-3 border-b text-sm hover:translate-x-2 hover:text-[#3daee0] text-[18px] transition-transform duration-300 ease-in-out"
                                >
                                {link.text}
                            </Link>
                        ))}
                        </div>
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