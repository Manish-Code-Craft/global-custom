import Link from "next/link";
export default function NavSubLink({
    name,
    href
}) {
  return (
    <>
    <Link href={href} className="text-black xl:p-3 block">{name}</Link>
    </>
  );
}
