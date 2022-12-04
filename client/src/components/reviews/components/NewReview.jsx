import React, { useState } from 'react';
import {
  Div,
  Button,
  ModalContent,
  CloseModalButton,
} from '../../../lib/styledComponents';
import StarRating from './StarRating.jsx';

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
    console.log('Form Submitted!');
    console.log({
      rating, characteristics, summary, body, name, email, isRecommended: !isRecommended, photos,
    });
    resetStates();
  };

  return (
    <ModalContent>
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
          <Div>
            <div>You must enter the following.</div>
            <div>The review body must be longer than 50 characters</div>
            <div>Rating</div>
            <div>Name</div>
            <div>Summary</div>
            <div>Email</div>
          </Div>
        </ModalContent>
      )}

      <CloseModalButton type="submit" onClick={() => setDisplay(false)}>❌</CloseModalButton>
      <h2>Submit Review</h2>
      <form onSubmit={submitHandler}>
        <Div>
          <label
            id="new-review-rating-label"
            htmlFor="new-review-rating-input"
          >
            Rating:
          </label>
          <StarRating setRating={setRating} rating={rating} />
          {rating === 1 && <span>Poor</span>}
          {rating === 2 && <span>Fair</span>}
          {rating === 3 && <span>Average</span>}
          {rating === 4 && <span>Good</span>}
          {rating === 5 && <span>Great</span>}
        </Div>
        <Div>
          <label
            id="new-review-characteristics-label"
            htmlFor="new-review-characteristics-input"
          >
            characteristics:
          </label>
          <input
            type="range"
            min="0"
            max="5"
            id="new-review-characteristics-input"
            value={characteristics}
            onChange={e => setCharacteristics(e.target.value)}
          />
          {characteristics}
        </Div>
        <Div>
          <label
            id="new-review-summary-label"
            htmlFor="new-review-summary-input"
          >
            Summary:
          </label>
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
        </Div>
        <Div>
          <label
            id="new-review-body-label"
            htmlFor="new-review-body-input"
          >
            Body:
          </label>
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
              <div>
                Minimum required characters left-
                {50 - body.length}
                .
              </div>
            )
            : <div>Minimum reached.</div>}
        </Div>
        <Div>
          <label
            id="new-review-name-label"
            htmlFor="new-review-name-input"
          >
            Name:
          </label>
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
          <div>
            For privacy reasons, do not use your full name or email address.
          </div>
        </Div>
        <Div>
          <label
            id="new-review-email-label"
            htmlFor="new-review-email-input"
          >
            Email:
          </label>
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
          <div>For authentication reasons, you will not be emailed.</div>
        </Div>
        <Div>
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
        </Div>
        <Div>
          <label
            id="new-review-image-label"
            htmlFor="new-review-image-input"
          >
            Image:
          </label>
          {photos.length <= 5 && (
            <input
              type="file"
              id="new-review-image-input"
              onChange={e => setPhotos([...photos, e.target.files[0].name])}
            />
          )}
        </Div>
        <Button
          onClick={() => (
            !failed
            && body.length > 50
            && name.length > 1
            && email.length > 1
          )
          && setDisplay(false)}
        >
          Submit
        </Button>
      </form>
    </ModalContent>
  );
};

export default NewReview;