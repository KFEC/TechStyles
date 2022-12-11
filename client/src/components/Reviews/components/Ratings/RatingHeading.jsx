import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const RatingHeading = () => {

  const { productReviews: { stars, recommended } } = useSelector((state) => state.product);

  return (
    <div className="rb-heading">
      <div className="rb-heading-container">
        <div className="rb-stars-container">
          <span className="rb-avg">{stars}</span>
          <span className="Stars rb-stars" style={{ '--rating': stars }} />
        </div>
        <div className="rb-recommended">{`${recommended}% of reviews recommended this product`}</div>
      </div>
    </div>
  );
};

export default RatingHeading;