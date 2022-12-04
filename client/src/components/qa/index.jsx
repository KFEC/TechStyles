import React from 'react';
import { Div } from '../../lib/styledComponents';

import QuestionSearch from './components/QuestionSearch.jsx';
import QuestionList from './components/QuestionList.jsx';

const QA = () => {
  return (
    <Div>
      I am QA
      <QuestionSearch />
      <QuestionList />
    </Div>
  );
};


export default QA;