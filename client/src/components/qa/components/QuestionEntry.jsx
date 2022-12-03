import React from 'react';
import { Div } from '../../../lib/styledComponents';


import AnswerEntry from './AnswerEntry.jsx';
import NewAnswer from './NewAnswer.jsx';

const QuestionEntry = () => {
  return (
    <Div>
      I am QuestionEntry
      <AnswerEntry />
      <NewAnswer />
    </Div>
  );
};


export default QuestionEntry;