import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Div, HelpfulButton, ReportButton } from '../../../lib/styledComponents';
import { getData, putData } from '../../../lib/index.js';

const AnswerEntry = ({ answer, setUpdate2, update2 }) => {

  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);
  const { isDarkMode } = useSelector((state) => state.productPage);

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
    <Div data-testid="test AnswerEntry" style={{ border: 'none', borderBottom: '1px solid grey' }}>
      <span style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: '500', fontSize: '16px' }}>A: </span>
      {answer.body}
      <div style={{
        /* color: '#3A3B3C', */ fontFamily: 'Noto Sans, sans-serif', fontWeight: '400', fontSize: '14px',
      }}
      >
        by
        {` ${answer.answerer_name},`}
        {` ${date.toLocaleDateString('en-US', dateOptions)} |`}
        {' Helpful? '}
        <HelpfulButton isDarkMode={isDarkMode} onClick={helpfulAnswer}>
          Yes
        </HelpfulButton>
        {` (${answer.helpfulness}) |`}
        {!reported
          ? (
            <ReportButton isDarkMode={isDarkMode} onClick={reportAnswer}>
              Report
            </ReportButton>
          )
          : <span>Reported</span>}
      </div>
    </Div>
  );
};


export default AnswerEntry;