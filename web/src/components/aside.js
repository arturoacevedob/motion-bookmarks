import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

// Gets the query
const getData = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// Sets the query results to variables
const Aside = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData)

  // Returns the aside using the query variables we made
  return (
    <aside className="aside">
      <h1 className="logo">
        <Link to="/">{title}</Link>
      </h1>
      <div className="suggest-bookmark button border-left">
        <a href="mailto:suggest@motionbookmarks.com">
          <span role="img" aria-label="finger pointing">
            👉
          </span>
          Suggest a bookmark
        </a>
      </div>
      <div className="mobile-menu button border-left">
        <a href="">Menu</a>
      </div>
    </aside>
  )
}

export default Aside
