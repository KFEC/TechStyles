import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard.jsx';
import {
  RelatedProductContainer,
} from '../lib/styledComponents';

const RelatedProductsList = ({ setOpenModal, productData, currentProduct }) => {
  const {
    productId,
    productInfo,
    productMeta,
    productStyles,
    relatedProducts,
  } = useSelector((state) => state.product);

  /*
  function clickRight
  function clickLeft
  buttons next and previous
  change index +1, -1
  const [index, setIndex] = useState()
  container
  cards
  */

  return (
    <div className="cardsContainer">
      <div className="cards-slider-wrapper">
        <button type="button" className="left-arrow"> ← </button>
        {relatedProducts?.map((product, idx) => {
          return (
            <ProductCard
              className="card"
              key={product.productDetails.id}
              product={product}
              setOpenModal={setOpenModal}
            />
          );
        })}
      </div>
    </div>
    // <Div data-testid="RelatedProductsList">
    //   Related Product List
    //   <RelatedProductContainer>
    //     {relatedProducts?.map((product, idx) => {
    //       return (
    //         <ProductCard
    //           key={Math.random(69 * idx) * 3}
    //           setOpenModal={setOpenModal}
    //           product={product}
    //         />
    //       );
    //     })}
    //   </RelatedProductContainer>
    // </Div>
  );
};

export default RelatedProductsList;