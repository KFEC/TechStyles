import React from 'react';
import '../lib/myStyles.css';

import {
  ModalContent,
  CloseModalButton,
} from '../lib/styledComponents';

const Comparaison = ({ setOpenModal, comparedProduct }) => {
  return (
    <ModalContent>
      <CloseModalButton onClick={() => setOpenModal(false)}>x</CloseModalButton>
      <table className="primary">
        <caption>Comparing</caption>
        <thead>
          <tr>
            <th>Current Product name</th>
            <th> </th>
            <th>{comparedProduct.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>leather</td>
            <td>material</td>
            <td>fabrics</td>
          </tr>
          <tr>
            <td>0.00</td>
            <td>price</td>
            <td>{comparedProduct.default_price}</td>
          </tr>
        </tbody>
      </table>
    </ModalContent>
  );
};

export default Comparaison;