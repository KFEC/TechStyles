import React, { useState } from 'react';
import {
  IoIosArrowBack, IoIosArrowForward,
} from 'react-icons/io';
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
  console.log(relatedProducts);
  const numberOfCards = relatedProducts.length;
  const [property, setProperty] = useState(0);
  const nextProperty = () => {
    setProperty(property + 1);
  };
  const prevProperty = () => {
    const newNumber = property - 1;
    setProperty(property - 1);
  };
  // const number = 20;

  // ${property * (100 / relatedProducts.length)}
  return (
    <div className="related-product-list">
      {/* <div>
        property#
        {property}
      </div> */}
      {/* <button
        onClick={nextProperty}
        type="button"
        className="left-arrow"
      >
        ←
      </button>
      <button
        onClick={prevProperty}
        type="button"
        className="right-arrow"
      >
        →
      </button> */}
      { numberOfCards < 5 || numberOfCards - 4 === property ? null : (
        <IoIosArrowBack
          onClick={nextProperty}
          type="button"
          style={{
            margin: 'auto', zIndex: '2', fontSize: '2em', border: '3px dashed rgb(89, 0, 255)',
          }}
        />
      ) }
      <div className="cards-slider">
        <div className="cards-slider-wrapper" style={{ transform: `translateX(-${property * (100 / numberOfCards)}%)` }}>
          {relatedProducts?.map((product, idx) => {
            return (
              <ProductCard
                className="card"
                idx={idx}
                key={product.productDetails.id}
                product={product}
                setOpenModal={setOpenModal}
                setProperty={setProperty}
                property={property}
              />
            );
          })}
        </div>
      </div>
      { property === 0 || numberOfCards < 5 ? null : (
        <IoIosArrowForward
          onClick={prevProperty}
          type="button"
          style={{
            margin: 'auto', zIndex: '2', fontSize: '2em', border: '3px dashed rgb(89, 0, 255)',
          }}
        />
      )}
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