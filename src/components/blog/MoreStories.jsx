import PostPreview from "@/components/blog/PostPreview";
import SectionHeading from "../ui/SectionHeading";

export default function MoreStories({ posts }) {
  return (
    <section className="section">
      <div className="mb-[40px] text-center">
        <SectionHeading title="More Stories"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
