/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Div } from '../../lib/styledComponents';
import {
  getData,
  postData,
  patchData,
  putData,
  postAndGet,
} from '../../lib/apiRoutes.js';
import ImageGallery from './components/ImageGallery.jsx';
import ProductInfo from './components/ProductInfo.jsx';
// eslint-disable-next-line import/no-named-as-default
import StyleSelect from './components/StyleSelect.jsx';
import AddToCart from './components/AddToCart.jsx';
import './assets/styles.css';

const noImageAvailable = [{ thumbnail_url: 'https://i.imgur.com/fVQQcpc.png' }];
const noSkusAvailable = [{ quantity: null, size: 'OUT OF STOCK' }];

const Overview = () => {
  /* OVERALL STATE */
  const [productId, setProductId] = useState('40344');
  const [defaultIndex, setDefaultIndex] = useState(0);
  // 40344 40345 440348 40350

  /* STYLE BASED STATES */
  const [styles, setStyles] = useState([]); // displays first photo thumbnail of each style
  const [gallery, setGallery] = useState([]); // displays all photos of ONE style
  const [price, setPrice] = useState('');
  const [sale, setSale] = useState('');
  const [styleName, setStyleName] = useState(''); // used in style select
  const [sku, setSku] = useState([]);
  const [selectSize, setSelectSize] = useState('');
  const [selectQty, setSelectQty] = useState(0);

  /* PRODUCT:ID BASED STATES */
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [description, setDescription] = useState('');

  /* REVIEWS BASED STATES */
  const [stars, setStars] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  /* STAR FUNCTIONS */
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
    getData(`/products/${productId}`)
      .then((result) => {
        // console.log('products/id results: ', result.data);
        setCategory(result.data.category);
        setName(result.data.name);
        setSlogan(result.data.slogan);
        setDescription(result.data.description);
      })
      .catch((err) => console.log('failed to get data, error: ', err));

    //  look here moMO

    getData('/reviews/meta', {
      product_id: productId,
    })
      .then((result) => {
        // console.log('meta reviews: ', result.data.ratings);
        setReviewCount(getTotalRatings(result.data.ratings));
      })
      .catch((err) => console.log('failed to get data, error: ', err));

    getData(`/products/${productId}/styles`)
      .then((result) => {
        /* STYLES AND IMAGE GALLERY */
        // console.log('styles-result: ', result.data);
        const allStyles = result.data.results;
        const allPhotos = result.data.results[defaultIndex].photos.length === 1 ? noImageAvailable : result.data.results[defaultIndex].photos;

        /* PRODUCT INFO - PRICE */
        // console.log('styles-result: ', result.data.results[2])
        const originalPrice = result.data.results[defaultIndex].original_price;
        const salePrice = result.data.results[defaultIndex].sale_price;

        /* ADD TO CART */
        // console.log('testing skus before add to cart: ', Object.values(result.data.results[defaultIndex].skus).length);
        const allSkus = Object.values(result.data.results[defaultIndex].skus).length === 1 ? noSkusAvailable : Object.values(result.data.results[defaultIndex].skus);

        const displayStyles = allStyles.reduce((acc, style) => {
          const newStyle = { name: style.name, thumbnail: style.photos[0].thumbnail_url };
          acc.push(newStyle);
          return acc;
        }, []);

        const displayGallery = allPhotos.reduce((acc, style) => {
          acc.push(style.thumbnail_url);
          return acc;
        }, []);

        return {
          displayStyles,
          displayGallery,
          originalPrice,
          salePrice,
          allSkus,
        };
      })
      .then((response) => {
        // setStyleName(response.displayStyles[0].name);
        setStyles(response.displayStyles);
        setGallery(response.displayGallery);
        setPrice(response.originalPrice);
        setSale(response.salePrice);
        setSku(response.allSkus);
      })
      .catch((err) => console.log('failed to get data, error: ', err));
  }, [defaultIndex]);

  useEffect(() => {
    getData('/reviews/meta', {
      product_id: productId,
    })
      .then((response) => {
        setStars(calculateRatingAvg(Object.values(response.data.ratings)));
      });
  }, [reviewCount]);

  const handleStyleClick = (event, index) => {
    // console.log('new style should re-render', index);
    setDefaultIndex(index);
    setStyleName(event.target.name);
    // should reset size and qty dropdowns
    setSelectSize('');
    setSelectQty(0);
  };

  return (
    <Div id="overview-container">
      <div id="overview">
        <div id="overview-left">
          <ImageGallery gallery={gallery} />
        </div>
        <div id="overview-right">
          <ProductInfo category={category} name={name} slogan={slogan} description={description} price={price} sale={sale} stars={stars} reviewCount={reviewCount} />
          <StyleSelect styles={styles} styleName={styleName} setStyleName={setStyleName} handleStyleClick={handleStyleClick} />
          <AddToCart sku={sku} selectSize={selectSize} setSelectSize={setSelectSize} selectQty={selectQty} setSelectQty={setSelectQty} />
        </div>
      </div>
    </Div>

  );
};


export default Overview;