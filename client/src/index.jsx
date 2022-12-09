import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './components/App.jsx';
import Checkout from './pages/Checkout.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import NavBar from './NavBar.jsx';
import './assets/styles.css';

const container = document.createElement('div');
const root = createRoot(container);
document.body.appendChild(container);

root.render(
  <Provider store={store}>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/checkout/*" element={<Checkout />} />
        <Route path="/contact/*" element={<Contact />} />
      </Routes>
    </Router>
  </Provider>,
);