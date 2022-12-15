import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
};

const productPageSlice = createSlice({
  name: 'Product Page',
  initialState,
  reducers: {
    updateIsDarkMode: (state, action) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  updateIsDarkMode,
} = productPageSlice.actions;

export default productPageSlice.reducer;