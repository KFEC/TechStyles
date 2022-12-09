import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="page-nav">
        <ul className="nav-ul">
          <li className="nav-li">
            <NavLink className="link-text" to="/">Product Page</NavLink>
          </li>
          <li className="nav-li">
            <NavLink className="link-text" to="/about">About</NavLink>
          </li>
          <li className="nav-li">
            <NavLink className="link-text" to="/checkout">Checkout</NavLink>
          </li>
          <li className="nav-li">
            <NavLink className="link-text" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;