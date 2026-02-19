import Image from "next/image";
import Link from "next/link";
import Date from "./Date";
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
  const isList = viewMode === "list";

  const imageUrl =
    coverImage?.node?.sourceUrl || "/images/amar-web-designer-post-sm.webp";

  const truncateExcerpt = (text) =>
    text
      .replace(/<[^>]+>/g, "")
      .split(" ")
      .slice(0, 30)
      .join(" ") + "...";

  return (
    <Link
      href={`/${slug}`}
      className={`group transition-all duration-500 
        ${
          isList
            ? "flex flex-col md:flex-row gap-8 md:p-6 p-3 rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 hover:bg-white"
            : "flex flex-col rounded-3xl"
        }`}
    >
      {/* IMAGE */}
      <div
        className={`relative overflow-hidden rounded-2xl flex-shrink-0
          ${
            isList
              ? "h-48 w-full md:w-80"
              : "h-64 mb-6 shadow-lg shadow-black/5"
          }`}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes={
            isList
              ? "(max-width: 768px) 100vw, 320px"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className="object-cover lg:grayscale lg:group-hover:grayscale-0 transition-all duration-1000 scale-100 lg:group-hover:scale-110"
        />
        {isSticky && (
            <div className="absolute top-4 left-4">
            <span className="bg-black text-white px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest shadow-xl lg:group-hover:bg-[#3daee0] transition-colors">
            FEATURED
            </span>
          </div>
          )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-grow">
        {/* META */}
        <div className="flex items-center text-[10px] font-bold uppercase text-[#3daee0] mb-4">
          <Date dateString={date} />
          
        </div>

        {/* TITLE */}
        <h2 className="md:text-2xl font-bold mb-4 leading-tight lg:group-hover:text-[#3daee0] transition-colors">
          {title}
        </h2>

        {/* EXCERPT */}
        <div
          className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-6 font-medium"
          dangerouslySetInnerHTML={{
            __html: truncateExcerpt(excerpt),
          }}
        />

        {/* FOOTER */}
        <div className="mt-auto pt-4 flex items-center text-bold font-bold text-[10px] uppercase lg:group-hover:text-[#3daee0] transition-colors">
          <span>Explore Detailed View</span>
          <ChevronRight className="h-4 w-4 ml-2 transform lg:group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
