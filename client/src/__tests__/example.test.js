import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App.jsx';

test('test', () => {
  render(<App />);
  const app = screen.getByTestId('app-1');
  expect(app).toBeInTheDocument();
  expect(app).toHaveTextContent('Add To Cart');
});
