// hooks/useReviews.ts
import { useState, useEffect } from 'react';
import { IReview, IShow } from '../typings/show';

export const useReviews = (initialShow: IShow) => {
  const [reviewList, setReviewList] = useState<IReview[]>([]);
  const [show, setShow] = useState(initialShow);

  useEffect(() => {
    const loadedList = loadFromLocalStorage();
    setReviewList(loadedList);
    updateAverageRating(loadedList);
  }, []);

  const saveToLocalStorage = (reviewList: IReview[]) => {
    localStorage.setItem('reviews', JSON.stringify(reviewList));
  };

  const updateAverageRating = (reviewList: IReview[]) => {
    const total = reviewList.reduce((sum, review) => sum + Number(review.rating), 0);
    const average = reviewList.length > 0 ? Math.round((total / reviewList.length) * 10) / 10 : 0;
    setShow(prevShow => ({ ...prevShow, averageRating: average }));
  };

  const loadFromLocalStorage = (): IReview[] => {
    const reviewsListString = localStorage.getItem('reviews');
    return reviewsListString ? JSON.parse(reviewsListString) : [];
  };

  const addShowReview = (review: IReview) => {
    const newList = [...reviewList, review];
    setReviewList(newList);
    saveToLocalStorage(newList);
    updateAverageRating(newList);
  };

  const onDeleteReview = (reviewToRemove: IReview) => {
    const newList = reviewList.filter((review) => review !== reviewToRemove);
    setReviewList(newList);
    saveToLocalStorage(newList);
    updateAverageRating(newList);
  };

  return { reviewList, show, addShowReview, onDeleteReview };
};