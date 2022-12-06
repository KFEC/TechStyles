import React from 'react';
import ProductCard from './ProductCard.jsx';
import {
  Div,
  RelatedProductContainer,
} from '../lib/styledComponents';

const RelatedProductsList = ({ setOpenModal }) => {
  return (
    // show a list of related product cards
    <Div>
      Related Product List
      <RelatedProductContainer>
        <ProductCard setOpenModal={setOpenModal} />
        <ProductCard setOpenModal={setOpenModal} />
        <ProductCard setOpenModal={setOpenModal} />
        <ProductCard setOpenModal={setOpenModal} />
        <ProductCard setOpenModal={setOpenModal} />
      </RelatedProductContainer>
    </Div>
  );
};

export default RelatedProductsList;