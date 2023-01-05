import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiScissors2Fill } from 'react-icons/ri';
import { FaPlaneDeparture, FaTshirt } from 'react-icons/fa';
import { Div } from '../lib/styledComponents';

const Footer = () => {
  const { productInfo } = useSelector((state) => state.product);
  const { isDarkMode } = useSelector((state) => state.productPage);

  const iconStyle = {
    fontSize: '3em',
    color: isDarkMode ? 'rgb(199, 199, 199, 0.8)' : 'rgb(107, 107, 107, 0.30)',
  };

  return (
    <Div style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
      <div id="footer-container">
        <div id="footer-title">Transparent Pricing</div>
        <p id="footer-content">
          There are a lot of costs - like design, fittings, wear testing, retail
          space, and supplies - that go into making our products. We believe you
          deserve to know what goes into the products you love.
        </p>
        <div id="footer-icon-container">
          <div id="icon-price-container">
            <FaTshirt style={iconStyle} />
            <p className="icon-description">Materials</p>
            <p className="icon-description">
              {`$${(productInfo.default_price / 6.3).toFixed(2)}`}
            </p>
          </div>
          <div id="icon-price-container">
            <RiScissors2Fill style={iconStyle} />
            <p className="icon-description">Labor</p>
            <p className="icon-description">
              {`$${(productInfo.default_price / 12.3).toFixed(2)}`}
            </p>
          </div>
          <div id="icon-price-container">
            <FaPlaneDeparture style={iconStyle} />
            <p className="icon-description">Transport</p>
            <p className="icon-description">$0.87</p>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Footer;
