import React from 'react';
import Overview from './overview/index.jsx';
import RelatedProducts from './related-products/index.jsx';
import QA from './qa/index.jsx';
import Reviews from './reviews/index.jsx';
import { Wrapper, Div } from '../lib/styledComponents';

const App = () => {

  return (
    <Div data-testid="app-1">
      <Wrapper><h1>TechStyles</h1></Wrapper>
      <Overview />
      <RelatedProducts />
      <QA />
      <Reviews />
    </Div>
  );
};

export default App;