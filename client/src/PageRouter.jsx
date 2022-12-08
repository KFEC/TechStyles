import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import App from './components/App.jsx';
import Checkout from './pages/Checkout.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';

const PageRouter = () => {
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
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/checkout/*" element={<Checkout />} />
        <Route path="/contact/*" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default PageRouter;