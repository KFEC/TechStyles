import styled from 'styled-components';

export const Div = styled.div`
  background: whitesmoke;
  margin: 0.25em;
  padding: 0.25em;
  border: 2px solid black;
`;

export const ReviewsDiv = styled.div`
  background: grey;
  margin: 0.25em;
  padding: 0.25em;
  display: grid;
  grid-template-areas:
  'rb review'
  'pb review';
`;

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

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  obj-fit: cover;
`;