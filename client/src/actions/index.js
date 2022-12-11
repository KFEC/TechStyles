import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getData = async ({ url, params = {} }, options) => {
  try {
    const results = await axios({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${url}`,
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
  console.log('making get request');
  try {
    const relatedProducts = await getData({ url: `/products/${productId}/related` });
    const mappedData = await Promise.all(relatedProducts.map(async (product) => {
      try {
        const productDetails = await getData({ url: `/products/${product}` });
        const styles = await getData({ url: `/products/${product}/styles` });
        const meta = await (getData({ url: '/reviews/meta', params: { product_id: product } }));
        return { productDetails, styles, meta };
      } catch (err) {
        console.error(err);
      }
      return null;
    }));
    return mappedData;
  } catch (err) {
    console.error(err);
  }
  return null;
};

const getProductInfo = createAsyncThunk('product/getProductInfo', getData);
const getProductMeta = createAsyncThunk('product/getProductMeta', getData);
const getProductStyles = createAsyncThunk('product/getProductStyles', getData);
const getProductQuestions = createAsyncThunk('product/getProductQuestions', getData);
const getProductReviews = createAsyncThunk('product/getProductReviews', getData);
const getRelatedProducts = createAsyncThunk('product/getRelatedProducts', getRelatedProductsData);

export {
  getProductInfo,
  getProductMeta,
  getProductStyles,
  getProductQuestions,
  getRelatedProducts,
  getProductReviews,
};