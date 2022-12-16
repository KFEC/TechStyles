import React, { useState, useRef } from 'react';
import {
  IoIosArrowBack, IoIosArrowForward,
} from 'react-icons/io';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard.jsx';
import {
  RelatedProductContainer,
} from '../lib/styledComponents';

const RelatedProductsList = () => {
  const {
    productId,
    productInfo,
    productMeta,
    productStyles,
    relatedProducts,
  } = useSelector((state) => state.product);
  const numberOfCards = relatedProducts.length;
  // property to move the cards' slide
  const [direction, setDirection] = useState(0);
  const [property, setProperty] = useState(0);
  // go to next card
  const nextProperty = () => {
    setProperty(property + 1);
    setDirection(true);
  };
  // go to previous card
  const prevProperty = () => {
    const newNumber = property - 1;
    setProperty(property - 1);
    setDirection(false);
  };
  return (
    <div className="relatedProductContainer" style={{ marginBottom: '50px' }}>
      <div style={{
        fontFamily: 'Tenor Sans', marginBottom: '5px', fontSize: '2em', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '0.5em',
      }}
      >
        Related Products & Your Outfit
      </div>
      <div className="related-product-list">
        <div className="cards-slider">
          <div className="cards-slider-wrapper">
            {relatedProducts?.map((product, idx) => {
              return (
                <ProductCard
                  className="card"
                  idx={idx}
                  key={Math.random(69 * idx) * 3}
                  product={product}
                  setProperty={setProperty}
                  property={property}
                  direction={direction}
                  setDirection={setDirection}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="buttons"
        style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '0.5em',
        }}
      >
        { numberOfCards < 6 || property === 0
          ? (
            <IoIosArrowBack style={{ fontSize: '2em', color: '#A3A3A3' }} />
          )
          // ? <div className="buttonLeft"> </div>
          : (
            <IoIosArrowBack
              onClick={prevProperty}
              type="button"
              style={{
                cursor: 'pointer', fontSize: '2em',
              }}
            />
          ) }
        { numberOfCards < 6 || (numberOfCards - 5) === property
          ? (
            <IoIosArrowForward style={{ position: 'relative', fontSize: '2em', color: '#A3A3A3' }} />
          )
          : (
            <IoIosArrowForward
              onClick={nextProperty}
              type="button"
              style={{
                fontSize: '2em', cursor: 'pointer',
              }}
            />
          ) }
      </div>
    </div>
  );
};

export default RelatedProductsList;
