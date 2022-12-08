import React, { useState } from 'react';
import {
  Button,
  ModalContent,
  CloseModalButton,
} from '../../../lib/styledComponents';
import StarRating from './StarRating.jsx';
import { postData } from '../../../lib/index.js';

const NewReview = ({ setDisplay }) => {

  const [rating, setRating] = useState(0);
  const [characteristics, setCharacteristics] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isRecommended, setIsRecommended] = useState(false);
  const [failed, setFailed] = useState(false);

  const resetStates = () => {
    setRating(0);
    setCharacteristics(0);
    setSummary('');
    setBody('');
    setName('');
    setEmail('');
    setIsRecommended(false);
    setPhotos([]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (body.length < 50 || !name.trim().length || !email.trim().length || rating < 0) {
      setFailed(true);
      return;
    }
    console.log({
      rating, characteristics, summary, body, name, email, isRecommended: !isRecommended, photos,
    });
    // doesn't work atm
    postData('/reviews', {
      product_id: 40347,
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
    });
  };

  return (
    <div>
      <ModalContent id="new-review-form">
        { failed
        && (
          <ModalContent style={{
            zIndex: '5',
            margin: '5% auto',
            border: '1px solid black',
            width: '50%',
          }}
          >
            <CloseModalButton style={{ fontSize: '0.5em' }} type="submit" onClick={() => setFailed(false)}>
              ❌
            </CloseModalButton>
            <div>
              <div>You must enter the following.</div>
              <div>The review body must be longer than 50 characters</div>
              <div>Rating</div>
              <div>Name</div>
              <div>Summary</div>
              <div>Email</div>
            </div>
          </ModalContent>
        )}

        <CloseModalButton type="submit" onClick={() => setDisplay(false)}>❌</CloseModalButton>
        <h2>Submit Review</h2>
        <form onSubmit={submitHandler}>
          <div>
            {/* <label
              id="new-review-rating-label"
              htmlFor="new-review-rating-input"
            >
              Rating:
            </label> */}
            <div className="input-label">Rating</div>
            <StarRating setRating={setRating} rating={rating} />
            {rating === 1 && <span>Poor</span>}
            {rating === 2 && <span>Fair</span>}
            {rating === 3 && <span>Average</span>}
            {rating === 4 && <span>Good</span>}
            {rating === 5 && <span>Great</span>}
          </div>
          <div>
            {/* <label
              id="new-review-characteristics-label"
              htmlFor="new-review-characteristics-input"
            >
              characteristics:
            </label> */}
            <div className="input-label">Characteristics</div>
            <input
              type="range"
              min="0"
              max="5"
              id="new-review-characteristics-input"
              value={characteristics}
              onChange={e => setCharacteristics(e.target.value)}
            />
            {characteristics}
          </div>
          <div>
            {/* <label
              id="new-review-summary-label"
              htmlFor="new-review-summary-input"
            >
              Summary:
            </label> */}
            <div className="input-label">Summary</div>
            <textarea
              id="new-review-summary-input"
              placeholder="Best purchase ever!"
              maxLength="60"
              style={{
                width: '20em',
                height: '3em',
                resize: 'none',
              }}
              value={summary}
              onChange={e => setSummary(e.target.value)}
            />
          </div>
          <div>
            {/* <label
              id="new-review-body-label"
              htmlFor="new-review-body-input"
            >
              Body:
            </label> */}
            <div className="input-label">Body</div>
            <textarea
              id="new-review-body-input"
              placeholder="Why did you like the product or not?"
              maxLength="1000"
              style={{
                width: '20em',
                height: '8em',
                resize: 'none',
              }}
              value={body}
              onChange={e => setBody(e.target.value)}
            />
            {body.length < 50
              ? (
                <div className="sub-text">
                  Minimum required characters left-
                  {50 - body.length}
                  .
                </div>
              )
              : <div>Minimum reached.</div>}
          </div>
          <div>
            {/* <label
              id="new-review-name-label"
              htmlFor="new-review-name-input"
            >
              Name:
            </label> */}
            <div className="input-label">Name</div>
            <textarea
              id="new-review-name-input"
              placeholder="robert11"
              maxLength="60"
              style={{
                width: '20em',
                height: '3em',
                resize: 'none',
              }}
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <div className="sub-text">
              For privacy reasons, do not use your full name or email address.
            </div>
          </div>
          <div>
            {/* <label
              id="new-review-email-label"
              htmlFor="new-review-email-input"
            >
              Email:
            </label> */}
            <div className="input-label">Email</div>
            <textarea
              type="email"
              id="new-review-email-input"
              placeholder="robert11@gmail.com"
              maxLength="60"
              style={{
                width: '20em',
                height: '3em',
                resize: 'none',
              }}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div className="sub-text">For authentication reasons, you will not be emailed.</div>
          </div>
          <div>
            Recommended:
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
          <div>
            <label
              id="new-review-image-label"
              htmlFor="new-review-image-input"
            >
              Upload Images
            </label>
            {/* <div className="input-label">Image</div> */}
            {photos.length <= 5 && (
              <input
                className="sub-label"
                type="file"
                accept="image/*"
                multiple
                id="new-review-image-input"
                onChange={e => setPhotos([...photos, e.target?.files[0]?.name])}
              />
            )}
          </div>
          <Button
            onClick={() => (
              !failed
              && body.length > 50
            )
            && setDisplay(false)}
          >
            Submit
          </Button>
        </form>
      </ModalContent>
    </div>
  );
};

export default NewReview;