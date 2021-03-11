import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const Nav = () => {
const data = useStaticQuery(graphql`
    {
      allSanityContent {
        nodes {
          category {
            category
            slug
          }
        }
      }
    }
  `)
  return (
  <nav className="nav">
    {data.allSanityContent.nodes.map((content) => (
      <ul>
        {content.category.map((category) => {
          return (
            <li>
              <Link to={category.slug}>{category.category}</Link>
            </li>
          );
        })}
      </ul>
    ))}
  </nav>
  )
}

export default Nav;
