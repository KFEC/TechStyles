import React, { useState, useEffect } from 'react';
import Comparaison from './Comparaison.jsx';
import {
  Card,
  ImageRelatedProduct,
  ComparaisonModal,
} from '../lib/styledComponents';
import { getData } from '../../../lib';

// Image unavailable https://i.imgur.com/MyKhQau.png

const ProductCard = ({ product: { productDetails, styles } }) => {
  const [openModal, setOpenModal] = useState(false);
  const [stars, setStars] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  // console.log('product details in product card: ', productDetails);
  // console.log('product styles in product card: ', styles);
  // console.log(styles.results[0].photos[0].thumbnail_url);

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
  return (
    <Card>
      <div className="btn-text-right">
        <button type="button" onClick={() => setOpenModal(true)}>★</button>
      </div>
      <ComparaisonModal displayModal={openModal}>
        <Comparaison setOpenModal={setOpenModal} comparedProduct={productDetails} />
      </ComparaisonModal>
      <p>
        <ImageRelatedProduct src={styles.results[0].photos[0].thumbnail_url} alt="Bag" />
      </p>
      <p>{productDetails.category}</p>
      <p>{productDetails.name}</p>
      <p>{productDetails.default_price}</p>
      <span className="Stars" style={{ '--rating': stars }} />
    </Card>
  );
};

export default ProductCard;