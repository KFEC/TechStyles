/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useRef, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateRenderedReviews, updateIsReviewForm, updateIsReviewsUpdated,
  updateFilter, updateRenderedReviewCt,
} from '../../../../reducers/reviewComponentSlice';

const RatingRender = memo(({ rating }) => {

  const [isFiltered, setIsFiltered] = useState(false);
  const { productReviews: { totalRatings, stars } } = useSelector((state) => state.product);
  const {
    reviewList: {
      allReviews,
      renderedReviews,
      renderedReviewsCt,
    },
  } = useSelector((state) => state.reviews);

  const dispatch = useDispatch();
  const ratingRef = useRef();

  const handleRatingClick = (e) => {
    const ratingVal = ratingRef.current.getAttribute('data-rating');
    if (isFiltered) {
      setIsFiltered(!isFiltered);
      const filteredReviews = allReviews.slice(0, renderedReviewsCt);
      dispatch(updateRenderedReviews(filteredReviews));
      return;
    }
    const filteredReviews = renderedReviews.filter((review) => review.rating === Number(ratingVal));
    setIsFiltered(!isFiltered);
    dispatch(updateRenderedReviews(filteredReviews));
  };

  return (
    <div className="ratings-bar-container">
      <div
        className="ratings-bar"
        data-rating={rating.rating}
        ref={ratingRef}
        onClick={handleRatingClick}
      >
        <span className="ratings-percentage">
          {Math.round((rating.count / totalRatings) * 100)}
          %
        </span>
        <div className="ratings-bar-content" style={{ '--percent': Math.round((rating.count / totalRatings) * 100) }}>
          <span className="ratings-area">{rating.rating}</span>
        </div>
      </div>
    </div>
  );
});

export default RatingRender;