import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Div } from '../../lib/styledComponents';
import { getData } from '../../lib/index.js';

import QuestionSearch from './components/QuestionSearch.jsx';
import QuestionList from './components/QuestionList.jsx';

const QA = () => {

  const [filter, setFilter] = useState([]);
  const [update, setUpdate] = useState(false);

  const { productId, productInfo, productQuestions } = useSelector(state => state.product);

  useEffect(() => {
    setFilter(productQuestions);
  }, [productId]);

  // useEffect(() => {
  //   getData('/qa/questions', {
  //     product_id: 40344,
  //     count: 100,
  //   })
  //     .then((result) => {
  //       setQuestions(result.data.results);
  //       setFilter(result.data.results);
  //     });
  // }, [update]);

  const search = (query) => {
    if (query.length < 3) setFilter(productQuestions);
    else {
      const filtered = [];
      productQuestions.forEach((question) => {
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
      <QuestionList
        id={40344}
        setUpdate={setUpdate}
        update={update}
        questions={filter}
      />
    </Div>
  );
};


export default QA;