import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Main meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Title and Description */}
        <meta name="description" content="Open Healthcare Network leverages artificial intelligence to enhance healthcare services, improving access and quality of care for underserved communities in India." />

        {/* Keywords */}
        <meta name="keywords" content="Open Healthcare Network, AI Healthcare, 10BedICU, Healthcare technology, AI in medicine, India healthcare innovation" />

        {/* Social Media: Open Graph/Facebook */}
        <meta property="og:title" content="Open Healthcare Network: Transforming Healthcare with AI" />
        <meta property="og:description" content="Discover how Open Healthcare Network uses AI to revolutionize healthcare, making advanced care accessible and efficient across India." />
        <meta property="og:image" content="https://ohc.network/meta_cover.png" />
        <meta property="og:url" content="https://ohc.network" />
        <meta property="og:type" content="website" />

        {/* Social Media: Twitter */}
        <meta name="twitter:title" content="Open Healthcare Network: Transforming Healthcare with AI" />
        <meta name="twitter:description" content="Explore the impact of AI on healthcare with Open Healthcare Network, providing innovative solutions to enhance care delivery in India." />
        <meta name="twitter:image" content="https://ohc.network/meta_cover.png" />
        <meta name="twitter:card" content="https://ohc.network/meta_cover.png" />

        {/* Additional Tags for Verification and Authorship, if applicable */}
        <meta name="author" content="Open Healthcare Network" />
        <meta name="google-site-verification" content="Google_Site_Verification_Code" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
