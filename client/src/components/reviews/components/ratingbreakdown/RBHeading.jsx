import React from 'react';
import { Div } from '../../../../lib/styledComponents';

const RBHeading = () => {

  return (
    <Div>
      Rating Breakdown Heading
      <h2 style={{ margin: 0 }}>{Math.round(1.5423 * 10) / 10}</h2>
      <div className="Stars" style={{ '--rating': 1.5423 }} />
    </Div>
  );
};

export default RBHeading;