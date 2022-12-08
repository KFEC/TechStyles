import React, { useEffect, useState } from 'react';
import {
  Card,
  Div,
  ImageRelatedProduct,
  RelatedProductContainer,
} from '../lib/styledComponents';
import ProductCardYourOutfit from './ProductCardMyOutfit.jsx';

const YourOutfit = ({ mainItem }) => {
  // state for outfit items
  const [outfitItems, setOutfitItems] = useState([]);

  useEffect(() => {
    // get data in local storage at key outfits
    const dataLocalStorage = localStorage.getItem('outfits');
    console.log('from useEffect, outfits data from local storage: ', JSON.parse(dataLocalStorage));
    // if there is data assign it to outfitItems
    if (dataLocalStorage !== null) {
      // assign array of outfit items to outfits
      setOutfitItems(JSON.parse(dataLocalStorage));
    }
  }, []);
  // handles button and adds item to local storage
  const handleClick = () => {
    // check if item already present in outfits items
    if (outfitItems.length > 0) {
      for (let i = 0; i < outfitItems.length; i += 1) {
        if (outfitItems[i].product_id === mainItem.product_id) {
          break;
        } else if (i === outfitItems.length - 1) {
          setOutfitItems([...outfitItems, mainItem]);
          localStorage.setItem('outfits', JSON.stringify([...outfitItems, mainItem]));
        }
      }
    } else {
      localStorage.setItem('outfits', JSON.stringify([mainItem]));
      setOutfitItems([mainItem]);
    }
  };
  return (
    <Div>
      Your Outfit
      <RelatedProductContainer>
        <Card>
          {/* when clicked add main item to local storage */}
          <button type="button" onClick={handleClick}>Add Item to Your Outfit</button>
        </Card>
        {outfitItems.map((item, idx) => <ProductCardYourOutfit outfitItem={item} key={Math.random(69 * idx) * 3} />)}
        {/* <Card>
          Item from local storage
          <button type="button">x</button>
          {outfitItems.length > 0
            ? (
              <>
                <p>{outfitItems[0].product_id}</p>
                <ImageRelatedProduct src={outfitItems[0].results[0].photos[0].thumbnail_url} />
              </>
            )
            : null}
        </Card> */}
      </RelatedProductContainer>
    </Div>
  );
};

export default YourOutfit;