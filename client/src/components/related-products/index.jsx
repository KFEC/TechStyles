import React, { useEffect, useState } from 'react';

import { Div } from './lib/styledComponents';
import RelatedProductList from './components/RelatedProductList.jsx';
import YourOutfit from './components/YourOutfit.jsx';
import { getData } from '../../lib/apiRoutes.js';

const RelatedProducts = () => {
  // updates current product id from overview component product
  const [currentProductId, setCurrentProductId] = useState('40344');
  // updates related product ids
  const [relatedProductIds, setRelatedProductIds] = useState([]);
  useEffect(() => {
    // get related product ids
    getData(`/products/${currentProductId}/related`)
      .then((result) => {
        console.log('related products', result.data);
        setRelatedProductIds([...result.data]);
      });
    // getData(`/products/${relatedProductIds[0]}`)
    //   .then((result) => {
    //     console.log('product: ', result.data.name);
    //   })
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <Div>
      I am Related Products
      <RelatedProductList />
      <YourOutfit />
    </Div>
  );
};


export default RelatedProducts;