import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppDiv, Wrapper, Div, Button,
} from '../lib/styledComponents';
import Logo from '../assets/fec-logo.png';

const Contact = () => {
  const { isDarkMode } = useSelector((state) => state.productPage);
  return (
    <div>
      <Wrapper isDarkMode={isDarkMode}><img id="app-logo" src={Logo} alt="TechStyles" /></Wrapper>
      <div className="contact-page" style={{ marginLeft: '10px', color: isDarkMode ? 'white' : 'black' }}>
        <div style={{ marginBottom: '15px', marginTop: '20px', fontSize: '40px' }}>Contact Us</div>
        <p style={{ lineHeight: '2' }}>
          Have questions about your order, shipping, us or our products?
        </p>
        <p style={{ lineHeight: '2' }}>Here&apos;s how to reach us:</p>
        <div className="opening-hours" style={{ lineHeight: '2', marginBottom: '20px' }}>
          <div>Monday - Friday</div>
          <p>Live Chat: 10am - 3pm PT</p>
          <p>Email: 8am - 6pm PT</p>
          <div>Saturday</div>
          <p>Live Chat: 10am - 3pm PT</p>
          <p>Email: 10am - 3pm PT</p>
        </div>
        <div className="links" style={{ lineHeight: '2' }}>
          <div style={{ display: 'flex' }}>
            <p style={{ textDecoration: 'underline' }}>
              Live chat:
            </p>
            <span style={{ textDecoration: 'none', paddingLeft: '5px' }}> Chat to us here.</span>
          </div>
          <div style={{ display: 'flex' }}>
            <p style={{ textDecoration: 'underline' }}>
              Email:
            </p>
            <span style={{ textDecoration: 'none', paddingLeft: '5px' }}>Send us an email.</span>
          </div>
          <div style={{ display: 'flex' }}>
            <p style={{ textDecoration: 'underline' }}>
              Press Inquiries:
            </p>
            <span style={{ textDecoration: 'none', paddingLeft: '5px' }}>
              {`If you have any questions for our public
              relations team, email us at media@techstyles.com.`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;