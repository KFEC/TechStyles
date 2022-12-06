import React from 'react';
import ProductCard from './ProductCard.jsx';
import {
  Div,
  RelatedProductContainer,
} from '../../../lib/styledComponents';

const RelatedProductsList = () => {
  return (
    // show a list of related product cards
    <Div>
      Related Product List
      <RelatedProductContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </RelatedProductContainer>
    </Div>
  );
};

export default RelatedProductsList;