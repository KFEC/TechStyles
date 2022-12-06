import React from 'react'

const AddToCart = () => {

  return (
    <div id="add-to-cart">
      {/* option values will be based on items */}

        <select id="size-selector">
        <option value="">Select Size</option>
        </select>


        <select id="qty-selector">
        <option value="">Quantity</option>
        </select>

        <button>Add To Cart</button>

    </div>
  )
}

export default AddToCart;