import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ShowCard } from './ShowCard';
import { IShow } from '../../../typings/show';

// Nikako nece da proradi
const mockShow = {
  id: "1",
  title: 'Test Show',
  average_rating: 4.5,
  image_url: 'https://via.placeholder.com/200x100',
  description:"blalbvalbalbv"
};

describe('ShowCard', () => {
  it('should render image element with provided URL', () => {
    render(<ShowCard show={mockShow} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockShow.image_url);
  });

  it('should render show title', () => {
    render(<ShowCard show={mockShow} />);
    expect(screen.getByText(mockShow.title)).toBeInTheDocument();
  });

  it('should render correct average rating', () => {
    render(<ShowCard show={mockShow} />);
    const rating = screen.getByText(`${mockShow.average_rating} / 5`);
    expect(rating).toBeInTheDocument();
  });
});
