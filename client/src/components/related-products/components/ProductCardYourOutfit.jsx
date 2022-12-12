import React, { useState } from 'react';
import {
  RiDeleteBin6Line,
} from 'react-icons/ri';
import Comparaison from './Comparaison.jsx';
import {
  ImageRelatedProduct,
} from '../lib/styledComponents';

const ProductCardYourOutfit = ({
  outfitItem, outfitItems,
  setOutfitItems,
  idxOfItem,
}) => {
  let image = '';
  for (let i = 0; i < outfitItem.styles.length; i += 1) {
    if (outfitItem.styles[i]['default?'] === true) {
      image = outfitItem.styles[i].photos[0].thumbnail_url;
      break;
    }
  }
  const deleteItem = () => {
    const copy = [...outfitItems];
    copy.splice(idxOfItem, 1);
    setOutfitItems(copy);
    localStorage.setItem('outfits', JSON.stringify([...copy]));
  };

  return (
    <div className="card">
      <RiDeleteBin6Line type="button" className="removeButton" onClick={deleteItem} />
      <div>
        <ImageRelatedProduct src={image} alt={outfitItem.name} />
      </div>
      <div className="productInfo">
        <p className="productName">{outfitItem.name}</p>
        <p className="itemCategory">{outfitItem.category}</p>
        <p className="productPrice">
          $
          {outfitItem.styles[0].original_price}
        </p>
      </div>
    </div>
  );
};

export default ProductCardYourOutfit;