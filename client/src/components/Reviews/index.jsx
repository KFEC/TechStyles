import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import {
  RatingBreakdown,
  CharacteristicBreakdown,
  ReviewForm,
  ReviewList,
} from './components';
import { getProductReviews } from '../../actions';
import {
  updateRenderedReviews,
  updateIsReviewForm,
  updateIsReviewsUpdated,
  updateFilter,
  updateRenderedReviewCt,
  updateSort,
  updateQuery,
} from '../../reducers/reviewComponentSlice';
import ReviewSearch from './components/Reviews/ReviewSearch.jsx';
import { Button } from '../../lib/styledComponents';
import { Div, SelectContainer, Select, Option, ReviewFormModal } from './lib';
import { getData } from '../../lib/index.js';
import './assets/styles.css';

const Reviews = () => {
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
  const [stringFilter, setStringFilter] = useState('');

  const filterThrough = async () => {
    try {
      const result = await allReviews.reduce((acc, review) => {
        filter.forEach((item) => {
          if (review.rating === item) {
            acc.push(review);
          }
        });
        return acc;
      }, []);
      return Promise.resolve(result);
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  };

  const loadReviews = () => {
    if (filter.length < 1) {
      dispatch(
        updateRenderedReviews(allReviews.slice(0, renderedReviewsCt + 2)),
      );
    } else {
      filterThrough()
        .then((result) => {
          dispatch(
            updateRenderedReviews(
              result
                .sort((a, b) => b.rating - a.rating)
                .slice(0, renderedReviewsCt + 2),
            ),
          );
        })
        .catch((err) => console.error(err));
    }
    dispatch(updateRenderedReviewCt(2));
    dispatch(updateQuery(''));
  };

  const filterReviews = () => {
    dispatch(
      getProductReviews({
        url: '/reviews',
        params: { product_id: productId, count: 6969, sort },
      }),
    ).then((result) => {
      dispatch(
        updateRenderedReviews(
          result.payload.results.slice(0, renderedReviewsCt),
        ),
      );
    });
  };
  const removeFilters = () => {
    dispatch(updateRenderedReviews(allReviews.slice(0, renderedReviewsCt)));
    dispatch(updateFilter([]));
    dispatch(updateQuery(''));
  };

  const asyncTest = async () => {
    try {
      await dispatch(
        getProductReviews({
          url: '/reviews',
          params: { product_id: productId, count: 6969, sort },
        }),
      ).then(() => loadReviews());
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    filterReviews();
    removeFilters();
  }, [sort, isReviewsUpdated, productId]);

  useEffect(() => {
    setStringFilter([...filter].sort((a, b) => b - a).join('★/'));
  }, [filter]);

  const search = () => {
    if (query.length < 3) {
      dispatch(updateRenderedReviews(allReviews.slice(0, renderedReviewsCt)));
    } else {
      const filtered = [];
      allReviews.forEach((review) => {
        if (
          review.reviewer_name.toLowerCase().includes(query.toLowerCase()) ||
          review.summary.toLowerCase().includes(query.toLowerCase()) ||
          review.body.toLowerCase().includes(query.toLowerCase()) ||
          (review.recommend &&
            '✓ i recommend this product'.includes(query.toLowerCase())) ||
          (review.response &&
            review.response.toLowerCase().includes(query.toLowerCase())) ||
          String(review.helpfulness).includes(query.toLowerCase())
        ) {
          filtered.push(review);
        }
      });
      dispatch(updateRenderedReviews(filtered.slice(0, renderedReviewsCt)));
    }
  };

  return (
    <div id="reviews">
      <div className="rr-info">
        <h1 id="rr-heading">Ratings & Reviews</h1>
        <SelectContainer className="sort-select-container">
          <Div>
            {`${allReviews.length} reviews, sorted by`}
            <Select
              isDarkMode={isDarkMode}
              onChange={(e) => dispatch(updateSort(e.target.value))}
            >
              <Option value="relevant">Relevance</Option>
              <Option value="newest">Newest</Option>
              <Option value="helpful">Helpfulness</Option>
            </Select>
          </Div>
        </SelectContainer>
        <div className="rr-filter">
          {filter.length >= 1 && (
            <div style={{ margin: 0, padding: 0 }}>
              {` Filtering by...${`${stringFilter}★`}  `}
            </div>
          )}
        </div>
        <div className="rr-button">
          {filter.length >= 2 && (
            <Button
              type="button"
              isDarkMode={isDarkMode}
              onClick={removeFilters}
            >
              Remove Filters
            </Button>
          )}
        </div>
        <Button
          className="rr-button"
          isDarkMode={isDarkMode}
          onClick={() => dispatch(updateIsReviewForm())}
        >
          Create Review
        </Button>
        <ReviewSearch search={search} filterThrough={filterThrough} />
      </div>
      <div className="grid-reviews">
        <div className="rating-breakdown">
          <RatingBreakdown />
        </div>
        <div className="product-breakdown">
          <CharacteristicBreakdown />
        </div>
        <div className="review-list">
          <ReviewList />
          {allReviews.length !== renderedReviews.length && (
            <Button isDarkMode={isDarkMode} onClick={loadReviews}>
              Load More
            </Button>
          )}
        </div>
        <ReviewFormModal isDarkMode={isDarkMode} changeDisplay={isReviewForm}>
          <ReviewForm />
        </ReviewFormModal>
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
