import React from "react";
import { graphql } from "gatsby";
import BookmarkCard from "../components/bookmark-card";
import Layout from "../components/layout";

const CategoryTemplate = ({ data }) => {
  return (
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
  )
}

export const query = graphql`
query getSingleCategory($title:String) {
  allSanityCategory(filter: {title: {eq: $title}}) {
    nodes {
      title
      slug
      subcategory {
        subcategory
        bookmark {
          title
          description
          detail
          url
          cover {
            asset {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
}
`

export default CategoryTemplate;
