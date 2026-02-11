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
  className={`transition-all ${
    isList
      ? "pb-3 border-b border-gray-200"
      : "bg-white border border-gray-100 hover:shadow-md"
  }`}
>
            {/* IMAGE */}
      {!isList && (
        <div className="">
          <CoverImage
            title={title}
            coverImage={coverImage || fallbackImage}
            slug={slug}
          />
        </div>
      )}


      {/* CONTENT */}
      <div className={`flex flex-col ${isList ? "max-w-3xl" : " p-4"}`}>
        <h3 className="">
          <Link
            href={`/${slug}`}
            className="text-[16px] font-bold text-[#3daee0]"
          >
            {title}
          </Link>
        </h3>

        <div className="text-[12px]">
          <Date dateString={date} />
        </div>

        {/* <div
          className="text-lg leading-relaxed text-gray-600"
          dangerouslySetInnerHTML={{
            __html: truncateExcerpt(excerpt),
          }}
        /> */}
      </div>
    </article>
  );
}
