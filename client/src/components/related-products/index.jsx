import React from 'react';

import { Div } from './lib/styledComponents';
import RelatedProductList from './components/RelatedProductList.jsx';
import YourOutfit from './components/YourOutfit.jsx';


const RelatedProducts = () => {
  return (
    <Div>
      I am Related Products
      <RelatedProductList />
      <YourOutfit />
    </Div>
  );
};


export default RelatedProducts;