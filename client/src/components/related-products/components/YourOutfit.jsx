import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  GrAdd,
} from 'react-icons/gr';
import {
  ButtonAddItem,
  ImageRelatedProduct,
  RelatedProductContainer,
} from '../lib/styledComponents';
import ProductCardYourOutfit from './ProductCardYourOutfit.jsx';

const YourOutfit = () => {
  const { isDarkMode } = useSelector((state) => state.productPage);
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
    // if there is data assign it to outfitItems
    if (dataLocalStorage !== null) {
      // assign array of outfit items to outfits
      setOutfitItems(JSON.parse(dataLocalStorage));
    }
  }, []);
  // handles button and adds item to local storage
  const addItem = () => {
    const ItemObject = {
      product_id: productInfo.id,
      name: productInfo.name,
      category: productInfo.category,
      styles: productStyles.results,
    };
    // check if item already present in outfits items
    if (outfitItems.length > 0) {
      for (let i = 0; i < outfitItems.length; i += 1) {
        if (outfitItems[i].product_id.toString() === productId) {
          break;
        } else if (i === outfitItems.length - 1) {
          setOutfitItems([...outfitItems, ItemObject]);
          localStorage.setItem('outfits', JSON.stringify([...outfitItems, ItemObject]));
        }
      }
    } else if (outfitItems.length === 0) {
      localStorage.setItem('outfits', JSON.stringify([ItemObject]));
      setOutfitItems([...outfitItems, ItemObject]);
    }
  };
  const cardStyle = {
    '--card-color': isDarkMode ? '#303233' : '#FBF9F9',
  };
  return (
    <div id="your-outfit">
      Your Outfit
      <RelatedProductContainer>
        <div className="card" style={cardStyle}>
          <p style={{ top: '20%', left: '30%' }}>Add to Outfit</p>
          <GrAdd
            className="center"
            type="button"
            style={{
              color: isDarkMode ? 'white' : 'black',
              fontSize: '100px',
              left: '30%',
              top: '28%',
            }}
            onClick={addItem}
          />
        </div>
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
    </div>
  );
};

export default YourOutfit;