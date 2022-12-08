import React, { useState, useEffect } from 'react';
import { RiShareFill } from 'react-icons/ri';
import {
  SocialMediaModal,
} from '../../../lib/styledComponents';
import SocialMedia from './SocialMedia.jsx';

const ProductInfo = ({
  category, name, description, price, sale, stars, reviewCount,
}) => {
  const [display, setDisplay] = useState(false);

  const renderSale = () => {
    if (sale !== null) {
      return (
        <div id="price-container">
          <div style={{ textDecoration: 'line-through' }}>{`${price}`}</div>
          <div style={{ color: 'red' }}>{`${sale}`}</div>
        </div>
      );
    }
    return (
      <div>{`${price}`}</div>
    );
  };

  const renderStars = () => {
    return (
      <div id="stars-reviews-container">
        <div className="overview-stars" style={{ '--rating': stars }} />
        <div className="overview-reviews">
          {`Read all ${reviewCount} reviews`}
          {/* add href anchor here */}
        </div>
      </div>
    );
  };

  return (
    <div id="product-info" data-testid="product-info">
      <div className="social-media-container">
        {category?.toUpperCase()}
        <RiShareFill
          onClick={() => { setDisplay(!display); }}
          style={{ color: 'black', fontSize: '1.5em' }}
        />
        <SocialMediaModal changeDisplay={display}>
          <SocialMedia setDisplay={setDisplay} />
        </SocialMediaModal>
      </div>
      <div>{name}</div>
      {reviewCount > 0 ? renderStars() : null}
      {typeof price === 'string' ? renderSale() : null}
      <div>{description}</div>
    </div>
  );
};

export default ProductInfo;
