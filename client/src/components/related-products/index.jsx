import React from 'react';
import { Div } from '../../lib/styledComponents';
import ProductCard from './components/ProductCard.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import RelatedProductsList from './components/RelatedProductsList.jsx';
import MyOutfit from './components/MyOutfit.jsx';
import {
  getData, postData, patchData, putData, postAndGet
} from '../../lib/apiRoutes.js';


const RelatedProducts = () => {
  console.log(getData('/products', {
    headers: {
      Authorization: process.env.API_TOKEN,
    },
  })
    .then((result) => console.log(result.data.results))
    .catch((err) => console.log('failed to get data, error: ', err)));
  return (
    <Div>I am RelatedProducts</Div>
  );
};


export default RelatedProducts;