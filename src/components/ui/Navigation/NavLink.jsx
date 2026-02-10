import Link from "next/link";
export default function NavLink({
    name,
    href
}) {
  return (
    <>
    <Link href={href} className="text-primary   font-semibold text-[16px]">{name}</Link>
    </>
  );
}
