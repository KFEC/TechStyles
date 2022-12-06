import React, { useState, useEffect } from 'react';
import { Div } from '../../../../lib/styledComponents';
import { getData } from '../../../../lib';

const PBCharacteristics = ({ product }) => {

  const [characteristics, setCharacteristics] = useState();

  // useEffect(() => {
  //   getData('/reviews/meta', {
  //     // count: 500,
  //     product_id: product,
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //       setCharacteristics(response.data.characteristics);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);
  return (
    <Div>
      Product Breakdown Stats

    </Div>
  );
};

export default PBCharacteristics;