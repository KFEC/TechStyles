import React from 'react';
import { Div } from '../../../lib/styledComponents';

const AnswerEntry = ({ answer }) => {

  const date = new Date(answer.date);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <Div>
      <span style={{ fontWeight: 'bold', fontSize: 'large' }}>A:</span>
      {answer.body}
      <div>
        by
        {` ${answer.answerer_name},`}
        {` ${date.toLocaleDateString('en-US', dateOptions)} |`}
        {' Helpful? '}
        <button type="button" className="button-link">
          Yes
        </button>
        {` (${answer.helpfulness}) |`}
        <button type="button" className="button-link">
          Report
        </button>
      </div>
    </Div>
  );
};


export default AnswerEntry;