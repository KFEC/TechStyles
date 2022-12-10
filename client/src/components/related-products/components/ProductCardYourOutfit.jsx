import React, { useState } from 'react';
import Comparaison from './Comparaison.jsx';
import {
  ButtonFloatRight,
  Card,
  ImageRelatedProduct,
  ComparaisonModal,
} from '../lib/styledComponents';

const ProductCardYourOutfit = ({ outfitItem, outfitItems, setOutfitItems }) => {
  const [openModal, setOpenModal] = useState(false);
  // console.log(outfitItem);
  let image = '';
  for (let i = 0; i < outfitItem.results.length; i += 1) {
    if (outfitItem.results[i]['default?'] === true) {
      image = outfitItem.results[i].photos[0].thumbnail_url;
      break;
    }
  }
  const deleteItem = () => {
    // console.log(outfitItem.product_id);
    for (let i = 0; i < outfitItems.length; i += 1) {
      // console.log(outfitItems[i]);
      if (outfitItems[i].product_id === outfitItem.product_id) {
        const copy = [...outfitItems];
        // console.log(copy);
        copy.splice(i, 1);
        // console.log(copy);
        setOutfitItems(copy);
      }
    }
  };
  // console.log(image);

  return (
    <Card>
      <div className="btn-text-right">
        <ButtonFloatRight type="button" onClick={deleteItem}>x</ButtonFloatRight>
      </div>
      <div>
        <ImageRelatedProduct src={image} alt={outfitItem.results[0].name} />
      </div>
      <div className="textCentered">
        <p>category</p>
        <p>{outfitItem.results[0].name}</p>
        <p>{outfitItem.results[0].original_price}</p>
        <p>rating</p>
      </div>
    </Card>
  );
};

export default ProductCardYourOutfit;