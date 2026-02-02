import Btn from "@/components/ui/Btns/Btn";

export default function SiteCta({
  title = "Need fast, reliable CDS declarations?",
  description = "Contact Global Customs today for expert support, accurate filings, and 24/7 assistance.",
  buttonText = "Contact us",
  buttonLink = "/contact",
  backgroundImage,
  overlayOpacity = 0.55,
}) {
  return (
    <section
      className="relative py-28 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-[12px] md:px-[36px] xl:px-0">
        <div className="
          backdrop-blur-md
          bg-white/10
          border border-white/20
          rounded-2xl
          px-10 py-12
          flex flex-col lg:flex-row
          items-center justify-between
          gap-10
          shadow-xl
        ">

          {/* Text */}
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              {title}
            </h2>
            <p className="text-white/85 leading-relaxed">
              {description}
            </p>
          </div>

          {/* CTA */}
          <div className="shrink-0">
            <Btn link={buttonLink} title={buttonText} />
          </div>

        </div>
      </div>
    </section>
  );
}
