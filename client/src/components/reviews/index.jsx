import React, { useState } from 'react';
import { Div, Button, Modal } from '../../lib/styledComponents';
import NewReview from './components/NewReview.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';
import RatingBreakdown from './components/RatingBreakdown.jsx';
import ReviewList from './components/ReviewList.jsx';

const Reviews = () => {

  const [display, setDisplay] = useState(false);

  return (
    <Div>
      <Modal changeDisplay={display}>
        <NewReview setDisplay={setDisplay} />
      </Modal>
      <Button onClick={() => setDisplay(true)}>Create Review</Button>
      <ProductBreakdown />
      <RatingBreakdown />
      <ReviewList />
    </Div>
  );
};

export default Reviews;