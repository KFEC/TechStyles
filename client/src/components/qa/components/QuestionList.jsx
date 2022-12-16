import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Div, Button } from '../../../lib/styledComponents';
import { FormModal } from '../lib/qaStyledComponents';

import QuestionEntry from './QuestionEntry.jsx';
import NewQuestion from './NewQuestion.jsx';

const QuestionList = ({
  pName, id, setUpdate, update, questions,
}) => {

  const { isDarkMode } = useSelector((state) => state.productPage);

  const [display, setDisplay] = useState(false);
  const [currQuestions, setCurrQuestions] = useState([]);
  const [questionCounter, setQuestionCounter] = useState(2);

  const loadQuestions = () => {
    setCurrQuestions(questions.slice(0, questionCounter + 2));
    setQuestionCounter(questionCounter + 2);
  };

  useEffect(() => {
    setCurrQuestions(questions.slice(0, questionCounter));
  }, [questions, update]);

  const [fetch, setFetch] = useState(false);
  const updateScroll = () => {
    const el = document.getElementById('qcontainer');
    el.scrollTop = el.scrollHeight;
  };
  useEffect(() => {
    updateScroll();
  }, [fetch]);

  return (
    <div
      id="qcontainer"
      className="QList"
      data-testid="test QuestionList"
    >
      {currQuestions.length
        ? currQuestions.map(question => {
          return (
            <QuestionEntry
              key={question.question_id}
              question={question}
              setUpdate={setUpdate}
              update={update}
              setFetch={setFetch}
              fetch={fetch}
              pName={pName}
            />
          );
        })
        : null}
      <FormModal isDarkMode={isDarkMode} changeDisplay={display} style={{ height: 'auto' }}>
        <NewQuestion
          pName={pName}
          id={id}
          setDisplay={setDisplay}
          setUpdate={setUpdate}
          update={update}
        />
      </FormModal>
      <div className="QuestionButton">
        {(currQuestions.length !== questions.length)
          && <Button isDarkMode={isDarkMode} onClick={loadQuestions}>More Questions</Button>}
        <Button isDarkMode={isDarkMode} onClick={() => setDisplay(true)}>Add a Question</Button>
      </div>
    </div>
  );
};


export default QuestionList;