// src/components/features/shows/ShowReviewSection.tsx
import { useState, useEffect } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import {ReviewList} from "../review/ReviewList";
import {ReviewForm} from "../review/ReviewForm";
import { IReview } from "@/typings/show";

interface IShowReviewSectionProps {
  reviewsList: IReview[];
  addShowReview: (review: IReview) => void;
  onDeleteReview: (review: IReview) => void;
}

export const ShowReviewSection = ({ reviewsList,
  addShowReview,
  onDeleteReview,
}: IShowReviewSectionProps) => {
  return (
    <Flex marginBottom={3} gap={3} direction="column">
      <ReviewForm addShowReview={addShowReview} />
      {reviewsList?.length <= 0 && <Spinner marginBottom={5} />}
      {reviewsList?.length > 0 && (
        <ReviewList 
        reviewsList={reviewsList} 
        onDeleteReview={onDeleteReview}
      />
      )}
    </Flex>
  );
};


