import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SiteButton = ({
  href,
  label,
  icon = <ArrowRight size={20} />,
  variant = "primary",
  className = "",
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center rounded-full font-bold overflow-hidden transition-all duration-300 transform-gpu will-change-transform";

  const variants = {
    primary: `
      group px-8 py-4 bg-[#049fe1] text-white text-lg
      shadow-[0_0_40px_-10px_rgba(4,159,225,0.5)]
      hover:shadow-[0_0_60px_-15px_rgba(4,159,225,0.6)]
      hover:-translate-y-1
    `,
    outline: `
      px-8 py-4 bg-white border-2 border-[#049fe1] box-border
      text-slate-700 text-lg hover:-translate-y-1
      hover:text-[#049fe1]
    `,
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
      <span className="relative z-10 flex items-center gap-2">
        {label}

        {icon && variant === "primary" && (
          <span className="inline-flex group-hover:translate-x-1 transition-transform">
            {icon}
          </span>
        )}
      </span>

      {variant === "primary" && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
      )}
      
    </Link>
  );
};

export default SiteButton;
