import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Main meta tags */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        {/* Title and Description */}
        <title>Open Healthcare Network: Transforming Healthcare with AI</title>
        <meta name="description" content="Open Healthcare Network leverages artificial intelligence to enhance healthcare services, improving access and quality of care for underserved communities in India." />

        {/* Keywords */}
        <meta name="keywords" content="Open Healthcare Network, AI Healthcare, 10BedICU, Healthcare technology, AI in medicine, India healthcare innovation" />

        {/* Social Media: Open Graph/Facebook */}
        <meta property="og:title" content="Open Healthcare Network: Transforming Healthcare with AI" />
        <meta property="og:description" content="Discover how Open Healthcare Network uses AI to revolutionize healthcare, making advanced care accessible and efficient across India." />
        <meta property="og:image" content="URL_to_image_that_represents_OHC" />
        <meta property="og:url" content="URL_to_OHC_website" />
        <meta property="og:type" content="website" />

        {/* Social Media: Twitter */}
        <meta name="twitter:title" content="Open Healthcare Network: Transforming Healthcare with AI" />
        <meta name="twitter:description" content="Explore the impact of AI on healthcare with Open Healthcare Network, providing innovative solutions to enhance care delivery in India." />
        <meta name="twitter:image" content="URL_to_image_that_represents_OHC" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OHC_Official" />

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
