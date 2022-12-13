import styled from 'styled-components';

const Button = styled.button`
  background-color: rgb(60, 74, 118, 0.3);
  font-family: 'Work Sans', sans-serif;
  font-size: 14px;
  margin: 1em;
  border: 1.5px solid #DFDFDF;
  border-radius: 16px;
  box-sizing: border-box;
  color: #000000;
  border-radius: 3px;
  line-height: 22px;
  padding: 5px 9px;
  text-decoration: none;
  transition: all .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  touch-action: manipulation;
  &:hover {
    background-color: #FFFFFF;
    border-color: rgba(0, 0, 0, 0.19);
  };
`;

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin: 1em;
  padding: 0.25em;
  border: 2px none black;
`;

const Div = styled.div`
  background-color: #fff;
  margin: 0.25em;
  padding: 2em;
  border: 2px none black;
  width: 85%;
  background-color: #fff;
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(33, 76, 119, 0.2);
  width: 100%
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

const SocialMediaModal = styled.div`
  display: ${(props) => props.changeDisplay ? 'grid' : 'none'};
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 5;

  width: 50%;
  height: 50%;
  overflow: auto;
  background-color: rgb(0, 0, 0, 0.4);
`;

const ExpandedViewModal = styled.div`
  display: ${(props) => props.changeDisplay ? 'flex' : 'none'};
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  z-index: 10;

  width: 70%;
  height: 70%;
  width: 950px;
  height: 950px;
  overflow: auto;
  background-color: rgb(0, 0, 0, 0.9);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  paddding: 5em;
  border: 1em solid #888;
  width: 35%;
`;

const SocialMediaModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  paddding: 5em;
  border: 2em solid purple;
  width: 75%;
  height: 75%;
`;

const ExpandedViewModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  paddding: 0.5em;

  width: 100%;
  height: 100%;
`;

const CloseModalButton = styled.button`
  color: #aaa;
  float: right;
  font-size: 2em;
  font-weight: bold;
`;
const Card = styled.section`
  width: 150px;
  height: 220px;
  background: whitesmoke;
  margin: 0.25em;
  padding: 0.25em;
  border: 2px solid black;
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
  AppDiv,
  Div,
  Modal,
  SocialMediaModal,
  ExpandedViewModal,
  ModalContent,
  SocialMediaModalContent,
  ExpandedViewModalContent,
  CloseModalButton,
  Card,
  Stars,
};
