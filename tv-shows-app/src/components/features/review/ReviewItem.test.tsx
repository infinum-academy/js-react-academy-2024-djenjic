import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { ReviewItem } from './ReviewItem';
import { IReview } from '@/typings/show';

// ne radi?
const mockReview: IReview = {
  email: 'test@example.com',
  avatar: 'https://via.placeholder.com/150',
  rating: 4.5,
  text: 'This is a test review',
};

describe('ReviewItem', () => {
  it('should render the correct user email', () => {
    render(<ReviewItem review={mockReview} onDeleteReview={() => {}} />);
    expect(screen.getByText(mockReview.email)).toBeInTheDocument();
  });

  it('should render the correct rating', () => {
    render(<ReviewItem review={mockReview} onDeleteReview={() => {}} />);
    expect(screen.getByText(`Rating: ${mockReview.rating} / 5`)).toBeInTheDocument();
  });

  it('should render the correct review comment', () => {
    render(<ReviewItem review={mockReview} onDeleteReview={() => {}} />);
    expect(screen.getByText(mockReview.text)).toBeInTheDocument();
  });

  it('should render the delete button', () => {
    render(<ReviewItem review={mockReview} onDeleteReview={() => {}} />);
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });

  it('should call onDeleteReview callback when delete button is clicked', () => {
    const mockOnDeleteReview = jest.fn();
    render(<ReviewItem review={mockReview} onDeleteReview={mockOnDeleteReview} />);

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    userEvent.click(deleteButton);

    expect(mockOnDeleteReview).toHaveBeenCalledTimes(1);
    expect(mockOnDeleteReview).toHaveBeenCalledWith(mockReview);
  });
});
