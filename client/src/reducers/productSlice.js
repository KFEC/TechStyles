import { createSlice } from '@reduxjs/toolkit';
import {
  getProductInfo, getProductMeta, getRelatedProducts, getProductStyles,
  getProductQuestions, getProductReviews,
} from '../actions';

const initialState = {
  productId: '40348',
  productReviews: {
    allReviews: [],
    stars: 0,
    recommended: 0,
    totalRatings: 0,
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
    updateProductTotalRatings: (state, action) => {
      state.productReviews.totalRatings = action.payload;
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
      .addCase(getProductInfo.rejected, (state, action) => {
        state.productInfo = {};
        console.log('Product Info Rejected');
      })
      .addCase(getProductMeta.fulfilled, (state, action) => {
        state.productMeta = action.payload;
      })
      .addCase(getProductMeta.rejected, (state, action) => {
        state.productMeta = {};
        console.log('Product Meta Rejected');
      })
      .addCase(getProductStyles.fulfilled, (state, action) => {
        state.productStyles = action.payload;
      })
      .addCase(getProductStyles.rejected, (state, action) => {
        state.productStyles = {};
        console.log('Product Styles Rejected');
      })
      .addCase(getProductQuestions.fulfilled, (state, action) => {
        state.productQuestions = action.payload.results;
      })
      .addCase(getProductQuestions.rejected, (state, action) => {
        state.productQuestions = [];
        console.log('Product Questions Rejected');
      })
      .addCase(getProductReviews.fulfilled, (state, action) => {
        state.productReviews.allReviews = action.payload.results;
      })
      .addCase(getProductReviews.rejected, (state, action) => {
        state.productReviews.allReviews = [];
        console.log('Product Reviews Rejected');
      })
      .addCase(getRelatedProducts.fulfilled, (state, action) => {
        state.relatedProducts = action.payload;
      })
      .addCase(getRelatedProducts.rejected, (state, action) => {
        state.relatedProducts = [];
        console.log('Related Products Rejected');
      });
  },
});

export const {
  updateProductId, updateProductStars, updateProductRecommended,
  updateProductTotalRatings, updateProductTotalReviews,
} = productSlice.actions;

export default productSlice.reducer;