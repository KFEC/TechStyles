import React, { useState } from 'react';
import { Stars } from '../../../../lib/styledComponents';

const ReviewStars = ({ setRating, rating }) => {
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, idx) => {
        const newIdx = idx + 1;
        return (
          <Stars
            key={newIdx}
            className={newIdx <= ((rating && hover) || hover) ? 'on' : 'off'}
            onClick={() => setRating(newIdx)}
            onMouseEnter={() => setHover(newIdx)}
            onMouseLeave={() => setHover(rating)}
          >
            <span>&#9733;</span>
          </Stars>
        );
      })}
    </div>
  );
};

export default ReviewStars;