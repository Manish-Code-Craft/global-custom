import Date from "./Date";
import CoverImage from "./CoverImage";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  viewMode = "grid",
  isSticky = false,
  
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
    <Link href={`/${slug}`} className={`group cursor-pointer bg-white overflow-hidden transition-all duration-500 ${
      isList ? "flex flex-col md:flex-row gap-8 p-6 rounded-3xl hover:bg-gray-50 border border-transparent hover:border-gray-100"  : "flex flex-col"}`}>
  {/* IMAGE */}
  <div
    className={`relative overflow-hidden rounded-2xl flex-shrink-0
      ${
        isList
          ? "h-48 w-full md:w-80"
          : "h-64 mb-6 shadow-lg shadow-black/5"
      }`}
  >
    <CoverImage
      title={title}
      coverImage={coverImage || fallbackImage}
      // slug={slug}
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
    />
  </div>

  {/* CONTENT */}
  <div className="flex flex-col flex-grow">
    {/* META */}
    <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#3daee0] mb-4">
      <span>
        <Date dateString={date} />
      </span>
    </div>

    {/* TITLE */}
    <h3 className="text-2xl font-black text-black mb-4 leading-tight group-hover:text-[#3daee0] transition-colors">
      
        {title}
    </h3>

    {/* EXCERPT */}
    <div
      className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-6 font-medium"
      dangerouslySetInnerHTML={{
        __html: truncateExcerpt(excerpt),
      }}
    />

    {/* FOOTER */}
    <div className="mt-auto pt-4 flex items-center text-black font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-[#3daee0] transition-colors">
      <span>Explore Detailed View</span>
      <ChevronRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
  </Link>

  );
}
