import { createSlice } from '@reduxjs/toolkit';
import { getProductInfo, getProductMeta } from '../actions';

const initialState = {
  productId: '40344',
  productInfo: {},
  relatedProducts: [],
  productMeta: {},
  styles: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductInfo.fulfilled, (state, action) => {
        state.productInfo = action.payload;
      })
      .addCase(getProductMeta.fulfilled, (state, action) => {
        state.productMeta = action.payload;
      });
  },
});

// export const { updateProductInfo, updateRelatedProducts } = productSlice.actions;

export default productSlice.reducer;