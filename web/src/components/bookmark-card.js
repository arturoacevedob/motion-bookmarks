import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import PropTypes from "prop-types"

const BookmarkCard = ({ title, description, cover, detail, url }) => {
  const image = getImage(cover.asset)
  return (
    <article className="card">
      <div className="card-hover">
        <figure className="card-image-wrapper">
          <a href={url} target="_blank">
            <GatsbyImage image={image} alt={title + " Artwork"} />
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
