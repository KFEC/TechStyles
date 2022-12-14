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
  const [property, setProperty] = useState(0);
  // go to next card
  const nextProperty = () => {
    setProperty(property + 1);
  };
  // go to previous card
  const prevProperty = () => {
    const newNumber = property - 1;
    setProperty(property - 1);
  };
  return (
    <div className="relatedProductContainer">
      <div>Related Products</div>
      <div className="buttons">
        { numberOfCards < 5 || property === 0
          ? <div className="buttonLeft"> </div>
          : (
            <IoIosArrowBack
              onClick={prevProperty}
              type="button"
              style={{
                cursor: 'pointer', fontSize: '2em',
              }}
            />
          ) }
        { numberOfCards < 5 || (numberOfCards - 4) === property
          ? <div className="buttonRight" style={{ position: 'relative', left: '100px' }}> </div>
          : (
            <IoIosArrowForward
              onClick={nextProperty}
              type="button"
              style={{
                fontSize: '2em', cursor: 'pointer',
              }}
            />
          )}
      </div>
      <div className="related-product-list">
        <div className="cards-slider">
          <div className="cards-slider-wrapper" style={{ transform: `translateX(-${property * (100 / numberOfCards)}%)` }}>
            {relatedProducts?.map((product, idx) => {
              return (
                <ProductCard
                  className="card"
                  idx={idx}
                  key={Math.random(69 * idx) * 3}
                  product={product}
                  setProperty={setProperty}
                  property={property}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProductsList;
