import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductInfo from '../../components/overview/components/ProductInfo.jsx';

test('Render Product Info Data', () => {
  render(<ProductInfo />);
  const rp = screen.getByTestId('product-info');
  expect(rp).toBeInTheDocument();
});