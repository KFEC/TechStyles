import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../lib/myStyles.css';

import {
  ModalContent,
  CloseModalButton,
  ButtonFloatRight,
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

  // console.log('current product features: ', productInfo.features);
  // console.log('compared product features :', comparedProductDetails.features);

  const featuresArray = [...comparedProductDetails.features];
  const currentProductFeatures = [...productInfo.features];

  for (let i = 0; i < comparedProductDetails.features.length; i += 1) {
    for (let j = 0; j < productInfo.features.length; j += 1) {
      // console.log(featuresArray[i].feature, currentProductFeatures[i].feature);
      if (featuresArray[i].feature === currentProductFeatures[j].feature) {
        const object = {
          feature: featuresArray[i].feature,
          value: currentProductFeatures[j].value,
          value1: featuresArray[i].value,
        };
        currentProductFeatures.splice(i, 1, object);
        break;
      } else if (j === productInfo.features.length - 1
        && featuresArray[i].feature !== currentProductFeatures[j].feature) {
      //   // console.log(false);
        const object = { feature: featuresArray[i].feature, value1: featuresArray[i].value };
        currentProductFeatures.push(object);
      }
    }
  }

  console.log('current product features: ', currentProductFeatures);
  return (
    <ModalContent>
      <ButtonFloatRight onClick={() => setOpenModal(false)}>x</ButtonFloatRight>
      <table>
        <caption>Comparing</caption>
        <thead>
          <tr>
            <th>{productInfo.name}</th>
            <th> </th>
            <th>{comparedProductDetails.name}</th>
          </tr>
        </thead>
        <tbody>
          {currentProductFeatures.map((feature, idx) => (
            <tr>
              {feature.value === undefined
                ? <td> </td> : <td>{feature.value}</td>}
              <td>{feature.feature}</td>
              {feature.value1 === undefined
                ? <td> </td> : <td>{feature.value1}</td>}
            </tr>
          ))}

        </tbody>
      </table>
    </ModalContent>
  );
};

export default Comparaison;