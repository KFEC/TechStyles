import React, { useEffect } from 'react';
import { Div } from '../../../../lib/styledComponents';
import PBHeading from './PBHeading.jsx';
import PBCharacteristics from './PBCharacteristics.jsx';
import { getData } from '../../../../lib';

const ProductBreakdown = () => {

  // useEffect(() => {
  //   getData('/products')
  //     .then((response) => console.log(response.data))
  //     .catch((err) => console.error(err));
  // }, []);


  return (
    <Div>
      Product Breakdown
      <PBHeading />
      <PBCharacteristics product={40348} />
    </Div>
  );
};

export default ProductBreakdown;