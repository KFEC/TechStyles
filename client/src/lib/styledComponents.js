import styled from 'styled-components';

const Button = styled.button`
  background: palevioletred;
  color: whitesmoke;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  };
`;

const Div = styled.div`
  background: whitesmoke;
  margin: 0.25em;
  padding: 0.25em;
  border: 2px solid black;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Modal = styled.div`
  display: ${(props) => props.changeDisplay ? 'grid' : 'none'};
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  paddding: 5em;
  border: 1em solid #888;
  width: 35%;
`;

const CloseModalButton = styled.button`
  color: #aaa;
  float: right;
  font-size: 2em;
  font-weight: bold;
`;

const Stars = styled.span`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export {
  Button,
  Wrapper,
  Div,
  Modal,
  ModalContent,
  CloseModalButton,
  Stars,
};