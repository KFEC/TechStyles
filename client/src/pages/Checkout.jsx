/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

const Checkout = () => {
  // const [formState, setFormState] = useState('');
  // const [info, setInfo] = useState('');
  // const [shipping, setShipping] = useState('');
  // const [payment, setPayment] = useState('');
  const cartLocal = JSON.parse(localStorage.getItem('cart'));
  const totalPrice = cartLocal.reduce((acc, item) => {
    const price = Number(item.itemPrice);
    acc += price;
    return acc;
  }, 0);

  const [cart, setCart] = useState(cartLocal);

  const renderCart = () => {
    const handleRemove = (event) => {
      // localStorage.removeItem();
      const itemIndex = event.target.getAttribute('data-value');

      const newCart = cart.reduce((acc, item, index) => {
        if (index !== Number(itemIndex)) {
          acc.push(item);
        }
        return acc;
      }, []);

      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    };

    return (
      <div id="cart-items">
        {cart.map((item, index) => {
          return (
            <div id="item">
              <img
                src={item.img}
                style={{
                  height: '175px', width: '175px', objectFit: 'cover',
                }}
                alt=""
              />

              <div id="item-details">
                <div style={{ padding: '0 0 3px 0' }}>{item.itemName}</div>
                <div style={{ padding: '0 0 3px 0' }}>{`Size: ${item.size}`}</div>
                <div>{`Qty: ${item.quantity}`}</div>
              </div>

              <div id="item-price">
                <div>{`$${item.itemPrice}`}</div>
              </div>

              <div onClick={(event) => { handleRemove(event); }}>
                <IoIosClose data-value={index} style={{ fontSize: '1.3em', backgroundColor: 'rgba(218, 223, 225, 0.6)' }} />
              </div>

            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div id="checkout-container">
      <div id="checkout-content">
        <div id="shopping-cart-title">Shopping Cart</div>
        <div>{`[${cart.length} items]`}</div>
        {cart.length > 0 ? renderCart() : <div>Your cart is empty</div>}
      </div>
      <div id="checkout-btn">
        <button id="actual-checkout-btn" type="button">Proceed to checkout</button>
        {cart.length > 0 ? <div style={{ padding: '1em 0 1em 0' }}>{`Subtotal (${cart.length}): $${totalPrice + 6.99}`}</div> : null}
        <div id="order-summary">
          <div>ORDER SUMMARY</div>

          <div id="summary-price">
            <div>
              Total Price
            </div>
            <div>
              {`$${totalPrice}.00`}
            </div>
          </div>

          <div id="summary-delivery">
            <div>
              Delivery
            </div>
            <div>
              $6.99
            </div>
          </div>

          <div id="summary-tax">
            <div>
              Sales Tax
            </div>
            <div>
              --
            </div>
          </div>

          <div id="paypal">
            {`Pay in 4-interest free payments of $${((totalPrice + 6.99) / 4).toFixed(2)} with PayPal`}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
