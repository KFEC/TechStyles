import React, { memo } from 'react';
import { useSelector } from 'react-redux';

const RatingRender = memo(({ rating }) => {

  const { productReviews: { totalReviews, stars } } = useSelector((state) => state.product);
  return (
    <div className="ratings-bar-container">
      <div className="ratings-bar">
        <span className="ratings-percentage">
          {Math.round((rating.count / totalReviews) * 100)}
          %
        </span>
        <div className="ratings-bar-content" style={{ '--percent': Math.round((rating.count / totalReviews) * 100) }}>
          <span className="ratings-area">{rating.rating}</span>
        </div>
      </div>
    </div>
  );
});

export default RatingRender;