import React, { useState, useEffect } from 'react';
import { Div } from '../../lib/styledComponents';
import { getData } from '../../lib/index.js';

import QuestionSearch from './components/QuestionSearch.jsx';
import QuestionList from './components/QuestionList.jsx';

const QA = () => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getData('/qa/questions', {
      product_id: 40347,
      count: 40,
    })
      .then((result) => setQuestions(result.data.results));
  }, []);

  return (
    <Div>
      I am QA
      <QuestionSearch />
      <QuestionList questions={questions} />
    </Div>
  );
};


export default QA;