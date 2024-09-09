import blockComponentMapping from "@/lib/component.map";
import { find } from "@/lib/strapi";
import { StrapiSeoFormate } from "@/lib/strapiSeo";
import PageAnimation from "@/utils/animation";
import { getLanguageFromCookie } from "@/utils/language";
import { Paper } from "@mui/material";
import type { Metadata } from "next";
import Script from "next/script";


// *** generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  // const language = getLanguageFromCookie();
  // fetch data
  const product = await find(
    "home-page",
    {
      populate: "deep",
      publicationState: "live",
      //locale: [language]
    },
    "no-store",
  );

  return StrapiSeoFormate(product?.data?.data?.attributes?.seo);
}

export default async function Home() {
  const language = getLanguageFromCookie();

  const { data, error } = await find(
    "home-page",
    {
      populate: "deep",
      publicationState: "live",
      locale: [language]
    },
    "no-store",
  );

  const blocks = data?.data?.attributes?.blocks || [];
  if (error) {
    return <div>Error: {error}</div>;
  }
  return <>
    <PageAnimation />
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        backgroundColor: 'background.default',
      }}
      elevation={0}
    >
      {blocks?.map((block: any, index: number) => {
        const BlockConfig = blockComponentMapping[block.__component];

        if (BlockConfig) {
          const { component: ComponentToRender } = BlockConfig;

          return <ComponentToRender key={index} data={block} {...block} />;
        }
        return null; // Handle the case where the component mapping is missing
      })}
    </Paper>
    {/* JSON_LD for SEO */}
    {data?.data?.attributes?.seo?.structuredData && (
      <Script
        id='json-ld-structured-data'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data?.data?.attributes?.seo?.structuredData)
        }}
      />
    )}

  </>


}