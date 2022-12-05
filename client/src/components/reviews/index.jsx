import React, { useState } from 'react';
import { Button, Modal } from '../../lib/styledComponents';
import { ReviewsDiv } from './lib/reviewStyledComponents';
import NewReview from './components/NewReview.jsx';
import ProductBreakdown from './components/productbreakdown/ProductBreakdown.jsx';
import RatingBreakdown from './components/ratingbreakdown/RatingBreakdown.jsx';
import ReviewList from './components/ReviewList.jsx';

const Reviews = () => {

  const [display, setDisplay] = useState(false);

  return (
    <ReviewsDiv>
      <ProductBreakdown />
      <RatingBreakdown />
      <ReviewList />
      <Modal changeDisplay={display}>
        <NewReview setDisplay={setDisplay} />
      </Modal>
      <Button onClick={() => setDisplay(true)}>Create Review</Button>
    </ReviewsDiv>
  );
};

export default Reviews;