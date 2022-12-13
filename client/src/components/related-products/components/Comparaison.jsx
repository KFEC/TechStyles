import React, { useState } from 'react';
import {
  AiOutlineClose,
} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import '../lib/myStyles.css';

const Comparaison = ({
  setOpenModal,
  comparedProductDetails,
  comparedProductChars,
  rpl,
}) => {
  const {
    productId,
    productInfo,
    productMeta,
  } = useSelector((state) => state.product);
  const { isDarkMode } = useSelector((state) => state.productPage);
  const featuresArray = [...comparedProductDetails.features];
  const currentProductFeatures = [...productInfo.features];
  // console.log('rpl', rpl)
  for (let i = 0; i < comparedProductDetails.features.length; i += 1) {
    for (let j = 0; j < productInfo.features.length; j += 1) {
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
        const object = { feature: featuresArray[i].feature, value1: featuresArray[i].value };
        currentProductFeatures.push(object);
      }
    }
  }
  const modalStyle = { '--bg-color': isDarkMode ? '#303233' : '#FBF9F9' };
  return (
    <div className="modal-contentTest" style={modalStyle}>
      <AiOutlineClose type="button" onClick={() => setOpenModal(false)} />
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
            <tr key={Math.random(69 * idx) * 3}>
              {feature.value === undefined || feature.value === null
                ? <td>❌</td> : <td>{feature.value}</td>}
              <td>{feature.feature}</td>
              {feature.value1 === undefined || feature.value1 === null
                ? <td>❌</td> : <td>{feature.value1}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  /*
    original starts here
    <ModalContent>
<AiOutlineClose type="button" onClick={() => setOpenModal(false)} />
<table>
  <caption>Comparing</caption>
  <thead>
    <tr className="tableRow">
      <th>{productInfo.name}</th>
      <th> </th>
      <th>{comparedProductDetails.name}</th>
    </tr>
  </thead>
  <tbody>
    {currentProductFeatures.map((feature, idx) => (
      <tr key={Math.random(69 * idx) * 3} className="tableRow">
        {feature.value === undefined || feature.value === null
          ? <td>❌</td> : <td>{feature.value}</td>}
        <td>{feature.feature}</td>
        {feature.value1 === undefined || feature.value1 === null
          ? <td>❌</td> : <td>{feature.value1}</td>}
      </tr>
    ))}
  </tbody>
</table>
</ModalContent> */
  );
};

export default Comparaison;