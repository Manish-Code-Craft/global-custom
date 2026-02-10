import Date from "./Date";
import CoverImage from "./CoverImage";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  viewMode = "grid",
}) {
  const fallbackImage = "/images/amar-web-designer-post-sm.webp";
  const isList = viewMode === "list";

  const truncateExcerpt = (text) =>
    text
      .replace(/<[^>]+>/g, "")
      .split(" ")
      .slice(0, 30)
      .join(" ") + "...";

  return (
    <article
      className={`blogs-div bg-white border border-gray-100 rounded-2xl transition-all hover:shadow-md ${
        isList ? "flex gap-6 p-6" : ""
      }`}
    >
      {/* IMAGE */}
      <div className={isList ? "w-60 h-40 flex-shrink-0" : "mb-5"}>
        <CoverImage
          title={title}
          coverImage={coverImage || fallbackImage}
          slug={slug}
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col">
        <h3 className="text-[20px] font-semibold mb-3 letter-space">
          <Link
            href={`/${slug}`}
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
          className="text-lg leading-relaxed text-gray-600"
          dangerouslySetInnerHTML={{
            __html: truncateExcerpt(excerpt),
          }}
        />
      </div>
    </article>
  );
}
