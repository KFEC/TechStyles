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

export {
  Button,
  Wrapper,
  Div,
};