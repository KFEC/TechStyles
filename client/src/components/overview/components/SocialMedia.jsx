/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { TiSocialFacebook, TiSocialPinterest, TiSocialTwitter } from 'react-icons/ti';
import {
  SocialMediaModalContent,
  CloseModalButton,
} from '../../../lib/styledComponents';

const SocialMedia = ({ setDisplay, gallery, currentIndex }) => {
  return (
    <SocialMediaModalContent>
      <CloseModalButton className="close-btn" onClick={() => setDisplay(false)}>✖</CloseModalButton>
      <div id="social-media-icon-container">
        <div id="share-look">Share your look</div>
        <div id="share-img-container">
          {gallery !== undefined ? <img id="share-img" src={gallery[currentIndex]} alt="" /> : null}
        </div>
        <div id="social-media-icons">
          <a href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer"><TiSocialFacebook style={{ color: '#4267B2', fontSize: '3.5em' }} /></a>
          <a href="http://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><TiSocialPinterest style={{ color: '#E60023', fontSize: '3.5em' }} /></a>
          <a href="http://www.twitter.com/" target="_blank" rel="noopener noreferrer"><TiSocialTwitter style={{ color: '#00ACEE', fontSize: '3.5em' }} /></a>
        </div>
      </div>
    </SocialMediaModalContent>
  );
};

export default SocialMedia;