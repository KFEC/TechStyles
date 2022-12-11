import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaCheck } from 'react-icons/fa';
import { Div } from '../../../../lib/styledComponents';
import { putData } from '../../../../lib/index.js';
import {
  updateRenderedReviews, updateIsReviewForm, updateIsReviewsUpdated,
  updateFilter, updateRenderedReviewCt,
} from '../../../../reducers/reviewComponentSlice';

const ReviewListEntry = ({ review }) => {

  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const { reviewList: { allReviews, renderedReviews } } = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  const date = new Date(review.date);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const helpfulReview = () => {
    if (!helpful) {
      putData(`/reviews/${review.review_id}/helpful`).then(() => {
        dispatch(updateIsReviewsUpdated());
        setHelpful(true);
      });
    }
  };

  const reportReview = () => {
    if (!reported) {
      putData(`/reviews/${review.review_id}/report`).then(() => {
        setReported(true);
      });
    }
  };

  return (
    <div className="review-list-comp">
      <div className="reviews-stars">
        <span className="Stars rl-stars" style={{ '--rating': review.rating }} />
      </div>
      <div className="reviews-user">
        {review.reviewer_name}
      </div>
      <div className="reviews-date">
        {date.toLocaleDateString('en-US', dateOptions)}
      </div>
      <div className="reviews-summary">
        {review.summary}
      </div>
      <div className="reviews-body">
        <p>{review.body}</p>
      </div>
      {review.recommend && (
        <div className="reviews-recommended">
          <FaCheck />
          {'  I recommend this product'}
        </div>
      )}
      {review.response && (
        <div className="reviews-response">
          {'Response:  '}
          {review.response}
        </div>
      )}
      {review.photos.length > 0 && (
        <div className="reviews-img-container">
          {review.photos.map((photo, idx) => {
            return <img className="reviews-img" alt="" src={photo.url} key={Math.random(69 * idx) * 59} />;
          })}
        </div>
      )}
      <div className="reviews-helpful">
        Helpful?
        <button type="button" className="button-link" onClick={helpfulReview}>
          Yes
        </button>
        <span>
          {` (${review.helpfulness}) |`}
        </span>
        <span>
          {!reported
            ? (
              <button type="button" className="button-link" onClick={reportReview}>
                Report
              </button>
            )
            : <span>Reported</span>}
        </span>
      </div>
    </div>
  );
};

export default ReviewListEntry;