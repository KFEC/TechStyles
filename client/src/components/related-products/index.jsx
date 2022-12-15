import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Div } from '../../lib/styledComponents.js';
import RelatedProductList from './components/RelatedProductList.jsx';
import YourOutfit from './components/YourOutfit.jsx';
import { getData } from '../../lib/apiRoutes.js';


const RelatedProducts = () => {
  // all the product data
  const {
    productId,
    productInfo,
    productMeta,
    productStyles,
    relatedProducts,
  } = useSelector((state) => state.product);
  return (
    <Div style={{ display: 'flex' }}>
      { relatedProducts.length > 0 && Object.keys(relatedProducts).length > 0
        && (
          <div id="related-products-container" style={{ display: 'flex', flexDirection: 'column' }}>
            <RelatedProductList />
            <YourOutfit />
          </div>
        )}
    </Div>
  );
};

export default RelatedProducts;
