import styled from 'styled-components';

const Button = styled.button`
  color: ${(props) => props.isDarkMode ? 'white' : 'black'};
  background-color: rgb(60, 74, 118, 0.3);
  font-family: 'Work Sans', sans-serif;
  font-size: 14px;
  margin: 1em;
  border: 1.5px solid #DFDFDF;
  border-radius: 16px;
  box-sizing: border-box;
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
    background-color: ${(props) => props.isDarkMode ? '#242526' : 'white'};
    border-color: rgba(0, 0, 0, 0.19);
  };
`;

const HelpfulButton = styled.button`
  color: ${(props) => props.isDarkMode ? 'white' : 'black'};
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    color: ${(props) => props.isDarkMode ? '#88AED0' : '#88AED0'};
  }
`;

const ReportButton = styled.button`
  color: ${(props) => props.isDarkMode ? 'white' : 'black'};
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    color: ${(props) => props.isDarkMode ? 'darkred' : 'red'};
  }
`;

const ExtrasButton = styled.button`
color: ${(props) => props.isDarkMode ? 'white' : 'black'};
background: none;
border: none;
text-decoration: underline;
cursor: pointer;
font-size: 1em;
&:hover {
  color: ${(props) => props.isDarkMode ? 'black' : 'white'};
}
`;

const AppDiv = styled.div`
  color: ${(props) => props.isDarkMode ? 'white' : '#242526'};
  background-color: ${(props) => props.isDarkMode ? '#242526' : 'white'};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
  padding: 0.25em;
  border: 2px solid black;
`;

const Div = styled.div`
  margin: 0.25em;
  padding: 2em;
  border: 2px solid black;
  width: 85%;
`;

const Wrapper = styled.section`
  padding: 4em;
  background-color: #fff;
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
  text-align: center;
  z-index: 10;

  top: 10%;
  width: 80%;
  height: 80%;
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

const SocialMediaModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  paddding: 5em;
  border: 1em solid #888;
  width: 75%;
  height: 75%;
`;

const ExpandedViewModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  paddding: 5em;
  border: 2em solid white;
  width: 95%;
  height: 95%;
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
  HelpfulButton,
  ReportButton,
  ExtrasButton,
};
