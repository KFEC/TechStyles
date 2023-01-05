import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getData = async ({ url, params = {} }, options) => {
  let newURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${url}`;
  if (url.includes('qa')) {
    // newURL = `http://localhost:8080${url}`;
    console.log('qa');
  } else if (url.includes('products')) {
    // newURL = `http://localhost:8080${url}`;
    console.log('products');
  } else if (url.includes('reviews')) {
    // newURL = `http://localhost:8080${url}`;
    console.log('reviews');
  }
  try {
    const results = await axios({
      url: newURL,
      method: 'GET',
      headers: {
        Authorization: process.env.API_TOKEN,
      },
      params,
    });
    return results.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

const getRelatedProductsData = async (productId) => {
  try {
    const relatedProducts = await getData({
      url: `/products/${productId}/related`,
    });
    const mappedData = await Promise.all(
      [...new Set(relatedProducts)].map(async (product) => {
        try {
          const productDetails = await getData({ url: `/products/${product}` });
          const styles = await getData({ url: `/products/${product}/styles` });
          const meta = await getData({
            url: '/reviews/meta',
            params: { product_id: product },
          });
          return { productDetails, styles, meta };
        } catch (err) {
          console.error(err);
        }
        return null;
      }),
    );
    return mappedData;
  } catch (err) {
    console.error(err);
  }
  return null;
};

const getProductInfo = createAsyncThunk('product/getProductInfo', getData);
const getProductMeta = createAsyncThunk('product/getProductMeta', getData);
const getProductStyles = createAsyncThunk('product/getProductStyles', getData);
const getProductQuestions = createAsyncThunk(
  'product/getProductQuestions',
  getData,
);
const getProductReviews = createAsyncThunk(
  'product/getProductReviews',
  getData,
);
const getRelatedProducts = createAsyncThunk(
  'product/getRelatedProducts',
  getRelatedProductsData,
);

export {
  getProductInfo,
  getProductMeta,
  getProductStyles,
  getProductQuestions,
  getRelatedProducts,
  getProductReviews,
};
