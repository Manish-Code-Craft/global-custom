import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  title: string;
  coverImage?: {  // Made coverImage optional
    node?: {
      sourceUrl?: string;
    };
  };
  slug?: string;
}

const FeatureImage = styled.div`
  overflow: hidden;
`;

export default function CoverImage({ title, coverImage, slug }: Props) {
  // Ensure a fallback image if coverImage or its properties are undefined
  const amarCoverImage = coverImage?.node?.sourceUrl || "/images/blog-fallback.webp";

  const image = (
    <Image
      width={2000}
      height={800}
      alt={title}
      src={amarCoverImage}
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
    />
  );

  return (
    <FeatureImage>
      {slug ? (
        <Link href={`/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </FeatureImage>
  );
}
  