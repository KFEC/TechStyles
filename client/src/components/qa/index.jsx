import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductQuestions } from '../../actions';
import { Div } from '../../lib/styledComponents';
import { getData } from '../../lib/index.js';

import QuestionSearch from './components/QuestionSearch.jsx';
import QuestionList from './components/QuestionList.jsx';

const QA = () => {

  const { productId, productInfo, productQuestions } = useSelector(state => state.product);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setFilter(productQuestions);
  }, [productQuestions]);

  useEffect(() => {
    dispatch(getProductQuestions({ url: '/qa/questions', params: { product_id: productId, count: 999 } }));
    setFilter(productQuestions);
  }, [update]);

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
    <Div data-testid="test QA">
      <QuestionSearch search={search} />
      <QuestionList
        pName={productInfo.name}
        id={productId}
        setUpdate={setUpdate}
        update={update}
        questions={filter}
      />
    </Div>
  );
};


export default QA;