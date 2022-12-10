/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { Div, Button, Modal } from '../../../lib/styledComponents';
import { getData, putData } from '../../../lib/index.js';

import AnswerEntry from './AnswerEntry.jsx';
import NewAnswer from './NewAnswer.jsx';
import '../assets/styles.css';

const QuestionEntry = ({
  question, update, setUpdate, fetch, setFetch, pName,
}) => {

  const [display, setDisplay] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [helpful, setHelpful] = useState(false);
  const [update2, setUpdate2] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const getAnswers = (id) => {
    getData(`/qa/questions/${id}/answers`, { count: 100 })
      .then(res => {
        setAnswers(res.data.results);
        setFetch(!fetch);
      });
  };

  const helpfulQuestion = () => {
    if (!helpful) {
      putData(`/qa/questions/${question.question_id}/helpful`);
      setHelpful(true);
      setUpdate(!update);
    }
  };

  const reportQuestion = (id) => {
    putData(`/qa/questions/${id}/report`);
  };

  useEffect(() => {
    getAnswers(question.question_id);
  }, [question.question_id, update2]);

  return (
    <Div style={{ border: 'none', backgroundColor: 'rgb(252, 234, 208)' }}>
      <div style={{ display: 'flex' }}>
        <span style={{ fontWeight: 'bold', fontSize: 'large', marginRight: 'auto' }}>
          Q:
          {question.question_body}
        </span>
        <span style={{ marginLeft: 'auto', order: '2' }}>
          Helpful?
          {' '}
          <button type="button" className="button-link" onClick={helpfulQuestion}>
            Yes
          </button>
          {` (${question.question_helpfulness}) |`}
          <button type="button" className="button-link" onClick={() => setDisplay(true)}>Add Answer</button>
        </span>
      </div>
      <div className="AList">
        {answers.length > 0
          ? !collapse
            ? answers.slice(0, 2).map(answer => (
              <AnswerEntry
                key={answer.answer_id}
                answer={answer}
                setUpdate2={setUpdate2}
                update2={update2}
              />
            ))
            : answers.map(answer => (
              <AnswerEntry
                key={answer.answer_id}
                answer={answer}
                setUpdate2={setUpdate2}
                update2={update2}
              />
            ))
          : <div>No Answers Available</div>}
        {answers.length > 2
          ? !collapse
            ? <Button onClick={() => { setCollapse(true); }}>See more answers</Button>
            : <Button onClick={() => { setCollapse(false); }}>Collapse answers</Button>
          : null}
        <Modal changeDisplay={display}>
          <NewAnswer
            pName={pName}
            qBody={question.question_body}
            id={question.question_id}
            setDisplay={setDisplay}
            setUpdate2={setUpdate2}
            update2={update2}
          />
        </Modal>
      </div>
    </Div>
  );
};


export default QuestionEntry;