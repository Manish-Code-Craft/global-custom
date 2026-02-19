export default function PostTitle({ children }) {
  return (
    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold hover:text-[#3daee0] tracking-tighter leading-tight md:leading-none mb-8 transition duration-300 ease-in-out"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
