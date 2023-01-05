import React, { useState } from 'react';
import { FormStars } from '../../../../lib/styledComponents';

const ReviewStars = ({ setRating, rating }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="form-stars">
      {[...Array(5)].map((star, idx) => {
        const newIdx = idx + 1;
        return (
          <FormStars
            key={newIdx}
            className={newIdx <= ((rating && hover) || hover) ? 'on' : 'off'}
            onClick={() => setRating(newIdx)}
            onMouseEnter={() => setHover(newIdx)}
            onMouseLeave={() => setHover(rating)}
          >
            <span>&#9733;</span>
          </FormStars>
        );
      })}
    </div>
  );
};

export default ReviewStars;
