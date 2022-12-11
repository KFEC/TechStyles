import React from 'react';
import { Div } from '../../../../lib/styledComponents';
import ReviewListEntry from './ReviewListEntry.jsx';


const ReviewList = ({
  reviews, update, setUpdate, setFilter, allReviews,
}) => {


  return (
    <div>
      <div className="sort-select-text">
        {`${allReviews.length} reviews, sorted by`}
        <select className="sort-select" onChange={(e) => setFilter(e.target.value)}>
          <option value="relevant">Relevance</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpfulness</option>
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