import React from 'react';
import '../lib/myStyles.css';

import {
  ModalContent,
  CloseModalButton,
} from '../lib/styledComponents';

const Comparaison = ({ setOpenModal }) => {
  return (
    <ModalContent>
      Comparing
      <CloseModalButton onClick={() => setOpenModal(false)}>x</CloseModalButton>
      <table className="primary">
        <tbody>
          <tr>
            <th>Current Product name</th>
            <th> </th>
            <th>Compared Product name</th>
          </tr>
          <tr>
            <td>leather</td>
            <td>material</td>
            <td>fabrics</td>
          </tr>
          <tr>
            <td>expensive</td>
            <td>price</td>
            <td>cheap</td>
          </tr>
        </tbody>
      </table>
    </ModalContent>
  );
};

export default Comparaison;