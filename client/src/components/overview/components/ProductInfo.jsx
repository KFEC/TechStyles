import React, { useState, useEffect } from 'react';
import { RiShareFill } from 'react-icons/ri';
import {
  SocialMediaModal,
} from '../../../lib/styledComponents';
import SocialMedia from './SocialMedia.jsx';

const ProductInfo = ({
  category, name, slogan, description, price, sale, stars, reviewCount,
}) => {
  const [display, setDisplay] = useState(false);

  const renderSale = () => {
    if (sale !== null) {
      return (
        <div id="price-container">
          <div className="price" style={{ textDecoration: 'line-through' }}>{`${price}`}</div>
          <div className="sale" style={{ color: 'red' }}>{`  ${sale}`}</div>
        </div>
      );
    }
    return (
      <div className="price">{`${price}`}</div>
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
        <div id="category">{category?.toUpperCase()}</div>
        <RiShareFill
          onClick={() => { setDisplay(!display); }}
          style={{ fontSize: '1.5em' }}
        />
        <SocialMediaModal changeDisplay={display}>
          <SocialMedia setDisplay={setDisplay} />
        </SocialMediaModal>
      </div>
      <div id="name">{name}</div>
      {reviewCount > 0 ? renderStars() : null}
      {typeof price === 'string' ? renderSale() : null}
      {/* <div>{slogan}</div>
      <div>{description}</div> */}
    </div>
  );
};

export default ProductInfo;
