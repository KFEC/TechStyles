import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import {
  updateRenderedReviews,
  updateIsReviewForm,
  updateIsReviewsUpdated,
  updateFilter,
  updateRenderedReviewCt,
} from '../../../../reducers/reviewComponentSlice';
import { getProductReviews } from '../../../../actions';
import { Button, CloseModalButton } from '../../../../lib/styledComponents';
import { ReviewFormModalContent } from '../../lib';
import ReviewStars from './ReviewStars.jsx';
import ReviewFormChars from './ReviewFormChars.jsx';
import { postData } from '../../../../lib/index.js';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [characteristics, setCharacteristics] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isRecommended, setIsRecommended] = useState(false);
  const [failed, setFailed] = useState(false);

  const { productId, productMeta } = useSelector((state) => state.product);
  const { isDarkMode } = useSelector((state) => state.productPage);
  const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const didSummaryFail = summary.trim().length < 1 && failed;
  const didNameFail = name.trim().length < 1 && failed;
  const didBodyFail = body.length < 50 && failed;
  const didEmailFail = regEmail.test(email) < 1 && failed;
  const didRatingFail = rating < 1 && failed;
  const didCharsLoad =
    productMeta.characteristics &&
    Object.keys(productMeta.characteristics).length > 0;

  const dispatch = useDispatch();

  const resetStates = () => {
    setRating(0);
    setCharacteristics({});
    setSummary('');
    setBody('');
    setName('');
    setEmail('');
    setIsRecommended(false);
    setPhotos([]);
  };

  const updateCharacteristics = (key, val) => {
    const temp = characteristics;
    const { id } = productMeta.characteristics[key];
    temp[id] = val;
    setCharacteristics(temp);
  };

  const submitHandler = (e) => {
    console.log('submitted');
    e.preventDefault();
    if (
      summary.trim().length < 1 ||
      name.trim().length < 1 ||
      body.length < 50 ||
      regEmail.test(email) < 1 ||
      rating < 1
    ) {
      setFailed(true);
    } else {
      postData('/reviews', {
        product_id: Number(productId),
        rating,
        summary,
        body,
        recommend: isRecommended,
        name,
        email,
        photos,
        characteristics,
      }).then(() => {
        resetStates();
        dispatch(
          getProductReviews({
            url: '/reviews',
            params: { product_id: productId, count: 6969 },
          }),
        );
        dispatch(updateIsReviewForm());
      });
    }
  };

  return (
    <ReviewFormModalContent id="new-review-form" isDarkMode={isDarkMode}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <CloseModalButton
          type="submit"
          style={{ padding: 'none', float: 'right' }}
          onClick={() => dispatch(updateIsReviewForm())}
        >
          <IoClose style={{ fontSize: '1em', padding: 'none' }} />
        </CloseModalButton>
      </div>
      <div className="title-container">
        <h2 className="review-form-title">Submit New Review</h2>
      </div>
      <form onSubmit={submitHandler}>
        <div className="review-form-rating-container review-form-containers">
          <label
            className="input-label"
            id="new-review-rating-label"
            htmlFor="new-review-rating-input"
          >
            {'Rating:  '}
            {rating === 1 && <span>Poor</span>}
            {rating === 2 && <span>Fair</span>}
            {rating === 3 && <span>Average</span>}
            {rating === 4 && <span>Good</span>}
            {rating === 5 && <span>Great</span>}
          </label>
          <ReviewStars setRating={setRating} rating={rating} />
          {didRatingFail && (
            <div className="review-form-error">You must rate this product</div>
          )}
        </div>
        <div className="review-form-characteristics-container review-form-containers">
          <label
            className="input-label"
            id="new-review-characteristics-label"
            htmlFor="new-review-characteristics-input"
          >
            Characteristics:
          </label>
          {didCharsLoad &&
            Object.keys(productMeta.characteristics).map((char, idx) => {
              return (
                <ReviewFormChars
                  key={Math.random(idx * 54) * 10}
                  char={char}
                  idx={idx}
                  update={updateCharacteristics}
                />
              );
            })}
        </div>
        <div className="review-form-name-container review-form-containers">
          <label
            className="input-label"
            id="new-review-name-label"
            htmlFor="new-review-name-input"
          >
            Name:
          </label>
          <textarea
            id="new-review-name-input"
            aria-label="Review Name"
            placeholder="robert11"
            maxLength="60"
            style={{
              width: '25em',
              height: '3em',
              resize: 'none',
              fontFamily: 'Work Sans, sans-serif',
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="sub-text">
            Do not use your full name or email address.
          </div>
          {didNameFail && (
            <div className="review-form-error">Please enter your name</div>
          )}
        </div>
        <div className="review-form-email-container review-form-containers">
          <label
            className="input-label"
            id="new-review-email-label"
            htmlFor="new-review-email-input"
          >
            Email:
          </label>
          <textarea
            type="email"
            aria-label="Review Email"
            id="new-review-email-input"
            placeholder="robert11@gmail.com"
            maxLength="60"
            style={{
              width: '25em',
              height: '3em',
              resize: 'none',
              fontFamily: 'Work Sans, sans-serif',
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="sub-text">
            For authentication reasons, you will not be emailed.
          </div>
          {didEmailFail && (
            <div className="review-form-error">
              Please enter a valid email address
            </div>
          )}
        </div>
        <div className="review-form-summary-container review-form-containers">
          <label
            className="input-label"
            id="new-review-summary-label"
            htmlFor="new-review-summary-input"
          >
            Summary:
          </label>
          <textarea
            aria-label="Review Summary"
            id="new-review-summary-input"
            placeholder="Best purchase ever!"
            maxLength="60"
            style={{
              width: '25em',
              height: '3em',
              resize: 'none',
              fontFamily: 'Work Sans, sans-serif',
            }}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          {didSummaryFail && (
            <div className="review-form-error">You must fill out a summary</div>
          )}
        </div>
        <div className="review-form-body-container review-form-containers">
          <label
            className="input-label"
            id="new-review-body-label"
            htmlFor="new-review-body-input"
          >
            Body:
          </label>
          <textarea
            id="new-review-body-input"
            aria-label="Review Body"
            placeholder="Why did you like the product or not?"
            maxLength="1000"
            style={{
              width: '25em',
              height: '5em',
              resize: 'none',
              fontFamily: 'Work Sans, sans-serif',
            }}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          {body.length < 50 ? (
            <div className="sub-text">
              Minimum required characters left-
              {50 - body.length}.
            </div>
          ) : (
            <div className="sub-text">Minimum reached.</div>
          )}
          {didBodyFail && (
            <div className="review-form-error">
              Please enter body text of valid length
            </div>
          )}
        </div>
        <div id="review-form-recommended-container">
          <label className="input-label" id="new-review-recommended-label">
            Recommended:
          </label>
          <div className="review-form-recommended-container review-form-containers">
            <input
              type="radio"
              id="new-review-recommended-input"
              value="yes"
              checked={!isRecommended}
              onChange={() => setIsRecommended(!isRecommended)}
            />
            <label
              id="new-review-recommended-label"
              htmlFor="new-review-recommended-no"
            >
              Yes
            </label>
            <input
              type="radio"
              id="new-review-recommended-input"
              value="no"
              checked={isRecommended}
              onChange={() => setIsRecommended(!isRecommended)}
            />
            <label
              id="new-review-recommended-label"
              htmlFor="new-review-recommended-yes"
            >
              No
            </label>
          </div>
        </div>
        <div className="review-form-image-container review-form-containers">
          <label
            className="input-label"
            id="new-review-image-label"
            htmlFor="new-review-image-input"
          >
            Upload Images
          </label>
          {photos.length <= 5 && (
            <input
              className="sub-label"
              id="new-review-image-input"
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setPhotos([...photos, e.target?.files[0]?.name])}
            />
          )}
        </div>
        <div className="new-review-submit-container">
          <Button type="submit" isDarkMode={isDarkMode}>
            Submit Form
          </Button>
        </div>
      </form>
    </ReviewFormModalContent>
  );
};

export default ReviewForm;
