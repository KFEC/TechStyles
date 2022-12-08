/* eslint-disable prefer-spread */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';

const AddToCart = ({
  sku, selectSize, setSelectSize, selectQty, setSelectQty,
}) => {
  // console.log('i am sku ', sku[0]?.quantity, 'qty ', selectQty, 'size ', selectSize);

  const defaultQty = (num) => {
    return Array.apply(null, Array(num)).map((x, i) => { return i; });
  };

  // useEffect(() => {
  //   setSelectQty(8);
  // }, [selectSize]);

  const handleChange = (event) => {
    const objectify = JSON.parse(event.target.value);
    console.log('there has been a change', objectify);
    // setSelectSize(objectify.size);
    setSelectQty(objectify.quantity);

    // console.log(sku[event.target.value].size);
    // setSelectSize(sku[event.target.value].size);
    // setSelectQty(sku[event.target.value].quantity);

    setSelectSize(event.target.value);
    // setSelectQty();
  };

  const renderSize = () => {
    // return (
    //   <div>
    //     <select id="size-selector" value={selectSize} onChange={handleChange}>
    //       <option value="">Select Size</option>
    //       {sku.map((unit, index) => {
    //         return <option value={`${unit.size}`}
    //          key={Math.random(index * 54) * 10}>{`${unit.size}`}</option>;
    //       })}
    //     </select>
    //   </div>
    // );
    if (sku[0]?.quantity === null) {
      return (
        <div>
          <select disabled>
            <option>OUT OF STOCK</option>
          </select>
        </div>
      );
    }
    return (
      <div>
        <select id="size-selector" value={selectSize} onChange={handleChange}>
          <option value="">Select Size</option>
          {sku.map((unit, index) => {
            return <option value={`${JSON.stringify(unit)}`} key={Math.random(index * 54) * 10}>{`${unit.size}`}</option>;
          })}
        </select>
      </div>
    );
  };

  const renderQty = () => {
    if (selectQty === 0 || selectQty > 15) {
      return (
        <div>
          {/* {console.log('I am inside renderQty 1', selectQty)} */}
          <select id="qty-selector" disabled={selectSize.length < 1}>
            <option value="">--</option>
            {defaultQty(15).map((unit, index) => {
              if (index === 0 && selectSize.length > 1) {
                return <option selected value={`${index++}`} key={Math.random(index * 54) * 10}>{`${index++}`}</option>;
              }
              return <option value={`${index++}`} key={Math.random(index * 54) * 10}>{`${index++}`}</option>;
            })}
          </select>
        </div>
      );
    }
    return (
      <div>
        {/* {console.log('I am inside renderQty 2', selectQty)} */}
        <select id="qty-selector">
          <option value="">--</option>
          {defaultQty(selectQty).map((unit, index) => {
            if (index === 0) {
              return <option selected value={`${index++}`} key={Math.random(index * 54) * 10}>{`${index++}`}</option>;
            }
            return <option value={`${index++}`} key={Math.random(index * 54) * 10}>{`${index++}`}</option>;
          })}
        </select>
      </div>
    );
  };

  const handleClick = (event) => {
    if (selectSize.length === 0) {
      // (1) forcibly open the dropdown - BACKLOG
      // const targetDropDown = document.getElementById('size-selector');
      window.alert('Please select size');
    } else {
      console.log('You have added to cart');
    }
  };

  const renderBtn = () => {
    // onClick will add it into the user's cart -- do this later
    // (1) if 'select size' then onClick will open the dropdown with a
    // message that says to "Please select size"
    // (2) if there is no stock, then button should be hidden (CHECK)
    // (3) if both size and qty are selected, then add to cart
    if (sku[0]?.quantity === null) {
      return (
        <div />
      );
    }
    return (
      <div>
        <button type="button" onClick={(event) => { handleClick(event); }}>Add To Cart</button>
      </div>
    );
  };

  return (
    <div id="add-to-cart">
      {/* option values will be based on items */}
      <div className="dropdown">
        {sku.length > 0 ? renderSize() : null}
        {renderQty()}
      </div>
      {renderBtn()}
    </div>
  );
};

export default AddToCart;