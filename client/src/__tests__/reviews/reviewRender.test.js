import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingBreakdown from '../../components/reviews/components/ratingbreakdown/RatingBreakdown.jsx';

test('Render Rating Breakdown', () => {
  render(<RatingBreakdown />);
  const rb = screen.getByTestId('rating-breakdown');
  expect(rb).toBeInTheDocument();
});