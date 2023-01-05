/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { PicModal, PicModalContent } from '../../lib';

const Thumbnail = ({ photo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div onClick={() => setIsExpanded(!isExpanded)}>
        <img
          className="reviews-img"
          style={{ objFit: 'cover' }}
          src={photo}
          alt="text"
        />
      </div>
      {isExpanded && (
        <PicModal
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <PicModalContent src={photo} alt="text" />
        </PicModal>
      )}
    </div>
  );
};

export default Thumbnail;
