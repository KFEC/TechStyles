import React, { useState } from 'react';
import Comparaison from './Comparaison.jsx';
import {
  Card,
  ImageRelatedProduct,
  ComparaisonModal,
} from '../lib/styledComponents';

const ProductCardYourOutfit = ({ outfitItem }) => {
  const [openModal, setOpenModal] = useState(false);
  console.log(outfitItem);
  return (
    <Card>
      Product Card
      <button type="button">x</button>
      <p>
        <ImageRelatedProduct src="https://www.pngall.com/wp-content/uploads/4/Leather-Bag-PNG.png" alt="Bag" />
      </p>
      <p>Product Category</p>
      <p>Product Name</p>
      <p>$65</p>
      <p>5.0</p>
    </Card>
  );
};

export default ProductCardYourOutfit;