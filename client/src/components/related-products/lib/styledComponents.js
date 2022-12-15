import styled from 'styled-components';

const ImageRelatedProduct = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  // z-index: 1;
  // position: relative;
`;

const RelatedProductContainer = styled.div`
  display: flex;
`;

const CloseModalButton = styled.button`
  color: #aaa;
  float: right;
  font-size: 2em;
  font-weight: bold;
`;

const ButtonAddItem = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

export {
  ButtonAddItem,
  CloseModalButton,
  ImageRelatedProduct,
  RelatedProductContainer,
};
