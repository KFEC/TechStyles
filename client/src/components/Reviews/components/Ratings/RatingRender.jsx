/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React,
{
  useState, useEffect, useRef, memo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateRenderedReviews, updateIsReviewForm, updateIsReviewsUpdated,
  updateFilter, updateRenderedReviewCt,
} from '../../../../reducers/reviewComponentSlice';

const RatingRender = ({ rating }) => {

  const [isFiltered, setIsFiltered] = useState(false);
  const { productReviews: { totalRatings, stars } } = useSelector((state) => state.product);
  const { isDarkMode } = useSelector((state) => state.productPage);
  const {
    reviewList: {
      allReviews,
      renderedReviews,
      renderedReviewsCt,
      filter,
    },
  } = useSelector((state) => state.reviews);

  const dispatch = useDispatch();
  const ratingRef = useRef();

  const barStyle = {
    '--percent': Math.round((rating.count / totalRatings) * 100),
    '--bar-color': isDarkMode ? '#87a589' : '#bbe2bd',
  };

  const barBackground = {
    '--bar-background': isDarkMode ? 'rgba(95, 95, 95, 0.685)' : 'rgba(173, 173, 173, 0.685)',
  };
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
        const updatedFilter = await filter.filter((num) => num !== Number(ratingVal));
        if (updatedFilter.length < 1) {
          dispatch(updateRenderedReviews(allReviews.slice(0, renderedReviewsCt)));
        } else {
          filterThrough(updatedFilter)
            .then((result) => {
              dispatch(updateRenderedReviews(result
                .sort((a, b) => b.rating - a.rating)
                .slice(0, renderedReviewsCt)));
            });
        }
        await dispatch(updateFilter(updatedFilter));
      } else if (!isFiltered) {
        setIsFiltered(!isFiltered);
        await dispatch(updateFilter([...filter, Number(ratingVal)]));
        filterThrough([...filter, Number(ratingVal)])
          .then((result) => {
            dispatch(updateRenderedReviews(result
              .sort((a, b) => b.rating - a.rating)
              .slice(0, renderedReviewsCt)));
          });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="ratings-bar-container">
      <div
        className="ratings-bar"
        data-rating={rating.rating}
        ref={ratingRef}
        onClick={handleRatingClick}
        style={barBackground}
      >
        <span className="ratings-percentage">
          {Math.round((rating.count / totalRatings) * 100)}
          %
        </span>
        <div className="ratings-bar-content" style={barStyle}>
          <span className="ratings-area">{rating.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default RatingRender;