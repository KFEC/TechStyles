import React, { useState, useEffect } from 'react'
import {
  getData,
  postData,
  patchData,
  putData,
  postAndGet,
} from '../../../lib/apiRoutes.js'

const ProductInfo = ({ category, name, price, sale }) => {
  return (
    <div id="product-info">
      <div>{category}</div>
      <h4>{name.toUpperCase()}</h4>
      <h4>{price}</h4>
    </div>
  )
}

export default ProductInfo;

// GET /products to get all the product IDs
// mf the sale price is on the individual style?????