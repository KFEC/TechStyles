/* eslint-disable max-len */
/* eslint-disable-next-line import/no-named-as-default */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProductId } from '../../reducers';
import { Div } from '../../lib/styledComponents';
// import {
//   getData,
//   postData,
//   patchData,
//   putData,
//   postAndGet,
// } from '../../lib/apiRoutes.js';
import ImageGallery from './components/ImageGallery.jsx';
import ProductInfo from './components/ProductInfo.jsx';
import StyleSelect from './components/StyleSelect.jsx';
import AddToCart from './components/AddToCart.jsx';
import Description from './components/Description.jsx';
import './assets/styles.css';

const noImageAvailable = [{ thumbnail_url: 'https://i.imgur.com/safclRR.png' }];
const noSkusAvailable = [{ quantity: null, size: 'OUT OF STOCK' }];

const Overview = () => {
  /* REDUX STATES REFACTOR */
  const {
    productId, productInfo, productMeta, productStyles, productReviews,
  } = useSelector((state) => state.product);

  const { isDarkMode } = useSelector((state) => state.productPage);

  const dispatch = useDispatch();

  /* OVERALL STATE */
  // const [productId, setProductId] = useState('40344');
  const [defaultIndex, setDefaultIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState([0, 6]);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* STYLE BASED STATES */
  const [styles, setStyles] = useState([]); // displays first photo thumbnail of each style
  const [gallery, setGallery] = useState([]); // displays all photos of ONE style
  const [price, setPrice] = useState('');
  const [sale, setSale] = useState('');
  const [styleName, setStyleName] = useState('');
  const [sku, setSku] = useState([]);
  const [selectSize, setSelectSize] = useState('');
  const [selectQty, setSelectQty] = useState(0);

  /* PRODUCT:ID BASED STATES */
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState([]);

  // /* REVIEWS BASED STATES */
  // const [stars, setStars] = useState(0);
  // const [reviewCount, setReviewCount] = useState(0);

  // /* STAR FUNCTIONS */
  // const getTotalRatings = (receivedRatings) => {
  //   return Object.values(receivedRatings)
  //     .reduce((acc, rating) => {
  //       acc += Number(rating);
  //       return acc;
  //     }, 0);
  // };

  // const calculateRatingAvg = (data) => {
  //   const totalStars = data.reduce((acc, rating, index) => {
  //     acc += Number(rating) * (index + 1);
  //     return acc;
  //   }, 0);
  //   return (totalStars / reviewCount);
  // };

  // useEffect(() => {
  //   dispatch(updateProductId('40350'));
  // }, []);

  useEffect(() => {
    setCategory(productInfo.category);
    setName(productInfo.name);
    setSlogan(productInfo.slogan);
    setDescription(productInfo.description);
    setFeatures(productInfo.features);

    setDefaultIndex(0);
    setStyleName('');
    setSelectSize('');
    setSelectQty(0);
    setCarouselIndex([0, 6]);
    setCurrentIndex(0);
  }, [productId, productInfo]);

  // useEffect(() => {
  //   if (Object.keys(productMeta).length > 0) {
  //     setReviewCount(getTotalRatings(productMeta.ratings));
  //   }
  // }, [productMeta]);

  // useEffect(() => {
  //   if (Object.keys(productMeta).length > 0) {
  //     setStars(calculateRatingAvg(Object.values(productMeta.ratings)));
  //   }
  // }, [productId, reviewCount]);

  const asyncStyles = async () => {
    try {
      const allStyles = productStyles.results;
      const allPhotos = productStyles.results[defaultIndex]?.photos?.length === 1 ? noImageAvailable : productStyles.results[defaultIndex].photos;

      /* PRODUCT INFO - PRICE */
      // console.log('styles-result: ', productStyles.results[2])
      const originalPrice = productStyles.results[defaultIndex].original_price;
      const salePrice = productStyles.results[defaultIndex].sale_price;

      /* ADD TO CART */
      // console.log('testing skus before add to cart: ', Object.values(productStyles.results[defaultIndex].skus).length);
      const allSkus = await Object.values(productStyles.results[defaultIndex].skus).length === 1 ? noSkusAvailable : await Object.values(productStyles.results[defaultIndex].skus);

      const displayStyles = await allStyles.reduce((acc, style) => {
        const newStyle = { name: style.name, thumbnail: style.photos[0].thumbnail_url };
        acc.push(newStyle);
        return acc;
      }, []);

      const displayGallery = await allPhotos.reduce((acc, style) => {
        acc.push(style.thumbnail_url);
        return acc;
      }, []);

      return Promise.resolve({
        displayStyles,
        displayGallery,
        originalPrice,
        salePrice,
        allSkus,
      });

    } catch (err) {
      console.log('err ', err);
      return Promise.reject(err);
    }
  };

  useEffect(() => {
    if (Object.keys(productStyles).length > 0) {
      const asyncResults = asyncStyles().then((response) => {
        setStyles(response.displayStyles);
        setGallery(response.displayGallery);
        setPrice(response.originalPrice);
        setSale(response.salePrice);
        setSku(response.allSkus);
      }).catch((err) => console.log('err ', err));
    }
  }, [productId, productStyles, defaultIndex]);

  const handleStyleClick = (event, index) => {
    // console.log('new style should re-render', index);
    setDefaultIndex(index);
    setStyleName(event.target.name);
    // should reset size and qty dropdowns
    setSelectSize('');
    setSelectQty(0);
    // should reset starting carousel index
    setCarouselIndex([0, 6]);
    setCurrentIndex(0);
  };

  return (
    <Div id="overview-container" data-testid="overview">
      <div id="overview">
        <div id="overview-left">
          <ImageGallery gallery={gallery} carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
        <div id="overview-right">
          <ProductInfo category={category} name={name} slogan={slogan} description={description} price={price} sale={sale} stars={productReviews.stars} reviewCount={productReviews.totalReviews} gallery={gallery} currentIndex={currentIndex} />
          <div id="styles-cart-container">
            <StyleSelect styles={styles} styleName={styleName} setStyleName={setStyleName} handleStyleClick={handleStyleClick} />
            <AddToCart sku={sku} selectSize={selectSize} setSelectSize={setSelectSize} selectQty={selectQty} setSelectQty={setSelectQty} name={name} price={price} sale={sale} gallery={gallery} currentIndex={currentIndex} />
          </div>
        </div>
      </div>
      <div id="overview-bottom">
        <Description slogan={slogan} description={description} features={features} />
      </div>
    </Div>

  );
};


export default Overview;

// useEffect(() => {
//   getData('/reviews/meta', {
//     product_id: productId,
//   })
//     .then((response) => {
//       setStars(calculateRatingAvg(Object.values(response.data.ratings)));
//     });
// }, [reviewCount]);

// useEffect(() => {
//   getData(`/products/${productId}`)
//     .then((result) => {
//       // console.log('products/id results: ', result.data);
//       setCategory(result.data.category);
//       setName(result.data.name);
//       setSlogan(result.data.slogan);
//       setDescription(result.data.description);
//     })
//     .catch((err) => console.log('failed to get data, error: ', err));

//   getData('/reviews/meta', {
//     product_id: productId,
//   })
//     .then((result) => {
//       console.log('meta reviews: ', result.data.ratings);
//       setReviewCount(getTotalRatings(result.data.ratings));
//     })
//     .catch((err) => console.log('failed to get data, error: ', err));

//   getData(`/products/${productId}/styles`)
//     .then((result) => {
//       /* STYLES AND IMAGE GALLERY */
//       // console.log('styles-result: ', result.data);
//       const allStyles = result.data.results;
//       const allPhotos = result.data.results[defaultIndex].photos.length === 1 ? noImageAvailable : result.data.results[defaultIndex].photos;

//       /* PRODUCT INFO - PRICE */
//       // console.log('styles-result: ', result.data.results[2])
//       const originalPrice = result.data.results[defaultIndex].original_price;
//       const salePrice = result.data.results[defaultIndex].sale_price;

//       /* ADD TO CART */
//       // console.log('testing skus before add to cart: ', Object.values(result.data.results[defaultIndex].skus).length);
//       const allSkus = Object.values(result.data.results[defaultIndex].skus).length === 1 ? noSkusAvailable : Object.values(result.data.results[defaultIndex].skus);

//       const displayStyles = allStyles.reduce((acc, style) => {
//         const newStyle = { name: style.name, thumbnail: style.photos[0].thumbnail_url };
//         acc.push(newStyle);
//         return acc;
//       }, []);

//       const displayGallery = allPhotos.reduce((acc, style) => {
//         acc.push(style.thumbnail_url);
//         return acc;
//       }, []);

//       return {
//         displayStyles,
//         displayGallery,
//         originalPrice,
//         salePrice,
//         allSkus,
//       };
//     })
//     .then((response) => {
//       // setStyleName(response.displayStyles[0].name);
//       setStyles(response.displayStyles);
//       setGallery(response.displayGallery);
//       setPrice(response.originalPrice);
//       setSale(response.salePrice);
//       setSku(response.allSkus);
//     })
//     .catch((err) => console.log('failed to get data, error: ', err));
// }, [defaultIndex]);