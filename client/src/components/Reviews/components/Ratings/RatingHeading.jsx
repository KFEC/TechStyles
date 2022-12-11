import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const RatingHeading = () => {

  const { productReviews: { stars, recommended } } = useSelector((state) => state.product);

  return (
    <div className="rb-heading">
      <div className="rb-heading-container">
        <span className="rb-avg">{stars}</span>
        <span className="Stars rb-stars" style={{ '--rating': stars }} />
        <h5>{`${recommended}% of people recommend this product`}</h5>
      </div>
    </div>
  );
};

export default RatingHeading;