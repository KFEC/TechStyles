import React, { useState } from 'react';
import { Div, Button, Modal } from '../../../lib/styledComponents';

import QuestionEntry from './QuestionEntry.jsx';
import NewQuestion from './NewQuestion.jsx';

const QuestionList = ({ questions }) => {

  const [display, setDisplay] = useState(false);

  return (
    <Div>
      I am QuestionList
      {questions.map(question => <QuestionEntry key={question.question_id} question={question} />)}
      <Modal changeDisplay={display}>
        <NewQuestion setDisplay={setDisplay} />
      </Modal>
      <Button>More Questions</Button>
      <Button onClick={() => setDisplay(true)}>Add a Question</Button>
    </Div>
  );
};


export default QuestionList;