import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './components/App.jsx';
import PageRouter from './PageRouter.jsx';
import './assets/styles.css';

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Router>
      <PageRouter />
    </Router>
  </Provider>,
);