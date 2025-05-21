import { InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import ArticleCard from 'components/ArticleCard';
import AutofitGrid from 'components/AutofitGrid';
import Page from 'components/Page';
import { media } from 'utils/media';
import { getAllPosts } from 'utils/postsFetcher';
import { NextSeo } from 'next-seo';

export default function BlogIndexPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo
        title="Printed Wonders: Our 3D Printing Blog"
        description="Dive into the world of cutting-edge 3D printing with our official blog. Discover the latest industry trends, 
          explore innovative techniques, and find inspiration for your next project. Stay informed and inspired by the limitless 
          possibilities of additive manufacturing."
        canonical="https://mekuva.com/blog"
        openGraph={{
          url: 'https://mekuva.com/blog',
          title: 'Printed Wonders: Our 3D Printing Blog',
          description: 'Dive into the world of cutting-edge 3D printing with our official blog. Discover the latest industry trends, explore innovative techniques, and find inspiration for your next project. Stay informed and inspired by the limitless possibilities of additive manufacturing.',
          images: [
            {
              url: 'https://mekuva.com/images/blog-og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Printed Wonders: Our 3D Printing Blog',
            },
          ],
          site_name: 'Mekuva Technologies',
        }}
      />
      <Page
        title="Printed Wonders: Our 3D Printing Blog"
        description="Dive into the world of cutting-edge 3D printing with our official blog. Discover the latest industry trends, 
          explore innovative techniques, and find inspiration for your next project. Stay informed and inspired by the limitless 
          possibilities of additive manufacturing."
      >
        <CustomAutofitGrid>
          {posts.map((singlePost, idx) => (
            <div key={singlePost.slug}>
              <NextSeo
                title={singlePost.meta.title}
                description={singlePost.meta.description}
                openGraph={{
                  url: `https://mekuva.com/blog/${singlePost.slug}`,
                  title: singlePost.meta.title,
                  description: singlePost.meta.description,
                  images: [
                    {
                      url: singlePost.meta.imageUrl,
                      width: 800,
                      height: 600,
                      alt: singlePost.meta.title,
                    },
                  ],
                }}
              />
              <ArticleCard
                title={singlePost.meta.title}
                description={singlePost.meta.description}
                imageUrl={singlePost.meta.imageUrl}
                slug={singlePost.slug}
              />
            </div>
          ))}
        </CustomAutofitGrid>
      </Page>
    </>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }

  .article-card-wrapper {
    max-width: 100%;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
