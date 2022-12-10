import React, { useState } from 'react';
import Comparaison from './Comparaison.jsx';
import {
  ButtonFloatRight,
  Card,
  ImageRelatedProduct,
  ComparaisonModal,
} from '../lib/styledComponents';

const ProductCardYourOutfit = ({
  outfitItem, outfitItems,
  setOutfitItems,
  idxOfItem,
}) => {
  const [openModal, setOpenModal] = useState(false);
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
    <Card>
      <div className="btn-text-right">
        <ButtonFloatRight type="button" onClick={deleteItem}>x</ButtonFloatRight>
      </div>
      <div>
        <ImageRelatedProduct src={image} alt={outfitItem.name} />
      </div>
      <div className="textCentered">
        <p>{outfitItem.category}</p>
        <p>{outfitItem.name}</p>
        <p>{outfitItem.styles[0].original_price}</p>
        <p>rating</p>
      </div>
    </Card>
  );
};

export default ProductCardYourOutfit;