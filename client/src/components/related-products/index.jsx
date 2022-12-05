import React from 'react';
import axios from 'axios';
import { Div } from '../../lib/styledComponents';
import ProductCard from './components/ProductCard.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import RelatedProductsList from './components/RelatedProductsList.jsx';
import MyOutfit from './components/MyOutfit.jsx';
import {
  getData, postData, patchData, putData, postAndGet
} from '../../lib/apiRoutes.js';



const RelatedProducts = () => {
  // console.log(
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', {
  //     headers: {
  //       Authorization: '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',
  //     },
  //   })
  //     .then((results) => console.log(results.data)),
  // );

  // console.log(getData('/products', {
  //   headers: {
  //     Authorization: process.env.API_TOKEN,
  //   },
  // }));

  return (
    <Div>
      <ProductCard />
    </Div>
  );
};


export default RelatedProducts;