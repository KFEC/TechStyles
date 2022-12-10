import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard.jsx';
import {
  Div,
  RelatedProductContainer,
} from '../lib/styledComponents';

const RelatedProductsList = ({ setOpenModal, productData, currentProduct }) => {
  const {
    productId,
    productInfo,
    productMeta,
    productStyles,
    relatedProducts,
  } = useSelector((state) => state.product);

  return (
    <Div data-testid="RelatedProductsList">
      Related Product List
      <RelatedProductContainer>
        {relatedProducts?.map((product, idx) => {
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