import React, { useState } from 'react';
import { FORM_CHARS } from '../../lib';


const ReviewFormChars = ({ char, update }) => {
  const [rating, setRating] = useState(0);
  const updateRating = (value) => {
    setRating(value);
    update(char, value);
  };

  return (
    <div>
      <h6>
        {`${char}`}
        {rating
          ? <div>{`:  "${FORM_CHARS[char][rating]}"`}</div>
          : null }
      </h6>
      <label htmlFor={char}>
        1
      </label>
      <input
        role="button"
        type="radio"
        name={char}
        onClick={() => updateRating(1)}
      />
      <label htmlFor={char}>
        2
      </label>
      <input
        role="button"
        type="radio"
        name={char}
        onClick={() => updateRating(2)}
      />
      <label htmlFor={char}>
        3
      </label>
      <input
        role="button"
        type="radio"
        name={char}
        onClick={() => updateRating(3)}
      />
      <label htmlFor={char}>
        4
      </label>
      <input
        role="button"
        type="radio"
        name={char}
        onClick={() => updateRating(4)}
      />
      <label htmlFor={char}>
        5
      </label>
      <input
        role="button"
        type="radio"
        name={char}
        onClick={() => updateRating(5)}
      />
    </div>
  );
};

export default ReviewFormChars;