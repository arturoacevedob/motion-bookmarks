import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
// import SEO from '../components/seo';

import BookmarkCard from "../components/bookmark-card";

const Index = ({ data }) => (
  <Layout>
    {data.allSanityCategory.nodes.map((category) => (
      <div>
        <div className="category-container">
          <h3 id={category.slug}>{category.title}</h3>
          {category.subcategory.map((subcategory) => {
            return (
              <div>
                {subcategory.subcategory !== "Motion design" && <h4>{subcategory.subcategory}</h4>}
                <div className="card-layout">
                  {subcategory.bookmark.map((content) => {
                    return <BookmarkCard key={content.id} {...content} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </Layout>
);

export const getContent = graphql`
{
  allSanityCategory(
    sort: {
      fields: [order]
      order: ASC
    }) {
    nodes {
      slug
      title
      subcategory {
        subcategory
        bookmark {
          title
          description
          detail
          url
          cover {
            asset {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  }
}
`;

export default Index;
