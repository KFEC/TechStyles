import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: true,
};

const productPageSlice = createSlice({
  name: 'Product Page',
  initialState,
  reducers: {
    updateIsDarkMode: (state, action) => {
      console.log('updating dark mode');
      state.isDarkMode = !state.isDarkMode;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  updateIsDarkMode,
} = productPageSlice.actions;

export default productPageSlice.reducer;