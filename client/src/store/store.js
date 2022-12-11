import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/productSlice';
import reviewComponentReducer from '../reducers/reviewComponentSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    reviews: reviewComponentReducer,
  },
});

export default store;