import React, { useState, useEffect } from 'react';

const AddToCart = ({ sku }) => {
  console.log('i am sku ', sku);
  // quantity is dependent on size selection
  const [selectSize, setSelectSize] = useState('');
  const [selectQty, setSelectQty] = useState(0);

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
    //         return <option value={`${unit.size}`} key={Math.random(index * 54) * 10}>{`${unit.size}`}</option>;
    //       })}
    //     </select>
    //   </div>
    // );
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

  const renderBtn = () => {
    return (
      <div>
        <button type="button">Add To Cart</button>
      </div>
    );
  };

  return (
    <div id="add-to-cart">
      {/* option values will be based on items */}
      {sku.length > 0 ? renderSize() : null}
      {renderQty()}
    </div>
  );
};

export default AddToCart;