import React from 'react';
import { Div } from '../../../lib/styledComponents';

import QuestionEntry from './QuestionEntry.jsx';
import NewQuestion from './NewQuestion.jsx';

const QuestionList = () => {
  return (
    <Div>
      I am QuestionList
      <QuestionEntry />
      <NewQuestion />
    </Div>
  );
};


export default QuestionList;