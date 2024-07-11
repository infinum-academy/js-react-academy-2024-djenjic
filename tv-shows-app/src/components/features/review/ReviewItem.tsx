// src/components/features/review/ReviewItem.tsx
import { Box, Avatar, Text } from "@chakra-ui/react";

interface Review {
  email: string;
  avatarUrl?: string;
  rating: number;
  comment: string;
}

interface ReviewItemProps {
  review: Review;
}

const ReviewItem = ({ review }: ReviewItemProps) => {
  const { email, avatarUrl, rating, comment } = review;
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" mb="4">
      <Avatar src={avatarUrl || "https://via.placeholder.com/150"} />
      <Text fontWeight="bold">{email}</Text>
      <Text>Rating: {rating} / 5</Text>
      <Text>{comment}</Text>
    </Box>
  );
};

export default ReviewItem;
