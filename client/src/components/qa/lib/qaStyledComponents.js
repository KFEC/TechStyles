import styled from 'styled-components';

const FormModal = styled.div`
  display: ${(props) => props.changeDisplay ? 'grid' : 'none'};
  z-index: 5;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: 90%;
  overflow: auto;
  background-color: rgb(0, 0, 0, 0.4);
  margin: auto;
`;

const FormModalContent = styled.div`
  background-color: ${(props) => props.isDarkMode ? '#242526' : 'white'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: fit-content;
  margin: 2em;
  font-family: 'Work Sans', sans-serif;
  font-size: 14px;
  font-weight: 300;
  padding: 2em;
`;

const FormPopUpModalContent = styled.div`
  background-color: ${(props) => props.isDarkMode ? '#242526' : 'white'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: fit-content;
  margin: 2em;
  font-family: 'Work Sans', sans-serif;
  font-size: 14px;
  font-weight: 300;
  padding: 2em;
`;

export {
  FormModal,
  FormModalContent,
  FormPopUpModalContent,
};