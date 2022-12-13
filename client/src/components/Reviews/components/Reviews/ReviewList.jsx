import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Div } from '../../../../lib/styledComponents';
import ReviewListEntry from './ReviewListEntry.jsx';
import {
  updateRenderedReviews, updateIsReviewForm, updateIsReviewsUpdated,
  updateFilter, updateRenderedReviewCt,
} from '../../../../reducers/reviewComponentSlice';



const ReviewList = ({
  reviews, update, setUpdate, setFilter,
}) => {

  const dispatch = useDispatch();
  const { reviewList: { allReviews, renderedReviews } } = useSelector((state) => state.reviews);
  const { isDarkMode } = useSelector((state) => state.productPage);

  const selectStyle = {
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <div>
      <div className="sort-select-text">
        {`${allReviews.length} reviews, sorted by`}
        <select style={selectStyle} className="sort-select" onChange={(e) => dispatch(updateFilter(e.target.value))}>
          <option value="relevant">Relevance</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpfulness</option>
        </select>
      </div>
      {renderedReviews.map(review => (
        <ReviewListEntry
          key={review.review_id}
          review={review}
        />
      ))}
    </div>
  );
};

export default ReviewList;