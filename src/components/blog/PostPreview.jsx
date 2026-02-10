import Avatar from "./Avatar";
import Date from "./Date";
import CoverImage from "./CoverImage";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  const fallbackImage = "/images/amar-web-designer-post-sm.webp";

  // Function to limit title to 4 words
  const truncateTitle = (title) => {
    return title.split(" ").slice(0, 4).join(" ") + (title.split(" ").length > 4 ? "..." : "");
  };

  // Function to limit excerpt to 30 words
  const truncateExcerpt = (excerpt) => {
    return excerpt.split(" ").slice(0, 30).join(" ") + (excerpt.split(" ").length > 30 ? "..." : "");
  };

  return (
    <div className="blogs-div">
      <div className="mb-5">
        <CoverImage title={title} coverImage={coverImage || fallbackImage} slug={slug} />
      </div>

      <h3 className="text-[20px] font-semibold mb-3 letter-space">
        <Link
          href={`/${slug || "#"}`}
          className="relative text-2xl after:content-[''] after:absolute after:left-0 after:bottom-0 
                     after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 
                     hover:after:w-full"
        >
          {title}
        </Link>
      </h3>

      <div className="text-[14px] font-bold mb-4 text-[#3daee0]">
        <Date dateString={date} />
      </div>

      <div
  className="text-lg leading-relaxed mb-4"
  dangerouslySetInnerHTML={{ __html: truncateExcerpt(excerpt) }}
></div>


      {/* <Avatar author={author} /> */}

      {/* <Link href={`/${slug || "#"}`} className="flex items-center gap-2 pt-2 border-t  font-bold text-[#3daee0]">Read more</Link> */}
    </div>
  );
}
