import styled from 'styled-components';

export const Div = styled.div``;

export const PicModal = styled.div`
  display: ${(props) => props.isExpanded ? 'flex' : 'none'};
  position: fixed;
  justify-content: center;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, .75);
`;

export const PicModalContent = styled.img`
  z-index: 6;
  align-self: center;
`;

export const ReviewFormModal = styled.div`
  display: ${(props) => props.changeDisplay ? 'flex' : 'none'};
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4);
`;

export const ReviewFormModalContent = styled.div`
  background-color: ${(props) => props.isDarkMode ? '#242526' : 'white'};
  align-self: center;
  z-index: 999;
  width: 35%;
  top: 50%;
  max-height: 85%;
  margin: 15% auto;
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  padding-bottom: 2em;
  overflow-y: auto;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  obj-fit: cover;
`;

export const SelectContainer = styled.div`
  grid-area: sort;
  font-size: 1em;
  min-height: 4em;
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  color: ${(props) => props.isDarkMode ? 'white' : 'black'};
  font-size: 1em;
  font-weight: 400;
  font-style: italic;
  text-decoration: underline;
  background-color: transparent;
  border-color: transparent;
`;

export const Option = styled.option`
  color: black;
`;

export const QueryInput = styled.input`
  align-self: center;
  background-color: none;
  font-family: Work Sans, sans-serif;
  font-size: 16px;
  width: 18em;
  margin: 0.5em;
  padding: 0.2em;
`;

export const ClearQueryButton = styled.button`
  color: ${(props) => props.isDarkMode ? 'white' : 'black'};
  grid-area: clearbtn;
  background-color: rgb(60, 74, 118, 0.3);
  font-family: 'Work Sans', sans-serif;
  font-size: 14px;
  padding: 5px 9px;
  margin: 1em;
  border: 1.5px solid #DFDFDF;
  border-radius: 16px;
  box-sizing: border-box;
  border-radius: 3px;
  line-height: 22px;
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

export const RatingsBarContainer = styled.div`
  font-size: 1.3em;
  margin: 1em auto;
  overflow: hidden;
`;

export const RatingsBar = styled.div`
  width: 85%;
  height: 1.7em;
  position: relative;
  background: var(--bar-background);
  border-radius: 0.4em;
  text-transform: uppercase;
  margin: 0.5em auto;
  &:hover {
    background: ${(props) => props.isDarkMode ? '#949494' : '#d1d1d1'};
  }
`;

export const RatingsBarFill = styled.div`
  width: calc(var(--percent) * 1%);
  animation: animate-breakdown 3s;
  height: 1.7em;
  position: relative;
  border-radius: 0.4em;
  background-color: var(--bar-color);
`;

export const RatingsNum = styled.span`
  font-size: 0.8em;
  z-index: 1;
  position: absolute;
  margin-top: 0.6em;
  margin-left: 1.3em;
  text-shadow: none;
`;

export const RatingsPercent = styled.span`
  z-index: 2;
  position: relative;
  margin-right: 0.8em;
  margin-top: 0.6em;
  float: right;
  text-shadow: none;
  font-size: 0.8em;
`;

export const RatingsContainer = styled.div`
  display: grid;
  margin-left: 2em;
`;

export const RatingsAverage = styled.div`
  justify-self: left;
  font-size: 2em;
  font-weight: 500;
`;

export const RatingsRecommended = styled.div`
  font-weight: italic;
  font-size: 1em;
`;