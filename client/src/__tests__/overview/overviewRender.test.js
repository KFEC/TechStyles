import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductInfo from '../../components/overview/components/ProductInfo.jsx';
import Overview from '../../components/overview/index.jsx'
import ImageGallery from '../../components/overview/components/ImageGallery.jsx';


test('Render overview component', () => {
  render(<Overview />);
  const rp = screen.getByTestId('overview');
  expect(rp).toBeInTheDocument();
});

test('Render image gallery', () => {
  render(<ImageGallery />);
  const rp = screen.getByTestId('image-gallery');
  expect(rp).toBeInTheDocument();
});

test('Render product info data', () => {
  render(<ProductInfo />);
  const rp = screen.getByTestId('product-info');
  expect(rp).toBeInTheDocument();
});