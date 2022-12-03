import React, { useState } from 'react';
import { Div, Button, Modal } from '../../../lib/styledComponents';


import AnswerEntry from './AnswerEntry.jsx';
import NewAnswer from './NewAnswer.jsx';

const QuestionEntry = () => {

  const [display, setDisplay] = useState(false);

  return (
    <Div>
      I am QuestionEntry
      <Button onClick={() => setDisplay(true)}>Add Answer</Button>
      <AnswerEntry />
      <Modal changeDisplay={display}>
        <NewAnswer setDisplay={setDisplay} />
      </Modal>
    </Div>
  );
};


export default QuestionEntry;