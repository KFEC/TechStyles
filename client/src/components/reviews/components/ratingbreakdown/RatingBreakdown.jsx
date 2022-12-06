import React, { useState, useEffect } from 'react';
// import { Div } from '../../../../lib/styledComponents';
import RBHeading from './RBHeading.jsx';
import RBRender from './RBRender.jsx';
import { getData } from '../../../../lib';

const RatingBreakdown = () => {

  const [ratings, setRatings] = useState([]);
  const [totalRatings, setTotalRatings] = useState(0);
  const [recommendedCt, setRecommendedCt] = useState(0);

  useEffect(() => {
    getData('/reviews/meta', {
      product_id: 40347,
    })
      .then((response) => {
        setRatings(Object.values(response.data.ratings));
        setTotalRatings(Object.values(response.data.ratings)
          .reduce((acc, rating) => {
            acc += Number(rating);
            return acc;
          }, 0));
        setRecommendedCt(response.data.recommended);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {ratings.length > 0 && <RBHeading ratings={{ totalRatings, ratings, recommendedCt }} />}
      {ratings.length > 0
      && ratings.map((count, idx) => {
        return (
          <RBRender
            key={Math.random(idx * 54) * 10}
            ratings={{ rating: idx + 1, count, totalRatings }}
          />
        );
      })}
    </div>
  );
};

export default RatingBreakdown;