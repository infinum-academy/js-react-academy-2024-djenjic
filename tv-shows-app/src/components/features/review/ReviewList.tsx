// src/components/features/review/ReviewList.tsx
import { Box } from "@chakra-ui/react";
import {ReviewItem} from "./ReviewItem";
import { IReview } from "@/typings/show";

interface IReviewListProps {
  reviewsList: IReview[];
  onDeleteReview: (review: IReview) => void;
}

export const ReviewList = ({ reviewsList, onDeleteReview }: IReviewListProps) => {
  return (
    <Box>
      {reviewsList.map((review, index) => (
        <ReviewItem key={index} review={review} onDeleteReview={onDeleteReview}/>
      ))}
    </Box>
  );
};
