import Head from "next/head";
import { usePathname } from "next/navigation";

export default function PageHead({ PageMeta,post }) {
    const now = new Date();
    const formattedDateTime = now.toISOString();
    const pathname = usePathname();
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement":
          pathname === "/"
            ? [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@id": "https://www.globalcust.co.uk/",
                    "name": "Home",
                  },
                },
              ]
            : [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@id": "https://www.globalcust.co.uk/",
                    "name": "Home",
                  },
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@id": `https://www.globalcust.co.uk${pathname}`,
                    "name": PageMeta.title,
                  },
                },
              ],
      };
      const articleSchema = 
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.globalcust.co.uk${post?.slug ? "/"+post?.slug:pathname}`,
        },
        "headline": post?.title ? post?.title:PageMeta.title,
        "description": post?.description ? post.description:PageMeta.description,
        "image": post?.featuredImage?.node?.sourceUrl ? post?.featuredImage?.node?.sourceUrl: "https://www.globalcust.co.uk/images/GCC_LOGO.webp",
        "author": {
            "@type": "Person",
            "name": "Global Custom Clearance LTD",
            "url": "https://www.globalcust.co.uk/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Global Custom Clearance LTD",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.globalcust.co.uk/images/GCC_LOGO.webp"
            }
        },
        "datePublished": post?.date ? post?.date:formattedDateTime.replace(/\.\d{3}Z$/, "+00:00"),
        "dateModified": formattedDateTime.replace(/\.\d{3}Z$/, "+00:00")
    };
    const LocalBussinessdata = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Global Custom Clearance LTD",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Unit 1B, Cobalt House, Medway City Estate",
            "addressLocality": "Rochester",
            "addressRegion": "Kent",
            "postalCode": "ME2 4BQ",
            "addressCountry": "GB" // 'GB' for Great Britain
        },
        "description": "Global Customs Clearance, the leading Customs Brokers offering 24 hour services to ensure that your clearances are not delayed.",
        "telephone": "+44 1634 565540",
        "email" : 'imports@globalcust.co.uk'
      };
    return (
        <Head>
            <title>{PageMeta.title}</title>
            <meta name="title" content={PageMeta.title} />
            <meta name="description" content={PageMeta.description} />
            <meta name="keywords" content={PageMeta.keywords || "default, keywords, here"} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`https://www.globalcust.co.uk${pathname}`} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={PageMeta.title} />
            <meta property="og:description" content={PageMeta.description} />
            <meta property="og:url" content={`https://www.globalcust.co.uk${pathname}`} />
            <meta property="og:site_name" content="Global Custom Clearance LTDoms Clearance Ltd" />
            <meta property="og:image" content="/images/GCC_LOGO.webp" />
            <meta property="og:image:width" content="1024" />
            <meta property="og:image:height" content="506" />
            <meta property="og:image:type" content="image/jpg" />
            <meta name="twitter:card" content="summary_large_image" />      
            <meta name="google-site-verification" content="1nWPql5xf4nDFn1xXeRfdBfSby1MldgPuHrgbFdIIqc" />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBussinessdata) }} />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            
            {post && (
            <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                />
            )}
        </Head>
    );
}
