import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import {
  RatingBreakdown, CharacteristicBreakdown, ReviewForm, ReviewList,
} from './components';
import { getProductReviews } from '../../actions';
import {
  updateRenderedReviews, updateIsReviewForm, updateIsReviewsUpdated,
  updateFilter, updateRenderedReviewCt,
} from '../../reducers/reviewComponentSlice';
import { Button, Modal, Div } from '../../lib/styledComponents';
import { getData } from '../../lib/index.js';
import './assets/styles.css';

const Reviews = () => {
  const dispatch = useDispatch();
  const { productId, productReviews } = useSelector((state) => state.product);
  const {
    reviewList: {
      allReviews, renderedReviews, renderedReviewsCt, filter,
    },
    page: { isReviewForm, isReviewsUpdated },
  } = useSelector((state) => state.reviews);

  const loadReviews = () => {
    dispatch((updateRenderedReviews(allReviews.slice(0, renderedReviewsCt + 2))));
    dispatch(updateRenderedReviewCt(2));
  };

  const filterReviews = (sort) => {
    dispatch(getProductReviews({
      url: '/reviews',
      params: { product_id: productId, count: 6969, sort },
    }))
      .then((result) => {
        dispatch(updateRenderedReviews(result.payload.results.slice(0, renderedReviewsCt)));
      });
  };

  useEffect(() => {
    filterReviews(filter);
  }, [filter, isReviewsUpdated, productId]);

  return (
    <div id="reviews">
      <div className="grid-reviews">
        <div className="rating-breakdown">
          <RatingBreakdown />
        </div>
        <div className="product-breakdown">
          <CharacteristicBreakdown />
        </div>
        <div className="review-list">
          <ReviewList />
          {(allReviews.length !== renderedReviews.length)
        && <Button onClick={loadReviews}>Load More</Button>}
          <Button onClick={() => dispatch(updateIsReviewForm())}>Create Review</Button>
        </div>
        <div>
          <Modal changeDisplay={isReviewForm}>
            <ReviewForm />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Reviews;


// {/* <ReviewList
// reviews={currReviews}
// update={update}
// setUpdate={setUpdate}
// setFilter={setFilter}
// allReviews={reviews}
// /> */}