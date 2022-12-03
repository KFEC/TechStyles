import React, { useState } from 'react';
import {
  Div,
  Button,
  ModalContent,
  CloseModalButton,
} from '../../../lib/styledComponents';

const NewReview = ({ setDisplay }) => {

  const [rating, setRating] = useState('1');
  const [characteristics, setCharacteristics] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isRecommended, setIsRecommended] = useState(false);

  const resetStates = () => {
    setRating('1');
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
    console.log('Form Submitted!');
    console.log({
      rating, characteristics, summary, body, name, email, isRecommended, photos,
    });
    resetStates();
  };

  return (
    <ModalContent>
      <CloseModalButton type="submit" onClick={() => setDisplay(false)}>X</CloseModalButton>
      <h2>Submit Review</h2>
      <form onSubmit={submitHandler}>
        <Div>
          <label
            id="new-review-rating-label"
            htmlFor="new-review-rating-input"
          >
            Rating:
          </label>
          <input
            type="range"
            min="1"
            max="5"
            id="new-review-rating-input"
            value={rating}
            onChange={e => setRating(e.target.value)}
          />
          {rating === '1' && <span>Poor</span>}
          {rating === '2' && <span>Fair</span>}
          {rating === '3' && <span>Average</span>}
          {rating === '4' && <span>Good</span>}
          {rating === '5' && <span>Great</span>}
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
          <input
            id="new-review-summary-input"
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
          <input
            id="new-review-body-input"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </Div>
        <Div>
          <label
            id="new-review-name-label"
            htmlFor="new-review-name-input"
          >
            Name:
          </label>
          <input
            id="new-review-name-input"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Div>
        <Div>
          <label
            id="new-review-email-label"
            htmlFor="new-review-email-input"
          >
            Email:
          </label>
          <input
            type="email"
            id="new-review-email-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Div>
        <Div>
          <label
            id="new-review-recommended-label"
            htmlFor="new-review-recommended-input"
          >
            Recommended:
          </label>
          <input
            type="checkbox"
            id="new-review-recommended-input"
            defaultChecked={isRecommended}
            onChange={() => setIsRecommended(!isRecommended)}
          />
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
          onClick={() => setDisplay(false)}
          disabled={
            !body.trim().length
            || !name.trim().length
            || !email.trim().length
          }
        >
          Submit
        </Button>
      </form>
    </ModalContent>
  );
};


export default NewReview;