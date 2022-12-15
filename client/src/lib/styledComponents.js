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
    background-color: ${(props) => props.isDarkMode ? 'rgba(83, 83, 83, 0.7)' : 'white'};
    border-color: rgba(0, 0, 0, 0.19);
  };
`;

const CartButton = styled.button`
  color: ${(props) => props.isDarkMode ? 'white' : 'black'};
  font-family: 'Work Sans', sans-serif;
  font-size: 14px;
  background-color: rgb(60, 74, 118, 0.3);
  border: 1px solid #DFDFDF;
  border-radius: 16px;
  box-sizing: border-box;
  justify-content: center;
  line-height: 22px;
  max-width: 100%;
  padding: 10px 18px;
  text-decoration: none;
  transition: all .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  &:hover {
    background-color: ${(props) => props.isDarkMode ? 'rgba(83, 83, 83, 0.7)' : 'white'};
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
  color: ${(props) => props.isDarkMode ? '#88AED0' : '#88AED0'};
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
  border: 2px none black;
`;
const ContactDiv = styled.div`
  color: ${(props) => props.isDarkMode ? 'white' : '#242526'};
  background-color: ${(props) => props.isDarkMode ? '#242526' : 'white'};
  display: flex;
  flex-direction: column;
  margin: 1em;
  padding: 0.25em;
  border: 2px none black;
`;

const Div = styled.div`
  margin: 0.25em;
  padding: 2em;
  border: 2px none black;
  width: 85%;
`;

const Wrapper = styled.section`
  background-color: ${(props) => props.isDarkMode ? 'rgb(180, 243, 243, 0.5)' : 'rgb(33, 76, 119, 0.2)'};
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: ${(props) => props.changeDisplay ? 'flex' : 'none'};
  position: fixed;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  z-index: 10;

  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0, 0.4);
`;

const SizeGuideModal = styled.div`
  display: ${(props) => props.changeDisplay ? 'flex' : 'none'};
  position: fixed;
  left: 30%;
  top: 20%;
  align-items: center;
  justify-content: center;
  z-index: 10;

  width: fit-content;
  height: fit-content;
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

  width: 70%;
  height: 70%;
  width: 100%;
  height: 950px;
  overflow: auto;
  background-color: rgb(0, 0, 0, 0.9);
`;

const ModalContent = styled.div`
  background-color: ${(props) => props.isDarkMode ? '#242526' : 'white'};
  margin: 15% auto;
  paddding: 5em;
  border: 1em solid #888;
  width: object-fit;
  height: object-fit;

`;

const SocialMediaModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 10% auto;
  width: 500px;
  height: 500px;
`;

const SizeGuideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 10% auto;
  width: fit-content;
  height: fit-content;
  margin: 15px;
`;

const ExpandedViewModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  paddding: 5em;
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

const FormStars = styled.span`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Stars = styled.span`
  --star-size: 2em;
  --star-color: rgba(173, 173, 173, 0.685);
  --star-background: rgb(97, 113, 142);
  --percent: calc(var(--rating) / 5 * 100%);
  display: inline-block;
  font-size: var(--star-size);
  font-family: Times;
  line-height: 1;

  &:before {
    content: '★★★★★';
    letter-spacing: 1px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export {
  Button,
  Wrapper,
  AppDiv,
  ContactDiv,
  Div,
  Modal,
  SocialMediaModal,
  SizeGuideModal,
  ExpandedViewModal,
  ModalContent,
  SocialMediaModalContent,
  SizeGuideContent,
  ExpandedViewModalContent,
  CloseModalButton,
  Card,
  FormStars,
  HelpfulButton,
  ReportButton,
  ExtrasButton,
  CartButton,
  Stars,
};
