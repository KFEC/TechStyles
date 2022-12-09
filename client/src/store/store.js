import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;