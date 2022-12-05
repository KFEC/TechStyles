import React from 'react';
import { Div } from '../../../../lib/styledComponents';
import RBHeading from './RBHeading.jsx';
import RBRender from './RBRender.jsx';

const RatingBreakdown = () => {

  return (
    <Div>
      Rating Breakdown
      <RBHeading />
      <RBRender />
    </Div>
  );
};

export default RatingBreakdown;