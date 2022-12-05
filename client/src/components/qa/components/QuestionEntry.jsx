import React, { useState, useEffect } from 'react';
import { Div, Button, Modal } from '../../../lib/styledComponents';
import { getData, putData } from '../../../lib/index.js';

import AnswerEntry from './AnswerEntry.jsx';
import NewAnswer from './NewAnswer.jsx';
import '../assets/styles.css';

const QuestionEntry = ({ question }) => {

  const [display, setDisplay] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [render, setRender] = useState(false);
  const [pageAnswer, setPageAnswer] = useState(2);

  const currentAnswers = answers.slice(0, pageAnswer);

  const loadAnswers = () => {
    setPageAnswer(pageAnswer + 2);
  };

  const getAnswers = (id) => {
    getData(`/qa/questions/${id}/answers`, { count: 10 })
      .then(res => setAnswers(res.data.results));
  };

  const helpfulQuestion = (id) => {
    putData(`/qa/questions/${id}/helpful`)
      .then(() => setRender(!render));
  };

  useEffect(() => {
    getAnswers(question.question_id);
  }, [render]);

  return (
    <Div>
      <div style={{ display: 'flex' }}>
        <span style={{ fontWeight: 'bold', fontSize: 'large', marginRight: 'auto' }}>
          Q:
          {question.question_body}
        </span>
        <span style={{ marginLeft: 'auto', order: '2' }}>
          Helpful?
          {String.fromCharCode(32)}
          <button type="button" className="button-link">
            Yes
          </button>
          {` (${question.question_helpfulness}) |`}
          <button type="button" className="button-link" onClick={() => setDisplay(true)}>Add Answer</button>
        </span>
      </div>
      <div>
        <span style={{ fontWeight: 'bold', fontSize: 'large' }}>A:</span>
        {currentAnswers.length !== 0
          ? (
            <div>
              {currentAnswers.map(answer => (<AnswerEntry key={answer.id} answer={answer} />))}
              <Button>More Answers</Button>
            </div>
          )
          : <div>No Answers Available</div>}
        <Modal changeDisplay={display}>
          <NewAnswer setDisplay={setDisplay} />
        </Modal>
      </div>
    </Div>
  );
};


export default QuestionEntry;