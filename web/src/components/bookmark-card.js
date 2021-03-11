import React from "react";
// import { GatsbyImage } from "gatsby-plugin-image";
import Image from "gatsby-image";
// import PropTypes from "prop-types"

const BookmarkCard = ({ title, description, cover, detail, url }) => {
  return (
    <article className="card">
      <div className="card-hover">
        <figure className="card-image-wrapper">
          <a href={url} target="_blank">
            {/*<GatsbyImage image={cover.asset.fluid} alt={title + " Artwork"} />*/}
            <Image fluid={cover.asset.fluid} alt={title + " Artwork"} />
          </a>
        </figure>
        <div className="card-text-wrapper">
          <h5 className="card-title">
            <a href={url} target="_blank">
              {title}
            </a>
          </h5>
          <p className="card-description">{description}</p>
        </div>
      </div>
      {detail && <small>{detail}</small>}
    </article>
  );
};

// BookmarkCard.propTypes = {}

export default BookmarkCard;
