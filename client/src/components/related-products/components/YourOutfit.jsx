import React from 'react';
import {
  Div,
  RelatedProductContainer,
} from '../lib/styledComponents';
import ProductCard from './ProductCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';
import ProductCardYourOutfit from './ProductCardMyOutfit.jsx';

const YourOutfit = () => {
  return (
    <Div>
      Your Outfit
      <RelatedProductContainer>
        <AddToOutfit />
        <ProductCardYourOutfit />
      </RelatedProductContainer>
    </Div>
  );
};

export default YourOutfit;