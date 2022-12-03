import React, { useState } from 'react';
import { Div, Button } from '../../../lib/styledComponents';

const NewReview = () => {

  const [rating, setRating] = useState(0);
  const [characteristics, setCharacteristics] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [isRecommended, setIsRecommended] = useState(false);

  const resetStates = () => {
    setRating(0);
    setCharacteristics(0);
    setSummary('');
    setBody('');
    setNick('');
    setEmail('');
    setIsRecommended('');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted!');
    console.log({
      rating, characteristics, summary, body, nick, email, isRecommended,
    });
    resetStates();
  };
  // Rating: 1-5, recommend: true, false, Characteristics: exact(1-5), review summary: textarea(60char), review body: textarea(1000char)
  // Upload photos: file selector, nickname: input(60 char), email: input(60char), submit review: button
  return (
    <Div>
      New Review Form
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
            min="0"
            max="5"
            step="0.25"
            id="new-review-rating-input"
            value={rating}
            onChange={e => setRating(e.target.value)}
          />
          {rating}
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
            id="new-review-nick-label"
            htmlFor="new-review-nick-input"
          >
            Nickname:
          </label>
          <input
            id="new-review-nick-input"
            value={nick}
            onChange={e => setNick(e.target.value)}
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
            onChange={e => console.log(e)}
          />
        </Div>
        <Div>
          <label
            id="new-review-image-label"
            htmlFor="new-review-image-input"
          >
            Image:
          </label>
          <input
            type="file"
            id="new-review-image-input"
          />
        </Div>
        <Button disabled={
          !summary.trim().length
          || !body.trim().length
          || !nick.trim().length
          || !email.trim().length
        }
        >
          Submit
        </Button>
      </form>
    </Div>
  );
};

export default NewReview;