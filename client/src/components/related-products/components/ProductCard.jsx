import React, { useState, useEffect } from 'react';
import {
  AiFillStar,
} from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { updateProductId } from '../../../reducers/productSlice';
import Comparaison from './Comparaison.jsx';
import {
  ImageRelatedProduct,
  ComparaisonModal,
} from '../lib/styledComponents';
import { getData } from '../../../lib';
import defaultImage from '../lib/images/noProductAvailable.png';
// Image unavailable https://i.imgur.com/MyKhQau.png

const ProductCard = ({
  product: { productDetails, styles, meta },
  setProperty,
  property,
  idx,
}) => {
  const {
    productId,
    productInfo,
    productMeta,
    productStyles,
    relatedProducts,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [stars, setStars] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [mainProductChars, setMainProductChars] = useState();

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
    setMainProductChars(productMeta.characteristics); // main product chars for comparaison
    setReviewCount(getTotalRatings(productMeta.ratings));
  }, []);

  useEffect(() => {
    setStars(calculateRatingAvg(Object.values(productMeta.ratings)));
  }, [reviewCount]);

  /*
  Price - As the price is not actually derived from the product,
  the price displayed should be that for the default style.
  Sale prices should be reflected. If the style is currently discounted,
  then the sale price should appear in red, followed by the original price which is struckthrough.
  */
  let productImage = null;
  let price = null;
  let discountedPrice = null;
  let defaultStyle = false;
  // set price and image to default style data
  for (let i = 0; i < styles.results.length; i += 1) {
    if (styles.results[i]['default?'] === true) {
      defaultStyle = true;
      price = styles.results[i].original_price;
      if (styles.results[i].sale_price !== null) {
        discountedPrice = styles.results[i].sale_price;
      }
      productImage = styles.results[i].photos[0].thumbnail_url;
    }
  }
  // if there is no default style use first style
  if (!defaultStyle) {
    price = productDetails.default_price;
    if (styles.results[0].sale_price !== null) {
      discountedPrice = styles.results[0].sale_price;
    }
    productImage = styles.results[0].photos[0].thumbnail_url;
  }
  // if there is no image display no product image available
  if (productImage === null) {
    productImage = defaultImage;
  }
  // hide cards that are outside of related profucts box
  let opacity = 1;
  if (idx < property || idx > property + 3) {
    opacity = 0;
  }

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', opacity: `${opacity}` }}>
      <ComparaisonModal displayModal={openModal}>
        <Comparaison
          key={Math.random(69 * idx) * 3}
          setOpenModal={setOpenModal}
          comparedProductDetails={productDetails}
          comparedProductChars={meta}
          mainProductChars={mainProductChars}
        />
      </ComparaisonModal>
      <AiFillStar type="button" className="comparisonButton" onClick={() => setOpenModal(true)} />
      <ImageRelatedProduct
        src={productImage}
        alt={productDetails.name}
        onClick={() => {
          dispatch(updateProductId(productDetails.id.toString()));
          setProperty(0);
        }}
      />
      <div className="productInfo">
        <div className="productName">{productDetails.name}</div>
        <div className="itemCategory">{productDetails.category}</div>
        {discountedPrice === null
          ? (
            <p className="productPrice">
              $
              {price}
            </p>
          ) : (
            <p className="productPrice">
              {price}
              {discountedPrice}
            </p>
          )}
        <span className="StarsRelatedProducts" style={{ '--rating': stars }} />
      </div>
    </div>
  );
};

export default ProductCard;