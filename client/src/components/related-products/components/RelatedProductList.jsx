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
  const numberOfCards = relatedProducts.length;
  const [property, setProperty] = useState(0);
  const nextProperty = () => {
    setProperty(property + 1);
  };
  const prevProperty = () => {
    const newNumber = property - 1;
    setProperty(property - 1);
  };
  return (
    <div className="related-product-list">
      { numberOfCards < 5 || property === 0
        ? (
          <IoIosArrowBack
            type="button"
            disabled="true"
            style={{
              opacity: '0', top: '45%', left: '45%', cursor: 'pointer', margin: 'auto', zIndex: '2', fontSize: '2em',
            }}
          />
        )
        : (
          <IoIosArrowBack
            onClick={prevProperty}
            type="button"
            style={{
              top: '45%', left: '45%', cursor: 'pointer', margin: 'auto', zIndex: '2', fontSize: '2em',
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
                key={Math.random(69 * idx) * 3}
                product={product}
                setOpenModal={setOpenModal}
                setProperty={setProperty}
                property={property}
              />
            );
          })}
        </div>
      </div>
      { numberOfCards < 5 || (numberOfCards - 4) === property
        ? (
          <IoIosArrowForward
            type="button"
            disabled="true"
            style={{
              opacity: '0', margin: 'auto', zIndex: '2', fontSize: '2em',
            }}
          />
        ) : (
          <IoIosArrowForward
            onClick={nextProperty}
            type="button"
            style={{
              margin: 'auto', zIndex: '2', fontSize: '2em',
            }}
          />
        )}
    </div>
  );

};

export default RelatedProductsList;