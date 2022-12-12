import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/productSlice';
import reviewComponentReducer from '../reducers/reviewComponentSlice';
import productPageReducer from '../reducers/productPageSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    reviews: reviewComponentReducer,
    productPage: productPageReducer,
  },
});

export default store;