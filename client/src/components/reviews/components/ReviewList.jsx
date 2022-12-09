import React from 'react';
import { Div } from '../../../lib/styledComponents';
import ReviewListEntry from './ReviewListEntry.jsx';


const ReviewList = ({ reviews, update, setUpdate }) => {


  return (
    <Div className="review-list-comp">
      Review List
      {reviews.map(review => (
        <ReviewListEntry
          key={review.review_id}
          review={review}
          update={update}
          setUpdate={setUpdate}
        />
      ))}
    </Div>
  );
};

export default ReviewList;