import React, { useState, useEffect } from 'react';

const RBHeading = ({ ratings: { ratings, totalRatings, recommendedCt } }) => {

  const [avgRating, setAvgRating] = useState(null);
  const [avgRecommendation, setAvgRecommendation] = useState(null);

  const calculateRatingAvg = () => {
    const totalStars = ratings.reduce((acc, rating, idx) => {
      acc += Number(rating) * (idx + 1);
      return acc;
    }, 0);
    return (totalStars / totalRatings);
  };

  const calculateRecommendedAvg = () => {
    const totalRecommendations = Number(recommendedCt.false) + Number(recommendedCt.true);
    return Math.round((Number(recommendedCt.true) / totalRecommendations) * 100);
  };

  useEffect(() => {
    setAvgRating(calculateRatingAvg());
    setAvgRecommendation(calculateRecommendedAvg());
  }, []);

  return (
    <div className="rb-heading">
      {avgRating
      && (
        <div className="rb-heading-container">
          <span className="rb-avg">{Math.round(avgRating * 10) / 10}</span>
          <span className="Stars rb-stars" style={{ '--rating': avgRating }} />
          <h5>{`${avgRecommendation}% of people recommend this product`}</h5>
        </div>
      )}
    </div>
  );
};

export default RBHeading;