import React, { useState, useEffect } from 'react';
import Comparaison from './Comparaison.jsx';
import {
  ButtonFloatRight,
  Card,
  ImageRelatedProduct,
  ComparaisonModal,
} from '../lib/styledComponents';
import { getData } from '../../../lib';
import defaultImage from '../lib/images/noProductAvailable.png';
// Image unavailable https://i.imgur.com/MyKhQau.png

const ProductCard = ({ product: { productDetails, styles, meta } }) => {
  const [openModal, setOpenModal] = useState(false);
  const [stars, setStars] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [mainProductChars, setMainProductChars] = useState();
  // console.log('product details in product card: ', productDetails);
  // console.log('product styles in product card: ', styles);
  // console.log(styles.results[0].photos[0].thumbnail_url);
  // console.log('meta: ', meta);

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
    getData('/reviews/meta', {
      product_id: productDetails.id,
    })
      .then((response) => {
        const result = response.data.ratings;
        setMainProductChars(response.data.characteristics); // main product chars for comparaison
        setReviewCount(getTotalRatings(result));
        return result;
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getData('/reviews/meta', {
      product_id: productDetails.id,
    })
      .then((response) => {
        setStars(calculateRatingAvg(Object.values(response.data.ratings)));
      });
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

  // console.log('product data: ', productDetails);
  // console.log('styles data: ', styles);
  // console.log('image: ', productImage);
  // console.log('price: ', price);


  return (
    <Card>
      <div className="btn-text-right">
        <ButtonFloatRight type="button" onClick={() => setOpenModal(true)}>Compare Item</ButtonFloatRight>
      </div>
      <ComparaisonModal displayModal={openModal}>
        <Comparaison
          setOpenModal={setOpenModal}
          comparedProduct={productDetails}
          mainProductChars={mainProductChars}
        />
      </ComparaisonModal>
      <div>
        <ImageRelatedProduct src={productImage} alt={productDetails.name} />
      </div>
      <div className="textCentered">
        <div>{productDetails.category}</div>
        <div>{productDetails.name}</div>
        {discountedPrice === null
          ? (
            <p>
              $
              {price}

            </p>
          ) : (
            <p>
              {price}
              {discountedPrice}
            </p>
          )}
        <span className="Stars" style={{ '--rating': stars }} />
      </div>
    </Card>
  );
};

export default ProductCard;