import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Div } from '../../../lib/styledComponents';
import { putData } from '../../../lib/index.js';

const ReviewListEntry = ({ review }) => {

  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const date = new Date(review.date);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const helpfulAnswer = () => {
    if (!helpful) {
      putData(`/reviews/${review.review_id}/helpful`);
      setHelpful(true);
    }
  };

  const reportAnswer = () => {
    if (!reported) {
      putData(`/reviews/${review.review_id}/report`);
      setReported(true);
    }
  };

  console.log(review);
  return (
    <Div>
      <div>
        {review.rating}
        {review.reviewer_name}
        {date.toLocaleDateString('en-US', dateOptions)}
      </div>
      <div style={{ fontWeight: 'bold', fontSize: 'large' }}>
        {review.summary}
      </div>
      <div>
        {review.body}
      </div>
      {review.recommend && (
        <div>
          <FaCheck />
          {' I recommend this product'}
        </div>
      )}
      {review.response && (
        <div>
          <h5>Response: </h5>
          {review.response}
        </div>
      )}
      <div>
        {' Helpful? '}
        <button type="button" className="button-link" onClick={helpfulAnswer}>
          Yes
        </button>
        {` (${review.helpfulness}) |`}
        <button type="button" className="button-link" onClick={reportAnswer}>
          Report
        </button>
      </div>
    </Div>
  );
};

export default ReviewListEntry;