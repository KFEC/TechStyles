import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoSearchSharp } from 'react-icons/io5';
import { Button } from '../../../../lib/styledComponents';
import { QueryInput, ClearQueryButton } from '../../lib';
import {
  updateRenderedReviews,
  updateIsReviewForm,
  updateIsReviewsUpdated,
  updateFilter,
  updateRenderedReviewCt,
  updateSort,
  updateQuery,
} from '../../../../reducers/reviewComponentSlice';

const ReviewSearch = ({ search, filterThrough }) => {
  const dispatch = useDispatch();
  const { productId, productReviews } = useSelector((state) => state.product);
  const {
    reviewList: {
      allReviews,
      renderedReviews,
      renderedReviewsCt,
      sort,
      filter,
      query,
    },
    page: { isReviewForm, isReviewsUpdated },
  } = useSelector((state) => state.reviews);
  const { isDarkMode } = useSelector((state) => state.productPage);

  const resetReviews = () => {
    if (filter.length < 1) {
      dispatch(updateRenderedReviews(allReviews.slice(0, renderedReviewsCt)));
    } else {
      filterThrough()
        .then((result) => {
          dispatch(
            updateRenderedReviews(
              result
                .sort((a, b) => b.rating - a.rating)
                .slice(0, renderedReviewsCt),
            ),
          );
        })
        .catch((err) => console.error(err));
    }
    dispatch(updateQuery(''));
  };

  const inputKeyPress = (e) => {
    if (e.keyCode === 13 && query.length > 2) {
      search();
    }
  };

  return (
    <>
      <div className="rr-search">
        <QueryInput
          placeholder="Find the review for you…"
          value={query}
          onChange={(e) => dispatch(updateQuery(e.target.value))}
          onKeyDown={inputKeyPress}
        />
        <IoSearchSharp
          style={{ fontSize: '1.25em', color: isDarkMode ? 'white' : 'black' }}
          onClick={search}
          type="button"
          aria-label="Seach Reviews"
        />
      </div>
      <div>
        {query.length > 2 && (
          <ClearQueryButton
            isDarkMode={isDarkMode}
            onClick={resetReviews}
            aria-label="Clear Query"
          >
            Clear Search
          </ClearQueryButton>
        )}
      </div>
    </>
  );
};

export default ReviewSearch;
