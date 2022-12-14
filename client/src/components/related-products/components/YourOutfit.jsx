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
    const dataLocalStorage = localStorage.getItem('outfits');
    if (dataLocalStorage !== null) {
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
  // dark mode
  const cardStyle = {
    '--card-color': isDarkMode ? '#303233' : '#FBF9F9',
  };
  return (
    <div className="yourOutfitContainer">
      <div>Your Outfit</div>
      <div className="yourOutfit">
        <div className="card" style={cardStyle}>
          <div style={{ textAlign: 'center', top: '80px', position: 'relative' }}>Add to Outfit</div>
          <GrAdd
            type="button"
            style={{
              position: 'relative',
              color: isDarkMode ? 'white' : 'black',
              fontSize: '80px',
              left: '33%',
              top: '30%',
              cursor: 'pointer',
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
      </div>
    </div>
  );
};

export default YourOutfit;
