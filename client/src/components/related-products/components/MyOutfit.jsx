import React from 'react';
import {
  Div,
  RelatedProductContainer,
} from '../lib/styledComponents';
import ProductCard from './ProductCard.jsx';


const MyOutfit = () => {
  return (
    <Div>
      My Outfit
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

export default MyOutfit;