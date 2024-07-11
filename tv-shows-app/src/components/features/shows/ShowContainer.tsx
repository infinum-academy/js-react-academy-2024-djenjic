'use client';
import { useEffect, useState } from 'react';
import  {ShowDetails}  from './ShowDetails';
import  {ShowReviewSection}  from './ShowReviewSection';
import { Spinner, Container } from '@chakra-ui/react';
import {IReview} from '../../../typings/show';
import {IShow} from '../../../typings/show';

const defaultShow: IShow = {
    title: "Brooklyn Nine-Nine",
    description: "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
    averageRating: 0,
    imageUrl: "/images/Brooklyn-Nine-Nine.jpg"
};

let ReviewList: Array<IReview> = [];

  export const ShowContainer = () => {
    const [reviewList, setReviewList] = useState(ReviewList);
  
    useEffect(() => {
      const loadedList = loadFromLocalStorage();
      setReviewList(loadedList);
      updateAverageRating(loadedList);
    }, []);
  
    const saveToLocalStorage = (ReviewList: IReview[]) => {
      localStorage.setItem('reviews', JSON.stringify(ReviewList));
    };

    const updateAverageRating = (ReviewList: Array<IReview>) => {
      const total = ReviewList.reduce((sum, review) => sum + Number(review.rating), 0);
      const average = (total / ReviewList.length).toFixed(1);
      defaultShow.averageRating = Math.round((total / ReviewList.length) * 10) / 10;
    }
  
    const loadFromLocalStorage = () => {
      const reviewsListString = localStorage.getItem('reviews');
      if (!reviewsListString) {
        return ReviewList;
      }
      return JSON.parse(reviewsListString);
    };
  
    const addShowReview = (review: IReview) => {
      const newList = [...reviewList, review];
      setReviewList(newList);
      saveToLocalStorage(newList);
      updateAverageRating(newList);
    };
  
    const onDeleteReview = (reviewToRemove: IReview) => {
      const newList = reviewList.filter((review) => review !== reviewToRemove)
      setReviewList(newList);
      saveToLocalStorage(newList);
      updateAverageRating(newList);
    };
  
    return (
      <Container>
       <ShowDetails show={defaultShow} />
       <ShowReviewSection 
          addShowReview={addShowReview}
          onDeleteReview={onDeleteReview}
          reviewsList={reviewList}
       />
      </Container>
    );
  };