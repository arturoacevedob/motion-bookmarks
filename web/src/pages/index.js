import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
// import SEO from '../components/seo';

import BookmarkCard from "../components/bookmark-card";

export const getContent = graphql`
  {
    allSanityContent {
      nodes {
        category {
          category
          slug
          subcategory {
            subcategory
            bookmark {
              title
              description
              cover {
                asset {
                  fluid {
                    ...GatsbySanityImageFluid
                  }
                }
              }
              detail
              url
            }
          }
        }
      }
    }
  }
`;

const Index = ({ data }) => (
  <Layout>
    {data.allSanityContent.nodes.map((content) => (
      <div>
        {content.category.map((category) => {
          return <div>
            <h3 id={category.slug}>{category.category}</h3>
            {category.subcategory.map((subcategory) => {
              return (
                <div>
                  <h4>{subcategory.subcategory}</h4>
                  <div className="card-layout">
                    {subcategory.bookmark.map((content) => {
                      return <BookmarkCard key={content.id} {...content} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        })}
      </div>
    ))}
  </Layout>
);

export default Index;
