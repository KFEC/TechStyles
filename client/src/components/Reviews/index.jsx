import React, { useState, useEffect } from 'react';
import {
  RatingBreakdown, CharacteristicBreakdown, ReviewForm, ReviewList,
} from './components';
import { Button, Modal, Div } from '../../lib/styledComponents';
import { getData } from '../../lib/index.js';
import './assets/styles.css';

const Reviews = () => {
  const [display, setDisplay] = useState(false);
  const [currReviews, setCurrReviews] = useState([]);
  const [reviewCounter, setReviewCounter] = useState(2);
  const [reviews, setReviews] = useState([]);
  const [update, setUpdate] = useState(false);
  const [filter, setFilter] = useState('relevant');

  const loadReviews = () => {
    setCurrReviews(reviews.slice(0, reviewCounter + 2));
    setReviewCounter(reviewCounter + 2);
  };

  const filterReviews = (sort) => {
    getData('/reviews', {
      product_id: 40444,
      count: 100,
      sort,
    }).then((res) => {
      setReviews(res.data.results);
      setCurrReviews(res.data.results.slice(0, reviewCounter));
    });
  };

  useEffect(() => {
    filterReviews(filter);
  }, [filter, update]);

  return (
    <Div id="reviews">
      <div className="grid-reviews">
        <div className="rating-breakdown">
          <RatingBreakdown />
        </div>
        <div className="product-breakdown">
          <CharacteristicBreakdown />
        </div>
        <div className="review-list">
          <div>
            {`${reviews.length} reviews, sorted by `}
            <select onChange={(e) => setFilter(e.target.value)}>
              <option value="relevant">Relevant</option>
              <option value="newest">Newest</option>
              <option value="helpful">Helpful</option>
            </select>
          </div>
          <ReviewList reviews={currReviews} update={update} setUpdate={setUpdate} />
          {(currReviews.length !== reviews.length)
        && <Button onClick={loadReviews}>Load More</Button>}
          <Button onClick={() => setDisplay(true)}>Create Review</Button>
        </div>
        <div>
          <Modal changeDisplay={display}>
            <ReviewForm setDisplay={setDisplay} />
          </Modal>
        </div>
      </div>
    </Div>
  );
};

export default Reviews;