import React from 'react';
import { Div } from '../../../../lib/styledComponents';
import PBHeading from './PBHeading.jsx';
import PBCharacteristics from './PBCharacteristics.jsx';

const ProductBreakdown = () => {

  return (
    <Div>
      Product Breakdown
      <PBHeading />
      <PBCharacteristics />
    </Div>
  );
};

export default ProductBreakdown;