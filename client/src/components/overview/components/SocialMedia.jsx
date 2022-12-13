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
          {gallery.length > 0 ? <img id="share-img" src={gallery[currentIndex]} alt="" /> : null}
        </div>
        <div id="social-media-icons">
          <TiSocialFacebook style={{ color: '#4267B2', fontSize: '3.5em' }} />
          <TiSocialPinterest style={{ color: '#E60023', fontSize: '3.5em' }} />
          <TiSocialTwitter style={{ color: '#00ACEE', fontSize: '3.5em' }} />
        </div>
      </div>
    </SocialMediaModalContent>
  );
};

export default SocialMedia;