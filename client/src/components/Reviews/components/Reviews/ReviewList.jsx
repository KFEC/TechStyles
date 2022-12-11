import React from 'react';
import { Div } from '../../../../lib/styledComponents';
import ReviewListEntry from './ReviewListEntry.jsx';


const ReviewList = ({
  reviews, update, setUpdate, setFilter, allReviews,
}) => {


  return (
    <div>
      <div>
        {`${allReviews.length} reviews, sorted by `}
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="relevant">Relevant</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
        </select>
      </div>
      {reviews.map(review => (
        <ReviewListEntry
          key={review.review_id}
          review={review}
          update={update}
          setUpdate={setUpdate}
        />
      ))}
    </div>
  );
};

export default ReviewList;