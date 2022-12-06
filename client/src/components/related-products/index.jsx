import React from 'react';

import { Div } from './lib/styledComponents';
import RelatedProductList from './components/RelatedProductList.jsx';
import MyOutfit from './components/MyOutfit.jsx';


const RelatedProducts = () => {
  return (
    <Div>
      I am Related Products
      <RelatedProductList />
      <MyOutfit />
    </Div>
  );
};


export default RelatedProducts;