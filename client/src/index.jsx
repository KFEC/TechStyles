import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App.jsx';
import Checkout from './pages/Checkout.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import NavBar from './NavBar.jsx';
import './assets/styles.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/checkout/*" element={<Checkout />} />
        <Route path="/contact/*" element={<Contact />} />
      </Routes>
    </Router>
  </Provider>,
);