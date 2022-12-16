/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoIosClose } from 'react-icons/io';
import {
  CheckoutDiv, Wrapper, Div, Button,
} from '../lib/styledComponents';
import Logo from '../assets/fec-logo.png';

const Checkout = () => {
  // const [formState, setFormState] = useState('');
  // const [info, setInfo] = useState('');
  // const [shipping, setShipping] = useState('');
  // const [payment, setPayment] = useState('');
  const { isDarkMode } = useSelector((state) => state.productPage);
  const cartLocal = JSON.parse(localStorage.getItem('cart')) || [];
  const totalPrice = cartLocal.reduce((acc, item) => {
    const price = Number(item.itemPrice * item.quantity);
    acc += price;
    return acc;
  }, 0);

  const totalQuantity = cartLocal.reduce((acc, item) => {
    const qty = Number(item.quantity);
    acc += qty;
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
            <div key={Math.random(index * 5) * 69} id="item" style={{ '--border-color': isDarkMode ? 'white' : 'black' }}>
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
                <div>{`$${Number(item.itemPrice * item.quantity)}`}</div>
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
    <CheckoutDiv isDarkMode={isDarkMode} style={{ flexDirection: 'column' }}>
      <Wrapper isDarkMode={isDarkMode}><img id="app-logo" src={Logo} alt="TechStyles" /></Wrapper>
      <div id="checkout-container">
        <div id="checkout-content">
          <div id="shopping-cart-title">Shopping Cart</div>
          <div>{`[${totalQuantity} items]`}</div>
          {cart.length > 0 ? renderCart() : <div>Your cart is empty</div>}
        </div>
        <div id="checkout-btn">
          <button id="actual-checkout-btn" type="button">Proceed to checkout</button>
          {cart.length > 0 && <div style={{ padding: '1em 0 1em 0' }}>{`Subtotal (${totalQuantity}): $${totalPrice}.00`}</div>}
          <div id="order-summary">
            <div style={{ fontFamily: 'Work Sans, sans-serif', fontSize: '18px' }}>ORDER SUMMARY</div>

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

            <div id="summary-price">
              <div>
                Total Price
              </div>
              <div>
                {`$${totalPrice + 6.99}`}
              </div>
            </div>

            <div id="paypal">
              {`Pay in 4-interest free payments of $${((totalPrice + 6.99) / 4).toFixed(2)} with PayPal`}
            </div>

          </div>
        </div>
      </div>
    </CheckoutDiv>
  );
};

export default Checkout;
