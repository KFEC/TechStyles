import styled from 'styled-components';

const StyleSelector = styled.img`
  border: ${(props) => props.isDarkMode ? '1px solid #242526' : '1px solid white'};
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin: 2px;
  object-fit: cover;
`;

export {
  StyleSelector,
};