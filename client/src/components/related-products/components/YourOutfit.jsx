import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  AddItemCard,
  ButtonAddItem,
  Card,
  Div,
  ImageRelatedProduct,
  RelatedProductContainer,
} from '../lib/styledComponents';
import ProductCardYourOutfit from './ProductCardYourOutfit.jsx';

const YourOutfit = () => {
  // state for outfit items
  const [outfitItems, setOutfitItems] = useState([]);
  const {
    productId,
    productInfo,
    productStyles,
  } = useSelector((state) => state.product);
  useEffect(() => {
    // get data in local storage at key outfits
    const dataLocalStorage = localStorage.getItem('outfits');
    // console.log('data from local storage: ', JSON.parse(dataLocalStorage));
    // if there is data assign it to outfitItems
    if (dataLocalStorage !== null) {
      // assign array of outfit items to outfits
      setOutfitItems(JSON.parse(dataLocalStorage));
    }
    // console.log('use effect, outfitItems: ', outfitItems);
  }, []);
  // handles button and adds item to local storage
  const addItem = () => {
    // console.log('from add item', productStyles);
    const ItemObject = {
      product_id: productInfo.id,
      name: productInfo.name,
      category: productInfo.category,
      styles: productStyles.results,
    };
    // console.log('itemObject :', ItemObject);
    // check if item already present in outfits items
    if (outfitItems.length > 0) {
      for (let i = 0; i < outfitItems.length; i += 1) {
        console.log('loop outfititem', outfitItems[i]);
        if (outfitItems[i].product_id === productId) {
          console.log('true');
          break;
        } else if (i === outfitItems.length - 1) {
          setOutfitItems([...outfitItems, ItemObject]);
          localStorage.setItem('outfits', JSON.stringify([...outfitItems, ItemObject]));
        }
      }
    } else {
      localStorage.setItem('outfits', JSON.stringify([ItemObject]));
      setOutfitItems([ItemObject]);
    }
  };
  return (
    <Div>
      Your Outfit
      <RelatedProductContainer>
        <AddItemCard>
          {/* when clicked add main item to local storage */}
          <ButtonAddItem type="button" onClick={addItem}>Add Current Item To Your Outfit</ButtonAddItem>
        </AddItemCard>
        {outfitItems.map(
          (item, idx) => (
            <ProductCardYourOutfit
              outfitItem={item}
              key={Math.random(69 * idx) * 3}
              setOutfitItems={setOutfitItems}
              outfitItems={outfitItems}
              idxOfItem={idx}
            />
          ),
        )}
      </RelatedProductContainer>
    </Div>
  );
};

export default YourOutfit;