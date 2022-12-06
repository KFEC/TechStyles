import React, { useState, useEffect } from 'react';
import { Div } from '../../lib/styledComponents';
import { getData } from '../../lib/index.js';

import QuestionSearch from './components/QuestionSearch.jsx';
import QuestionList from './components/QuestionList.jsx';

const QA = () => {

  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState(questions);

  useEffect(() => {
    getData('/qa/questions', {
      product_id: 40344,
      count: 40,
    })
      .then((result) => {
        setQuestions(result.data.results);
        setFilter(result.data.results);
      });
  }, []);

  const search = (query) => {
    if (query.length < 3) setFilter(questions);
    else {
      const filtered = [];
      questions.forEach((question) => {
        if (question.question_body.toLowerCase().includes(query.toLowerCase())) {
          filtered.push(question);
        }
      });
      setFilter(filtered);
    }
  };

  return (
    <Div>
      I am QA
      <QuestionSearch search={search} />
      <QuestionList questions={filter} />
    </Div>
  );
};


export default QA;