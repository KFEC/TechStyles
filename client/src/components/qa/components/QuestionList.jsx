import React, { useState } from 'react';
import { Div, Button, Modal } from '../../../lib/styledComponents';

import QuestionEntry from './QuestionEntry.jsx';
import NewQuestion from './NewQuestion.jsx';

const QuestionList = () => {

  const [display, setDisplay] = useState(false);

  return (
    <Div>
      I am QuestionList
      <QuestionEntry />
      <Modal changeDisplay={display}>
        <NewQuestion setDisplay={setDisplay} />
      </Modal>
      <Button onClick={() => setDisplay(true)}>Add a Question</Button>
    </Div>
  );
};


export default QuestionList;