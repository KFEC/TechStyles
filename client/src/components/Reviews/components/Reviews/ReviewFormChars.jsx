import React, { useState } from 'react';
import { FORM_CHARS } from '../../lib';

const ReviewFormChars = ({ char, update }) => {
  const [rating, setRating] = useState(0);
  const updateRating = (value) => {
    setRating(value);
    update(char, value);
  };

  return (
    <div
      style={{
        minWidth: '250px',
        maxWidth: '250px',
        padding: '0.45em',
        textAlign: 'center',
      }}
    >
      <h6>
        {`${char}`}
        {rating ? <span>{`:   "${FORM_CHARS[char][rating]}"`}</span> : null}
      </h6>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div className="form-char-tuple">
          <label htmlFor={char}>1</label>
          <input
            role="button"
            type="radio"
            name={char}
            onClick={() => updateRating(1)}
          />
        </div>
        <div className="form-char-tuple">
          <label htmlFor={char}>2</label>
          <input
            role="button"
            type="radio"
            name={char}
            onClick={() => updateRating(2)}
          />
        </div>
        <div className="form-char-tuple">
          <label htmlFor={char}>3</label>
          <input
            role="button"
            type="radio"
            name={char}
            onClick={() => updateRating(3)}
          />
        </div>
        <div className="form-char-tuple">
          <label htmlFor={char}>4</label>
          <input
            role="button"
            type="radio"
            name={char}
            onClick={() => updateRating(4)}
          />
        </div>
        <div className="form-char-tuple">
          <label htmlFor={char}>5</label>
          <input
            role="button"
            type="radio"
            name={char}
            onClick={() => updateRating(5)}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewFormChars;
