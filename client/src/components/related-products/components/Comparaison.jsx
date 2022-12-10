import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../lib/myStyles.css';

import {
  ModalContent,
  CloseModalButton,
} from '../lib/styledComponents';

/*
The comparison modal window will pull up and compare the characteristics present for each product.
The modal should be titled “Comparing”. The characteristics to be compared are the same as those
which appear on the Overview module for each product separately.
In the comparison modal, all characteristics for both products will be
combined and reconciled against one another.
*/
const Comparaison = ({
  setOpenModal,
  comparedProductDetails,
  comparedProductChars,
}) => {
  const {
    productId,
    productInfo,
    productMeta,
  } = useSelector((state) => state.product);
  // map
  // need chars of the current product and the related product
  // set an array of chars (compare both products)
  // got through the data of each product
  // console.log(Object.keys(mainProductChars));
  return (
    <ModalContent>
      <CloseModalButton onClick={() => setOpenModal(false)}>x</CloseModalButton>
      <table className="primary">
        <caption>Comparing</caption>
        <thead>
          <tr>
            <th>{productInfo.name}</th>
            <th> </th>
            <th>{comparedProductDetails.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>leather</td>
            <td>material</td>
            <td>fabrics</td>
          </tr>
        </tbody>
      </table>
    </ModalContent>
  );
};

export default Comparaison;