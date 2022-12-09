import React, { useState, useEffect, memo } from 'react';
// import { Div } from '../../../../lib/styledComponents';
import RBHeading from './RBHeading.jsx';
import RBRender from './RBRender.jsx';
import { getData } from '../../../../lib';

const RatingBreakdown = memo(() => {

  const [ratings, setRatings] = useState(null);
  const [totalRatings, setTotalRatings] = useState(null);
  const [recommendedCt, setRecommendedCt] = useState(null);

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
    getData('/reviews/meta', {
      product_id: 40347,
    })
      .then((response) => {
        setRatings(Object.values(response.data.ratings));
        setTotalRatings(getTotalRatings(response.data.ratings));
        setRecommendedCt(response.data.recommended);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div data-testid="rating-breakdown">
      {ratings
      && <RBHeading ratings={{ totalRatings, ratings, recommendedCt }} />}
      {ratings
      && ratings.map((count, idx) => {
        return (
          <RBRender
            key={Math.random(idx * 54) * 10}
            ratings={{ rating: idx + 1, count, totalRatings }}
            onClick={clickRatingHandler}
          />
        );
      })}
    </div>
  );
});

export default RatingBreakdown;