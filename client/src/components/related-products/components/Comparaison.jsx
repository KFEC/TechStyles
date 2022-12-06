import React from 'react';

import {
  ModalContent,
  CloseModalButton,
} from '../lib/styledComponents';

const Comparaison = ({ setOpenModal }) => {
  return (
    <ModalContent>
      Comparing
      <CloseModalButton onClick={() => setOpenModal(false)}>X</CloseModalButton>
      <p>size</p>
      <p>width</p>
      <p>comfort</p>
      <p>quality</p>
      <p>length</p>
      <p>fit</p>
    </ModalContent>
  );
};

export default Comparaison;