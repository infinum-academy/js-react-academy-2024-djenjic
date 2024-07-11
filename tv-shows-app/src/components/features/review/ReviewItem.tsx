// src/components/features/review/ReviewItem.tsx
import { Box, Avatar, Text, Button } from "@chakra-ui/react";
import { IReview } from "@/typings/show";

interface IReviewItemProps {
  review: IReview;
  onDeleteReview: (review: IReview) => void;
}

export const ReviewItem = ({ review, onDeleteReview }: IReviewItemProps) => {
  const { email, avatar, rating, text } = review;
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" mb="4">
      <Avatar src={avatar || "https://via.placeholder.com/150"} />
      <Text fontWeight="bold">{email}</Text>
      <Text>Rating: {rating} / 5</Text>
      <Text>{text}</Text>
      <Button onClick={() => onDeleteReview(review)} colorScheme="red">
        Delete
      </Button>
    </Box>
  );
};
