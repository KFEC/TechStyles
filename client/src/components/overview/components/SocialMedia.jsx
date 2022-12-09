import React, { useState, useEffect } from 'react';
import { TiSocialFacebook, TiSocialPinterest, TiSocialTwitter } from 'react-icons/ti';
import {
  SocialMediaModalContent,
  CloseModalButton,
} from '../../../lib/styledComponents';
// import { IoCheckmarkSharp } from 'react-icons/io5';

const SocialMedia = ({ setDisplay }) => {
  return (
    <SocialMediaModalContent>
      <CloseModalButton onClick={() => setDisplay(false)}>✖</CloseModalButton>
      <div id="social-media-icon-container">
        <div>Share your look</div>
        <TiSocialFacebook style={{ color: '#4267B2', fontSize: '3.5em' }} />
        <TiSocialPinterest style={{ color: '#E60023', fontSize: '3.5em' }} />
        <TiSocialTwitter style={{ color: '#00ACEE', fontSize: '3.5em' }} />
      </div>
    </SocialMediaModalContent>
  );
};

export default SocialMedia;