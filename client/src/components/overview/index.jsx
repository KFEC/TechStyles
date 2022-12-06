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

const Overview = () => {
  /* STYLE BASED STATES */
  const [styles, setStyles] = useState([]); // displays first photo thumbnail of each style
  const [gallery, setGallery] = useState([]); // displays all photos of ONE style
  const [price, setPrice] = useState('');
  const [sale, setSale] = useState('');

  //   /* PRODUCT:ID BASED STATES */
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    getData('/products/40344')
      .then((result) => {
        // console.log('products/id results: ', result.data)
        setCategory(result.data.category);
        setName(result.data.name);
      })
      .catch((err) => console.log('failed to get data, error: ', err));



    getData('/products/40344/styles')
      .then((result) => {
        /* STYLES AND IMAGE GALLERY */
        console.log('styles-result: ', result.data.results);
        const allStyles = result.data.results;
        const allPhotos = result.data.results[0].photos; // **HARDCODED TO FIRST PRODUCT

        /* PRODUCT INFO - PRICE */
        // console.log('styles-result: ', result.data.results[2])
        const originalPrice = result.data.results[0].original_price; // **HARDCODED TO FIRST PRODUCT
        const salePrice = result.data.results[0].sale_price; // **HARDCODED TO FIRST PRODUCT

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
        };
      })
      .then((response) => {
        setStyles(response.displayStyles);
        setGallery(response.displayGallery);
        setPrice(response.originalPrice);
        setSale(response.salePrice);
      })
      .catch((err) => console.log('failed to get data, error: ', err));
  }, []);
  return (
    <div id="overview">
      <div id="overview-left">
        <ImageGallery gallery={gallery} />
      </div>
      <div id="overview-right">
        <ProductInfo category={category} name={name} price={price} sale={sale} />
        <StyleSelect styles={styles} />
        <AddToCart />
      </div>
    </div>
  );
};


export default Overview;