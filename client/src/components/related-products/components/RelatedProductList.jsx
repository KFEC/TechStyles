import React from 'react';
import ProductCard from './ProductCard.jsx';
import {
  Div,
  RelatedProductContainer,
} from '../lib/styledComponents';

const RelatedProductsList = ({ setOpenModal, productData }) => {
  return (
    <Div data-testid="RelatedProductsList">
      Related Product List
      <RelatedProductContainer>
        {productData?.map((product, idx) => {
          return (
            <ProductCard
              key={Math.random(69 * idx) * 3}
              setOpenModal={setOpenModal}
              product={product}
            />
          );
        })}
      </RelatedProductContainer>
    </Div>
  );
};

export default RelatedProductsList;