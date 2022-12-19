/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateRenderedReviews,
  updateIsReviewForm,
  updateIsReviewsUpdated,
  updateFilter,
  updateRenderedReviewCt,
  updateQuery,
} from '../../../../reducers/reviewComponentSlice';
import {
  RatingsBarContainer,
  RatingsBar,
  RatingsBarFill,
  RatingsNum,
  RatingsPercent,
} from '../../lib';

const RatingRender = ({ rating }) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const {
    productReviews: { totalRatings, stars },
  } = useSelector((state) => state.product);
  const { isDarkMode } = useSelector((state) => state.productPage);
  const {
    reviewList: { allReviews, renderedReviews, renderedReviewsCt, filter },
  } = useSelector((state) => state.reviews);

  const dispatch = useDispatch();
  const ratingRef = useRef();

  useEffect(() => {
    if (filter.length === 0) {
      setIsFiltered(false);
    }
  }, [filter]);

  const filterThrough = async (curFilter) => {
    try {
      const result = await allReviews.reduce((acc, review) => {
        curFilter.forEach((item) => {
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

  const handleRatingClick = async (e) => {
    const ratingVal = ratingRef.current.getAttribute('data-rating');
    try {
      if (isFiltered) {
        setIsFiltered(!isFiltered);
        const updatedFilter = await filter.filter(
          (num) => num !== Number(ratingVal),
        );
        if (updatedFilter.length < 1) {
          dispatch(
            updateRenderedReviews(allReviews.slice(0, renderedReviewsCt)),
          );
        } else {
          filterThrough(updatedFilter).then((result) => {
            dispatch(
              updateRenderedReviews(
                result
                  .sort((a, b) => b.rating - a.rating)
                  .slice(0, renderedReviewsCt),
              ),
            );
          });
        }
        await dispatch(updateFilter(updatedFilter));
        dispatch(updateQuery(''));
      } else if (!isFiltered) {
        dispatch(updateQuery(''));
        setIsFiltered(!isFiltered);
        await dispatch(updateFilter([...filter, Number(ratingVal)]));
        filterThrough([...filter, Number(ratingVal)]).then((result) => {
          dispatch(
            updateRenderedReviews(
              result
                .sort((a, b) => b.rating - a.rating)
                .slice(0, renderedReviewsCt),
            ),
          );
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const barStyle = {
    '--percent': Math.round((rating.count / totalRatings) * 100),
    '--bar-color': isDarkMode ? '#87a589' : '#bbe2bd',
  };

  const filterStyle = {
    '--percent': Math.round((rating.count / totalRatings) * 100),
    '--bar-color': isDarkMode ? '#91863d' : '#d4cc70',
  };

  const barBackground = {
    '--bar-background': isDarkMode
      ? 'rgba(95, 95, 95, 0.685)'
      : 'rgba(173, 173, 173, 0.685)',
  };

  return (
    <RatingsBarContainer>
      <RatingsBar
        data-rating={rating.rating}
        ref={ratingRef}
        onClick={handleRatingClick}
        style={barBackground}
        isDarkMode={isDarkMode}
      >
        <RatingsPercent>
          {Math.round((rating.count / totalRatings) * 100)}%
        </RatingsPercent>
        <RatingsBarFill style={isFiltered ? filterStyle : barStyle}>
          <RatingsNum>{rating.rating}</RatingsNum>
        </RatingsBarFill>
      </RatingsBar>
    </RatingsBarContainer>
  );
};

export default RatingRender;
