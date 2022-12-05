import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails.jsx';

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', {
      headers: {
        Authorization: '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',
      },
    })
      .then((results) => {
        console.log('results.data', results.data);
        setProducts(results.data[0]);
        console.log(products);
        console.log(results.data[0]);
      });
  }, []);
  return (
    // on click show the details of the product
    <div className="card">
      <h3>
        {/* ${products.name} */}
      </h3>
    </div>
  );
};

export default ProductCard;