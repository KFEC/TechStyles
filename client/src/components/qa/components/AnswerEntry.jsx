import React, { useState } from 'react';
import { Div } from '../../../lib/styledComponents';
import { getData, putData } from '../../../lib/index.js';

const AnswerEntry = ({ answer, setUpdate2, update2 }) => {

  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const date = new Date(answer.date);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const helpfulAnswer = () => {
    if (!helpful) {
      putData(`/qa/answers/${answer.answer_id}/helpful`).then(() => {
        setUpdate2(!update2);
        setHelpful(true);
      });
    }
  };

  const reportAnswer = () => {
    if (!reported) {
      putData(`/qa/answers/${answer.answer_id}/report`).then(() => {
        setReported(true);
      });
    }
  };

  return (
    <Div style={{ border: 'none', borderBottom: '1px solid grey', backgroundColor: '#fff' }}>
      <span style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: '500', fontSize: '16px' }}>A: </span>
      {answer.body}
      <div style={{
        color: '#3A3B3C', fontFamily: 'Noto Sans, sans-serif', fontWeight: '400', fontSize: '14px',
      }}
      >
        by
        {` ${answer.answerer_name},`}
        {` ${date.toLocaleDateString('en-US', dateOptions)} |`}
        {' Helpful? '}
        <button type="button" className="button-link helpful" onClick={helpfulAnswer}>
          Yes
        </button>
        {` (${answer.helpfulness}) |`}
        {!reported
          ? (
            <button type="button" className="button-link report" onClick={reportAnswer}>
              Report
            </button>
          )
          : <span>Reported</span>}
      </div>
    </Div>
  );
};


export default AnswerEntry;