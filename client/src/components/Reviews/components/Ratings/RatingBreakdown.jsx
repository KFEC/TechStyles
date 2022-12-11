import React, { useState, useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import RatingHeading from './RatingHeading.jsx';
import RatingRender from './RatingRender.jsx';
import { getData } from '../../../../lib';

const RatingBreakdown = memo(() => {

  const [ratings, setRatings] = useState(null);
  const [totalRatings, setTotalRatings] = useState(null);

  const {
    relatedProducts, productMeta, productReviews: { stars, recommended, totalReviews },
  } = useSelector((state) => state.product);
  const clickRatingHandler = (e) => {
    console.log(e.target);
  };

  const getTotalRatings = (receivedRatings) => {
    return Object.values(receivedRatings)
      .reduce((acc, rating) => {
        acc += Number(rating);
        return acc;
      }, 0);
  };

  useEffect(() => {
    if (Object.values(productMeta).length > 0) {
      setRatings(Object.values(productMeta.ratings));
      setTotalRatings(getTotalRatings(productMeta.ratings));
    }
  }, [productMeta]);

  // useEffect(() => {
  //   getData('/reviews/meta', {
  //     product_id: 40347,
  //   })
  //     .then((response) => {
  //       setRatings(Object.values(response.data.ratings));
  //       setTotalRatings(getTotalRatings(response.data.ratings));
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div data-testid="rating-breakdown">
      {Object.values(relatedProducts).length > 0
      && <RatingHeading stars={stars} recommended={recommended} /> }
      {Object.values(relatedProducts).length > 0 && ratings
      && ratings.map((count, idx) => {
        return (
          <RatingRender
            key={Math.random(idx * 54) * 10}
            totalReviews={totalReviews}
            stars={stars}
            rating={{ rating: idx + 1, count }}
            onClick={clickRatingHandler}
          />
        );
      })}
    </div>
  );
});

export default RatingBreakdown;