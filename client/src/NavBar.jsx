import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { IoMoonOutline } from 'react-icons/io5';
import { updateIsDarkMode } from './reducers/productPageSlice';

const NavBar = () => {

  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.productPage);

  const settingsClick = () => {
    dispatch(updateIsDarkMode());
  };

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
            <NavLink className="link-text" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-li">
            <NavLink className="link-text" to="/checkout"><BsCart3 /></NavLink>
          </li>
          <li className="nav-li">
            <NavLink className="link-text" to="/" onClick={settingsClick}><IoMoonOutline /></NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;