import React, { useState, useEffect } from 'react';
import {
  getData,
  postData,
  patchData,
  putData,
  postAndGet,
} from '../../../lib/apiRoutes.js';

const ProductInfo = ({
  category, name, description, price, sale, stars, reviewCount,
}) => {

  const renderSale = () => {
    if (sale !== null) {
      return (
        <div>{`PRICE: ${price}, SALE: ${sale}`}</div>
      );
    }
    return (
      <div>{`PRICE: ${price}`}</div>
    );
  };

  const renderStars = () => {
    return (
      <div>
        <div className="Stars overview-stars" style={{ '--rating': stars }}>{`Read all ${reviewCount} reviews`}</div>
      </div>
    );
  };

  return (
    <div id="product-info">
      <div>{category.toUpperCase()}</div>
      <div>{name}</div>
      {reviewCount > 0 ? renderStars() : null}
      {typeof price === 'string' ? renderSale() : null}
      <div>{description}</div>
    </div>
  );
};

export default ProductInfo;
