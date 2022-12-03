import React from 'react';
import { Div } from '../../lib/styledComponents';
import NewReview from './components/NewReview.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';
import RatingBreakdown from './components/RatingBreakdown.jsx';
import ReviewList from './components/ReviewList.jsx';

const Reviews = () => {
  return (
    <Div>
      I am Reviews
      <NewReview />
      <ProductBreakdown />
      <RatingBreakdown />
      <ReviewList />
    </Div>
  );
};

export default Reviews;