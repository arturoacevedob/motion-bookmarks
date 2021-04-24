import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const Nav = () => {
  const data = useStaticQuery(graphql`
  {
    allSanityCategory {
      nodes {
        slug
        title
      }
    }
  }
  `);
  return (
    <nav className="nav">
      <ul>
        {data.allSanityCategory.nodes.map((category) => (
          <li>
            <Link to={"/" + category.slug}>{category.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
