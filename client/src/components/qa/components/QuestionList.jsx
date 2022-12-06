import React, { useState, useEffect } from 'react';
import { Div, Button, Modal } from '../../../lib/styledComponents';

import QuestionEntry from './QuestionEntry.jsx';
import NewQuestion from './NewQuestion.jsx';

const QuestionList = ({ questions }) => {

  const [display, setDisplay] = useState(false);
  const [currQuestions, setCurrQuestions] = useState([]);
  const [questionCounter, setQuestionCounter] = useState(2);

  const loadQuestions = () => {
    setCurrQuestions(questions.slice(0, questionCounter + 2));
    setQuestionCounter(questionCounter + 2);
  };

  useEffect(() => {
    setCurrQuestions(questions.slice(0, 2));
  }, [questions]);

  return (
    <Div>
      {currQuestions.length
        ? currQuestions.map(question => {
          return <QuestionEntry key={question.question_id} question={question} />;
        })
        : null}
      {}
      <Modal changeDisplay={display}>
        <NewQuestion setDisplay={setDisplay} />
      </Modal>
      {(currQuestions.length !== questions.length)
        && <Button onClick={loadQuestions}>More Questions</Button>}
      <Button onClick={() => setDisplay(true)}>Add a Question</Button>
    </Div>
  );
};


export default QuestionList;