import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { IoMoonOutline } from 'react-icons/io5';
import { CgSun } from 'react-icons/cg';
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
        {/* <ul className="nav-ul"> */}

        <div className="link-outer-container">

          <div className="link-inner-container">
            <div className="nav-li">
              <NavLink className="link-text" to="/">Product Page</NavLink>
            </div>
            <div className="nav-li">
              <NavLink className="link-text" to="/about">About</NavLink>
            </div>
            <div className="nav-li">
              <NavLink className="link-text" to="/contact">Contact</NavLink>
            </div>
          </div>


        </div>

        <div className="nav-icon-outer-container">

          <div className="nav-icon-inner-container">

            <div className="nav-li">
              <NavLink className="link-text" to="/checkout"><BsCart3 /></NavLink>
            </div>

            <div className="nav-li">
              <NavLink className="link-text" to="/" onClick={settingsClick}>{isDarkMode ? <CgSun /> : <IoMoonOutline /> }</NavLink>
            </div>

          </div>

        </div>


      </nav>
    </div>
  );
};

export default NavBar;