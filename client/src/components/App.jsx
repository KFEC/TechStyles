import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  getProductInfo,
  getProductMeta,
  getRelatedProducts,
  getProductStyles,
  getProductQuestions,
  getProductReviews,
} from '../actions';
import {
  updateProductStars,
  updateProductRecommended,
  updateProductTotalRatings,
  updateProductTotalReviews,
} from '../reducers/productSlice';
import Overview from './overview/index.jsx';
import RelatedProducts from './related-products/index.jsx';
import QA from './qa/index.jsx';
import Reviews from './Reviews/index.jsx';
import Footer from './Footer.jsx';
import { AppDiv, Wrapper, Div, Button } from '../lib/styledComponents';
import Logo from '../assets/fec-logo.png';

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    productInfo,
    productMeta,
    productId,
    relatedProducts,
    productStyles,
    productQuestions,
    productStars,
    productReviews,
  } = useSelector((state) => state.product);

  const { reviewList } = useSelector((state) => state.reviews);
  const { isDarkMode } = useSelector((state) => state.productPage);
  const dispatch = useDispatch();

  const calculateTotalRatings = (ratings) => {
    return ratings.reduce((acc, rating) => {
      acc += Number(rating);
      return acc;
    }, 0);
  };

  const calculateStars = (ratings, totalRatings) => {
    const avgRating = ratings.reduce((acc, rating, index) => {
      acc += Number(rating) * (index + 1);
      return acc;
    }, 0);
    return avgRating / totalRatings;
  };

  const calculateRecommendedAvg = (recommendations) => {
    const totalRecommendations =
      Number(recommendations.false) + Number(recommendations.true);
    return Math.round(
      (Number(recommendations.true) / totalRecommendations) * 100,
    );
  };

  const getStarsAndRecommendations = async (
    metaRatings,
    metaRecommendations,
  ) => {
    try {
      const ratings = await Object.values(metaRatings);
      const totalRatings = await calculateTotalRatings(ratings);
      const starRating = await calculateStars(ratings, totalRatings);
      const recommendedAvg = await calculateRecommendedAvg(metaRecommendations);
      return Promise.resolve({
        ratingAvg: Math.round(starRating * 10) / 10,
        recommendedAvg,
        totalRatings,
      });
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  };

  useEffect(() => {
    dispatch(getRelatedProducts(productId));
    dispatch(getProductInfo({ url: `/products/${productId}` }));
    dispatch(
      getProductMeta({
        url: '/reviews/meta',
        params: { product_id: productId },
      }),
    );
    dispatch(getProductStyles({ url: `/products/${productId}/styles` }));
    dispatch(
      getProductReviews({
        url: '/reviews',
        params: { product_id: productId, count: 6969 },
      }),
    );
    dispatch(
      getProductQuestions({
        url: '/qa/questions',
        params: { product_id: productId, count: 6969 },
      }),
    );
    setSearchParams(`product_id=${productId}`);
  }, [productId]);

  useEffect(() => {
    if (Object.values(productMeta).length > 0) {
      getStarsAndRecommendations(
        productMeta.ratings,
        productMeta.recommended,
      ).then((result) => {
        dispatch(updateProductStars(result.ratingAvg));
        dispatch(updateProductRecommended(result.recommendedAvg));
        dispatch(updateProductTotalRatings(result.totalRatings));
      });
    }
  }, [productMeta]);

  useEffect(() => {
    if (reviewList.allReviews.length > 0) {
      dispatch(updateProductTotalReviews(reviewList.allReviews.length));
    }
  }, [reviewList]);

  useEffect(() => {
    document.getElementById('root').style.backgroundColor = isDarkMode
      ? '#242526'
      : 'white';
    document.documentElement.style.backgroundColor = isDarkMode
      ? '#242526'
      : 'white';
  }, [isDarkMode]);

  // if (Object.keys(relatedProducts).length > 0) {
  //   console.log('product info', productInfo);
  //   console.log('product meta', productMeta);
  //   console.log('related products', relatedProducts);
  //   console.log('product styles', productStyles);
  //   console.log('product questions', productQuestions);
  //   console.log('product reviews', productReviews);
  // }

  return (
    <AppDiv data-testid="app-1" isDarkMode={isDarkMode}>
      <Wrapper isDarkMode={isDarkMode}>
        <img id="app-logo" src={Logo} alt="TechStyles" />
      </Wrapper>
      <Overview />
      <RelatedProducts />
      <QA />
      <Reviews />
      <Footer />
    </AppDiv>
  );
};

export default App;
