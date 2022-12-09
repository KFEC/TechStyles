import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getData = async ({ url, params = {} }, options) => {
  console.log(options);
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

const getProductInfo = createAsyncThunk('product/getProductInfo', getData);
const getProductMeta = createAsyncThunk('product/getProductMeta', getData);

export {
  getProductInfo,
  getProductMeta,
};