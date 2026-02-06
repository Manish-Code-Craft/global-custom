export default function SupportedIndustries({
    title,
    subtitle,
    industries,
    bottomText,
    bg,
  }) {
    return (
      <section className={`py-20 ${bg}`}>
        <div className="max-w-[1320px] mx-auto px-[15px] md:px-[36px] xl:px-0">
  
          {/* Heading */}
          {(title || subtitle) && (
            <div className="text-left lg:text-center">
              {title && (
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-slate-600 mb-10">
                  {subtitle}
                </p>
              )}
            </div>
          )}
  
          {/* Industries Grid */}
          {industries?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className="group p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:border-[#3daee0] hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="mb-5 text-[#3daee0] group-hover:scale-110 transition-transform duration-300">
                    {ind.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#3daee0] transition-colors">
                    {ind.name}
                  </h4>
                </div>
              ))}
            </div>
          )}
  
          {bottomText && (
            <div className="flex items-center justify-center gap-3 py-6 px-8 bg-blue-50 rounded-md w-fit mx-auto">
              <div className="h-2 w-2 rounded-full bg-[#3daee0] animate-pulse" />
              <p className="text-slate-900 font-semibold text-sm md:text-base">
                {bottomText}
              </p>
            </div>
          )}
  
        </div>
      </section>
    );
  }
  