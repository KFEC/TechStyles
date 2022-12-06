import styled from 'styled-components';

const Div = styled.div`
  background: whitesmoke;
  margin: 0.25em;
  padding: 0.25em;
  border: 2px solid black;
`;

const ReviewsDiv = styled.div`
  background: grey;
  margin: 0.25em;
  padding: 0.25em;
  display: grid;
  grid-template-areas:
  'rb review'
  'pb review';
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export {
  ReviewsDiv,
  Div,
  Img,
};