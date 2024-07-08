// src/components/features/review/ReviewList.tsx
import { Box } from "@chakra-ui/react";
import ReviewItem from "./ReviewItem";

interface Review {
  email: string;
  avatarUrl?: string;
  rating: number;
  comment: string;
}

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
    <Box>
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </Box>
  );
};

export default ReviewList;
