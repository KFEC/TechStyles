import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionList from '../../components/qa/components/QuestionList.jsx';

test('QA Render Breakdown', () => {
  render(<QuestionList questions={[]}/>);
  expect(screen.getByTestId('test QuestionList')).toBeInTheDocument();
});