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
  const [currAnswers, setCurrAnswers] = useState([]);

  const loadAnswers = () => {
    if (currAnswers.length === 2) setCurrAnswers(answers);
    else setCurrAnswers(answers.slice(0, 2));
  };

  const getAnswers = (id) => {
    getData(`/qa/questions/${id}/answers`, { count: 10 })
      .then(res => {
        setAnswers(res.data.results);
        setCurrAnswers(res.data.results.slice(0, 2));
      });
  };

  const helpfulQuestion = (id) => {
    putData(`/qa/questions/${id}/helpful`);
  };

  const reportQuestion = (id) => {
    putData(`/qa/questions/${id}/report`);
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
        {currAnswers.length !== 0
          ? (
            <div>
              {currAnswers.map(answer => (<AnswerEntry key={answer.id} answer={answer} />))}
            </div>
          )
          : <div>No Answers Available</div>}
        {(answers.length > 2 && currAnswers.length === 2)
          ? <Button onClick={loadAnswers}>See more answers</Button>
          : currAnswers.length === answers.length
            ? <Button onClick={loadAnswers}>Collapse answers</Button>
            : null}
        <Modal changeDisplay={display}>
          <NewAnswer setDisplay={setDisplay} />
        </Modal>
      </div>
    </Div>
  );
};


export default QuestionEntry;