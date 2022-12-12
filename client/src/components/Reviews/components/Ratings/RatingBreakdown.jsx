import React, { useState, useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import RatingHeading from './RatingHeading.jsx';
import RatingRender from './RatingRender.jsx';
import { getData } from '../../../../lib';

const RatingBreakdown = memo(() => {

  const { relatedProducts, productMeta } = useSelector((state) => state.product);

  return (
    <div data-testid="rating-breakdown">
      {Object.values(relatedProducts).length > 0
      && <RatingHeading /> }
      {Object.values(relatedProducts).length > 0
      && Object.values(productMeta.ratings).map((count, idx) => {
        return (
          <RatingRender
            key={Math.random(idx * 54) * 10}
            rating={{ rating: idx + 1, count }}
          />
        );
      })}
    </div>
  );
});

export default RatingBreakdown;