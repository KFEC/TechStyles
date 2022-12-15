import React, { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { updateProductId } from '../../../reducers/productSlice';
import Comparison from './Comparison.jsx';
import { ImageRelatedProduct } from '../lib/styledComponents';
// import { getData } from '../../../lib';
import defaultImage from '../lib/images/noProductAvailable.png';

const ProductCard = ({
  product: { productDetails, styles, meta },
  setProperty,
  property,
  idx,
}) => {
  const { isDarkMode } = useSelector((state) => state.productPage);
  const {
    productMeta,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  // modal display property set to false by default
  // original is false
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
    setMainProductChars(productMeta.characteristics); // main product chars for comparison
    setReviewCount(getTotalRatings(meta.ratings));
  }, []);

  useEffect(() => {
    setStars(calculateRatingAvg(Object.values(meta.ratings)));
  }, [reviewCount]);

  /*
  Price - As the price is not actually derived from the product,
  the price displayed should be that for the default style.
  Sale prices should be reflected. If the style is currently discounted,
  then the sale price should appear in red, followed by the original price which is struckthrough.
  */
  let price = null;
  let discountedPrice = null;

  // use this code if default style is the style with property default value TRUE
  // let defaultStyle = false;
  // set price and image to default style data
  // for (let i = 0; i < styles.results.length; i += 1) {
  //   if (styles.results[i]['default?'] === true) {
  //     defaultStyle = true;
  //     price = styles.results[i].original_price;
  //     if (styles.results[i].sale_price !== null) {
  //       discountedPrice = styles.results[i].sale_price;
  //     }
  //     productImage = styles.results[i].photos[0].thumbnail_url;
  //   }
  // }

  let productImage = styles.results[0].photos[0].thumbnail_url;
  price = styles.results[0].original_price;
  discountedPrice = styles.results[0].sale_price;

  // if there is no default style use first style
  // if (!defaultStyle) {
  //   price = productDetails.default_price;
  //   if (styles.results[0].sale_price !== null) {
  //     discountedPrice = styles.results[0].sale_price;
  //   }
  //   productImage = styles.results[0].photos[0].thumbnail_url;
  // }
  // if there is no image display no product image available
  if (productImage === null) {
    productImage = defaultImage;
  }
  // hide cards that are outside of related profucts box
  let opacity = 1;
  let disable = 'false';
  if (idx < property || idx > property + 3) {
    opacity = 0;
    disable = 'true';
  }
  const cardStyle = {
    '--card-color': isDarkMode ? '#303233' : '#FBF9F9',
    display: 'flex',
    flexDirection: 'column',
    opacity: `${opacity}`,
  };

  return (
    <div
      className="card"
      style={cardStyle}
    >
      {openModal && (
        <div className="modalTest" display={openModal ? 'block' : 'none'}>
          <Comparison
            key={Math.random(69 * idx) * 3}
            setOpenModal={setOpenModal}
            comparedProductDetails={productDetails}
            comparedProductChars={meta}
            mainProductChars={mainProductChars}
          />
        </div>
      )}
      <AiFillStar type="button" className="comparisonButton" onClick={() => setOpenModal(true)} />
      <ImageRelatedProduct
        src={productImage}
        alt={productDetails.name}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          if (opacity === 1) {
            dispatch(updateProductId(productDetails.id.toString()));
          }
          setProperty(0);
        }}
      />
      <div className="productInfo">
        <div className="productName" style={{ cursor: 'pointer' }}>{productDetails.name}</div>
        <div className="itemCategory">{productDetails.category}</div>
        {discountedPrice === null
          ? (
            <div className="productPrice">
              $
              {price}
            </div>
          ) : (
            <div className="productPrice">
              <div style={{ textDecoration: 'line-through' }}>{price}</div>
              <div style={{ color: 'red' }}>{discountedPrice}</div>
            </div>
          )}
        <span className="Stars" style={{ '--rating': stars, '--star-size': '1em' }} />
      </div>
    </div>
  );
};

export default ProductCard;
