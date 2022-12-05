import React from 'react';
import {
  Card,
  ImgageRelatedProduct,
} from '../../../lib/styledComponents';

const ProductCard = () => {
  return (
    // on click show the details of the product
    <Card>
      Product Card
      <p>
        <ImgageRelatedProduct src="https://www.pngall.com/wp-content/uploads/4/Leather-Bag-PNG.png" alt="Bag" />
      </p>
      <p>Product Category</p>
      <p>Product Name</p>
      <p>$65</p>
      <p>5.0</p>
    </Card>
  );
};

export default ProductCard;