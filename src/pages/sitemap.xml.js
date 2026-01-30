const MAIN_URL = 'https://www.globalcust.co.uk';
import { getAllPostsForHome } from "@/lib/api";
function generateSiteMap(allPosts) {
  const morePosts = allPosts.edges.slice(1);
  return `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="/sitemap/style-sitemap.xsl"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${MAIN_URL}</loc>
     </url>
     <url>
       <loc>${MAIN_URL}/about-us</loc>
     </url>
     <url>
       <loc>${MAIN_URL}/contact</loc>
     </url>
     <url>
       <loc>${MAIN_URL}/customs-clearance-uk</loc>
     </url>
     <url>
       <loc>${MAIN_URL}/road-custom-clearance</loc>
     </url>
     <url>
      <loc>${MAIN_URL}/sea-custom-clearance</loc>
    </url>
    <url>
      <loc>${MAIN_URL}/air-freight-custom-clearance</loc>
    </url>
    <url>
      <loc>${MAIN_URL}/testimonials</loc>
    </url>
     <url>
       <loc>${MAIN_URL}/blog</loc>
     </url>
     <url>
       <loc>${MAIN_URL}/customs-clearance-liverpool</loc>
     </url>
     <url>
       <loc>${MAIN_URL}/customs-clearance-felixstowe</loc>
     </url>
     <url>
       <loc>${MAIN_URL}/customs-clearance-london-gateway</loc>
     </url>
     <url>
       <loc>${MAIN_URL}/customs-clearance-southampton</loc>
     </url>
     ${morePosts
       .map(({ node }) => {
         return `
       <url>
           <loc>${`${MAIN_URL}/${node.slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const allPosts = await getAllPostsForHome();
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(allPosts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}


export default SiteMap;