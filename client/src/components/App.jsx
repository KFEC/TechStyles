import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getProductInfo, getProductMeta, getRelatedProducts, getProductStyles,
  getProductQuestions,
} from '../actions';
import Overview from './overview/index.jsx';
import RelatedProducts from './related-products/index.jsx';
import QA from './qa/index.jsx';
import Reviews from './Reviews/index.jsx';
import { Wrapper, Div } from '../lib/styledComponents';

const App = () => {

  const {
    productInfo, productMeta, productId, relatedProducts,
    productStyles, productQuestions,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useMemo(() => dispatch(getProductInfo({ url: `/products/${productId}` })), []);
  useMemo(() => dispatch(getProductMeta({ url: '/reviews/meta', params: { product_id: productId } })), []);
  useMemo(() => dispatch(getRelatedProducts(productId)), []);
  useMemo(() => dispatch(getProductStyles({ url: `/products/${productId}/styles` })), []);
  useMemo(() => dispatch(getProductQuestions({ url: '/qa/questions', params: { product_id: productId, count: 999 } })), []);

  console.log('product info', productInfo);
  console.log('product meta', productMeta);
  console.log('related products', relatedProducts);
  console.log('product styles', productStyles);
  console.log('product questions', productQuestions);

  return (
    <Div data-testid="app-1">
      <Wrapper><h1>TechStyles</h1></Wrapper>
      <Overview />
      <RelatedProducts />
      <QA />
      <Reviews />
    </Div>
  );
};

export default App;