import Link from "next/link";

export default function SocialLinks({
	name,
	link
}) {
  return (
<>
	<Link href={link} className="relative group/link bg-black bg-opacity-50 h-[70px] flex items-center justify-center">
		<div className="absolute top-0 left-0 w-full h-0 group-[.hway-active]:h-full bg-black bg-opacity-50 border border-1 border-[#fff] transition-all duration-[.5s]"></div>
		<div className="absolute top-0 left-0 w-full h-0 group-[.hway-active]:h-full bg-black border border-1 border-[#fff] transition-all duration-[.5s] delay-[.1s]"></div>
		<div className="absolute top-0 left-0 w-full h-0 group-hover/link:h-full bg-[#049fe1] opacity-50 transition-all duration-[.5s] delay-[.25s] group-hover:delay-[0s]"></div>
		<div className="absolute top-0 left-0 w-full h-0 group-hover/link:h-full bg-[#049fe1] transition-all duration-[.5s] group-hover/link:delay-[.25s]"></div>
		<div className="relative text-lg font-semibold group-hover/link:text-white transition-all duration-[0.5s]">{name}</div>
	</Link>
</>
  );
}
