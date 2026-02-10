import PostPreview from "@/components/blog/PostPreview";
import SectionHeading from "../ui/SectionHeading";

export default function MoreStories({ posts }) {
  return (
    <section className="">
      <div className="mb-[40px] text-center">
        <SectionHeading title="More Stories"/>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1  gap-6">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
