import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Div } from '../../../../lib/styledComponents';
import ReviewListEntry from './ReviewListEntry.jsx';
import {
  updateRenderedReviews,
  updateIsReviewForm,
  updateIsReviewsUpdated,
  updateSort,
  updateRenderedReviewCt,
  updateFilter,
} from '../../../../reducers/reviewComponentSlice';

const ReviewList = () => {
  const dispatch = useDispatch();
  const {
    reviewList: { allReviews, renderedReviews, filter },
  } = useSelector((state) => state.reviews);
  const { isDarkMode } = useSelector((state) => state.productPage);

  return (
    <div>
      {renderedReviews.map((review) => (
        <ReviewListEntry key={review.review_id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
