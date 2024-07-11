'use client';
import { Fragment, useEffect, useState } from 'react';
import  ShowDetails  from './ShowDetails';
import  ShowReviewSection  from './ShowReviewSection';
import { Spinner } from '@chakra-ui/react';
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
    }, []);
  
    const saveToLocalStorage = (ReviewList: IReview[]) => {
      localStorage.setItem('reviews', JSON.stringify(ReviewList));
    };
  
    const loadFromLocalStorage = () => {
      const reviewsListString = localStorage.getItem('reviews');
      if (!reviewsListString) {
        return ReviewList;
      }
      return JSON.parse(reviewsListString);
    };
  
    const onAddReview = (review: IReview) => {
      const newList = [...reviewList, review];
      setReviewList(newList);
      saveToLocalStorage(newList);
    };
  
    const onDeleteReview = (reviewToRemove: IReview) => {
      const newList = reviewList.filter((review) => review !== reviewToRemove)
      setReviewList(newList);
      saveToLocalStorage(newList);
    };
  
    return (
      <Fragment>
       <ShowDetails show={defaultShow} />
       <ShowReviewSection />
      </Fragment>
    );
  };