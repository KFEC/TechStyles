import { createSlice } from '@reduxjs/toolkit';
import { getProductReviews } from '../actions';

const initialState = {
  reviewList: {
    allReviews: [],
    renderedReviews: [],
    renderedReviewsCt: 2,
    sort: 'relevant',
    filter: [],
  },
  page: {
    isReviewForm: false,
    isReviewsUpdated: false,
  },
};

const reviewComponentSlice = createSlice({
  name: 'Review Component',
  initialState,
  reducers: {
    updateRenderedReviews: (state, action) => {
      state.reviewList.renderedReviews = action.payload;
    },
    updateIsReviewForm: (state, action) => {
      state.page.isReviewForm = !state.page.isReviewForm;
    },
    updateIsReviewsUpdated: (state, action) => {
      state.page.isReviewsUpdated = !state.page.isReviewsUpdated;
    },
    updateSort: (state, action) => {
      state.reviewList.sort = action.payload;
    },
    updateFilter: (state, action) => {
      state.reviewList.filter = action.payload;
    },
    updateRenderedReviewCt: (state, action) => {
      state.reviewList.renderedReviewsCt += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductReviews.fulfilled, (state, action) => {
      state.reviewList.allReviews = action.payload.results;
    });
  },
});

export const {
  updateRenderedReviews, updateIsReviewForm,
  updateIsReviewsUpdated, updateSort,
  updateRenderedReviewCt, updateFilter,
} = reviewComponentSlice.actions;

export default reviewComponentSlice.reducer;