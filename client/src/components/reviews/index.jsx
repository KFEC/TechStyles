import React, { useState } from 'react';
import { Button, Modal, Div } from '../../lib/styledComponents';
// import { ReviewsDiv } from './lib/reviewStyledComponents';
import NewReview from './components/NewReview.jsx';
import ProductBreakdown from './components/productbreakdown/ProductBreakdown.jsx';
import RatingBreakdown from './components/ratingbreakdown/RatingBreakdown.jsx';
import ReviewList from './components/ReviewList.jsx';
import './assets/styles.css';

const Reviews = () => {

  const [display, setDisplay] = useState(false);

  return (
    <Div id="reviews">
      <div className="grid-reviews">
        <div className="rating-breakdown">
          <RatingBreakdown />
        </div>
        <div className="product-breakdown">
          <ProductBreakdown />
        </div>
        <div className="review-list">
          <ReviewList />
          <Button>Load More</Button>
          <Button onClick={() => setDisplay(true)}>Create Review</Button>
        </div>
        <div>
          <Modal changeDisplay={display}>
            <NewReview setDisplay={setDisplay} />
          </Modal>
        </div>
      </div>
    </Div>
  );
};

export default Reviews;