import Link from "next/link"
export default function ServiceColumn({
    name,
    readmorelink,
    content
}) {
  return (
    <div className="service-column">
        <h2>{name}</h2>
        <p>{content}</p>
            <div className="flex gap-5 mt-5">
            <Link href="#" className="btn">Get a Quote</Link>
        </div>
    </div>
  );
}
