import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedProductList from '../../components/related-products/components/RelatedProductList.jsx';

test('Render Product Card', () => {
  render(<RelatedProductList />);
  const rb = screen.getByTestId('RelatedProductsList');
  expect(rb).toBeInTheDocument();
});``