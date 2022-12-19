import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Div,
  RatingsContainer,
  RatingsAverage,
  RatingsRecommended,
} from '../../lib';
import { Stars } from '../../../../lib/styledComponents';

const RatingHeading = () => {
  const {
    productReviews: { stars, recommended },
  } = useSelector((state) => state.product);

  return (
    <RatingsContainer>
      <Div>
        <RatingsAverage>{`${stars}  `}</RatingsAverage>
        <Stars style={{ '--rating': stars }} />
      </Div>
      <RatingsRecommended>{`${recommended}% of reviews recommended this product`}</RatingsRecommended>
    </RatingsContainer>
  );
};

export default RatingHeading;
