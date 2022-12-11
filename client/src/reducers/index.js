import { createSlice } from '@reduxjs/toolkit';
import {
  getProductInfo, getProductMeta, getRelatedProducts, getProductStyles,
  getProductQuestions,
} from '../actions';

const initialState = {
  productId: '40344',
  productReviews: {
    stars: 0,
    recommended: 0,
    totalReviews: 0,
  },
  productInfo: {},
  productMeta: {},
  productStyles: {},
  productQuestions: [],
  relatedProducts: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateProductId: (state, action) => {
      state.productId = action.payload;
    },
    updateProductStars: (state, action) => {
      state.productReviews.stars = action.payload;
    },
    updateProductRecommended: (state, action) => {
      state.productReviews.recommended = action.payload;
    },
    updateProductTotalReviews: (state, action) => {
      state.productReviews.totalReviews = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductInfo.fulfilled, (state, action) => {
        state.productInfo = action.payload;
      })
      .addCase(getProductMeta.fulfilled, (state, action) => {
        state.productMeta = action.payload;
      })
      .addCase(getProductStyles.fulfilled, (state, action) => {
        state.productStyles = action.payload;
      })
      .addCase(getProductQuestions.fulfilled, (state, action) => {
        state.productQuestions = action.payload.results;
      })
      .addCase(getRelatedProducts.fulfilled, (state, action) => {
        state.relatedProducts = action.payload;
      });
  },
});

export const {
  updateProductId, updateProductStars, updateProductRecommended,
  updateProductTotalReviews,
} = productSlice.actions;

export default productSlice.reducer;