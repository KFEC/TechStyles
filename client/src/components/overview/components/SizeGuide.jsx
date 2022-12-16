import React, { useState } from 'react';
import { TiSocialFacebook, TiSocialPinterest, TiSocialTwitter } from 'react-icons/ti';
import { IoCloseOutline } from 'react-icons/io5';
import {
  SizeGuideContent,
  CloseModalButton,
} from '../../../lib/styledComponents';
import SizeChart from '../../../assets/size-chart.png';

const SizeGuide = ({ setDisplay }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <SizeGuideContent>
      <CloseModalButton className="close-btn" onClick={() => setDisplay(false)}>
        <IoCloseOutline style={{ fontSize: '1.5em' }} />
      </CloseModalButton>
      <div id="size-guide-container">
        <div id="size-guide-title">Size Guide</div>
        <img src={SizeChart} alt="No chart available" style={{ border: '2px solid black' }} />
      </div>
    </SizeGuideContent>
  );
};

export default SizeGuide;