/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import '../lib/myStyles.css';

const Comparison = ({
  setOpenModal,
  comparedProductDetails,
  comparedProductChars,
  openModal,
}) => {
  const {
    productId,
    productInfo,
    productMeta,
  } = useSelector((state) => state.product);
  const [mainProductChars, setMainProductChars] = useState();
  const { isDarkMode } = useSelector((state) => state.productPage);
  const featuresArray = [...comparedProductDetails.features];
  const currentProductFeatures = [...productInfo.features];
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
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="modal-wrapper"
      onClick={() => setOpenModal(false)}
      style={{ '--modal-display': openModal ? 'block' : 'none' }}
    >
      <div className="modal-contentTest" style={modalStyle}>
        <AiOutlineClose onClick={() => setOpenModal(false)} style={{ cursor: 'pointer' }} />
        <table className="table">
          <caption style={{
            fontFamily: 'Work Sans, sans-serif',
            fontSize: '20px',
            fontWeight: '300',
            marginBottom: '10px',
          }}
          >
            COMPARISON
          </caption>
          <thead>
            <tr className="productName" style={{ textDecoration: 'underline' }}>
              <th>{productInfo.name}</th>
              <th> </th>
              <th>{comparedProductDetails.name}</th>
            </tr>
          </thead>
          <tbody>
            {currentProductFeatures.map((feature, idx) => (
              <tr key={Math.random(69 * idx) * 3}>
                {feature.value === undefined || feature.value === null
                  ? <td><RxCross2 /></td> : <td>{feature.value}</td>}
                <td style={{ fontWeight: 'bold' }}>{feature.feature}</td>
                {feature.value1 === undefined || feature.value1 === null
                  ? <td><RxCross2 /></td> : <td>{feature.value1}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;
