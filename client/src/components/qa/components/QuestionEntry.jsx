/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { Div, Button, Modal } from '../../../lib/styledComponents';
import { getData, putData } from '../../../lib/index.js';

import AnswerEntry from './AnswerEntry.jsx';
import NewAnswer from './NewAnswer.jsx';
import '../assets/styles.css';

const QuestionEntry = ({ question }) => {

  const [display, setDisplay] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [currAnswers, setCurrAnswers] = useState([]);
  const [helpful, setHelpful] = useState(false);

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

  const helpfulQuestion = () => {
    if (!helpful) {
      putData(`/qa/questions/${question.question_id}/helpful`);
      setHelpful(true);
    }
  };

  const reportQuestion = (id) => {
    putData(`/qa/questions/${id}/report`);
  };

  useEffect(() => {
    getAnswers(question.question_id);
  }, [question.question_id]);

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
          <button type="button" className="button-link" onClick={helpfulQuestion}>
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
        {currAnswers.length !== answers.length
          ? <Button onClick={loadAnswers}>See more answers</Button>
          : answers.length > 0
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