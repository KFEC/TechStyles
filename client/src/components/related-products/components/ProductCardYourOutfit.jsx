import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { updateProductId } from '../../../reducers/productSlice';
import Comparison from './Comparison.jsx';
import { ImageRelatedProduct } from '../lib/styledComponents';
import { getData } from '../../../lib';

const ProductCardYourOutfit = ({
  outfitItem,
  outfitItems,
  setOutfitItems,
  idxOfItem,
}) => {
  const { isDarkMode } = useSelector((state) => state.productPage);
  const {
    productMeta,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [mainProductChars, setMainProductChars] = useState();
  const [stars, setStars] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const getTotalRatings = (receivedRatings) => {
    return Object.values(receivedRatings)
      .reduce((acc, rating) => {
        acc += Number(rating);
        return acc;
      }, 0);
  };

  const calculateRatingAvg = (data) => {
    const totalStars = data.reduce((acc, rating, index) => {
      acc += Number(rating) * (index + 1);
      return acc;
    }, 0);
    return (totalStars / reviewCount);
  };

  useEffect(() => {
    setMainProductChars(productMeta.characteristics); // main product chars for comparison
    setReviewCount(getTotalRatings(outfitItem.ratings));
  }, []);

  useEffect(() => {
    setStars(calculateRatingAvg(Object.values(outfitItem.ratings)));
  }, [reviewCount]);

  const image = outfitItem.styles[0].photos[0].thumbnail_url || 'https://i.imgur.com/safclRR.png';
  const deleteItem = () => {
    const copy = [...outfitItems];
    copy.splice(idxOfItem, 1);
    setOutfitItems(copy);
    localStorage.setItem('outfits', JSON.stringify([...copy]));
  };
  const cardStyle = {
    '--card-color': isDarkMode ? '#303233' : '#FBF9F9',
  };
  return (
    <div className="card" style={cardStyle}>
      <RiDeleteBin6Line type="button" className="removeButton" onClick={deleteItem} />
      <div>
        <ImageRelatedProduct
          src={image}
          alt={outfitItem.name}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            dispatch(updateProductId(outfitItem.product_id.toString()));
          }}
        />
      </div>
      <div className="productInfo">
        <p className="productName">{outfitItem.name}</p>
        <p className="itemCategory">{outfitItem.category}</p>
        <p className="productPrice">
          $
          {outfitItem.styles[0].original_price}
        </p>
        <span className="Stars" style={{ '--rating': stars, '--star-size': '1em' }} />
      </div>
    </div>
  );
};

export default ProductCardYourOutfit;
