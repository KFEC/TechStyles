import React from 'react';
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react';
import QA from '../../components/qa/index.jsx';
import QuestionEntry from '../../components/qa/components/QuestionEntry.jsx';
import QuestionList from '../../components/qa/components/QuestionList.jsx';
import QuestionSearch from '../../components/qa/components/QuestionSearch.jsx';
import AnswerEntry from '../../components/qa/components/AnswerEntry.jsx';
import NewAnswer from '../../components/qa/components/NewAnswer.jsx';
import NewQuestion from '../../components/qa/components/NewQuestion.jsx';
import configureStore from 'redux-mock-store'
import productReducer from '../../reducers/productSlice';
import productPageReducer from '../../reducers/productPageSlice';

import store from '../../store/store'

describe('QA Render Breakdown', () => {
  // const initialState = {
  //   productPage: {
  //     isDarkMode: true,
  //   },
  //   product: {
  //     productId: '40348',
  //     productReviews: {
  //       allReviews: [],
  //       stars: 0,
  //       recommended: 0,
  //       totalRatings: 0,
  //       totalReviews: 0,
  //     },
  //     productInfo: {},
  //     productMeta: {},
  //     productStyles: {},
  //     productQuestions: [],
  //     relatedProducts: [],
  //   },
  // }
  const mockStore = configureStore();
  // let store,wrapper;

  test('Render QA component', () => {
    // store = mockStore(initialState)
    render(<Provider store={store}><QA /></Provider>);
    expect(screen.getByTestId('test QA')).toBeInTheDocument();
  })

  test('Render QuestionEntry component', () => {
    // store = mockStore(initialState)
    const question = {
      "question_id": 37,
      "question_body": "Why is this product cheaper here than other sites?",
      "question_date": "2018-10-18T00:00:00.000Z",
      "asker_name": "williamsmith",
      "question_helpfulness": 4,
      "reported": false,
      "answers": {
        68: {
          "id": 68,
          "body": "We are selling it here without any markup from the middleman!",
          "date": "2018-08-18T00:00:00.000Z",
          "answerer_name": "Seller",
          "helpfulness": 4,
          "photos": []
          // ...
        }
      }
    }
    render(<Provider store={store}><QuestionEntry question={question}/></Provider>);
    expect(screen.getByTestId('test QuestionEntry')).toBeInTheDocument();
  })

  test('Render QuestionList component', () => {
    // store = mockStore(initialState)
    render(<Provider store={store}><QuestionList questions={[]}/></Provider>);
    expect(screen.getByTestId('test QuestionList')).toBeInTheDocument();
  });

  test('Render QuestionSearch component', () => {
    // store = mockStore(initialState)
    render(<Provider store={store}><QuestionSearch /></Provider>);
    expect(screen.getByTestId('test QuestionSearch')).toBeInTheDocument();
  })

  test('Render AnswerEntry component', () => {
    // store = mockStore(initialState)
    const answer = {
      "answer_id": 8,
      "body": "What a great question!",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 8,
      "photos": [],
    }
    render(<Provider store={store}><AnswerEntry answer={answer}/></Provider>);
    expect(screen.getByTestId('test AnswerEntry')).toBeInTheDocument();
  })

  test('Render NewAnswer component', () => {
    // store = mockStore(initialState)
    render(<Provider store={store}><NewAnswer /></Provider>);
    expect(screen.getByTestId('test NewAnswer')).toBeInTheDocument();
  })

  test('Render NewQuestion component', () => {
    // store = mockStore(initialState)
    render(<Provider store={store}><NewQuestion /></Provider>);
    expect(screen.getByTestId('test NewQuestion')).toBeInTheDocument();
  })

})

