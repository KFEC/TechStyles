import React from 'react';
import { Div } from '../../../lib/styledComponents';
import ReviewListEntry from './ReviewListEntry.jsx';


const ReviewList = ({ reviews }) => {


  return (
    <Div>
      Review List
      {reviews.map(review => (
        <ReviewListEntry
          key={review.review_id}
          review={review}
        />
      ))}
    </Div>
  );
};

export default ReviewList;