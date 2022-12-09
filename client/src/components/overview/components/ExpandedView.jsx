import React, { useState, useEffect } from 'react';
import {
  ExpandedViewModalContent,
  CloseModalButton,
} from '../../../lib/styledComponents';

const ExpandedView = ({ setDisplay, main }) => {
  return (
    <ExpandedViewModalContent>
      <CloseModalButton onClick={() => setDisplay(false)}>✖</CloseModalButton>
      <img id="expanded-main-img" src={`${main}`} alt="" />
    </ExpandedViewModalContent>
  );
};

export default ExpandedView;