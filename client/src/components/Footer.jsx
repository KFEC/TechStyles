import React from 'react';
import { RiScissors2Fill } from 'react-icons/ri';
import { FaPlaneDeparture, FaTshirt } from 'react-icons/fa';
import { Div } from '../lib/styledComponents';

const Footer = () => {
  return (
    <Div style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
      <div id="footer-container">
        <div id="footer-title">Transparent Pricing</div>
        <p id="footer-content">We publish what it costs us to make every one of our products. There are a lot of costs we cant neatly account for - like design, fittings, wear testing, rent on office and retail space - but we believe you deserve to know what goes into making the products you love.</p>
        <div id="footer-icon-container">
          <div id="icon-price-container">
            <FaTshirt style={{ fontSize: '3em', color: 'rgb(107, 107, 107, 0.30)' }} />
            <p className="icon-description">Materials</p>
            <p className="icon-description">$22.60</p>
          </div>
          <div id="icon-price-container">
            <RiScissors2Fill style={{ fontSize: '3em', color: 'rgb(107, 107, 107, 0.30)' }} />
            <p className="icon-description">Labor</p>
            <p className="icon-description">$12.30</p>
          </div>
          <div id="icon-price-container">
            <FaPlaneDeparture style={{ fontSize: '3em', color: 'rgb(107, 107, 107, 0.30)' }} />
            <p className="icon-description">Transport</p>
            <p className="icon-description">$0.51</p>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Footer;