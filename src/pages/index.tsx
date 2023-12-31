import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { Layout as MarketingLayout } from 'src/layouts/marketing';
import { paths } from 'src/paths';
import { HomeCta } from 'src/sections/home/home-cta';
import { HomeFaqs } from 'src/sections/home/home-faqs';
import { HomeFeatures } from 'src/sections/home/home-features';
import { HomeHero } from 'src/sections/home/home-hero';
import { HomeReviews } from 'src/sections/home/home-reviews';

const Page: NextPage = () => {
  usePageView();
  const router = useRouter();
  router.push(paths.dashboard.index);
  return (
    <>
      {/* <Seo />
      <main>
        <HomeHero />
        <HomeFeatures />
        <HomeReviews />
        <HomeCta />
        <HomeFaqs />
      </main> */}
    </>
  );
};

Page.getLayout = (page) => (
  <>
    {page}
  </>
);
export default Page;
